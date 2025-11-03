import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Spremni ste za promenu?
        </h2>
        <p className="text-xl md:text-2xl mb-10 leading-relaxed">
          Kontaktirajte me i zakažite prvi razgovor. Zajedno ćemo pronaći put
          ka vašim ciljevima.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-background text-primary px-8 py-4 rounded-full text-xl font-semibold hover:bg-background/90 transition-colors shadow-lg"
        >
          Kontaktirajte me
        </Link>
      </div>
    </section>
  );
}
