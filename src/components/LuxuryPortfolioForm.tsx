"use client";

import { useState } from "react";
import { Button } from "./Button";

const inputClass =
  "w-full min-h-[48px] rounded-md border border-hairline bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-ink focus:bg-surface outline-none transition-colors";

const labelClass = "eyebrow block mb-2";

export function LuxuryPortfolioForm() {
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
        body: JSON.stringify({ ...data, intent: "luxury-portfolio" }),
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
        <label htmlFor="lp-address" className={labelClass}>
          Property address
        </label>
        <input
          id="lp-address"
          name="address"
          required
          autoComplete="street-address"
          placeholder="3801 Seascape Drive, Huntington Beach, CA"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lp-name" className={labelClass}>
            Name
          </label>
          <input id="lp-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="lp-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="lp-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={`${inputClass} tabular`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="lp-email" className={labelClass}>
          Email
        </label>
        <input
          id="lp-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="lp-value" className={labelClass}>
          Expected value range (optional)
        </label>
        <select id="lp-value" name="expectedValue" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          <option value="2m-3m">$2M – $3M</option>
          <option value="3m-5m">$3M – $5M</option>
          <option value="5m-8m">$5M – $8M</option>
          <option value="8m-plus">$8M+</option>
        </select>
      </div>

      <div className="flex items-start justify-between gap-4 pt-2 flex-wrap">
        <p className="text-xs text-muted max-w-xs">
          Handled personally by Justin and Craig. Returned within one business day, in confidence.
          We never share your information.
        </p>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request the portfolio"}
        </Button>
      </div>

      {status === "ok" && (
        <p className="text-sm text-accent-deep">
          Thank you. Justin or Craig will be in touch within one business day.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Please try again, or call 714-336-5682 to speak directly.
        </p>
      )}
    </form>
  );
}
