import Reveal from "./Reveal";
import { MAPS_URL, WHATSAPP_URL } from "../lib/data";

export default function PresencialTelemedicina() {
  return (
    <section id="modalidades" className="bg-[#faf8f3] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-gold-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-600">
              Modalidades
            </span>
            <span className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="text-balance font-display text-3xl font-medium text-ink-900 sm:text-4xl">
            Escolha a forma de atendimento
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Presencial */}
          <Reveal delay={0}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(201,162,39,0.14)]">
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold-100" />
              <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-700">
                Presencial
              </span>
              <h3 className="font-display text-3xl font-semibold text-ink-900">Atendimento presencial</h3>
              <div className="mt-6 flex items-start gap-3 text-neutral-600">
                <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gold-500/15 text-gold-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <address className="space-y-0.5 text-sm font-light not-italic">
                  <p>Domingos de Moraes, 2781</p>
                  <p>14º andar – Vila Mariana</p>
                  <p>São Paulo – SP</p>
                </address>
              </div>
              <div className="mt-8 flex-1" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink-900/20 px-6 py-3.5 text-sm font-medium uppercase tracking-wider text-ink-900 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-700"
              >
                Ver localização
              </a>
            </div>
          </Reveal>

          {/* Telemedicina */}
          <Reveal delay={120}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink-900 p-8 text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold-500/20" />
              <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-300">
                Telemedicina
              </span>
              <h3 className="font-display text-3xl font-semibold">Atendimento online</h3>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/70">
                Consultas por telemedicina para proporcionar praticidade e comodidade, respeitando
                as necessidades de cada paciente.
              </p>
              <div className="mt-8 flex-1" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_24px_rgba(201,162,39,0.4)]"
              >
                Agendar atendimento
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
