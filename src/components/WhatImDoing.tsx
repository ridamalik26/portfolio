import { doing } from "@/data/portfolio";
import { accentSoft, accentTop } from "@/lib/accent";
import { UiIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function WhatImDoing() {
  return (
    <section id="doing" aria-labelledby="doing-title" className="container-x py-12 md:py-16">
      <SectionHeading id="doing-title" icon="rocket" color="mint">
        {doing.title}
      </SectionHeading>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {doing.cards.map((c, i) => (
          <Reveal
            as="li"
            key={c.title}
            delay={i * 0.07}
            className={`card-lift h-full rounded-2xl border border-border border-t-2 bg-card p-5 ${accentTop[c.color]}`}
          >
            <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${accentSoft[c.color]}`}>
              <UiIcon name={c.icon} size={20} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-foreground">{c.title}</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-muted">{c.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
