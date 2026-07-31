import defaultConfig from "./defaultConfig.json";

function getData() {
  const windowData = (window as any).__APP_CONFIG__;
  if (windowData && typeof windowData === 'object') {
    return { ...defaultConfig, ...windowData };
  }
  return defaultConfig;
}

const data = getData();

export const config = {
  courseName: data.hero?.courseName || data.courseName || "Medical Last Stoppage",
  tagline: data.hero?.tagline || data.tagline || "",
  description: data.hero?.description || data.description || "",
  deadline: data.pricing?.deadline || data.countdown?.deadline || data.deadline || "2026-03-31T23:59:59",
  limitedSeats: data.pricing?.limitedSeats || data.statistics?.studentLimit || data.limitedSeats || "১৫০",
  heroBanner: data.hero?.heroBanner || data.hero?.backgroundImage || data.heroBanner || "",
  
  hero: {
    courseName: data.hero?.courseName || data.courseName || "Medical Last Stoppage",
    tagline: data.hero?.tagline || data.tagline || "",
    description: data.hero?.description || data.description || "",
    badge: data.hero?.heroBadge || data.hero?.badge || "🔥 Medical Admission ২০২৬",
    buttons: data.hero?.heroButtons || data.hero?.buttons || {
      primaryPreBook: "প্রি-বুক করুন",
      primaryRegular: "রেজিস্ট্রেশন করুন",
      secondary: "কোর্সের বিস্তারিত",
      primaryTarget: "#pricing",
      secondaryTarget: "#about"
    },
    titleMain: data.hero?.titleMain || "Medical Last Stoppage",
    titleSub: data.hero?.titleSub || "& Mentorship Program",
    seatIndicator: data.hero?.seatIndicator || {
      title: "মাত্র ১৫০ জন",
      subtitle1: "ছোট ব্যাচ",
      subtitle2: "সেরা মেন্টরশিপ"
    },
    pricingCard: data.hero?.pricingCard || {
      preBookBadge: "🔥 সীমিত সময়ের প্রি-বুকিং",
      preBookClosedBadge: "প্রি-বুকিং শেষ",
      saveText: "সাশ্রয়",
      currentFeeText: "বর্তমান কোর্স ফি"
    },
    highlights: data.hero?.highlights || [
      "পূর্ণাঙ্গ মেডিকেল প্রস্তুতি",
      "২৪/৭ টেলিগ্রাম সাপোর্ট",
      "পার্সোনালাইজড রুটিন"
    ],
    preBookPrice: data.pricing?.preBookPrice || 2500,
    regularPrice: data.pricing?.regularPrice || 5000
  },

  promoVideo: data.promoVideo || {
    title: "Course Introduction",
    subtitle: "Medical Last Stoppage & Mentorship Program-এ কী কী থাকছে তা জানতে এই ছোট ভিডিওটি দেখুন।",
    videoId: "M7lc1UVf-VE",
    note: "▶ কোর্সে যুক্ত হওয়ার আগে ভিডিওটি অবশ্যই দেখে নিন।"
  },
  aboutCourse: data.aboutCourse || {
    title: "কোর্স সম্পর্কে",
    description: "Medical Admission প্রার্থীদের জন্য একটি পূর্ণাঙ্গ Mentorship Program।"
  },
  features: data.features || {
    title: "কোর্সের বৈশিষ্ট্যসমূহ",
    items: []
  },
  snapshot: data.snapshot || {
    title: "একনজরে কোর্স",
    items: []
  },
  stats: data.stats || {
    title: "আমাদের অর্জন",
    subtitle: "",
    items: []
  },
  whatYouGet: data.whatYouGet || {
    title: "যা যা পাচ্ছো এই কোর্সে",
    items: []
  },
  
  leadMentor: data.mentor || data.leadMentor || {
    title: "লেড মেন্টর",
    name: "Prangon Sarker",
    credentials: [],
    intro: "",
    image: ""
  },
  specialNotice: data.notice || data.specialNotice || {
    title: "গুরুত্বপূর্ণ ঘোষণা",
    paragraphs: [
      "এই কোর্সটি শুধুমাত্র Private Telegram Group-এর মাধ্যমে পরিচালিত হবে।",
      "মাত্র ১৫০ জন শিক্ষার্থী এই ব্যাচে যুক্ত হওয়ার সুযোগ পাবে।",
      "আসন পূর্ণ হয়ে গেলে নতুন কাউকে যুক্ত করা সম্ভব হবে না।"
    ]
  },
  admissionProcess: data.admissionProcess || {
    title: "কীভাবে ভর্তি হবেন?",
    steps: [
      {
        step: 1,
        title: "ধাপ ১",
        description: "হোয়াটসঅ্যাপ অথবা টেলিগ্রামে যোগাযোগ করুন।",
        icon: "MessageSquare"
      },
      {
        step: 2,
        title: "ধাপ ২",
        description: "আপনার প্রশ্ন থাকলে জেনে নিন এবং ভর্তি প্রক্রিয়া সম্পন্ন করুন।",
        icon: "HelpCircle"
      },
      {
        step: 3,
        title: "ধাপ ৩",
        description: "ভর্তি নিশ্চিত হওয়ার পর Private Telegram Group-এর অ্যাক্সেস পাবেন।",
        icon: "Send"
      },
      {
        step: 4,
        title: "ধাপ ৪",
        description: "নির্ধারিত সময় অনুযায়ী ক্লাস ও মেন্টরশিপ শুরু করুন।",
        icon: "GraduationCap"
      }
    ]
  },
  registration: {
    title: data.registration?.title || "আজই আপনার আসন নিশ্চিত করুন",
    countdownTitle: data.registration?.countdownTitle || "প্রি-বুকিং শেষ হতে বাকি",
    preBookPrice: data.pricing?.preBookPrice ?? data.registration?.preBookPrice ?? 1549,
    regularPrice: data.pricing?.regularPrice ?? data.registration?.regularPrice ?? 2099,
    currency: data.pricing?.currency || data.registration?.currency || "৳",
    deadline: data.pricing?.deadline || data.countdown?.deadline || data.registration?.deadline || "2026-08-15T23:59:59Z",
    preBookBtnText: data.registration?.preBookBtnText || "এখনই প্রি-বুক করুন",
    regularBtnText: data.registration?.regularBtnText || "এখনই ভর্তি হোন",
    primaryCta: {
      text: data.registration?.primaryCta?.text || "💬 হোয়াটসঅ্যাপে যোগাযোগ করুন",
      url: data.registration?.primaryCta?.url || data.contact?.whatsapp || "https://wa.me/8801700000000"
    },
    secondaryCta: {
      text: data.registration?.secondaryCta?.text || "📢 টেলিগ্রামে যুক্ত হন",
      url: data.registration?.secondaryCta?.url || data.contact?.telegram || "https://t.me/medical_stoppage"
    }
  },
  finalMotivation: data.finalMotivation || {
    title: "এখন সিদ্ধান্ত নেওয়ার সময়",
    description: "আপনার স্বপ্নের মেডিকেল কলেজে ভর্তির যাত্রায় সঠিক দিকনির্দেশনা ও পরিকল্পিত প্রস্তুতি আপনাকে এগিয়ে রাখবে। আজই আপনার আসন নিশ্চিত করুন।"
  },
  finalCTA: data.finalCTA || {
    heading: "আপনার স্বপ্নের মেডিকেল যাত্রা এখান থেকেই শুরু হতে পারে",
    description: "দেরি না করে আজই যোগাযোগ করুন এবং আপনার আসন নিশ্চিত করুন।",
    primaryBtnText: data.registration?.primaryCta?.text || "💬 হোয়াটসঅ্যাপে যোগাযোগ করুন",
    secondaryBtnText: data.registration?.secondaryCta?.text || "📢 টেলিগ্রামে যুক্ত হন"
  },
  footer: data.footer || {
    description: data.hero?.description || "Medical Admission প্রার্থীদের জন্য একটি পূর্ণাঙ্গ Mentorship Program।",
    copyright: `© ${new Date().getFullYear()} Medical Last Stoppage. All rights reserved.`
  },
  seo: data.seo || {
    title: "Medical Last Stoppage",
    description: "Medical Admission প্রার্থীদের জন্য একটি পূর্ণাঙ্গ Mentorship Program।",
    keywords: ["Medical", "Admission", "Mentorship", "Bangladesh"],
    openGraphImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600",
    favicon: "/favicon.ico",
    canonicalUrl: "https://medicalstoppage.com"
  },
  theme: data.theme || {
    primaryColor: "#000000",
    accentColor: "#ff2a44",
    background: "#000000",
    logo: "/logo.png"
  },
  contact: data.contact || {
    telegram: "https://t.me/medical_stoppage",
    whatsapp: "https://wa.me/8801700000000",
    email: "contact@medicalstoppage.com"
  },
  socialLinks: data.social || data.socialLinks || {
    facebook: "https://facebook.com/medicalstoppage",
    youtube: "https://youtube.com/medicalstoppage"
  },
  
  pricing: data.pricing?.plans || data.pricing || [],
  mentors: data.mentors || [],
  services: data.services || [],
  timeline: data.timeline || [],
  
  gallerySection: data.gallerySection || {
    title: "কোর্সের কিছু ঝলক",
    subtitle: "কোর্স, ক্লাস, স্টাডি ম্যাটেরিয়াল এবং প্রস্তুতির কিছু বাস্তব মুহূর্ত"
  },
  galleryCategories: data.galleryCategories || [
    "সব",
    "বায়োলজি",
    "রসায়ন",
    "স্টাডি ম্যাটেরিয়াল",
    "লাইভ ক্লাস",
    "রুটিন",
    "কমিউনিটি"
  ],
  gallery: (data.gallery || []).map((g: any) => {
    if (typeof g === 'string') {
      return {
        title: "কোর্সের মুহূর্ত",
        category: "সব",
        description: "Medical Last Stoppage গ্যালারি",
        image: g,
        alt: "Gallery Image"
      };
    }
    return {
      title: g.title || "কোর্সের মুহূর্ত",
      category: g.category || "সব",
      description: g.description || "",
      image: g.image || g.imagePath || "",
      alt: g.alt || g.altText || g.title || "Gallery Image"
    };
  }),
  studyMaterialsSection: data.studyMaterialsSection || {
    title: "স্টাডি ম্যাটেরিয়াল",
    subtitle: "মেডিকেল ভর্তি প্রস্তুতির জন্য প্রয়োজনীয় সব স্টাডি হ্যাকস এবং বিশেষ ম্যাটেরিয়ালস",
    items: []
  },
  courseVideoSection: data.courseVideoSection || {
    title: "কোর্স সম্পর্কে আরও জানুন",
    subtitle: "ভর্তি হওয়ার আগে ভিডিওটি দেখে নিন",
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
    videoId: "M7lc1UVf-VE"
  },
  videos: (data.videos || []).map((v: any) => ({
    id: v.id || (v.youtubeUrl ? v.youtubeUrl.split('v=')[1] : undefined) || v.id || "M7lc1UVf-VE",
    title: v.title || "ভিডিও"
  })),
  
  faq: data.faq || [],
  buttons: data.buttons || { primary: "রেজিস্ট্রেশন করুন", secondary: "বিস্তারিত দেখুন" },
  sectionTitles: data.sectionTitles || {
    services: "আমাদের সেবাসমূহ",
    mentors: "সেরা মেন্টরদের থেকে শিখুন",
    stats: "আমাদের অর্জন",
    timeline: "কোর্সের সময়সূচি",
    gallery: "সাফল্যের ঝলক",
    videos: "আমাদের ক্লাস দেখুন",
    pricing: "ভবিষ্যতের জন্য বিনিয়োগ",
    faq: "সাধারণ জিজ্ঞাসা (FAQ)"
  }
};
