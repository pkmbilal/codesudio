import Link from 'next/link';

export function ServiceCardDark({ service, learnMoreLabel }) {
  return (
    <Link
      href={service.href}
      className="block bg-surface-dark-3 border border-border-dark-2 rounded-2xl p-[22px] transition-all hover:border-brand hover:-translate-y-[3px]"
    >
      <span className="inline-block font-mono text-xs font-semibold text-brand-bright bg-brand-bright/[0.08] rounded-[7px] px-[9px] py-1">
        {service.code}
      </span>
      <h4 className="font-heading font-semibold text-[17.5px] mt-4 mb-2 tracking-[-0.01em] text-white">
        {service.title}
      </h4>
      <p className="text-sm leading-relaxed text-text-dark-5 mb-3.5">{service.desc}</p>
      <span className="inline-flex items-center gap-1.5 font-mono text-[12.5px] font-semibold text-brand-bright">
        {learnMoreLabel} <span>→</span>
      </span>
    </Link>
  );
}

export function ServiceCardLight({ service }) {
  return (
    <Link
      href={service.href}
      className="flex flex-col bg-white border border-border rounded-[18px] p-[26px] transition-all hover:border-brand hover:-translate-y-[3px] hover:shadow-[0_20px_46px_-28px_rgba(12,20,16,.3)]"
    >
      <div className="flex items-center justify-between">
        <span className="grid place-items-center w-[42px] h-[42px] rounded-xl bg-[linear-gradient(140deg,#57E23A,#0FA23C)] text-white font-mono font-semibold text-[15px]">
          {service.code}
        </span>
        <span className="text-xl text-[#c3cec8]">→</span>
      </div>
      <h3 className="font-heading font-semibold text-[19px] mt-[18px] mb-2 tracking-[-0.01em] text-ink">
        {service.title}
      </h3>
      <p className="text-[14.5px] leading-relaxed text-[#5b6a61] mb-[18px] flex-1">{service.desc}</p>
      <div className="flex flex-wrap gap-[7px]">
        {service.previewStack.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11.5px] font-semibold text-brand-darker bg-chip-bg rounded-md px-[9px] py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
