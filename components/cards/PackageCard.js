import { Check } from 'lucide-react';
import { waLink } from '@/lib/wa';

export function PackageCard({ pkg, lang, mostPopularLabel, whatsIncludedLabel }) {
  const feat = pkg.highlighted;
  const copy = pkg[lang];
  const locale = lang === 'ar' ? 'ar-SA' : 'en-US';
  const priceLabel = pkg.price.amount.toLocaleString(locale);
  const originalPriceLabel = pkg.price.originalAmount?.toLocaleString(locale);

  return (
    <div
      className={`rounded-card overflow-hidden flex flex-col h-full border p-6 transition-transform hover:-translate-y-1 ${
        feat
          ? 'bg-[linear-gradient(150deg,#0C1410,#13251A)] border-ink shadow-[0_24px_55px_-26px_rgba(22,163,74,.55)]'
          : 'bg-white border-border shadow-none'
      }`}
    >
      {feat && (
        <span className="self-start font-mono text-[11px] font-semibold rounded-pill px-2.5 py-[5px] text-ink bg-brand-bright mb-4">
          {mostPopularLabel}
        </span>
      )}

      <span className={`font-heading font-bold text-[22px] tracking-[-0.02em] ${feat ? 'text-white' : 'text-ink'}`}>
        {copy.name}
      </span>
      <p className={`text-[14.5px] leading-relaxed mt-2.5 mb-0 ${feat ? 'text-text-dark-1' : 'text-muted'}`}>
        {copy.tagline}
      </p>

      {originalPriceLabel && (
        <span className={`text-[13px] mt-6 line-through ${feat ? 'text-text-dark-3' : 'text-muted'}`}>
          {originalPriceLabel} {pkg.price.currency}
        </span>
      )}
      <div className={`flex items-baseline gap-2 ${originalPriceLabel ? 'mt-1' : 'mt-6'}`}>
        <span className={`font-heading font-bold text-[clamp(28px,4vw,36px)] tracking-[-0.02em] ${feat ? 'text-white' : 'text-ink'}`}>
          {priceLabel}
        </span>
        <span className={`font-mono text-[13px] font-semibold ${feat ? 'text-brand-bright' : 'text-brand-dark'}`}>
          {pkg.price.currency}
        </span>
      </div>
      <span className={`text-[12.5px] mt-1 ${feat ? 'text-text-dark-2' : 'text-muted'}`}>{copy.billingNote}</span>

      <div className={`h-px my-5 ${feat ? 'bg-white/15' : 'bg-border'}`} />

      <span className={`font-mono text-[11.5px] font-semibold tracking-[0.06em] uppercase ${feat ? 'text-text-dark-3' : 'text-muted'}`}>
        {whatsIncludedLabel}
      </span>

      <ul className="flex flex-col gap-2.5 mt-3.5 mb-0 p-0 list-none flex-1">
        {copy.features.map((line) => (
          <li key={line} className={`flex items-start gap-2.5 text-[14px] leading-snug ${feat ? 'text-text-dark-1' : 'text-ink'}`}>
            <Check
              aria-hidden="true"
              className={`h-4 w-4 shrink-0 mt-[2px] ${feat ? 'text-brand-bright' : 'text-brand-dark'}`}
              strokeWidth={2.6}
            />
            {line}
          </li>
        ))}
      </ul>

      <a
        href={waLink}
        target="_blank"
        rel="noopener"
        className={`mt-6 inline-flex items-center justify-center rounded-[13px] px-[22px] py-[13px] text-[14.5px] font-semibold transition-colors ${
          feat
            ? 'bg-brand-darker !text-white hover:bg-brand-dark'
            : 'bg-ink !text-white hover:bg-brand-darker'
        }`}
      >
        {copy.ctaLabel}
      </a>
    </div>
  );
}
