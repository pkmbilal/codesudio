'use client';

import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { waLink } from '@/lib/wa';

export function FloatingWhatsAppButton() {
  const { lang } = useLanguage();
  const t = common[lang];

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[22px] end-[22px] z-[60] flex items-center gap-[11px] bg-whatsapp text-white rounded-pill pt-[14px] pb-[14px] ps-[16px] pe-[20px] shadow-whatsapp font-semibold text-[15px] transition-all hover:bg-whatsapp-hover hover:-translate-y-0.5"
    >
      <span className="grid place-items-center w-[30px] h-[30px] rounded-full bg-white/[0.18] text-lg">
        ✆
      </span>
      {t.waFloat}
    </a>
  );
}
