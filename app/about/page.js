import { buildMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import AboutClient from './AboutClient';

export const metadata = buildMetadata({
  title: 'About Us — Founder-Led Software Company in Jubail',
  description:
    'We build custom software, apps and SaaS for Saudi businesses — end to end, from the first line of code to launch and long-term support.',
  path: '/about',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutClient />
    </>
  );
}
