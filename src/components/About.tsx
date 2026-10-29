import { about } from "@/data/portfolio";
import { accentSoft, accentTop } from "@/lib/accent";
import { UiIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="container-x py-12 md:py-16">
      <SectionHeading id="about-title" icon="user" color="pink">
        {about.heading}
      </SectionHeading>

      <Reveal className="rounded-2xl border border-border border-t-2 border-t-accent bg-card p-5 sm:p-6">
        <h3 className="text-lg font-bold text-foreground">{about.storyTitle}</h3>
        <div className="mt-3 grid gap-4 text-[15px] leading-relaxed text-muted sm:text-base md:grid-cols-2 md:gap-8">
          {about.story.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Reveal>

      <Reveal className="mb-4 mt-8">
        <h3 className="text-lg font-bold text-foreground">{about.offTitle}</h3>
      </Reveal>
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {about.off.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={i * 0.07}
            className={`card-lift h-full rounded-2xl border border-border border-t-2 bg-card p-4 ${accentTop[item.color]}`}
          >
            <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${accentSoft[item.color]}`}>
              <UiIcon name={item.icon} size={18} />
            </span>
            <h4 className="mt-3 text-base font-bold text-foreground">{item.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
