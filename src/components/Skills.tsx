import { skills } from "@/data/portfolio";
import { accentPill, accentSoft, accentTop } from "@/lib/accent";
import { TechIcon, UiIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

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
            className={`card-lift h-full rounded-2xl border border-border border-t-2 bg-card p-5 ${accentTop[g.color]}`}
          >
            <div className="flex items-center gap-3">
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${accentSoft[g.color]}`}>
                <UiIcon name={g.icon} size={18} />
              </span>
              <h3 className="text-lg font-bold text-foreground">{g.name}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${g.name} skills`}>
              {g.items.map((item) => (
                <li
                  key={item}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${accentPill[g.color]}`}
                >
                  <TechIcon name={item} size={12} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
