'use client';

import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { locationsCopy } from '@/dictionaries/locations';
import { getLocationCards } from '@/data/locations';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton';
import { Chip } from '@/components/ui/Chip';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ServiceCardLight } from '@/components/cards/ServiceCard';

export default function LocationsIndexClient() {
  const { lang } = useLanguage();
  const t = { ...common[lang], ...locationsCopy[lang] };
  const locations = getLocationCards();

  return (
    <>
      <Header />

      <section className="border-b border-border bg-[linear-gradient(180deg,#F5F8F6,#FBFCFB)]">
        <div className="max-w-[1100px] mx-auto px-[22px] pt-[clamp(28px,4vw,44px)] pb-[clamp(40px,6vw,64px)]">
          <Breadcrumb items={[{ label: t.crumbHome, href: '/' }]} current={t.crumbLocations} />
          <div className="animate-reveal motion-reduce:animate-none mt-6 max-w-[760px]">
            <Chip>{t.indexEyebrow}</Chip>
            <h1 className="font-heading font-bold text-[clamp(34px,5.4vw,58px)] leading-[1.04] tracking-[-0.03em] mt-5 mb-0">
              {t.indexTitle}
            </h1>
            <p className="text-[clamp(16px,2.2vw,20px)] leading-[1.6] text-muted mt-5 mb-0 max-w-[52ch]">
              {t.indexSub}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-[22px] py-[clamp(48px,7vw,84px)] grid grid-cols-[minmax(0,0.72fr)_minmax(300px,1.28fr)] max-[860px]:grid-cols-1 gap-[clamp(34px,5vw,58px)] items-start">
        <div className="animate-reveal motion-reduce:animate-none">
          <SectionEyebrow>{t.localEyebrow}</SectionEyebrow>
          <h2 className="font-heading font-bold text-[clamp(24px,3.6vw,36px)] leading-[1.12] tracking-[-0.025em] mt-3.5 mb-0">
            {t.indexIntroTitle}
          </h2>
          <p className="text-[16.5px] leading-[1.68] text-muted mt-[18px] mb-0">
            {t.indexIntro}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {locations.map((location) => (
            <ServiceCardLight key={location.slug} service={location} />
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
