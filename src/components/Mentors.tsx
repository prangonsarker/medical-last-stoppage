import { motion } from "motion/react";
import { content } from "../content";
import { Section } from "./Section";
import { GraduationCap, Award } from "lucide-react";

export function Mentors() {
  const mentorsList = content.mentors || [];
  const sectionTitle = (content as any).mentorsSection?.title || "তোমার মেন্টর কে?";
  const sectionSubtitle = (content as any).mentorsSection?.subtitle || "যাদের সরাসরি গাইডেন্সে এগিয়ে যাবে তোমার মেডিকেল প্রস্তুতি";

  if (!mentorsList || mentorsList.length === 0) return null;

  return (
    <Section id="mentors" title={sectionTitle} subtitle={sectionSubtitle}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mentorsList.map((mentor, index) => (
            <motion.div
              key={mentor.name || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden flex flex-col items-center text-center"
            >
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Large Circular Profile Image */}
              <div className="relative mb-5">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-accent/40 group-hover:border-accent transition-colors duration-300 shadow-xl p-1 bg-black/40">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                {/* Accent Badge Icon */}
                <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-accent text-white shadow-md">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              {/* Name & Designation */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {mentor.name}
              </h3>
              {mentor.designation && (
                <p className="text-xs sm:text-sm font-semibold text-accent mt-1 tracking-wide uppercase">
                  {mentor.designation}
                </p>
              )}

              {/* Short Introduction */}
              {mentor.introduction && (
                <p className="text-sm text-neutral-300 mt-3 mb-5 leading-relaxed line-clamp-3">
                  {mentor.introduction}
                </p>
              )}

              {/* Academic Credentials List */}
              {mentor.credentials && mentor.credentials.length > 0 && (
                <div className="w-full pt-4 border-t border-white/10 mt-auto text-left space-y-2">
                  {mentor.credentials.map((cred, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300"
                    >
                      <GraduationCap className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="leading-tight">{cred}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
