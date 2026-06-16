"use client";

import { MediaFrame } from "@/components/media-frame";
import { aboutContent } from "@/lib/catalog";
import { Reveal } from "./reveal";
import { useState } from "react";

const highlights = [
  {
    title: "Бесплатная консультация",
    text: "Вызовем специалиста на объект для замера, подбора типа и дизайна конструкции. Отправьте запрос на email или позвоните нам.",
  },
  {
    title: "Высокое качество изделий",
    text: "Изготовление под заказ с учётом пожеланий архитекторов и дизайнеров. Индивидуальное ценообразование и полная техническая поддержка.",
  },
  {
    title: "Изготовление и монтаж",
    text: "Сопровождаем заказ от первого звонка до установки на объекте. Специалисты по установке в Минске готовы выполнить качественный монтаж.",
  },
];

const aboutSummary =
  "«ГРОМИТСТРОЙ» - проверенный годами производитель прочных изделий из стекла, нержавеющей стали и художественной ковки в Минске. Работаем с частными заказчиками, архитекторами и дизайнерами по всей Беларуси.";

export function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const certificates = aboutContent.certificates;
  const itemsPerSlide = 3;
  const maxIndex = Math.max(0, certificates.length - itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#00509D]">
                О компании
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tighter text-[#1A1A1A] md:text-4xl">
                ГРОМИТСТРОЙ
              </h2>
              <p className="mt-5 max-w-[55ch] text-pretty text-base leading-relaxed text-[#9CA3AF]">
                {aboutSummary}
              </p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {highlights.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="border-l-2 border-[#00509D]/40 pl-5">
                    <h3 className="text-sm font-semibold text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#9CA3AF]">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <Reveal delay={0.1}>
              <MediaFrame
                src={aboutContent.schemaImage}
                alt="Схема работы ГРОМИТСТРОЙ"
                ratio="16 / 10"
                fit="contain"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="rounded-xl bg-[#F8F9FA] p-3 ring-1 ring-inset ring-[#E5E7EB]"
                imageClassName="p-2"
              />
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Сертификаты</h3>
              <div className="mt-4 relative">
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F8F9FA] text-[#9CA3AF] transition-colors hover:bg-[#E5E7EB] hover:text-[#1A1A1A] disabled:opacity-30 disabled:hover:bg-[#F8F9FA] disabled:hover:text-[#9CA3AF]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  
                  <div className="flex-1 overflow-hidden">
                    <div 
                      className="flex gap-3 transition-transform duration-300 ease-out"
                      style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
                    >
                      {certificates.map((cert, i) => (
                        <div key={cert} className="flex-shrink-0 w-[calc(33.333%-0.667rem)] cursor-pointer" onClick={() => setSelectedCertificate(cert)}>
                          <MediaFrame
                            src={cert}
                            alt={`Сертификат ГРОМИТСТРОЙ ${i + 1}`}
                            ratio="3 / 4"
                            fit="contain"
                            sizes="(max-width: 768px) 50vw, 20vw"
                            className="rounded-lg border border-[#E5E7EB] bg-white hover:border-[#00509D]/50 transition-colors"
                            imageClassName="p-2"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={nextSlide}
                    disabled={currentIndex === maxIndex}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F8F9FA] text-[#9CA3AF] transition-colors hover:bg-[#E5E7EB] hover:text-[#1A1A1A] disabled:opacity-30 disabled:hover:bg-[#F8F9FA] disabled:hover:text-[#9CA3AF]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {selectedCertificate && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/90 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <button 
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setSelectedCertificate(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={selectedCertificate} 
            alt="Сертификат в полном размере" 
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
