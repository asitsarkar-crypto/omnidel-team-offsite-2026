import { SITE_NAME, SITE_URL } from '../lib/seo';

export default function manifest() {
  return {
    name: `${SITE_NAME} — Bharatiya Krishak Samaj`,
    short_name: 'Krishan Bir',
    description:
      'Official portfolio of Krishan Bir Chaudhary — President, Bharatiya Krishak Samaj.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f4f6f2',
    theme_color: '#0b1c14',
    lang: 'en',
    icons: [
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    related_applications: [],
    categories: ['news', 'government', 'education'],
    id: SITE_URL,
  };
}
