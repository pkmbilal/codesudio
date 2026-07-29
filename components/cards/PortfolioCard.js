import Image from 'next/image';

export function PortfolioCard({ item }) {
  const CardTag = item.url ? 'a' : 'div';
  const cardProps = item.url
    ? {
        href: item.url,
        target: '_blank',
        rel: 'noopener',
        'aria-label': `${item.name} live project`,
      }
    : {};

  return (
    <CardTag
      {...cardProps}
      className="group bg-white border border-border rounded-card overflow-hidden flex flex-col transition-all hover:shadow-[0_22px_50px_-26px_rgba(12,20,16,.35)] hover:-translate-y-[3px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <div className="h-[170px] relative overflow-hidden">
        <Image
          src={`https://picsum.photos/seed/${item.seed}/800/500`}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
        <span className="absolute bottom-4 start-[18px] font-mono text-xs font-semibold text-white bg-ink/[0.67] border border-white/20 rounded-pill px-[11px] py-[5px] backdrop-blur-[4px] pointer-events-none">
          {item.tag}
        </span>
        {item.url && (
          <span
            aria-hidden="true"
            className="absolute top-4 end-4 grid h-9 w-9 place-items-center rounded-[10px] bg-white/90 text-ink shadow-[0_10px_26px_-18px_rgba(12,20,16,.55)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            -&gt;
          </span>
        )}
      </div>
      <div className="p-[22px] flex flex-col flex-1">
        <h3 className="font-heading font-semibold text-[19px] tracking-[-0.01em] text-ink m-0">
          {item.name}
        </h3>
        <div className="text-[13px] font-medium text-brand-dark mt-[5px]">{item.type}</div>
        <p className="text-[14.5px] leading-relaxed text-muted mt-3.5 mb-0">{item.desc}</p>
      </div>
    </CardTag>
  );
}
