import fs from 'fs';
const rawConfig = JSON.parse(fs.readFileSync('raw_config.json', 'utf8'));

const newConfig = {
  hero: {
    courseName: rawConfig.courseName,
    tagline: rawConfig.tagline,
    description: rawConfig.description,
    heroBadge: rawConfig.hero.badge,
    heroButtons: rawConfig.hero.buttons,
    backgroundImage: rawConfig.heroBanner,
    heroBanner: rawConfig.heroBanner,
    titleMain: rawConfig.hero.titleMain,
    titleSub: rawConfig.hero.titleSub,
    seatIndicator: rawConfig.hero.seatIndicator,
    pricingCard: rawConfig.hero.pricingCard,
    highlights: rawConfig.hero.highlights
  },
  pricing: {
    preBookPrice: rawConfig.hero.preBookPrice,
    regularPrice: rawConfig.hero.regularPrice,
    currency: "৳",
    deadline: rawConfig.deadline,
    limitedSeats: rawConfig.limitedSeats,
    highlightText: "Most Popular",
    countdownLabels: ["Days", "Hours", "Mins", "Secs"],
    plans: rawConfig.pricing
  },
  countdown: {
    deadline: rawConfig.deadline
  },
  mentor: rawConfig.leadMentor,
  services: rawConfig.services,
  gallery: rawConfig.gallery.map(url => ({
    title: "Gallery Image",
    description: "Success Moment",
    imagePath: url,
    altText: "Medical Stoppage Gallery"
  })),
  videos: rawConfig.videos.map((vid, i) => ({
    title: vid.title,
    description: vid.title,
    youtubeUrl: `https://www.youtube.com/watch?v=${vid.id}`,
    thumbnail: `https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`,
    displayOrder: i + 1,
    id: vid.id
  })),
  statistics: {
    recordedClasses: "৫০+",
    liveSessions: "৩+",
    mcqCount: "২০০০+",
    studentLimit: rawConfig.limitedSeats
  },
  faq: rawConfig.faq,
  notice: rawConfig.specialNotice,
  contact: rawConfig.contact,
  seo: {
    title: rawConfig.courseName,
    description: rawConfig.description,
    keywords: ["Medical", "Admission", "Mentorship", "Bangladesh"],
    openGraphImage: rawConfig.heroBanner,
    favicon: "/favicon.ico",
    canonicalUrl: "https://medicalstoppage.com"
  },
  theme: {
    primaryColor: "#000000",
    accentColor: "#facc15",
    background: "#000000",
    logo: "/logo.png"
  },
  social: rawConfig.socialLinks,
  
  // Legacy preserves for components that haven't been asked to be moved
  promoVideo: rawConfig.promoVideo,
  aboutCourse: rawConfig.aboutCourse,
  features: rawConfig.features,
  snapshot: rawConfig.snapshot,
  stats: rawConfig.stats,
  whatYouGet: rawConfig.whatYouGet,
  mentors: rawConfig.mentors,
  timeline: rawConfig.timeline,
  buttons: rawConfig.buttons,
  sectionTitles: rawConfig.sectionTitles
};

fs.writeFileSync('public/config.json', JSON.stringify(newConfig, null, 2));
