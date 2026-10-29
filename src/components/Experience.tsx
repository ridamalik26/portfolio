import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const linkClass =
  "inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading id="experience-title">Experience</SectionHeading>

      <ol className="relative ml-3 border-l border-border md:ml-4">
        {experience.map((company) => (
          <Reveal as="li" key={company.name} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
            <span
              aria-hidden="true"
              className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent shadow-[0_0_0_4px_rgba(232,169,184,0.2)]"
            />
            <header>
              <h3 className="font-display text-3xl uppercase leading-tight text-foreground sm:text-4xl">
                {company.name}
              </h3>
              <p className="mt-2 text-lg font-semibold text-accent">{company.role}</p>
              <p className="text-sm text-muted">{company.dates}</p>
              <p className="mt-2 text-sm text-muted">
                <span className="font-semibold text-foreground">Stack: </span>
                {company.stack.join(", ")}
              </p>
            </header>

            <ul className="mt-6 space-y-4">
              {company.work.map((item) => (
                <li key={item.title} className="card-lift rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                  {item.stack && (
                    <p className="mt-1 text-sm text-accent">{item.stack.join(", ")}</p>
                  )}
                  <ul className="mt-3 space-y-2">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {item.links && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
