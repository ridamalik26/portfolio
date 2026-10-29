"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/portfolio";

const buttonClass =
  "inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-deep";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = (href: string) => (href === pathname ? "page" : undefined);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <nav aria-label="Main" className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="font-display text-2xl tracking-tight text-accent"
        >
          {site.logo}
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current(item.href)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  item.href === pathname ? "text-accent" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={site.resume} download className={buttonClass}>
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current(item.href)}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-lg font-medium text-foreground hover:bg-card hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="px-3 pt-2">
                <a href={site.resume} download className={`${buttonClass} w-full`}>
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
