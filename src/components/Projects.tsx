"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import {
  projectFilters,
  projects,
  projectsSection,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const close = useCallback(() => setActive(null), []);

  const visible = projects.filter((p) => filter === "all" || p.categories.includes(filter));
  const count = (id: "all" | ProjectCategory) =>
    id === "all" ? projects.length : projects.filter((p) => p.categories.includes(id)).length;

  return (
    <section id="projects" aria-labelledby="projects-title" className="container-x py-12 md:py-16">
      <SectionHeading id="projects-title" icon="folder" color="mint" hint={projectsSection.hint}>
        {projectsSection.title}
      </SectionHeading>

      <div role="group" aria-label="Filter projects by category" className="mb-6 flex flex-wrap gap-2">
        {projectFilters.map((f) => {
          const on = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(f.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                on
                  ? "border-accent bg-accent text-on-accent"
                  : "border-border bg-card text-foreground hover:border-accent hover:text-accent-fg"
              }`}
            >
              {f.label}
              <span className={`text-xs ${on ? "opacity-80" : "text-muted"}`}>{count(f.id)}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout={!reduce} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p) => (
            <motion.li
              key={p.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <ProjectCard project={p} onOpen={setActive} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      <p className="sr-only" role="status">
        Showing {visible.length} of {projects.length} projects
      </p>

      <AnimatePresence>
        {active && <ProjectModal key={active.slug} project={active} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
