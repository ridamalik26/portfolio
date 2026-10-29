"use client";

import { CircleAlert, CircleCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contact } from "@/data/portfolio";

type Status = "idle" | "sending" | "success" | "error" | "unconfigured";

const field =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted/80 transition-colors focus-visible:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [detail, setDetail] = useState("");
  const f = contact.form;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!id) {
      setStatus("unconfigured");
      return;
    }
    setStatus("sending");
    setDetail("");
    try {
      const res = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        const data = (await res.json().catch(() => null)) as { errors?: { message: string }[] } | null;
        setDetail(data?.errors?.map((x) => x.message).join(", ") ?? "");
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={onSubmit}
      className="flex h-full flex-col gap-4 rounded-2xl border border-border border-t-2 border-t-accent bg-card p-5 sm:p-6"
    >
      <h3 className="text-lg font-bold text-foreground">{f.title}</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-foreground">
            {f.nameLabel}
          </label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder={f.namePlaceholder} className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-foreground">
            {f.emailLabel}
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder={f.emailPlaceholder} className={field} />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-foreground">
          {f.messageLabel}
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder={f.messagePlaceholder}
          className={`${field} min-h-32 flex-1 resize-y`}
        />
      </div>

      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? f.sending : f.submit}
        </button>

        <div aria-live="polite" role="status" className="text-sm">
          {status === "success" && (
            <p className="flex items-start gap-2 text-mint-fg">
              <CircleCheck size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
              {f.success}
            </p>
          )}
          {(status === "error" || status === "unconfigured") && (
            <p className="flex items-start gap-2 text-accent-fg">
              <CircleAlert size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
              {status === "unconfigured" ? f.notConfigured : `${f.error}${detail ? ` (${detail})` : ""}`}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
