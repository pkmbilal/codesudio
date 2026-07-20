'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { common } from '@/dictionaries/common';
import { contact } from '@/dictionaries/contact';
import { SERVICE_OPTS } from '@/data/contact-service-options';
import { buildWaPrefill } from '@/lib/wa';

const inputClass =
  'border border-border-strong rounded-[11px] px-3.5 py-3 text-[15px] text-ink bg-bg transition-shadow focus:outline-none focus:border-brand focus:shadow-[0_0_0_3px_rgba(27,194,75,.15)]';

export function ContactForm() {
  const { lang } = useLanguage();
  const t = { ...common[lang], ...contact[lang] };
  const serviceOptions = SERVICE_OPTS[lang];
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const waPrefill = buildWaPrefill(lang, form);

  return (
    <div>
      <h2 className="font-heading font-bold text-[clamp(20px,2.6vw,26px)] tracking-[-0.02em] m-0">
        {t.formTitle}
      </h2>
      <p className="text-[14.5px] leading-[1.55] text-[#6b7a71] mt-2 mb-0">{t.formSub}</p>
      <div className="flex flex-col gap-[15px] mt-[22px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[15px]">
          <label className="flex flex-col gap-[7px]">
            <span className="text-[13px] font-semibold text-[#2A362F]">{t.fName}</span>
            <input value={form.name} onChange={setField('name')} placeholder={t.phName} className={inputClass} />
          </label>
          <label className="flex flex-col gap-[7px]">
            <span className="text-[13px] font-semibold text-[#2A362F]">{t.fPhone}</span>
            <input value={form.phone} onChange={setField('phone')} placeholder="05xxxxxxxx" className={inputClass} />
          </label>
        </div>
        <label className="flex flex-col gap-[7px]">
          <span className="text-[13px] font-semibold text-[#2A362F]">{t.fEmail}</span>
          <input
            value={form.email}
            onChange={setField('email')}
            placeholder="you@company.com"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-[7px]">
          <span className="text-[13px] font-semibold text-[#2A362F]">{t.fService}</span>
          <select value={form.service} onChange={setField('service')} className={inputClass}>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-[7px]">
          <span className="text-[13px] font-semibold text-[#2A362F]">{t.fMessage}</span>
          <textarea
            value={form.message}
            onChange={setField('message')}
            rows={4}
            placeholder={t.phMessage}
            className={`${inputClass} resize-y`}
          />
        </label>
        <div className="mt-1">
          <a
            href={waPrefill}
            target="_blank"
            rel="noopener"
            className="flex w-full items-center justify-center gap-[9px] rounded-xl bg-ink px-6 py-3.5 text-[15px] font-semibold !text-white transition-colors hover:bg-brand hover:!text-white"
          >
            <span className="text-[17px]">✆</span>
            {t.submit}
          </a>
        </div>
        <p className="text-[12.5px] text-text-dark-3 mt-0.5 mb-0 leading-relaxed">{t.formNote}</p>
      </div>
    </div>
  );
}
