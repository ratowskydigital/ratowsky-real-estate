type StatCardProps = {
  label: string;
  value: string;
  hint?: string;
};

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="rounded-card border border-hairline bg-surface p-6">
      <p className="eyebrow">{label}</p>
      <p className="mt-3 font-serif text-xl text-ink tabular">{value}</p>
      {hint && <p className="mt-2 text-sm text-muted">{hint}</p>}
    </div>
  );
}
