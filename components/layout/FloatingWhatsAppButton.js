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
      className="fixed bottom-[22px] end-[22px] z-[60] flex h-[54px] w-[54px] items-center justify-center bg-whatsapp !text-white rounded-full shadow-whatsapp font-semibold text-[15px] transition-all hover:bg-whatsapp-hover hover:-translate-y-0.5 sm:h-auto sm:w-auto sm:justify-start sm:gap-[11px] sm:rounded-pill sm:pt-[14px] sm:pb-[14px] sm:ps-[16px] sm:pe-[20px]"
    >
      <span className="grid place-items-center w-[30px] h-[30px]">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.3-.5v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 6 8.9a4.8 4.8 0 0 0 1 2.5 11 11 0 0 0 4.2 3.7c.6.3 1 .4 1.4.5a3.3 3.3 0 0 0 1.5.1c.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1-.2-.2-.4-.3z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="hidden sm:inline">{t.waFloat}</span>
    </a>
  );
}
