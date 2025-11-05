"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import logowhite from "../public/android-chrome-192x192.png";

export default function Footer() {
  return (
    <motion.footer
      className="bg-primary text-background py-6 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[80rem]">
        <div className="grid md:grid-cols-3 gap-4 md:gap-12 mb-8">
          <div className="grid grid-cols-2 items-center">
            <Link href="/" className="p-5">
              <Image
                src={logowhite}
                alt="Biro za Veštačenja"
                width={50}
                height={50}
                className="hover:scale-105 w-full transition-transform duration-300"
              />
            </Link>
            <div className="text-sm">
              <p className="font-bold">BIRO ZA VEŠTAČENJA</p>
              <p className="mt-3 border-t border-background/20 pt-3">
                Profesionalne usluge stručnih ekspertiza i veštačenja.
                Inženjerska veštačenja, protivpožarna zaštita i carinske
                analize.
              </p>
            </div>
          </div>

          <div className="">
            <h3 className="text-center font-bold mb-2 md:mb-4 text-background">
              Stranice
            </h3>
            <ul className="space-y-1 md:space-y-2 w-fit mx-auto">
              <li>
                <Link
                  href="/"
                  className="hover:text-muted transition-colors duration-300"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nama"
                  className="hover:text-muted transition-colors duration-300"
                >
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/vestacenja"
                  className="hover:text-muted transition-colors duration-300"
                >
                  Veštačenja
                </Link>
              </li>
              <li>
                <Link
                  href="/ekspertize"
                  className="hover:text-muted transition-colors duration-300"
                >
                  Ekspertize
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-muted transition-colors duration-300"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-bold mb-2 md:mb-4 text-background">Kontakt</h3>
            <ul className="space-y-1 md:space-y-3 w-fit mx-auto">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
                <a
                  href="mailto:office@bzv.rs"
                  className="hover:text-muted transition-colors duration-300"
                >
                  office@bzv.rs
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                <a
                  href="tel:+381642757802"
                  className="hover:text-muted transition-colors duration-300"
                >
                  +381 (0) 64 27 57 802
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4 border-t border-background/20 pt-8">
          <p>
            &copy; {new Date().getFullYear()} all rights reserved by Biro za
            Veštačenja.
          </p>
          <a
            href="https://www.manikamwebsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            izrada sajta:{" "}
            <span className="font-bold hover:text-muted transition-colors duration-300">
              ManikamWebSolutions
            </span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
