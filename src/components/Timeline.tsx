import { motion } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";
import { Circle } from "lucide-react";

export function Timeline() {
  const timelineList = Array.isArray(config.timeline) ? config.timeline : [];
  const sectionTitle = config.sectionTitles?.timeline || "কোর্সের সময়সূচি";

  return (
    <Section id="timeline" title={sectionTitle}>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-glass-border transform md:-translate-x-1/2" />
        
        <div className="space-y-12">
          {timelineList.map((item: any, index: number) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-6 md:mt-0 z-10 bg-[#050505] p-2">
                  <Circle className="w-4 h-4 text-accent fill-accent/20" />
                </div>
                
                {/* Content */}
                <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="glass-card p-6 inline-block w-full">
                    <span className="text-accent text-sm font-medium mb-2 block tracking-wider uppercase">{item.date}</span>
                    <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                    <p className="text-neutral-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
