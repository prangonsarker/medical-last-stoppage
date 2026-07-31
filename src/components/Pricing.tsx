import { motion } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";
import { Check, Sparkles } from "lucide-react";

export function Pricing() {
  const pricingData = config.pricing as any;
  const pricingList = Array.isArray(pricingData) 
    ? pricingData 
    : (Array.isArray(pricingData?.plans) ? pricingData.plans : []);

  const sectionTitle = (config as any).sectionTitles?.pricing || "কোর্স প্ল্যান ও ফি";
  const whatsappUrl = config.contact?.whatsapp || (config as any).registration?.primaryCta?.url || "https://wa.me/8801700000000";

  if (!pricingList || pricingList.length === 0) return null;

  return (
    <Section id="pricing" title={sectionTitle} subtitle="আপনার প্রয়োজন অনুযায়ী সঠিক প্ল্যান বেছে নিন">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {pricingList.map((plan: any, index: number) => {
          const isPopular = Boolean(plan.isPopular);

          return (
            <motion.div
              key={plan.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative p-6 sm:p-8 rounded-3xl glass-card flex flex-col h-full border transition-all duration-300 ${
                isPopular
                  ? "border-accent/50 bg-white/[0.06] shadow-[0_0_30px_rgba(255,42,68,0.2)]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3.5 right-6 sm:right-8">
                  <span className="bg-accent text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3" />
                    {pricingData?.highlightText || "Most Popular"}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3.5 mb-8 flex-1">
                {(plan.features || []).map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-neutral-300 text-sm sm:text-base leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 sm:py-4 rounded-xl font-bold text-base text-center transition-all shadow-md ${
                  isPopular
                    ? "bg-accent text-white hover:brightness-110 shadow-[0_0_20px_rgba(255,42,68,0.3)]"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                }`}
              >
                এখনই শুরু করুন
              </a>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
