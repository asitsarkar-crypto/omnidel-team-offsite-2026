export const languages = [
  { code: 'en', label: 'English', native: 'English', short: 'EN', htmlLang: 'en' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', short: 'हिं', htmlLang: 'hi' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা', short: 'বাং', htmlLang: 'bn' },
  { code: 'mr', label: 'Marathi', native: 'मराठी', short: 'मर', htmlLang: 'mr' },
];

export const DEFAULT_LANG = 'en';
export const LANG_STORAGE_KEY = 'kbc-lang';

const en = {
  skip: 'Skip to content',
  menu: 'Menu',
  language: 'Language',
  scroll: 'Scroll',
  nav: {
    home: 'Home',
    about: 'About',
    journey: 'Journey',
    heritage: 'Heritage',
    vision: 'Vision',
    bks: 'Organisation',
    bksExternal: 'Bharatiya Kisan Samaj (BKS)',
    agriculture: 'Agriculture',
    initiatives: 'Initiatives',
    media: 'Media',
    gallery: 'Gallery',
    awards: 'Awards',
    contact: 'Contact',
  },
  cta: {
    getStarted: 'Get Started',
    contactUs: 'Contact Us',
    bookConsult: 'Book Free Consultation',
    fillForm: 'Fill Enquiry Form',
    fullBio: 'Full biography',
    whyHim: 'Why work with him',
    learnMore: 'Learn more',
    exploreJourney: 'Or explore the full journey →',
    openMaps: 'Open in Google Maps',
    whatsapp: 'WhatsApp',
  },
  hero: {
    nameLocal: 'श्री कृष्णबीर चौधरी',
    brandLine: 'Leadership in Indian Agriculture — for the farmer, for the nation.',
    tagline: 'Seed sovereignty. Fair price. Sustainable innovation. Service to farmers.',
    shortTitle: 'President, Bharatiya Krishak Samaj',
  },
  about: {
    kicker: 'About',
    title: 'Farmer-statesman of Indian agriculture.',
    summary:
      'Eminent farmer leader and agricultural policy expert — President of Bharatiya Krishak Samaj, member of the Government of India’s High Level Committee on MSP, natural farming and crop diversification, and a familiar voice across national television and international trade fora.',
    meta: 'Editor of Kisan Ki Awaaz · Author of Development Misplaced (Penguin, 2014)',
    photoCaption: 'With Union Minister Nitin Gadkari',
  },
  services: {
    kicker: 'Our Services',
    title: 'Areas of public work & engagement',
    deck: 'Policy advocacy, legal defence of farmers’ rights, media platforms, and organisation building — grounded in decades of institutional service.',
    items: [
      {
        title: 'MSP & agri-policy advocacy',
        lead: 'High-level work on Minimum Support Price, natural farming, and crop diversification — including membership of the Government of India High Level Committee.',
      },
      {
        title: 'Seed sovereignty & legal defence',
        lead: 'Seeds Bill testimony, EPO wheat-patent challenge with Greenpeace (2004), and campaigns against illegal royalty regimes that threaten farmers’ seed rights.',
      },
      {
        title: 'Sustainable & natural farming',
        lead: 'IPM stewardship (GOI–UNDP), natural farming alignment, and farmer-centric models that protect soil, health, and livelihoods.',
      },
      {
        title: 'Trade, WTO & food sovereignty',
        lead: 'Indian farmers’ voice at WTO ministerials in Hong Kong, Geneva, Bali, and Nairobi — plus FAO and Terra Madre engagements.',
      },
      {
        title: 'Media & public communication',
        lead: 'Editorial leadership via Kisan Ki Awaaz, national TV appearances, and press interventions on pesticide policy, biopiracy, and fair price.',
      },
      {
        title: 'BKS organisation building',
        lead: 'National presidency of Bharatiya Krishak Samaj and state chapter guidance — including West Bengal chapter formation in 2026.',
      },
    ],
  },
  why: {
    kicker: 'Why Choose Us',
    title: 'Trust earned in ministries, courts, and fields',
    deck: 'Institutional roles, legal victories, and national recognition — not marketing claims.',
  },
  process: {
    kicker: 'Process / How We Work',
    title: 'From enquiry to public follow-through',
    deck: 'A clear path for press, policy partners, farmer organisations, and collaborators.',
  },
  benefits: {
    kicker: 'Benefits',
    title: 'What stakeholders gain',
  },
  testimonials: {
    kicker: 'Testimonials & recognition',
    title: 'Voices and platforms that matter',
    tvLabel: 'Television platforms',
  },
  faq: {
    kicker: 'FAQ',
    title: 'Questions people ask',
  },
  contact: {
    kicker: 'Contact',
    title: 'Write, call, or fill the enquiry form',
    deck: 'Press, invitations, farmer organisation correspondence, and consultation requests.',
    email: 'Email',
    phone: 'Phone / WhatsApp',
    office: 'Office',
    residence: 'Residence',
    enquiry: 'Enquiry form',
  },
  footer: {
    explore: 'Explore',
    connect: 'Connect',
    contactEnquiry: 'Contact / Enquiry',
    viewMap: 'View office on Google Maps',
  },
};

const hi = {
  ...en,
  skip: 'सामग्री पर जाएँ',
  menu: 'मेनू',
  language: 'भाषा',
  scroll: 'स्क्रॉल',
  nav: {
    home: 'होम',
    about: 'परिचय',
    journey: 'यात्रा',
    heritage: 'विरासत',
    vision: 'दृष्टि',
    bks: 'संगठन',
    bksExternal: 'भारतीय किसान समाज (बीकेएस)',
    agriculture: 'कृषि',
    initiatives: 'पहल',
    media: 'मीडिया',
    gallery: 'गैलरी',
    awards: 'सम्मान',
    contact: 'संपर्क',
  },
  cta: {
    getStarted: 'शुरू करें',
    contactUs: 'संपर्क करें',
    bookConsult: 'निःशुल्क परामर्श बुक करें',
    fillForm: 'पूछताछ फ़ॉर्म भरें',
    fullBio: 'पूर्ण जीवनी',
    whyHim: 'उनके साथ क्यों काम करें',
    learnMore: 'और जानें',
    exploreJourney: 'या पूरी यात्रा देखें →',
    openMaps: 'गूगल मैप में खोलें',
    whatsapp: 'व्हाट्सऐप',
  },
  hero: {
    nameLocal: 'श्री कृष्णबीर चौधरी',
    brandLine: 'भारतीय कृषि में नेतृत्व — किसान के लिए, राष्ट्र के लिए।',
    tagline: 'बीज संप्रभुता। उचित मूल्य। टिकाऊ नवाचार। किसानों की सेवा।',
    shortTitle: 'अध्यक्ष, भारतीय कृषक समाज',
  },
  about: {
    kicker: 'परिचय',
    title: 'भारतीय कृषि के किसान-राजनेता।',
    summary:
      'प्रख्यात किसान नेता और कृषि नीति विशेषज्ञ — भारतीय कृषक समाज के अध्यक्ष, भारत सरकार की एमएसपी, प्राकृतिक खेती और फसल विविधीकरण उच्च स्तरीय समिति के सदस्य, तथा राष्ट्रीय टेलीविजन व अंतरराष्ट्रीय व्यापार मंचों पर परिचित आवाज़।',
    meta: 'किसान की आवाज़ के संपादक · डेवलपमेंट मिस्प्लेस्ड (पेंगुइन, 2014) के लेखक',
    photoCaption: 'केंद्रीय मंत्री नितिन गडकरी के साथ',
  },
  services: {
    kicker: 'हमारी सेवाएँ',
    title: 'सार्वजनिक कार्य और सहभागिता के क्षेत्र',
    deck: 'नीति पैरवी, किसानों के अधिकारों की कानूनी रक्षा, मीडिया मंच और संगठन निर्माण — दशकों की संस्थागत सेवा पर आधारित।',
    items: [
      {
        title: 'एमएसपी और कृषि-नीति पैरवी',
        lead: 'न्यूनतम समर्थन मूल्य, प्राकृतिक खेती और फसल विविधीकरण पर उच्च स्तरीय कार्य — भारत सरकार की उच्च स्तरीय समिति की सदस्यता सहित।',
      },
      {
        title: 'बीज संप्रभुता और कानूनी रक्षा',
        lead: 'बीज विधेयक साक्ष्य, ग्रीनपीस के साथ ईपीओ गेहूँ-पेटेंट चुनौती (2004), और अवैध रॉयल्टी व्यवस्थाओं के विरुद्ध अभियान।',
      },
      {
        title: 'टिकाऊ और प्राकृतिक खेती',
        lead: 'आईपीएम (भारत सरकार–यूएनडीपी), प्राकृतिक खेती और किसान-केंद्रित मॉडल जो मिट्टी, स्वास्थ्य और आजीविका की रक्षा करते हैं।',
      },
      {
        title: 'व्यापार, डब्ल्यूटीओ और खाद्य संप्रभुता',
        lead: 'हांगकांग, जेनेवा, बाली और नैरोबी में डब्ल्यूटीओ मंत्रिस्तरीय बैठकों में भारतीय किसानों की आवाज़ — साथ ही एफएओ व टेरा माद्रे।',
      },
      {
        title: 'मीडिया और जनसंचार',
        lead: 'किसान की आवाज़ के माध्यम से संपादकीय नेतृत्व, राष्ट्रीय टीवी उपस्थिति, और कीटनाशक नीति, बायोपायरेसी व उचित मूल्य पर प्रेस हस्तक्षेप।',
      },
      {
        title: 'बीकेएस संगठन निर्माण',
        lead: 'भारतीय कृषक समाज की राष्ट्रीय अध्यक्षता और राज्य अध्याय मार्गदर्शन — जिसमें 2026 में पश्चिम बंगाल अध्याय शामिल।',
      },
    ],
  },
  why: {
    kicker: 'हमें क्यों चुनें',
    title: 'मंत्रालयों, अदालतों और खेतों में अर्जित विश्वास',
    deck: 'संस्थागत भूमिकाएँ, कानूनी विजय और राष्ट्रीय सम्मान — विपणन दावे नहीं।',
  },
  process: {
    kicker: 'प्रक्रिया / हम कैसे काम करते हैं',
    title: 'पूछताछ से सार्वजनिक अनुवर्ती तक',
    deck: 'प्रेस, नीति भागीदारों, किसान संगठनों और सहयोगियों के लिए स्पष्ट मार्ग।',
  },
  benefits: {
    kicker: 'लाभ',
    title: 'हितधारकों को क्या मिलता है',
  },
  testimonials: {
    kicker: 'प्रशंसापत्र और मान्यता',
    title: 'महत्वपूर्ण आवाज़ें और मंच',
    tvLabel: 'टेलीविजन मंच',
  },
  faq: {
    kicker: 'अक्सर पूछे जाने वाले प्रश्न',
    title: 'लोग क्या पूछते हैं',
  },
  contact: {
    kicker: 'संपर्क',
    title: 'लिखें, कॉल करें या पूछताछ फ़ॉर्म भरें',
    deck: 'प्रेस, निमंत्रण, किसान संगठन पत्राचार और परामर्श अनुरोध।',
    email: 'ईमेल',
    phone: 'फ़ोन / व्हाट्सऐप',
    office: 'कार्यालय',
    residence: 'निवास',
    enquiry: 'पूछताछ फ़ॉर्म',
  },
  footer: {
    explore: 'खोजें',
    connect: 'जुड़ें',
    contactEnquiry: 'संपर्क / पूछताछ',
    viewMap: 'गूगल मैप पर कार्यालय देखें',
  },
};

const bn = {
  ...en,
  skip: 'মূল বিষয়ে যান',
  menu: 'মেনু',
  language: 'ভাষা',
  scroll: 'স্ক্রল',
  nav: {
    home: 'হোম',
    about: 'পরিচয়',
    journey: 'পথচলা',
    heritage: 'ঐতিহ্য',
    vision: 'দৃষ্টিভঙ্গি',
    bks: 'সংগঠন',
    bksExternal: 'ভারতীয় কৃষক সমাজ (বি কে এস)',
    agriculture: 'কৃষি',
    initiatives: 'উদ্যোগ',
    media: 'মিডিয়া',
    gallery: 'গ্যালারি',
    awards: 'সম্মান',
    contact: 'যোগাযোগ',
  },
  cta: {
    getStarted: 'শুরু করুন',
    contactUs: 'যোগাযোগ করুন',
    bookConsult: 'বিনামূল্যে পরামর্শ বুক করুন',
    fillForm: 'জিজ্ঞাসা ফর্ম পূরণ করুন',
    fullBio: 'সম্পূর্ণ জীবনী',
    whyHim: 'তাঁর সঙ্গে কেন কাজ করবেন',
    learnMore: 'আরও জানুন',
    exploreJourney: 'অথবা পূর্ণ পথচলা দেখুন →',
    openMaps: 'গুগল ম্যাপে খুলুন',
    whatsapp: 'হোয়াটসঅ্যাপ',
  },
  hero: {
    nameLocal: 'শ্রী কৃষ্ণবীর চৌধুরী',
    brandLine: 'ভারতীয় কৃষিতে নেতৃত্ব — কৃষকের জন্য, জাতির জন্য।',
    tagline: 'বীজ সার্বভৌমত্ব। ন্যায্য মূল্য। টেকসই উদ্ভাবন। কৃষকদের সেবা।',
    shortTitle: 'সভাপতি, ভারতীয় কৃষক সমাজ',
  },
  about: {
    kicker: 'পরিচয়',
    title: 'ভারতীয় কৃষির কৃষক-রাষ্ট্রনায়ক।',
    summary:
      'বিশিষ্ট কৃষক নেতা ও কৃষি নীতি বিশেষজ্ঞ — ভারতীয় কৃষক সমাজের সভাপতি, ভারত সরকারের এমএসপি, প্রাকৃতিক চাষ ও ফসল বৈচিত্র্যকরণ উচ্চ পর্যায়ের কমিটির সদস্য, এবং জাতীয় টেলিভিশন ও আন্তর্জাতিক বাণিজ্য মঞ্চে পরিচিত কণ্ঠ।',
    meta: 'কিসান কি আওয়াজ-এর সম্পাদক · ডেভেলপমেন্ট মিসপ্লেসড (পেঙ্গুইন, ২০১৪)-এর লেখক',
    photoCaption: 'কেন্দ্রীয় মন্ত্রী নীতিন গড়করীর সঙ্গে',
  },
  services: {
    kicker: 'আমাদের সেবা',
    title: 'জনসেবা ও সম্পৃক্ততার ক্ষেত্রসমূহ',
    deck: 'নীতি পরামর্শ, কৃষক অধিকারের আইনি প্রতিরক্ষা, মিডিয়া মঞ্চ এবং সংগঠন গঠন — দশকের প্রাতিষ্ঠানিক সেবার ভিত্তিতে।',
    items: [
      {
        title: 'এমএসপি ও কৃষি-নীতি পরামর্শ',
        lead: 'ন্যূনতম সহায়ক মূল্য, প্রাকৃতিক চাষ ও ফসল বৈচিত্র্যকরণে উচ্চ পর্যায়ের কাজ — ভারত সরকারের উচ্চ পর্যায়ের কমিটির সদস্যপদসহ।',
      },
      {
        title: 'বীজ সার্বভৌমত্ব ও আইনি প্রতিরক্ষা',
        lead: 'বীজ বিল সাক্ষ্য, গ্রিনপিসের সঙ্গে ইপিও গম-পেটেন্ট চ্যালেঞ্জ (২০০৪), এবং অবৈধ রয়্যালটি ব্যবস্থার বিরুদ্ধে অভিযান।',
      },
      {
        title: 'টেকসই ও প্রাকৃতিক চাষ',
        lead: 'আইপিএম (ভারত সরকার–ইউএনডিপি), প্রাকৃতিক চাষ এবং মাটি, স্বাস্থ্য ও জীবিকা রক্ষাকারী কৃষক-কেন্দ্রিক মডেল।',
      },
      {
        title: 'বাণিজ্য, ডব্লিউটিও ও খাদ্য সার্বভৌমত্ব',
        lead: 'হংকং, জেনেভা, বালি ও নাইরোবিতে ডব্লিউটিও মন্ত্রী-সম্মেলনে ভারতীয় কৃষকের কণ্ঠ — পাশাপাশি এফএও ও টেরা মাদ্রে।',
      },
      {
        title: 'মিডিয়া ও জনযোগাযোগ',
        lead: 'কিসান কি আওয়াজ-এর সম্পাদকীয় নেতৃত্ব, জাতীয় টিভি উপস্থিতি, এবং কীটনাশক নীতি, বায়োপাইরেসি ও ন্যায্য মূল্যে প্রেস হস্তক্ষেপ।',
      },
      {
        title: 'বি কে এস সংগঠন গঠন',
        lead: 'ভারতীয় কৃষক সমাজের জাতীয় সভাপতিত্ব এবং রাজ্য শাখা নির্দেশনা — ২০২৬-এ পশ্চিমবঙ্গ শাখাসহ।',
      },
    ],
  },
  why: {
    kicker: 'কেন আমাদের বেছে নেবেন',
    title: 'মন্ত্রণালয়, আদালত ও মাঠে অর্জিত আস্থা',
    deck: 'প্রাতিষ্ঠানিক ভূমিকা, আইনি জয় এবং জাতীয় স্বীকৃতি — বিপণন দাবি নয়।',
  },
  process: {
    kicker: 'প্রক্রিয়া / আমরা কীভাবে কাজ করি',
    title: 'জিজ্ঞাসা থেকে জনসমক্ষে অনুসরণ পর্যন্ত',
    deck: 'প্রেস, নীতি অংশীদার, কৃষক সংগঠন ও সহযোগীদের জন্য স্পষ্ট পথ।',
  },
  benefits: {
    kicker: 'সুবিধা',
    title: 'অংশীদাররা কী পান',
  },
  testimonials: {
    kicker: 'প্রশংসাপত্র ও স্বীকৃতি',
    title: 'গুরুত্বপূর্ণ কণ্ঠ ও মঞ্চ',
    tvLabel: 'টেলিভিশন মঞ্চ',
  },
  faq: {
    kicker: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    title: 'মানুষ কী জানতে চায়',
  },
  contact: {
    kicker: 'যোগাযোগ',
    title: 'লিখুন, কল করুন বা জিজ্ঞাসা ফর্ম পূরণ করুন',
    deck: 'প্রেস, আমন্ত্রণ, কৃষক সংগঠনের চিঠিপত্র এবং পরামর্শের অনুরোধ।',
    email: 'ইমেইল',
    phone: 'ফোন / হোয়াটসঅ্যাপ',
    office: 'অফিস',
    residence: 'বাসস্থান',
    enquiry: 'জিজ্ঞাসা ফর্ম',
  },
  footer: {
    explore: 'অনুসন্ধান',
    connect: 'সংযোগ',
    contactEnquiry: 'যোগাযোগ / জিজ্ঞাসা',
    viewMap: 'গুগল ম্যাপে অফিস দেখুন',
  },
};

const mr = {
  ...en,
  skip: 'मुख्य मजकुराकडे जा',
  menu: 'मेनू',
  language: 'भाषा',
  scroll: 'स्क्रोल',
  nav: {
    home: 'मुख्यपृष्ठ',
    about: 'परिचय',
    journey: 'प्रवास',
    heritage: 'वारसा',
    vision: 'दृष्टी',
    bks: 'संघटना',
    bksExternal: 'भारतीय किसान समाज (बीकेएस)',
    agriculture: 'कृषी',
    initiatives: 'उपक्रम',
    media: 'मीडिया',
    gallery: 'गॅलरी',
    awards: 'सन्मान',
    contact: 'संपर्क',
  },
  cta: {
    getStarted: 'सुरु करा',
    contactUs: 'संपर्क करा',
    bookConsult: 'मोफत सल्ला बुक करा',
    fillForm: 'चौकशी फॉर्म भरा',
    fullBio: 'पूर्ण चरित्र',
    whyHim: 'त्यांच्यासोबत का काम करावे',
    learnMore: 'अधिक जाणून घ्या',
    exploreJourney: 'किंवा पूर्ण प्रवास पहा →',
    openMaps: 'गुगल नकाशात उघडा',
    whatsapp: 'व्हॉट्सअ‍ॅप',
  },
  hero: {
    nameLocal: 'श्री कृष्णबीर चौधरी',
    brandLine: 'भारतीय शेतीतील नेतृत्व — शेतकऱ्यासाठी, राष्ट्रासाठी.',
    tagline: 'बीज सार्वभौमत्व. योग्य भाव. शाश्वत नवोपक्रम. शेतकऱ्यांची सेवा.',
    shortTitle: 'अध्यक्ष, भारतीय कृषक समाज',
  },
  about: {
    kicker: 'परिचय',
    title: 'भारतीय शेतीचे शेतकरी-नेते.',
    summary:
      'प्रख्यात शेतकरी नेते आणि कृषी धोरण तज्ज्ञ — भारतीय कृषक समाजाचे अध्यक्ष, भारत सरकारच्या एमएसपी, नैसर्गिक शेती आणि पीक विविधता उच्च स्तरीय समितीचे सदस्य, तसेच राष्ट्रीय दूरचित्रवाणी व आंतरराष्ट्रीय व्यापार व्यासपीठावरील परिचित आवाज.',
    meta: 'किसान की आवाजचे संपादक · डेव्हलपमेंट मिसप्लेस्ड (पेंग्विन, २०१४)चे लेखक',
    photoCaption: 'केंद्रीय मंत्री नितीन गडकरी यांच्यासोबत',
  },
  services: {
    kicker: 'आमच्या सेवा',
    title: 'सार्वजनिक कार्य आणि सहभागाचे क्षेत्र',
    deck: 'धोरण वकिली, शेतकऱ्यांच्या हक्कांचे कायदेशीर रक्षण, मीडिया व्यासपीठ आणि संघटना बांधणी — दशकांच्या संस्थात्मक सेवेवर आधारित.',
    items: [
      {
        title: 'एमएसपी आणि कृषी-धोरण वकिली',
        lead: 'किमान आधारभूत किंमत, नैसर्गिक शेती आणि पीक विविधतेवर उच्च स्तरीय कार्य — भारत सरकारच्या उच्च स्तरीय समितीच्या सदस्यत्वा सहित.',
      },
      {
        title: 'बीज सार्वभौमत्व आणि कायदेशीर संरक्षण',
        lead: 'बीज विधेयक साक्ष्य, ग्रीनपीससोबत ईपीओ गहू-पेटंट आव्हान (२००४), आणि अवैध रॉयल्टी व्यवस्थेविरुद्ध मोहिमा.',
      },
      {
        title: 'शाश्वत आणि नैसर्गिक शेती',
        lead: 'आयपीएम (भारत सरकार–यूएनडीपी), नैसर्गिक शेती आणि माती, आरोग्य व उपजीविका जपणारे शेतकरी-केंद्रित मॉडेल.',
      },
      {
        title: 'व्यापार, डब्ल्यूटीओ आणि अन्न सार्वभौमत्व',
        lead: 'हाँगकाँग, जिनिव्हा, बाली आणि नैरोबी येथील डब्ल्यूटीओ मंत्रीपरिषदेत भारतीय शेतकऱ्यांचा आवाज — तसेच एफएओ व टेरा माद्रे.',
      },
      {
        title: 'मीडिया आणि जनसंवाद',
        lead: 'किसान की आवाजद्वारे संपादकीय नेतृत्व, राष्ट्रीय टीव्ही उपस्थिती, आणि कीटकनाशक धोरण, बायोपायरेसी व योग्य भावावर प्रेस हस्तक्षेप.',
      },
      {
        title: 'बीकेएस संघटना बांधणी',
        lead: 'भारतीय कृषक समाजाचे राष्ट्रीय अध्यक्षपद आणि राज्य शाखा मार्गदर्शन — २०२६ मधील पश्चिम बंगाल शाखेसहित.',
      },
    ],
  },
  why: {
    kicker: 'आम्हाला का निवडावे',
    title: 'मंत्रालये, न्यायालये आणि शेतात मिळालेला विश्वास',
    deck: 'संस्थात्मक भूमिका, कायदेशीर विजय आणि राष्ट्रीय सन्मान — विपणन दावे नाहीत.',
  },
  process: {
    kicker: 'प्रक्रिया / आम्ही कसे काम करतो',
    title: 'चौकशीपासून सार्वजनिक पाठपुराव्यापर्यंत',
    deck: 'प्रेस, धोरण भागीदार, शेतकरी संघटना आणि सहयोग्यांसाठी स्पष्ट मार्ग.',
  },
  benefits: {
    kicker: 'फायदे',
    title: 'भागधारकांना काय मिळते',
  },
  testimonials: {
    kicker: 'प्रशंसापत्रे आणि मान्यता',
    title: 'महत्त्वाचे आवाज आणि व्यासपीठे',
    tvLabel: 'दूरचित्रवाणी व्यासपीठे',
  },
  faq: {
    kicker: 'नेहमी विचारले जाणारे प्रश्न',
    title: 'लोक काय विचारतात',
  },
  contact: {
    kicker: 'संपर्क',
    title: 'लिहा, कॉल करा किंवा चौकशी फॉर्म भरा',
    deck: 'प्रेस, आमंत्रणे, शेतकरी संघटना पत्रव्यवहार आणि सल्ला विनंत्या.',
    email: 'ईमेल',
    phone: 'फोन / व्हॉट्सअ‍ॅप',
    office: 'कार्यालय',
    residence: 'निवास',
    enquiry: 'चौकशी फॉर्म',
  },
  footer: {
    explore: 'शोधा',
    connect: 'जोडा',
    contactEnquiry: 'संपर्क / चौकशी',
    viewMap: 'गुगल नकाशावर कार्यालय पहा',
  },
};

export const messages = { en, hi, bn, mr };

export function getMessages(lang) {
  return messages[lang] || messages.en;
}

export function navKeyFromHref(href) {
  const map = {
    '/': 'home',
    '/about': 'about',
    '/journey': 'journey',
    '/heritage': 'heritage',
    '/vision': 'vision',
    '/bks': 'bks',
    '/agriculture': 'agriculture',
    '/initiatives': 'initiatives',
    '/media': 'media',
    '/gallery': 'gallery',
    '/awards': 'awards',
    '/contact': 'contact',
  };
  return map[href] || null;
}
