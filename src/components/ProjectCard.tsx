"use client";

import { projectsSection, type Project } from "@/data/portfolio";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";
import Tag from "./Tag";

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const shown = project.stack.slice(0, projectsSection.maxTags);
  const extra = project.stack.length - shown.length;
  return (
    <Reveal as="li" delay={(index % 4) * 0.06} className="h-full">
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-haspopup="dialog"
        className="card-lift group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card text-left"
      >
        <ProjectImage
          slug={project.slug}
          name={project.name}
          compact
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="flex flex-1 flex-col p-4">
          <span className="line-clamp-2 min-h-[2.8rem] text-lg font-bold leading-snug text-foreground">
            {project.name}
          </span>
          <span className="mt-1 line-clamp-1 text-sm text-muted">{project.short}</span>
          <span className="mt-auto flex flex-wrap gap-1.5 pt-3">
            {shown.map((s) => (
              <Tag key={s} label={s} />
            ))}
            {extra > 0 && (
              <span className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted">
                +{extra}
              </span>
            )}
          </span>
        </span>
      </button>
    </Reveal>
  );
}
