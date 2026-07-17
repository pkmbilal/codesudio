import Link from 'next/link';

export function OtherServiceCard({ service }) {
  return (
    <Link
      href={service.href}
      className="block bg-white border border-border rounded-2xl p-[22px] transition-all hover:border-brand hover:-translate-y-[3px]"
    >
      <span className="inline-block font-mono text-xs font-semibold text-brand-dark bg-chip-bg rounded-[7px] px-[9px] py-1">
        {service.code}
      </span>
      <h3 className="font-heading font-semibold text-[17px] mt-3.5 mb-1.5 tracking-[-0.01em] text-ink">
        {service.title}
      </h3>
      <p className="text-[13.5px] leading-[1.55] text-[#6b7a71] m-0">{service.tagline}</p>
    </Link>
  );
}
