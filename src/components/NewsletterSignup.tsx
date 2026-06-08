"use client";

import { useState } from "react";
import { Button } from "./Button";

interface NewsletterSignupProps {
  /** Compact variant: inline row with no dark-background wrapper. */
  compact?: boolean;
}

export function NewsletterSignup({ compact = false }: NewsletterSignupProps = {}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "ok" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (compact) {
    return (
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
          <label className="sr-only" htmlFor="newsletter-email-compact">
            Email address
          </label>
          <input
            id="newsletter-email-compact"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 min-h-[44px] rounded-pill border border-hairline px-5 text-base text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent"
            autoComplete="email"
          />
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Subscribing…" : "Subscribe"}
          </Button>
        </form>
        {status === "ok" && (
          <p className="mt-3 text-sm text-ink-soft">
            You&rsquo;re on the list. Next issue ships first Monday of the month.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-ink-soft">
            That didn&rsquo;t go through. Try again or email{" "}
            <a className="underline" href="mailto:justin.ratowsky@compass.com">
              justin.ratowsky@compass.com
            </a>
            .
          </p>
        )}
      </div>
    );
  }

  return (
    <section className="border-b border-hairline bg-surface-deep text-white">
      <div className="max-w-landing mx-auto px-6 lg:px-10 py-section grid gap-10 lg:grid-cols-12 lg:gap-16 items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow text-accent-soft">The Tides &middot; Newsletter</p>
          <h2 className="mt-4 font-serif text-2xl leading-tight tracking-tightest">
            Orange County market intel,
            <span className="block text-white/70">in your inbox once a month.</span>
          </h2>
          <p className="mt-4 max-w-xl text-md text-white/80">
            Inventory, days-on-market, neighborhood-level price moves, and the strategic plays we
            are seeing on the coast. No fluff. No mass blasts. Unsubscribe any time.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-5 flex flex-col sm:flex-row gap-3"
          noValidate
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 min-h-[48px] rounded-pill bg-white/10 border border-white/20 px-5 text-base text-white placeholder:text-white/50 focus:bg-white/15 focus:border-white/40 outline-none"
            autoComplete="email"
          />
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Subscribing…" : "Subscribe"}
          </Button>
        </form>
        {status === "ok" && (
          <p className="lg:col-span-12 text-sm text-accent-soft">
            You&rsquo;re on the list. The next issue ships at the start of the month.
          </p>
        )}
        {status === "error" && (
          <p className="lg:col-span-12 text-sm text-white/70">
            That didn&rsquo;t go through. Try again in a moment, or email{" "}
            <a className="underline" href="mailto:justin.ratowsky@compass.com">
              justin.ratowsky@compass.com
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
