"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/lib/sanityImage";

interface Referenca {
  _id: string;
  clientName?: string;
  clientImage?: {
    asset: {
      _ref: string;
    };
  };
  testimonial?: string;
  order: number;
  active: boolean;
}

export default function ReferencesSection() {
  const [reference, setReference] = useState<Referenca[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReference = async () => {
      try {
        const response = await fetch("/api/testimonials");
        if (!response.ok) {
          throw new Error("Failed to fetch references");
        }
        const data = await response.json();
        setReference(data);
      } catch (error) {
        console.error("Error fetching references:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReference();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-primary">
            Reference
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg animate-pulse"
              >
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!reference || reference.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-primary px-4">
            Reference
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reference.map((ref, index) => (
            <motion.div
              key={ref._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border border-gray-200 flex flex-col items-center justify-center text-center"
            >
              {/* Logo/Image */}
              {ref.clientImage && (
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={urlFor(ref.clientImage).width(300).height(300).url()}
                    alt={ref.clientName || "Reference"}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {/* Company Name */}
              {ref.clientName && (
                <h4 className="font-bold text-primary text-lg mb-2">
                  {ref.clientName}
                </h4>
              )}

              {/* Description */}
              {ref.testimonial && (
                <p className="text-gray-900 text-sm leading-relaxed">
                  {ref.testimonial}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
