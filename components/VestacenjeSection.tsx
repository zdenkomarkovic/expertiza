"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface VestacenjeSectionProps {
  title: string;
  introText: string;
  items: string[];
  id?: string;
}

const FadeInSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function VestacenjeSection({
  title,
  introText,
  items,
  id,
}: VestacenjeSectionProps) {
  return (
    <FadeInSection>
      <div
        id={id}
        className="bg-gradient-to-br from-gray-300 via-gray-100 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 scroll-mt-24"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-primary"
        >
          {title}
        </motion.h2>

        <p className="text-lg md:text-xl font-semibold text-gray-700 mb-8">
          {introText}
        </p>

        <div className="space-y-6">
          {items.map((item, index) => {
            // Split item into number and text
            const match = item.match(/^(\d+)\.\s*(.+)$/);
            const number = match ? match[1] : index + 1;
            const text = match ? match[2] : item;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-300 text-white flex items-center justify-center font-bold text-base group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {number}
                </div>
                <p className="text-gray-700 leading-relaxed flex-1 pt-1.5 text-base md:text-lg">
                  {text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </FadeInSection>
  );
}
