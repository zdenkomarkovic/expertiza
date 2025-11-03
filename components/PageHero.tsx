import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative h-[70vh] flex items-end justify-start">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-[center_15%]"
          priority
        />
        <div className="absolute inset-0 bg-primary/50" />
      </div>
      <div className="relative px-4 md:px-8 mb-12 md:mb-20 w-[80rem] mx-auto">
        <AnimatedSection>
          <h1 className="text-3xl md:text-6xl font-bold text-background mb-4 md:mb-7">
            {title}
          </h1>
          {subtitle && (
            <p className="text-background md:text-4xl">{subtitle}</p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
