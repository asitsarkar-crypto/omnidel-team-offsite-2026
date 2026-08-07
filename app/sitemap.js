import { nav } from '../lib/data';
import { absoluteUrl } from '../lib/seo';

export default function sitemap() {
  const now = new Date();

  return nav.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified: now,
    changeFrequency: item.href === '/' ? 'weekly' : 'monthly',
    priority: item.href === '/' ? 1 : item.href === '/contact' ? 0.9 : 0.7,
  }));
}
