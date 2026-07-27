import { buildBreadcrumbJsonLd, buildMetadata } from '@/lib/seo';
import LocationsIndexClient from './LocationsIndexClient';

export const metadata = buildMetadata({
  title: 'Software Company Locations in Saudi Arabia',
  description:
    'Codesudio builds custom software, websites, apps, ERP systems and SEO foundations for businesses in Jubail, Dammam, Al Khobar, Riyadh, Jeddah, Makkah and Madinah.',
  path: '/locations',
  keywords: [
    'software company Saudi Arabia',
    'web development Saudi Arabia',
    'custom software Saudi Arabia',
    'SEO services Saudi Arabia',
  ],
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Locations', path: '/locations' },
]);

export default function LocationsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LocationsIndexClient />
    </>
  );
}
