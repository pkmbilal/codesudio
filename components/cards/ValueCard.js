export function ValueCard({ value }) {
  return (
    <div className="animate-reveal motion-reduce:animate-none bg-surface-dark-3 border border-border-dark-2 rounded-2xl p-6">
      <span className="inline-block font-mono text-xs font-semibold text-brand-bright bg-brand-bright/[0.08] rounded-[7px] px-[9px] py-1">
        {value.code}
      </span>
      <h3 className="font-heading font-semibold text-lg mt-3.5 mb-2 tracking-[-0.01em]">{value.title}</h3>
      <p className="text-sm leading-relaxed text-text-dark-5 m-0">{value.desc}</p>
    </div>
  );
}
