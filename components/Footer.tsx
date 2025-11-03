"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Instagram } from "lucide-react";
import Image from "@/node_modules/next/image";
import logowhite from "../public/logowhite.png";

export default function Footer() {
  return (
    <motion.footer
      className="bg-primary text-background py-6 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[80rem] ">
        <div className="grid md:grid-cols-3 gap-4 md:gap-12 mb-8">
          <div>
            <Link href="/" className="">
              <Image
                src={logowhite}
                alt="IVANA PSIHOLOG"
                width={600}
                height={100}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className=" mt-3 border-t pt-3">
              Psihološko savetovalište za psihoterapiju, poslovno savetovanje i
              korporativni well-being konsalting.
            </p>
          </div>

          <div className="">
            <h3 className="text-center font-bold mb-2 md:mb-4 text-background">
              Stranice
            </h3>
            <ul className="space-y-1 md:space-y-2 w-fit mx-auto">
              <li>
                <Link
                  href="/"
                  className="hover:text-muted  transition-colors duration-300"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/o-meni"
                  className="hover:text-muted  transition-colors duration-300"
                >
                  O meni
                </Link>
              </li>
              <li>
                <Link
                  href="/polje-rada"
                  className="hover:text-muted  transition-colors duration-300"
                >
                  Polje rada
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-muted  transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-muted  transition-colors duration-300"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className=" font-bold mb-2 md:mb-4 text-background">Kontakt</h3>
            <ul className="space-y-1 md:space-y-3 w-fit mx-auto">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
                <a
                  href="mailto:ivanapericin.savetovanje@gmail.com"
                  className="hover:text-muted  transition-colors duration-300"
                >
                  ivanapericin.savetovanje@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="w-5 h-5 flex-shrink-0 mt-1" />
                <a
                  href="https://www.instagram.com/ivanapericin_path.to.self/"
                  className="hover:text-muted  transition-colors duration-300"
                >
                  ivanapericin_path.to.self
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Pančevo, Srbija</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4 border-t border-background/20 pt-8">
          <p>
            &copy; {new Date().getFullYear()} Ivana Peričin. Sva prava zadržana.
          </p>
          <a
            href="https://www.manikamwebsolutions.com/"
            target="_blank"
            className=""
          >
            izrada sajta:{" "}
            <span className="font-bold hover:text-muted  transition-colors duration-300">
              ManikamWebSolutions
            </span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
