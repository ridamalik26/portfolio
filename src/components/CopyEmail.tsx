"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/data/portfolio";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers or contexts without the async clipboard API.
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export default function CopyEmail({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function onClick() {
    if (!(await copyText(address))) return;
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={onClick}
        aria-label={contact.copyLabel}
        title={contact.copyLabel}
        className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent-fg"
      >
        {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
      </button>
      <span role="status" aria-live="polite" className="min-w-14 text-xs font-semibold text-mint-fg">
        {copied ? contact.copiedLabel : ""}
      </span>
    </span>
  );
}
