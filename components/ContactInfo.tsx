"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        Kontakt Informacije
      </h2>
      <div className="space-y-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
        >
          <div className="bg-primary text-white p-3 rounded-lg">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-900">Email</p>
            <a
              href="mailto:office@bzv.rs"
              className="text-primary font-semibold hover:underline text-lg"
            >
              office@bzv.rs
            </a>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
        >
          <div className="bg-primary text-white p-3 rounded-lg">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-900">Telefon</p>
            <a
              href="tel:+381642757802"
              className="text-primary font-semibold hover:underline text-lg"
            >
              +381 (0) 64 27 57 802
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
