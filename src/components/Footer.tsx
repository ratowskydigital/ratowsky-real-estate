import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import {
  CompassWordmark,
  EqualHousingMark,
  RealtorMark,
} from "./icons/TrademarkIcons";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  LinkedInIcon,
  ThreadsIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "./icons/SocialIcons";

type SocialLink = {
  href: string;
  label: string;
  icon: ReactNode;
};

export function Footer() {
  const year = new Date().getFullYear();

  const socials: SocialLink[] = [
    { href: site.googleBusiness.profile, label: "Google Business Profile", icon: <GoogleIcon /> },
    { href: site.googleBusiness.reviews, label: "Leave a Google review", icon: <span className="font-serif font-medium text-[12px] tabular leading-none">★</span> },
    { href: site.social.facebook, label: "Facebook", icon: <FacebookIcon /> },
    { href: site.social.threads, label: "Threads", icon: <ThreadsIcon /> },
    { href: site.social.youtube, label: "YouTube", icon: <YouTubeIcon /> },
    { href: site.social.instagram, label: "Instagram", icon: <InstagramIcon /> },
    { href: site.social.tiktok, label: "TikTok", icon: <TikTokIcon /> },
    { href: site.social.linkedin, label: "LinkedIn", icon: <LinkedInIcon /> },
    { href: site.social.x, label: "X (Twitter)", icon: <XIcon /> },
  ];

  return (
    <footer className="border-t border-hairline mt-section bg-surface">
      <div className="max-w-landing mx-auto px-6 lg:px-10 py-16">
        {/* Compass affiliation lockup */}
        <div className="mb-12 text-ink">
          <a
            href="https://www.compass.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Compass"
            className="inline-flex items-center"
          >
            <CompassWordmark />
          </a>
        </div>

        {/* Three columns: Sitemap | Contact | Address */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Sitemap */}
          <div>
            <p className="eyebrow mb-5">Sitemap</p>
            <ul className="space-y-3 text-base">
              {site.footerNav.explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-soft hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
              {site.footerNav.compass.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-ink-soft hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — Craig + Justin */}
          <div>
            <p className="eyebrow mb-5">Contact</p>

            <div className="space-y-2">
              <p className="font-sans font-bold text-ink">{site.agents.craig.name}</p>
              <p>
                <a
                  href={site.agents.craig.phoneHref}
                  className="text-ink-soft hover:text-ink underline underline-offset-[3px] tabular"
                >
                  {site.agents.craig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.agents.craig.email}`}
                  className="text-ink-soft hover:text-ink underline underline-offset-[3px] break-all"
                >
                  {site.agents.craig.email}
                </a>
              </p>
              <p className="text-sm text-muted tabular">CA DRE# {site.agents.craig.dre}</p>
            </div>

            <div className="mt-8 space-y-2">
              <p className="font-sans font-bold text-ink">{site.agents.justin.name}</p>
              <p>
                <a
                  href={site.agents.justin.phoneHref}
                  className="text-ink-soft hover:text-ink underline underline-offset-[3px] tabular"
                >
                  {site.agents.justin.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.agents.justin.email}`}
                  className="text-ink-soft hover:text-ink underline underline-offset-[3px] break-all"
                >
                  {site.agents.justin.email}
                </a>
              </p>
              <p className="text-sm text-muted tabular">CA DRE# {site.agents.justin.dre}</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <p className="eyebrow mb-5">Address</p>
            <p className="font-sans font-bold text-ink">{site.fullName}</p>
            <p className="mt-2 text-ink-soft">{site.address.street}</p>
            <p className="text-ink-soft">
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
          </div>
        </div>

        {/* Compliance disclaimer (C.A.R / N.A.R / Fair Housing aligned) */}
        <div className="mt-16 max-w-4xl">
          <p className="text-sm text-muted leading-relaxed">
            {site.name} is a team of real estate agents affiliated with{" "}
            <a
              href="https://www.compass.com"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-[3px] hover:text-ink"
            >
              Compass
            </a>
            . Compass is a licensed real estate broker (CA DRE# {site.brokerageLicense}) licensed
            by the state of California and abides by Equal Housing Opportunity laws. All material
            presented herein is intended for informational purposes only. Information is compiled
            from sources deemed reliable but is subject to errors, omissions, changes in price,
            condition, sale, or withdrawal without notice. No statement is made as to accuracy of
            any description. All measurements and square footages are approximate. This is not
            intended to solicit property already listed. Nothing herein shall be construed as
            legal, accounting or other professional advice outside the realm of real estate
            brokerage.
          </p>
        </div>

        {/* Trademark marks: REALTOR® + Equal Housing Opportunity */}
        <div className="mt-12 flex items-center gap-6">
          <RealtorMark />
          <EqualHousingMark />
        </div>

        {/* Bottom bar: legal links + social cluster */}
        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {site.footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="text-muted">
              &copy; {year} {site.fullName}. All rights reserved.
            </li>
          </ul>

          <ul className="flex items-center gap-3" aria-label="Connect with us">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={s.label}
                  title={s.label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-hairline text-ink-soft hover:text-ink hover:border-ink transition-colors"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
