import './globals.css';
import JsonLd from '../components/JsonLd';
import { LanguageProvider } from '../components/LanguageProvider';
import LanguageBar from '../components/LanguageBar';
import SiteFooter from '../components/SiteFooter';
import SiteNav from '../components/SiteNav';
import { platform } from '../lib/platform';
import {
  SITE_URL,
  absoluteUrl,
  bksOrganizationJsonLd,
  localBusinessJsonLd,
  organizationJsonLd,
  personJsonLd,
  websiteJsonLd,
} from '../lib/seo';

const ogImage = {
  url: absoluteUrl('/og-default.png'),
  width: 1200,
  height: 630,
  alt: `${platform.name} — BKS · Krishnavirji · KarmYog`,
};

export const viewport = {
  themeColor: '#0b1c14',
  colorScheme: 'light',
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${platform.name} — BKS · Krishnavirji · KarmYog`,
    template: `%s · ${platform.name}`,
  },
  description: platform.purpose,
  applicationName: 'KarmYog Vatika',
  authors: [{ name: platform.name, url: SITE_URL }],
  creator: platform.name,
  publisher: platform.name,
  keywords: [
    'KarmYog Vatika',
    'Bharatiya Krishak Samaj',
    'Krishan Bir Chaudhary',
    'Krishnavirji',
    'KarmYog for the 21st Century',
    'KY21C',
    'Indian farmers',
    'tree plantation',
    'digital identity NGO',
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
    title: platform.name,
    statusBarStyle: 'default',
  },
  openGraph: {
    title: platform.fullTitle,
    description: platform.purpose,
    url: SITE_URL,
    siteName: platform.name,
    locale: 'en_IN',
    type: 'website',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: platform.fullTitle,
    description: platform.tagline,
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
            organizationJsonLd(),
            bksOrganizationJsonLd(),
            personJsonLd(),
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
          <LanguageBar />
          <main id="main">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
