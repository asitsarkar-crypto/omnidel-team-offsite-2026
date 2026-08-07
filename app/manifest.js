import { SITE_NAME, SITE_URL } from '../lib/seo';
import { vatika } from '../lib/vatika';

export default function manifest() {
  return {
    name: vatika.fullTitle,
    short_name: vatika.name,
    description: vatika.purpose,
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
    categories: ['lifestyle', 'education', 'environment'],
    id: SITE_URL,
  };
}
