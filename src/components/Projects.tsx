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

  return (
    <section id="projects" aria-labelledby="projects-title" className="container-x py-12 md:py-16">
      <SectionHeading id="projects-title" icon="folder" color="mint" hint={projectsSection.hint}>
        {projectsSection.title}
      </SectionHeading>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} onOpen={setActive} />
        ))}
      </ul>

      <AnimatePresence>
        {active && <ProjectModal key={active.slug} project={active} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
