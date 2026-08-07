import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { MAPS_URL, WHATSAPP_URL } from "../lib/data";

function CardIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/40 bg-gold-500/10 text-gold-400">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </span>
  );
}

export default function Atendimento() {
  return (
    <section id="atendimento" className="relative overflow-hidden bg-ink-900 py-20 text-white lg:py-28">
      <div className="gold-line absolute inset-x-0 top-0 h-px" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Atendimento"
          title="Como funciona o atendimento"
          description="Opções pensadas para se adequar à sua rotina, sempre com o mesmo cuidado e acolhimento."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 - Presencial */}
          <Reveal delay={0}>
            <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink-800 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/50">
              <CardIcon>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Zm-8 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              </CardIcon>
              <h3 className="font-display text-2xl font-semibold">Consulta Presencial</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-gold-400">
                Atendimento em São Paulo
              </p>
              <address className="mt-6 space-y-1 text-sm font-light not-italic text-white/65">
                <p>Domingos de Moraes, 2781</p>
                <p>14º andar – Vila Mariana</p>
                <p>São Paulo – SP</p>
              </address>
              <div className="mt-7 pt-2">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:border-gold-400 hover:text-gold-300"
                >
                  Como chegar
                </a>
              </div>
            </article>
          </Reveal>

          {/* Card 2 - Telemedicina */}
          <Reveal delay={100}>
            <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink-800 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/50">
              <CardIcon>
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="m8 12 3 3 5-6M7 22h10" />
              </CardIcon>
              <h3 className="font-display text-2xl font-semibold">Telemedicina</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-gold-400">
                Consultas online
              </p>
              <p className="mt-6 text-sm font-light leading-relaxed text-white/65">
                Consultas online com praticidade, privacidade e o mesmo cuidado no atendimento.
              </p>
              <div className="mt-7 flex flex-1 flex-col justify-end pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-ink-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_24px_rgba(201,162,39,0.4)]"
                >
                  Agendar consulta online
                </a>
              </div>
            </article>
          </Reveal>

          {/* Card 3 - Agendamento */}
          <Reveal delay={200}>
            <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink-800 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/50">
              <CardIcon>
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M8 2v4M16 2v4M3 9h18M12 13h.01M8 13h.01M16 13h.01M12 17h.01M8 17h.01M16 17h.01" />
              </CardIcon>
              <h3 className="font-display text-2xl font-semibold">Agende sua consulta</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-gold-400">
                WhatsApp
              </p>
              <p className="mt-6 text-sm font-light leading-relaxed text-white/65">
                Entre em contato pelo WhatsApp para consultar disponibilidade e realizar o
                agendamento.
              </p>
              <div className="mt-7 flex flex-1 flex-col justify-end pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-ink-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_24px_rgba(201,162,39,0.4)]"
                >
                  Falar pelo WhatsApp
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
