"use client";

import { CircleAlert, CircleCheck, Quote } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { testimonialsEnabled, testimonialsSection as copy } from "@/data/portfolio";
import { getSupabase } from "@/lib/supabase";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Note = {
  id: string;
  name: string;
  role: string | null;
  message: string;
  created_at: string;
};

type Load = "loading" | "ready" | "error";
type Status = "idle" | "sending" | "success" | "error" | "limited" | "invalid";

const RATE_KEY = "testimonial-last-submit";
const RATE_MS = 60_000;

const field =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted/80 transition-colors focus-visible:border-accent";

function initials(name: string) {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("") || "?"
  );
}

export default function Testimonials() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [load, setLoad] = useState<Load>("loading");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return;
    let cancelled = false;
    supabase
      .from("testimonials")
      .select("id,name,role,message,created_at")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(60)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          setLoad("error");
        } else {
          setNotes((data ?? []) as Note[]);
          setLoad("ready");
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Hidden entirely when Supabase is not configured.
  if (!testimonialsEnabled) return null;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this. Pretend success and send nothing.
    if (String(data.get("website") ?? "")) {
      form.reset();
      setMessage("");
      setStatus("success");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const role = String(data.get("role") ?? "").trim();
    const text = message.trim();
    const { limits } = copy;
    if (
      name.length < 1 ||
      name.length > limits.name ||
      role.length > limits.role ||
      text.length < limits.messageMin ||
      text.length > limits.messageMax
    ) {
      setStatus("invalid");
      return;
    }

    // One submission per browser per minute. Storage can be blocked, so never rely on it.
    try {
      const last = Number(localStorage.getItem(RATE_KEY));
      if (last && Date.now() - last < RATE_MS) {
        setStatus("limited");
        return;
      }
    } catch {}

    const supabase = getSupabase();
    if (!supabase) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const { error } = await supabase
      .from("testimonials")
      .insert({ name, role: role || null, message: text, approved: false });

    if (error) {
      setStatus("error");
      return;
    }
    try {
      localStorage.setItem(RATE_KEY, String(Date.now()));
    } catch {}
    form.reset();
    setMessage("");
    setStatus("success");
  }

  const sending = status === "sending";
  const feedback =
    status === "success"
      ? copy.success
      : status === "limited"
        ? copy.rateLimit
        : status === "invalid"
          ? copy.invalid
          : status === "error"
            ? copy.error
            : "";

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="container-x py-12 md:py-16">
      <SectionHeading id="testimonials-title" icon="quote" color="pink">
        {copy.title}
      </SectionHeading>

      {load === "loading" && (
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" aria-busy="true" aria-label="Loading notes">
          {[0, 1, 2].map((i) => (
            <li key={i} className="h-44 animate-pulse rounded-2xl border border-border bg-card" />
          ))}
        </ul>
      )}

      {load === "error" && (
        <p role="alert" className="flex items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-accent-fg">
          <CircleAlert size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          {copy.loadError}
        </p>
      )}

      {load === "ready" && notes.length === 0 && (
        <Reveal className="flex flex-col items-center rounded-2xl border border-border border-t-2 border-t-accent bg-card px-5 py-10 text-center">
          <Quote size={28} className="text-accent-fg" aria-hidden="true" />
          <h3 className="mt-3 text-lg font-bold text-foreground">{copy.emptyTitle}</h3>
          <p className="mt-1 max-w-md text-[15px] text-muted">{copy.emptyText}</p>
        </Reveal>
      )}

      {load === "ready" && notes.length > 0 && (
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((n, i) => (
            <Reveal as="li" key={n.id} delay={(i % 3) * 0.08} className="h-full">
              <figure className="card-lift flex h-full flex-col rounded-2xl border border-border border-t-2 border-t-accent bg-card p-5 sm:p-6">
                <Quote size={28} className="text-accent-fg" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 whitespace-pre-line break-words text-[15px] leading-relaxed text-foreground sm:text-base">
                  {n.message}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent-fg"
                  >
                    {initials(n.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block break-words font-bold text-foreground">{n.name}</span>
                    {n.role && <span className="block break-words text-sm text-muted">{n.role}</span>}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      )}

      <Reveal className="mt-8">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-border border-t-2 border-t-lavender bg-card p-5 sm:p-6"
        >
          <h3 className="text-lg font-bold text-foreground">{copy.formTitle}</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="tm-name" className="mb-1.5 block text-sm font-medium text-foreground">
                {copy.nameLabel}
              </label>
              <input
                id="tm-name"
                name="name"
                type="text"
                required
                maxLength={copy.limits.name}
                autoComplete="name"
                placeholder={copy.namePlaceholder}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="tm-role" className="mb-1.5 block text-sm font-medium text-foreground">
                {copy.roleLabel}
              </label>
              <input
                id="tm-role"
                name="role"
                type="text"
                maxLength={copy.limits.role}
                autoComplete="organization-title"
                placeholder={copy.rolePlaceholder}
                className={field}
              />
            </div>
          </div>

          <div>
            <label htmlFor="tm-message" className="mb-1.5 block text-sm font-medium text-foreground">
              {copy.messageLabel}
            </label>
            <textarea
              id="tm-message"
              name="message"
              required
              rows={4}
              minLength={copy.limits.messageMin}
              maxLength={copy.limits.messageMax}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={copy.messagePlaceholder}
              className={`${field} min-h-28 resize-y`}
            />
            <p className="mt-1 text-right text-xs text-muted">
              {message.length}/{copy.limits.messageMax}
            </p>
          </div>

          {/* Honeypot for bots; hidden from people and assistive tech. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="tm-website">Website</label>
            <input id="tm-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? copy.sending : copy.submit}
            </button>

            <div role="status" aria-live="polite" className="text-sm">
              {feedback && (
                <p className={`flex items-start gap-2 ${status === "success" ? "text-mint-fg" : "text-accent-fg"}`}>
                  {status === "success" ? (
                    <CircleCheck size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  ) : (
                    <CircleAlert size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  )}
                  {feedback}
                </p>
              )}
            </div>
          </div>
        </form>
      </Reveal>
    </section>
  );
}
