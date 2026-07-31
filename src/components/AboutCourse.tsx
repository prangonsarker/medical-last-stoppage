import { motion } from "motion/react";
import { config } from "../config";
import { Section } from "./Section";

export function AboutCourse() {
  const { aboutCourse } = config;
  if (!aboutCourse) return null;

  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[850px] mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 text-white">
          {aboutCourse?.title}
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
          {aboutCourse?.description}
        </p>
      </motion.div>
    </Section>
  );
}
