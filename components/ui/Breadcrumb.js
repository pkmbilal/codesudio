import Link from 'next/link';

export function Breadcrumb({ items, current }) {
  return (
    <nav className="animate-reveal motion-reduce:animate-none flex items-center gap-[9px] text-[13.5px] text-text-dark-6 flex-wrap">
      {items.map((item) => (
        <span key={item.href} className="flex items-center gap-[9px]">
          <Link href={item.href} className="text-text-dark-6 transition-colors hover:text-ink">
            {item.label}
          </Link>
          <span className="opacity-50">/</span>
        </span>
      ))}
      <span className="text-brand-dark font-medium">{current}</span>
    </nav>
  );
}
