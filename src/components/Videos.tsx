import { motion } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";

export function Videos() {
  const videoList = Array.isArray(config.videos) ? config.videos : [];
  if (videoList.length === 0) return null;

  const sectionTitle = config.sectionTitles?.videos || "আমাদের ক্লাস দেখুন";

  return (
    <Section id="videos" title={sectionTitle}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {videoList.map((video: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col"
          >
            <div className="relative w-full overflow-hidden rounded-2xl glass-card aspect-video mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
            <h3 className="text-xl font-medium text-white px-2">{video.title}</h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
