import type { ReactNode } from "react";
import type { Accent } from "@/data/portfolio";
import { accentSoft } from "@/lib/accent";
import { UiIcon } from "./icons";
import Reveal from "./Reveal";

export default function SectionHeading({
  id,
  icon,
  color = "pink",
  children,
  hint,
  as: Tag = "h2",
}: {
  id: string;
  icon: string;
  color?: Accent;
  children: ReactNode;
  hint?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${accentSoft[color]}`}
        >
          <UiIcon name={icon} size={20} />
        </span>
        <Tag
          id={id}
          className="text-gradient font-display text-[28px] uppercase leading-none tracking-tight md:text-4xl"
        >
          {children}
        </Tag>
      </div>
      {hint && <p className="text-sm text-muted">{hint}</p>}
    </Reveal>
  );
}
