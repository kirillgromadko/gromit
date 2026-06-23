"use client";

import { catalogNavLinks, company, navLinks } from "@/lib/data";
import { images } from "@/lib/images";
import { CaretDown, List, Phone, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E5E7EB] bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:h-16 lg:px-8"
        aria-label="Основная навигация"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <div className="relative mr-1">
            <Image
              src={images.logo}
              alt={`Логотип ${company.name}`}
              width={140}
              height={56}
              className="h-10 w-auto object-contain transition-opacity group-hover:opacity-90 sm:h-12 lg:h-14"
              priority
            />
          </div>
          <span className="text-sm font-semibold tracking-wide text-[#1A1A1A] sm:text-base lg:text-lg">
            {company.name}
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-6 xl:gap-7 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setCatalogOpen(true)}
            onMouseLeave={() => setCatalogOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-base text-[#9CA3AF] transition-colors hover:text-[#1A1A1A]"
              aria-expanded={catalogOpen}
            >
              Каталог
              <CaretDown
                size={12}
                className={`transition-transform ${catalogOpen ? "rotate-180" : ""}`}
              />
            </button>
            {catalogOpen && (
              <div className="absolute left-0 top-full z-50 w-56 pt-2">
                <div className="rounded-xl border border-[#E5E7EB] bg-white p-2 shadow-xl">
                  {catalogNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-sm text-[#1A1A1A] transition-colors hover:bg-[#F8F9FA]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-base text-[#9CA3AF] transition-colors hover:text-[#1A1A1A]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-[#00509D] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#004080] active:scale-[0.98] sm:flex"
          >
            <Phone size={16} weight="bold" />
            Позвонить
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] text-[#1A1A1A] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#E5E7EB] bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            <p className="px-4 pt-2 text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
              Каталог
            </p>
            {catalogNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-2.5 text-sm text-[#1A1A1A] transition-colors hover:bg-[#F8F9FA]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 border-t border-[#E5E7EB]" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm text-[#1A1A1A] transition-colors hover:bg-[#F8F9FA]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={company.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#00509D] px-5 py-3 text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              <Phone size={16} weight="bold" />
              Позвонить
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
