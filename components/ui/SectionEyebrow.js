export function SectionEyebrow({ children, tone = 'light' }) {
  return (
    <div
      className={`font-mono text-[13px] font-semibold tracking-[0.06em] uppercase ${
        tone === 'dark' ? 'text-brand-bright' : 'text-brand-dark'
      }`}
    >
      {children}
    </div>
  );
}
