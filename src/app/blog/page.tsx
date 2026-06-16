import { MediaFrame } from "@/components/media-frame";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Reveal } from "@/components/reveal";
import { blogPosts } from "@/lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Блог | ГРОМИТСТРОЙ",
  description: "Статьи и примеры работ ГРОМИТСТРОЙ.",
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white pt-24 pb-20 lg:pt-28 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h1 className="text-balance text-3xl font-semibold tracking-tighter text-[#1A1A1A] md:text-4xl">
              Блог
            </h1>
            <p className="mt-4 max-w-[50ch] text-pretty text-base leading-relaxed text-[#9CA3AF]">
              Примеры работ и полезные материалы о перилах, ограждениях и
              металлоконструкциях.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E5E7EB] bg-white transition-colors hover:border-[#00509D]/30"
                >
                  <MediaFrame
                    src={post.image}
                    alt={post.title}
                    ratio="16 / 10"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="text-base font-semibold leading-snug text-[#1A1A1A]">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#9CA3AF]">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 text-xs font-medium text-[#00509D]">
                      Читать статью →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
