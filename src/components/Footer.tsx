import { contact, footer } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted md:flex-row">
        <p>{footer.text}</p>
        <ul className="flex gap-6">
          {contact.cards.map((c) => (
            <li key={c.id}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="transition-colors hover:text-accent-fg"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
