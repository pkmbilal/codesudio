import { buildMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import ServicesIndexClient from './ServicesIndexClient';

export const metadata = buildMetadata({
  title: 'Software Services — Custom Software, SaaS, E-commerce & ERP',
  description:
    'From the first line of code to launch and long-term support — here is everything Codesudio can build, run and grow for your business.',
  path: '/services',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
]);

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServicesIndexClient />
    </>
  );
}
