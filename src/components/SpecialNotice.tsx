import { motion } from "motion/react";
import { config } from "../config";
import { AlertCircle } from "lucide-react";

export function SpecialNotice() {
  const { specialNotice } = config;
  if (!specialNotice) return null;

  return (
    <section className="py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto glass-card p-8 md:p-10 rounded-3xl border-accent/20 bg-accent/5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
        
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <AlertCircle className="w-7 h-7 text-accent" />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">{specialNotice?.title}</h3>
            <div className="space-y-1.5">
              {(specialNotice?.paragraphs || []).map((p, i) => (
                <p key={i} className="text-neutral-300 md:text-lg">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
