import { motion } from "motion/react";

export function TrustBar() {
  const items = [
    "Students Got Chance Under My Mentorship",
    "RMC",
    "DMC",
    "SSMC",
    "KMC",
    "SHSMC",
    "MAMC",
    "AFMC",
    "DU",
    "JU",
    "RU",
    "CU",
    "SUST",
    "BUET"
  ];

  // Repeat items multiple times for smooth infinite ticker
  const tickerItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#08080a] border-y border-white/10 h-[64px] flex items-center overflow-hidden relative select-none">
      {/* Side gradient overlays for seamless edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center whitespace-nowrap gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {tickerItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className={`text-sm sm:text-base font-semibold tracking-wide ${
              idx % items.length === 0 ? "text-accent font-bold" : "text-neutral-300"
            }`}>
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/80 shadow-[0_0_8px_rgba(255,42,68,0.8)] inline-block shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
