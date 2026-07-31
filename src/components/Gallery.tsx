import { motion } from "motion/react";
import { content } from "../content";
import { Section } from "./Section";

export interface GalleryItem {
  title: string;
  category?: string;
  description?: string;
  image: string;
  alt?: string;
}

export function Gallery() {
  const galleryList: GalleryItem[] = content.gallery;

  if (!galleryList || galleryList.length === 0) return null;

  const sectionTitle = content.gallerySection.title;
  const sectionSubtitle = content.gallerySection.subtitle;


  return (
    <Section id="gallery" title={sectionTitle} subtitle={sectionSubtitle}>
      {/* 2 columns on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto">
        {galleryList.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
            className="group glass-card rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] hover:border-accent/40 transition-all duration-300 shadow-lg flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
              <img
                src={item.image}
                alt={item.alt || item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              {item.title && (
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
                  <p className="text-white text-xs sm:text-sm font-semibold line-clamp-1 drop-shadow-sm">
                    {item.title}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
