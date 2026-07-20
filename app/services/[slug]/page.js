import { notFound } from 'next/navigation';
import { ORDER, SERVICES } from '@/data/services';
import { buildMetadata, buildBreadcrumbJsonLd, SITE_NAME, SITE_URL } from '@/lib/seo';
import { ServiceDetailClient } from './ServiceDetailClient';

export function generateStaticParams() {
  return ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) return {};
  return buildMetadata({
    title: service.en.title,
    description: service.en.tagline,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  if (!ORDER.includes(slug)) notFound();

  const service = SERVICES[slug];

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.en.title,
    description: service.en.tagline,
    provider: { '@type': 'ProfessionalService', name: SITE_NAME, url: SITE_URL },
    areaServed: 'SA',
    url: `${SITE_URL}/services/${slug}`,
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.en.title, path: `/services/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiceDetailClient slug={slug} />
    </>
  );
}
