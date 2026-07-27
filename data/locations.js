export const LOCATION_ORDER = [
  'jubail',
  'dammam',
  'al-khobar',
  'riyadh',
  'jeddah',
  'makkah',
  'madinah',
];

export const LOCATION_SERVICES = [
  {
    title: 'Custom software',
    desc: 'Internal tools, portals, workflows and dashboards shaped around the way your team operates.',
  },
  {
    title: 'Web and mobile apps',
    desc: 'Responsive web apps and mobile experiences for customers, field teams and growing operations.',
  },
  {
    title: 'ERP and automation',
    desc: 'Connected systems for HR, inventory, finance, approvals, reporting and repeated manual work.',
  },
  {
    title: 'Local SEO',
    desc: 'Technical SEO, city landing pages, Google Business signals and content that supports local search.',
  },
];

const defaultPainPoints = [
  'Replace spreadsheets and manual approvals with reliable software.',
  'Launch bilingual customer experiences for Arabic and English users.',
  'Connect sales, operations and finance data into one source of truth.',
  'Improve search visibility for high-intent local customers.',
];

const defaultFaq = (city) => [
  {
    q: `Does Codesudio work with businesses in ${city}?`,
    a: `Yes. Codesudio is based in Saudi Arabia and works with businesses in ${city} remotely and on-site when a project needs local discovery, workshops or launch support.`,
  },
  {
    q: `What services do you offer in ${city}?`,
    a: `We build custom software, websites, mobile apps, ERP systems, e-commerce platforms, SaaS products and SEO foundations for companies in ${city}.`,
  },
  {
    q: `Can you build Arabic and English websites for ${city} customers?`,
    a: 'Yes. We design bilingual Arabic and English experiences with real RTL support, Saudi user behavior and local conversion paths in mind.',
  },
];

export const LOCATIONS = {
  jubail: {
    code: '01',
    name: 'Jubail',
    region: 'Eastern Province',
    seoTitle: 'Software Company in Jubail',
    seoDescription:
      'Codesudio builds custom software, websites, apps, ERP systems and SEO foundations for businesses in Jubail and Jubail Industrial City.',
    heroTitle: 'Software company in Jubail for serious business systems.',
    heroSub:
      'Codesudio helps Jubail businesses replace manual work with custom software, websites, apps, ERP automation and SEO that supports real growth.',
    localFocus:
      'Jubail companies often need software that connects industrial operations, suppliers, finance teams and customer-facing channels. We build systems that stay practical for daily work and scalable as the business grows.',
    highlights: ['Jubail Industrial City', 'Eastern Province base', 'Industrial and service businesses'],
    painPoints: [
      'Digitise industrial, service and trading workflows without forcing a generic template.',
      'Build portals for customers, suppliers, approvals and internal teams.',
      'Improve local discovery for searches around Jubail and the Eastern Province.',
      'Support ZATCA-ready invoicing and Saudi business requirements where relevant.',
    ],
    faq: defaultFaq('Jubail'),
  },
  dammam: {
    code: '02',
    name: 'Dammam',
    region: 'Eastern Province',
    seoTitle: 'Software Company in Dammam',
    seoDescription:
      'Custom software, web apps, mobile apps, ERP automation and local SEO for businesses in Dammam, Saudi Arabia.',
    heroTitle: 'Custom software and web development in Dammam.',
    heroSub:
      'We build digital systems for Dammam companies that need faster operations, sharper customer experiences and stronger local search visibility.',
    localFocus:
      'Dammam businesses sit at the center of Eastern Province commerce, logistics and services. We help teams turn repeated operational work into clean software that is easier to run and measure.',
    highlights: ['Eastern Province commercial hub', 'Operations and logistics workflows', 'Bilingual customer journeys'],
    painPoints: defaultPainPoints,
    faq: defaultFaq('Dammam'),
  },
  'al-khobar': {
    code: '03',
    name: 'Al Khobar',
    region: 'Eastern Province',
    seoTitle: 'Software Company in Al Khobar',
    seoDescription:
      'Codesudio provides custom software development, websites, mobile apps, SaaS, ERP and SEO services for Al Khobar businesses.',
    heroTitle: 'Software, apps and SEO for Al Khobar businesses.',
    heroSub:
      'Codesudio builds polished customer-facing websites and practical business systems for companies serving Al Khobar and the wider Eastern Province.',
    localFocus:
      'Al Khobar companies often compete on trust, speed and customer experience. We help translate those standards into websites, apps, portals and SEO foundations that make the business easier to find and easier to work with.',
    highlights: ['Customer-facing digital products', 'Service business automation', 'Eastern Province reach'],
    painPoints: defaultPainPoints,
    faq: defaultFaq('Al Khobar'),
  },
  riyadh: {
    code: '04',
    name: 'Riyadh',
    region: 'Riyadh Province',
    seoTitle: 'Software Company in Riyadh',
    seoDescription:
      'Build custom software, SaaS products, web apps, ERP automation and SEO foundations for Riyadh businesses with Codesudio.',
    heroTitle: 'Software development for Riyadh companies moving fast.',
    heroSub:
      'We help Riyadh startups, service companies and growing teams ship reliable websites, SaaS products, apps and business automation.',
    localFocus:
      'Riyadh businesses need digital products that can move quickly without becoming fragile. We focus on clear scope, maintainable code, analytics and launch support so teams can keep improving after release.',
    highlights: ['Startup and SaaS builds', 'Business automation', 'Scalable web platforms'],
    painPoints: [
      'Shape MVPs and SaaS products around a clear first launch.',
      'Build dashboards, admin tools and customer portals that can scale.',
      'Improve technical SEO and content structure for competitive Riyadh searches.',
      'Support bilingual UX for national Saudi audiences.',
    ],
    faq: defaultFaq('Riyadh'),
  },
  jeddah: {
    code: '05',
    name: 'Jeddah',
    region: 'Makkah Province',
    seoTitle: 'Software Company in Jeddah',
    seoDescription:
      'Codesudio builds custom websites, e-commerce platforms, mobile apps, ERP systems and SEO foundations for businesses in Jeddah.',
    heroTitle: 'Websites, e-commerce and software for Jeddah businesses.',
    heroSub:
      'From conversion-focused storefronts to custom internal platforms, Codesudio helps Jeddah companies launch digital systems that are fast and usable.',
    localFocus:
      'Jeddah companies often serve a mix of local, national and international customers. We build bilingual digital experiences, clean checkout flows and operational systems that make growth easier to manage.',
    highlights: ['E-commerce and storefronts', 'Bilingual customer experience', 'Operations dashboards'],
    painPoints: defaultPainPoints,
    faq: defaultFaq('Jeddah'),
  },
  makkah: {
    code: '06',
    name: 'Makkah',
    region: 'Makkah Province',
    seoTitle: 'Software Company in Makkah',
    seoDescription:
      'Custom software, websites, mobile apps, booking flows, ERP automation and local SEO for businesses in Makkah.',
    heroTitle: 'Digital systems for Makkah businesses and service teams.',
    heroSub:
      'Codesudio builds reliable websites, apps and automation for Makkah businesses that need clear customer journeys and dependable operations.',
    localFocus:
      'Makkah businesses need digital experiences that are clear, fast and easy for diverse audiences. We focus on practical flows, bilingual support and systems that reduce operational friction.',
    highlights: ['Service workflows', 'Booking and enquiry journeys', 'Arabic and English UX'],
    painPoints: defaultPainPoints,
    faq: defaultFaq('Makkah'),
  },
  madinah: {
    code: '07',
    name: 'Madinah',
    region: 'Madinah Province',
    seoTitle: 'Software Company in Madinah',
    seoDescription:
      'Codesudio builds websites, apps, custom software, ERP automation and SEO foundations for businesses in Madinah, Saudi Arabia.',
    heroTitle: 'Custom software and SEO for Madinah companies.',
    heroSub:
      'We help Madinah businesses build websites, apps, portals and automation that make teams faster and customers more confident.',
    localFocus:
      'Madinah organizations need dependable systems that are easy for teams and customers to use. Codesudio builds web platforms, internal tools and SEO foundations with long-term maintainability in mind.',
    highlights: ['Web platforms', 'Internal tools', 'Local search foundations'],
    painPoints: defaultPainPoints,
    faq: defaultFaq('Madinah'),
  },
};

export function getLocationCards() {
  return LOCATION_ORDER.map((slug) => {
    const location = LOCATIONS[slug];
    return {
      slug,
      href: `/locations/${slug}`,
      code: location.code,
      title: location.name,
      desc: `${location.region} software, apps, ERP and SEO support.`,
      previewStack: location.highlights,
    };
  });
}

export function getOtherLocations(currentSlug) {
  return LOCATION_ORDER.filter((slug) => slug !== currentSlug)
    .slice(0, 3)
    .map((slug) => {
      const location = LOCATIONS[slug];
      return {
        slug,
        href: `/locations/${slug}`,
        code: location.code,
        title: location.name,
        desc: `${location.region} digital product support.`,
        previewStack: location.highlights,
      };
    });
}
