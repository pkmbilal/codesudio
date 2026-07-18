'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { home } from '@/dictionaries/home';
import { getClusters } from '@/data/services';
import { PORTFOLIO } from '@/data/portfolio';
import { PRODUCTS } from '@/data/products';
import { TESTIMONIALS } from '@/data/testimonials';
import { FAQ } from '@/data/faq';
import { CLIENTS } from '@/data/clients';
import { waLink } from '@/lib/wa';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton';
import { Chip } from '@/components/ui/Chip';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ServiceCardDark } from '@/components/cards/ServiceCard';
import { PortfolioCard } from '@/components/cards/PortfolioCard';
import { ProductCard } from '@/components/cards/ProductCard';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { FAQAccordion } from '@/components/home/FAQAccordion';
import zatcaLogo from '@/public/zatca.webp';
import vision2030Logo from '@/public/vision2030.webp';

export default function HomePage() {
  const { lang } = useLanguage();
  const t = { ...common[lang], ...home[lang] };
  const clusters = getClusters(lang);
  const portfolio = PORTFOLIO[lang];
  const products = PRODUCTS[lang];
  const testimonials = TESTIMONIALS[lang];
  const faqs = FAQ[lang];
  const clients = CLIENTS[lang];

  return (
    <>
      <Header />

      {/* HERO */}
      <section
        id="top"
        className="max-w-[1200px] mx-auto px-[22px] pt-[clamp(48px,8vw,92px)] pb-[clamp(40px,6vw,70px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(36px,5vw,64px)] items-center"
      >
        <div className="animate-reveal motion-reduce:animate-none">
          <Chip>{t.heroEyebrow}</Chip>
          <h1 className="font-heading font-bold text-[clamp(38px,6vw,62px)] leading-[1.03] tracking-[-0.03em] mt-[22px] mb-0">
            {t.heroTitle}
          </h1>
          <p className="text-[clamp(16px,2.2vw,19px)] leading-[1.6] text-muted mt-[22px] mb-0 max-w-[34ch]">
            {t.heroSub}
          </p>
          <div className="flex gap-[13px] flex-wrap mt-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[9px] bg-whatsapp !text-white rounded-[13px] px-6 py-[15px] text-[15.5px] font-semibold shadow-[0_8px_22px_-8px_rgba(37,211,102,.6)] transition-all hover:bg-whatsapp-hover hover:-translate-y-px"
            >
              <span className="text-lg">✆</span>
              {t.heroCtaPrimary}
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-white border border-border-strong text-ink rounded-[13px] px-6 py-[15px] text-[15.5px] font-semibold transition-colors hover:border-ink"
            >
              {t.heroCtaSecondary} <span className="opacity-50">→</span>
            </a>
          </div>
        </div>
        <div className="animate-reveal motion-reduce:animate-none relative min-h-[400px]">
          <div className="absolute inset-0 rounded-[26px] bg-[linear-gradient(150deg,#0C1410,#13251A)] overflow-hidden shadow-hero">
            <div className="absolute w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,#1BC24B55,transparent_68%)] -top-[90px] -end-[70px] blur-[6px]" />
            <div className="absolute w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle,#57E23A44,transparent_68%)] -bottom-20 -start-[60px]" />
            <div className="relative p-4 h-full flex flex-col gap-3">
              <div className="flex items-center gap-2 pt-1.5 px-1.5">
                <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
                <span className="ms-2.5 font-mono text-xs text-text-dark-6">codesudio ~ scaneat</span>
              </div>
              <div className="relative flex-1 min-h-[250px] rounded-[14px] overflow-hidden bg-[#0a1410]">
                <Image
                  src="https://picsum.photos/seed/codesudio-hero/960/640"
                  alt=""
                  fill
                  preload
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-[22px] start-[22px] flex items-center gap-2.5 bg-ink/[0.8] border border-white/[0.13] rounded-[14px] px-[15px] py-3 backdrop-blur-[6px] pointer-events-none">
              <span className="grid place-items-center w-[34px] h-[34px] rounded-[9px] bg-whatsapp !text-white text-base">
                ✆
              </span>
              <div>
                <div className="text-xs text-text-dark-1 font-body">{t.heroChatLabel}</div>
                <div className="text-sm font-semibold text-white font-body">0531826230</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-t border-b border-border bg-tint">
        <div className="max-w-[1200px] mx-auto px-[22px] py-[26px] flex items-center gap-[clamp(20px,5vw,54px)] flex-wrap justify-center">
          <span className="font-mono text-[12.5px] font-semibold tracking-[0.04em] uppercase text-text-dark-3">
            {t.trustLabel}
          </span>
          {clients.map((c) => (
            <span
              key={c}
              className="font-heading font-semibold text-[clamp(17px,2.4vw,22px)] text-[#2A362F] tracking-[-0.01em]"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section
        id="about"
        className="animate-reveal motion-reduce:animate-none max-w-[1000px] mx-auto px-[22px] py-[clamp(56px,8vw,90px)] text-center"
      >
        <SectionEyebrow>{t.aboutEyebrow}</SectionEyebrow>
        <h2 className="font-heading font-bold text-[clamp(28px,4.4vw,44px)] leading-[1.1] tracking-[-0.025em] mt-4 mb-0">
          {t.aboutTitle}
        </h2>
        <p className="text-[clamp(16px,2.2vw,20px)] leading-[1.65] text-muted mt-5 mx-auto mb-0 max-w-[60ch]">
          {t.aboutBody}
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-ink text-white">
        <div className="max-w-[1200px] mx-auto px-[22px] py-[clamp(56px,8vw,96px)]">
          <div className="animate-reveal motion-reduce:animate-none max-w-[640px]">
            <SectionEyebrow tone="dark">{t.servicesEyebrow}</SectionEyebrow>
            <h2 className="font-heading font-bold text-[clamp(28px,4.4vw,46px)] leading-[1.08] tracking-[-0.025em] mt-4 mb-0">
              {t.servicesTitle}
            </h2>
          </div>
          <div className="mt-11 flex flex-col gap-10">
            {clusters.map((cl) => (
              <div key={cl.key} className="animate-reveal motion-reduce:animate-none">
                <div className="flex items-center gap-3 mb-[18px]">
                  <span className="w-[9px] h-[9px] rounded-full bg-brand shadow-[0_0_0_4px_#1bc24b22]" />
                  <h3 className="font-heading font-semibold text-[19px] m-0 tracking-[-0.01em]">
                    {cl.title}
                  </h3>
                  <span className="flex-1 h-px bg-white/[0.08]" />
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3.5">
                  {cl.items.map((s) => (
                    <ServiceCardDark key={s.slug} service={s} learnMoreLabel={t.learnMore} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="max-w-[1200px] mx-auto px-[22px] py-[clamp(56px,8vw,96px)]">
        <div className="animate-reveal motion-reduce:animate-none max-w-[640px]">
          <SectionEyebrow>{t.workEyebrow}</SectionEyebrow>
          <h2 className="font-heading font-bold text-[clamp(28px,4.4vw,46px)] leading-[1.08] tracking-[-0.025em] mt-4 mb-0">
            {t.workTitle}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {portfolio.map((item) => (
            <div key={item.slotId} className="animate-reveal motion-reduce:animate-none">
              <PortfolioCard item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-tint border-t border-b border-border">
        <div className="max-w-[1200px] mx-auto px-[22px] py-[clamp(56px,8vw,96px)]">
          <div className="animate-reveal motion-reduce:animate-none max-w-[640px]">
            <SectionEyebrow>{t.productsEyebrow}</SectionEyebrow>
            <h2 className="font-heading font-bold text-[clamp(28px,4.4vw,46px)] leading-[1.08] tracking-[-0.025em] mt-4 mb-0">
              {t.productsTitle}
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {products.map((product) => (
              <div key={product.slotId} className="animate-reveal motion-reduce:animate-none">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-[1200px] mx-auto px-[22px] py-[clamp(56px,8vw,96px)]">
        <div className="animate-reveal motion-reduce:animate-none max-w-[640px]">
          <SectionEyebrow>{t.testEyebrow}</SectionEyebrow>
          <h2 className="font-heading font-bold text-[clamp(28px,4.4vw,46px)] leading-[1.08] tracking-[-0.025em] mt-4 mb-0">
            {t.testTitle}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {testimonials.map((tm) => (
            <div key={tm.name} className="animate-reveal motion-reduce:animate-none">
              <TestimonialCard testimonial={tm} />
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="bg-tint border-t border-b border-border">
        <div className="max-w-[1100px] mx-auto px-[22px] py-[clamp(48px,7vw,82px)]">
          <div className="animate-reveal motion-reduce:animate-none text-center max-w-[620px] mx-auto">
            <SectionEyebrow>{t.compEyebrow}</SectionEyebrow>
            <h2 className="font-heading font-bold text-[clamp(26px,4vw,40px)] leading-[1.1] tracking-[-0.025em] mt-3.5 mb-0">
              {t.compTitle}
            </h2>
            <p className="text-[clamp(15px,2.1vw,18px)] leading-[1.6] text-muted mt-4 mx-auto mb-0 max-w-[52ch]">
              {t.compSub}
            </p>
          </div>
          <div className="animate-reveal motion-reduce:animate-none mt-[38px] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            <div className="bg-white border border-border rounded-[18px] p-[26px] flex flex-col items-start gap-[18px]">
              <div className="h-[60px] flex items-center">
                <Image src={zatcaLogo} alt="Zakat, Tax and Customs Authority" className="h-[60px] w-auto block" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg m-0 tracking-[-0.01em]">
                  {t.compZatcaTitle}
                </h3>
                <p className="text-sm leading-relaxed text-[#5b6a61] mt-2 mb-0">{t.compZatcaDesc}</p>
              </div>
            </div>
            <div className="bg-white border border-border rounded-[18px] p-[26px] flex flex-col items-start gap-[18px]">
              <div className="h-[60px] flex items-center">
                <Image src={vision2030Logo} alt="Saudi Vision 2030" className="h-[60px] w-auto block" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg m-0 tracking-[-0.01em]">
                  {t.compVisionTitle}
                </h3>
                <p className="text-sm leading-relaxed text-[#5b6a61] mt-2 mb-0">{t.compVisionDesc}</p>
              </div>
            </div>
            <div className="bg-white border border-border rounded-[18px] p-[26px] flex flex-col items-start gap-[18px]">
              <div className="h-[60px] flex items-center">
                <svg width="56" height="56" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <rect x="1" y="1" width="50" height="50" rx="13" fill="#EAF9EE" stroke="#CBEFD5" />
                  <text x="19" y="32" textAnchor="middle" fontFamily="'IBM Plex Sans Arabic',sans-serif" fontWeight="700" fontSize="17" fill="#0FA23C">
                    ع
                  </text>
                  <path d="M27 26h2" stroke="#c3cec8" strokeWidth="1.6" />
                  <text x="37" y="32" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontWeight="700" fontSize="15" fill="#0C1410">
                    En
                  </text>
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg m-0 tracking-[-0.01em]">
                  {t.compBilingualTitle}
                </h3>
                <p className="text-sm leading-relaxed text-[#5b6a61] mt-2 mb-0">{t.compBilingualDesc}</p>
              </div>
            </div>
          </div>
          <p className="animate-reveal motion-reduce:animate-none text-center text-[12.5px] text-text-dark-3 mt-[22px] mx-auto mb-0 max-w-[60ch] leading-relaxed">
            {t.compDisclaimer}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="max-w-[820px] mx-auto px-[22px] pt-[clamp(40px,6vw,70px)] pb-[clamp(56px,8vw,90px)]"
      >
        <div className="animate-reveal motion-reduce:animate-none text-center mb-[34px]">
          <SectionEyebrow>{t.faqEyebrow}</SectionEyebrow>
          <h2 className="font-heading font-bold text-[clamp(28px,4.4vw,44px)] leading-[1.1] tracking-[-0.025em] mt-3.5 mb-0">
            {t.faqTitle}
          </h2>
        </div>
        <FAQAccordion faqs={faqs} />
      </section>

      {/* FINAL CTA */}
      <section className="max-w-[1200px] mx-auto mb-[clamp(56px,8vw,90px)] px-[22px]">
        <div className="animate-reveal motion-reduce:animate-none relative rounded-[28px] overflow-hidden bg-[linear-gradient(140deg,#0C1410,#13251A)] px-[clamp(26px,5vw,64px)] py-[clamp(40px,6vw,72px)] text-center">
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,#1BC24B44,transparent_66%)] -top-[140px] left-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="font-heading font-bold text-[clamp(28px,4.6vw,50px)] leading-[1.08] tracking-[-0.03em] text-white m-0 mx-auto max-w-[18ch]">
              {t.ctaTitle}
            </h2>
            <p className="text-[clamp(15px,2.2vw,19px)] leading-[1.6] text-text-dark-1 mt-5 mx-auto mb-0 max-w-[52ch]">
              {t.ctaSub}
            </p>
            <div className="flex gap-[13px] flex-wrap justify-center mt-[30px]">
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
