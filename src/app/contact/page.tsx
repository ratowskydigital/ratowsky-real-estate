import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Schedule a strategy call with Ratowsky Group at Compass. Call ${site.phone} or send a note.`,
};

export default function ContactPage() {
  return (
    <section className="border-b border-hairline">
      <div className="max-w-landing mx-auto px-6 lg:px-10 py-section grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
            The fastest first step is a 30-minute call.
          </h1>
          <p className="mt-6 text-md text-ink-soft">
            Tell us a little about the property, your timing, and the outcome you want. Craig or
            Justin will reply within one business day with a calendar link and a short pre-call
            prep doc.
          </p>

          <div className="mt-10 space-y-3 text-sm text-ink-soft">
            <p>
              <span className="eyebrow block mb-1">Office</span>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <p>
              <span className="eyebrow block mb-1">Phone</span>
              <a href={site.phoneHref} className="tabular hover:text-ink">
                {site.phone}
              </a>
            </p>
            <p>
              <span className="eyebrow block mb-1">Email</span>
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
