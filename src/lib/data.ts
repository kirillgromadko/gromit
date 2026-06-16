import { catalogCategories } from "./catalog";

export const company = {
  name: "ГРОМИТСТРОЙ",
  tagline: "Перила и ограждения под ключ",
  phone: "+375 (29) 163-88-94",
  phoneHref: "tel:+375291638894",
  email: "ooogromit@mail.ru",
  emailHref: "mailto:ooogromit@mail.ru",
  hours: "Пн–Вс, 8:00–21:00",
  city: "Минск",
  address: "ул. Якубова 80, офис 14",
  region: "Работаем по всей Беларуси",
} as const;

export const catalogNavLinks = catalogCategories.map((c) => ({
  label: c.navLabel,
  href: `/catalog/${c.slug}`,
}));

export const navLinks = [
  { label: "О нас", href: "/#about" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/#contact" },
] as const;

export const trustPoints = [
  {
    title: "Опыт работ",
    description:
      "Наш опыт работы позволяет изготавливать изделия любой сложности.",
    icon: "hammer" as const,
  },
  {
    title: "Внимательность",
    description:
      "При изготовлении изделий учитываем все пожелания заказчика.",
    icon: "eye" as const,
  },
  {
    title: "Точность",
    description:
      "Цену озвучиваем перед изготовлением, такой она и остаётся до сдачи изделия.",
    icon: "target" as const,
  },
  {
    title: "Оперативность",
    description:
      "Делаем качественно и быстро, передаём изделие точно в срок.",
    icon: "clock" as const,
  },
  {
    title: "Гарантия",
    description: "На все изделия мы предоставляем гарантию.",
    icon: "shield" as const,
  },
  {
    title: "География клиентов",
    description: "Работаем и выезжаем к клиентам по всей Беларуси.",
    icon: "map" as const,
  },
] as const;
