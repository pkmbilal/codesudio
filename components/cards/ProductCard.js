import Image from 'next/image';
import { waLink } from '@/lib/wa';

export function ProductCard({ product }) {
  const feat = product.feat;

  return (
    <div
      className={`rounded-card overflow-hidden flex flex-col border transition-transform hover:-translate-y-1 ${
        feat
          ? 'bg-[linear-gradient(150deg,#0C1410,#13251A)] border-ink shadow-[0_24px_55px_-26px_rgba(22,163,74,.55)]'
          : 'bg-white border-border shadow-none'
      }`}
    >
      <div className="h-[150px] relative overflow-hidden">
        <Image
          src={`https://picsum.photos/seed/${product.seed}/800/500`}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2.5">
          <span
            className={`font-heading font-bold text-[22px] tracking-[-0.02em] ${
              feat ? 'text-white' : 'text-ink'
            }`}
          >
            {product.name}
          </span>
          <span
            className={`font-mono text-[11px] font-semibold rounded-pill px-2.5 py-[5px] ${
              feat ? 'text-ink bg-brand-bright' : 'text-brand-dark bg-chip-bg'
            }`}
          >
            {product.tag}
          </span>
        </div>
        <p
          className={`text-[14.5px] leading-relaxed my-3.5 mb-[22px] ${
            feat ? 'text-text-dark-1' : 'text-muted'
          }`}
        >
          {product.desc}
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener"
          className={`mt-auto inline-flex items-center gap-[7px] text-sm font-semibold transition-[gap] hover:gap-[11px] ${
            feat ? 'text-brand-bright' : 'text-brand-dark'
          }`}
        >
          {product.cta} <span>→</span>
        </a>
      </div>
    </div>
  );
}
