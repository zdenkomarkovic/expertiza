"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import PartnerBanners from "@/components/PartnerBanners";

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

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="bg-primary h-20"></div>{" "}
      <div className="max-w-7xl py-24 mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              STUPITE U KONTAKT SA NAMA
            </h1>
            <p className="text-lg md:text-xl text-gray-900 max-w-3xl mx-auto">
              Ukoliko imate pitanja ili ste zainteresovani za saradnju obratite
              nam se telefonski ili putem maila. U svakom slučaju možete
              popuniti donju kontakt formu, a mi ćemo odgovoriti u najskorijem
              mogućem roku.
            </p>
          </div>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Section - Contact Form and Info */}
          <div className=" space-y-8">
            <FadeInSection delay={0.3}>
              <ContactInfo />
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <ContactForm />
            </FadeInSection>
          </div>

          {/* Right Section - Partner Banners */}
          <div className="">
            <FadeInSection delay={0.4}>
              <PartnerBanners />
            </FadeInSection>
          </div>
        </div>
      </div>
    </main>
  );
}
