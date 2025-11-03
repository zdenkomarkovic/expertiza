import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  naslov: string;
  slug: string;
  opis: string;
  slika: string;
  datum: string;
}

export default function BlogCard({
  naslov,
  slug,
  opis,
  slika,
  datum,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group">
      <article className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow h-full">
        <div className="grid md:grid-cols-2 gap-0 h-full">
          <div className="relative h-[300px] md:h-full">
            <Image
              src={slika}
              alt={naslov}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-4 flex flex-col justify-center">
            <p className="text-sm text-muted-foreground mb-1">
              {new Date(datum).toLocaleDateString("sr-RS", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors text-left">
              {naslov}
            </h2>
            <p className="text-lg mb-4">{opis}</p>
            <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
              Pročitaj više
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
