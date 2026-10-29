import { ticker } from "@/data/portfolio";

function Row({ hidden }: { hidden: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {ticker.map((item) => (
        <li
          key={item}
          className="flex items-center gap-8 pr-8 font-display text-lg uppercase text-foreground sm:text-xl"
        >
          {item}
          <span className="text-accent-fg" aria-hidden="true">
            *
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Ticker() {
  return (
    <section
      aria-label="Technologies I work with"
      className="marquee overflow-hidden border-y border-border bg-card py-4"
    >
      <div className="marquee-track flex w-max">
        <Row hidden={false} />
        <Row hidden />
      </div>
    </section>
  );
}
