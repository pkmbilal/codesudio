export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://codesudio.com';
export const SITE_NAME = 'Codesudio';

export function buildMetadata({ title, description, path = '/', keywords }) {
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: path,
      siteName: SITE_NAME,
      title: typeof title === 'string' ? title : title.absolute,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: typeof title === 'string' ? title : title.absolute,
      description,
    },
  };
}

export const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-mark.png`,
  image: `${SITE_URL}/logo-mark.png`,
  telephone: '+966531826230',
  email: 'hello@codesudio.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jubail Industrial City',
    addressRegion: 'Eastern Province',
    addressCountry: 'SA',
  },
  areaServed: 'SA',
};

export function buildBreadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
