"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/lib/sanityImage";

interface PartnerBanner {
  _id: string;
  title: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  link?: string;
  description?: string;
  order: number;
  active: boolean;
}

export default function PartnerBanners() {
  const [banners, setBanners] = useState<PartnerBanner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("/api/partner-banners");
        if (!response.ok) {
          throw new Error("Failed to fetch banners");
        }
        const data = await response.json();
        setBanners(data);
      } catch (error) {
        console.error("Error fetching partner banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-6 text-primary">Naši Partneri</h2>
      <div className="space-y-4">
        {loading ? (
          // Loading placeholders
          <>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center animate-pulse"
              >
                <div className="bg-gray-200 h-20 rounded"></div>
              </div>
            ))}
          </>
        ) : banners.length > 0 ? (
          // Display actual banners from Sanity
          <>
            {banners.map((banner) => (
              <motion.div
                key={banner._id}
                whileHover={{ scale: 1.02 }}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                {banner.link ? (
                  <a
                    href={banner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative w-full h-30 flex gap-5 items-center">
                      <Image
                        src={urlFor(banner.image).url()}
                        alt={banner.title}
                        width={100}
                        height={100}
                        className="object-contain p-4"
                      />
                      <div>
                        <p>{banner.title}</p>
                        <p className="text-right text-xs mt-3 text-gray-900">
                          Vidi vise...
                        </p>
                      </div>
                    </div>
                    {banner.description && (
                      <div className="p-3 bg-gray-50 border-t">
                        <p className="text-xs text-gray-900 text-center">
                          {banner.description}
                        </p>
                      </div>
                    )}
                  </a>
                ) : (
                  <>
                    <div className="relative w-full h-30 flex gap-5 items-center">
                      <Image
                        src={urlFor(banner.image).url()}
                        alt={banner.title}
                        width={100}
                        height={100}
                        className="object-contain p-4"
                      />{" "}
                      <div>
                        <p>{banner.title}</p>
                        <p className="text-right text-xs mt-3 text-gray-900">
                          Vidi vise...
                        </p>
                      </div>
                    </div>
                    {banner.description && (
                      <div className="p-3 bg-gray-50 border-t">
                        <p className="text-xs text-gray-900 text-center">
                          {banner.description}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </>
        ) : (
          // No banners - show placeholders
          <>
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors"
              >
                <p className="text-gray-500 text-sm font-medium">
                  Banner Prostor {i}
                </p>
                <p className="text-gray-400 text-xs mt-2">300 x 250px</p>
              </motion.div>
            ))}
          </>
        )}

        {/* Info box for partnerships */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 mt-6"
        >
          <h3 className="font-semibold text-primary mb-2">
            Zainteresovani za saradnju?
          </h3>
          <p className="text-sm text-gray-900">
            Kontaktirajte nas za mogućnosti oglašavanja i partnerstva.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
