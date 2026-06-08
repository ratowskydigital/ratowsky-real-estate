import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center min-h-[48px] px-7 rounded-pill font-sans font-medium text-sm tracking-wide cursor-pointer transition duration-200 ease-out-soft will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-surface-deep hover:bg-accent-deep hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[3px]",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-surface-warm",
};

type ButtonAsLinkProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonAsLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export function Button({ variant = "primary", children, className = "", ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
