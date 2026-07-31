import { motion } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";

export function CourseVideo() {
  const { courseVideoSection } = config;

  if (!courseVideoSection) return null;

  // Extract YouTube ID from URL or videoId property
  const getYouTubeId = (urlOrId: string) => {
    if (!urlOrId) return "M7lc1UVf-VE";
    if (urlOrId.includes("youtube.com/watch?v=")) {
      return urlOrId.split("v=")[1]?.split("&")[0] || "M7lc1UVf-VE";
    }
    if (urlOrId.includes("youtu.be/")) {
      return urlOrId.split("youtu.be/")[1]?.split("?")[0] || "M7lc1UVf-VE";
    }
    return urlOrId;
  };

  const videoId = getYouTubeId(courseVideoSection.videoId || courseVideoSection.youtubeUrl);

  return (
    <Section
      id="course-video"
      title={courseVideoSection.title || "কোর্স সম্পর্কে আরও জানুন"}
      subtitle={courseVideoSection.subtitle || "ভর্তি হওয়ার আগে ভিডিওটি দেখে নিন"}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent shadow-2xl relative overflow-hidden"
      >
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-inner">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`}
            title={courseVideoSection.title || "Course Video"}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
          ></iframe>
        </div>
      </motion.div>
    </Section>
  );
}
