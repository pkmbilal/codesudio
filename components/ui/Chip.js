export function Chip({ children, icon = '</>' }) {
  return (
    <div className="inline-flex items-center gap-[9px] bg-chip-bg border border-chip-border rounded-pill px-[14px] py-[7px] font-mono text-[12.5px] font-semibold text-brand-darker tracking-[0.02em]">
      <span className="font-mono">{icon}</span>
      {children}
    </div>
  );
}
