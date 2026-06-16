"use client";

import { catalogCategories } from "@/lib/catalog";
import { MediaFrame } from "@/components/media-frame";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { Reveal } from "./reveal";

export function Catalog() {
  return (
    <section id="catalog" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tighter text-[#1A1A1A] md:text-4xl">
            Наш каталог
          </h2>
          <p className="mt-4 max-w-[55ch] text-pretty text-base leading-relaxed text-[#9CA3AF]">
            Семь направлений: от перил и ограждений до лазерной резки и монтажа
            на объекте. Выберите раздел, чтобы посмотреть примеры работ.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {catalogCategories.map((category, i) => (
            <Reveal key={category.slug} delay={i * 0.04} className="h-full">
              <Link
                href={`/catalog/${category.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] transition-colors hover:border-[#00509D]/30 hover:bg-white"
              >
                <MediaFrame
                  src={category.coverImage}
                  alt={category.title}
                  ratio="16 / 10"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="shrink-0"
                  imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold leading-snug text-[#1A1A1A]">
                        {category.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                        {category.shortDescription}
                      </p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#1A1A1A] transition-all group-hover:border-[#00509D]/40 group-hover:bg-[#00509D]/10">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  {category.items.length > 0 && (
                    <p className="mt-4 text-xs font-medium text-[#00509D]">
                      {category.items.length}{" "}
                      {category.slug === "perila" ? "моделей" : "позиций"}
                    </p>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
