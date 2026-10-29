"use client";

import { useEffect, useRef, useState } from "react";

export default function ProjectImage({
  slug,
  name,
  className = "",
}: {
  slug: string;
  name: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // The image may fail before hydration, so onError never fires; check once mounted.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={`relative aspect-[16/10] w-full overflow-hidden bg-card ${className}`}>
      {failed ? (
        <div
          role="img"
          aria-label={`${name} preview placeholder`}
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/25 via-accent/10 to-transparent p-6 text-center"
        >
          <span className="font-display text-2xl uppercase leading-tight text-accent sm:text-3xl">
            {name}
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={`/projects/${slug}.png`}
          alt={`${name} screenshot`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
