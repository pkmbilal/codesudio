'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { NAV } from '@/data/nav';
import { waLink } from '@/lib/wa';
import logoMark from '@/public/logo-mark.png';

export function Header() {
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const t = common[lang];
  const nav = NAV[lang];
  const langLabel = lang === 'ar' ? 'EN' : 'عربي';

  return (
    <header className="sticky top-0 z-50 bg-bg/[0.82] backdrop-blur-[14px] border-b border-border">
      <div className="max-w-[1200px] mx-auto px-[22px] py-[14px] flex items-center gap-5 flex-wrap">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image src={logoMark} alt="Codesudio" className="w-[34px] h-auto block" />
          <span className="font-heading font-bold text-[21px] tracking-[-0.02em] text-ink">
            codesudio
          </span>
        </Link>

        <nav className="flex items-center gap-[26px] mx-auto flex-wrap">
          {nav.map((item) => {
            const isRealPage = !item.href.includes('#');
            const isActive = isRealPage && pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14.5px] font-medium tracking-[0.01em] transition-colors hover:text-ink ${
                  isActive ? 'text-ink' : 'text-muted'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleLang}
            className="flex items-center gap-[7px] border border-border-strong bg-white rounded-pill px-[13px] py-[7px] cursor-pointer font-mono text-[12.5px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand-dark"
          >
            <span className="w-[7px] h-[7px] rounded-full bg-brand inline-block" />
            {langLabel}
          </button>
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className="grid place-items-center w-10 h-10 rounded-[11px] bg-whatsapp !text-white font-bold shrink-0 transition-colors hover:bg-whatsapp-hover"
          >
            <span className="text-[19px] leading-none">✆</span>
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center bg-ink !text-white rounded-[11px] px-[18px] py-[11px] text-sm font-semibold transition-colors hover:bg-brand hover:!text-white"
          >
            {t.bookCall}
          </a>
        </div>
      </div>
    </header>
  );
}
