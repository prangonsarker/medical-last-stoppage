import { motion } from "motion/react";
import { Check, BookOpen } from "lucide-react";
import { config } from "../config";
import { Section } from "./Section";

export interface StudyMaterialItem {
  title: string;
  description: string;
  image: string;
}

export function StudyMaterials() {
  const { studyMaterialsSection } = config;

  if (!studyMaterialsSection || !studyMaterialsSection.items) return null;

  return (
    <Section
      id="study-materials"
      title={studyMaterialsSection.title || "স্টাডি ম্যাটেরিয়াল"}
      subtitle={studyMaterialsSection.subtitle || "মেডিকেল ভর্তি প্রস্তুতির জন্য প্রয়োজনীয় সব স্টাডি হ্যাকস এবং বিশেষ ম্যাটেরিয়ালস"}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {studyMaterialsSection.items.map((item: StudyMaterialItem, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative glass-card p-6 rounded-3xl border border-white/10 hover:border-accent/40 bg-gradient-to-b from-white/[0.06] to-transparent hover:from-white/[0.1] transition-all duration-300 flex flex-col h-full overflow-hidden shadow-xl hover:-translate-y-1"
          >
            {/* Soft inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Image Preview */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl mb-5 bg-white/5 border border-white/10">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/20 p-1.5 rounded-lg text-accent">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-accent" />
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
