/**
 * BKS KY21C Plantation Drive
 * Joint tree plantation & sponsorship campaign — Bharatiya Krishak Samaj × KY21C
 *
 * Content uses verified org facts where available.
 * Placeholders / TODOs mark assets or claims awaiting stakeholder confirmation.
 */

export const vatika = {
  name: 'BKS KY21C Plantation Drive',
  nameHi: 'बीकेएस केवाई२१सी प्लांटेशन ड्राइव',
  nameBn: 'বি কে এস কেওয়াই২১সি প্ল্যান্টেশন ড্রাইভ',
  shortName: 'Plantation Drive',
  fullTitle: 'BKS KY21C Plantation Drive — Tree Plantation & Sponsorship',
  tagline: 'Kaam to Karm — plant trust, grow a greener India.',
  /** TODO(stakeholder): Confirm final approved campaign tagline copy. */
  purpose:
    'A joint plantation drive of Bharatiya Krishak Samaj (BKS) and KarmYog for the 21st Century (KY21C) to sponsor trees, restore green cover, and honour India’s agrarian institutional heritage.',
  brandLine: 'Tree plantation & sponsorship for people, soil, and nation.',
  jointPartners: [
    {
      id: 'ky21c',
      name: 'KarmYog for the 21st Century',
      short: 'KY21C',
      logo: '/logos/karmyog-21c.png',
      href: 'https://karmyog21c.in/',
      role: 'Movement partner — work as path, nature as practice',
    },
    {
      id: 'bks',
      name: 'Bharatiya Krishak Samaj',
      short: 'BKS',
      logo: '/logos/bks-logo.png',
      href: '/bks',
      role: 'Institutional partner — farmer organisation since the 1955 Farmers’ Forum tradition',
    },
    {
      id: 'bks-wb',
      name: 'BKS West Bengal',
      short: 'BKS WB',
      logo: '/logos/bks-logo.png',
      href: 'https://bkswbengal.org/',
      role: 'State chapter — led by Mahacharya Sourabh J. Sarkar as State President (from 30 June 2026)',
    },
  ],
};

/**
 * Pricing — derived from brief: Mishraji sponsoring ₹15,000 for first 100 trees → ₹150/tree.
 * TODO(stakeholder): Confirm price per tree and package tiers before live payments.
 */
export const pricing = {
  currency: 'INR',
  currencySymbol: '₹',
  /** Amount in INR rupees (not paise) for display; APIs convert to paise. */
  perTreeInr: 150,
  minTrees: 1,
  maxTrees: 10000,
  suggestedTrees: [1, 5, 10, 25, 50, 100],
  packages: [
    {
      id: 'seedling',
      name: 'Seedling',
      trees: 1,
      label: 'Plant 1 tree',
    },
    {
      id: 'grove',
      name: 'Grove',
      trees: 10,
      label: 'Sponsor a grove of 10',
    },
    {
      id: 'orchard',
      name: 'Orchard',
      trees: 50,
      label: 'Sponsor 50 trees',
    },
    {
      id: 'first100',
      name: 'First Hundred',
      trees: 100,
      label: 'Join the first 100',
      featured: true,
    },
  ],
  donationPresetsInr: [500, 1500, 5000, 15000],
};

export const seedSponsor = {
  /**
   * TODO(stakeholder): Confirm full name, photo, quote, and public-acknowledgment consent.
   * Published carefully as campaign seed sponsorship from the project brief.
   */
  displayName: 'Mishraji',
  amountInr: 15000,
  trees: 100,
  headline: 'Mishraji is sponsoring ₹15,000 for the first 100 trees',
  body: 'A seed act of trust that opens this campaign — inviting citizens, families, and institutions to plant with us.',
  status: 'campaign-announced',
};

export const mission = {
  kicker: 'Mission',
  title: 'From Kaam to Karm — work that renews the earth',
  lead: 'BKS KY21C Plantation Drive turns everyday contribution into lasting green cover — rooted in farmer dignity, institutional memory, and ecological care.',
  pillars: [
    {
      title: 'Plant & sponsor',
      detail:
        'Individuals and organisations sponsor trees at transparent rates. Funds support plantation, nurture, and community stewardship.',
    },
    {
      title: 'Honour heritage',
      detail:
        'The campaign stands with Bharatiya Krishak Samaj’s farmer-organisation tradition and KarmYog’s call to make work a path of service.',
    },
    {
      title: 'Measure impact',
      detail:
        'Public counters track trees, sponsors, funds, and reach. Live telemetry expands as field data and systems come online.',
    },
    {
      title: 'Serve villages',
      detail:
        'Plantation locations prioritise community land and agrarian landscapes where trees protect soil, shade, and livelihood.',
    },
  ],
  sdgs: [
    { code: '13', name: 'Climate Action' },
    { code: '15', name: 'Life on Land' },
    { code: '11', name: 'Sustainable Cities & Communities' },
  ],
};

export const impactStats = {
  /** Curated snapshot until Supabase aggregates are live. */
  asOf: '2026-08-07',
  source: 'curated-campaign-launch',
  note: 'Launch snapshot. Figures update as plantations and verified donations are recorded.',
  items: [
    { id: 'trees', label: 'Trees Planted', value: 0, suffix: '', hint: 'First 100 open for sponsorship' },
    { id: 'sponsors', label: 'Sponsors', value: 1, suffix: '', hint: 'Including seed sponsor' },
    { id: 'funds', label: 'Funds Raised', value: 15000, prefix: '₹', hint: 'Acknowledged seed sponsorship' },
    { id: 'carbon', label: 'Carbon Offset', value: 0, suffix: ' t', hint: 'Calculated after verified plantings' },
    { id: 'villages', label: 'Villages Covered', value: 0, suffix: '', hint: 'Locations publishing soon' },
    { id: 'campaigns', label: 'Campaigns', value: 1, suffix: '', hint: 'First Hundred Trees' },
  ],
};

export const campaigns = [
  {
    slug: 'first-100-trees',
    name: 'First 100 Trees',
    status: 'active',
    goalTrees: 100,
    sponsoredTrees: 100,
    /** Seed sponsorship fills the first hundred intent; field planting status TBD. */
    plantedTrees: 0,
    pricePerTreeInr: pricing.perTreeInr,
    summary:
      'Opening campaign of BKS KY21C Plantation Drive. Mishraji’s ₹15,000 seed sponsorship underwrites the first 100 trees — join by sponsoring the next grove.',
  },
];

export const locations = [
  {
    id: 'loc-tbd-1',
    name: 'Primary plantation belt',
    region: 'To be confirmed',
    state: 'India',
    status: 'planning',
    /** TODO(stakeholder): Replace with verified village/district coordinates and species list. */
    detail:
      'Field partners and village sites are being finalised with BKS networks and KY21C green-livelihood programmes.',
    treesPlanned: 100,
    species: ['Native species — list pending'],
  },
  {
    id: 'loc-tbd-2',
    name: 'Community grove sites',
    region: 'Multi-state roll-out',
    state: 'India',
    status: 'planned',
    detail:
      'Subsequent locations will publish district, geo coordinates, and steward contacts once primary documents are attached.',
    treesPlanned: 0,
    species: ['Pending confirmation'],
  },
];

export const vatikaTestimonials = [
  {
    quote:
      'I thank you for the leadership you are providing for our agricultural renewal… We are looking forward to your guidance and advice.',
    attribution: 'Prof. M. S. Swaminathan',
    context: 'Letter dated 1 February 2006, National Commission on Farmers — institutional trust behind BKS leadership',
  },
];

/** Media centre content — campaign + institutional archive */
export const mediaSections = {
  videos: [
    {
      id: 'jeevamrut',
      title: 'Jeevamrut',
      outlet: 'KarmYog for 21st Century · YouTube',
      href: 'https://www.youtube.com/watch?v=c6CCNVbBGL8',
      embedSrc: 'https://www.youtube.com/embed/c6CCNVbBGL8',
      type: 'Video',
      status: 'live',
      note: 'Featured on bkswbengal.org leadership — KY21C philosophy in practice.',
    },
    {
      id: 'sri-farming',
      title: 'Jeevan Jeevika Andolan: SRI Farming Technique',
      outlet: 'KarmYog for 21st Century · YouTube',
      href: 'https://www.youtube.com/watch?v=2lveMnYU9Ds',
      embedSrc: 'https://www.youtube.com/embed/2lveMnYU9Ds?start=191',
      type: 'Video',
      status: 'live',
      note: 'Field teaching on SRI — also embedded on BKS West Bengal leadership.',
    },
    {
      id: 'ky21c-channel',
      title: 'KarmYog for 21st Century — YouTube',
      outlet: 'YouTube',
      href: 'https://www.youtube.com/@karmyogfor21stcentury83',
      type: 'Channel',
      status: 'live',
    },
    {
      id: 'vatika-instagram',
      title: 'Instagram — @karmyogvatika',
      outlet: 'Instagram',
      href: 'https://www.instagram.com/karmyogvatika/',
      type: 'Channel',
      status: 'live',
    },
    {
      id: 'ky21c-facebook',
      title: 'KY21C — Facebook',
      outlet: 'Facebook',
      href: 'https://www.facebook.com/ky21c/',
      type: 'Channel',
      status: 'live',
    },
    {
      id: 'vatika-film',
      title: 'BKS KY21C Plantation Drive campaign film',
      outlet: 'Pending upload',
      href: null,
      type: 'Video',
      status: 'placeholder',
      note: 'TODO(stakeholder): Add approved campaign / plantation video URL',
    },
  ],
  press: [
    {
      id: 'bks-wb-media',
      title: 'BKS West Bengal media room — appointment coverage',
      outlet: 'bkswbengal.org/media',
      when: 'July 2026',
      type: 'Press',
      href: 'https://bkswbengal.org/media',
      status: 'live',
      note: 'Print and digital coverage of Mahacharya Sourabh J. Sarkar’s appointment as State President.',
    },
    {
      id: 'campaign-press',
      title: 'BKS KY21C Plantation Drive launch coverage',
      outlet: 'Press desk',
      when: 'Pending',
      type: 'Press',
      href: null,
      status: 'placeholder',
      note: 'TODO(stakeholder): Attach verified press notes when published',
    },
  ],
  articles: [
    {
      id: 'kaam-to-karm',
      title: 'Kaam to Karm — why this plantation campaign',
      outlet: 'BKS KY21C Plantation Drive',
      when: 'Campaign brief',
      type: 'Article',
      href: '/mission',
      status: 'live',
    },
    {
      id: 'joint-initiative',
      title: 'Joint initiative of KY21C and Bharatiya Krishak Samaj',
      outlet: 'BKS KY21C Plantation Drive',
      when: 'Campaign brief',
      type: 'Article',
      href: '/initiative',
      status: 'live',
    },
  ],
};

export const vatikaFaq = [
  {
    q: 'What is BKS KY21C Plantation Drive?',
    a: 'BKS KY21C Plantation Drive is a tree plantation and sponsorship campaign — a joint initiative of Bharatiya Krishak Samaj (BKS) and KarmYog for the 21st Century (KY21C) — inviting citizens and institutions to sponsor trees and support ecological renewal.',
  },
  {
    q: 'What does “Kaam to Karm” mean here?',
    a: 'It frames contribution as service: ordinary work (kaam) offered as purposeful action (karm) for soil, shade, and community — aligned with KY21C’s philosophy and BKS’s farmer-centred mission.',
  },
  {
    q: 'How much does it cost to plant a tree?',
    a: `The campaign rate is ₹${pricing.perTreeInr} per tree (derived from the ₹15,000 seed sponsorship for the first 100 trees). Final pricing may be confirmed by the operating entity before live settlement.`,
  },
  {
    q: 'Who is sponsoring the first 100 trees?',
    a: 'Mishraji is sponsoring ₹15,000 for the first 100 trees, opening the campaign for wider public participation. Full public profile details will be added with consent.',
  },
  {
    q: 'How do payments work?',
    a: 'Donations are designed for Razorpay (UPI, cards, netbanking). When gateway credentials are configured, you receive acknowledgement and a receipt trail. Until then, pledges are recorded securely and the team follows up.',
  },
  {
    q: 'Is my donation eligible for 80G?',
    a: '80G eligibility depends on the registered receiving entity. This will be stated clearly on the donation page once the legal payee and registrations are confirmed. Do not assume tax exemption until published.',
  },
  {
    q: 'Where will trees be planted?',
    a: 'Locations are published on the Plantation Locations page as village and district details are confirmed with field partners. Placeholders mark sites still in planning.',
  },
  {
    q: 'Can I offer my own land or campus for plantation?',
    a: 'Yes. Use the Apply page to offer space under the Plants Donation Initiative — you provide the location and permission; the campaign provides plants and guides plantation. You can submit online or download a printable hard-copy form to sign and email with photographs.',
  },
  {
    q: 'How is this related to Bharatiya Krishak Samaj?',
    a: 'BKS is the institutional partner. The platform also preserves heritage storytelling — Farmers’ Forum tradition, leadership journey, and Kisan Bhavan chapters — with verified facts and clear archival placeholders.',
  },
];

export const paymentMethods = [
  { id: 'upi', label: 'UPI', detail: 'GPay, PhonePe, BHIM and other UPI apps' },
  { id: 'card', label: 'Card', detail: 'Debit / credit via Razorpay' },
  { id: 'netbanking', label: 'Netbanking', detail: 'Major Indian banks' },
  { id: 'pledge', label: 'Record pledge', detail: 'When live gateway is offline — team follows up' },
];

export const missingAssets = [
  {
    id: 'plantation-hero-photo',
    need: 'Full-bleed plantation / grove hero photograph approved for public use',
    fallback: '/photos/field-01.jpg',
  },
  {
    id: 'mishraji-portrait',
    need: 'Portrait and written consent for Mishraji public acknowledgment',
    fallback: null,
  },
  {
    id: 'kisan-bhavan-archive',
    need: 'Kisan Bhavan and Deve Gowda foundation-stone primary documents / photos',
    fallback: 'heritage placeholders already in lib/data.js',
  },
  {
    id: 'location-geo',
    need: 'Verified plantation village list with geo coordinates and species',
    fallback: 'locations placeholders in lib/vatika.js',
  },
  {
    id: 'legal-payee',
    need: 'Registered entity name, PAN, 12A/80G text for receipts',
    fallback: 'Payment architecture + pledge mode',
  },
  {
    id: 'razorpay-keys',
    need: 'RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, RAZORPAY_WEBHOOK_SECRET',
    fallback: 'API returns pledge / pending mode',
  },
  {
    id: 'supabase',
    need: 'NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY',
    fallback: 'In-memory / file-less API responses with structured logs',
  },
];

export function treesToAmountInr(trees) {
  const n = Math.max(0, Number(trees) || 0);
  return n * pricing.perTreeInr;
}

export function formatInr(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
