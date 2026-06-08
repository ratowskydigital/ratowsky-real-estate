"use client";

import { useState } from "react";
import { Button } from "./Button";

const inputClass =
  "w-full min-h-[48px] rounded-md border border-hairline bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-ink focus:bg-surface outline-none transition-colors";

const labelClass = "eyebrow block mb-2";

export function TourBookingForm() {
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
        body: JSON.stringify({ ...data, intent: "buyer-tour" }),
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
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="tb-name" className={labelClass}>
            Your name
          </label>
          <input id="tb-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="tb-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="tb-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={`${inputClass} tabular`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="tb-email" className={labelClass}>
          Email
        </label>
        <input
          id="tb-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="tb-budget" className={labelClass}>
          Price range
        </label>
        <select id="tb-budget" name="budget" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          <option value="under-1m">Under $1M</option>
          <option value="1m-1.5m">$1M – $1.5M</option>
          <option value="1.5m-2.5m">$1.5M – $2.5M</option>
          <option value="2.5m-5m">$2.5M – $5M</option>
          <option value="5m-plus">$5M+</option>
        </select>
      </div>

      <div>
        <label htmlFor="tb-criteria" className={labelClass}>
          What are you looking for? (optional)
        </label>
        <textarea
          id="tb-criteria"
          name="message"
          rows={3}
          placeholder="Waterfront, dock for 50 ft vessel, 4 beds, Huntington Harbour or Sunset Beach…"
          className={`${inputClass} min-h-[100px] py-3 leading-relaxed`}
        />
      </div>

      <div className="flex items-start justify-between gap-4 pt-2 flex-wrap">
        <p className="text-xs text-muted max-w-xs">
          We reach out same day. No spam, no automated drip. A real reply from Craig or
          Justin.
        </p>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Book my tour"}
        </Button>
      </div>

      {status === "ok" && (
        <p className="text-sm text-accent-deep">
          Got it. Expect to hear from us today with a curated shortlist.
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
