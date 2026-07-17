'use client';

import { useLanguage } from '@/lib/language-context';

export function LangShell({ children }) {
  const { dir } = useLanguage();

  return (
    <div
      dir={dir}
      className={`min-h-screen bg-bg text-ink antialiased overflow-x-clip ${
        dir === 'rtl' ? 'font-arabic' : 'font-body'
      }`}
    >
      {children}
    </div>
  );
}
