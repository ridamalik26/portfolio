import { skills, type Accent } from "@/data/portfolio";
import { accentPill, accentSoft, accentTop } from "@/lib/accent";
import { TechIcon, UiIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const toolIcon: Record<string, string> = {
  "VS Code": "code",
  OpenCode: "terminal",
  GoHighLevel: "zap",
};
const cycle: Accent[] = ["pink", "lavender", "mint", "peach"];

function Pill({ label, color }: { label: string; color: Accent }) {
  return (
    <li
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${accentPill[color]}`}
    >
      <TechIcon name={label} size={12} />
      {label}
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="container-x py-12 md:py-16">
      <SectionHeading id="skills-title" icon="wrench" color="peach">
        {skills.title}
      </SectionHeading>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((g, i) => (
          <Reveal
            key={g.name}
            delay={(i % 3) * 0.07}
            className={`card-lift h-full rounded-2xl border border-border border-t-2 bg-card p-5 ${accentTop[g.color]} ${
              g.span === 3 ? "md:col-span-2 lg:col-span-3" : g.span === 2 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${accentSoft[g.color]}`}>
                <UiIcon name={g.icon} size={18} />
              </span>
              <h3 className="text-lg font-bold text-foreground">{g.name}</h3>
            </div>
            {g.items && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Pill key={item} label={item} color={g.color} />
                ))}
              </ul>
            )}
            {g.rows && (
              <div className="grid gap-x-8 md:grid-cols-2">
                {g.rows.map((row) => (
                  <div key={row.label} className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">{row.label}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {row.items.map((item) => (
                        <Pill key={item} label={item} color={g.color} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-4 mt-10 flex items-center gap-2.5">
        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${accentSoft.peach}`}>
          <UiIcon name="award" size={16} />
        </span>
        <h3 className="text-xl font-bold text-foreground">{skills.certificationsTitle}</h3>
      </Reveal>
      <ul className="grid gap-4 md:grid-cols-3">
        {skills.certifications.map((c, i) => (
          <Reveal
            as="li"
            key={c.title}
            delay={i * 0.07}
            className={`card-lift flex h-full flex-col justify-between rounded-2xl border border-border border-t-2 bg-card p-5 ${accentTop[cycle[i % 4]]}`}
          >
            <h4 className="text-base font-bold leading-snug text-foreground">{c.title}</h4>
            <p className="mt-3 text-sm text-muted">
              <span className="font-semibold text-accent-fg">{c.issuer}</span> on {c.platform}
            </p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mb-4 mt-10 flex items-center gap-2.5">
        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${accentSoft.mint}`}>
          <UiIcon name="terminal" size={16} />
        </span>
        <h3 className="text-xl font-bold text-foreground">{skills.toolsTitle}</h3>
      </Reveal>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {skills.tools.map((t, i) => (
          <Reveal
            as="li"
            key={t}
            delay={(i % 4) * 0.05}
            className="card-lift flex h-full items-center justify-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-4 text-center text-[15px] font-semibold text-foreground"
          >
            <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${accentSoft[cycle[i % 4]]}`}>
              {toolIcon[t] ? <UiIcon name={toolIcon[t]} size={16} /> : <TechIcon name={t} size={16} />}
            </span>
            {t}
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
