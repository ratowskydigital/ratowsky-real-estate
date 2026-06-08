import { ButtonLink } from "./Button";

type CtaBlockProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBlock({
  eyebrow = "Next step",
  title,
  body,
  primaryHref = "/contact",
  primaryLabel = "Schedule a strategy call",
  secondaryHref,
  secondaryLabel,
}: CtaBlockProps) {
  return (
    <section className="bg-surface">
      <div className="max-w-prose mx-auto px-6 lg:px-10 py-section text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 font-serif text-2xl leading-tight tracking-tightest">{title}</h2>
        {body && <p className="mt-5 text-md text-ink-soft max-w-xl mx-auto">{body}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          {secondaryHref && secondaryLabel && (
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
