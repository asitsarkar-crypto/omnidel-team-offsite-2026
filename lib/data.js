export const profile = {
  name: 'Krishan Bir Chaudhary',
  nameHi: 'श्री कृष्णबीर चौधरी',
  honorific: 'Shri',
  dob: '12 March 1951',
  qualifications: 'M.Sc., D.Litt. (Honoris Causa)',
  shortTitle: 'President, Bharatiya Krishak Samaj',
  brandLine: 'Leadership in Indian Agriculture — for the farmer, for the nation.',
  tagline: 'Seed sovereignty. Fair price. Sustainable innovation. Service to farmers.',
  /** Existing site portrait used as header hero — do not replace/edit the file. */
  portrait: '/photos/events/portrait-speaking.png',
  headerTagline: 'Visionary Leader | Agricultural Reformer | Institution Builder',
  titles: [
    'President, Bharatiya Krishak Samaj',
    'Member, High Level Committee on MSP, Natural Farming & Crop Diversification, Government of India',
    'Editor, Kisan Ki Awaaz (Monthly English Magazine)',
  ],
  summary:
    'Eminent farmer leader and agricultural policy expert — President of Bharatiya Krishak Samaj, member of the Government of India’s High Level Committee on MSP, natural farming and crop diversification, and a familiar voice across national television and international trade fora.',
  book: {
    title: 'Development Misplaced',
    publisher: 'Penguin',
    year: '2014',
  },
  editor: 'Kisan Ki Awaaz (Monthly English Magazine)',
  travel:
    'U.K., Switzerland, The Netherlands, Italy, France, Germany, Indonesia, Thailand, Singapore, Hong Kong, Kenya & Nepal.',
};

export const contact = {
  email: 'krishak1951@gmail.com',
  phones: ['7838977677', '9810331366'],
  whatsapp: '917838977677',
  whatsappUrl: 'https://wa.me/917838977677',
  web: 'https://www.kisankiawaaz.org',
  webLabel: 'kisankiawaaz.org',
  office: 'F-1/A, Pandav Nagar, New Delhi 110091',
  residence:
    '363, Chaudhary Bhawan, Maliwara Chowk, Ambedkar Road, Ghaziabad (U.P.)',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=F-1/A,+Pandav+Nagar,+New+Delhi+110091&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=F-1%2FA%2C+Pandav+Nagar%2C+New+Delhi+110091',
};

/**
 * Single-source external links — change once, updates everywhere.
 * Stakeholder-required BKS West Bengal chapter URL.
 */
export const links = {
  bksOfficial: 'https://bharatiyakrishaksamajbengal.org/',
  bksOfficialLabel: 'Bharatiya Kisan Samaj (BKS)',
  bksIndiaReference: 'https://bks.org.in/',
  kisanKiAwaaz: 'https://www.kisankiawaaz.org',
};

export const branding = {
  bksLogo: '/logos/bks-logo.png',
  bksWordmark: '/logos/bks-wordmark.png',
  bksLetterhead: '/logos/bks-logo-unit.png',
  bksLogoAlt: 'Bharatiya Krishak Samaj — Annadata',
};

export const social = [
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'krishanbir.chaudhary',
    href: 'https://www.facebook.com/krishanbir.chaudhary/',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@krishanbir.chaudhary',
    href: 'https://www.instagram.com/krishanbir.chaudhary/',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@krishak1951',
    href: 'https://www.youtube.com/@krishak1951',
  },
  {
    id: 'x',
    label: 'X',
    handle: '@DrKrishanBir',
    href: 'https://x.com/DrKrishanBir',
  },
  {
    id: 'web',
    label: 'Kisan Ki Awaaz',
    handle: 'kisankiawaaz.org',
    href: 'https://www.kisankiawaaz.org',
  },
];

export const orgs = [
  {
    label: 'Kisan Ki Awaaz',
    href: 'https://www.kisankiawaaz.org',
    detail: 'Official web · monthly English magazine',
  },
  {
    label: 'Bharatiya Krishak Samaj — West Bengal',
    href: links.bksOfficial,
    detail: 'State chapter formed June 2026 under his guidance',
  },
];

export const tvChannels = [
  'DD News',
  'DD Kisan',
  'Sansad TV',
  'Aaj Tak',
  'Republic Bharat',
  'ZEE News',
  'TV9 Bharatvarsh',
  'Zee Hindustan',
  'Zee Business',
  'News18 India',
  'ABP',
  'News Nation',
  'India TV',
  'NDTV',
];

/** Primary header links first; secondary pages stay reachable via footer. */
export const nav = [
  { href: '/', label: 'Home', primary: true },
  { href: '/about', label: 'About', primary: true },
  { href: '/journey', label: 'Journey', primary: true },
  { href: '/vision', label: 'Vision', primary: true },
  { href: '/initiatives', label: 'Initiatives', primary: true },
  { href: '/gallery', label: 'Gallery', primary: true },
  { href: '/contact', label: 'Contact', primary: true },
  {
    href: links.bksOfficial,
    label: 'BKS',
    external: true,
    id: 'bks-external',
    primary: true,
  },
  { href: '/heritage', label: 'Heritage' },
  { href: '/bks', label: 'Organisation' },
  { href: '/agriculture', label: 'Agriculture' },
  { href: '/media', label: 'Media' },
  { href: '/awards', label: 'Awards' },
];

export const primaryNav = nav.filter((item) => item.primary);

export const proofRibbon = [
  'President, Bharatiya Krishak Samaj',
  'High Level Committee — MSP, Natural Farming & Crop Diversification (GOI)',
  'Krishi Ratan, 1998 · D.Litt. (Honoris Causa), 2021',
  'Editor, Kisan Ki Awaaz · Author, Development Misplaced (Penguin, 2014)',
];

export const roles = [
  {
    title: 'President',
    org: 'Bharatiya Krishak Samaj',
    note: 'National farmer organisation · agricultural policy leadership',
    years: 'Present',
  },
  {
    title: 'Member',
    org: 'High Level Committee on MSP, Natural Farming & Crop Diversification',
    note: 'Government of India · Krishi Bhawan, New Delhi',
    years: 'Present',
  },
  {
    title: 'Editor',
    org: 'Kisan Ki Awaaz',
    note: 'Monthly English magazine',
    years: 'Ongoing',
  },
  {
    title: 'Chairman',
    org: 'State Farms Corporation of India',
    note: 'A Government of India Undertaking, New Delhi',
    years: '1994–96',
  },
  {
    title: 'Chairman',
    org: 'Indian Sugarcane Development Council',
    note: 'Ministry of Agriculture, Government of India',
    years: '1991–94',
  },
  {
    title: 'Director',
    org: 'NAFED',
    note: 'National Agricultural Cooperative Marketing Federation of India Ltd.',
    years: '1998–03',
  },
  {
    title: 'Chairman',
    org: 'AGRI EXPO ’95 — Farmers’ Participation Committee',
    note: 'Ministry of Agriculture, Government of India',
    years: '1995',
  },
  {
    title: 'Founder Member',
    org: 'Small Farmers Agribusiness Consortium (SFAC)',
    note: 'Ministry of Agriculture, Government of India',
    years: '1994–96',
  },
  {
    title: 'Member',
    org: 'Steering Committee — GOI & UNDP Joint Project of IPM in India',
    note: 'Ministry of Agriculture, Government of India',
    years: '1996–98',
  },
];

export const pillars = [
  {
    slug: 'seed-sovereignty',
    href: '/agriculture#traditional',
    title: 'Seed sovereignty',
    lead: 'Defend farmers’ rights to save, exchange, and reuse seed — and challenge illegal patents and royalty regimes.',
    image: '/photos/seeds-01.jpg',
  },
  {
    slug: 'fair-price',
    href: '/initiatives',
    title: 'Fair price & MSP',
    lead: 'High-level policy work on MSP, natural farming, and crop diversification — and reserve-price justice in markets.',
    image: '/photos/crops-01.jpg',
  },
  {
    slug: 'sustainable',
    href: '/agriculture#sustainable',
    title: 'Sustainable farming',
    lead: 'IPM, natural farming, and farmer-centric models that protect soil, health, and livelihoods.',
    image: '/photos/soil-01.jpg',
  },
  {
    slug: 'trade',
    href: '/agriculture#innovation',
    title: 'Trade & innovation',
    lead: 'WTO ministerial interventions, biofuel alignment with farmers, and swadeshi agri-innovation.',
    image: '/photos/hands-01.jpg',
  },
];

export const journey = [
  {
    when: '1951',
    title: 'Born',
    what: 'Born 12 March 1951.',
    theme: 'Life',
  },
  {
    when: '1991–94',
    title: 'Chairman, Indian Sugarcane Development Council',
    what: 'Led sugarcane development under the Ministry of Agriculture; early advocacy for power alcohol / ethanol blending and international technical exchange.',
    theme: 'Institutions',
  },
  {
    when: '1994–96',
    title: 'Chairman, State Farms Corporation of India',
    what: 'Headed the Government of India undertaking; founder member of SFAC; chaired AGRI EXPO ’95 Farmers’ Participation Committee; headed National Seeds Programme delegation to the Netherlands and Switzerland (Oct 1995).',
    theme: 'Institutions',
  },
  {
    when: '1996–98',
    title: 'GOI–UNDP IPM Steering Committee',
    what: 'Member of the joint Integrated Pest Management project steering committee, Ministry of Agriculture.',
    theme: 'Sustainability',
  },
  {
    when: '1998',
    title: 'Krishi Ratan',
    what: 'Awarded Krishi Ratan by Shivaji Shikshan Sansthan, Amravati — conferred by Shri Sharad Pawar, then Chief Minister of Maharashtra.',
    theme: 'Recognition',
  },
  {
    when: '1998–03',
    title: 'Director, NAFED',
    what: 'Served on the board of the National Agricultural Cooperative Marketing Federation of India.',
    theme: 'Institutions',
  },
  {
    when: '2001',
    title: 'Guest of Honour — 88th Indian Science Congress',
    what: 'Honoured as Guest of Honour at the 88th Indian Science Congress (IARI, New Delhi) by Dr. Murli Manohar Joshi, then Minister of HRD — recognition of contribution for Indian farmers.',
    theme: 'Recognition',
  },
  {
    when: '2004',
    title: 'Wheat patent revoked at EPO',
    what: 'Jointly filed legal objection with Greenpeace (Germany) at the European Patent Office against an illegal Monsanto patent on an Indian wheat variety (27 Jan 2004). EPO revoked the patent on 23 Sept 2004. Also invited to meet the Prime Minister on farmers’ issues and pre-budget agriculture discussion (28 June 2004).',
    theme: 'Sovereignty',
  },
  {
    when: '2005–06',
    title: 'WTO, FAO, Seeds Bill & NBPGR',
    what: 'WTO Hong Kong Ministerial (2005); FAO Asia-Pacific biotechnology dialogue, Bangkok; NBPGR lecture on Transgenics and Indian Agriculture; Parliamentary Standing Committee witness on The Seeds Bill, 2004 (suggestions prioritised in the report).',
    theme: 'Policy',
  },
  {
    when: '2007–15',
    title: 'Global farmer voice',
    what: 'Greenpeace seed-patenting meetings (Munich & Berlin); Terra Madre / Slow Food (Turin); WTO ministerials in Geneva, Bali, and Nairobi; Nourish Scotland World Food Day speaker (Glasgow, 2014); Penguin publishes Development Misplaced (2014).',
    theme: 'Global',
  },
  {
    when: '2008–21',
    title: 'Parliamentary pesticide bills',
    what: 'Invited by the Parliamentary Standing Committee on Agriculture for The Pesticide Management Bill 2008 and again for the 2020 Bill (5 Aug 2021) — suggestions appreciated and prioritised in the Committee Report.',
    theme: 'Policy',
  },
  {
    when: '2021',
    title: 'D.Litt. (Honoris Causa)',
    what: 'Awarded Honorary Doctorate D.Litt. by the University of Central America, Bolivia (12 Feb 2021).',
    theme: 'Recognition',
  },
  {
    when: 'Present',
    title: 'BKS President & MSP Committee',
    what: 'President, Bharatiya Krishak Samaj; Member, High Level Committee on MSP, Natural Farming & Crop Diversification (GOI); Editor, Kisan Ki Awaaz; regular voice on national television and farmer policy debates.',
    theme: 'Leadership',
  },
];

export const assignments = [
  {
    when: '5 Aug 2021',
    what: 'Parliamentary Standing Committee on Agriculture — Pesticide Management Bill 2020 (suggestions prioritised in report)',
  },
  {
    when: 'Dec 2015',
    what: '10th WTO Ministerial Conference — Nairobi, Kenya',
  },
  {
    when: 'Oct 2014',
    what: 'Speaker, Nourish Scotland Conference — World Food Day, Glasgow',
  },
  {
    when: 'Dec 2013',
    what: '9th WTO Ministerial Conference — Bali, Indonesia',
  },
  {
    when: 'Dec 2011',
    what: '8th WTO Ministerial Conference — Geneva',
  },
  {
    when: 'Oct 2010',
    what: '4th World Food Communities Meeting — Terra Madre, Turin',
  },
  {
    when: 'Dec 2009',
    what: '7th WTO Ministerial Conference — Geneva',
  },
  {
    when: 'Jan 2009',
    what: 'Parliamentary Standing Committee — Pesticide Management Bill 2008',
  },
  {
    when: 'Mar 2007',
    what: 'Speaker, Patenting of Seeds — Greenpeace International, Munich & Berlin',
  },
  {
    when: 'Feb 2007',
    what: 'Planning Commission Steering Committee on Agriculture — XIth Plan strategic issues',
  },
  {
    when: 'Jul 2006',
    what: 'Parliamentary Standing Committee — The Seeds Bill, 2004 (suggestions prioritised)',
  },
  {
    when: 'Jan 2006',
    what: 'NBPGR / ICAR — Transgenics and Indian Agriculture (national core group training)',
  },
  {
    when: 'Dec 2005',
    what: '6th WTO Ministerial Conference — Hong Kong',
  },
  {
    when: 'Nov 2005',
    what: 'FAO / APAARI / GFAR High Level Policy Dialogue on Biotechnology — Bangkok',
  },
  {
    when: 'Jan 2004',
    what: 'Greenpeace joint objection — EPO; patent on Indian wheat revoked Sept 2004',
  },
  {
    when: 'Jun 2002',
    what: 'World Food Summit: five years later — FAO, Rome',
  },
  {
    when: 'Oct 1995',
    what: 'Headed GOI National Seeds Programme delegation — Netherlands & Switzerland',
  },
];

export const collaborations = [
  {
    name: 'Nitin Gadkari',
    detail: 'Union Minister — documented meeting photograph',
    image: '/photos/events/gadkari-meeting.png',
  },
  {
    name: 'Sharad Pawar',
    detail: 'Conferred Krishi Ratan (1998) as Chief Minister of Maharashtra',
    image: '/photos/events/shikhar-award.png',
  },
  {
    name: 'Gen. V. K. Singh',
    detail: 'Present at inaugural lamp-lighting ceremony photograph',
    image: '/photos/events/lamp-lighting.png',
  },
  {
    name: 'Dr. Murli Manohar Joshi',
    detail: 'Guest of Honour recognition — 88th Indian Science Congress, IARI (2001)',
    image: '/photos/events/portrait-speaking.png',
  },
];

export const vision = {
  statement:
    'Farmer-centric Indian agriculture that is sovereign in seed, fair in price, and sustainable in soil and energy.',
  mission:
    'Carry the annadata’s voice into Parliament, ministries, trade talks, television, and international fora — and build organisation capacity through Bharatiya Krishak Samaj and Kisan Ki Awaaz.',
  values: [
    'Seed sovereignty',
    'Fair MSP & market justice',
    'Swadeshi strength',
    'Natural & IPM-aligned farming',
    'Legal enforcement against corporate capture',
    'Nation first — farmer first',
  ],
};

export const bks = {
  name: 'Bharatiya Krishak Samaj',
  nameHi: 'भारतीय कृषक समाज',
  alternateNames: ['Bharat Krishak Samaj', 'Farmers’ Forum, India', 'Bharatiya Kisan Samaj'],
  summary:
    'National farmer organisation led today by President Krishan Bir Chaudhary — advocating farmer rights, agricultural income, seed sovereignty, and just agri-policy in India and on global stages.',
  namingNote:
    'Public and archival sources use closely related names — Bharat Krishak Samaj (Farmers’ Forum, India), Bharatiya Krishak Samaj, and Bharatiya Kisan Samaj. The 1955 founding story below follows authoritative records for Bharat Krishak Samaj established under Dr. Panjabrao S. Deshmukh. Krishan Bir Chaudhary’s current public title is President, Bharatiya Krishak Samaj.',
  formation1955:
    'Bharat Krishak Samaj was established under Dr. Panjabrao S. Deshmukh. Organisational histories cite the founding convention on 3 April 1955, following society registration in New Delhi (Registration No. S/806 of 1954–55, dated 7 February 1955). The forum was conceived as a non-partisan meeting ground to strengthen food systems and the people who produce from the land.',
  philosophy:
    'Farmers feed the nation and steward soil, water, and seed. Organisation exists so the annadata’s voice reaches ministries, Parliament, markets, and international negotiating rooms — without reducing agriculture to an adjustable variable in trade or corporate strategy.',
  vision:
    'A sovereign, prosperous farming community whose dignity, seed rights, and fair price are protected in national policy and global trade — and whose knowledge strengthens India’s food future.',
  legacy:
    'From the 1955 Farmers’ Forum tradition and the World Agriculture Fair (1959–60) to contemporary MSP, seed-law, and natural-farming advocacy, the organisation’s legacy is continuous farmer representation at the highest tables of policy.',
  nationalContribution: [
    'Convened farmer organisation as a national civic force from 1955 onward',
    'Organised the first World Agriculture Fair in New Delhi (opened 11 Dec 1959)',
    'Sustained policy engagement on pricing, seed law, pesticide regulation, and trade',
    'Amplified farmer voice through media platforms including Kisan Ki Awaaz',
    'Expanded state chapter capacity, including West Bengal (2026) under current leadership',
  ],
  today:
    'Under President Krishan Bir Chaudhary, the organisation engages MSP and natural-farming policy, seed and pesticide legislation, WTO and food-sovereignty debates, state chapter building (including West Bengal, 2026), and public communication through Kisan Ki Awaaz and national media.',
  future:
    'Strengthen district leadership, defend legal MSP and seed rights, advance natural farming and IPM, keep Indian farmers visible in global trade talks, and expand practical knowledge platforms for the next generation of annadatas.',
  objectives: [
    'Legal guarantee of Minimum Support Price and fair market outcomes',
    'Seed sovereignty and opposition to illegal patents / royalty regimes',
    'Natural farming, IPM, and practical field knowledge',
    'Farmer dignity and swadeshi agricultural strength',
  ],
  westBengal:
    'In June 2026 the West Bengal chapter was formed under his guidance, with priorities of district leadership enrolment, farmer education, technology adoption, and local-language assistance for annadatas.',
  heritageTimeline: [
    {
      when: '7 Feb 1955',
      title: 'Society registration',
      what: 'Bharat Krishak Samaj was registered as a society in New Delhi (Registration No. S/806 of 1954–55), creating a formal organisational vehicle for farmer advocacy.',
      source: 'NGO / society registration records summarised in public NGO directories',
    },
    {
      when: '3 Apr 1955',
      title: 'Founding convention',
      what: 'A grand convention of Indian farmers was organised. Public organisational histories cite this date — with Dr. Panjabrao S. Deshmukh as founder president — as the establishment of Bharat Krishak Samaj (Farmers’ Forum, India).',
      source: 'bks.org.in About; Indian Streams Research Journal historical account',
    },
    {
      when: '1955 onward',
      title: 'Vision of organised farmer power',
      what: 'Deshmukh — then a leading agricultural statesman and Union Agriculture Minister — framed farmer organisation as essential to national empowerment: a non-partisan meeting ground to strengthen food systems and the people who produce from the land.',
      source: 'bks.org.in; scholarship on Deshmukh’s agricultural organising',
    },
    {
      when: '1959–60',
      title: 'World Agriculture Fair, New Delhi',
      what: 'Bharat Krishak Samaj organised the first World Agriculture Fair (opened 11 Dec 1959). Global leaders including U.S. President Dwight D. Eisenhower participated in opening ceremonies alongside President Rajendra Prasad, with Deshmukh present as Farmers Forum president and Agriculture Minister.',
      source: 'U.S. Presidential archives; historical accounts of the World Agriculture Fair',
    },
    {
      when: 'Late 20th c.',
      title: 'Policy forum & farmer voice',
      what: 'Through decades, farmer-organisation platforms in this tradition convened seminars, published farmer media, and pressed governments on production, marketing, and rural livelihood questions — functioning as a bridge between field realities and national policy.',
      source: 'Organisation archives and public descriptions of Farmers’ Forum / BKS activity',
    },
    {
      when: '1990s–2000s',
      title: 'Krishan Bir Chaudhary in national farmer leadership',
      what: 'Documented service as Executive Chairman / senior leader in farmer-organisation letterheads, Seeds Bill parliamentary testimony (2006), international WTO/FAO engagement, and seed-patent advocacy — culminating in the public role of President, Bharatiya Krishak Samaj.',
      source: 'CV and primary documents provided for this portfolio',
    },
    {
      when: 'Present',
      title: 'Contemporary mission',
      what: 'Leadership on MSP, natural farming and crop diversification at the Government of India high-level committee; state chapter expansion; editorial voice via Kisan Ki Awaaz; continuous television and press advocacy for farmer welfare.',
      source: 'Official CV; BKS West Bengal; published interventions',
    },
  ],
  sources: [
    {
      label: 'Bharat Krishak Samaj — About',
      href: 'https://bks.org.in/about-us/',
    },
    {
      label: 'Economic Times — BKS establishment note',
      href: 'https://economictimes.indiatimes.com/news/economy/agriculture/restriction-on-agricultural-exports-indirect-tax-on-farmers-bharat-krishak-samaj/articleshow/91557872.cms',
    },
    {
      label: 'Eisenhower remarks — World Agriculture Fair opening',
      href: 'https://www.presidency.ucsb.edu/documents/remarks-the-opening-the-world-agriculture-fair-new-delhi',
    },
  ],
};

/** Dedicated historical storytelling (not gallery). Verified facts + clear placeholders. */
export const heritageStory = {
  title: 'Farmers’ Forum to national leadership',
  lead: 'A continuous story of organised farmer power — from the 1955 Farmers’ Forum tradition to Krishan Bir Chaudhary’s contemporary national leadership.',
  chapters: [
    {
      id: 'farmers-forum',
      when: '1955',
      title: 'Farmers’ Forum, India',
      image: '/photos/field-01.jpg',
      body: 'Bharat Krishak Samaj — known in English as Farmers’ Forum, India — was founded in the tradition of Dr. Panjabrao S. Deshmukh. Registration (7 Feb 1955) and the founding convention (3 Apr 1955) established a non-partisan national platform for those who produce from the land.',
      verified: true,
      source: 'bks.org.in; society registration records',
    },
    {
      id: 'leadership',
      when: '1990s–Present',
      title: 'Krishan Bir Chaudhary’s leadership journey',
      image: '/photos/events/portrait-speaking.png',
      body: 'From institutional roles (Sugarcane Development Council, SFCI, NAFED, SFAC) to parliamentary testimony, WTO ministerials, the EPO wheat-patent challenge, and today’s presidency of Bharatiya Krishak Samaj plus GOI High Level Committee membership on MSP, natural farming and crop diversification.',
      verified: true,
      source: 'Official CV and primary documents',
    },
    {
      id: 'kisan-bhavan',
      when: '26 Dec 1996',
      title: 'Foundation / inauguration of Kisan Bhawan',
      image: '/photos/archive/asset-43.png',
      body: 'Bharat Krishak Samaj Kisan Bhawan, New Delhi, was inaugurated as the organisation’s institutional home. The commemorative plaque records construction by NBCC and names Dr. Krishan Bir Chaudhary as Executive Chairman. Ceremony photographs from this project’s archive document the occasion and the building.',
      verified: true,
      placeholder: false,
      source: 'Project archival plaque and ceremony photographs',
    },
    {
      id: 'deve-gowda',
      when: '26 Dec 1996',
      title: 'Inaugurated by H. D. Deve Gowda',
      image: '/photos/archive/asset-39.png',
      body: 'The plaque states that Kisan Bhawan was inaugurated by Shri H. D. Deve Gowda, Hon’ble Prime Minister of India, on 26 December 1996 — with Shri Sitaram Kesri as Guest of Honour and Dr. Bal Ram Jakhar presiding. Project photographs show the plaque unveiling and the felicitation dais; this chapter uses those event images, not a generic portrait.',
      verified: true,
      placeholder: false,
      source: 'Project archival plaque photograph (asset-39) and ceremony dais (asset-40)',
    },
  ],
};

export const kisanBhavan = {
  title: 'Kisan Bhavan',
  kicker: 'Featured heritage story',
  lead: 'Bharat Krishak Samaj Kisan Bhawan, New Delhi — inaugurated by Prime Minister H. D. Deve Gowda on 26 December 1996, with Dr. Krishan Bir Chaudhary as Executive Chairman.',
  featuredIntro:
    'Project archives document the foundation / inauguration of Kisan Bhawan as an institutional home for farmer organisation work. The commemorative plaque and ceremony photographs below are from the project asset library — not generic portraits sourced from the internet.',
  roleOfKrishanBir: {
    status: 'verified',
    text: 'The Kisan Bhawan plaque names Dr. Krishan Bir Chaudhary as Executive Chairman, Bharat Krishak Samaj. Ceremony photographs from the project archive show him on the dais during the Kisan Bhawan occasion alongside national leaders.',
  },
  whyEstablished: {
    status: 'verified',
    text: 'Kisan Bhawan was established as the institutional building of Bharat Krishak Samaj in New Delhi — a permanent address for farmer meetings, advocacy, and organisational work. Construction was undertaken by the National Buildings Construction Corporation Limited, as recorded on the inauguration plaque.',
  },
  historicalSignificance: {
    status: 'verified',
    text: 'The inauguration brought the farmer organisation’s institutional home into the national frame — with the Prime Minister of India as inaugurating authority, senior political leaders as guests of honour, and Krishan Bir Chaudhary’s executive chairmanship recorded on the stone itself.',
  },
  foundationCeremony: {
    status: 'verified',
    text: 'Inaugurated on 26 December 1996. Guest of Honour: Shri Sitaram Kesri, President, Indian National Congress. Presided by: Dr. Bal Ram Jakhar, former Union Minister of Agriculture. These details are taken from the project’s archival plaque photograph.',
  },
  deveGowda: {
    status: 'verified',
    text: 'Former Prime Minister Shri H. D. Deve Gowda inaugurated Bharat Krishak Samaj Kisan Bhawan (New Delhi) on 26 December 1996, as engraved on the commemorative plaque and shown in the project’s ceremony photographs. This section uses those event photographs — not a standalone stock portrait.',
  },
  timeline: [
    {
      when: 'Organisation tradition (1955→)',
      title: 'Need for an institutional home',
      what: 'From the Farmers’ Forum / Bharat Krishak Samaj founding tradition onward, farmer leaders sought a durable New Delhi address for meetings and advocacy.',
      status: 'context',
    },
    {
      when: '26 December 1996',
      title: 'Kisan Bhawan inaugurated',
      what: 'Inaugurated by Shri H. D. Deve Gowda, Hon’ble Prime Minister of India. Guest of Honour: Shri Sitaram Kesri. Presided by: Dr. Bal Ram Jakhar. Executive Chairman named on plaque: Dr. Krishan Bir Chaudhary. Constructed by NBCC.',
      status: 'verified',
    },
    {
      when: '1996 ceremony archive',
      title: 'Foundation / felicitation photographs',
      what: 'Project photographs show the plaque unveiling, the felicitation dais with nameplates for H. D. Deve Gowda and Dr. Balram Jakhar, and Krishan Bir Chaudhary on the occasion — together with a view of the building elevation.',
      status: 'verified',
    },
    {
      when: 'Present',
      title: 'Living organisational mission',
      what: 'Under President Krishan Bir Chaudhary, the BKS mission continues through policy work, state chapters, Kisan Ki Awaaz, and national media.',
      status: 'verified-context',
    },
  ],
  assetsRequired: [
    'Higher-resolution scans of the same ceremony prints (optional enrichment)',
    'Any additional invitation card or printed programme from 26 Dec 1996 (optional)',
  ],
  photos: [
    {
      status: 'available',
      src: '/photos/archive/asset-39.png',
      caption: 'Inauguration plaque unveiling — Bharat Krishak Samaj Kisan Bhawan, 26 Dec 1996',
      orientation: 'landscape',
      note: 'Project archive photograph',
    },
    {
      status: 'available',
      src: '/photos/archive/asset-40.png',
      caption: 'Ceremony dais — H. D. Deve Gowda, Dr. Balram Jakhar, Krishan Bir Chaudhary',
      orientation: 'landscape',
      note: 'Project archive photograph',
    },
    {
      status: 'available',
      src: '/photos/archive/asset-43.png',
      caption: 'Foundation stone occasion of Kisan Bhawan, New Delhi — with building elevation',
      orientation: 'portrait',
      note: 'Project archive photograph',
    },
    {
      status: 'available',
      src: '/photos/archive/asset-54.png',
      caption: 'With Atal Bihari Vajpayee and H. D. Deve Gowda — leadership archive',
      orientation: 'landscape',
      note: 'Project archive photograph (government relations context)',
    },
  ],
};

export const awards = [
  {
    title: 'D.Litt. (Honoris Causa)',
    when: '12 February 2021',
    by: 'University of Central America, Bolivia',
    detail: 'Honorary Doctorate conferred in recognition of agricultural leadership.',
    image: '/photos/events/portrait-speaking.png',
  },
  {
    title: 'Guest of Honour — 88th Indian Science Congress',
    when: '4 January 2001',
    by: 'Honoured by Dr. Murli Manohar Joshi, Minister of HRD · IARI, New Delhi',
    detail: 'Recognition of contribution for Indian farmers.',
    image: '/photos/events/lamp-lighting.png',
  },
  {
    title: 'Krishi Ratan',
    when: '1998',
    by: 'Shivaji Shikshan Sansthan, Amravati (Maharashtra)',
    detail: 'Conferred by Shri Sharad Pawar, Chief Minister, Government of Maharashtra.',
    image: '/photos/archive/asset-60.png',
  },
];

export const press = [
  {
    id: 'dainik-bhaskar-2021',
    title: 'सुविधा के भंवर में खोते रिश्ते और बिखरता समाज',
    titleEn: 'Relationships getting lost in the whirlpool of convenience',
    outlet: 'Dainik Bhaskar',
    when: '22 July 2021',
    type: 'Newspaper',
    section: 'सुलगते सरोकार',
    featured: true,
    image: '/media/dainik-bhaskar-2021.jpg',
    summary:
      'A Hindi social commentary by Shri Krishnaveer Chaudhary (राष्ट्रीय अध्यक्ष, भारतीय कृषक समाज) on how technology, social media, and the pursuit of convenience erode human relationships, tolerance, and genuine sensitivity.',
    detail:
      'Published in Dainik Bhaskar (Jhansi / Noida / Lucknow / Prayagraj / Dehradun editions). Full-page feature under “Sulgte Sarokar.”',
    readMoreLabel: 'View clipping',
  },
  {
    title: 'Development Misplaced',
    outlet: 'Penguin',
    when: '2014',
    type: 'Book',
    detail: 'Book published by Penguin Publication.',
    summary: 'Published analysis of misplaced development priorities and the farmer’s place in national economic thinking.',
  },
  {
    title: 'Kisan Ki Awaaz',
    outlet: 'Monthly English Magazine',
    when: 'Ongoing',
    type: 'Editor',
    href: 'https://www.kisankiawaaz.org',
    detail: 'Editor of the monthly English magazine for farmers’ voice.',
    summary: 'Ongoing editorial platform amplifying farmer concerns, policy briefings, and field realities.',
  },
  {
    title: 'Proposed data protection panel on agrochemicals should be dissolved',
    outlet: 'The Daily Guardian',
    when: '5 December 2024',
    type: 'Opinion',
    summary: 'Opinion intervention on agrochemical policy and the proposed data-protection panel.',
  },
  {
    title: 'Farmers need the proper price of their produce',
    outlet: 'The Daily Guardian Review',
    when: '21 September 2023',
    type: 'Opinion',
    summary: 'Argument for fair price realisation for agricultural produce.',
  },
  {
    title: 'Monsanto activities are illegal under Indian law',
    outlet: 'The Citizen',
    when: 'Interview',
    type: 'Interview',
    href: 'https://www.thecitizen.in/index.php/en/NewsDetail/index/2/8614/Monsanto-Activities-Are-Illegal-Under-Indian-Law:-Dr-Krishan-Bir-Chaudhary',
    summary: 'Interview on seed patents, legality, and farmer rights under Indian law.',
  },
  {
    title: 'Monsanto Tribunal witness interview',
    outlet: 'People’s Assembly',
    when: 'Tribunal',
    type: 'Interview',
    href: 'https://peoplesassembly.net/interview-with-dr-krishan-bir-chaudhary-chairman-of-bharat-krishak-samaj/',
    summary: 'Witness perspective from the Monsanto Tribunal process on corporate seed power.',
  },
  {
    title: 'Aligning biofuel ambitions with farmer interests',
    outlet: 'Agricultural Engineering Today',
    when: '2026',
    type: 'Publication',
    href: 'https://pub.isae.in/index.php/aet/article/view/4235',
    summary: 'Peer-facing publication on aligning biofuel policy with farmer livelihoods.',
  },
];

/** Featured press cards for the Media centre (newspaper-first layout). */
export const mediaFeatures = press.filter((p) => p.featured || p.type === 'Newspaper');

export const featuredMedia = [
  {
    label: 'Facebook address',
    href: 'https://www.facebook.com/watch/?v=2639516193116461',
    type: 'Video',
  },
  {
    label: 'YouTube — @krishak1951',
    href: 'https://www.youtube.com/@krishak1951',
    type: 'Channel',
  },
  {
    label: 'Kisan Ki Awaaz',
    href: 'https://www.kisankiawaaz.org',
    type: 'Website',
  },
  ...press
    .filter((p) => p.href)
    .map((p) => ({ label: p.title, href: p.href, type: p.type })),
];

export const gallery = [
  {
    src: '/photos/archive/asset-39.png',
    alt: 'Kisan Bhawan inauguration plaque ceremony',
    caption: 'Kisan Bhawan plaque unveiling — PM H. D. Deve Gowda, 26 Dec 1996; Dr. Krishan Bir Chaudhary, Executive Chairman',
    group: 'Kisan Bhavan',
    orientation: 'landscape',
  },
  {
    src: '/photos/archive/asset-40.png',
    alt: 'Kisan Bhawan ceremony dais',
    caption: 'Kisan Bhawan felicitation dais — H. D. Deve Gowda, Dr. Balram Jakhar, Krishan Bir Chaudhary, 1996',
    group: 'Kisan Bhavan',
    orientation: 'landscape',
  },
  {
    src: '/photos/archive/asset-43.png',
    alt: 'Kisan Bhawan foundation ceremony and building',
    caption: 'Foundation stone occasion of Kisan Bhawan, New Delhi — with building elevation',
    group: 'Kisan Bhavan',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-52.png',
    alt: 'Facility visit',
    caption: 'Institutional facility walk-through',
    group: 'Kisan Bhavan',
    orientation: 'landscape',
  },
  {
    src: '/photos/archive/asset-41.png',
    alt: 'With Shivraj Singh Chouhan',
    caption: 'With Shivraj Singh Chouhan',
    group: 'Leadership',
    orientation: 'landscape',
  },
  {
    src: '/photos/archive/asset-46.png',
    alt: 'Sugarcane Development Council event',
    caption: 'Indian Sugarcane Development Council dais',
    group: 'Leadership',
    orientation: 'landscape',
  },
  {
    src: '/photos/archive/asset-50.png',
    alt: 'Ceremonial portrait',
    caption: 'Ceremonial portrait',
    group: 'Leadership',
    orientation: 'portrait',
  },
  {
    src: '/photos/events/gadkari-meeting.png',
    alt: 'With Nitin Gadkari',
    caption: 'With Union Minister Nitin Gadkari',
    group: 'Leadership',
    orientation: 'landscape',
  },
  {
    src: '/photos/events/portrait-speaking.png',
    alt: 'Krishan Bir Chaudhary speaking at a conference',
    caption: 'Public address — Commodity Capital / Vishwa Sammelan',
    group: 'Leadership',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-42.png',
    alt: 'National leadership meeting',
    caption: 'With senior national leaders',
    group: 'Government',
    orientation: 'landscape',
  },
  {
    src: '/photos/archive/asset-44.png',
    alt: 'National leadership gathering',
    caption: 'National leadership gathering with the Prime Minister',
    group: 'Government',
    orientation: 'landscape',
  },
  {
    src: '/photos/archive/asset-45.png',
    alt: 'Farmers meeting with Rajnath Singh',
    caption: 'Farmers’ meeting with Rajnath Singh',
    group: 'Government',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-47.png',
    alt: 'Meeting with Rajnath Singh',
    caption: 'One-to-one with Rajnath Singh',
    group: 'Government',
    orientation: 'landscape',
  },
  {
    src: '/photos/archive/asset-48.png',
    alt: 'Farmers land meeting',
    caption: 'Meeting on farmers’ land issues',
    group: 'Government',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-51.png',
    alt: 'With Nitin Gadkari',
    caption: 'Standing meeting with Nitin Gadkari',
    group: 'Government',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-53.png',
    alt: 'With Acharya Devvrat',
    caption: 'With Acharya Devvrat',
    group: 'Government',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-54.png',
    alt: 'With former PMs Vajpayee and Deve Gowda',
    caption: 'With Atal Bihari Vajpayee and H. D. Deve Gowda',
    group: 'Government',
    orientation: 'landscape',
  },
  {
    src: '/photos/archive/asset-79.png',
    alt: 'With President Pratibha Patil',
    caption: 'Presenting papers to President Pratibha Patil',
    group: 'Government',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-75.png',
    alt: 'Event with Gen. V. K. Singh',
    caption: 'Group with Gen. V. K. Singh',
    group: 'Events',
    orientation: 'landscape',
  },
  {
    src: '/photos/archive/asset-80.png',
    alt: 'Agricultural conference stage',
    caption: 'Agricultural conference stage — 1990s',
    group: 'Events',
    orientation: 'landscape',
  },
  {
    src: '/photos/events/lamp-lighting.png',
    alt: 'Inaugural lamp lighting ceremony',
    caption: 'Deep prajwalan — inaugural ceremony',
    group: 'Events',
    orientation: 'landscape',
  },
  {
    src: '/photos/events/shikhar-group.png',
    alt: 'Group at Shikhar Sammelan',
    caption: 'Shikhar Sammelan · The Lalit, New Delhi',
    group: 'Events',
    orientation: 'landscape',
  },
  {
    src: '/photos/events/shikhar-panel.png',
    alt: 'Panel at Shikhar Sammelan',
    caption: 'Panel stage — Market Times TV',
    group: 'Events',
    orientation: 'landscape',
  },
  {
    src: '/photos/archive/asset-49.png',
    alt: 'Award presentation ceremony',
    caption: 'Presentation ceremony with Union ministers',
    group: 'Awards',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-60.png',
    alt: 'Krishi Ratan award plaque',
    caption: 'Krishi Ratan plaque, 1998',
    group: 'Awards',
    orientation: 'portrait',
  },
  {
    src: '/photos/events/shikhar-award.png',
    alt: 'Receiving Shikhar Samman award',
    caption: 'Market Times TV · Shikhar Samman',
    group: 'Awards',
    orientation: 'landscape',
  },
  {
    src: '/media/dainik-bhaskar-2021.jpg',
    alt: 'Dainik Bhaskar full-page feature',
    caption: 'Dainik Bhaskar — सुलगते सरोकार, 22 July 2021',
    group: 'Media',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-55.png',
    alt: 'Daily Guardian opinion clipping',
    caption: 'The Daily Guardian Review — Sep 2023',
    group: 'Media',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-56.png',
    alt: 'Daily Guardian opinion clipping',
    caption: 'The Daily Guardian — Dec 2024',
    group: 'Media',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-63.png',
    alt: 'Newspaper archive clippings',
    caption: 'Patriot / National Herald clippings, 1992',
    group: 'Media',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-69.png',
    alt: 'Opinion column clipping',
    caption: 'Published opinion column',
    group: 'Media',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-70.png',
    alt: 'Corporate Citizen interview',
    caption: 'Corporate Citizen interview, July 2023',
    group: 'Media',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-73.png',
    alt: 'Corporate Citizen interview pages',
    caption: 'Corporate Citizen interview — continuation',
    group: 'Media',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-57.png',
    alt: 'Ottawa High Commission letter',
    caption: 'High Commission of India, Ottawa — 2020',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-58.png',
    alt: 'Letter from M. S. Swaminathan',
    caption: 'Letter from Prof. M. S. Swaminathan, 2006',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-59.png',
    alt: 'PMO acknowledgement',
    caption: 'Prime Minister’s Office acknowledgement, 2004',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-61.png',
    alt: 'Ministry correspondence',
    caption: 'Ministry of Food & Consumer Affairs, 1998',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-62.png',
    alt: 'Brazil correspondence',
    caption: 'Letter to EMBRAPA, Brazil, 1992',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-64.png',
    alt: 'SFAC council document',
    caption: 'SFAC Policy Planning Council, 1994',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-65.png',
    alt: 'Parliamentary committee document',
    caption: 'Lok Sabha Standing Committee — Seeds Bill, 2006',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-66.png',
    alt: 'SFAC re-nomination',
    caption: 'SFAC re-nomination, 1995',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-67.png',
    alt: 'UPOV Geneva invitation',
    caption: 'UPOV Geneva invitation, 1995',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-68.png',
    alt: 'Seeds programme delegation list',
    caption: 'Netherlands Seeds Programme study-tour list',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-71.png',
    alt: 'Thanks letter — Haryana',
    caption: 'Haryana Kisan Sangharsh Samiti thanks letter, 2004',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-72.png',
    alt: 'PM meeting invitation',
    caption: 'PM meeting invitation via Agriculture Secretary, 2004',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-74.png',
    alt: 'NBPGR lecture invitation',
    caption: 'NBPGR lecture invitation, 2006',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/archive/asset-76.png',
    alt: 'UNCTAD TRIPS invitation',
    caption: 'UNCTAD / TRIPS seminar invitation, 2005',
    group: 'Documents',
    orientation: 'portrait',
  },
  {
    src: '/photos/crops-01.jpg',
    alt: 'Standing crops',
    caption: 'Crop systems',
    group: 'Atmosphere',
    orientation: 'landscape',
  },
  {
    src: '/photos/field-01.jpg',
    alt: 'Agricultural fields',
    caption: 'Agrarian landscape',
    group: 'Atmosphere',
    orientation: 'landscape',
  },
  {
    src: '/photos/field-02.jpg',
    alt: 'Field landscape',
    caption: 'Rural livelihood context',
    group: 'Atmosphere',
    orientation: 'landscape',
  },
  {
    src: '/photos/hands-01.jpg',
    alt: 'Hands in agriculture',
    caption: 'Hands that work the land',
    group: 'Atmosphere',
    orientation: 'landscape',
  },
  {
    src: '/photos/seeds-01.jpg',
    alt: 'Seeds in hand',
    caption: 'Seed sovereignty',
    group: 'Atmosphere',
    orientation: 'landscape',
  },
  {
    src: '/photos/soil-01.jpg',
    alt: 'Young plants in soil',
    caption: 'Natural farming',
    group: 'Atmosphere',
    orientation: 'landscape',
  },
];

export const initiatives = [
  {
    title: 'MSP, natural farming & crop diversification',
    detail: 'Member of the Government of India High Level Committee shaping national policy on pricing and sustainability.',
  },
  {
    title: 'Seed law & anti-biopiracy',
    detail: 'Seeds Bill testimony; EPO wheat patent revocation with Greenpeace (2004); campaigns against illegal royalty regimes.',
  },
  {
    title: 'Pesticide policy for farmers',
    detail: 'Parliamentary Standing Committee inputs on Pesticide Management Bills (2008 & 2020) prioritised in committee reports.',
  },
  {
    title: 'WTO & food sovereignty',
    detail: 'Indian farmers’ voice at WTO ministerials in Hong Kong, Geneva, Bali, and Nairobi; FAO and Terra Madre engagements.',
  },
  {
    title: 'Kisan Ki Awaaz',
    detail: 'Editor of the monthly English magazine and web platform amplifying farmers’ concerns.',
  },
  {
    title: 'BKS movement building',
    detail: 'National leadership of Bharatiya Krishak Samaj and state chapter guidance including West Bengal 2026.',
  },
];

export const testimonials = [
  {
    quote:
      'I thank you for the leadership you are providing for our agricultural renewal… We are looking forward to your guidance and advice.',
    attribution: 'Prof. M. S. Swaminathan',
    context: 'Letter dated 1 February 2006, National Commission on Farmers',
  },
];

export const socialProof = [
  {
    title: 'National television voice',
    detail: `Regular commentary across ${tvChannels.slice(0, 6).join(', ')} and more.`,
  },
  {
    title: 'Penguin author',
    detail: 'Development Misplaced (Penguin, 2014) — policy critique rooted in farmer reality.',
  },
  {
    title: 'Editorial platform',
    detail: 'Editor, Kisan Ki Awaaz — monthly English magazine amplifying the annadata’s voice.',
  },
];

export const services = [
  {
    title: 'MSP & agri-policy advocacy',
    lead: 'High-level work on Minimum Support Price, natural farming, and crop diversification — including membership of the Government of India High Level Committee.',
    href: '/initiatives',
  },
  {
    title: 'Seed sovereignty & legal defence',
    lead: 'Seeds Bill testimony, EPO wheat-patent challenge with Greenpeace (2004), and campaigns against illegal royalty regimes that threaten farmers’ seed rights.',
    href: '/agriculture',
  },
  {
    title: 'Sustainable & natural farming',
    lead: 'IPM stewardship (GOI–UNDP), natural farming alignment, and farmer-centric models that protect soil, health, and livelihoods.',
    href: '/agriculture#sustainable',
  },
  {
    title: 'Trade, WTO & food sovereignty',
    lead: 'Indian farmers’ voice at WTO ministerials in Hong Kong, Geneva, Bali, and Nairobi — plus FAO and Terra Madre engagements.',
    href: '/agriculture#innovation',
  },
  {
    title: 'Media & public communication',
    lead: 'Editorial leadership via Kisan Ki Awaaz, national TV appearances, and press interventions on pesticide policy, biopiracy, and fair price.',
    href: '/media',
  },
  {
    title: 'BKS organisation building',
    lead: 'National presidency of Bharatiya Krishak Samaj and state chapter guidance — including West Bengal chapter formation in 2026.',
    href: '/bks',
  },
];

export const whyChoose = [
  {
    title: 'Government of India committee member',
    detail:
      'Serving on the High Level Committee on MSP, Natural Farming & Crop Diversification at Krishi Bhawan.',
  },
  {
    title: 'Decades of institutional leadership',
    detail:
      'Former Chairman of SFCI and the Indian Sugarcane Development Council; Director, NAFED; founder member, SFAC.',
  },
  {
    title: 'Proven legal & policy impact',
    detail:
      'EPO wheat patent revoked (2004); Seeds Bill and Pesticide Management Bill inputs prioritised in parliamentary committee reports.',
  },
  {
    title: 'Recognised national & global voice',
    detail:
      'Krishi Ratan (1998), Guest of Honour at the 88th Indian Science Congress (2001), D.Litt. Honoris Causa (2021).',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Share your enquiry',
    detail:
      'Write via email, WhatsApp, or the enquiry form — press invitations, policy briefings, farmer organisation correspondence, and collaboration requests.',
  },
  {
    step: '02',
    title: 'Briefing & alignment',
    detail:
      'Clarify the issue — MSP, seed law, natural farming, media, or BKS chapter work — and the outcome you need for farmers or institutions.',
  },
  {
    step: '03',
    title: 'Policy, platform & organisation work',
    detail:
      'Engage through Bharatiya Krishak Samaj networks, High Level Committee context, parliamentary and media channels as appropriate.',
  },
  {
    step: '04',
    title: 'Public follow-through',
    detail:
      'Sustain the message through Kisan Ki Awaaz, national television, and continued farmer-organisation capacity building.',
  },
];

export const benefits = [
  {
    title: 'Clearer path on MSP & fair price',
    detail:
      'Policy work grounded in field reality — reserve-price justice and crop diversification that protects farmer income.',
  },
  {
    title: 'Defence of seed rights',
    detail:
      'Legal and public advocacy so farmers can save, exchange, and reuse seed without illegal patents or royalty capture.',
  },
  {
    title: 'Sustainable farming guidance',
    detail:
      'Natural farming and IPM-aligned approaches that safeguard soil, health, and long-term productivity.',
  },
  {
    title: 'A national media megaphone',
    detail:
      'Editorial and television platforms that carry the annadata’s concerns into living rooms and negotiating rooms.',
  },
];


export const faq = [
  {
    q: 'Who is Krishan Bir Chaudhary?',
    a: 'Shri Krishan Bir Chaudhary (M.Sc., D.Litt. Honoris Causa) is President of Bharatiya Krishak Samaj, a member of the Government of India High Level Committee on MSP, Natural Farming & Crop Diversification, and Editor of Kisan Ki Awaaz.',
  },
  {
    q: 'How can I contact the office?',
    a: `Email ${contact.email}, call +91 ${contact.phones[0]} / +91 ${contact.phones[1]}, or use WhatsApp. The New Delhi office is at ${contact.office}.`,
  },
  {
    q: 'What issues does he primarily work on?',
    a: 'Seed sovereignty, fair MSP and market justice, natural farming and IPM, pesticide and seeds legislation, WTO/food-sovereignty debates, and farmer organisation building through Bharatiya Krishak Samaj.',
  },
  {
    q: 'What is Bharatiya Krishak Samaj?',
    a: 'A national farmer organisation led today by President Krishan Bir Chaudhary — advocating farmer rights, agricultural income, seed sovereignty, and just agri-policy in India and on global stages. Related historical naming (Bharat Krishak Samaj / Farmers’ Forum) is documented on the BKS page.',
  },
  {
    q: 'Where can I read his writing?',
    a: 'Development Misplaced (Penguin, 2014) and the monthly English magazine Kisan Ki Awaaz at kisankiawaaz.org, plus opinion pieces and interviews listed in the Media section.',
  },
  {
    q: 'How do I send an enquiry or invitation?',
    a: 'Use the enquiry form on this site (or email/WhatsApp) with your name, organisation, mobile, email, the service you need, and a short message. Press and speaking invitations are welcome with clear dates and context.',
  },
  {
    q: 'What is the Kisan Bhavan story on this site?',
    a: 'Heritage includes a featured Kisan Bhavan dossier covering purpose, significance, foundation ceremony, and the H. D. Deve Gowda association. Unverified ceremony details are marked as placeholders until primary archival documents and photographs are supplied — nothing is invented.',
  },
];
