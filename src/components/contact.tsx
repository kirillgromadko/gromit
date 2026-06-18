"use client";

import { company } from "@/lib/data";
import { Clock, Envelope, MapPin, Phone, Spinner } from "@phosphor-icons/react";
import { useState } from "react";
import { Reveal } from "./reveal";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
                <p className="mt-4 text-sm text-red-500" role="alert">
                  Ошибка отправки. Попробуйте позже или позвоните нам.
                </p>
              )}
              {status === "sent" && (
                <p className="mt-4 text-sm text-green-600" role="status">
                  Заявка отправна! Мы свяжемся с вами в ближайшее время.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#00509D] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#004080] active:scale-[0.98] disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Spinner size={16} className="animate-spin" />
                    Отправка...
                  </>
                ) : (
                  "Отправить заявку"
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
