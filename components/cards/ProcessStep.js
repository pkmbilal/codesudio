export function ProcessStep({ step }) {
  return (
    <div className="animate-reveal motion-reduce:animate-none bg-surface-dark-3 border border-border-dark-2 rounded-2xl p-[22px]">
      <div className="font-mono text-[13px] font-semibold text-brand-bright">{step.step}</div>
      <h3 className="font-heading font-semibold text-[17px] mt-3 mb-2 tracking-[-0.01em]">{step.title}</h3>
      <p className="text-sm leading-[1.58] text-text-dark-5 m-0">{step.desc}</p>
    </div>
  );
}
