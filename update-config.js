import fs from 'fs';

const configData = JSON.parse(fs.readFileSync('public/config.json', 'utf8'));

configData.gallerySection = {
  title: "কোর্সের কিছু পলক",
  subtitle: "কোর্স, ক্লাস, স্টাডি ম্যাটেরিয়াল এবং প্রস্তুতির কিছু বাস্তব মুহূর্ত"
};

configData.galleryCategories = [
  "সব",
  "বায়োলজি",
  "রসায়ন",
  "স্টাডি ম্যাটেরিয়াল",
  "লাইভ ক্লাস",
  "রুটিন",
  "কমিউনিটি"
];

configData.gallery = [
  {
    title: "বায়োলজি হাই-ইল্ড ডায়াগ্রাম নোটস",
    category: "বায়োলজি",
    description: "উদ্ভিদবিজ্ঞান ও প্রাণীবিজ্ঞানের জটিল টপিক সহজভাবে মনে রাখার বিশেষ ডায়াগ্রাম নোটস।",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    alt: "Biology Diagram Notes"
  },
  {
    title: "কোষ ও এর গঠন স্পেশাল ক্লাস",
    category: "বায়োলজি",
    description: "মেডিকেল ভর্তি পরীক্ষার জন্য অত্যন্ত গুরুত্বপূর্ণ বায়োলজি টপিক অ্যানালাইসিস।",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
    alt: "Cell Biology Class"
  },
  {
    title: "জৈব রসায়ন শর্টকাট নোটস",
    category: "রসায়ন",
    description: "জৈব যৌগের নামকরণ ও বিক্রিয়ার সহজ কৌশল সংবলিত বিশেষ হ্যান্ডনোট।",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=800",
    alt: "Chemistry Organic Notes"
  },
  {
    title: "রসায়নের পর্যায়বৃত্ত ধর্ম মাস্টারক্লাস",
    category: "রসায়ন",
    description: "মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধনের টেকনিক্যাল নোটস।",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    alt: "Chemistry Class"
  },
  {
    title: "মেডিকেল ভর্তি কোশ্চেন ব্যাংক",
    category: "স্টাডি ম্যাটেরিয়াল",
    description: "গত ২০ বছরের মেডিকেল ভর্তি পরীক্ষার ব্যাখ্যাসহ প্রশ্ন সমাধান গাইড।",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    alt: "Medical Question Bank"
  },
  {
    title: "ব্রেইন বুস্টার স্পেশাল ফ্ল্যাশকার্ড",
    category: "স্টাডি ম্যাটেরিয়াল",
    description: "দ্রুত রিভিশন ও গুরুত্বপূর্ণ তথ্য মনে রাখার বিশেষ টেকনিক্যাল কার্ড।",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    alt: "Brain Booster Card"
  },
  {
    title: "সাপ্তাহিক Zoom লাইভ মেন্টরশিপ",
    category: "লাইভ ক্লাস",
    description: "মেন্টরের সাথে সরাসরি ইন্টার‍্যাক্টিভ প্রশ্ন-উত্তর ও গাইডলাইন সেশন।",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    alt: "Zoom Live Guidance"
  },
  {
    title: "লাইভ ডাউট সলভিং সেশন",
    category: "লাইভ ক্লাস",
    description: "শিক্ষার্থীদের কঠিন প্রশ্নের সরাসরি গাইডেন্স এবং টেকনিক্যাল সল্যুশন।",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    alt: "Live Doubt Solving"
  },
  {
    title: "মিলিটারি গ্রেড Notion ডেইলি রুটিন",
    category: "রুটিন",
    description: "প্রতিদিনের পড়া মনিটরিং ও সময় ব্যবস্থাপনার ডিজিটাল ট্র্যাকার।",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78f1014?auto=format&fit=crop&q=80&w=800",
    alt: "Study Routine Tracker"
  },
  {
    title: "প্রাইভেট Telegram গাইডেন্স গ্রুপ",
    category: "কমিউনিটি",
    description: "২৪/৭ সাপোর্ট ও মেডিকেল ভর্তিচ্ছু বন্ধুদের সাথে সক্রিয় স্টাডি গ্রুপ।",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    alt: "Private Telegram Group"
  }
];

configData.studyMaterialsSection = {
  title: "স্টাডি ম্যাটেরিয়াল",
  subtitle: "মেডিকেল ভর্তি প্রস্তুতির জন্য প্রয়োজনীয় সব স্টাডি হ্যাকস এবং বিশেষ ম্যাটেরিয়ালস",
  items: [
    {
      title: "মেইন বই",
      description: "কনসেপ্ট ক্লিয়ারিং এবং হাই-ইল্ড লাইন হাইলাইট করা মেইন বুক গাইডেন্স।",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Lecture Sheet",
      description: "চ্যাপ্টার ভিত্তিক শর্টকাট, সামারি ও স্পেশাল লেকচার শিট।",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Brain Booster Card",
      description: "দ্রুত রিভিশন ও কঠিন বিষয় সহজে মনে রাখার স্মার্ট ফ্ল্যাশকার্ড।",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Biology Chart",
      description: "একনজরে জীববিজ্ঞানের গুরুত্বপূর্ণ চিত্র, ছক ও শ্রেণীবিন্যাস।",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
    }
  ]
};

configData.courseVideoSection = {
  title: "কোর্স সম্পর্কে আরও জানুন",
  subtitle: "ভর্তি হওয়ার আগে ভিডিওটি দেখে নিন",
  youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
  videoId: "M7lc1UVf-VE"
};

fs.writeFileSync('public/config.json', JSON.stringify(configData, null, 2));
console.log('Successfully updated public/config.json');
