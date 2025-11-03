"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type AnimatedSectionProps = PropsWithChildren<{
  delay?: number;
  y?: number;
}>;

export default function AnimatedSection({
  children,
  delay = 0,
  y = 20,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
