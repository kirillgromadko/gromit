"use client";

import { images } from "@/lib/images";
import { company } from "@/lib/data";
import { ArrowRight, Phone } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative h-[100dvh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Перила из нержавеющей стали"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 lg:px-8">
        <div className="flex max-w-xl flex-col justify-center">
          <motion.p
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#00509D]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Минск и вся Беларусь
          </motion.p>

          <motion.h1
            className="text-balance text-4xl font-semibold tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl lg:leading-[1.05]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Нержавеющие перила и ограждения под ключ
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[42ch] text-pretty text-lg leading-relaxed text-[#4B5563]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Кованые, стеклянные и из нержавеющей стали. Бесплатный замер,
            изготовление и монтаж на объекте. Ежедневно с 8:00 до 21:00.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#00509D] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#00509D]/25 transition-all hover:bg-[#004080] hover:shadow-xl hover:shadow-[#00509D]/30 active:scale-[0.98]"
            >
              <Phone size={16} weight="bold" />
              Позвонить
            </a>
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/20 bg-white/80 px-7 py-3.5 text-sm font-medium text-[#1A1A1A] backdrop-blur-sm transition-all hover:bg-white hover:border-[#1A1A1A]/30 active:scale-[0.98]"
            >
              Смотреть каталог
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
