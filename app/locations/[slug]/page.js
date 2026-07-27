import { notFound } from 'next/navigation';
import { LOCATION_ORDER, LOCATIONS } from '@/data/locations';
import { buildBreadcrumbJsonLd, buildMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import LocationDetailClient from './LocationDetailClient';

export function generateStaticParams() {
  return LOCATION_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = LOCATIONS[slug];
  if (!location) return {};

  return buildMetadata({
    title: location.seoTitle,
    description: location.seoDescription,
    path: `/locations/${slug}`,
    keywords: [
      `software company ${location.name}`,
      `web development ${location.name}`,
      `custom software ${location.name}`,
      `SEO services ${location.name}`,
    ],
  });
}

export default async function LocationDetailPage({ params }) {
  const { slug } = await params;
  if (!LOCATION_ORDER.includes(slug)) notFound();

  const location = LOCATIONS[slug];
  const path = `/locations/${slug}`;

  const locationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${SITE_NAME} - ${location.name}`,
    description: location.seoDescription,
    url: `${SITE_URL}${path}`,
    telephone: '+966531826230',
    email: 'hello@codesudio.com',
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: location.region,
      },
    },
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/locations' },
    { name: location.name, path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LocationDetailClient slug={slug} />
    </>
  );
}
