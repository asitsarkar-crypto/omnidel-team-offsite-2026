/**
 * Platform identity — Bharatiya Krishak Samaj × Krishnavirji × KarmYog
 * Standalone digital home (NOT the original KBC production portfolio).
 */

import { profile } from './data';

export const platform = {
  name: 'KarmYog Vatika',
  nameHi: 'कर्मयोग वाटिका',
  fullTitle: 'KarmYog Vatika — Digital Home of BKS, Krishnavirji & KarmYog',
  brandLine: 'Institution. Leadership. Service. A living canopy for the nation.',
  tagline: 'Where Bharatiya Krishak Samaj, Krishnavirji, and KarmYog meet — in trust, heritage, and action.',
  purpose:
    'A world-class digital identity for Bharatiya Krishak Samaj, Shri Krishan Bir Chaudhary (Krishnavirji), and KarmYog for the 21st Century — telling their story with dignity, building public trust, and ready to evolve into transparent donation and tree-plantation programmes.',
  promise: [
    'Preserve institutional heritage with verified facts',
    'Present leadership with clarity and respect',
    'Invite participation without pressure',
    'Grow into donation & plantation with integrity',
  ],
};

export const pillars = [
  {
    id: 'bks',
    kicker: 'Institution',
    title: 'Bharatiya Krishak Samaj',
    short: 'BKS',
    logo: '/logos/bks-logo.png',
    href: '/bks',
    lead: 'A national farmer organisation rooted in the 1955 Farmers’ Forum tradition — advocating dignity of the annadata, fair price, seed sovereignty, and just agri-policy.',
    points: [
      'Heritage from Farmers’ Forum / Bharat Krishak Samaj, 1955',
      'Contemporary national leadership and state chapter building',
      'Policy voice on MSP, natural farming, and farmer rights',
    ],
  },
  {
    id: 'krishnavirji',
    kicker: 'Leadership',
    title: profile.name,
    short: 'Krishnavirji',
    localName: profile.nameHi,
    logo: '/photos/events/portrait-speaking.png',
    href: '/about',
    lead: profile.summary,
    points: [
      profile.shortTitle,
      'Member, GOI High Level Committee — MSP, Natural Farming & Crop Diversification',
      'Editor, Kisan Ki Awaaz · Author, Development Misplaced (Penguin, 2014)',
    ],
  },
  {
    id: 'karmyog',
    kicker: 'Movement',
    title: 'KarmYog for the 21st Century',
    short: 'KY21C',
    logo: '/logos/karmyog-21c.png',
    href: '/initiative',
    lead: 'Work as a path — Kaam to Karm. KY21C brings ancient Karm-Yog into contemporary life-skills, livelihood, and green practice, in partnership with farmer institutions.',
    points: [
      'Philosophy of service through work',
      'Education, livelihood, and green initiatives',
      'Joint steward of this living digital platform',
    ],
  },
];

export const storyChapters = [
  {
    id: 'trust',
    title: 'Built for trust',
    body: 'Every public claim is either verified or clearly marked as awaiting primary documents. Heritage chapters never invent chronology for the sake of a polished page.',
  },
  {
    id: 'story',
    title: 'Told as a continuous story',
    body: 'From Farmers’ Forum India to Krishnavirji’s national leadership, from KarmYog’s ethic of service to a living invitation to plant and sponsor — one narrative arc, not a brochure collage.',
  },
  {
    id: 'evolve',
    title: 'Ready to evolve',
    body: 'Donation and tree-plantation flows are architected with Razorpay-ready APIs, acknowledgements, and a normalised data model — activated when legal and field readiness are confirmed.',
  },
];
