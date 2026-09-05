"use client";

import { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type AnimatedSectionProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
  delay?: number;
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
