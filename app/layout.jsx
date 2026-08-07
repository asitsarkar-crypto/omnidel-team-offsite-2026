import './globals.css';
import JsonLd from '../components/JsonLd';
import { LanguageProvider } from '../components/LanguageProvider';
import SiteFooter from '../components/SiteFooter';
import SiteNav from '../components/SiteNav';
import { profile } from '../lib/data';
import {
  SITE_URL,
  absoluteUrl,
  localBusinessJsonLd,
  organizationJsonLd,
  personJsonLd,
  websiteJsonLd,
} from '../lib/seo';

const ogImage = {
  url: absoluteUrl('/og-default.png'),
  width: 1200,
  height: 630,
  alt: `${profile.name} — Leadership in Indian Agriculture`,
};

export const viewport = {
  themeColor: '#0b1c14',
  colorScheme: 'light',
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.shortTitle}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.summary,
  applicationName: 'krishan-bir-chaudhary',
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    'Krishan Bir Chaudhary',
    'Bharatiya Krishak Samaj',
    'Bharat Krishak Samaj',
    'MSP committee',
    'Indian farmers',
    'seed sovereignty',
    'Kisan Ki Awaaz',
    'natural farming',
    'Panjabrao Deshmukh',
  ],
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: '/icon-512.png', sizes: '512x512', type: 'image/png' }],
    shortcut: ['/icon-512.png'],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: profile.name,
    statusBarStyle: 'default',
  },
  openGraph: {
    title: profile.name,
    description: profile.tagline,
    url: SITE_URL,
    siteName: profile.name,
    locale: 'en_IN',
    type: 'website',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.name,
    description: profile.tagline,
    creator: '@DrKrishanBir',
    site: '@DrKrishanBir',
    images: [absoluteUrl('/og-default.png')],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,560;9..144,700&family=Karla:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;600;700&family=Noto+Sans+Devanagari:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0b1c14" />
        <JsonLd
          data={[
            websiteJsonLd(),
            personJsonLd(),
            organizationJsonLd(),
            localBusinessJsonLd(),
          ]}
        />
      </head>
      <body>
        <LanguageProvider>
          <a className="skip" href="#main">
            Skip to content
          </a>
          <SiteNav />
          <main id="main">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
