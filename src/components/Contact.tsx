import { contact } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading id="contact-title">{contact.heading}</SectionHeading>

      <ul className="grid gap-5 md:grid-cols-3">
        {contact.cards.map((c, i) => (
          <Reveal as="li" key={c.id} delay={i * 0.08} className="h-full">
            <a
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="card-lift flex h-full min-h-44 flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <span className="font-display text-3xl uppercase text-accent sm:text-4xl">
                {c.label}
              </span>
              <span className="mt-8 break-all text-base text-muted">{c.value}</span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
