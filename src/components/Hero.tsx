import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { config } from "../config";
import { Check } from "lucide-react";

function calculateTimeLeft(deadline?: string) {
  if (!deadline) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const targetTime = new Date(deadline).getTime();
  if (isNaN(targetTime)) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const difference = targetTime - new Date().getTime();
  if (difference <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    total: difference,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  const displayVal = isNaN(value) ? 0 : Math.max(0, value);
  return (
    <div className="flex flex-col items-center justify-center glass-card py-3 px-1 rounded-xl bg-white/[0.03]">
      <span className="text-2xl md:text-3xl font-bold text-white font-mono tabular-nums leading-none mb-1">
        {displayVal.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs text-neutral-400 uppercase tracking-widest">{label}</span>
    </div>
  );
}

export function Hero() {
  const { hero, deadline } = config;
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(deadline));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  const isExpired = timeLeft.total <= 0;

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden px-6">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen transform -translate-y-1/4" />
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-16">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white shadow-sm"
          >
            {hero.badge}
          </motion.div>

          {/* Primary Course Title Block */}
          <motion.div 
            initial={{ opacity: 0, y: 25, letterSpacing: "0.04em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "-0.02em" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 w-full"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.02] select-none">
              Medical Last Stoppage
              <span className="text-red-500 inline-block font-sans ml-0.5 select-none">.</span>
            </h1>

            {hero.titleSub && (
              <div className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-400 tracking-tight pt-1">
                {hero.titleSub}
              </div>
            )}

            {/* Subtle Red Accent Line */}
            <div className="h-[2px] w-28 sm:w-36 bg-gradient-to-r from-red-500 via-red-500/40 to-transparent rounded-full my-3" />
          </motion.div>

          {/* Tagline directly below title */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="text-base sm:text-xl md:text-2xl font-bold tracking-wide text-red-400/90 flex items-center gap-2"
          >
            <span>{hero.tagline || "Knowledge • Guidance • Success"}</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed font-normal"
          >
            {hero.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
          >
            <a 
              href={hero.buttons.primaryTarget} 
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0"
            >
              {isExpired ? hero.buttons.primaryRegular : hero.buttons.primaryPreBook}
            </a>
            <a 
              href={hero.buttons.secondaryTarget} 
              className="w-full sm:w-auto px-8 py-4 glass-card glass-card-hover font-medium rounded-xl flex items-center justify-center gap-2 text-white text-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              {hero.buttons.secondary}
            </a>
          </motion.div>
        </div>

        {/* Right Side: Premium Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-lg mx-auto lg:ml-auto mt-8 lg:mt-0"
        >
          {/* Seat Indicator Badge - Top Right Corner Card (Identical on Desktop, Tablet, Mobile) */}
          <div className="absolute -top-6 -right-2 sm:-top-8 sm:-right-8 z-20 glass-card p-4 sm:p-5 rounded-2xl border-accent/20 bg-[#0a0a0a]/80 shadow-2xl backdrop-blur-xl rotate-3 transform hover:rotate-0 transition-transform duration-300">
            <div className="text-xs sm:text-sm text-neutral-400 font-medium mb-1">{hero.seatIndicator?.subtitle1}</div>
            <div className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">{hero.seatIndicator?.title}</div>
            <div className="text-xs sm:text-sm text-accent mt-1 font-medium">{hero.seatIndicator?.subtitle2}</div>
          </div>

          <div className="glass-card p-8 sm:p-10 rounded-[2rem] border-white/10 shadow-2xl backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-transparent relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              {/* Card Header (Badge) */}
              <div className="mb-6 inline-block px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm font-semibold tracking-wide uppercase">
                {isExpired ? hero.pricingCard?.preBookClosedBadge : hero.pricingCard?.preBookBadge}
              </div>

              {/* Pricing Area */}
              <div className="flex items-end gap-4 mb-2">
                <span className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
                  ৳{isExpired ? hero.regularPrice : hero.preBookPrice}
                </span>
                {!isExpired && (
                  <span className="text-2xl sm:text-3xl text-neutral-500 line-through mb-1.5 font-medium">
                    ৳{hero.regularPrice}
                  </span>
                )}
              </div>

              {/* Save Amount */}
              {!isExpired ? (
                <div className="text-emerald-400 font-medium text-lg mb-8">
                  {hero.pricingCard?.saveText} ৳{hero.regularPrice - hero.preBookPrice}
                </div>
              ) : (
                <div className="text-neutral-400 font-medium text-lg mb-8">
                  {hero.pricingCard?.currentFeeText}
                </div>
              )}

              {/* Countdown Timer */}
              {!isExpired && (
                <div className="mb-10">
                  <div className="text-sm text-neutral-400 mb-4 uppercase tracking-widest font-semibold">Pre-book Ends In</div>
                  <div className="grid grid-cols-4 gap-3 sm:gap-4">
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <TimeUnit value={timeLeft.minutes} label="Mins" />
                    <TimeUnit value={timeLeft.seconds} label="Secs" />
                  </div>
                </div>
              )}

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8" />

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {(hero.highlights || []).map((highlight, index) => (
                  <div key={index} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
