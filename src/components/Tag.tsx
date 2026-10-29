import type { Accent } from "@/data/portfolio";
import { accentPill, tagColor } from "@/lib/accent";
import { TechIcon } from "./icons";

export default function Tag({
  label,
  color,
  withIcon = false,
}: {
  label: string;
  color?: Accent;
  withIcon?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium ${accentPill[color ?? tagColor(label)]}`}
    >
      {withIcon && <TechIcon name={label} size={12} />}
      {label}
    </span>
  );
}
