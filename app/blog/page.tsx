import BlogCard from "@/components/BlogCard";
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

async function getBlogs(): Promise<Blog[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt
  }`;

  return await client.fetch(query);
}

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen pb-16">
      <div className="bg-primary py-[42px] md:py-[45px]"> </div>
      <div className="max-w-[80rem] mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Blog
        </h1>

        <div className="grid grid-cols-2 gap-12">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug.current}
              naslov={blog.title}
              slug={blog.slug.current}
              opis={blog.excerpt || ""}
              slika={
                blog.mainImage
                  ? urlFor(blog.mainImage).width(800).url()
                  : "/images/arrangement-desk-elements-with-empty-notepad.jpg"
              }
              datum={new Date(blog.publishedAt).toLocaleDateString("sr-RS")}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
