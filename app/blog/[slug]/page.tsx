import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import ShareButton from "@/components/ShareButton";

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
  content: Block[];
}

interface Block {
  _key: string;
  _type: string;
  children?: Child[];
  style?: string;
  [key: string]: unknown;
}

interface Child {
  _key: string;
  _type: string;
  text?: string;
  [key: string]: unknown;
}

async function getBlog(slug: string): Promise<Blog | null> {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    content
  }`;

  return await client.fetch(query, { slug });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {};
  }

  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://ivana-psiholog.com"}/blog/${slug}`;
  const imageUrl = blog.mainImage
    ? urlFor(blog.mainImage).width(1200).url()
    : "";

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: url,
      type: "article",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
      publishedTime: blog.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  // Ukloni hard line breaks UNUTAR svakog bloka (pasusa), ali ne između blokova
  const processedContent = blog.content.map((block) => {
    if (block._type === "block" && block.children) {
      return {
        ...block,
        children: block.children.map((child) => {
          if (child._type === "span" && typeof child.text === "string") {
            return {
              ...child,
              text: child.text.replace(/\n/g, " "),
            };
          }
          return child;
        }),
      };
    }
    return block;
  });

  return (
    <main className="min-h-screen pb-16">
      <div className="w-full relative h-[60dvh] flex items-end justify-start">
        {blog.mainImage && (
          <Image
            src={urlFor(blog.mainImage).width(1200).url()}
            alt={blog.title}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative px-4 md:px-8 mb-12 md:mb-20 w-[80rem] mx-auto text-background">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 hover:text-background/60 transition-colors mb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Nazad na blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
          <div className="flex items-center justify-between">
            <p className="text-sm">
              {new Date(blog.publishedAt).toLocaleDateString("sr-RS", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <ShareButton title={blog.title} slug={slug} />
          </div>
        </div>
      </div>

      <div className="max-w-[80rem] mx-auto px-4 md:px-8 py-8 md:py-14">
        <article className="w-full">
          <div className="space-y-6 text-lg leading-relaxed text-foreground">
            <PortableText
              value={processedContent}
              components={{
                block: {
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                      {children}
                    </h2>
                  ),
                  normal: ({ children }) => <p className=" ">{children}</p>,
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-bold">{children}</strong>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                  underline: ({ children }) => (
                    <u className="underline">{children}</u>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc pl-6 space-y-3">{children}</ul>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => <li>{children}</li>,
                },
                types: {
                  image: ({ value }) => (
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden my-8">
                      <Image
                        src={urlFor(value).width(1200).url()}
                        alt={value.alt || "Blog image"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ),
                },
              }}
            />
          </div>
        </article>
      </div>
    </main>
  );
}
