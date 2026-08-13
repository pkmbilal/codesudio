import { buildMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import PackagesIndexClient from './PackagesIndexClient';

export const metadata = buildMetadata({
  title: 'Packages — Bundled Software Services with Fixed Pricing',
  description:
    'Three fixed-price packages built from our services — pick the one that matches where your business is, or talk to us about something custom.',
  path: '/packages',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Packages', path: '/packages' },
]);

export default function PackagesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PackagesIndexClient />
    </>
  );
}
