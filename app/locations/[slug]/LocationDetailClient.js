'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { locationsCopy } from '@/dictionaries/locations';
import { LOCATIONS, LOCATION_SERVICES, getOtherLocations } from '@/data/locations';
import { PROCESS } from '@/data/process';
import { waLink } from '@/lib/wa';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton';
import { Chip } from '@/components/ui/Chip';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProcessStep } from '@/components/cards/ProcessStep';
import { ServiceCardLight } from '@/components/cards/ServiceCard';

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.3-.5v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 6 8.9a4.8 4.8 0 0 0 1 2.5 11 11 0 0 0 4.2 3.7c.6.3 1 .4 1.4.5a3.3 3.3 0 0 0 1.5.1c.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1-.2-.2-.4-.3z"
        fill="currentColor"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3v3M17 3v3M4.5 9.2h15M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13h3M8 16h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function LocationDetailClient({ slug }) {
  const { lang } = useLanguage();
  const t = { ...common[lang], ...locationsCopy[lang] };
  const location = LOCATIONS[slug];
  const process = PROCESS[lang];
  const otherLocations = getOtherLocations(slug);
  const serviceCards = LOCATION_SERVICES.map((service, index) => ({
    href: '/contact',
    code: `0${index + 1}`,
    title: service.title,
    desc: service.desc,
    previewStack: [location.name, location.region],
  }));

  return (
    <>
      <Header />

      <section id="top" className="border-b border-border bg-[linear-gradient(180deg,#F5F8F6,#FBFCFB)]">
        <div className="max-w-[1100px] mx-auto px-[22px] pt-[clamp(28px,4vw,44px)] pb-[clamp(44px,7vw,72px)]">
          <Breadcrumb
            items={[
              { label: t.crumbHome, href: '/' },
              { label: t.crumbLocations, href: '/locations' },
            ]}
            current={location.name}
          />
          <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(30px,5vw,56px)] items-center">
            <div className="animate-reveal motion-reduce:animate-none">
              <Chip icon={location.code}>{t.detailEyebrow}</Chip>
              <h1 className="font-heading font-bold text-[clamp(32px,5vw,54px)] leading-[1.05] tracking-[-0.03em] mt-5 mb-0">
                {location.heroTitle}
              </h1>
              <p className="text-[clamp(16px,2.2vw,20px)] leading-[1.6] text-muted mt-[18px] mb-0 max-w-[44ch]">
                {location.heroSub}
              </p>
              <div className="grid grid-cols-2 gap-3 mt-[30px] sm:flex sm:flex-wrap">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex h-[54px] w-full items-center justify-center gap-2 bg-whatsapp !text-white rounded-[13px] px-3 text-center text-[12.5px] font-semibold leading-[1.12] shadow-[0_8px_22px_-8px_rgba(37,211,102,.6)] transition-all hover:bg-whatsapp-hover hover:-translate-y-px sm:h-auto sm:w-auto sm:gap-[9px] sm:px-6 sm:py-3.5 sm:text-[15.5px] sm:leading-normal"
                >
                  <span className="shrink-0">
                    <WhatsAppIcon />
                  </span>
                  {t.heroCtaPrimary}
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex h-[54px] w-full items-center justify-center gap-2 bg-ink !text-white rounded-[13px] px-3 text-center text-[12.5px] font-semibold leading-[1.12] transition-colors hover:bg-brand hover:!text-white sm:h-auto sm:w-auto sm:px-6 sm:py-3.5 sm:text-[15.5px] sm:leading-normal"
                >
                  <span className="shrink-0">
                    <CalendarIcon />
                  </span>
                  {t.bookCall}
                </a>
              </div>
            </div>
            <div className="animate-reveal motion-reduce:animate-none relative sm:min-h-[280px]">
              <div className="relative rounded-3xl bg-[linear-gradient(150deg,#0C1410,#13251A)] overflow-hidden shadow-[0_26px_60px_-30px_rgba(12,20,16,.5)] sm:absolute sm:inset-0">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(#ffffff0c 1px,transparent 1px),linear-gradient(90deg,#ffffff0c 1px,transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="relative min-h-[300px] px-7 py-10 flex flex-col justify-center gap-3.5 sm:h-full sm:min-h-0 sm:p-7">
                  <span className="font-mono text-[64px] font-semibold text-white/[0.07] leading-none">
                    {location.code}
                  </span>
                  <div className="font-heading font-semibold text-[24px] text-white tracking-[-0.01em] max-w-[16ch]">
                    {location.name}
                  </div>
                  <div className="text-text-dark-1 text-[15px]">{location.region}</div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {location.highlights.map((tag) => (
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

      <section className="max-w-[1100px] mx-auto px-[22px] py-[clamp(48px,7vw,84px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(36px,5vw,64px)]">
        <div className="animate-reveal motion-reduce:animate-none">
          <SectionEyebrow>{t.localEyebrow}</SectionEyebrow>
          <h2 className="font-heading font-bold text-[clamp(24px,3.6vw,36px)] leading-[1.12] tracking-[-0.025em] mt-3.5 mb-0">
            {t.localTitle}
          </h2>
          <p className="text-[16.5px] leading-[1.68] text-muted mt-[18px] mb-0">
            {location.localFocus}
          </p>
        </div>
        <div className="animate-reveal motion-reduce:animate-none">
          <SectionEyebrow>{t.signalsEyebrow}</SectionEyebrow>
          <div className="mt-4 flex flex-col gap-3">
            {location.painPoints.map((point) => (
              <div
                key={point}
                className="flex gap-[13px] items-start bg-white border border-border rounded-[14px] px-[18px] py-4"
              >
                <span className="shrink-0 grid place-items-center w-[26px] h-[26px] rounded-lg bg-chip-bg text-brand-dark text-[15px] font-bold">
                  +
                </span>
                <div className="text-[15px] leading-[1.58] text-[#5b6a61]">{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-tint border-y border-border">
        <div className="max-w-[1100px] mx-auto px-[22px] py-[clamp(48px,7vw,84px)]">
          <div className="animate-reveal motion-reduce:animate-none max-w-[640px]">
            <SectionEyebrow>{t.servicesEyebrow}</SectionEyebrow>
            <h2 className="font-heading font-bold text-[clamp(24px,3.6vw,38px)] leading-[1.1] tracking-[-0.025em] mt-3.5 mb-0">
              {t.servicesTitle}
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {serviceCards.map((service) => (
              <ServiceCardLight key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

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

      <section className="max-w-[1100px] mx-auto px-[22px] py-[clamp(48px,7vw,84px)]">
        <div className="animate-reveal motion-reduce:animate-none max-w-[680px]">
          <SectionEyebrow>{t.faqEyebrow}</SectionEyebrow>
          <h2 className="font-heading font-bold text-[clamp(24px,3.6vw,36px)] leading-[1.12] tracking-[-0.025em] mt-3.5 mb-0">
            {t.faqTitle}
          </h2>
        </div>
        <div className="mt-7 grid gap-3">
          {location.faq.map((item) => (
            <details
              key={item.q}
              className="group bg-white border border-border rounded-[16px] px-[20px] py-[17px]"
            >
              <summary className="cursor-pointer list-none font-heading font-semibold text-[16px] tracking-[-0.01em] text-ink flex items-center justify-between gap-4">
                {item.q}
                <span className="text-brand-dark transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-[14.5px] leading-[1.65] text-[#5b6a61] mt-3 mb-0">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-[22px] pb-[clamp(56px,8vw,90px)]">
        <div className="animate-reveal motion-reduce:animate-none flex items-baseline justify-between gap-4 flex-wrap mb-7">
          <h2 className="font-heading font-bold text-[clamp(22px,3.4vw,34px)] leading-[1.1] tracking-[-0.025em] m-0">
            {t.otherTitle}
          </h2>
          <Link href="/locations" className="text-[14.5px] font-semibold">
            {t.otherAll} -&gt;
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5">
          {otherLocations.map((other) => (
            <ServiceCardLight key={other.slug} service={other} />
          ))}
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto mb-[clamp(56px,8vw,90px)] px-[22px]">
        <div className="animate-reveal motion-reduce:animate-none relative rounded-[26px] overflow-hidden bg-[linear-gradient(140deg,#0C1410,#13251A)] px-[clamp(26px,5vw,58px)] py-[clamp(38px,6vw,64px)] text-center">
          <div className="relative">
            <h2 className="font-heading font-bold text-[clamp(26px,4.2vw,44px)] leading-[1.08] tracking-[-0.03em] text-white m-0 mx-auto max-w-[20ch]">
              {t.ctaTitle}
            </h2>
            <p className="text-[clamp(15px,2.2vw,18px)] leading-[1.6] text-text-dark-1 mt-[18px] mx-auto mb-0 max-w-[50ch]">
              {t.ctaSub}
            </p>
            <div className="grid grid-cols-2 gap-3 justify-center mt-7 sm:flex sm:flex-wrap">
              <a
                href={waLink}
                target="_blank"
                rel="noopener"
                className="inline-flex h-[54px] w-full items-center justify-center gap-2 bg-whatsapp !text-white rounded-[13px] px-3 text-center text-[12.5px] font-semibold leading-[1.12] transition-all hover:bg-whatsapp-hover hover:-translate-y-px sm:h-auto sm:w-auto sm:gap-[9px] sm:px-[26px] sm:py-[15px] sm:text-[15.5px] sm:leading-normal"
              >
                <span className="shrink-0">
                  <WhatsAppIcon />
                </span>
                <span className="sm:hidden">Chat With us</span>
                <span className="hidden sm:inline">{t.heroCtaPrimary}</span>
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener"
                className="inline-flex h-[54px] w-full items-center justify-center gap-2 bg-white/[0.08] border border-white/20 !text-white rounded-[13px] px-3 text-center text-[12.5px] font-semibold leading-[1.12] transition-colors hover:bg-white/[0.13] hover:!text-white sm:h-auto sm:w-auto sm:px-[26px] sm:py-[15px] sm:text-[15.5px] sm:leading-normal"
              >
                <span className="shrink-0">
                  <CalendarIcon />
                </span>
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
