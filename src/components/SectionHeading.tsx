import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  id,
  children,
  hint,
}: {
  id: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-3 md:mb-14">
      <h2
        id={id}
        className="font-display text-5xl uppercase leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl"
      >
        {children}
        <span className="text-accent">.</span>
      </h2>
      {hint && <p className="text-sm text-muted">{hint}</p>}
    </Reveal>
  );
}
