"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle2,
  FileText,
  FlameKindling,
  Car,
  Microscope,
  Shield,
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
    icon: <FlameKindling className="w-8 h-8" />,
    title: "Utvrđivanje uzroka požara, eksplozija i havarija",
    href: "#pozari-eksplozije-havarije",
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title:
      "Trasologija (tragovi oruđa, alata i gazećih površina obuće, obim i uzrok oštećenja, analiza foto i video materijala)",
    href: "#trasologija-opsta",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Trasološka analiza saobraćajnih nezgoda",
    href: "#trasologija-saobracajna",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Utvrđivanje stanja sijalica na vozilima nakon saobraćajne nezgode",
    href: "#stanje-sijalica",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title:
      "Utvrđivanje originalnosti identifikacionih oznaka i identifikacija vozila i radnih mašina",
    href: "#id-oznake-vozila",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Utvrđivanje autentičnosti dokumenata i rukopisa",
    href: "#dokumenta-rukopisi",
  },
];

export default function Vestacenja() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/2147785631.jpg"
            alt="Oblasti veštačenja"
            fill
            className="object-cover"
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              OBLASTI
              <br />
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                VEŠTAČENJA
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-xl md:text-2xl font-semibold text-primary mb-8 text-center">
                U skladu sa edukativnim i iskustvenim kompetencijama, pokrivamo
                sledeće oblasti veštačenja:
              </p>
            </div>
          </FadeInSection>

          {/* Oblasti Cards */}
          <div className="mb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oblasti.map((oblast, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <Link href={oblast.href} className="block h-full">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-gray-300 via-gray-100 h-full p-8 flex flex-col justify-between rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="text-primary mb-3 inline-block"
                        >
                          {oblast.icon}
                        </motion.div>
                        <h3 className="text-lg font-semibold text-primary leading-relaxed">
                          {oblast.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-right">Saznaj više...</p>
                  </motion.div>
                </Link>
              </FadeInSection>
            ))}
          </div>

          {/* Descriptive Text */}
          <FadeInSection>
            <div className=" mx-auto">
              <div className="prose prose-lg max-w-none text-gray-900 space-y-6 leading-relaxed">
                <p>
                  Veštačenje predstavlja stub pravosudnog sistema i istražnih
                  postupaka, omogućavajući sveobuhvatnu analizu i interpretaciju
                  dokaza. Stručnjaci u oblasti veštačenja primenjuju svoje
                  znanje i veštine kako bi odgovorili na ključna pitanja koja se
                  tiču uzroka i posledica različitih akcidenata. Bilo da se radi
                  o saobraćajnim nesrećama, požarima, eksplozijama, ili složenim
                  kriminalističkim slučajevima, veštaci igraju nezamenljivu
                  ulogu.
                </p>

                <p>
                  Kroz detaljno prikupljanje, analiziranje i tumačenje dokaza,
                  veštaci doprinose otkrivanju istine i pravednom rešavanju
                  slučajeva. Njihovi stručni izveštaji često su ključni u
                  pravnim postupcima, pružajući sudijama neophodne informacije
                  za donošenje informisanih odluka. Pored toga, veštaci svojim
                  svedočenjem na sudu pomažu da se razjasne tehnički i naučni
                  aspekti slučajeva, što doprinosi transparentnosti i
                  pravičnosti procesa.
                </p>

                <p>
                  Uloga veštaka nije ograničena samo na rešavanje pojedinačnih
                  slučajeva. Njihovo znanje i analiza pomažu u unapređenju
                  standarda i procedura, čime se povećava bezbednost i smanjuje
                  rizik od budućih incidenata. Kroz edukaciju i prevenciju,
                  veštaci direktno utiču na unapređenje društvene sigurnosti i
                  kvaliteta života.
                </p>

                <p>
                  Sveobuhvatni pristup i posvećenost profesionalaca u oblasti
                  veštačenja čini ih nezamenjivim saveznicima pravosudnog
                  sistema, osiguravajući da pravda bude dostižna i zasnovana na
                  čvrstim dokazima. Njihov rad je od suštinskog značaja za
                  očuvanje pravde, sigurnosti i poverenja u pravne institucije.
                  Subjekti koji su uvučeni u pravni postupak ili koji sami od
                  sebe postanu deo sudskog predmeta i koji dolaze u kontakt s
                  nama u tom kontekstu često ne znaju šta veštaci zapravo rade,
                  koji sistem je u osnovi naših naučno tehničkih metoda rada,
                  ili kakve posledice veštačenje može imati za njih i druge
                  uključene osobe.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Section 1: Požari, eksplozije i havarije */}
          <VestacenjeSection
            id="pozari-eksplozije-havarije"
            title="POŽARI, EKSPLOZIJE I HAVARIJE"
            introText="Poslovi veštačenja u ovoj oblasti obuhvataju:"
            items={[
              "Istraživanje uzroka požara eksplozija i havarija: Sprovođenje detaljnih istraživanja kako bi se utvrdili uzroci i okolnosti nastanka požara ili eksplozije. Ovo uključuje prikupljanje i analizu dokaza, kao što su uzorci iz mesta incidenta, svedočenja, video zapisi i dokumentacija.",
              "Procena štete: Evaluacija opsega materijalne štete prouzrokovane požarom, eksplozijom ili havarijom. Ovaj korak često uključuje rad sa osiguravajućim društvima, vlasnicima imovine i drugim relevantnim stranama.",
              "Analiza opreme i sistema: Provera stanja i funkcionisanja opreme i sistema koji su mogli da doprinesu nastanku incidenta. Ovo uključuje analizu sistema za protivpožarnu zaštitu, sistema za ventilaciju, električnih instalacija i drugih relevantnih komponenti.",
              "Izrada izveštaja: Priprema detaljnih izveštaja koji obuhvataju nalaze istrage, analize i preporuke. Ovi izveštaji se koriste kao osnov za pravne postupke, osiguravajuće zahteve i druge zvanične procedure.",
              "Svedočenje na sudu: Pružanje stručnog mišljenja i svedočenje pred sudom ili drugim zvaničnim telima kao stručni veštak, kako bi se pomoglo u razjašnjavanju okolnosti i uzroka incidenta.",
              "Prevencija i edukacija: Saradnja sa institucijama i organizacijama u cilju unapređenja procedura za prevenciju požara, eksplozija i havarija, kao i edukacija zaposlenih i javnosti o bezbednosnim merama.",
            ]}
          />

          {/* Section 2: Trasologija - Opšta */}
          <VestacenjeSection
            id="trasologija-opsta"
            title="TRASOLOGIJA - OPŠTA"
            introText="Poslovi veštačenja u trasologiji igraju ključnu ulogu u istragama, pomažući istražiteljima da prikupe i analiziraju važne dokaze koji mogu dovesti do rešenja slučaja. Poslovi veštačenja iz oblasti trasologije obuhvataju različite aspekte, i to:"
            items={[
              "Identifikacija i analiza tragova: Utvrđivanje prisustva i vrste tragova na lokaciji koja je predmet istrage. Ovo obuhvata analizu tragova stopala, vozila, oruđa i alata, kao i drugih objekata koji su ostavili tragove.",
              "Rekonstrukcija događaja: Pomoću prikupljenih tragova, veštaci rekonstruišu hronologiju i tok događaja. Ovo je ključno za razumevanje kako se neki događaj odigrao.",
              "Analiza foto i video materijala: Analiza i poboljšanje fotografija i video snimaka: Korišćenje različitih tehnika za poboljšanje kvaliteta slike, kao što su čišćenje, pojačavanje kontrasta, zumiranje i obrada boja, kako bi se dobile jasnije informacije i utvrdio sadržaj, a sve u cilju trasološke identifikacije prisutnih lica i predmeta kao i eventualnog uticaja istih na događaj.",
              "Analiza tragova alata: Proučavanje tragova ostavljenih na objektima ili površinama od strane različitih vrsta alata. Ovo može uključivati mikroskopsku analizu kako bi se identifikovali specifični alati ili oruđe koje je korišćeno.",
              "Uporedna analiza: Poređenje tragova sa referentnim uzorcima kako bi se identifikovao tačan alat ili oruđe korišćeno u incidentu.",
              "Tragovi gazećih površina obuće i pneumatika - Analiza otisaka/utisaka: Proučavanje tragova gazećih površina ostavljenih na različitim površinama, uključujući analizu uzorka gazeće površine, dubine otiska, i drugih karakteristika.",
              "Tragovi gazećih površina obuće i pneumatika - Poređenje i identifikacija: Poređenje prikupljenih otisaka sa uzorcima obuće/pneumatika kako bi se identifikovao model, veličina i eventualno vlasnik.",
            ]}
          />

          {/* Section 3: Trasologija - Saobraćajna */}
          <VestacenjeSection
            id="trasologija-saobracajna"
            title="TRASOLOGIJA - SAOBRAĆAJNA"
            introText="Analiza tragova u saobraćajnim nesrećama:"
            items={[
              "Proučavanje svih pronađenih tragova: Identifikacija, analiza i utvrđivanje međusobne zavisnosti tragova pronađenih mestu nesreće. Ovo uključuje utvrđivanje pravca kretanja subjelkata, detekcija pokušaja kočenja, mesto kontakta, kao i ponašanje subjekata nakon kontakta.",
              "Poređenje uzoraka: Upoređivanje prikupljenih tragova sa referentnim uzorcima kako bi se identifikovao tip i marka vozila, kao i poreklo pronađenih delova, što može pomoći u identifikaciji vozila (u slučaju da je obeglo nakon nezgode).",
              "Modeliranje događaja: Korišćenje prikupljenih tragova i dokaza za kreiranje modela i simulacija saobraćajne nesreće. Ovo pomaže u razumevanju toka događaja i uzroka nesreće.",
              "Izrada izveštaja: Priprema detaljnih izveštaja sa analizom i zaključcima o uzrocima i okolnostima nesreće, koji se koriste kao dokaz u pravnim postupcima.",
              "Proučavanje tragova sudara: Analiza oštećenja i tragova na vozilima kako bi se utvrdio tačan trenutak i mehanizam sudara.",
              "Identifikacija kontakta: Identifikacija mesta kontakta između vozila i drugih objekata ili površina.",
              "Pružanje stručnog mišljenja: Pružanje stručnog mišljenja i svedočenje pred sudom kao veštak u saobraćajnim nesrećama.",
            ]}
          />

          {/* Section 4: Utvrđivanje stanja sijalica */}
          <VestacenjeSection
            id="stanje-sijalica"
            title="UTVRĐIVANJE STANJA SIJALICA"
            introText="Poslovi utvrđivanja stanja sijalica nakon saobraćajne nezgode mogu biti ključni za razrešavanje uzročno posledičnih veza, kao utvrđivanje doprinosa pojedinačnih učesnika u saobraćajnoj nezgodi. U okviru ovih veštačenja je obuhvaćeno:"
            items={[
              "Prikupljanje dokaza - Fotografisanje: Dokumentovanje mesta nezgode i stanja sijalica pre i nakon uklanjanja vozila sa mesta incidenta. Ovo uključuje fotografisanje svih sijalica, njihovo stanje i položaj.",
              "Prikupljanje dokaza - Prikupljanje uzoraka: Uklanjanje sijalica sa vozila za dalju analizu u laboratoriji, uz poštovanje svih propisa i procedura za rukovanje dokazima.",
              "Vizuelna inspekcija - Proučavanje fizičkog stanja: Pregledanje sijalica na prisustvo vidljivih oštećenja, kao što su prelomi, ogrebotine, tragovi topljenja ili promene boje.",
              "Vizuelna inspekcija - Utvrđivanje stanja filamenta: Analiza filamenta unutar sijalica da bi se utvrdilo da li je filament prekinut zbog mehaničkog udara ili toplote usled paljenja sijalice.",
              "Laboratorijska analiza - Mikroskopska analiza: Korišćenje mikroskopa za detaljnu analizu filamenta i staklenih delova sijalica, kako bi se identifikovale fine pukotine ili tragovi nagorevanja.",
              "Laboratorijska analiza - Analiza materijala: Provera materijala sijalica na prisustvo tragova zagrevanja ili hemijskih promena, što može ukazivati na to da su sijalice bile upaljene u trenutku nesreće.",
              "Rekonstrukcija događaja - Simulacija uslova: Rekreacija uslova saobraćajne nezgode u kontrolisanim laboratorijskim uslovima kako bi se proučilo ponašanje sijalica pod različitim scenarijima.",
              "Rekonstrukcija događaja - Analiza rezultata: Upoređivanje laboratorijskih rezultata sa prikupljenim dokazima i analizom sa mesta nezgode kako bi se utvrdilo stanje sijalica u trenutku sudara.",
              "Izrada izveštaja - Dokumentacija nalaza: Priprema detaljnih izveštaja sa nalazima istraživanja, analizom i zaključcima o stanju sijalica u trenutku saobraćajne nezgode.",
              "Izrada izveštaja - Priprema za svedočenje: Pružanje stručnog mišljenja i priprema za potencijalno svedočenje pred sudom ili drugim zvaničnim telima.",
            ]}
          />

          {/* Section 5: Veštačenja ID oznaka na vozilima i identifikacija */}
          <VestacenjeSection
            id="id-oznake-vozila"
            title="VEŠTAČENJA ID OZNAKA NA VOZILIMA I IDENTIFIKACIJA"
            introText="U svetu gde je krađa vozila i prevara sa VIN oznakama sve prisutnija, veštačenje identifikacionih oznaka igra ključnu ulogu u očuvanju bezbednosti i pravde. Svaka VIN oznaka je kao otisak prsta za vozilo - jedinstvena i nezamenljiva. VIN (Vehicle Identification Number) je jedinstveni identifikacioni broj dodeljen svakom motornom vozilu kada je proizvedeno. Najčešće se sastoji od 17 karaktera koji uključuju brojeve i slova, a pruža ključne informacije kao što su proizvođač, model, godina proizvodnje, i serijski broj vozila. Korišćenje i proveravanje ovih oznaka omogućava vlastima, osiguravajućim kućama i vlasnicima vozila da prate istoriju vozila i potvrde njegovu autentičnost. Ključni elementi veštačenja VIN-a su:"
            items={[
              "Fizička Inspekcija: Fizička provera lokacije VIN oznake na vozilu. To uključuje proveru ne samo pločica sa oznakama, već i graviranja/utiskivanja na šasiji.",
              "Provera Autentičnosti: Provera autentičnosti VIN oznake putem upoređivanja sa bazama podataka proizvođača i evidencijama vozila.",
              "Tehnička Analiza: Analiza tehničkih karakteristika oznake, uključujući font, veličinu, položaj i dubinu graviranja, kako bi se uočile eventualne nepravilnosti.",
              "Provera Dokumentacije: Upoređivanje VIN oznaka sa dokumentacijom vozila kao što su saobraćajne dozvole i sertifikati o vlasništvu.",
            ]}
          />

          {/* Section 6: Dokumenta & rukopisi */}
          <VestacenjeSection
            id="dokumenta-rukopisi"
            title="DOKUMENTA & RUKOPISI"
            introText="Veštačenje rukopisa i dokumenata predstavlja ključni proces u oblasti forenzike, koji omogućava precizno i pouzdano rešavanje brojnih pravnih i kriminalističkih slučajeva. Ovaj sofisticirani metod pruža neophodne dokaze koji se koriste u sudskim procesima, a njegova važnost ne može biti dovoljno naglašena. Veštačenje rukopisa uključuje analizu različitih aspekata pisanja, kao što su stil, brzina, pritisak i specifične karakteristike slova. Veštaci koriste savremene tehnologije i metode kako bi identifikovali autora rukopisa ili utvrdili autentičnost dokumenata. S druge strane, veštačenje dokumenata podrazumeva ispitivanje fizičkih i hemijskih svojstava papira, mastila, pečata i drugih obeležja. Ovaj proces omogućava identifikaciju falsifikovanih dokumenata, kao i utvrđivanje postojanja naknadnih izmena, što može imati presudnu važnost u sudskim postupcima. Rad po ovoj oblasti veštačenja obuhvata:"
            items={[
              "Prijem uzorka: Prikupljanje rukopisa ili dokumenata koji će biti analizirani. Obezbeđivanje originalnih i/ili sumnjivih uzoraka.",
              "Pregled i preliminarna analiza: Vizuelni pregled dokumenata kako bi se identifikovale očigledne razlike ili sumnjivi elementi. Utvrđivanje relevantnih karakteristika za dalju analizu.",
              "Priprema uzoraka: Digitalizacija dokumenata radi detaljnije analize. Priprema fizičkih uzoraka za ispitivanje pod mikroskopom ili drugim alatima.",
              "Analiza rukopisa: Proučavanje specifičnih karakteristika pisanja, kao što su stil, brzina, pritisak i oblik slova. Upoređivanje uzorka sa referentnim uzorcima kako bi se utvrdile sličnosti i razlike.",
              "Fizičko i hemijsko ispitivanje dokumenata: Analiza fizičkih svojstava papira, mastila, pečata i drugih obeležja. Ispitivanje hemijskih komponenti korišćenih materijala kako bi se utvrdila njihova autentičnost i starost.",
              "Kombinovana analiza: Integracija rezultata dobijenih analizom rukopisa i dokumenata. Komparativna analiza sa poznatim uzorcima ili dokumentima radi dodatne potvrde.",
              "Izrada izveštaja: Dokumentovanje svih faza analize i rezultata. Priprema detaljnog izveštaja koji sadrži zaključke i preporuke.",
              "Prezentacija nalaza: Predstavljanje nalaza u sudskim ili drugim zvaničnim postupcima. Pružanje stručnog svedočenja i odgovaranje na pitanja vezana za analizu.",
            ]}
          />
        </div>
      </section>
    </main>
  );
}
