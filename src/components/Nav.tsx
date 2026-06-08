import Link from "next/link";
import { ButtonLink } from "./Button";
import { site } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-hairline">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-accent focus:text-surface-deep focus:px-3 focus:py-1.5 focus:rounded-md focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <div className="max-w-landing mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="font-serif text-lg leading-none tracking-tightest">
          Ratowsky <span className="text-muted font-sans font-normal text-sm">at Compass</span>
        </Link>
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
          {site.primaryNav
            .filter((item) => item.href !== "/contact")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink-soft hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden sm:inline text-sm text-ink-soft hover:text-ink tabular"
          >
            {site.phone}
          </a>
          <ButtonLink href="/contact" className="hidden md:inline-flex">
            Work with us
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
