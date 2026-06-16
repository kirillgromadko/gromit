"use client";

import { trustPoints } from "@/lib/data";
import {
  Clock,
  Eye,
  Hammer,
  MapPin,
  ShieldCheck,
  Target,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "./reveal";

const iconMap: Record<(typeof trustPoints)[number]["icon"], Icon> = {
  hammer: Hammer,
  eye: Eye,
  target: Target,
  clock: Clock,
  shield: ShieldCheck,
  map: MapPin,
};

export function Trust() {
  return (
    <section className="border-t border-[#E5E7EB] bg-[#F8F9FA] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tighter text-[#1A1A1A] md:text-4xl">
            Почему нам доверяют
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#E5E7EB] sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point, i) => {
            const IconComponent = iconMap[point.icon];
            return (
              <Reveal key={point.title} delay={i * 0.05}>
                <div className="flex h-full flex-col bg-white p-6 lg:p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#00509D]/10 text-[#00509D]">
                    <IconComponent size={20} weight="duotone" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-[#9CA3AF]">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
