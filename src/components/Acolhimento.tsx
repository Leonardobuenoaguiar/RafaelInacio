import Reveal from "./Reveal";
import { WHATSAPP_URL } from "../lib/data";

export default function Acolhimento() {
  return (
    <section
      id="acolhimento"
      className="relative overflow-hidden bg-ink-900 py-24 text-white lg:py-32"
    >
      <div className="gold-line absolute inset-x-0 top-0 h-px" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="mx-auto mb-8 block h-12 w-px bg-gradient-to-b from-transparent to-gold-500" />
          <span className="font-display text-6xl leading-none text-gold-500/50">“</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="text-balance font-display text-3xl font-medium leading-snug sm:text-4xl lg:text-5xl">
            Cuidado que transforma. <br className="hidden sm:block" />
            <span className="gold-shimmer italic">Presença que acolhe.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-2xl text-base font-light leading-relaxed text-white/70 sm:text-lg">
            Cada pessoa possui uma história, necessidades e momentos diferentes. O atendimento busca
            oferecer um espaço de escuta e cuidado individualizado.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-ink-900 shadow-[0_10px_30px_rgba(201,162,39,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_16px_40px_rgba(201,162,39,0.5)]"
          >
            Agende sua consulta
          </a>
        </Reveal>
      </div>
    </section>
  );
}
