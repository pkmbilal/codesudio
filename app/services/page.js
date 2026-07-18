'use client';

import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { servicesIndex } from '@/dictionaries/services-index';
import { getClusters } from '@/data/services';
import { PROCESS } from '@/data/process';
import { waLink } from '@/lib/wa';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton';
import { Chip } from '@/components/ui/Chip';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ServiceCardLight } from '@/components/cards/ServiceCard';
import { ProcessStep } from '@/components/cards/ProcessStep';

export default function ServicesIndexPage() {
  const { lang } = useLanguage();
  const t = { ...common[lang], ...servicesIndex[lang] };
  const clusters = getClusters(lang);
  const process = PROCESS[lang];

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="border-b border-border bg-[linear-gradient(180deg,#F5F8F6,#FBFCFB)]">
        <div className="max-w-[1100px] mx-auto px-[22px] pt-[clamp(28px,4vw,44px)] pb-[clamp(40px,6vw,64px)]">
          <Breadcrumb items={[{ label: t.crumbHome, href: '/' }]} current={t.crumbServices} />
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

      {/* CLUSTERS */}
      <section className="max-w-[1200px] mx-auto px-[22px] py-[clamp(48px,7vw,88px)] flex flex-col gap-[clamp(44px,6vw,72px)]">
        {clusters.map((cl) => (
          <div key={cl.key} className="animate-reveal motion-reduce:animate-none">
            <div className="flex items-center gap-3.5 mb-[22px]">
              <span className="font-mono text-[12.5px] font-semibold tracking-[0.06em] uppercase text-white bg-ink rounded-pill px-3.5 py-1.5">
                {cl.title}
              </span>
              <h2 className="font-heading font-bold text-[clamp(22px,3.2vw,30px)] m-0 tracking-[-0.02em]">
                {cl.title}
              </h2>
              <span className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
              {cl.items.map((s) => (
                <ServiceCardLight key={s.slug} service={s} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* PROCESS STRIP */}
      <section className="bg-ink text-white">
        <div className="max-w-[1100px] mx-auto px-[22px] py-[clamp(48px,7vw,84px)]">
          <div className="animate-reveal motion-reduce:animate-none max-w-[600px]">
            <SectionEyebrow tone="dark">{t.processEyebrow}</SectionEyebrow>
            <h2 className="font-heading font-bold text-[clamp(24px,3.6vw,38px)] leading-[1.1] tracking-[-0.025em] mt-3.5 mb-0">
              {t.processTitle}
            </h2>
          </div>
          <div className="mt-[38px] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {process.map((p) => (
              <ProcessStep key={p.step} step={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-[1100px] mx-auto px-[22px] pt-[clamp(48px,7vw,84px)] pb-[clamp(56px,8vw,90px)]">
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
                href={waLink}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center bg-white/[0.08] border border-white/20 text-white rounded-[13px] px-[26px] py-[15px] text-[15.5px] font-semibold transition-colors hover:bg-white/[0.13]"
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
