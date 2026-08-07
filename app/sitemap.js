import { nav } from '../lib/data';
import { absoluteUrl } from '../lib/seo';

export default function sitemap() {
  const now = new Date();
  const routes = nav.filter((item) => !item.external);

  return routes.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified: now,
    changeFrequency: item.href === '/' ? 'weekly' : 'monthly',
    priority: item.href === '/' ? 1 : item.href === '/contact' ? 0.9 : 0.7,
  }));
}
