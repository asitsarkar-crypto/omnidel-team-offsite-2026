/**
 * Mahacharya Sourabh J. Sarkar — curated presence for BKS KY21C Plantation Drive.
 *
 * Source of truth for roles & appointment facts:
 * https://bkswbengal.org/ (Bharatiya Krishak Samaj — West Bengal)
 *
 * Media is curated editorially — not a dump of every available frame.
 */

export const mahacharya = {
  honorific: 'Mahacharya',
  name: 'Sourabh J. Sarkar',
  displayName: 'Mahacharya Sourabh J. Sarkar',
  shortName: 'Mahacharya Ji',
  roles: [
    'State President, Bharatiya Krishak Samaj — West Bengal',
    'Founder, KarmYog for the 21st Century',
  ],
  /** Verified via bkswbengal.org leadership / west-bengal pages. */
  appointment: {
    dateLabel: '30 June 2026',
    place: 'New Delhi',
    appointedBy: 'Shri Krishan Bir Chaudhary, National President, Bharatiya Krishak Samaj',
    summary:
      'Appointed State President of Bharatiya Krishak Samaj, West Bengal — charged with building BKS presence from state to division and district branches.',
  },
  quote:
    'We need a human-potential development system that is meaningful, relevant, holistic, balanced, and inclusive.',
  lead:
    'Known respectfully as Mahacharya Ji — agri-educationist, urban agriculture and food-systems pioneer, and founder of KarmYog for the 21st Century. His work joins traditional agrarian wisdom with design, technology, and large-scale behaviour change — the living bridge between KY21C and Bharatiya Krishak Samaj on this platform.',
  body: [
    'Through KY21C he turns philosophy into rural and urban transformation models centred on food, farming, and ecological wellbeing.',
    'The OmniDEL learning framework has supported farmer education, rural youth mentoring, road safety, and Skill Mitra programmes reaching hundreds of thousands of lives across Indian states. Mission Biophilia extends that ethic toward productive learning-and-livelihood gardens.',
  ],
  links: {
    bksWestBengal: 'https://bkswbengal.org/',
    leadership: 'https://bkswbengal.org/leadership',
    appointment: 'https://bkswbengal.org/appointment',
    media: 'https://bkswbengal.org/media',
    ky21c: 'https://karmyog21c.in/',
    youtubeChannel: 'https://www.youtube.com/@karmyogfor21stcentury83',
  },
  portrait: {
    src: '/photos/mahacharya/portrait-official.jpg',
    alt: 'Mahacharya Sourabh J. Sarkar — official portrait',
    caption: 'Mahacharya Sourabh J. Sarkar · State President, BKS West Bengal',
    credit: 'Official leadership portrait · bkswbengal.org',
  },
};

/**
 * Editorial photo sets — each item has a deliberate section placement.
 * Prefer official BKS West Bengal assets over informal session dumps.
 */
export const mahacharyaPhotos = {
  /** Initiative / KY21C pillar — one portrait, one speaking moment */
  leadership: [
    {
      id: 'portrait-official',
      src: '/photos/mahacharya/portrait-official.jpg',
      alt: 'Official portrait of Mahacharya Sourabh J. Sarkar',
      caption: 'Mahacharya Sourabh J. Sarkar',
      detail: 'State President, Bharatiya Krishak Samaj — West Bengal · Founder, KY21C',
      group: 'KY21C Leadership',
      placement: ['initiative', 'gallery'],
      source: 'bkswbengal.org',
    },
    {
      id: 'speaking-mic',
      src: '/photos/mahacharya/speaking-mic.jpg',
      alt: 'Mahacharya Sourabh J. Sarkar speaking at a documentation session',
      caption: 'In dialogue — teaching and documentation',
      detail: 'Leadership presence during a KY21C working session',
      group: 'KY21C Leadership',
      placement: ['initiative', 'gallery'],
      source: 'internal-session',
    },
  ],

  /** Joint initiative story — appointment & institutional handover */
  partnership: [
    {
      id: 'appointment-national',
      src: '/photos/bks-wb/appointment-with-national-president.jpeg',
      alt: 'Shri Krishan Bir Chaudhary with Mahacharya Sourabh J. Sarkar and Smt. Reena J. Sarkar after the appointment letter handover',
      caption: 'Appointment day — with the National President',
      detail: 'After the West Bengal State President appointment letter handover · New Delhi, 30 June 2026',
      group: 'BKS West Bengal',
      placement: ['initiative', 'gallery', 'home'],
      source: 'bkswbengal.org/appointment',
    },
    {
      id: 'appointment-delegation',
      src: '/photos/bks-wb/appointment-delegation.jpeg',
      alt: 'BKS office-bearers present during the West Bengal appointment ceremony',
      caption: 'BKS delegation at the appointment',
      detail: 'Office-bearers present for the formal naming of West Bengal leadership',
      group: 'BKS West Bengal',
      placement: ['gallery'],
      source: 'bkswbengal.org/appointment',
    },
    {
      id: 'meeting-bks',
      src: '/photos/bks-wb/meeting-with-bks.jpeg',
      alt: 'Meeting with Bharatiya Krishak Samaj delegates in New Delhi',
      caption: 'Meeting with BKS delegates',
      detail: 'New Delhi consultation preceding the West Bengal mandate',
      group: 'BKS West Bengal',
      placement: ['gallery', 'home'],
      source: 'bkswbengal.org/appointment',
    },
  ],

  /** Activity & impact — plantation / green practice */
  activity: [
    {
      id: 'field-plough-work',
      src: '/photos/activity/field-plough-work.jpg',
      alt: 'Mahacharya Sourabh J. Sarkar on a red Mahindra tractor ploughing land for plantation',
      caption: 'Kaam to Karm — land preparation',
      detail: 'Mahacharya on the plough hitch as the Mahindra Arjun turns soil for planting',
      group: 'Activity',
      placement: ['gallery', 'home', 'impact'],
      source: 'stakeholder-field',
    },
    {
      id: 'field-plough-document',
      src: '/photos/activity/field-plough-document.jpg',
      alt: 'Mahacharya Sourabh J. Sarkar documenting field plough work on a smartphone',
      caption: 'Field documentation — from the plough',
      detail: 'Recording the land-prep moment while the cultivator works the plot',
      group: 'Activity',
      placement: ['gallery', 'home'],
      source: 'stakeholder-field',
    },
    {
      id: 'sapling-presentation',
      src: '/photos/activity/sapling-presentation.jpeg',
      alt: 'Sapling presentation with BKS representatives, Mahacharya Sourabh J. Sarkar and Smt. Reena J. Sarkar',
      caption: 'Sapling presentation — planting begins with trust',
      detail: 'Ceremonial plant gift with BKS representatives after the appointment',
      group: 'Activity',
      placement: ['home', 'gallery', 'impact'],
      source: 'bkswbengal.org/appointment',
    },
    {
      id: 'green-campus-evening',
      src: '/photos/activity/green-campus-evening.jpeg',
      alt: 'KY21C green campus at dusk — canopy and pathways in Newtown',
      caption: 'Green campus evening — living canopy',
      detail: 'KY21C Newtown campus — Kaam to Karm in the built landscape',
      group: 'Activity',
      placement: ['gallery', 'home'],
      source: 'ky21c-campus',
    },
    {
      id: 'green-village-campus',
      src: '/photos/activity/green-village-campus.png',
      alt: 'KY21C green village campus with dense plantation and walkways',
      caption: 'Green village campus',
      detail: 'Dense plantation and productive garden paths on campus',
      group: 'Activity',
      placement: ['gallery'],
      source: 'ky21c-campus',
    },
    {
      id: 'campus-pavilion',
      src: '/photos/activity/campus-pavilion.png',
      alt: 'Open pavilion and greenery at the KY21C campus',
      caption: 'Campus pavilion — gathering under trees',
      detail: 'Learning and community space within the green campus',
      group: 'Activity',
      placement: ['gallery'],
      source: 'ky21c-campus',
    },
    {
      id: 'campus-hands',
      src: '/photos/activity/campus-hands.png',
      alt: 'Hands holding young green leaves — planting care',
      caption: 'Hands in the soil — care for young growth',
      detail: 'Close work of nursery and plantation practice',
      group: 'Activity',
      placement: ['gallery', 'impact'],
      source: 'ky21c-campus',
    },
    {
      id: 'documentation-session',
      src: '/photos/activity/documentation-session.jpg',
      alt: 'KY21C team documentation and strategy session',
      caption: 'Documentation session — building the public story',
      detail: 'Team recording and planning for the joint initiative',
      group: 'Activity',
      placement: ['gallery'],
      source: 'internal-session',
    },
  ],
};

/** Videos — local field film + KY21C YouTube embeds from bkswbengal.org/leadership */
export const mahacharyaVideos = [
  {
    id: 'field-plough-work',
    title: 'Land preparation — field plough',
    outlet: 'Mahacharya Sourabh J. Sarkar · Field',
    src: '/photos/activity/field-plough-work.mp4',
    poster: '/photos/activity/field-plough-work.jpg',
    type: 'Video',
    status: 'live',
    note: 'Mahacharya on the cultivator as land is prepared for the plantation drive — Kaam to Karm.',
  },
  {
    id: 'jeevamrut',
    title: 'Jeevamrut',
    outlet: 'KarmYog for 21st Century · YouTube',
    href: 'https://www.youtube.com/watch?v=c6CCNVbBGL8',
    embedSrc: 'https://www.youtube.com/embed/c6CCNVbBGL8',
    type: 'Video',
    status: 'live',
    note: 'Profile window on nature, livelihood practice, and KY21C philosophy — featured on BKS West Bengal leadership.',
  },
  {
    id: 'sri-farming',
    title: 'Jeevan Jeevika Andolan: SRI Farming Technique',
    outlet: 'KarmYog for 21st Century · YouTube',
    href: 'https://www.youtube.com/watch?v=2lveMnYU9Ds',
    embedSrc: 'https://www.youtube.com/embed/2lveMnYU9Ds?start=191',
    type: 'Video',
    status: 'live',
    note: 'Field teaching on SRI technique — human-potential and farmer education at scale.',
  },
];

export function photosForPlacement(placement) {
  return Object.values(mahacharyaPhotos)
    .flat()
    .filter((p) => Array.isArray(p.placement) && p.placement.includes(placement));
}

export function galleryFromMahacharya() {
  return Object.values(mahacharyaPhotos)
    .flat()
    .filter((p) => p.placement?.includes('gallery'))
    .map((p) => ({
      src: p.src,
      alt: p.alt,
      caption: p.caption,
      detail: p.detail,
      group: p.group,
    }));
}
