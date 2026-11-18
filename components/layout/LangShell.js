'use client';

import { useLanguage } from '@/lib/language-context';
import { MobileTabBar } from '@/components/layout/MobileTabBar';

export function LangShell({ children }) {
  const { dir } = useLanguage();

  return (
    <div
      dir={dir}
      className={`min-h-dvh bg-bg text-ink antialiased overflow-x-clip pb-[calc(92px+env(safe-area-inset-bottom))] md:pb-0 ${
        dir === 'rtl' ? 'font-arabic' : 'font-body'
      }`}
    >
      {children}
      <MobileTabBar />
    </div>
  );
}
