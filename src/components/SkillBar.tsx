"use client";

import { motion, useReducedMotion } from "framer-motion";
import { levelPercent, type Accent, type Level } from "@/data/portfolio";
import { accentDot } from "@/lib/accent";
import { TechIcon } from "./icons";

export default function SkillBar({
  name,
  level,
  color,
  index,
}: {
  name: string;
  level: Level;
  color: Accent;
  index: number;
}) {
  const reduce = useReducedMotion();
  const pct = levelPercent[level];
  return (
    <li>
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="inline-flex items-center gap-2 font-medium text-foreground">
          <TechIcon name={name} size={14} className="shrink-0 text-muted" />
          {name}
        </span>
        <span className="shrink-0 text-xs font-semibold text-muted">{level}</span>
      </div>
      <div
        role="progressbar"
        aria-label={`${name} proficiency`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-valuetext={level}
        className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-border"
      >
        <motion.div
          className={`h-full rounded-full ${accentDot[color]}`}
          initial={reduce ? { width: `${pct}%` } : { width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </li>
  );
}
