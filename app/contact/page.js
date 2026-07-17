'use client';

import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { contact } from '@/dictionaries/contact';
import { waLink } from '@/lib/wa';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton';
import { Chip } from '@/components/ui/Chip';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContactForm } from '@/components/contact/ContactForm';

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = { ...common[lang], ...contact[lang] };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="border-b border-border bg-[linear-gradient(180deg,#F5F8F6,#FBFCFB)]">
        <div className="max-w-[1100px] mx-auto px-[22px] pt-[clamp(28px,4vw,44px)] pb-[clamp(36px,5vw,56px)]">
          <Breadcrumb items={[{ label: t.crumbHome, href: '/' }]} current={t.crumbContact} />
          <div className="animate-reveal motion-reduce:animate-none mt-6 max-w-[760px]">
            <Chip>{t.eyebrow}</Chip>
            <h1 className="font-heading font-bold text-[clamp(34px,5.4vw,56px)] leading-[1.04] tracking-[-0.03em] mt-5 mb-0">
              {t.title}
            </h1>
            <p className="text-[clamp(16px,2.2vw,20px)] leading-[1.6] text-muted mt-[18px] mb-0 max-w-[52ch]">
              {t.sub}
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-[1100px] mx-auto px-[22px] py-[clamp(44px,6vw,76px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(30px,4vw,48px)] items-start">
        {/* Quick channels */}
        <div className="animate-reveal motion-reduce:animate-none flex flex-col gap-3.5">
          <SectionEyebrow>{t.reachEyebrow}</SectionEyebrow>
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-[15px] bg-[linear-gradient(150deg,#0C1410,#13251A)] rounded-[18px] p-[22px] text-white transition-transform hover:-translate-y-0.5"
          >
            <span className="shrink-0 grid place-items-center w-[46px] h-[46px] rounded-xl bg-whatsapp text-[22px]">
              ✆
            </span>
            <div>
              <div className="font-heading font-semibold text-[17px]">{t.waTitle}</div>
              <div className="text-sm text-text-dark-1 mt-0.5">0531826230 · {t.waNote}</div>
            </div>
          </a>
          <a
            href="tel:+966531826230"
            className="flex items-center gap-[15px] bg-white border border-border rounded-[18px] p-[22px] text-ink transition-all hover:border-brand hover:-translate-y-0.5"
          >
            <span className="shrink-0 grid place-items-center w-[46px] h-[46px] rounded-xl bg-chip-bg text-brand-dark text-xl">
              ☎
            </span>
            <div>
              <div className="font-heading font-semibold text-[17px]">{t.callTitle}</div>
              <div className="text-sm text-[#5b6a61] mt-0.5">+966 53 182 6230</div>
            </div>
          </a>
          <a
            href="mailto:hello@codesudio.com"
            className="flex items-center gap-[15px] bg-white border border-border rounded-[18px] p-[22px] text-ink transition-all hover:border-brand hover:-translate-y-0.5"
          >
            <span className="shrink-0 grid place-items-center w-[46px] h-[46px] rounded-xl bg-chip-bg text-brand-dark text-lg">
              ✉
            </span>
            <div>
              <div className="font-heading font-semibold text-[17px]">{t.emailTitle}</div>
              <div className="text-sm text-[#5b6a61] mt-0.5">hello@codesudio.com</div>
            </div>
          </a>
          <div className="bg-white border border-border rounded-[18px] p-[22px]">
            <div className="flex items-center gap-[15px]">
              <span className="shrink-0 grid place-items-center w-[46px] h-[46px] rounded-xl bg-chip-bg text-brand-dark text-xl">
                📍
              </span>
              <div>
                <div className="font-heading font-semibold text-[17px]">{t.locTitle}</div>
                <div className="text-sm text-[#5b6a61] mt-0.5 leading-normal">{t.footerLocation}</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#EEF2F0] flex items-center justify-between gap-3">
              <span className="text-[13.5px] text-text-dark-6">{t.hoursLabel}</span>
              <span className="text-[13.5px] font-semibold text-ink">{t.hoursValue}</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="animate-reveal motion-reduce:animate-none bg-white border border-border rounded-[22px] p-[clamp(24px,3vw,34px)]">
          <ContactForm />
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
