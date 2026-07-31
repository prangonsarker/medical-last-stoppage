import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { config } from "../config";

function AnimatedNumber({ value }: { value: string }) {
  // Extract number and suffix/prefix if any
  const numericMatch = value.match(/\d+/);
  const numericPart = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const prefix = value.split(/\d+/)[0] || "";
  const suffix = value.split(/\d+/)[1] || "";

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && numericPart > 0) {
      let startTime: number | null = null;
      const duration = 2000;
      const end = numericPart;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // easeOutExpo
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeOutExpo * end));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, numericPart]);

  if (numericPart === 0) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export function CourseStats() {
  const statsList = Array.isArray(config.stats) ? config.stats : (config.stats as any)?.items || [];
  if (statsList.length === 0) return null;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[600px] h-[300px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tighter">
                <AnimatedNumber value={stat.value || ""} />
              </div>
              <div className="text-sm md:text-base text-neutral-400 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Subtle Premium Divider */}
      <div className="max-w-5xl mx-auto mt-24">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
