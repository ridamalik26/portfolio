"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export default function ThemeToggle({
  withLabel = false,
  className = "",
}: {
  withLabel?: boolean;
  className?: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Until mounted the real theme is unknown, so render a neutral, same-size button.
  const isDark = !mounted || resolvedTheme !== "light";
  const next = isDark ? "light" : "dark";
  const label = `Switch to ${next} theme`;

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={label}
      title={label}
      className={`inline-flex items-center justify-center gap-3 rounded-full text-foreground transition-colors hover:text-accent-fg ${
        withLabel ? "w-full px-3 py-3 text-lg font-medium hover:bg-card" : "h-10 w-10 hover:bg-card"
      } ${className}`}
    >
      {mounted ? (
        isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />
      ) : (
        <span className="h-5 w-5" aria-hidden="true" />
      )}
      {withLabel && <span className="mr-auto">{mounted ? (isDark ? "Light mode" : "Dark mode") : "Theme"}</span>}
    </button>
  );
}
