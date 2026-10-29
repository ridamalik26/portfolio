"use client";

import { useState } from "react";
import { site } from "@/data/portfolio";

export default function Avatar({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={site.avatarAlt}
        className={`flex items-end justify-center font-display text-8xl text-accent/60 ${className}`}
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
      className={`object-contain ${className}`}
    />
  );
}
