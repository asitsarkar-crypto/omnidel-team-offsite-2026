import { SITE_URL } from '../lib/seo';

/**
 * robots.txt recommendations:
 * - Allow all public pages
 * - Point to the generated sitemap
 * - Disallow speculative crawl of Next internals if exposed
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
