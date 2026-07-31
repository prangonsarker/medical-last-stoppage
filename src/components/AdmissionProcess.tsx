import { motion } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";
import * as Icons from "lucide-react";

export function AdmissionProcess() {
  const admissionProcess = (config as any).admissionProcess;
  const title = admissionProcess?.title || "কীভাবে ভর্তি হবেন?";
  const steps = admissionProcess?.steps || [
    {
      step: 1,
      title: "ধাপ ১",
      description: "হোয়াটসঅ্যাপ অথবা টেলিগ্রামে যোগাযোগ করুন।",
      icon: "MessageSquare"
    },
    {
      step: 2,
      title: "ধাপ ২",
      description: "আপনার প্রশ্ন থাকলে জেনে নিন এবং ভর্তি প্রক্রিয়া সম্পন্ন করুন।",
      icon: "HelpCircle"
    },
    {
      step: 3,
      title: "ধাপ ৩",
      description: "ভর্তি নিশ্চিত হওয়ার পর Private Telegram Group-এর অ্যাক্সেস পাবেন।",
      icon: "Send"
    },
    {
      step: 4,
      title: "ধাপ ৪",
      description: "নির্ধারিত সময় অনুযায়ী ক্লাস ও মেন্টরশিপ শুরু করুন।",
      icon: "GraduationCap"
    }
  ];

  return (
    <Section id="admission-process" title={title}>
      <div className="relative max-w-6xl mx-auto">
        {/* Horizontal Connecting Line for Desktop */}
        <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] -translate-y-12 h-0.5 bg-gradient-to-r from-accent/10 via-accent/40 to-accent/10 pointer-events-none z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((item: any, index: number) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.CheckCircle2;
            const stepNum = item.step || index + 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col h-full glass-card p-6 rounded-2xl border border-white/10 hover:border-accent/40 bg-white/[0.03] hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent group-hover:text-black transition-colors">
                    {item.title || `STEP ${stepNum}`}
                  </span>
                  <span className="text-2xl font-mono font-bold text-neutral-600 group-hover:text-accent/40 transition-colors">
                    0{stepNum}
                  </span>
                </div>

                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>

                {/* Short Description */}
                <p className="text-neutral-200 text-sm md:text-base leading-relaxed font-medium mt-auto">
                  {item.description}
                </p>

                {/* Arrow indicator on mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-2 lg:hidden text-accent/30">
                    <Icons.ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
