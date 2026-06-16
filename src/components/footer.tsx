import { catalogNavLinks, company, navLinks } from "@/lib/data";
import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#1A1A1A] py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <Image
                src={images.logo}
                alt={`Логотип ${company.name}`}
                width={120}
                height={48}
                className="-mr-2 h-11 w-auto object-contain"
              />
              <span className="text-sm font-semibold tracking-wide text-white">
                {company.name}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#9CA3AF]">
              Перила, ограждения и металлоконструкции под ключ в Минске и по
              всей Беларуси.
            </p>
          </div>

          <nav aria-label="Каталог в подвале">
            <p className="text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
              Каталог
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {catalogNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Навигация в подвале">
            <p className="text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
              Компания
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm text-[#9CA3AF]">
            <p>
              {company.city}, {company.address}
            </p>
            <a
              href={company.phoneHref}
              className="mt-3 block text-white transition-colors hover:text-white"
            >
              {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="mt-1 block transition-colors hover:text-white"
            >
              {company.email}
            </a>
            <p className="mt-2 text-[#9CA3AF]">{company.hours}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-[#9CA3AF]">
          © 2018–{year} {company.name}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
