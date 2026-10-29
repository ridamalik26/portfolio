"use client";

import { useState } from "react";
import { site } from "@/data/portfolio";

export default function Avatar() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={site.avatarAlt}
        className="flex aspect-[3/4] w-full items-end justify-center rounded-t-[50%] bg-gradient-to-t from-accent/30 to-transparent font-display text-8xl text-accent/60"
      >
        <span className="pb-8">{site.logo}</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={site.avatar}
      alt={site.avatarAlt}
      width={356}
      height={648}
      fetchPriority="high"
      onError={() => setFailed(true)}
      className="mx-auto h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
    />
  );
}
