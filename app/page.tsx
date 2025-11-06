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
    imageSrc: "/images/pozari.avif",
    href: "/vestacenja#pozari-eksplozije-havarije",
  },
  {
    title: "Trasologija - Opšta",
    description:
      "Analiza tragova oruđa, alata, gazećih površina i foto/video materijala. Rekonstrukcija događaja i identifikacija dokaza za istražne i sudske postupke.",
    imageSrc: "/images/topsta.avif",
    href: "/vestacenja#trasologija-opsta",
  },
  {
    title: "Trasologija - Saobraćajna",
    description:
      "Analiza saobraćajnih nesreća, rekonstrukcija događaja i utvrđivanje uzročno-posledičnih veza. Stručna veštačenja za potrebe suda i osiguravajućih društava.",
    imageSrc: "/images/tsaobracajna.avif",
    href: "/vestacenja#trasologija-saobracajna",
  },
  {
    title: "Stanje Sijalica na Vozilima",
    description:
      "Forenzička analiza stanja sijalica nakon saobraćajne nezgode. Laboratorijska ispitivanja i mikroskopske analize za utvrđivanje doprinosa učesnika u nesreći.",
    imageSrc: "/images/stanjesijalica.avif",
    href: "/vestacenja#stanje-sijalica",
  },
  {
    title: "ID Oznake na Vozilima (VIN)",
    description:
      "Veštačenje autentičnosti VIN oznaka, detekcija falsifikovanja i identifikacija vozila. Tehnička analiza identifikacionih brojeva za potrebe sudskih i carinskih postupaka.",
    imageSrc: "/images/idoznake.avif",
    href: "/vestacenja#id-oznake-vozila",
  },
  {
    title: "Dokumenta & Rukopisi",
    description:
      "Forenzička analiza rukopisa i dokumenata. Identifikacija falsifikata, utvrđivanje autentičnosti i detekcija naknadnih izmena putem fizičkih i hemijskih analiza.",
    imageSrc: "/images/dokumenti.avif",
    href: "/vestacenja#dokumenta-rukopisi",
  },
];

const expertizeData = [
  {
    title: "Elektrotehnika",
    description:
      "Projektovanje i analiza elektroinstalacija. Kompletna tehnička dokumentacija, revizija projekata i dokumentacija za građevinske i upotrebne dozvole u skladu sa standardima.",
    imageSrc: "/images/elektrotehnika.avif",
    href: "/ekspertize#elektrotehnika",
  },
  {
    title: "Mašinska Tehnika",
    description:
      "Projektovanje HVAC, vodovod, kanalizacija i gasne instalacije. Energetska efikasnost, termičke analize i hidraulički proračuni za industrijska postrojenja.",
    imageSrc: "/images/masinskatehnika.avif",
    href: "/ekspertize#masinska-tehnika",
  },
  {
    title: "Protivpožarna Zaštita",
    description:
      "Glavni projekat zaštite od požara, sprinkler i hidrantski sistemi, detekcija i dojava požara. Procena rizika i strategije evakuacije za kompleksne objekte.",
    imageSrc: "/images/pozarnazastita.avif",
    href: "/ekspertize#protivpozarna-zastita",
  },
  {
    title: "Carinsko Poslovanje",
    description:
      "Stručne ekspertize iz carinskog poslovanja. Klasifikacija robe, tarifiranje, upravljanje rizicima i optimizacija uvozno-izvoznih procedura za efikasno poslovanje.",
    imageSrc: "/images/carina.avif",
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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.avif"
            alt="Biro za veštačenja"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/50 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
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
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                Stručna Podrška u Sudskim Postupcima
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-16">
                Naš tim pruža sveobuhvatnu forenziku i tehničku podršku tokom
                sudske parnice. Specijalizovani smo za izradu stručnih nalaza
                koji pomažu sudovima da donesu ispravne odluke zasnovane na
                naučnim metodama i forenzičkoj analizi.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-300 via-gray-100 h-full p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-6 inline-block"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Oblasti Veštačenja Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Oblasti Veštačenja
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Specijalizovani za forenzička veštačenja i tehničke analize u
                različitim oblastima
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Potrebna vam je naša usluga?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Kontaktirajte nas danas i saznajte kako možemo pomoći vašem
              projektu
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Kontaktirajte nas
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </FadeInSection>
      {/* Oblasti Ekspertiza Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Oblasti Ekspertiza
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Profesionalne ekspertize i projektovanje u oblasti elektro i
                mašinskog inženjerstva
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-primary">
              Zašto odabrati nas?
            </h2>
          </FadeInSection>

          {/* Prvi red - 3 kartice */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {prednosti.slice(0, 3).map((prednost, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-300 via-gray-100 h-full p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-4 inline-block"
                  >
                    {prednost.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {prednost.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {prednost.description}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>

          {/* Drugi red - 2 kartice centrirane */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            {prednosti.slice(3).map((prednost, index) => (
              <FadeInSection key={index + 3} delay={(index + 3) * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-300 via-gray-100 h-full p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-4 inline-block"
                  >
                    {prednost.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {prednost.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {prednost.description}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.5}>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-semibold text-primary">
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
