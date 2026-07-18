import { buildMetadata } from '@/lib/seo';
import HomeClient from './HomeClient';

export const metadata = buildMetadata({
  title: {
    absolute: 'Codesudio — Custom software & digital products, built for Saudi businesses.',
  },
  description:
    'Codesudio is a founder-led software company in Jubail, Saudi Arabia. We design and ship websites, apps, ERP, e-commerce and SaaS that move your business forward.',
  path: '/',
  keywords: [
    'custom software Jubail',
    'software company Saudi Arabia',
    'SaaS development KSA',
    'ERP Saudi Arabia',
    'e-commerce ZATCA invoicing',
    'web and mobile apps Eastern Province',
  ],
});

export default function Home() {
  return <HomeClient />;
}
