'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { FOOTER_LINKS } from '@/data/nav';
import { waLink } from '@/lib/wa';
import logoMark from '@/public/logo-mark.png';
import zatcaLogo from '@/public/zatca.webp';
import vision2030Logo from '@/public/vision2030.webp';

export function Footer() {
  const { lang } = useLanguage();
  const t = common[lang];
  const footerLinks = FOOTER_LINKS[lang];

  return (
    <footer className="bg-ink text-text-dark-2">
      <div className="max-w-[1200px] mx-auto px-[22px] pt-[clamp(46px,6vw,72px)] pb-[30px] grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-[38px]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src={logoMark} alt="Codesudio" className="w-[30px] h-auto" />
            <span className="font-heading font-bold text-xl text-white">codesudio</span>
          </div>
          <p className="text-sm leading-relaxed text-text-dark-3 mt-4 max-w-[30ch]">
            {t.footerTagline}
          </p>
        </div>

        <div>
          <div className="font-mono text-[11.5px] font-semibold tracking-[0.06em] uppercase text-brand-bright">
            {t.footerContact}
          </div>
          <div className="mt-[15px] flex flex-col gap-3 text-sm">
            <a
              href="tel:+966531826230"
              className="flex items-center gap-2.5 text-text-dark-2 transition-colors hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                <path
                  d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.24 1L6.6 10.8z"
                  fill="#57E23A"
                />
              </svg>
              +966 53 182 6230
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp 0531826230"
              className="flex items-center gap-2.5 text-text-dark-2 transition-colors hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                <path
                  d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.3-.5v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 6 8.9a4.8 4.8 0 0 0 1 2.5 11 11 0 0 0 4.2 3.7c.6.3 1 .4 1.4.5a3.3 3.3 0 0 0 1.5.1c.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1-.2-.2-.4-.3z"
                  fill="#25D366"
                />
              </svg>
              0531826230
            </a>
            <a
              href="mailto:hello@codesudio.com"
              className="flex items-center gap-2.5 text-text-dark-2 transition-colors hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="#57E23A" strokeWidth="1.7" />
                <path
                  d="M4 7.5l8 5 8-5"
                  stroke="#57E23A"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              hello@codesudio.com
            </a>
          </div>
        </div>

        <div>
          <div className="font-mono text-[11.5px] font-semibold tracking-[0.06em] uppercase text-brand-bright">
            {t.footerLinks}
          </div>
          <div className="mt-[15px] flex flex-col gap-2.5 text-sm">
            {footerLinks.map((fl) => (
              <Link
                key={fl.href}
                href={fl.href}
                className="text-text-dark-2 transition-colors hover:text-white"
              >
                {fl.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[11.5px] font-semibold tracking-[0.06em] uppercase text-brand-bright">
            {t.footerVisit}
          </div>
          <div className="mt-[15px] text-sm leading-[1.7] text-text-dark-3">
            <div>{t.footerLocation}</div>
            <div className="mt-3 text-text-dark-2">{t.footerHoursLabel}</div>
            <div>{t.footerHours}</div>
          </div>
        </div>
      </div>

      <div className="border-t border-border-dark">
        <div className="max-w-[1200px] mx-auto px-[22px] py-[18px] flex items-center justify-between gap-4 flex-wrap">
          <span className="text-[13px] text-text-dark-4">{t.copyright}</span>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center h-9 bg-white rounded-[9px] px-[13px]">
              <Image
                src={zatcaLogo}
                alt="ZATCA — Zakat, Tax and Customs Authority"
                className="h-6 w-auto block"
              />
            </span>
            <span className="inline-flex items-center h-9 bg-white rounded-[9px] px-[13px]">
              <Image
                src={vision2030Logo}
                alt="Saudi Vision 2030"
                className="h-7 w-auto block"
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
