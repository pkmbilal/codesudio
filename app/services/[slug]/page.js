import { notFound } from 'next/navigation';
import { ORDER, SERVICES } from '@/data/services';
import { ServiceDetailClient } from './ServiceDetailClient';

export function generateStaticParams() {
  return ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) return {};
  return {
    title: `${service.en.title} — Codesudio`,
    description: service.en.tagline,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  if (!ORDER.includes(slug)) notFound();

  return <ServiceDetailClient slug={slug} />;
}
