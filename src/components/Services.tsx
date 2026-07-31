import { motion } from "motion/react";
import { content } from "../content";
import { Section } from "./Section";
import { Check, Sparkles, BookOpen, Video, Users, FileText, Calendar, AlertCircle } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  BookOpen,
  Video,
  Users,
  FileText,
  Calendar,
  Sparkles,
};

export function Services() {
  const serviceList = content.services;
  const sectionTitle = content.servicesSection.title;
  const sectionSubtitle = content.servicesSection.subtitle;
  const noticeData = content.notice;


  if (!serviceList || serviceList.length === 0) return null;

  return (
    <Section id="services" title={sectionTitle} subtitle={sectionSubtitle}>
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* 6 Service Cards Grid (Desktop: 2 cols, Mobile: 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceList.map((service: any, index: number) => {
            const IconComponent = ICON_MAP[service.icon] || Sparkles;
            const items: string[] = service.items || (service.description ? [service.description] : []);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-accent/40 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between shadow-xl group relative overflow-hidden"
              >
                {/* Subtle top border glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Header Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20 tracking-wider">
                      {service.badge || `0${index + 1}`}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Bengali Section Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Checklist */}
                  <ul className="space-y-3">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-neutral-200 text-sm sm:text-base font-medium leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ONE Premium Notice Card */}
        {noticeData && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/10 via-white/[0.03] to-accent/5 shadow-xl relative overflow-hidden mt-8"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0 shadow-[0_0_20px_rgba(255,42,68,0.3)]">
                <AlertCircle className="w-6 h-6" />
              </div>

              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-accent uppercase tracking-widest px-2.5 py-0.5 rounded bg-accent/10 border border-accent/20">
                    NOTICE
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {noticeData.title || "গুরুত্বপূর্ণ ঘোষণা"}
                  </h4>
                </div>

                <div className="space-y-2 text-neutral-200 text-sm sm:text-base">
                  {(noticeData.paragraphs || []).map((text: string, pIdx: number) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      <p className="leading-relaxed font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </Section>
  );
}
