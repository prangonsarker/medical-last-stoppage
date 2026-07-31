import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { content } from "../content";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = content.contact.whatsapp;
  const tooltip = content.floatingWhatsApp.tooltip;
  const ariaLabel = content.floatingWhatsApp.ariaLabel;


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!whatsappUrl) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-black shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.7)] transition-shadow group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          aria-label={ariaLabel}
        >
          {/* Animated pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
          
          <MessageCircle className="w-7 h-7 fill-current relative z-10" />

          {/* Tooltip on desktop hover */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            {tooltip}
          </span>

        </motion.a>
      )}
    </AnimatePresence>
  );
}
