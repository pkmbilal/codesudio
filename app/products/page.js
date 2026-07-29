import { buildBreadcrumbJsonLd, buildMetadata } from '@/lib/seo';
import ProductsIndexClient from './ProductsIndexClient';

export const metadata = buildMetadata({
  title: 'Products - SaaS, ERP & Digital Platforms',
  description:
    'Explore Codesudio products, including ScanEat restaurant ordering, Codesudio ERP and SaaS platforms built for Saudi businesses.',
  path: '/products',
  keywords: [
    'Codesudio products',
    'ScanEat KSA',
    'Codesudio ERP',
    'Saudi SaaS products',
    'restaurant QR menu Saudi Arabia',
  ],
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
]);

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductsIndexClient />
    </>
  );
}
