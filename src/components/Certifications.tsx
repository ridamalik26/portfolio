import type { Accent } from "@/data/portfolio";
import { certifications } from "@/data/portfolio";
import { accentSoft, accentTop } from "@/lib/accent";
import { UiIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const cycle: Accent[] = ["pink", "lavender", "mint"];

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="container-x py-12 md:py-16">
      <SectionHeading id="certifications-title" icon="award" color="lavender">
        {certifications.title}
      </SectionHeading>

      <ul className="grid gap-4 md:grid-cols-3">
        {certifications.items.map((c, i) => (
          <Reveal
            as="li"
            key={c.title}
            delay={i * 0.07}
            className={`card-lift flex h-full flex-col rounded-2xl border border-border border-t-2 bg-card p-5 ${accentTop[cycle[i % 3]]}`}
          >
            <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${accentSoft[cycle[i % 3]]}`}>
              <UiIcon name="award" size={18} />
            </span>
            <h3 className="mt-3 text-base font-bold leading-snug text-foreground">{c.title}</h3>
            <p className="mt-auto pt-3 text-sm text-muted">
              <span className="font-semibold text-accent-fg">{c.issuer}</span> on {c.platform}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
