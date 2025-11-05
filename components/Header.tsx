"use client";

import Image from "next/image";
import logowhite from "../public/android-chrome-192x192.png";
import logoblack from "../public/android-chrome-192x192.png";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navList } from "@/constants/index";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon className=" cursor-pointer" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  <motion.li
                    whileHover={{ color: "hsl(var(--primary))" }}
                    className={mobTitleStyles}
                  >
                    <SheetTrigger>{item.title}</SheetTrigger>
                  </motion.li>
                </Link>
              );
            })}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = () => (
  <ul className="hidden gap-16 lg:flex ">
    {navList.map((item, index) => {
      return (
        <Link key={index} href={item.link}>
          <motion.li
            className="transition-colors underline-animation"
            whileHover={{ scale: 1.1 }}
          >
            {item.title}
          </motion.li>
        </Link>
      );
    })}
  </ul>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-center  ${
        scrolled
          ? "bg-background/95 text-primary backdrop-blur supports-[backdrop-filter]:bg-background/85 shadow-md"
          : "bg-transparent text-background"
      }  fixed top-0 left-0 right-0 z-[10] transition-colors`}
    >
      <nav
        className={`${
          scrolled ? "" : ""
        } flex items-center justify-between py-3 container w-full`}
      >
        <Link href="/" className="flex gap-5 items-center">
          <Image
            src={logowhite}
            alt="biro za vestacenje"
            width={50}
            height={50}
            className=""
          />
          <div className="md:text-xl text-center">
            <p className="font-bold">BIRO ZA VEŠTAČENJA</p>
            <p className="text-sm">
              STRUČNA I PROFESIONALNA IZRADA TEHNIČKE DOKUMENTACIJE
            </p>
          </div>
        </Link>
        <DesktopNav />

        <MobileMenu />
      </nav>
    </header>
  );
}
