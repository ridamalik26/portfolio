import { experience } from "@/data/portfolio";
import { accentDot, accentSoft, accentText, accentTop } from "@/lib/accent";
import { FaGithub, UiIcon } from "./icons";
import Reveal from "./Reveal";
import Tag from "./Tag";

const linkClass =
  "inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent";

export default function ExperienceTimeline() {
  return (
    <ol className="relative ml-2 space-y-10 border-l border-border pl-5 md:ml-3 md:pl-8">
      {experience.map((c) => (
        <Reveal as="li" key={c.name} className="relative">
          <span
            aria-hidden="true"
            className={`absolute -left-[26px] top-6 h-3 w-3 rounded-full ring-4 ring-background md:-left-[38px] ${accentDot[c.color]}`}
          />
          <div className="grid items-start gap-4 lg:grid-cols-[300px_1fr]">
            <div
              className={`rounded-2xl border border-border border-t-2 bg-card p-5 lg:sticky lg:top-24 ${accentTop[c.color]}`}
            >
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${accentSoft[c.color]}`}>
                <UiIcon name="building" size={18} />
              </span>
              <h2 className="mt-3 text-xl font-bold text-foreground">{c.name}</h2>
              <p className={`text-[15px] font-semibold ${accentText[c.color]}`}>{c.role}</p>
              <p className="text-sm text-muted">{c.dates}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${c.name} stack`}>
                {c.stack.map((s) => (
                  <li key={s}>
                    <Tag label={s} />
                  </li>
                ))}
              </ul>
            </div>

            <ul className="space-y-4">
              {c.work.map((w) => (
                <li key={w.title} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="text-lg font-bold text-foreground">{w.title}</h3>
                  {w.stack && <p className={`mt-1 text-xs font-medium ${accentText[c.color]}`}>{w.stack.join(" / ")}</p>}
                  <ul className="mt-3 space-y-2">
                    {w.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span aria-hidden="true" className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accentDot[c.color]}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {w.links && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {w.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {l.label === "Live Demo" ? <UiIcon name="globe" size={15} /> : <FaGithub size={15} aria-hidden="true" />}
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
