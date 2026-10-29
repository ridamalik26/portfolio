"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/portfolio";
import { FaGithub, UiIcon } from "./icons";
import ProjectImage from "./ProjectImage";
import Tag from "./Tag";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !dialogRef.current.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const linkClass =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[var(--overlay)] backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.2 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-t-3xl border border-border bg-card shadow-[0_20px_80px_-20px_var(--glow)] sm:rounded-3xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-accent hover:text-on-accent"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <ProjectImage slug={project.slug} name={project.name} />

        <div className="p-6 sm:p-8">
          {project.tagline && (
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-fg">
              {project.tagline}
            </p>
          )}
          <h3
            id="project-modal-title"
            className="mt-1 font-display text-2xl uppercase leading-tight text-foreground sm:text-3xl"
          >
            {project.name}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {project.description}
          </p>

          <h4 className="mt-6 text-lg font-bold text-lavender-fg">Key Features</h4>
          <ul className="mt-3 space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.stack.map((s) => (
              <li key={s}>
                <Tag label={s} />
              </li>
            ))}
          </ul>

          {project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} ${
                    i === 0
                      ? "bg-accent text-on-accent hover:bg-accent-deep"
                      : "border border-border text-foreground hover:border-accent hover:text-accent-fg"
                  }`}
                >
                  {l.label === "Live Demo" ? (
                    <UiIcon name="globe" size={16} />
                  ) : (
                    <FaGithub size={16} aria-hidden="true" />
                  )}
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
