import Reveal from "./Reveal";
import { WHATSAPP_URL } from "../lib/data";

export default function CTAFinal() {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink-900 py-24 text-white lg:py-32">
      <div className="gold-line absolute inset-x-0 top-0 h-px" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/40 text-gold-400">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12C2 5 6 2 12 2s10 3 10 10-4 10-10 10c-1.4 0-2.7-.2-3.8-.7L2 22l1.2-4.3C2.6 16.3 2 14.4 2 12Z" />
              <path d="M9 9c0 3 3 6 6 6l1.5-1.5-2-2-1 .6a7.4 7.4 0 0 1-3-3l.6-1-2-2L9 9Z" />
            </svg>
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="text-balance font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Dê o primeiro passo para cuidar da sua{" "}
            <span className="gold-shimmer italic">saúde mental</span>.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/70 sm:text-lg">
            Entre em contato para saber mais sobre o atendimento e consultar a disponibilidade de
            horários.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold-500 px-10 py-5 text-base font-semibold uppercase tracking-wider text-ink-900 shadow-[0_12px_40px_rgba(201,162,39,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_18px_50px_rgba(201,162,39,0.55)]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M2 12C2 5 6 2 12 2s10 3 10 10-4 10-10 10c-1.4 0-2.7-.2-3.8-.7L2 22l1.2-4.3C2.6 16.3 2 14.4 2 12Z" />
            </svg>
            Agendar minha consulta
          </a>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-6 text-sm font-light text-white/50">
            Resposta via WhatsApp · Atendimento presencial e por telemedicina
          </p>
        </Reveal>
      </div>
    </section>
  );
}
