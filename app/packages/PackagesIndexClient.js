'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { packagesIndex } from '@/dictionaries/packages-index';
import { PACKAGES } from '@/data/packages';
import { waLink } from '@/lib/wa';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton';
import { Chip } from '@/components/ui/Chip';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { PackageCard } from '@/components/cards/PackageCard';

export default function PackagesIndexClient() {
  const { lang } = useLanguage();
  const t = { ...common[lang], ...packagesIndex[lang] };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="border-b border-border bg-[linear-gradient(180deg,#F5F8F6,#FBFCFB)]">
        <div className="max-w-[1100px] mx-auto px-[22px] pt-[clamp(28px,4vw,44px)] pb-[clamp(40px,6vw,64px)]">
          <Breadcrumb items={[{ label: t.crumbHome, href: '/' }]} current={t.crumbPackages} />
          <div className="animate-reveal motion-reduce:animate-none mt-6 max-w-[760px]">
            <Chip>{t.eyebrow}</Chip>
            <h1 className="font-heading font-bold text-[clamp(34px,5.4vw,58px)] leading-[1.04] tracking-[-0.03em] mt-5 mb-0">
              {t.title}
            </h1>
            <p className="text-[clamp(16px,2.2vw,20px)] leading-[1.6] text-muted mt-5 mb-0 max-w-[52ch]">
              {t.sub}
            </p>
          </div>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="max-w-[1200px] mx-auto px-[22px] py-[clamp(48px,7vw,88px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="animate-reveal motion-reduce:animate-none h-full">
              <PackageCard
                pkg={pkg}
                lang={lang}
                mostPopularLabel={t.mostPopular}
                whatsIncludedLabel={t.whatsIncluded}
              />
            </div>
          ))}
        </div>

        <p className="animate-reveal motion-reduce:animate-none text-center text-[14.5px] text-muted mt-9 mb-0">
          {t.customNoteTitle}{' '}
          <Link href="/services" className="text-brand-dark font-semibold hover:underline">
            {t.customNoteLink}
          </Link>
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-[1100px] mx-auto px-[22px] pb-[clamp(56px,8vw,90px)]">
        <div className="animate-reveal motion-reduce:animate-none relative overflow-hidden rounded-[26px] bg-[linear-gradient(140deg,#0C1410,#13251A)] px-[clamp(26px,5vw,58px)] py-[clamp(38px,6vw,64px)] text-center">
          <div className="absolute -top-[130px] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#1BC24B44,transparent_66%)]" />
          <div className="relative">
            <h2 className="mx-auto m-0 max-w-[21ch] font-heading text-[clamp(26px,4.2vw,44px)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
              {t.ctaTitle}
            </h2>
            <p className="mx-auto mb-0 mt-[18px] max-w-[54ch] text-[clamp(15px,2.2vw,18px)] leading-[1.6] text-text-dark-1">
              {t.ctaSub}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-[13px]">
              <a
                href={waLink}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-[9px] rounded-[13px] bg-whatsapp px-[26px] py-[15px] text-[15.5px] font-semibold !text-white transition-all hover:-translate-y-px hover:bg-whatsapp-hover"
              >
                <MessageCircle aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2.4} />
                {t.heroCtaPrimary}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-[13px] border border-white/20 bg-white/[0.08] px-[26px] py-[15px] text-[15.5px] font-semibold !text-white transition-colors hover:bg-white/[0.13] hover:!text-white"
              >
                {t.bookCall}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
