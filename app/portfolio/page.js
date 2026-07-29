import { buildBreadcrumbJsonLd, buildMetadata } from '@/lib/seo';
import PortfolioIndexClient from './PortfolioIndexClient';

export const metadata = buildMetadata({
  title: 'Portfolio - Software, Websites, ERP & Digital Products',
  description:
    'Explore Codesudio portfolio work across websites, ERP platforms, internal systems and digital products for Saudi businesses.',
  path: '/portfolio',
  keywords: [
    'Codesudio portfolio',
    'software portfolio Saudi Arabia',
    'ERP portfolio Saudi Arabia',
    'web development portfolio',
  ],
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
]);

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PortfolioIndexClient />
    </>
  );
}
