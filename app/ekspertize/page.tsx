"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  Zap,
  Cog,
  FlameKindling,
  ShieldCheck,
  Award,
  Target,
  Settings,
  Clock,
  FileCheck,
} from "lucide-react";
import VestacenjeSection from "@/components/VestacenjeSection";

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

const oblasti = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Projektovanje i analize iz oblasti elektrotehnike",
    description:
      "Stručna rešenja u oblasti elektroinstalacija, energetskih sistema, automatizacije i optimizacije elektroenergetskih mreža.",
    href: "#elektrotehnika",
  },
  {
    icon: <Cog className="w-10 h-10" />,
    title: "Projektovanje i analize iz oblasti mašinske tehnike",
    description:
      "Tehničke procene i stručne analize u vezi sa mašinskim sistemima, energetskom efikasnošću, optimizacijom procesa i usklađenošću sa industrijskim normama.",
    href: "#masinska-tehnika",
  },
  {
    icon: <FlameKindling className="w-10 h-10" />,
    title: "Ekspertize iz oblasti protivpožarne zaštite",
    description:
      "Detaljne analize rizika, procena požarne otpornosti objekata, predlozi zaštitnih mera i usklađivanje sa važećim protivpožarnim propisima i standardima.",
    href: "#protivpozarna-zastita",
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Ekspertize iz oblasti carinskog poslovanja",
    description:
      "Detaljne analize karakteristika robe, rizika, procedura i zakonske regulative. Predlozi postupanja i usklađivanje sa važećim carinskim propisima i standardima.",
    href: "#carinsko-poslovanje",
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

export default function Ekspertize() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1197.jpg"
            alt="Ekspertske analize"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              EKSPERTSKE
              <br />
              <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                ANALIZE
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mt-6">
              Pouzdana rešenja za sigurno poslovanje
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                U današnjem dinamičnom okruženju, precizne analize i stručno
                znanje su ključni faktori za donošenje ispravnih odluka. Naš tim
                iskusnih profesionalaca pruža ekspertize u oblasti mašinskog i
                elektro projektovanja, u domenu protivpožarne zaštite, kao i
                oblasti carinskog poslovanja, obezbeđujući visokokvalitetna
                rešenja zasnovana na najnovijim standardima i propisima.
              </p>
            </div>
          </FadeInSection>

          {/* Oblasti Section */}
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Oblasti ekspertize koje pokrivamo svojim stručnim znanjima:
            </h2>
          </FadeInSection>

          <div className="mb-20 grid md:grid-cols-2 gap-8">
            {oblasti.map((oblast, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <Link href={oblast.href} className="block h-full">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-gray-300 via-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full cursor-pointer"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-primary"
                      >
                        {oblast.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">
                      {oblast.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {oblast.description}
                    </p>
                    <p className="text-right">Saznaj više...</p>
                  </motion.div>
                </Link>
              </FadeInSection>
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

      {/* Detailed Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Section 1: Elektrotehnika */}
          <VestacenjeSection
            id="elektrotehnika"
            title="ELEKTROTEHNIKA"
            introText="Precizno projektovanje i detaljna analiza elektroinstalacija ključni su faktori za sigurnost, energetsku efikasnost i usklađenost objekata sa zakonskim propisima. Naš tim elektroinženjera pruža kompletne usluge projektovanja, kao i ekspertize i analize već izrađenih projekata, osiguravajući da svi elektro sistemi budu funkcionalni, bezbedni i usklađeni sa važećim standardima i propisima. Naše usluge uključuju:"
            items={[
              "Projektovanje elektroinstalacija – Izrada kompletne tehničke dokumentacije za elektroenergetske sisteme, uključujući razvod električne energije, osvetljenje, gromobransku zaštitu i automatizaciju objekata.",
              "Analiza i revizija postojećih elektro projekata – Provera tehničke ispravnosti, usklađenosti sa propisima i mogućnosti optimizacije troškova i efikasnosti elektro sistema.",
              "Izrada dokumentacije za građevinsku dozvolu – Priprema elektroprojekata i tehničke dokumentacije neophodne za dobijanje građevinske dozvole u skladu sa zakonima i pravilnicima.",
              "Izrada dokumentacije za upotrebnu dozvolu – Priprema završne tehničke dokumentacije, uključujući izveštaje o ispitivanju elektroinstalacija, ateste i elaborat energetske efikasnosti.",
              "Procena energetske efikasnosti elektro sistema – Stručne analize i predlozi za unapređenje energetske efikasnosti i smanjenje potrošnje električne energije.",
              "Proračuni i simulacije elektro sistema – Analize opterećenja, selektivnosti zaštite, kvaliteta električne energije i druge studije potrebne za pouzdan rad elektroinstalacija.",
            ]}
          />

          {/* Section 2: Mašinska tehnika */}
          <VestacenjeSection
            id="masinska-tehnika"
            title="MAŠINSKA TEHNIKA"
            introText="Precizno projektovanje mašinskih instalacija i detaljna analiza tehničke dokumentacije ključni su faktori za funkcionalnost, energetsku efikasnost i usklađenost objekata sa zakonskim propisima. Naš tim inženjera pruža kompletne usluge projektovanja, kao i ekspertize i analize postojećih projekata, osiguravajući da svi mašinski sistemi budu sigurni, efikasni i usklađeni sa važećim tehničkim standardima i propisima. Naše usluge uključuju:"
            items={[
              "Projektovanje mašinskih instalacija – Izrada kompletne tehničke dokumentacije za sisteme grejanja, ventilacije, klimatizacije (HVAC), vodovoda i kanalizacije, termotehničke i gasne instalacije, kao i sisteme industrijskih postrojenja.",
              "Analiza i revizija postojećih mašinskih projekata – Tehnička provera ispravnosti projektovanih sistema, analiza njihove efikasnosti i usklađenosti sa važećim zakonima i standardima.",
              "Izrada dokumentacije za građevinsku dozvolu – Priprema svih potrebnih mašinskih projekata i tehničke dokumentacije za dobijanje građevinske dozvole u skladu sa zakonima i pravilnicima.",
              "Izrada dokumentacije za upotrebnu dozvolu – Priprema završne tehničke dokumentacije, uključujući ateste, izveštaje o ispitivanju sistema i elaborat energetske efikasnosti.",
              "Energetska efikasnost i optimizacija sistema – Stručne analize postojećih sistema sa predlozima za povećanje energetske efikasnosti i smanjenje operativnih troškova.",
              "Proračuni i simulacije mašinskih sistema – Termičke analize, proračuni toplotnih gubitaka i dobitaka, hidraulički proračuni i druge studije neophodne za optimalan rad instalacija.",
            ]}
          />

          {/* Section 3: Protivpožarna zaštita */}
          <VestacenjeSection
            id="protivpozarna-zastita"
            title="PROTIVPOŽARNA ZAŠTITA"
            introText="Efikasna zaštita od požara ključna je za sigurnost ljudi, imovine i infrastrukture. Naš tim stručnjaka nudi kompletne usluge projektovanja sistema zaštite od požara, izradu Glavnog projekta zaštite od požara, kao i analizu i reviziju postojećih projekata i dokumentacije potrebne za dobijanje građevinske i upotrebne dozvole. Naša rešenja su u potpunosti usklađena sa važećim propisima i standardima, pružajući maksimalnu sigurnost i pouzdanost sistema. Naše usluge uključuju:"
            items={[
              "Izrada Glavnog projekta zaštite od požara – Detaljna tehnička dokumentacija koja definiše sve mere zaštite od požara, uključujući pasivne i aktivne sisteme, evakuacione puteve, otpornost objekta na požar i usklađenost sa zakonima.",
              "Projektovanje posebnih sistema zaštite od požara – Rešenja prilagođena specifičnim potrebama objekta, uključujući: automatske sprinkler i hidrantske sisteme, sisteme za detekciju i dojavu požara, protivpožarne ventilacione sisteme i sisteme za odimljavanje, gasne i aerosolne sisteme gašenja požara, sisteme pasivne zaštite, uključujući otpornost konstrukcije i protivpožarna vrata.",
              "Analiza i revizija postojećih projekata zaštite od požara – Provera tehničke ispravnosti, usklađenosti sa važećim propisima i predlozi za optimizaciju sistema zaštite od požara.",
              "Izrada dokumentacije za građevinsku dozvolu – Priprema kompletne dokumentacije o protivpožarnoj zaštiti, potrebne za dobijanje građevinske dozvole, u skladu sa važećim zakonima i tehničkim normativima.",
              "Izrada dokumentacije za upotrebnu dozvolu – Priprema završne tehničke dokumentacije, uključujući ateste, ispitivanja sistema zaštite od požara i elaborate o ispravnosti instalacija.",
              "Procena požarnog rizika i strategije evakuacije – Stručne analize objekata sa ciljem smanjenja rizika od požara i poboljšanja efikasnosti evakuacije u slučaju incidenta.",
            ]}
          />

          {/* Section 4: Carinsko poslovanje */}
          <VestacenjeSection
            id="carinsko-poslovanje"
            title="CARINSKO POSLOVANJE"
            introText="Upravljanje carinskim procedurama i poslovanjem zahteva detaljno poznavanje propisa, pravilnika i međunarodnih standarda. Naš tim stručnjaka pruža sveobuhvatne ekspertize u oblasti carinskog poslovanja, pomažući kompanijama da posluju efikasno, usklađeno i bez rizika od pravnih i finansijskih posledica. Naše usluge uključuju:"
            items={[
              "Analiza carinskih propisa i postupaka – Procena usklađenosti vašeg poslovanja sa važećim carinskim zakonima i regulativama.",
              "Klasifikacija robe i tarifiranje – Stručno određivanje tarifnih oznaka (HS kodova) kako biste izbegli nepravilnosti i nepotrebne troškove.",
              "Upravljanje carinskim rizicima – Identifikacija potencijalnih izazova u vezi sa uvozno-izvoznim procedurama i predlaganje rešenja za minimizaciju troškova i kašnjenja.",
              "Carinske olakšice i preferencijalni tretmani – Savetovanje o pogodnostima kao što su povlašćene tarife, oslobađanje od dažbina i primena bilateralnih i multilateralnih sporazuma.",
              "Rešavanje carinskih sporova – Stručne analize i mišljenja u slučaju carinskih kontrola, žalbi ili sudskih postupaka.",
              "Optimizacija carinskih procedura – Implementacija strategija za ubrzavanje carinskih procesa i smanjenje administrativnih prepreka.",
            ]}
          />
        </div>
      </section>
    </main>
  );
}
