"use client";

import { useState } from "react";
import { Button } from "./Button";

const inputClass =
  "w-full min-h-[48px] rounded-md border border-hairline bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-ink focus:bg-surface outline-none transition-colors";

const labelClass = "eyebrow block mb-2";

export function ContactForm() {
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
        body: JSON.stringify(data),
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
          <label htmlFor="name" className={labelClass}>
            Name
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
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`${inputClass} tabular`}
          />
        </div>
        <div>
          <label htmlFor="intent" className={labelClass}>
            I&rsquo;m thinking about
          </label>
          <select id="intent" name="intent" className={inputClass} defaultValue="selling">
            <option value="selling">Selling</option>
            <option value="buying">Buying</option>
            <option value="both">Both</option>
            <option value="market-update">Just a market update</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about the property and your timing
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputClass} min-h-[140px] py-3 leading-relaxed`}
        />
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted max-w-md">
          By submitting, you agree to be contacted by Ratowsky Group. We never share or sell
          contact info.
        </p>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send"}
        </Button>
      </div>

      {status === "ok" && (
        <p className="text-sm text-accent-deep">
          Thanks — message received. Craig or Justin will reply within one business day.
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
