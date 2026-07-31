import { motion } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";
import { Award, CheckCircle } from "lucide-react";

export function LeadMentor() {
  const mentor = (config as any).mentor || (config as any).leadMentor || {};
  const name = mentor.name || "Prangon Sarker";
  const credentials = Array.isArray(mentor.credentials) ? mentor.credentials : [];
  const intro = mentor.intro || "";
  const image = mentor.image || "https://images.unsplash.com/photo-1612349317150-e410f624c427?auto=format&fit=crop&q=80&w=800&h=1000";
  const sectionTitle = (config as any).sectionTitles?.mentor || mentor.title || "কোর্স মেন্টর";

  return (
    <Section id="mentor" title={sectionTitle} subtitle="আপনার স্বপ্নযাত্রার অভিজ্ঞ দিকনির্দেশক">
      <div className="max-w-5xl mx-auto glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row bg-gradient-to-br from-white/[0.04] to-transparent shadow-2xl">
        {/* Mentor Image Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/5 relative min-h-[320px] sm:min-h-[400px] bg-neutral-900 shrink-0"
        >
          <img 
            src={image} 
            alt={name}
            className="absolute inset-0 w-full h-full object-cover object-top filter brightness-95"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5 tracking-tight">{name}</h3>
            {credentials[0] && (
              <p className="text-accent text-sm sm:text-base font-semibold flex items-center gap-1.5">
                <Award className="w-4 h-4 shrink-0" />
                <span>{credentials[0]}</span>
              </p>
            )}
          </div>
        </motion.div>

        {/* Mentor Credentials & Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full md:w-3/5 p-6 sm:p-10 md:p-12 flex flex-col justify-center space-y-6"
        >
          {credentials.length > 1 && (
            <ul className="space-y-3">
              {credentials.slice(1).map((cred: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          )}
          
          <div className="h-0.5 w-16 bg-accent/40 rounded-full" />
          
          {intro && (
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              "{intro}"
            </p>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
