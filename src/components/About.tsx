import { about } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading id="about-title">{about.heading}</SectionHeading>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h3 className="font-display text-2xl uppercase text-accent sm:text-3xl">{about.storyTitle}</h3>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h3 className="font-display text-2xl uppercase text-accent sm:text-3xl">{about.offTitle}</h3>
          </Reveal>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {about.off.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.1} className="card-lift rounded-2xl border border-border bg-card p-5">
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
