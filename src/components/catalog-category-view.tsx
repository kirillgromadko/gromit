"use client";

import { MediaFrame } from "@/components/media-frame";
import type { CatalogCategory } from "@/lib/catalog";
import { company } from "@/lib/data";
import { Phone } from "@phosphor-icons/react";
import Link from "next/link";
import { ProductGrid } from "./product-grid";
import { Reveal } from "./reveal";

type CatalogCategoryViewProps = {
  category: CatalogCategory;
};

export function CatalogCategoryView({ category }: CatalogCategoryViewProps) {
  const gridColumns =
    category.slug === "perila" ? "4" : category.items.length <= 4 ? "2" : "3";

  return (
    <div className="bg-white pt-24 pb-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <Link
            href="/#catalog"
            className="text-sm text-[#9CA3AF] transition-colors hover:text-[#1A1A1A]"
          >
            ← Каталог
          </Link>
          <h1 className="mt-4 max-w-[22ch] text-balance text-3xl font-semibold tracking-tighter text-[#1A1A1A] md:text-4xl lg:text-5xl">
            {category.title}
          </h1>
          <p className="mt-4 max-w-[58ch] text-pretty text-lg leading-relaxed text-[#1A1A1A]">
            {category.shortDescription}
          </p>
        </Reveal>

        <Reveal className="mt-10" delay={0.05}>
          <MediaFrame
            src={category.coverImage}
            alt={category.title}
            ratio="21 / 9"
            priority
            sizes="100vw"
            className="rounded-xl ring-1 ring-inset ring-[#E5E7EB]"
          />
        </Reveal>

        {(category.intro.length > 0 || category.features?.length) && (
          <Reveal className="mt-10 max-w-[68ch]" delay={0.1}>
            <div className="space-y-4">
              {category.intro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-pretty text-base leading-relaxed text-[#9CA3AF]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {category.features && category.features.length > 0 && (
              <ul className="mt-6 space-y-2.5 border-t border-[#E5E7EB] pt-6">
                {category.features.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-[#1A1A1A]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#00509D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        )}

        {category.items.length > 0 && (
          <div className="mt-14">
            <Reveal>
              <h2 className="text-xl font-semibold text-[#1A1A1A]">
                {category.slug === "perila"
                  ? "Готовые модели"
                  : "Что изготавливаем"}
              </h2>
              <p className="mt-2 max-w-[50ch] text-sm leading-relaxed text-[#9CA3AF]">
                {category.slug === "perila"
                  ? "Выберите понравившийся вариант или пришлите свой эскиз. Сделаем по вашим размерам."
                  : "Каждое изделие делаем под заказ с учётом размеров и особенностей вашего объекта."}
              </p>
            </Reveal>
            <div className="mt-8">
              <ProductGrid items={category.items} columns={gridColumns} />
            </div>
          </div>
        )}

        <Reveal
          className="mt-14 rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] p-6 lg:p-8"
          delay={0.1}
        >
          <h3 className="text-base font-semibold text-[#1A1A1A]">
            Как заказать
          </h3>
          <p className="mt-2 max-w-[50ch] text-pretty text-sm leading-relaxed text-[#9CA3AF]">
            Позвоните или оставьте заявку. Специалист уточнит задачу, приедет на
            замер и назовёт точную стоимость до начала работ.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#00509D] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#004080] active:scale-[0.98]"
            >
              <Phone size={16} weight="bold" />
              Позвонить
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full border border-[#E5E7EB] px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-all hover:border-[#9CA3AF] hover:bg-[#F8F9FA] active:scale-[0.98]"
            >
              Оставить заявку
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
