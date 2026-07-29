'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { FOOTER_LINKS } from '@/data/nav';
import { waLink } from '@/lib/wa';
import logoMark from '@/public/logo-mark.png';
import zatcaLogo from '@/public/zatca.webp';
import vision2030Logo from '@/public/vision2030.webp';

const footerCopy = {
  en: {
    trustTitle: 'Built for Saudi business standards',
    trustSub: 'Bilingual delivery, local compliance awareness and product support from Jubail.',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
  },
  ar: {
    trustTitle: 'مبني لمعايير الأعمال في السعودية',
    trustSub: 'تنفيذ ثنائي اللغة، ووعي بالامتثال المحلي، ودعم منتج من الجبيل.',
    whatsappLabel: 'واتساب',
    phoneLabel: 'الهاتف',
    emailLabel: 'البريد',
  },
};

export function Footer() {
  const { lang } = useLanguage();
  const t = { ...common[lang], ...footerCopy[lang] };
  const footerLinks = FOOTER_LINKS[lang];

  const contactItems = [
    {
      label: t.phoneLabel,
      value: '+966 53 182 6230',
      href: 'tel:+966531826230',
      icon: Phone,
    },
    {
      label: t.whatsappLabel,
      value: '0531826230',
      href: waLink,
      icon: MessageCircle,
      external: true,
    },
    {
      label: t.emailLabel,
      value: 'hello@codesudio.com',
      href: 'mailto:hello@codesudio.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-ink text-text-dark-2">
      <div className="border-t border-border-dark-2 bg-[linear-gradient(180deg,#111C16,#0C1410_46%)]">
        <div className="mx-auto max-w-[1200px] px-[22px]">
          <div className="grid gap-[clamp(30px,5vw,54px)] py-[clamp(44px,7vw,72px)] lg:grid-cols-[minmax(280px,1.35fr)_minmax(220px,.9fr)_minmax(180px,.65fr)_minmax(240px,.9fr)]">
            <div>
              <Link href="/" className="inline-flex items-center gap-2.5">
                <Image src={logoMark} alt="Codesudio" className="h-auto w-[34px]" />
                <span className="font-heading text-[22px] font-bold tracking-[-0.02em] text-white">
                  codesudio
                </span>
              </Link>
              <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-text-dark-3">
                {t.footerTagline}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-pill border border-white/[0.1] bg-white/[0.045] px-3.5 py-2 text-[12.5px] font-semibold text-text-dark-2">
                <ShieldCheck aria-hidden="true" className="h-4 w-4 text-text-dark-3" strokeWidth={2.3} />
                {t.trustTitle}
              </div>
            </div>

            <div>
              <FooterHeading>{t.footerContact}</FooterHeading>
              <div className="mt-[15px] flex flex-col gap-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener' : undefined}
                      aria-label={`${item.label}: ${item.value}`}
                      className="group flex items-center gap-3 text-sm text-text-dark-2 transition-colors hover:text-white"
                    >
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-[10px] border border-white/[0.08] bg-white/[0.05] transition-colors group-hover:border-white/[0.18] group-hover:bg-white/[0.08] ${
                          item.external ? 'text-whatsapp' : 'text-text-dark-3'
                        }`}
                      >
                        <Icon aria-hidden="true" className="h-[17px] w-[17px]" strokeWidth={2.2} />
                      </span>
                      <span>
                        <span className="block text-[11px] font-mono uppercase tracking-[0.07em] text-text-dark-4">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block font-medium">{item.value}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <FooterHeading>{t.footerLinks}</FooterHeading>
              <nav className="mt-[15px] grid gap-2 text-sm" aria-label={t.footerLinks}>
                {footerLinks.map((fl) => (
                  <Link
                    key={fl.href}
                    href={fl.href}
                    className="group inline-flex w-fit items-center gap-1.5 text-text-dark-2 transition-colors hover:text-white"
                  >
                    <span className="h-px w-3 bg-white/20 transition-all group-hover:w-5 group-hover:bg-white/55" />
                    {fl.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <FooterHeading>{t.footerVisit}</FooterHeading>
              <div className="mt-[15px] space-y-4 text-sm leading-[1.7] text-text-dark-3">
                <div className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-1 h-[18px] w-[18px] shrink-0 text-text-dark-3" strokeWidth={2.2} />
                  <span>{t.footerLocation}</span>
                </div>
                <div className="flex gap-3">
                  <Clock3 aria-hidden="true" className="mt-1 h-[18px] w-[18px] shrink-0 text-text-dark-3" strokeWidth={2.2} />
                  <span>
                    <span className="block font-medium text-text-dark-2">{t.footerHoursLabel}</span>
                    {t.footerHours}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border-dark">
            <div className="grid gap-4 py-[18px] md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div>
                <div className="text-[13px] text-text-dark-4">{t.copyright}</div>
                <div className="mt-1 text-[12.5px] text-text-dark-4">{t.trustSub}</div>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex h-9 items-center rounded-[9px] bg-white px-[13px]">
                  <Image
                    src={zatcaLogo}
                    alt="ZATCA - Zakat, Tax and Customs Authority"
                    className="block h-6 w-auto"
                  />
                </span>
                <span className="inline-flex h-9 items-center rounded-[9px] bg-white px-[13px]">
                  <Image
                    src={vision2030Logo}
                    alt="Saudi Vision 2030"
                    className="block h-7 w-auto"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }) {
  return (
    <div className="font-mono text-[11.5px] font-semibold uppercase tracking-[0.06em] text-text-dark-5">
      {children}
    </div>
  );
}
