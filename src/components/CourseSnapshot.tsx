import { motion } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";
import { Check } from "lucide-react";

export function CourseSnapshot() {
  const { snapshot } = config;
  if (!snapshot) return null;

  return (
    <Section id="snapshot">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-[2rem] border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent text-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-medium text-white mb-8">{snapshot?.title}</h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {(snapshot?.items || []).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-200 shadow-sm hover:bg-white/10 transition-colors cursor-default"
              >
                <Check className="w-4 h-4 text-accent" strokeWidth={2.5} />
                <span className="font-medium tracking-wide">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
