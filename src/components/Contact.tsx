import { contact, type Accent } from "@/data/portfolio";
import { accentSoft, accentTop } from "@/lib/accent";
import ContactForm from "./ContactForm";
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

      <div className="grid gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <ul className="grid gap-4">
          {contact.cards.map((c, i) => (
            <Reveal as="li" key={c.id} delay={i * 0.07}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`card-lift flex items-center gap-4 rounded-2xl border border-border border-t-2 bg-card p-5 ${accentTop[color[c.id]]}`}
              >
                <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accentSoft[color[c.id]]}`}>
                  <CardIcon id={c.id} />
                </span>
                <span className="min-w-0">
                  <span className="block text-lg font-bold text-foreground">{c.label}</span>
                  <span className="mt-0.5 block break-words text-sm text-muted">{c.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
