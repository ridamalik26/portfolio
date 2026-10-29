import { tagCategories, type Accent } from "@/data/portfolio";

export const accentText: Record<Accent, string> = {
  pink: "text-accent-fg",
  lavender: "text-lavender-fg",
  mint: "text-mint-fg",
  peach: "text-peach-fg",
};

// Soft tinted background plus matching text, for icon badges.
export const accentSoft: Record<Accent, string> = {
  pink: "bg-accent/15 text-accent-fg",
  lavender: "bg-lavender/15 text-lavender-fg",
  mint: "bg-mint/15 text-mint-fg",
  peach: "bg-peach/15 text-peach-fg",
};

// Bordered tint, for tag pills and chips.
export const accentPill: Record<Accent, string> = {
  pink: "border-accent/30 bg-accent/10 text-accent-fg",
  lavender: "border-lavender/30 bg-lavender/10 text-lavender-fg",
  mint: "border-mint/30 bg-mint/10 text-mint-fg",
  peach: "border-peach/30 bg-peach/10 text-peach-fg",
};

export const accentTop: Record<Accent, string> = {
  pink: "border-t-accent",
  lavender: "border-t-lavender",
  mint: "border-t-mint",
  peach: "border-t-peach",
};

export const accentDot: Record<Accent, string> = {
  pink: "bg-accent",
  lavender: "bg-lavender",
  mint: "bg-mint",
  peach: "bg-peach",
};

export function tagColor(tag: string): Accent {
  if (tagCategories.ai.includes(tag)) return "lavender";
  if (tagCategories.backend.includes(tag)) return "mint";
  if (tagCategories.mobile.includes(tag)) return "peach";
  return "pink";
}
