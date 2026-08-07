import { archiveNav, nav } from '../lib/data';
import { absoluteUrl } from '../lib/seo';

export default function sitemap() {
  const now = new Date();
  const extras = [
    { href: '/donate' },
    { href: '/thank-you' },
  ];
  const routes = [...nav, ...archiveNav, ...extras].filter((item) => !item.external);
  const seen = new Set();

  return routes
    .filter((item) => {
      if (seen.has(item.href)) return false;
      seen.add(item.href);
      return true;
    })
    .map((item) => ({
      url: absoluteUrl(item.href),
      lastModified: now,
      changeFrequency: item.href === '/' ? 'weekly' : 'monthly',
      priority:
        item.href === '/'
          ? 1
          : item.href === '/plant' || item.href === '/donate'
            ? 0.95
            : item.href === '/contact'
              ? 0.85
              : 0.7,
    }));
}
