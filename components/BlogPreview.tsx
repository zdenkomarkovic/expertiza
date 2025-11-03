import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";

interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
}

interface Blog {
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: SanityImage;
  publishedAt: string;
}

async function getLatestBlogs(): Promise<Blog[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc)[0...6] {
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt
  }`;

  return await client.fetch(query);
}

export default async function BlogPreview() {
  const blogs = await getLatestBlogs();

  return (
    <section className="py-10 md:py-20 bg-background">
      <div className="max-w-[80rem] mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-10 md:mb-16">
          Najnovije sa bloga
        </h2>
        <div className="grid md:grid-cols-2  gap-4 md:gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug.current}
              href={`/blog/${blog.slug.current}`}
              className="group"
            >
              <article className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow h-full">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  <div className="relative h-[300px] md:h-full">
                    <Image
                      src={
                        blog.mainImage
                          ? urlFor(blog.mainImage).width(600).url()
                          : "/images/arrangement-desk-elements-with-empty-notepad.jpg"
                      }
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors text-left">
                      {blog.title}
                    </h3>
                    <p className="text-lg  mb-4">{blog.excerpt}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
