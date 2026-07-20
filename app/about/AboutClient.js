'use client';

import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { about } from '@/dictionaries/about';
import { STATS, VALUES } from '@/data/about';
import { CLIENTS } from '@/data/clients';
import { waLink } from '@/lib/wa';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton';
import { Chip } from '@/components/ui/Chip';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { StatCard } from '@/components/cards/StatCard';
import { ValueCard } from '@/components/cards/ValueCard';

export default function AboutClient() {
  const { lang } = useLanguage();
  const t = { ...common[lang], ...about[lang] };
  const stats = STATS[lang];
  const values = VALUES[lang];
  const clients = CLIENTS[lang];

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="border-b border-border bg-[linear-gradient(180deg,#F5F8F6,#FBFCFB)]">
        <div className="max-w-[1100px] mx-auto px-[22px] pt-[clamp(28px,4vw,44px)] pb-[clamp(40px,6vw,64px)]">
          <Breadcrumb items={[{ label: t.crumbHome, href: '/' }]} current={t.crumbAbout} />
          <div className="animate-reveal motion-reduce:animate-none mt-6 max-w-[820px]">
            <Chip>{t.eyebrow}</Chip>
            <h1 className="font-heading font-bold text-[clamp(34px,5.4vw,58px)] leading-[1.04] tracking-[-0.03em] mt-5 mb-0">
              {t.title}
            </h1>
            <p className="text-[clamp(16px,2.2vw,21px)] leading-[1.6] text-muted mt-5 mb-0 max-w-[56ch]">
              {t.lead}
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-[1100px] mx-auto px-[22px] py-[clamp(48px,7vw,84px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(36px,5vw,60px)] items-start">
        <div className="animate-reveal motion-reduce:animate-none">
          <SectionEyebrow>{t.storyEyebrow}</SectionEyebrow>
          <h2 className="font-heading font-bold text-[clamp(24px,3.6vw,36px)] leading-[1.12] tracking-[-0.025em] mt-3.5 mb-0">
            {t.storyTitle}
          </h2>
          <p className="text-[16.5px] leading-[1.68] text-muted mt-[18px] mb-0">{t.story1}</p>
          <p className="text-[16.5px] leading-[1.68] text-muted mt-4 mb-0">{t.story2}</p>
          <p className="text-[16.5px] leading-[1.68] text-muted mt-4 mb-0">{t.story3}</p>
        </div>
        <div className="animate-reveal motion-reduce:animate-none flex flex-col gap-3.5">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-ink text-white">
        <div className="max-w-[1100px] mx-auto px-[22px] py-[clamp(48px,7vw,84px)]">
          <div className="animate-reveal motion-reduce:animate-none max-w-[620px]">
            <SectionEyebrow tone="dark">{t.valuesEyebrow}</SectionEyebrow>
            <h2 className="font-heading font-bold text-[clamp(24px,3.6vw,38px)] leading-[1.1] tracking-[-0.025em] mt-3.5 mb-0">
              {t.valuesTitle}
            </h2>
          </div>
          <div className="mt-[38px] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {values.map((v) => (
              <ValueCard key={v.code} value={v} />
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="max-w-[1100px] mx-auto px-[22px] py-[clamp(48px,7vw,84px)]">
        <div className="animate-reveal motion-reduce:animate-none text-center max-w-[620px] mx-auto">
          <SectionEyebrow>{t.clientsEyebrow}</SectionEyebrow>
          <h2 className="font-heading font-bold text-[clamp(24px,3.6vw,36px)] leading-[1.1] tracking-[-0.025em] mt-3.5 mb-0">
            {t.clientsTitle}
          </h2>
        </div>
        <div className="animate-reveal motion-reduce:animate-none mt-[30px] flex items-center justify-center gap-[clamp(20px,5vw,54px)] flex-wrap">
          {clients.map((c) => (
            <span
              key={c}
              className="font-heading font-semibold text-[clamp(18px,2.6vw,24px)] text-[#2A362F] tracking-[-0.01em]"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-[1100px] mx-auto px-[22px] pb-[clamp(56px,8vw,90px)]">
        <div className="animate-reveal motion-reduce:animate-none relative rounded-[26px] overflow-hidden bg-[linear-gradient(140deg,#0C1410,#13251A)] px-[clamp(26px,5vw,58px)] py-[clamp(38px,6vw,64px)] text-center">
          <div className="absolute w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,#1BC24B44,transparent_66%)] -top-[130px] left-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="font-heading font-bold text-[clamp(26px,4.2vw,44px)] leading-[1.08] tracking-[-0.03em] text-white m-0 mx-auto max-w-[20ch]">
              {t.ctaTitle}
            </h2>
            <p className="text-[clamp(15px,2.2vw,18px)] leading-[1.6] text-text-dark-1 mt-[18px] mx-auto mb-0 max-w-[50ch]">
              {t.ctaSub}
            </p>
            <div className="flex gap-[13px] flex-wrap justify-center mt-7">
              <a
                href={waLink}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-[9px] bg-whatsapp !text-white rounded-[13px] px-[26px] py-[15px] text-[15.5px] font-semibold transition-all hover:bg-whatsapp-hover hover:-translate-y-px"
              >
                <span className="text-lg">✆</span>
                {t.heroCtaPrimary}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-white/[0.08] border border-white/20 !text-white rounded-[13px] px-[26px] py-[15px] text-[15.5px] font-semibold transition-colors hover:bg-white/[0.13] hover:!text-white"
              >
                {t.bookCall}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
