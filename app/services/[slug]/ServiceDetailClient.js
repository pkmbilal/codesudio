'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { serviceDetail } from '@/dictionaries/service-detail';
import { SERVICES, CLUSTER_TITLES, getOtherServices } from '@/data/services';
import { PROCESS } from '@/data/process';
import { waLink } from '@/lib/wa';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton';
import { Chip } from '@/components/ui/Chip';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProcessStep } from '@/components/cards/ProcessStep';
import { OtherServiceCard } from '@/components/cards/OtherServiceCard';
import zatcaLogo from '@/public/zatca.webp';

export function ServiceDetailClient({ slug }) {
  const { lang } = useLanguage();
  const t = { ...common[lang], ...serviceDetail[lang] };
  const raw = SERVICES[slug];
  const svc = {
    code: raw.code,
    cluster: CLUSTER_TITLES[raw.clusterKey][lang],
    stack: raw.stack,
    zatca: !!raw.zatca,
    ...raw[lang],
  };
  const others = getOtherServices(slug, lang);
  const process = PROCESS[lang];

  return (
    <>
      <Header />

      {/* HERO */}
      <section id="top" className="border-b border-border bg-[linear-gradient(180deg,#F5F8F6,#FBFCFB)]">
        <div className="max-w-[1100px] mx-auto px-[22px] pt-[clamp(28px,4vw,44px)] pb-[clamp(44px,7vw,72px)]">
          <Breadcrumb
            items={[
              { label: t.crumbHome, href: '/' },
              { label: t.crumbServices, href: '/services' },
            ]}
            current={svc.title}
          />
          <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(30px,5vw,56px)] items-center">
            <div className="animate-reveal motion-reduce:animate-none">
              <Chip icon={svc.code}>{svc.cluster}</Chip>
              <h1 className="font-heading font-bold text-[clamp(32px,5vw,54px)] leading-[1.05] tracking-[-0.03em] mt-5 mb-0">
                {svc.title}
              </h1>
              <p className="text-[clamp(16px,2.2vw,20px)] leading-[1.6] text-muted mt-[18px] mb-0 max-w-[44ch]">
                {svc.tagline}
              </p>
              <div className="flex gap-[13px] flex-wrap mt-[30px]">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-[9px] bg-whatsapp !text-white rounded-[13px] px-6 py-3.5 text-[15.5px] font-semibold shadow-[0_8px_22px_-8px_rgba(37,211,102,.6)] transition-all hover:bg-whatsapp-hover hover:-translate-y-px"
                >
                  <span className="text-lg">✆</span>
                  {t.heroCtaPrimary}
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center bg-ink !text-white rounded-[13px] px-6 py-3.5 text-[15.5px] font-semibold transition-colors hover:bg-brand hover:!text-white"
                >
                  {t.bookCall}
                </a>
              </div>
            </div>
            <div className="animate-reveal motion-reduce:animate-none relative min-h-[280px]">
              <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(150deg,#0C1410,#13251A)] overflow-hidden shadow-[0_26px_60px_-30px_rgba(12,20,16,.5)]">
                <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,#1BC24B55,transparent_68%)] -top-[90px] -end-[70px]" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(#ffffff0c 1px,transparent 1px),linear-gradient(90deg,#ffffff0c 1px,transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="relative p-7 h-full flex flex-col justify-center gap-3.5">
                  <span className="font-mono text-[64px] font-semibold text-white/[0.07] leading-none">
                    {svc.code}
                  </span>
                  <div className="font-heading font-semibold text-[22px] text-white tracking-[-0.01em] max-w-[16ch]">
                    {svc.title}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {svc.stack.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs font-semibold text-brand-bright bg-brand-bright/[0.08] border border-brand-bright/[0.18] rounded-[7px] px-2.5 py-[5px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + INCLUDED */}
      <section className="max-w-[1100px] mx-auto px-[22px] py-[clamp(48px,7vw,84px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(36px,5vw,64px)]">
        <div className="animate-reveal motion-reduce:animate-none">
          <SectionEyebrow>{t.overviewEyebrow}</SectionEyebrow>
          <h2 className="font-heading font-bold text-[clamp(24px,3.6vw,36px)] leading-[1.12] tracking-[-0.025em] mt-3.5 mb-0">
            {svc.overviewTitle}
          </h2>
          <p className="text-[16.5px] leading-[1.68] text-muted mt-[18px] mb-0">{svc.overview}</p>
          <p className="text-[16.5px] leading-[1.68] text-muted mt-4 mb-0">{svc.overview2}</p>
        </div>
        <div className="animate-reveal motion-reduce:animate-none">
          <SectionEyebrow>{t.includedEyebrow}</SectionEyebrow>
          <div className="mt-4 flex flex-col gap-3">
            {svc.features.map((f) => (
              <div
                key={f.title}
                className="flex gap-[13px] items-start bg-white border border-border rounded-[14px] px-[18px] py-4"
              >
                <span className="shrink-0 grid place-items-center w-[26px] h-[26px] rounded-lg bg-chip-bg text-brand-dark text-[15px] font-bold">
                  ✓
                </span>
                <div>
                  <div className="font-heading font-semibold text-base tracking-[-0.01em]">{f.title}</div>
                  <div className="text-sm leading-[1.55] text-[#6b7a71] mt-[3px]">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          {svc.zatca && (
            <div className="mt-3.5 flex gap-3.5 items-start bg-[linear-gradient(150deg,#0C1410,#13251A)] rounded-[14px] px-5 py-[18px]">
              <span className="shrink-0 inline-flex items-center h-[52px] bg-white rounded-[11px] px-3.5">
                <Image
                  src={zatcaLogo}
                  alt="ZATCA — Zakat, Tax and Customs Authority"
                  className="h-[34px] w-auto block"
                />
              </span>
              <div>
                <div className="font-heading font-semibold text-[15.5px] text-white tracking-[-0.01em]">
                  {t.zatcaTitle}
                </div>
                <div className="text-[13.5px] leading-[1.55] text-text-dark-1 mt-1">{t.zatcaDesc}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PROCESS */}
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

      {/* OTHER SERVICES */}
      <section className="max-w-[1100px] mx-auto px-[22px] py-[clamp(48px,7vw,84px)]">
        <div className="animate-reveal motion-reduce:animate-none flex items-baseline justify-between gap-4 flex-wrap">
          <h2 className="font-heading font-bold text-[clamp(22px,3.4vw,34px)] leading-[1.1] tracking-[-0.025em] m-0">
            {t.otherTitle}
          </h2>
          <Link href="/services" className="text-[14.5px] font-semibold">
            {t.otherAll} →
          </Link>
        </div>
        <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5">
          {others.map((o) => (
            <OtherServiceCard key={o.slug} service={o} />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-[1100px] mx-auto mb-[clamp(56px,8vw,90px)] px-[22px]">
        <div className="animate-reveal motion-reduce:animate-none relative rounded-[26px] overflow-hidden bg-[linear-gradient(140deg,#0C1410,#13251A)] px-[clamp(26px,5vw,58px)] py-[clamp(38px,6vw,64px)] text-center">
          <div className="absolute w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,#1BC24B44,transparent_66%)] -top-[130px] left-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="font-heading font-bold text-[clamp(26px,4.2vw,44px)] leading-[1.08] tracking-[-0.03em] text-white m-0 mx-auto max-w-[20ch]">
              {svc.ctaTitle}
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
