"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface VestacenjeCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  delay?: number;
}

export default function VestacenjeCard({
  title,
  description,
  imageSrc,
  href,
  delay = 0,
}: VestacenjeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={href}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-gray-300 to-gray-100 rounded-xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
          {/* Image Section */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4 flex-1 text-sm md:text-base">
              {description}
            </p>

            {/* Read More Link */}
            <div className="flex items-center gap-2 text-primary group-hover:text-secondary transition-colors duration-300 font-semibold ml-auto">
              <span>Saznajte više</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
