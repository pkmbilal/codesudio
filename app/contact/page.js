import { buildMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import ContactClient from './ContactClient';

export const metadata = buildMetadata({
  title: 'Contact Us — Book a Discovery Call',
  description:
    'Send a message or reach us on WhatsApp — we usually reply within the hour, Sunday to Thursday.',
  path: '/contact',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
