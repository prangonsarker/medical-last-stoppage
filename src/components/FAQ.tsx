import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqList = Array.isArray(config.faq) ? config.faq : [];
  const sectionTitle = (config as any).faqSection?.title || config.sectionTitles?.faq || "সাধারণ জিজ্ঞাসা";
  const sectionSubtitle = (config as any).faqSection?.subtitle || "আপনার মনে থাকা সাধারণ প্রশ্নগুলোর উত্তর";

  return (
    <Section id="faq" title={sectionTitle} subtitle={sectionSubtitle}>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqList.map((item: any, index: number) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;
          const buttonId = `faq-btn-${index}`;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
              className={`glass-card rounded-2xl overflow-hidden border transition-colors duration-300 ${
                isOpen ? "border-accent/40 bg-white/[0.05]" : "border-white/10 hover:border-white/20 bg-white/[0.02]"
              }`}
            >
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-2xl"
              >
                <div className="flex items-center gap-3 pr-2">
                  <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-accent" : "text-neutral-500"}`} />
                  <span className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {item.question}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen ? "bg-accent/20 border-accent/40 text-accent" : "bg-white/5 border-white/10 text-neutral-400"
                }`}>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 text-neutral-300 leading-relaxed text-sm sm:text-base border-t border-white/5 whitespace-pre-line font-normal">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

