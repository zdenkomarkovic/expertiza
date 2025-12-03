"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface VestacenjeSectionProps {
  title: string;
  introText: string;
  items: string[];
  id?: string;
  footerText?: string;
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
  footerText,
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

        <p className="text-lg md:text-xl font-semibold text-gray-900 mb-8">
          {introText}
        </p>

        <div className="space-y-6">
          {items.map((item, index) => {
            // Split item into number and text
            const match = item.match(/^(\d+)\.\s*(.+)$/);
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
                <div className="flex-shrink-0 mt-2 w-7 h-3 rounded-full bg-gradient-to-br from-primary to-blue-300 text-white flex items-center justify-center font-bold text-base group-hover:scale-110 transition-transform duration-300 shadow-md"></div>
                <p className="text-gray-900 leading-relaxed  text-base md:text-lg">
                  {text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {footerText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-gray-300"
          >
            <p className="text-gray-900 leading-relaxed text-base md:text-lg">
              {footerText}
            </p>
          </motion.div>
        )}
      </div>
    </FadeInSection>
  );
}
