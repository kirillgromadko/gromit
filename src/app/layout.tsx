import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "ГРОМИТСТРОЙ | Перила и ограждения под ключ в Минске",
  description:
    "Изготовление и монтаж перил и ограждений из нержавеющей стали, стекла, кованого и чёрного металла. Минск и вся Беларусь.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "ГРОМИТСТРОЙ | Перила и ограждения под ключ",
    description:
      "Кованые, стеклянные и нержавеющие конструкции с замером, изготовлением и монтажом.",
    locale: "ru_BY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-[100dvh] bg-white text-[#1A1A1A] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#00509D] focus:px-4 focus:py-2 focus:text-white"
        >
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
