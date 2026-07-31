import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";
import * as Icons from "lucide-react";

export function WhatYouGet() {
  const { whatYouGet } = config;
  if (!whatYouGet) return null;

  const items = whatYouGet.items || [];

  return (
    <Section id="services" title={whatYouGet?.title || "যা যা পাচ্ছো এই কোর্সে"}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <FeatureCard key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}

function FeatureCard({ item, index }: { item: any; index: number; key?: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = (Icons as any)[item.icon] || Icons.CheckCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden flex flex-col sm:flex-row group border-white/5 hover:border-white/10 transition-colors bg-white/[0.02]"
    >
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between order-2 sm:order-1">
        <div>
          <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
            <IconComponent className="w-6 h-6 text-accent" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-medium text-white mb-3">{item.title}</h3>
          <p className="text-neutral-400 leading-relaxed text-sm mb-6">
            {item.shortDesc}
          </p>
        </div>
        
        <div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors"
          >
            {isExpanded ? "কম দেখান" : "বিস্তারিত দেখুন"}
            <Icons.ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </button>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-6 space-y-3 pt-6 border-t border-white/10">
                  {item.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icons.Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Image Side */}
      <div className="w-full sm:w-2/5 aspect-[16/9] sm:aspect-auto relative overflow-hidden bg-neutral-900 border-b sm:border-b-0 sm:border-l border-white/5 order-1 sm:order-2">
        <img 
          src={item.image} 
          alt={item.imageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:bg-gradient-to-l pointer-events-none" />
      </div>
    </motion.div>
  );
}
