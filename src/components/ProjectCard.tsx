"use client";

import type { Project } from "@/data/portfolio";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";

export default function ProjectCard({
  project,
  large,
  index,
  onOpen,
}: {
  project: Project;
  large: boolean;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <Reveal as="li" delay={(index % 3) * 0.08} className="h-full">
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-haspopup="dialog"
        className="card-lift group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card text-left"
      >
        <ProjectImage
          slug={project.slug}
          name={project.name}
          className="transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <span className={`flex flex-1 flex-col ${large ? "p-6" : "p-5"}`}>
          {project.tagline && (
            <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
              {project.tagline}
            </span>
          )}
          <span
            className={`font-display uppercase leading-tight text-foreground ${large ? "text-2xl sm:text-3xl" : "text-xl"}`}
          >
            {project.name}
          </span>
          <span
            className={`mt-2 text-muted ${large ? "text-base" : "text-sm"} line-clamp-2`}
          >
            {project.description}
          </span>
          <span className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
              >
                {s}
              </span>
            ))}
          </span>
        </span>
      </button>
    </Reveal>
  );
}
