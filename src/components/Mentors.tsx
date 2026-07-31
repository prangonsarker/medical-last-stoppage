import { motion } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";

export function Mentors() {
  return (
    <Section id="mentors" title={config.sectionTitles.mentors}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {config.mentors.map((mentor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 glass-card">
              <img 
                src={mentor.image} 
                alt={mentor.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-medium text-white mb-1">{mentor.name}</h3>
                <p className="text-accent/90 font-medium">{mentor.college}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
