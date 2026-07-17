'use client';

import { useState } from 'react';

export function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="bg-white border border-border rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 px-[22px] py-[19px] bg-transparent border-none cursor-pointer text-start font-body transition-colors hover:bg-[#FAFCFB]"
            >
              <span className="font-heading font-semibold text-[16.5px] text-ink tracking-[-0.01em]">
                {f.q}
              </span>
              <span
                className={`shrink-0 w-[26px] h-[26px] grid place-items-center rounded-lg bg-chip-bg text-brand-dark text-lg font-semibold transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : 'rotate-0'
                }`}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-400 ease-[cubic-bezier(.2,.7,.3,1)]"
              style={{ maxHeight: isOpen ? 240 : 0 }}
            >
              <p className="px-[22px] pb-5 m-0 text-[15px] leading-[1.62] text-muted">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
