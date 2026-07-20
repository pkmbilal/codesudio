'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { NAV } from '@/data/nav';
import { waLink } from '@/lib/wa';
import logoMark from '@/public/logo-mark.png';

export function Header() {
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const [menuOpenPathname, setMenuOpenPathname] = useState(null);
  const menuPanelRef = useRef(null);
  const menuToggleRef = useRef(null);
  const t = common[lang];
  const nav = NAV[lang];
  const langLabel = lang === 'ar' ? 'EN' : 'عربي';
  const isMenuOpen = menuOpenPathname === pathname;
  const menuLabel = isMenuOpen ? t.menuClose : t.menuOpen;

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpenPathname(null);
    }

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    function closeOnOutsidePointer(event) {
      if (!isMenuOpen) return;

      const target = event.target;
      if (menuPanelRef.current?.contains(target)) return;
      if (menuToggleRef.current?.contains(target)) return;

      setMenuOpenPathname(null);
    }

    document.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer);
  }, [isMenuOpen]);

  function handleToggleLang() {
    toggleLang();
    setMenuOpenPathname(null);
  }

  function renderNavLinks(linkClassName) {
    return nav.map((item) => {
      const isRealPage = !item.href.includes('#');
      const isActive = isRealPage && pathname === item.href;

      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setMenuOpenPathname(null)}
          className={`${linkClassName} ${isActive ? 'text-ink' : 'text-muted'}`}
        >
          {item.label}
        </Link>
      );
    });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/[0.82] backdrop-blur-[14px]">
      <div className="max-w-[1200px] mx-auto px-[22px] py-[14px] flex items-center gap-5">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image src={logoMark} alt="Codesudio" className="w-[34px] h-auto block" />
          <span className="font-heading font-bold text-[21px] tracking-[-0.02em] text-ink">
            codesudio
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-[26px] mx-auto flex-wrap">
          {renderNavLinks(
            'text-[14.5px] font-medium tracking-[0.01em] transition-colors hover:text-ink'
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={handleToggleLang}
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

        <button
          ref={menuToggleRef}
          type="button"
          aria-label={menuLabel}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu-panel"
          onClick={() => setMenuOpenPathname(isMenuOpen ? null : pathname)}
          className="mobile-menu-toggle ms-auto grid h-10 w-10 place-items-center rounded-[11px] border border-border-strong bg-white text-ink transition-colors hover:border-brand hover:text-brand-dark md:hidden"
        >
          <span className="sr-only">{menuLabel}</span>
          <span className="relative block h-[14px] w-[18px]" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-transform ${
                isMenuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-full rounded-full bg-current transition-opacity ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-current transition-transform ${
                isMenuOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div
        ref={menuPanelRef}
        id="mobile-menu-panel"
        className={`mobile-menu-panel absolute inset-x-0 top-full border-t border-border bg-bg shadow-hero transition-[opacity,transform] duration-200 md:hidden ${
          isMenuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-[22px] py-4">
          <nav className="flex flex-col gap-1">
            {renderNavLinks(
              'rounded-[8px] px-3 py-3 text-base font-semibold transition-colors hover:bg-tint hover:text-ink'
            )}
          </nav>

          <div className="mt-4 grid gap-3 border-t border-border pt-4">
            <button
              onClick={handleToggleLang}
              className="flex items-center justify-center gap-[7px] border border-border-strong bg-white rounded-pill px-[13px] py-[10px] cursor-pointer font-mono text-[12.5px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand-dark"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-brand inline-block" />
              {langLabel}
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              onClick={() => setMenuOpenPathname(null)}
              className="flex h-11 items-center justify-center gap-2 rounded-[11px] bg-whatsapp px-[18px] text-sm font-semibold !text-white transition-colors hover:bg-whatsapp-hover"
            >
              <span className="text-[19px] leading-none">✆</span>
              {t.heroCtaPrimary}
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              onClick={() => setMenuOpenPathname(null)}
              className="inline-flex items-center justify-center bg-ink !text-white rounded-[11px] px-[18px] py-[12px] text-sm font-semibold transition-colors hover:bg-brand hover:!text-white"
            >
              {t.bookCall}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
