export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.codesudio.com';
export const SITE_NAME = 'Codesudio';

// Page-level openGraph/twitter replace (not merge with) the root layout's, so the
// file-based app/opengraph-image.js is dropped unless we re-declare it here.
export const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Codesudio — custom software for Saudi businesses',
};

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
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: typeof title === 'string' ? title : title.absolute,
      description,
      images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
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
