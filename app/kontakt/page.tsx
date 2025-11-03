import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function KontaktPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-primary py-[42px] md:py-[45px]"> </div>
      <div className="max-w-[80rem] mx-auto py-8 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8 md:mb-16">
          Kontakt
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-8 md:mb-16 items-center">
          <div className=" space-y-8">
            <div>
              <p className="text-lg leading-relaxed mb-8 text-center">
                Ukoliko imate pitanja ili želite da zakažete termin, slobodno me
                kontaktirajte putem telefona, email-a ili kontakt forme.
                Odgovoriću vam u najkraćem mogućem roku.
              </p>
            </div>

            <ContactInfo />
          </div>

          <div>
            <ContactForm />
          </div>
        </div>

        <div className="bg-secondary/10 p-4 md:p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Zakazivanje termina
          </h3>
          <p className="text-lg leading-relaxed">
            Termini se zakazuju telefonski ili putem email-a. Molim vas da
            prilikom zakazivanja navedete kratki opis razloga dolaska kako bih
            mogla da vam obezbedim odgovarajuće vreme i prostor za razgovor.
          </p>
        </div>
      </div>
    </main>
  );
}
