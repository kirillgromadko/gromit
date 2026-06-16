"use client";

import { company } from "@/lib/data";
import { Clock, Envelope, MapPin, Phone } from "@phosphor-icons/react";
import { useState } from "react";
import { Reveal } from "./reveal";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    if (!name.trim() || !phone.trim()) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Заявка с сайта от ${name}`);
    const body = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\n\n${message || "Без комментария"}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contact" className="border-t border-[#E5E7EB] bg-[#F8F9FA] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tighter text-[#1A1A1A] md:text-4xl">
              Оставить заявку
            </h2>
            <p className="mt-4 max-w-[45ch] text-base leading-relaxed text-[#9CA3AF]">
              Позвоните или отправьте заявку. Специалист свяжется с вами,
              проконсультирует и рассчитает стоимость изделия.
            </p>

            <ul className="mt-10 space-y-5">
              <li>
                <a
                  href={company.phoneHref}
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00509D]/10 text-[#00509D] transition-colors group-hover:bg-[#00509D]/20">
                    <Phone size={20} />
                  </span>
                  <span>
                    <span className="block text-xs text-[#9CA3AF]">Телефон</span>
                    <span className="text-base font-medium text-[#1A1A1A]">
                      {company.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00509D]/10 text-[#00509D] transition-colors group-hover:bg-[#00509D]/20">
                    <Envelope size={20} />
                  </span>
                  <span>
                    <span className="block text-xs text-[#9CA3AF]">Email</span>
                    <span className="text-base font-medium text-[#1A1A1A]">
                      {company.email}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00509D]/10 text-[#00509D]">
                  <Clock size={20} />
                </span>
                <span>
                  <span className="block text-xs text-[#9CA3AF]">Режим работы</span>
                  <span className="text-base font-medium text-[#1A1A1A]">
                    {company.hours}
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00509D]/10 text-[#00509D]">
                  <MapPin size={20} />
                </span>
                <span>
                  <span className="block text-xs text-[#9CA3AF]">Адрес</span>
                  <span className="text-base font-medium text-[#1A1A1A]">
                    {company.city}, {company.address}
                  </span>
                  <span className="mt-0.5 block text-sm text-[#9CA3AF]">
                    {company.region}
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-[#E5E7EB] bg-white p-6 lg:p-8"
              noValidate
            >
              <div className="space-y-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#1A1A1A]">
                    Ваше имя
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#00509D]/50 focus:outline-none focus:ring-2 focus:ring-[#00509D]/20"
                    placeholder="Иван"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-[#1A1A1A]">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#00509D]/50 focus:outline-none focus:ring-2 focus:ring-[#00509D]/20"
                    placeholder="+375 (29) 000-00-00"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#1A1A1A]">
                    Комментарий
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="resize-none rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#00509D]/50 focus:outline-none focus:ring-2 focus:ring-[#00509D]/20"
                    placeholder="Опишите задачу: тип изделия, размеры, адрес объекта"
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-400" role="alert">
                  Заполните имя и телефон.
                </p>
              )}
              {status === "sent" && (
                <p className="mt-4 text-sm text-[#00509D]" role="status">
                  Откроется почтовый клиент для отправки заявки.
                </p>
              )}

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-[#00509D] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#004080] active:scale-[0.98]"
              >
                Отправить заявку
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
