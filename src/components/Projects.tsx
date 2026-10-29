"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import { projects, projectsSection, type Project } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const close = useCallback(() => setActive(null), []);
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading id="projects-title" hint={projectsSection.hint}>
        {projectsSection.title}
      </SectionHeading>

      <h3 className="mb-5 font-display text-2xl uppercase text-accent">{projectsSection.featuredLabel}</h3>
      <ul className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} large index={i} onOpen={setActive} />
        ))}
      </ul>

      <h3 className="mb-5 mt-16 font-display text-2xl uppercase text-accent">{projectsSection.moreLabel}</h3>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {more.map((p, i) => (
          <ProjectCard key={p.slug} project={p} large={false} index={i} onOpen={setActive} />
        ))}
      </ul>

      <AnimatePresence>
        {active && <ProjectModal key={active.slug} project={active} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
