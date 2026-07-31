import { motion } from "motion/react";
import { content } from "../content";
import { Section } from "./Section";
import { Play } from "lucide-react";

export function CourseVideo() {
  const videoData = content.courseVideo || {
    title: "কোর্স সম্পর্কে আরও জানুন",
    subtitle: "ভর্তি হওয়ার আগে ভিডিওটি দেখে নিন",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  };

  const title = videoData.title || "কোর্স সম্পর্কে আরও জানুন";
  const subtitle = videoData.subtitle || "ভর্তি হওয়ার আগে ভিডিওটি দেখে নিন";
  const url = videoData.youtubeUrl || "";

  // Extract YouTube ID / Embed URL cleanly
  const getEmbedUrl = (input: string) => {
    if (!input) return "";
    if (input.includes("youtube.com/embed/")) return input;
    const vMatch = input.match(/[?&]v=([^&]+)/);
    if (vMatch && vMatch[1]) return `https://www.youtube.com/embed/${vMatch[1]}`;
    const shortMatch = input.match(/youtu\.be\/([^?&]+)/);
    if (shortMatch && shortMatch[1]) return `https://www.youtube.com/embed/${shortMatch[1]}`;
    if (/^[a-zA-Z0-9_-]{11}$/.test(input.trim())) return `https://www.youtube.com/embed/${input.trim()}`;
    return input;
  };

  const embedUrl = getEmbedUrl(url);

  if (!url) return null;

  return (
    <Section id="course-video" title={title} subtitle={subtitle}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-2 sm:p-4 rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl overflow-hidden relative group"
        >
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

          {/* Responsive 16:9 Aspect Ratio Container */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/60 shadow-inner border border-white/5">
            {embedUrl ? (
              <iframe
                src={`${embedUrl}?rel=0&modestbranding=1`}
                title={title}
                className="w-full h-full border-0 rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 gap-3">
                <Play className="w-12 h-12 text-accent animate-pulse" />
                <p className="text-sm font-medium">ভিডিও উপলব্ধ নয়</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
