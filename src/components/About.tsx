import { about } from "@/data/portfolio";
import { accentSoft } from "@/lib/accent";
import { UiIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="container-x py-12 md:py-16">
      <SectionHeading id="about-title" icon="user" color="pink">
        {about.heading}
      </SectionHeading>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
        <Reveal className="h-full rounded-2xl border border-border border-t-2 border-t-accent bg-card p-5 sm:p-6">
          <h3 className="text-lg font-bold text-foreground">{about.storyTitle}</h3>
          <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={0.08}
          className="h-full rounded-2xl border border-border border-t-2 border-t-lavender bg-card p-5 sm:p-6"
        >
          <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${accentSoft.lavender}`}>
            <UiIcon name="graduation" size={20} />
          </span>
          <h3 className="mt-4 text-lg font-bold text-foreground">{about.educationTitle}</h3>
          <p className="mt-2 text-base font-semibold text-foreground">{about.education.school}</p>
          <p className="text-[15px] text-muted">{about.education.program}</p>
          <p className="text-sm text-muted">{about.education.year}</p>
        </Reveal>
      </div>
    </section>
  );
}
