import { MediaFrame } from "@/components/media-frame";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Reveal } from "@/components/reveal";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/lib/catalog";
import { company } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Блог" };

  return {
    title: `${post.title} | ГРОМИТСТРОЙ`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <Navigation />
      <main className="bg-white pt-24 pb-20 lg:pt-28 lg:pb-28">
        <article className="mx-auto max-w-3xl px-4 lg:px-8">
          <Reveal>
            <Link
              href="/blog"
              className="text-sm text-[#9CA3AF] transition-colors hover:text-[#1A1A1A]"
            >
              ← Блог
            </Link>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tighter text-[#1A1A1A] md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[#9CA3AF]">
              {post.excerpt}
            </p>
          </Reveal>

          <Reveal className="mt-8" delay={0.05}>
            <MediaFrame
              src={post.image}
              alt={post.title}
              ratio="16 / 10"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="rounded-xl ring-1 ring-inset ring-[#E5E7EB]"
            />
          </Reveal>

          <Reveal className="mt-10 space-y-5" delay={0.1}>
            {post.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-pretty text-base leading-relaxed text-[#1A1A1A]"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal
            className="mt-12 rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] p-6"
            delay={0.15}
          >
            <p className="text-pretty text-base leading-relaxed text-[#1A1A1A]">
              Хотите такое же решение для своего объекта? Оставьте заявку или
              позвоните нам.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={company.phoneHref}
                className="inline-flex items-center rounded-full bg-[#00509D] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#004080] active:scale-[0.98]"
              >
                Позвонить
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full border border-[#E5E7EB] px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-all hover:border-[#9CA3AF] hover:bg-[#F8F9FA]"
              >
                Оставить заявку
              </Link>
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
