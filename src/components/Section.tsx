import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full ${className}`}>
      {(title || subtitle) && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          {title && <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-white">{title}</h2>}
          {subtitle && <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">{subtitle}</p>}
        </motion.div>
      )}
      {children}
    </section>
  );
}
