import { contact, links, profile } from './data';
import { platform } from './platform';
import { vatika } from './vatika';

/** Standalone identity platform — never the original KBC production hostname. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://karmyog-vatika-seven.vercel.app';
export const SITE_NAME = platform.fullTitle;
export const TWITTER_HANDLE = '@DrKrishanBir';

export const pageSeo = {
  home: {
    title: `${platform.name} — BKS · Krishnavirji · KarmYog`,
    description: platform.purpose,
    path: '/',
  },
  mission: {
    title: 'Mission — Kaam to Karm',
    description: platform.tagline + ' ' + platform.purpose,
    path: '/mission',
  },
  initiative: {
    title: 'Joint Initiative — KY21C × Bharatiya Krishak Samaj',
    description:
      'KarmYog Vatika is a joint initiative of KarmYog for the 21st Century and Bharatiya Krishak Samaj for tree plantation and sponsorship.',
    path: '/initiative',
  },
  impact: {
    title: 'Impact Dashboard',
    description:
      'Trees planted, sponsors, funds raised, carbon offset, villages covered, and campaigns — KarmYog Vatika impact snapshot.',
    path: '/impact',
  },
  plant: {
    title: 'Plant a Tree / Sponsor Trees',
    description:
      'Sponsor trees online with KarmYog Vatika. Transparent rates, acknowledgement, and receipt architecture via Razorpay.',
    path: '/plant',
  },
  donate: {
    title: 'Donate Now',
    description:
      'Make a general donation to KarmYog Vatika tree plantation and sponsorship campaign.',
    path: '/donate',
  },
  locations: {
    title: 'Plantation Locations',
    description: 'Where KarmYog Vatika plantation campaigns take root across India.',
    path: '/locations',
  },
  sponsors: {
    title: 'Sponsors & Partners',
    description: 'Seed sponsors and institutional partners behind KarmYog Vatika.',
    path: '/sponsors',
  },
  faq: {
    title: 'FAQ',
    description: 'Questions about planting trees, donations, heritage, and the KY21C × BKS joint initiative.',
    path: '/faq',
  },
  thankYou: {
    title: 'Thank you',
    description: 'Acknowledgement for your KarmYog Vatika contribution.',
    path: '/thank-you',
  },
  about: {
    title: `About ${profile.name}`,
    description: `${profile.qualifications}. Born ${profile.dob}. President of Bharatiya Krishak Samaj and member of the Government of India High Level Committee on MSP, natural farming and crop diversification.`,
    path: '/about',
  },
  journey: {
    title: `Journey of ${profile.name}`,
    description:
      'Timeline from Indian Sugarcane Development Council and SFCI through WTO ministerials, Seeds Bill testimony, EPO wheat-patent challenge, to today’s MSP committee leadership.',
    path: '/journey',
  },
  vision: {
    title: 'Vision & Mission',
    description: profile.brandLine + ' ' + profile.tagline,
    path: '/vision',
  },
  bks: {
    title: 'Bharatiya Krishak Samaj — Heritage & Mission',
    description:
      'Heritage of Indian farmer organisation since the 1955 Bharat Krishak Samaj founding tradition, and the contemporary mission of Bharatiya Krishak Samaj under President Krishan Bir Chaudhary.',
    path: '/bks',
  },
  heritage: {
    title: 'Heritage — Farmers’ Forum, Leadership & Kisan Bhavan',
    description:
      'Historical storytelling for the joint initiative: Farmers’ Forum India, leadership journey, and Kisan Bhavan chapters with verified facts and archival placeholders.',
    path: '/heritage',
  },
  agriculture: {
    title: 'Agriculture Agenda',
    description:
      'Seed sovereignty, sustainable and natural farming, biosafety discipline, biofuels, and farmer-centric trade policy.',
    path: '/agriculture',
  },
  initiatives: {
    title: 'Initiatives',
    description:
      'MSP advocacy, seed-law campaigns, pesticide-policy interventions, WTO engagement, Kisan Ki Awaaz, and BKS movement building.',
    path: '/initiatives',
  },
  media: {
    title: 'Media Centre',
    description:
      'News, press coverage, videos, and articles related to BKS leadership and the KarmYog Vatika campaign.',
    path: '/media',
  },
  gallery: {
    title: 'Photo Gallery',
    description: `Public moments and atmosphere — ${platform.name}.`,
    path: '/gallery',
  },
  awards: {
    title: 'Awards & Recognition',
    description:
      'Krishi Ratan (1998), Guest of Honour at the 88th Indian Science Congress (2001), and D.Litt. Honoris Causa (2021).',
    path: '/awards',
  },
  contact: {
    title: 'Contact',
    description: `Contact KarmYog Vatika / BKS office — ${contact.email} · New Delhi.`,
    path: '/contact',
  },
};

export function absoluteUrl(path = '/') {
  if (!path.startsWith('/')) return `${SITE_URL}/${path}`;
  return `${SITE_URL}${path === '/' ? '' : path}`;
}

export function buildMetadata({ title, description, path = '/', type = 'website' }) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl('/og-default.png');

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${platform.name} — BKS · Krishnavirji · KarmYog`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
      images: [ogImage],
    },
  };
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    alternateName: [profile.nameHi, 'Krishanbir Chaudhary', 'Krishnaveer Chaudhary'],
    birthDate: '1951-03-12',
    jobTitle: profile.shortTitle,
    description: profile.summary,
    url: absoluteUrl('/about'),
    image: absoluteUrl('/photos/events/portrait-speaking.png'),
    email: contact.email,
    telephone: contact.phones.map((p) => `+91-${p}`),
    sameAs: [
      'https://www.facebook.com/krishanbir.chaudhary/',
      'https://www.instagram.com/krishanbir.chaudhary/',
      'https://www.youtube.com/@krishak1951',
      'https://x.com/DrKrishanBir',
      contact.web,
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Bharatiya Krishak Samaj',
    },
    knowsAbout: [
      'Indian agriculture policy',
      'Minimum Support Price',
      'Seed sovereignty',
      'Natural farming',
      'Tree plantation partnerships',
    ],
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: platform.name,
    alternateName: ['KarmYog Vatika', 'BKS × Krishnavirji × KarmYog'],
    description: platform.purpose,
    url: SITE_URL,
    logo: absoluteUrl('/logos/karmyog-21c.png'),
    parentOrganization: [
      {
        '@type': 'Organization',
        name: 'KarmYog for the 21st Century',
        url: 'https://karmyog21c.in/',
      },
      {
        '@type': 'Organization',
        name: 'Bharatiya Krishak Samaj',
        url: absoluteUrl('/bks'),
        foundingDate: '1955',
      },
    ],
    sameAs: [links.bksOfficial, 'https://karmyog21c.in/', contact.web],
    areaServed: 'IN',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: contact.email,
      telephone: `+91-${contact.phones[0]}`,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  };
}

export function bksOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bharatiya Krishak Samaj',
    alternateName: ['BKS', 'Bharatiya Kisan Samaj'],
    description:
      'National farmer organisation led by President Krishan Bir Chaudhary, advocating farmer rights, MSP, seed sovereignty and sustainable agriculture.',
    url: absoluteUrl('/bks'),
    logo: absoluteUrl('/logos/bks-logo.png'),
    foundingDate: '1955',
    founder: {
      '@type': 'Person',
      name: 'Dr. Panjabrao S. Deshmukh',
    },
    employee: {
      '@type': 'Person',
      name: profile.name,
      jobTitle: 'President',
    },
    sameAs: [links.bksOfficial, contact.web],
  };
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: platform.purpose,
    publisher: {
      '@type': 'Organization',
      name: platform.name,
    },
    inLanguage: ['en', 'hi'],
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#office`,
    name: `${platform.name} — Coordination Office`,
    description: platform.purpose,
    url: SITE_URL,
    image: absoluteUrl('/photos/field-01.jpg'),
    email: contact.email,
    telephone: `+91-${contact.phones[0]}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'F-1/A, Pandav Nagar',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110091',
      addressCountry: 'IN',
    },
    hasMap: contact.mapLink,
    areaServed: { '@type': 'Country', name: 'India' },
  };
}

export function faqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
