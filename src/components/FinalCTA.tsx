import { motion } from "motion/react";
import { config } from "../config";
import { MessageCircle, Send, Sparkles } from "lucide-react";

export function FinalCTA() {
  const finalCta = (config as any).finalCTA || {};
  const heading = finalCta.heading || "আপনার স্বপ্নের মেডিকেল যাত্রা এখান থেকেই শুরু হতে পারে";
  const description = finalCta.description || "দেরি না করে আজই যোগাযোগ করুন এবং আপনার আসন নিশ্চিত করুন।";

  const primaryText = finalCta.primaryBtnText || (config as any).registration?.primaryCta?.text || "💬 হোয়াটসঅ্যাপে যোগাযোগ করুন";
  const primaryUrl = (config as any).registration?.primaryCta?.url || config.contact?.whatsapp || "https://wa.me/8801700000000";

  const secondaryText = finalCta.secondaryBtnText || (config as any).registration?.secondaryCta?.text || "📢 টেলিগ্রামে যুক্ত হন";
  const secondaryUrl = (config as any).registration?.secondaryCta?.url || config.contact?.telegram || "https://t.me/medical_stoppage";

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl border border-accent/30 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-[0_0_50px_rgba(255,42,68,0.12)] text-center space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Medical Last Stoppage
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl mx-auto">
            {heading}
          </h2>

          {/* Description */}
          <p className="text-neutral-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base sm:text-lg bg-[#25D366] text-black hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
              aria-label="WhatsApp-এ যোগাযোগ করুন"
            >
              <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
              <span>{primaryText}</span>
            </a>

            <a
              href={secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base sm:text-lg bg-[#0088cc] text-white hover:bg-[#0077b3] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0088cc]/50"
              aria-label="Telegram-এ যুক্ত হন"
            >
              <Send className="w-6 h-6 shrink-0" />
              <span>{secondaryText}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
