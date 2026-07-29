'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { PRODUCTS } from '@/data/products';
import { waLink } from '@/lib/wa';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Chip } from '@/components/ui/Chip';
import { ProductCard } from '@/components/cards/ProductCard';

const productsIndex = {
  en: {
    crumbProducts: 'Products',
    eyebrow: 'Products',
    title: 'SaaS and platforms we build, run and keep improving.',
    sub: 'A focused look at Codesudio-owned products and business platforms, from restaurant ordering to ERP operations.',
    statsProducts: 'Products',
    statsLive: 'Live links',
    statsFocus: 'Focus',
    focusValue: 'SaaS',
    ctaTitle: 'Need a product like this for your business?',
    ctaSub: 'Tell us what you want to build. We can shape the product, ship the first version and support it after launch.',
  },
  ar: {
    crumbProducts: 'المنتجات',
    eyebrow: 'المنتجات',
    title: 'منتجات SaaS ومنصات نبنيها ونديرها ونطورها.',
    sub: 'نظرة مركزة على منتجات كودسوديو ومنصات الأعمال، من طلبات المطاعم إلى عمليات ERP.',
    statsProducts: 'منتجات',
    statsLive: 'روابط مباشرة',
    statsFocus: 'التركيز',
    focusValue: 'SaaS',
    ctaTitle: 'تحتاج منتجا مشابها لعملك؟',
    ctaSub: 'أخبرنا بما تريد بناءه. نساعدك في تشكيل المنتج، إطلاق النسخة الأولى، ودعمه بعد الإطلاق.',
  },
};

export default function ProductsIndexClient() {
  const { lang } = useLanguage();
  const t = { ...common[lang], ...productsIndex[lang] };
  const products = PRODUCTS[lang];
  const liveCount = products.filter((product) => product.url).length;

  return (
    <>
      <Header />

      <section className="border-b border-border bg-[linear-gradient(180deg,#F5F8F6,#FBFCFB)]">
        <div className="max-w-[1100px] mx-auto px-[22px] pt-[clamp(28px,4vw,44px)] pb-[clamp(42px,6vw,70px)]">
          <Breadcrumb items={[{ label: t.crumbHome, href: '/' }]} current={t.crumbProducts} />
          <div className="animate-reveal motion-reduce:animate-none mt-6 grid gap-[clamp(28px,5vw,58px)] md:grid-cols-[minmax(0,1fr)_360px] md:items-end">
            <div className="max-w-[760px]">
              <Chip>{t.eyebrow}</Chip>
              <h1 className="font-heading font-bold text-[clamp(34px,5.4vw,58px)] leading-[1.04] tracking-[-0.03em] mt-5 mb-0">
                {t.title}
              </h1>
              <p className="text-[clamp(16px,2.2vw,20px)] leading-[1.6] text-muted mt-5 mb-0 max-w-[56ch]">
                {t.sub}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <div className="rounded-[16px] border border-border bg-white px-4 py-4">
                <div className="font-heading text-[clamp(24px,4vw,34px)] font-bold tracking-[-0.03em] text-ink">
                  {products.length}
                </div>
                <div className="mt-1 text-[12.5px] font-medium leading-snug text-muted">{t.statsProducts}</div>
              </div>
              <div className="rounded-[16px] border border-border bg-white px-4 py-4">
                <div className="font-heading text-[clamp(24px,4vw,34px)] font-bold tracking-[-0.03em] text-ink">
                  {liveCount}
                </div>
                <div className="mt-1 text-[12.5px] font-medium leading-snug text-muted">{t.statsLive}</div>
              </div>
              <div className="rounded-[16px] border border-border bg-white px-4 py-4">
                <div className="font-heading text-[clamp(24px,4vw,34px)] font-bold tracking-[-0.03em] text-brand-dark">
                  {t.focusValue}
                </div>
                <div className="mt-1 text-[12.5px] font-medium leading-snug text-muted">{t.statsFocus}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-[22px] py-[clamp(48px,7vw,88px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {products.map((product) => (
            <div key={product.slotId} className="animate-reveal motion-reduce:animate-none">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

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
