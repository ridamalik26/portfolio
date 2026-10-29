import { contact, type Accent } from "@/data/portfolio";
import { accentSoft, accentTop } from "@/lib/accent";
import { FaGithub, FaLinkedin, UiIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const color: Record<string, Accent> = { email: "pink", linkedin: "lavender", github: "mint" };

function CardIcon({ id }: { id: string }) {
  if (id === "linkedin") return <FaLinkedin size={22} aria-hidden="true" />;
  if (id === "github") return <FaGithub size={22} aria-hidden="true" />;
  return <UiIcon name="mail" size={22} />;
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="container-x py-12 md:py-16">
      <SectionHeading id="contact-title" icon="mail" color="pink">
        {contact.heading}
      </SectionHeading>

      <ul className="grid gap-4 md:grid-cols-3">
        {contact.cards.map((c, i) => (
          <Reveal as="li" key={c.id} delay={i * 0.07} className="h-full">
            <a
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`card-lift flex h-full min-h-36 flex-col justify-between rounded-2xl border border-border border-t-2 bg-card p-5 ${accentTop[color[c.id]]}`}
            >
              <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accentSoft[color[c.id]]}`}>
                <CardIcon id={c.id} />
              </span>
              <span className="mt-5">
                <span className="block text-lg font-bold text-foreground">{c.label}</span>
                <span className="mt-0.5 block break-all text-sm text-muted">{c.value}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
