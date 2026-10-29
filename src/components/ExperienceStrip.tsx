import Link from "next/link";
import { experience, experienceSection } from "@/data/portfolio";
import { accentSoft, accentTop } from "@/lib/accent";
import { UiIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ExperienceStrip() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="container-x py-12 md:py-16">
      <SectionHeading id="experience-title" icon="briefcase" color="lavender">
        {experienceSection.title}
      </SectionHeading>

      <ul className="grid gap-4 md:grid-cols-3">
        {experience.map((c, i) => (
          <Reveal
            as="li"
            key={c.name}
            delay={i * 0.08}
            className={`card-lift flex h-full flex-col rounded-2xl border border-border border-t-2 bg-card p-5 ${accentTop[c.color]}`}
          >
            <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${accentSoft[c.color]}`}>
              <UiIcon name="building" size={18} />
            </span>
            <h3 className="mt-3 text-lg font-bold text-foreground">{c.name}</h3>
            <p className="text-sm font-semibold text-foreground/90">{c.role}</p>
            <p className="text-xs text-muted">{c.dates}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{c.summary}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-8 flex justify-center">
        <Link
          href="/experience"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-deep"
        >
          {experienceSection.cta}
        </Link>
      </Reveal>
    </section>
  );
}
