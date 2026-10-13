import type { MetadataRoute } from 'next';
import { examples } from '@/lib/examples';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return [
    '',
    '/playground',
    '/architecture',
    '/gallery',
    ...examples.map((e) => `/examples/${e.slug}`),
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
