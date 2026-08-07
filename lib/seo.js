import { profile, contact, links } from './data';

export const SITE_URL = 'https://krishan-bir-chaudhary.vercel.app';
export const SITE_NAME = profile.name;
export const TWITTER_HANDLE = '@DrKrishanBir';

/** Per-page SEO + social preview strategy */
export const pageSeo = {
  home: {
    title: `${profile.name} — Leadership in Indian Agriculture | BKS President`,
    description: `${profile.summary} Book a consultation, enquire via form, or contact the New Delhi office.`,
    path: '/',
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
    title: 'Heritage Storytelling — Farmers’ Forum, Leadership & Kisan Bhavan',
    description:
      'Premium historical storytelling: Farmers’ Forum India, Krishan Bir Chaudhary’s leadership journey, and the Kisan Bhavan foundation narrative with verified facts and clear archival placeholders.',
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
      'Book Development Misplaced (Penguin, 2014), Kisan Ki Awaaz magazine, national television, interviews and press.',
    path: '/media',
  },
  gallery: {
    title: 'Photo Gallery',
    description: `Public moments and leadership photography of ${profile.name}.`,
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
    description: `Email ${contact.email} · ${contact.webLabel} · New Delhi office and Ghaziabad residence.`,
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
          alt: `${profile.name} — Leadership in Indian Agriculture`,
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
    url: SITE_URL,
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
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Central America, Bolivia',
      description: 'D.Litt. (Honoris Causa), 2021',
    },
    knowsAbout: [
      'Indian agriculture policy',
      'Minimum Support Price',
      'Seed sovereignty',
      'Natural farming',
      'WTO agriculture negotiations',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'F-1/A, Pandav Nagar',
      addressLocality: 'New Delhi',
      postalCode: '110091',
      addressCountry: 'IN',
    },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bharatiya Krishak Samaj',
    alternateName: ['BKS', 'Bharatiya Kisan Samaj'],
    description:
      'National farmer organisation led by President Krishan Bir Chaudhary, advocating farmer rights, MSP, seed sovereignty and sustainable agriculture.',
    url: absoluteUrl('/bks'),
    logo: absoluteUrl('/icon-512.png'),
    foundingDate: '1955',
    founder: {
      '@type': 'Person',
      name: 'Dr. Panjabrao S. Deshmukh',
      description:
        'Founder associated with the 1955 establishment of Bharat Krishak Samaj (Farmers’ Forum, India), the historical farmer-organisation tradition cited in public records.',
    },
    employee: {
      '@type': 'Person',
      name: profile.name,
      jobTitle: 'President',
    },
    sameAs: [links.bksOfficial, contact.web],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'public relations',
      email: contact.email,
      telephone: `+91-${contact.phones[0]}`,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
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
    description: profile.summary,
    publisher: {
      '@type': 'Person',
      name: profile.name,
    },
    inLanguage: ['en', 'hi'],
  };
}

/** LocalBusiness schema for the New Delhi office (CRO / local SEO). */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#office`,
    name: `${profile.name} — Office`,
    alternateName: profile.nameHi,
    description: profile.summary,
    url: SITE_URL,
    image: absoluteUrl('/photos/events/portrait-speaking.png'),
    email: contact.email,
    telephone: `+91-${contact.phones[0]}`,
    priceRange: 'Consultation by enquiry',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'F-1/A, Pandav Nagar',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110091',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6385,
      longitude: 77.2889,
    },
    hasMap: contact.mapLink,
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    sameAs: [
      'https://www.facebook.com/krishanbir.chaudhary/',
      'https://www.instagram.com/krishanbir.chaudhary/',
      'https://www.youtube.com/@krishak1951',
      'https://x.com/DrKrishanBir',
      contact.web,
    ],
    founder: {
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.shortTitle,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: `+91-${contact.phones[0]}`,
        email: contact.email,
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'IN',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'WhatsApp',
        telephone: `+${contact.whatsapp}`,
        url: contact.whatsappUrl,
        availableLanguage: ['English', 'Hindi'],
      },
    ],
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
