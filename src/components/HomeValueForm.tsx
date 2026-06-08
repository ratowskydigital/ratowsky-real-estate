"use client";

import { useState } from "react";
import { Button } from "./Button";

const inputClass =
  "w-full min-h-[48px] rounded-md border border-hairline bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-ink focus:bg-surface outline-none transition-colors";

const labelClass = "eyebrow block mb-2";

export function HomeValueForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, intent: "home-valuation" }),
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      <div>
        <label htmlFor="address" className={labelClass}>
          Property address
        </label>
        <input
          id="address"
          name="address"
          required
          autoComplete="street-address"
          placeholder="123 Trinidad Lane, Huntington Beach, CA"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={`${inputClass} tabular`}
          />
        </div>
        <div>
          <label htmlFor="timing" className={labelClass}>
            Timing
          </label>
          <select id="timing" name="timing" className={inputClass} defaultValue="exploring">
            <option value="exploring">Just exploring</option>
            <option value="3-6mo">3–6 months</option>
            <option value="6-12mo">6–12 months</option>
            <option value="now">Ready now</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className={labelClass}>
          Anything we should know? (recent updates, dock size, HOA, etc.)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className={`${inputClass} min-h-[120px] py-3 leading-relaxed`}
        />
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted max-w-md">
          We pull active comps, recent closings, and Compass Private Exclusive data — then write
          you a real strategy memo, not an algorithm estimate.
        </p>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request valuation"}
        </Button>
      </div>

      {status === "ok" && (
        <p className="text-sm text-accent-deep">
          Got it. We will pull comps and reply within one business day.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Please try again, or call 714-336-5682.
        </p>
      )}
    </form>
  );
}
