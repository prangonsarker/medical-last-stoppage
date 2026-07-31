import { motion } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";

export function PromoVideo() {
  const { promoVideo } = config;
  if (!promoVideo) return null;

  return (
    <Section id="promo-video" title={promoVideo?.title} subtitle={promoVideo?.subtitle}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <div className="w-full aspect-video rounded-3xl overflow-hidden glass-card p-2 md:p-3 bg-white/5 border-white/10 shadow-2xl relative group">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="w-full h-full rounded-2xl overflow-hidden bg-black relative z-10">
            <iframe
              src={`https://www.youtube.com/embed/${promoVideo?.videoId || 'M7lc1UVf-VE'}`}
              title={promoVideo?.title || 'Promo Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {promoVideo?.note && (
          <p className="mt-6 text-sm md:text-base text-neutral-400 font-medium tracking-wide">
            {promoVideo.note}
          </p>
        )}
      </motion.div>
    </Section>
  );
}
