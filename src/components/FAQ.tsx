import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { FAQS } from "../lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="relative bg-[#f6f3ec] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas frequentes"
          description="Reunimos as respostas para as dúvidas mais comuns sobre o atendimento."
        />

        <div className="space-y-4">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    open ? "border-gold-500/50 shadow-[0_10px_30px_rgba(201,162,39,0.12)]" : "border-neutral-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-display text-lg font-semibold text-ink-900">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border transition-all duration-300 ${
                        open
                          ? "rotate-45 border-gold-500 bg-gold-500 text-ink-900"
                          : "border-neutral-300 text-neutral-500"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm font-light leading-relaxed text-neutral-600">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
