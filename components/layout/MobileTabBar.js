'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Home,
  Layers,
  Tag,
  Briefcase,
  Menu,
  X,
  Boxes,
  MapPin,
  Users,
  Mail,
  Languages,
  CalendarCheck,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { waLink } from '@/lib/wa';

const TABS = [
  { href: '/', icon: Home, en: 'Home', ar: 'الرئيسية' },
  { href: '/services', icon: Layers, en: 'Services', ar: 'الخدمات' },
  { href: '/packages', icon: Tag, en: 'Packages', ar: 'الباقات' },
  { href: '/portfolio', icon: Briefcase, en: 'Work', ar: 'الأعمال' },
];

const MORE_LINKS = [
  {
    href: '/products',
    icon: Boxes,
    en: 'Products',
    ar: 'المنتجات',
    subEn: 'Ready-made software',
    subAr: 'برمجيات جاهزة',
  },
  {
    href: '/locations',
    icon: MapPin,
    en: 'Locations',
    ar: 'المواقع',
    subEn: 'Cities we serve',
    subAr: 'المدن التي نخدمها',
  },
  {
    href: '/about',
    icon: Users,
    en: 'About',
    ar: 'من نحن',
    subEn: 'Our team & story',
    subAr: 'فريقنا وقصتنا',
  },
  {
    href: '/contact',
    icon: Mail,
    en: 'Contact',
    ar: 'تواصل',
    subEn: 'Get in touch',
    subAr: 'تواصل معنا',
  },
];

function isActivePath(pathname, href) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileTabBar() {
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  // Remember which pathname opened the sheet so it auto-closes on navigation.
  const [openPathname, setOpenPathname] = useState(null);
  const isOpen = openPathname === pathname;
  const t = common[lang];
  const moreActive = MORE_LINKS.some((l) => isActivePath(pathname, l.href));
  const moreLabel = lang === 'ar' ? 'المزيد' : 'More';

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && setOpenPathname(null);
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // Floating dock item: active = dark pill with bright-green icon, inactive = quiet icon + label.
  const tabClass = (active) =>
    `relative flex h-full flex-1 flex-col items-center justify-center gap-[3px] rounded-[20px] text-[10.5px] font-semibold tracking-[0.01em] transition-all duration-200 active:scale-90 ${
      active
        ? 'bg-ink !text-white shadow-[0_8px_18px_-6px_rgba(12,20,16,0.55)]'
        : 'text-muted'
    }`;
  const iconClass = (active) =>
    `transition-colors duration-200 ${active ? 'text-brand-bright' : ''}`;

  return (
    <div className="md:hidden">
      {/* Bottom sheet */}
      <div
        className={`fixed inset-0 z-[70] transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          tabIndex={isOpen ? 0 : -1}
          aria-label={t.menuClose}
          onClick={() => setOpenPathname(null)}
          className="absolute inset-0 bg-ink/40"
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label={moreLabel}
          className={`absolute inset-x-2.5 bottom-[calc(90px+env(safe-area-inset-bottom))] rounded-[28px] border border-white/70 bg-white/[0.92] p-3 pt-2.5 shadow-[0_30px_70px_-24px_rgba(12,20,16,0.55)] ring-1 ring-ink/[0.06] backdrop-blur-2xl transition-all duration-250 ${
            isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-95 opacity-0'
          }`}
        >
          <div className="mx-auto mb-2.5 h-1 w-9 rounded-full bg-border-strong" />

          <div className="grid gap-1.5">
            {MORE_LINKS.map(({ icon: Icon, ...item }) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => setOpenPathname(null)}
                  aria-current={active ? 'page' : undefined}
                  className={`group flex items-center gap-3.5 rounded-[18px] p-2.5 transition-all active:scale-[0.98] ${
                    active ? 'bg-chip-bg ring-1 ring-chip-border' : 'active:bg-tint'
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-[14px] ${
                      active
                        ? 'bg-ink text-brand-bright shadow-[0_8px_16px_-6px_rgba(12,20,16,0.5)]'
                        : 'bg-tint text-brand-darker ring-1 ring-border'
                    }`}
                  >
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-semibold leading-tight text-ink">
                      {item[lang]}
                    </span>
                    <span className="mt-0.5 block truncate text-[12.5px] leading-tight text-muted">
                      {lang === 'ar' ? item.subAr : item.subEn}
                    </span>
                  </span>
                  <ChevronRight
                    size={18}
                    className="shrink-0 text-muted/60 rtl:rotate-180"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-2.5 grid grid-cols-[auto_1fr] gap-2 border-t border-border pt-2.5">
            <button
              type="button"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => {
                toggleLang();
                setOpenPathname(null);
              }}
              className="flex items-center justify-center gap-2 rounded-[16px] border border-border-strong bg-white px-4 py-3 text-[13px] font-semibold text-ink transition-transform active:scale-95"
            >
              <Languages size={17} className="text-brand-darker" aria-hidden="true" />
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              tabIndex={isOpen ? 0 : -1}
              className="inline-flex items-center justify-center gap-2 rounded-[16px] bg-ink px-4 py-3 text-[13.5px] font-semibold !text-white shadow-[0_10px_20px_-8px_rgba(12,20,16,0.6)] transition-transform active:scale-95"
            >
              <CalendarCheck size={17} className="text-brand-bright" aria-hidden="true" />
              {t.bookCall}
            </a>
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-3.5 bottom-[calc(12px+env(safe-area-inset-bottom))] z-[80] flex h-[66px] items-stretch gap-1 rounded-[26px] border border-white/70 bg-white/[0.78] p-1.5 shadow-[0_18px_40px_-12px_rgba(12,20,16,0.35),0_2px_8px_rgba(12,20,16,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-ink/[0.06] backdrop-blur-2xl backdrop-saturate-150"
      >
        {TABS.map(({ href, icon: Icon, ...labels }) => {
          const active = !isOpen && isActivePath(pathname, href);
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setOpenPathname(null)}
              aria-current={active ? 'page' : undefined}
              className={tabClass(active)}
            >
              <Icon
                size={21}
                strokeWidth={active ? 2.3 : 1.8}
                className={iconClass(active)}
                aria-hidden="true"
              />
              <span>{labels[lang]}</span>
            </Link>
          );
        })}
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setOpenPathname(isOpen ? null : pathname)}
          className={tabClass(isOpen || moreActive)}
        >
          {isOpen ? (
            <X size={21} strokeWidth={2.3} className={iconClass(true)} aria-hidden="true" />
          ) : (
            <Menu
              size={21}
              strokeWidth={moreActive ? 2.3 : 1.8}
              className={iconClass(moreActive)}
              aria-hidden="true"
            />
          )}
          <span>{moreLabel}</span>
        </button>
      </nav>
    </div>
  );
}
