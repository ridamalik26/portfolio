// Usage: node scripts/generate-icons.mjs
// Builds src/app/icon.png (512), src/app/apple-icon.png (180) and src/app/favicon.ico
// from public/avatar.png: a square crop of head and shoulders on a dusty pink circle.
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const PINK = "#E8A9B8";
const SRC = "public/avatar.png";

const meta = await sharp(SRC).metadata();
const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;

// Horizontal center of the head: alpha-weighted centroid of the top quarter.
let sum = 0;
let weight = 0;
for (let y = 0; y < Math.floor(H * 0.25); y++) {
  for (let x = 0; x < W; x++) {
    const a = data[(y * W + x) * 4 + 3];
    sum += x * a;
    weight += a;
  }
}
const cx = Math.round(sum / weight);

// Head and shoulders: a square about half the figure height, starting just above the head.
const side = Math.min(W, Math.round(H * 0.5));
const left = Math.max(0, Math.min(W - side, cx - Math.round(side / 2)));
const top = 0;
const crop = await sharp(SRC)
  .extract({ left, top, width: side, height: Math.min(side, H) })
  .png()
  .toBuffer();

async function render(size) {
  const pad = Math.round(size * 0.04);
  const inner = size - pad * 2;
  const circle = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${PINK}"/></svg>`,
  );
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
  );
  const person = await sharp(crop)
    .resize(inner, inner, { fit: "contain", position: "top", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  return sharp(circle)
    .composite([{ input: person }, { input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

await sharp(await render(512)).toFile("src/app/icon.png");
await sharp(await render(180)).toFile("src/app/apple-icon.png");

// favicon.ico with PNG payloads (16, 32, 48).
const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map(async (s) => sharp(await render(512)).resize(s, s).png().toBuffer()),
);
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const entries = pngs.map((png, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(sizes[i], 0);
  e.writeUInt8(sizes[i], 1);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(png.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += png.length;
  return e;
});
await writeFile("src/app/favicon.ico", Buffer.concat([header, ...entries, ...pngs]));
console.log("avatar", meta.width, "x", meta.height, "head center x", cx, "crop side", side);
