import type { ReactNode } from "react";

type CalloutProps = {
  children: ReactNode;
  title?: string;
};

export function Callout({ children, title }: CalloutProps) {
  return (
    <aside className="rounded-callout bg-surface-warm border-l-[3px] border-accent px-6 py-5">
      {title && <p className="eyebrow text-accent-deep mb-2">{title}</p>}
      <div className="text-ink-soft text-base leading-relaxed">{children}</div>
    </aside>
  );
}
