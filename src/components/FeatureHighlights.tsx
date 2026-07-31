import { motion } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";
import * as Icons from "lucide-react";

export function FeatureHighlights() {
  const featureList = Array.isArray(config.features) ? config.features : [];
  if (featureList.length === 0) return null;

  return (
    <Section id="features">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featureList.map((feature: any, index: number) => {
          const IconComponent = (Icons as any)[feature.icon] || Icons.CheckCircle;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col group hover:-translate-y-1 transition-all duration-300 border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
