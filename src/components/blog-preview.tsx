"use client";

import { MediaFrame } from "@/components/media-frame";
import { blogPosts } from "@/lib/catalog";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { Reveal } from "./reveal";

export function BlogPreview() {
  return (
    <section className="border-t border-[#E5E7EB] bg-[#F8F9FA] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tighter text-[#1A1A1A] md:text-4xl">
                Блог
              </h2>
              <p className="mt-4 max-w-[45ch] text-pretty text-base leading-relaxed text-[#9CA3AF]">
                Примеры работ и полезные материалы о перилах и ограждениях.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-[#00509D] transition-colors hover:text-[#004080]"
            >
              Все статьи →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E5E7EB] bg-white transition-colors hover:border-[#00509D]/30"
              >
                <MediaFrame
                  src={post.image}
                  alt={post.title}
                  ratio="16 / 10"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-sm font-semibold leading-snug text-[#1A1A1A]">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#9CA3AF]">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[#00509D]">
                    Читать
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
