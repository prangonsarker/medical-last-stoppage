import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";
import { Clock, Sparkles, MessageCircle, Send, CheckCircle2 } from "lucide-react";

function calculateTimeLeft(deadline?: string) {
  if (!deadline) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }
  const targetTime = new Date(deadline).getTime();
  if (isNaN(targetTime)) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }
  const difference = targetTime - Date.now();
  if (difference <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }
  return {
    total: difference,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isExpired: false
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  const displayVal = isNaN(value) ? 0 : Math.max(0, value);
  return (
    <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl glass-card bg-white/[0.04] border border-white/10 min-w-[64px] sm:min-w-[76px]">
      <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums leading-none mb-1">
        {displayVal.toString().padStart(2, "0")}
      </span>
      <span className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest font-semibold">{label}</span>
    </div>
  );
}

export function RegistrationSection() {
  const reg = (config as any).registration || {};
  const deadline = reg.deadline || config.deadline || "2026-08-15T23:59:59Z";

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  const isExpired = timeLeft.isExpired;

  const preBookPrice = Number(reg.preBookPrice ?? 1549);
  const regularPrice = Number(reg.regularPrice ?? 2099);
  const currency = reg.currency || "৳";
  const savedAmount = Math.max(0, regularPrice - preBookPrice);

  const mainTitle = reg.title || "ভর্তি তথ্য ও রেজিস্ট্রেশন";

  // Primary & Secondary CTA links
  const whatsappUrl = reg.primaryCta?.url || config.contact?.whatsapp || "https://wa.me/8801700000000";
  const telegramUrl = reg.secondaryCta?.url || config.contact?.telegram || "https://t.me/medical_stoppage";

  const admissionSteps = [
    {
      num: "১",
      title: "ধাপ ১: মেসেজ দিন",
      desc: "হোয়াটসঅ্যাপ অথবা টেলিগ্রামে সরাসরি মেসেজ পাঠান।",
    },
    {
      num: "২",
      title: "ধাপ ২: ফি পরিশোধ",
      desc: "কোর্সের তথ্য জেনে নিয়ে বিকাশ/নগদে ফি পরিশোধ করুন।",
    },
    {
      num: "৩",
      title: "ধাপ ৩: গ্রুপ অ্যাক্সেস",
      desc: "ভর্তি নিশ্চিত হতেই প্রাইভেট টেলিগ্রাম গ্রুপে যুক্ত হোন।",
    },
  ];

  return (
    <Section id="registration" title={mainTitle} subtitle="সহজ ৩ ধাপে সম্পন্ন করুন আপনার রেজিস্ট্রেশন">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Main Price & Countdown Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative glass-card p-6 sm:p-10 rounded-3xl border border-accent/40 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_0_40px_rgba(255,42,68,0.15)] text-center space-y-6 overflow-hidden"
        >
          {/* Accent border top glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            {isExpired ? "রেজিস্ট্রেশন চলছে" : "🔥 বিশেষ প্রি-বুকিং অফার"}
          </div>

          {/* Pricing */}
          <div className="py-2">
            {!isExpired ? (
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                    {currency}{preBookPrice.toLocaleString("bn-BD")}
                  </span>
                  <span className="text-xl sm:text-2xl text-neutral-400 line-through font-medium">
                    {currency}{regularPrice.toLocaleString("bn-BD")}
                  </span>
                </div>
                {savedAmount > 0 && (
                  <div className="inline-block bg-accent/20 text-accent font-bold text-sm sm:text-base px-4 py-1 rounded-full border border-accent/30">
                    সাশ্রয়: {currency}{savedAmount.toLocaleString("bn-BD")}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                  {currency}{regularPrice.toLocaleString("bn-BD")}
                </span>
                <span className="text-sm text-neutral-400 uppercase tracking-widest font-semibold">
                  (নিয়মিত ফি)
                </span>
              </div>
            )}
          </div>

          {/* Countdown */}
          {!isExpired && (
            <div className="pt-2 pb-4 border-t border-white/10 max-w-lg mx-auto">
              <p className="text-sm sm:text-base text-neutral-300 font-semibold mb-4 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                অফারের সময় শেষ হতে বাকি
              </p>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
                <TimeUnit value={timeLeft.days} label="দিন" />
                <TimeUnit value={timeLeft.hours} label="ঘণ্টা" />
                <TimeUnit value={timeLeft.minutes} label="মিনিট" />
                <TimeUnit value={timeLeft.seconds} label="সেকেন্ড" />
              </div>
            </div>
          )}

          {/* Action Buttons: WhatsApp & Telegram */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base sm:text-lg bg-[#25D366] text-black hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
              <span>WhatsApp-এ মেসেজ দিন</span>
            </a>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base sm:text-lg bg-[#0088cc] text-white hover:bg-[#0077b3] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Send className="w-5 h-5 shrink-0" />
              <span>Telegram-এ যুক্ত হন</span>
            </a>
          </div>
        </motion.div>

        {/* Simple 3-Step Admission Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
            ভর্তির ৩টি সহজ ধাপ
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {admissionSteps.map((step, idx) => (
              <div
                key={idx}
                className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-sm flex items-center justify-center">
                    {step.num}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-accent/50" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">{step.title}</h4>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
