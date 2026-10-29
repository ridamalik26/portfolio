// Usage: node scripts/cutout-avatar.mjs <source-image> [output=public/avatar.png]
// Removes the white background (flood fill from the edges so white inside the
// illustration is kept), feathers the edge and trims to the figure.
import sharp from "sharp";

const [src, out = "public/avatar.png"] = process.argv.slice(2);
if (!src) {
  console.error("Usage: node scripts/cutout-avatar.mjs <source-image> [output]");
  process.exit(1);
}

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width: w, height: h } = info;

const isBg = (i) => data[i] > 232 && data[i + 1] > 232 && data[i + 2] > 232;
const seen = new Uint8Array(w * h);
const queue = [];
const push = (x, y) => {
  const p = y * w + x;
  if (seen[p] || !isBg(p * 4)) return;
  seen[p] = 1;
  queue.push(p);
};
for (let x = 0; x < w; x++) {
  push(x, 0);
  push(x, h - 1);
}
for (let y = 0; y < h; y++) {
  push(0, y);
  push(w - 1, y);
}
for (let q = 0; q < queue.length; q++) {
  const p = queue[q];
  const x = p % w;
  const y = (p - x) / w;
  if (x > 0) push(x - 1, y);
  if (x < w - 1) push(x + 1, y);
  if (y > 0) push(x, y - 1);
  if (y < h - 1) push(x, y + 1);
}

const alpha = Buffer.alloc(w * h);
for (let p = 0; p < w * h; p++) alpha[p] = seen[p] ? 0 : 255;
// Soften the cut edge slightly to avoid a white halo.
const soft = await sharp(alpha, { raw: { width: w, height: h, channels: 1 } })
  .blur(0.8)
  .extractChannel(0)
  .raw()
  .toBuffer();

const rgba = Buffer.alloc(w * h * 4);
for (let p = 0; p < w * h; p++) {
  rgba[p * 4] = data[p * 4];
  rgba[p * 4 + 1] = data[p * 4 + 1];
  rgba[p * 4 + 2] = data[p * 4 + 2];
  rgba[p * 4 + 3] = soft[p];
}

let x0 = w, y0 = h, x1 = 0, y1 = 0;
for (let p = 0; p < w * h; p++) {
  if (soft[p] > 8) {
    const x = p % w;
    const y = (p - x) / w;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }
}

await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
  .extract({ left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 })
  .png()
  .toFile(out);
console.log("wrote", out);
