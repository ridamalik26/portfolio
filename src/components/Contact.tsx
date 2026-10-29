import { contact, type Accent } from "@/data/portfolio";
import { accentSoft, accentTop } from "@/lib/accent";
import CopyEmail from "./CopyEmail";
import { FaGithub, FaLinkedin, UiIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const color: Record<string, Accent> = { email: "pink", linkedin: "lavender", github: "mint" };

const cardClass = (id: string) =>
  `card-lift relative flex h-full min-h-40 flex-col justify-between rounded-2xl border border-border border-t-2 bg-card p-5 sm:p-6 ${accentTop[color[id]]}`;

function CardIcon({ id }: { id: string }) {
  if (id === "linkedin") return <FaLinkedin size={22} aria-hidden="true" />;
  if (id === "github") return <FaGithub size={22} aria-hidden="true" />;
  return <UiIcon name="mail" size={22} />;
}

function Badge({ id }: { id: string }) {
  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${accentSoft[color[id]]}`}>
      <CardIcon id={id} />
    </span>
  );
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
            {c.id === "email" ? (
              // The whole card opens Gmail compose; the copy button sits above that overlay.
              <div className={cardClass(c.id)}>
                <Badge id={c.id} />
                <div className="mt-6">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-bold text-foreground after:absolute after:inset-0 after:rounded-2xl after:content-['']"
                  >
                    {c.label}
                  </a>
                  <div className="mt-0.5 flex min-h-8 flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="break-all text-sm text-muted">{c.value}</span>
                    <CopyEmail address={contact.email} />
                  </div>
                </div>
              </div>
            ) : (
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cardClass(c.id)}
              >
                <Badge id={c.id} />
                <span className="mt-6">
                  <span className="block text-lg font-bold text-foreground">{c.label}</span>
                  <span className="mt-0.5 flex min-h-8 items-center break-all text-sm text-muted">{c.value}</span>
                </span>
              </a>
            )}
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
