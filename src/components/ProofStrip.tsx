type ProofItem = {
  value: string;
  label: string;
};

const items: ProofItem[] = [
  { value: "1977", label: "Selling HB since" },
  { value: "100+", label: "Coastal closings" },
  { value: "$3.9M", label: "Highest 2025 sale" },
  { value: "8 days", label: "Avg DOM, signature listings" },
];

export function ProofStrip() {
  return (
    <section aria-label="Track record" className="border-b border-hairline bg-surface-warm">
      <div className="max-w-landing mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
        {items.map((item) => (
          <div key={item.label}>
            <p className="font-serif text-2xl text-ink tabular leading-none">{item.value}</p>
            <p className="mt-3 eyebrow">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
