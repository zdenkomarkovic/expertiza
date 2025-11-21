"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Award,
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
  Microscope,
  Shield,
  Scale,
} from "lucide-react";
import TeamSection from "@/components/TeamSection";
import ReferencesSection from "@/components/ReferencesSection";

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

const expertise = [
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Inženjerska veštačenja",
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Sudski procesi",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Forenzička analiza",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Tehnička ispitivanja",
  },
];

export default function ONama() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/14267.jpg"
            alt="O nama"
            fill
            className="object-cover object-[50%_30%]"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              VAŠ PARTNER ZA STRUČNE
              <br />
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                EKSPERTIZE, VEŠTAČENJA I PROCENE
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className=" mx-auto">
              <div className="prose prose-lg max-w-none text-gray-900 space-y-3 leading-relaxed">
                <p className="md:text-2xl font-semibold mb-8">
                  Ekspertski tim specijalizovan za stručne ekspertize i
                  veštačenja iz oblasti inženjerskih nauka predstavlja ključnog
                  partnera u rešavanju kompleksnih tehničkih pitanja.
                </p>{" "}
                <p>
                  Naš rad obuhvata ekspertize, analize i veštačenja koje su od
                  suštinskog značaja za potrebe suda i nadležnih organa,
                  osiguravajući tačne i objektivne zaključke zasnovane na
                  iskustvenim i naučnim metodama.
                </p>
                <p>
                  Pružamo širok spektar usluga, uključujući inženjerska
                  veštačenja, analize tehničkih projekata, nadzor nad
                  izvođenjem, procenu šteta i uzroka nesreća, kao i forenzička
                  ispitivanja u mašinstvu, elektro i mašinskom inženjeringu,
                  trasologiji i drugim tehničkim i forenzičkim oblastima.
                </p>
                <p>
                  Ekspertiza je neophodna kako bi se osiguralo da svi aspekti
                  projektovanja i nadzora budu u skladu sa važećim propisima i
                  standardima.
                </p>
                <p>
                  Veštačenja i analize koje sprovodimo često se koriste u
                  sudskim procesima, gde je potrebno utvrditi tačne uzroke
                  tehničkih problema i odgovornosti. Svaki izveštaj veštaka je
                  pripremljen sa najvišim standardima stručnosti i
                  objektivnosti, pružajući ključne dokaze tokom sudske parnice.
                </p>
                <p>
                  Zahvaljujući našem visokom nivou stručnosti i iskustva,
                  nadležni organi mogu doneti ispravne odluke na osnovu
                  preciznih podataka.
                </p>
                <p>
                  Pored standardnih ekspertiza, tim eksperata se bavi i
                  forenzičkom analizom inženjerskih sistema, čime doprinosi
                  boljem razumevanju složenih tehničkih izazova.
                </p>
                <p>
                  Naš rad omogućava ne samo rešavanje trenutnih problema, već i
                  preventivno delovanje u cilju unapređenja sigurnosti i
                  pouzdanosti tehničkih rešenja.
                </p>
                <p>
                  Kombinacijom znanja, iskustva u najsloženijim predmetima i
                  moderne tehnologije, ovaj tim pruža usluge od neprocenjive
                  vrednosti za sve koji se oslanjaju na precizna i objektivna
                  veštačenja i analize.
                </p>
                <p className="text-xl md:text-2xl font-semibold text-primary mt-8">
                  Bilo da su u pitanju potrebe suda, nadležnih organa ili
                  privatnog sektora, stručne ekspertize ovog tima garantuju
                  visok nivo profesionalizma i pouzdanosti.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Expertise Cards */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-4 inline-block"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Naše Vrednosti
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Stručnost",
                description:
                  "Visoko kvalifikovani eksperti sa dugogodišnjim iskustvom",
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Preciznost",
                description:
                  "Tačne i objektivne analize zasnovane na naučnim metodama",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Pouzdanost",
                description: "Partner od poverenja za sudove i nadležne organe",
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Inovativnost",
                description: "Primena najnovijih tehnologija i metoda",
              },
            ].map((value, index) => (
              <FadeInSection key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-4 inline-block"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-gray-900">{value.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
      {/* References Section */}
      <ReferencesSection />
    </main>
  );
}
