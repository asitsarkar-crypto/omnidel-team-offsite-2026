export const profile = {
  name: 'Krishan Bir Chaudhary',
  nameHi: 'श्री कृष्णबीर चौधरी',
  honorific: 'Shri',
  dob: '12 March 1951',
  qualifications: 'M.Sc., D.Litt. (Honoris Causa)',
  shortTitle: 'President, Bharatiya Krishak Samaj',
  brandLine: 'Leadership in Indian Agriculture — for the farmer, for the nation.',
  tagline: 'Seed sovereignty. Fair price. Sustainable innovation. Service to farmers.',
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
  /** Joint operation desk — KarmYog Vatika / KY21C × BKS West Bengal (New Town). */
  email: 'reachus@ky21c.org',
  emailSecondary: 'contact@bkswbengal.org',
  phones: ['9123987344', '8655246764'],
  phoneLabels: ['WhatsApp / Call', 'BKS West Bengal'],
  whatsapp: '919123987344',
  whatsappUrl: 'https://wa.me/919123987344',
  web: 'https://bkswbengal.org/',
  webLabel: 'bkswbengal.org',
  officeLabel: 'BKS KY21C Plantation Drive — Coordination Office',
  office:
    'F-127, First Floor, Downtown Mall, Uniworld City Commercial Complex, New Town, Kolkata 700156',
  officeNote:
    'Shared coordination address with BKS KY21C Plantation Drive / KY21C and Bharatiya Krishak Samaj — West Bengal (State Office).',
  city: 'New Town, Kolkata',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=F-127,+First+Floor,+Downtown+Mall,+Uniworld+City+Commercial+Complex,+New+Town,+Kolkata+700156&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=F-127%2C+First+Floor%2C+Downtown+Mall%2C+Uniworld+City+Commercial+Complex%2C+New+Town%2C+Kolkata+700156',
};

/** Krishnavirji personal / national archive channels — use only on /about and heritage archive, not campaign contact. */
export const leadershipSocial = [
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

/** Campaign social — KarmYog Vatika / KY21C (not Krishnavirji personal accounts). */
export const social = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@karmyogvatika',
    href: 'https://www.instagram.com/karmyogvatika/',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@karmyogfor21stcentury83',
    href: 'https://www.youtube.com/@karmyogfor21stcentury83',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'KY21C',
    href: 'https://www.facebook.com/ky21c/',
  },
  {
    id: 'web',
    label: 'BKS West Bengal',
    handle: 'bkswbengal.org',
    href: 'https://bkswbengal.org/',
  },
  {
    id: 'ky21c',
    label: 'KY21C',
    handle: 'karmyog21c.in',
    href: 'https://karmyog21c.in/',
  },
];

/** Set to your Google Form embed URL when ready (ends with /viewform?embedded=true). */
export const googleFormUrl = null;

/**
 * Single-source external links — change once, updates everywhere.
 * West Bengal chapter is the current public BKS chapter site (A2).
 * Later: point `bksOfficial` at the national BKS India URL when ready.
 */
export const links = {
  bksOfficial: 'https://www.bkswbengal.org/',
  bksOfficialLabel: 'Bharatiya Krishak Samaj (BKS)',
  bksIndiaReference: 'https://bks.org.in/',
  kisanKiAwaaz: 'https://www.kisankiawaaz.org',
  ky21c: 'https://karmyog21c.in/',
  vatikaInstagram: 'https://www.instagram.com/karmyogvatika/',
  vatikaYoutube: 'https://www.youtube.com/@karmyogfor21stcentury83',
};

export const branding = {
  bksLogo: '/logos/bks-logo.png',
  bksWordmark: '/logos/bks-wordmark.png',
  bksLogoAlt: 'Bharatiya Krishak Samaj — Annadata',
  ky21cLogo: '/logos/karmyog-21c.png',
  ky21cLogoAlt: 'KarmYog for the 21st Century',
  vatikaName: 'BKS KY21C Plantation Drive',
};

export const orgs = [
  {
    label: 'KarmYog for the 21st Century',
    href: 'https://karmyog21c.in/',
    detail: 'Movement partner — work as path, nature as practice',
  },
  {
    label: 'Bharatiya Krishak Samaj — West Bengal',
    href: links.bksOfficial,
    detail: 'State chapter · State President Mahacharya Sourabh J. Sarkar',
  },
  {
    label: 'Kisan Ki Awaaz',
    href: 'https://www.kisankiawaaz.org',
    detail: 'National BKS magazine archive',
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

/** Primary nav — Poke brief campaign platform (standalone only) */
export const nav = [
  { href: '/', label: 'Home' },
  { href: '/initiative', label: 'Initiative' },
  { href: '/heritage', label: 'Heritage' },
  { href: '/impact', label: 'Impact' },
  { href: '/plant', label: 'Plant a Tree' },
  { href: '/donate', label: 'Donate' },
  { href: '/locations', label: 'Locations' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/media', label: 'Media' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

/** Secondary — leadership & org story (linked, not replacing campaign) */
export const archiveNav = [
  { href: '/about', label: 'Krishnavirji' },
  { href: '/bks', label: 'BKS Organisation' },
  { href: '/mission', label: 'Mission' },
  { href: '/journey', label: 'Journey' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/awards', label: 'Awards' },
  {
    href: links.bksOfficial,
    label: 'Bharatiya Kisan Samaj (BKS)',
    external: true,
    id: 'bks-external',
  },
];

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
      when: 'Asset pending',
      title: 'Foundation of Kisan Bhavan',
      image: null,
      body: 'A dedicated institutional home for farmer organisation work. Full historical narrative — purpose, location, and construction timeline — awaits primary documents and photographs from the organisation archive.',
      verified: false,
      placeholder: true,
      source: 'Primary archive required',
    },
    {
      id: 'deve-gowda',
      when: 'Asset pending',
      title: 'Foundation stone — H. D. Deve Gowda',
      image: null,
      body: 'Stakeholder recollection associates the foundation-stone ceremony with former Prime Minister H. D. Deve Gowda. Public secondary sources reviewed for this build do not yet independently confirm date, venue, and programme details. This chapter remains a structured placeholder until primary invitation cards, press notes, or photographs are provided.',
      verified: false,
      placeholder: true,
      source: 'Awaiting primary confirmation',
    },
  ],
};

export const kisanBhavan = {
  title: 'Kisan Bhavan',
  lead: 'The institutional building associated with farmer-organisation work — its founding purpose and ceremonial history.',
  whyEstablished: {
    status: 'partial',
    text: 'Kisan Bhavan is remembered within the organisation as a dedicated space for farmer meetings, advocacy coordination, and organisational memory. Exact founding charter language and land/building records are not yet published in this portfolio.',
  },
  historicalSignificance: {
    status: 'partial',
    text: 'As a named institutional address for farmer leadership, Kisan Bhavan sits in the longer arc of Farmers’ Forum / Bharatiya Krishak Samaj organising — connecting field leadership with national policy rooms.',
  },
  foundationCeremony: {
    status: 'placeholder',
    text: 'Foundation-stone programme details (date, venue, speakers, and programme order) are pending archival upload.',
  },
  deveGowda: {
    status: 'placeholder',
    text: 'Involvement of former Prime Minister H. D. Deve Gowda is noted from stakeholder briefing. Independent public confirmation of the stone-laying event has not been located in secondary sources during this build. Do not treat this as verified chronology until primary proof is attached.',
  },
  photos: [
    {
      status: 'missing',
      caption: 'Foundation stone ceremony — wide view',
      note: 'Upload archival photograph',
    },
    {
      status: 'missing',
      caption: 'H. D. Deve Gowda at the ceremony',
      note: 'Upload verified photograph with date/credit',
    },
    {
      status: 'missing',
      caption: 'Kisan Bhavan building elevation',
      note: 'Upload contemporary or historical building photo',
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
    image: '/photos/events/shikhar-award.png',
  },
];

export const press = [
  {
    title: 'Development Misplaced',
    outlet: 'Penguin',
    when: '2014',
    type: 'Book',
    detail: 'Book published by Penguin Publication.',
  },
  {
    title: 'Kisan Ki Awaaz',
    outlet: 'Monthly English Magazine',
    when: 'Ongoing',
    type: 'Editor',
    href: 'https://www.kisankiawaaz.org',
    detail: 'Editor of the monthly English magazine for farmers’ voice.',
  },
  {
    title: 'Proposed data protection panel on agrochemicals should be dissolved',
    outlet: 'The Daily Guardian',
    when: '5 December 2024',
    type: 'Opinion',
  },
  {
    title: 'Farmers need the proper price of their produce',
    outlet: 'The Daily Guardian Review',
    when: '21 September 2023',
    type: 'Opinion',
  },
  {
    title: 'Monsanto activities are illegal under Indian law',
    outlet: 'The Citizen',
    when: 'Interview',
    type: 'Interview',
    href: 'https://www.thecitizen.in/index.php/en/NewsDetail/index/2/8614/Monsanto-Activities-Are-Illegal-Under-Indian-Law:-Dr-Krishan-Bir-Chaudhary',
  },
  {
    title: 'Monsanto Tribunal witness interview',
    outlet: 'People’s Assembly',
    when: 'Tribunal',
    type: 'Interview',
    href: 'https://peoplesassembly.net/interview-with-dr-krishan-bir-chaudhary-chairman-of-bharat-krishak-samaj/',
  },
  {
    title: 'Aligning biofuel ambitions with farmer interests',
    outlet: 'Agricultural Engineering Today',
    when: '2026',
    type: 'Publication',
    href: 'https://pub.isae.in/index.php/aet/article/view/4235',
  },
];

export const featuredMedia = [
  {
    label: 'Instagram — @karmyogvatika',
    href: 'https://www.instagram.com/karmyogvatika/',
    type: 'Channel',
  },
  {
    label: 'YouTube — KarmYog for 21st Century',
    href: 'https://www.youtube.com/@karmyogfor21stcentury83',
    type: 'Channel',
  },
  {
    label: 'Facebook — KY21C',
    href: 'https://www.facebook.com/ky21c/',
    type: 'Channel',
  },
  {
    label: 'BKS West Bengal',
    href: 'https://bkswbengal.org/',
    type: 'Website',
  },
  ...press
    .filter((p) => p.href)
    .map((p) => ({ label: p.title, href: p.href, type: p.type })),
];

export const gallery = [
  {
    src: '/photos/events/portrait-speaking.png',
    alt: 'Krishan Bir Chaudhary speaking at a conference',
    caption: 'Public address — Commodity Capital / Vishwa Sammelan platform',
    group: 'Leadership',
  },
  {
    src: '/photos/events/gadkari-meeting.png',
    alt: 'With Union Minister Nitin Gadkari',
    caption: 'With Nitin Gadkari',
    group: 'Leadership',
  },
  {
    src: '/photos/events/lamp-lighting.png',
    alt: 'Inaugural lamp lighting ceremony',
    caption: 'Deep prajwalan — inaugural ceremony with national figures',
    group: 'Events',
  },
  {
    src: '/photos/events/shikhar-award.png',
    alt: 'Receiving Shikhar Samman award',
    caption: 'Market Times TV · Commodex Capital Shikhar Samman',
    group: 'Awards',
  },
  {
    src: '/photos/events/shikhar-group.png',
    alt: 'Group photograph at Shikhar Sammelan',
    caption: 'Shikhar Sammelan · The Lalit, New Delhi',
    group: 'Events',
  },
  {
    src: '/photos/events/shikhar-panel.png',
    alt: 'Panel at Market Times Shikhar Sammelan',
    caption: 'Panel stage — Market Times TV',
    group: 'Events',
  },
  {
    src: '/photos/field-01.jpg',
    alt: 'Agricultural fields',
    caption: 'The agrarian landscape his advocacy protects',
    group: 'Atmosphere',
  },
  {
    src: '/photos/seeds-01.jpg',
    alt: 'Seeds in hand',
    caption: 'Seed sovereignty',
    group: 'Atmosphere',
  },
  {
    src: '/photos/crops-01.jpg',
    alt: 'Standing crops',
    caption: 'Crop systems and trade',
    group: 'Atmosphere',
  },
  {
    src: '/photos/soil-01.jpg',
    alt: 'Young plants in soil',
    caption: 'Natural farming',
    group: 'Atmosphere',
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

export const enquiryServices = [
  'MSP & agri-policy consultation',
  'Seed sovereignty / legal advocacy',
  'Natural farming & sustainability',
  'Media / press invitation',
  'BKS chapter or organisation matter',
  'Speaking engagement',
  'Other',
];

export const faq = [
  {
    q: 'Who is Krishan Bir Chaudhary?',
    a: 'Shri Krishan Bir Chaudhary (M.Sc., D.Litt. Honoris Causa) is President of Bharatiya Krishak Samaj, a member of the Government of India High Level Committee on MSP, Natural Farming & Crop Diversification, and Editor of Kisan Ki Awaaz.',
  },
  {
    q: 'How can I contact the office?',
    a: `Email ${contact.email}, call +91 ${contact.phones[0]}, or use WhatsApp. The BKS KY21C Plantation Drive office is at ${contact.office}.`,
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
    q: 'How do I request a consultation or invitation?',
    a: 'Use the enquiry form on this site (or email/WhatsApp) with your name, organisation, mobile, email, the service you need, and a short message. Press and speaking invitations are welcome with clear dates and context.',
  },
];
