import { Quote } from "lucide-react";
import { testimonials, testimonialsSection } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="container-x py-12 md:py-16">
      <SectionHeading id="testimonials-title" icon="quote" color="pink">
        {testimonialsSection.title}
      </SectionHeading>

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            as="li"
            key={`${t.name}-${t.company}`}
            delay={(i % 3) * 0.08}
            className="h-full"
          >
            <figure className="card-lift flex h-full flex-col rounded-2xl border border-border border-t-2 border-t-accent bg-card p-5 sm:p-6">
              <Quote size={28} className="text-accent-fg" aria-hidden="true" />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground sm:text-base">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent-fg"
                >
                  {initials(t.name)}
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-foreground">{t.name}</span>
                  <span className="block text-sm text-muted">
                    {t.role}, {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
