import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading id="skills-title">{skills.title}</SectionHeading>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.groups.map((g, i) => (
          <Reveal key={g.name} delay={(i % 2) * 0.08} className="card-lift rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-xl uppercase text-accent">{g.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="font-display text-2xl uppercase text-foreground sm:text-3xl">
          {skills.certificationsTitle}
        </h3>
      </Reveal>
      <ul className="mt-6 grid gap-5 md:grid-cols-3">
        {skills.certifications.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 0.08} className="card-lift flex flex-col justify-between rounded-2xl border border-border bg-card p-6">
            <h4 className="text-lg font-bold leading-snug text-foreground">{c.title}</h4>
            <p className="mt-4 text-sm text-muted">
              <span className="font-semibold text-accent">{c.issuer}</span> on {c.platform}
            </p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-16">
        <h3 className="font-display text-2xl uppercase text-foreground sm:text-3xl">
          {skills.toolsTitle}
        </h3>
      </Reveal>
      <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {skills.tools.map((t, i) => (
          <Reveal as="li" key={t} delay={(i % 4) * 0.06} className="card-lift flex items-center justify-center rounded-2xl border border-border bg-card px-4 py-6 text-center font-semibold text-foreground">
            {t}
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
