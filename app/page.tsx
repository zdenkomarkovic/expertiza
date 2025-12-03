"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle2,
  Shield,
  FileText,
  ChevronRight,
  Award,
  Target,
  Settings,
  Clock,
  FileCheck,
} from "lucide-react";
import VestacenjeCard from "@/components/VestacenjeCard";

const services = [
  {
    icon: <FileText className="w-12 h-12" />,
    title: "Ekspertize i veštačenja",
    description:
      "Naši stručnjaci nude detaljne analize i veštačenje u raznim oblastima, pripremajući stručne izveštaje veštaka za sudski proces. Svako veštačenje se vrši u skladu sa važećim propisima i standardima.",
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Protivpožarna zaštita",
    description:
      "Konsultacije i rešenja za prevenciju požara, osiguravajući bezbednost vašeg poslovnog ili stambenog prostora",
  },
  {
    icon: <CheckCircle2 className="w-12 h-12" />,
    title: "Carinske analize",
    description:
      "Pomažemo vam da se snađete u carinskim procedurama i analizama, obezbeđujući da vaša roba bude pravilno deklarisana i da izbegnete nepotrebne troškove",
  },
];

const vestacenjaData = [
  {
    title: "Požari, Eksplozije i Havarije",
    description:
      "Stručno utvrđivanje uzroka požara, eksplozija i havarija. Detaljne istrage, procena štete i forenzička analiza sistema za potrebe sudskih i osiguravajućih postupaka.",
    imageSrc: "/images/Pic Pozar.png",
    href: "/vestacenja#pozari-eksplozije-havarije",
  },
  {
    title: "Trasologija - Opšta",
    description:
      "Analiza tragova oruđa, alata, gazećih površina i foto/video materijala. Rekonstrukcija događaja i identifikacija dokaza za istražne i sudske postupke.",
    imageSrc: "/images/2148848591.jpg",
    href: "/vestacenja#trasologija-opsta",
  },
  {
    title: "Trasologija - Saobraćajna",
    description:
      "Analiza saobraćajnih nesreća, rekonstrukcija događaja i utvrđivanje uzročno-posledičnih veza. Stručna veštačenja za potrebe suda i osiguravajućih društava.",
    imageSrc: "/images/Tras Saobracaj.jpg",
    href: "/vestacenja#trasologija-saobracajna",
  },
  {
    title: "Stanje Sijalica na Vozilima",
    description:
      "Forenzička analiza stanja sijalica nakon saobraćajne nezgode. Laboratorijska ispitivanja i mikroskopske analize za utvrđivanje doprinosa učesnika u nesreći.",
    imageSrc: "/images/stanjesijalica.jpg",
    href: "/vestacenja#stanje-sijalica",
  },
  {
    title: "ID Oznake na Vozilima (VIN)",
    description:
      "Veštačenje autentičnosti VIN oznaka, detekcija falsifikovanja i identifikacija vozila. Tehnička analiza identifikacionih brojeva za potrebe sudskih i carinskih postupaka.",
    imageSrc: "/images/idoznake.jpg",
    href: "/vestacenja#id-oznake-vozila",
  },
  {
    title: "Dokumenta & Rukopisi",
    description:
      "Forenzička analiza rukopisa i dokumenata. Identifikacija falsifikata, utvrđivanje autentičnosti i detekcija naknadnih izmena putem fizičkih i hemijskih analiza.",
    imageSrc: "/images/dokumenti.jpg",
    href: "/vestacenja#dokumenta-rukopisi",
  },
  {
    title: "Procene Vrednosti",
    description:
      "Procene vrednosti opreme, mašina i štete nakon požara, havarija i saobraćajnih nezgoda. Metodološki dosledne analize u skladu sa IVS i MRS 16 standardima.",
    imageSrc: "/images/2148819841.jpg",
    href: "/vestacenja#procene-vrednosti",
  },
  {
    title: "Kriminalistička Balistika",
    description:
      "Forenzička analiza oružja, municije i balističkih tragova. Rekonstrukcija događaja, komparativna analiza i identifikacija mehanizama pucanja.",
    imageSrc: "/images/9395695_2939.jpg",
    href: "/vestacenja#kriminalisticka-balistika",
  },
];

const expertizeData = [
  {
    title: "Elektrotehnika",
    description:
      "Projektovanje i analiza elektroinstalacija. Kompletna tehnička dokumentacija, revizija projekata i dokumentacija za građevinske i upotrebne dozvole u skladu sa standardima.",
    imageSrc: "/images/66767.jpg",
    href: "/ekspertize#elektrotehnika",
  },
  {
    title: "Mašinska Tehnika",
    description:
      "Projektovanje HVAC, vodovod, kanalizacija i gasne instalacije. Energetska efikasnost, termičke analize i hidraulički proračuni za industrijska postrojenja.",
    imageSrc: "/images/Pic Analiza doc.png",
    href: "/ekspertize#masinska-tehnika",
  },
  {
    title: "Protivpožarna Zaštita",
    description:
      "Glavni projekat zaštite od požara, sprinkler i hidrantski sistemi, detekcija i dojava požara. Procena rizika i strategije evakuacije za kompleksne objekte.",
    imageSrc: "/images/33.jpg",
    href: "/ekspertize#protivpozarna-zastita",
  },
  {
    title: "Carinsko Poslovanje",
    description:
      "Stručne ekspertize iz carinskog poslovanja. Klasifikacija robe, tarifiranje, upravljanje rizicima i optimizacija uvozno-izvoznih procedura za efikasno poslovanje.",
    imageSrc: "/images/2148480411.jpg",
    href: "/ekspertize#carinsko-poslovanje",
  },
];

const prednosti = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Visok nivo stručnosti i iskustva",
    description:
      "Naš tim čine licencirani inženjeri i eksperti sa bogatim iskustvom u svojim oblastima.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Pouzdane i precizne analize",
    description:
      "Svaka ekspertiza se izrađuje na osnovu detaljnih istraživanja i proverenih podataka.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Prilagođena rešenja",
    description:
      "Svaki projekat je jedinstven, zbog čega nudimo individualno prilagođene analize koje odgovaraju vašim specifičnim potrebama.",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Usklađenost sa standardima i propisima",
    description:
      "Garantujemo da su naši izveštaji i preporuke u potpunosti usklađeni sa važećim zakonima i normativima.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Efikasnost i pravovremenost",
    description:
      "Poštujemo rokove i isporučujemo rezultate u dogovorenom vremenskom okviru.",
  },
];

const FadeInSection = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
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
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/10020.jpg"
            alt="Biro za veštačenja"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight px-2">
              VAŠ PARTNER ZA STRUČNE
              <br />
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                EKSPERTIZE, VEŠTAČENJA I PROCENE
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto px-4"
          >
            Profesionalne Usluge Ekspertiza i Veštačenja
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/#usluge"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Saznajte više
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 "
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        id="usluge"
        className="py-20 bg-gradient-to-br from-gray-50 to-gray-200"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-4 md:mb-6 text-primary px-4">
                Stručna Podrška u Sudskim i Vansudskim Postupcima
              </h2>
              <p className="text-base sm:text-lg md:text-lg text-gray-900 leading-relaxed mb-12 md:mb-16 px-4">
                Naš tim pruža sveobuhvatnu forenziku i tehničku podršku tokom
                sudske parnice. Specijalizovani smo za izradu stručnih nalaza
                koji pomažu sudovima da donesu ispravne odluke zasnovane na
                naučnim metodama i forenzičkoj analizi.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.slice(0, 2).map((service, index) => (
              <FadeInSection key={index} delay={index * 0.2} className="h-full">
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-300 via-gray-100 h-full p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-4 md:mb-6 inline-block"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-base text-gray-900 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}

            <div className="md:col-span-2 lg:col-span-1 h-full">
              <div className="flex justify-center h-full">
                <div className="w-full md:w-[calc(50%-1rem)] lg:w-full h-full">
                  <FadeInSection delay={0.4} className="h-full">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-gray-300 via-gray-100 h-full p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-primary mb-4 md:mb-6 inline-block"
                      >
                        {services[2].icon}
                      </motion.div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">
                        {services[2].title}
                      </h3>
                      <p className="text-base md:text-base text-gray-900 leading-relaxed">
                        {services[2].description}
                      </p>
                    </motion.div>
                  </FadeInSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oblasti Veštačenja Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4">
                Oblasti Veštačenja
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-900  mx-auto px-4">
                Specijalizovani smo za forenzička veštačenja i tehničke analize
                u različitim oblastima
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {vestacenjaData.map((vestacenje, index) => (
              <VestacenjeCard
                key={index}
                title={vestacenje.title}
                description={vestacenje.description}
                imageSrc={vestacenje.imageSrc}
                href={vestacenje.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
              Potrebna vam je naša usluga?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-100 px-4">
              Kontaktirajte nas danas i saznajte kako možemo pomoći vašem
              projektu
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Kontaktirajte nas
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </FadeInSection>
      {/* Oblasti Ekspertiza Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4">
                Oblasti Ekspertiza
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-900 max-w-3xl mx-auto px-4">
                Profesionalne ekspertize i projektovanje u oblasti elektro i
                mašinskog inženjerstva
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {expertizeData.map((expertiza, index) => (
              <VestacenjeCard
                key={index}
                title={expertiza.title}
                description={expertiza.description}
                imageSrc={expertiza.imageSrc}
                href={expertiza.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-primary px-4">
              Zašto odabrati nas?
            </h2>
          </FadeInSection>

          {/* Prvi deo - 3 kartice */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {prednosti.slice(0, 3).map((prednost, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-300 via-gray-100 h-full p-5 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-3 md:mb-4 inline-block"
                  >
                    {prednost.icon}
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-primary">
                    {prednost.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                    {prednost.description}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}

            {/* Kartica 4 - prikazuje se samo na tablet (md) */}
            <div className="lg:hidden">
              <FadeInSection delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-300 via-gray-100 h-full p-5 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-3 md:mb-4 inline-block"
                  >
                    {prednosti[3].icon}
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-primary">
                    {prednosti[3].title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                    {prednosti[3].description}
                  </p>
                </motion.div>
              </FadeInSection>
            </div>
          </div>

          {/* Kartica 5 na tablet, kartice 4 i 5 na desktop */}
          <div className="mb-10 md:mb-12">
            {/* Tablet: samo kartica 5 centrirana */}
            <div className="lg:hidden">
              <div className="md:col-span-2">
                <div className="flex justify-center">
                  <div className="w-full md:w-[calc(50%-1rem)]">
                    <FadeInSection delay={0.4}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-br from-gray-300 via-gray-100 h-full p-5 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="text-primary mb-3 md:mb-4 inline-block"
                        >
                          {prednosti[4].icon}
                        </motion.div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-primary">
                          {prednosti[4].title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                          {prednosti[4].description}
                        </p>
                      </motion.div>
                    </FadeInSection>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: kartice 4 i 5 centrirane */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
              <FadeInSection delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-300 via-gray-100 h-full p-5 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-3 md:mb-4 inline-block"
                  >
                    {prednosti[3].icon}
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-primary">
                    {prednosti[3].title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                    {prednosti[3].description}
                  </p>
                </motion.div>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-300 via-gray-100 h-full p-5 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-3 md:mb-4 inline-block"
                  >
                    {prednosti[4].icon}
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-primary">
                    {prednosti[4].title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                    {prednosti[4].description}
                  </p>
                </motion.div>
              </FadeInSection>
            </div>
          </div>

          <FadeInSection delay={0.5}>
            <div className="text-center px-4">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                Ukoliko vam je potrebna stručna analiza iz navedenih oblasti na
                pravom ste mestu!
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
