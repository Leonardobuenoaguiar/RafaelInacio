import { MAPS_URL, WHATSAPP_URL } from "../lib/data";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink-900 text-white"
      aria-label="Apresentação"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gold-500/10 blur-3xl" />
      <div className="gold-line absolute inset-x-0 top-0 h-px" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-36">
        {/* Text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-500/40 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-gold-300"
            style={{ animation: "fadeIn .8s ease .1s both" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Psiquiatria &amp; Saúde Mental
          </p>

          <h1
            className="text-balance font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl"
            style={{ animation: "fadeIn .8s ease .2s both" }}
          >
            Cuidar da mente <br className="hidden sm:block" />
            também é <span className="gold-shimmer italic">cuidar de você</span>.
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/70 sm:text-lg lg:mx-0"
            style={{ animation: "fadeIn .8s ease .3s both" }}
          >
            Atendimento em Psiquiatria com acolhimento, escuta e acompanhamento
            individualizado.
          </p>

          <p
            className="mt-4 text-sm font-light text-white/55"
            style={{ animation: "fadeIn .8s ease .4s both" }}
          >
            Atendimento presencial e por telemedicina
          </p>

          <div
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animation: "fadeIn .8s ease .45s both" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-ink-900 shadow-[0_10px_30px_rgba(201,162,39,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_16px_40px_rgba(201,162,39,0.5)] sm:w-auto"
            >
              Agende sua consulta
            </a>
            <a
              href="#sobre"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-medium uppercase tracking-wider text-white/90 transition-all duration-300 hover:border-gold-400 hover:text-gold-300 sm:w-auto"
            >
              Conheça o Dr. Rafael
            </a>
          </div>

          {/* Indicators */}
          <div
            className="mt-12 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:mx-auto sm:max-w-md lg:mx-0"
            style={{ animation: "fadeIn .8s ease .55s both" }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 text-gold-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div className="text-left">
                <p className="text-sm font-medium text-white">Presencial</p>
                <p className="text-xs font-light text-white/55">São Paulo – SP</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 text-gold-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <path d="m8 12 3 3 5-6" />
                </svg>
              </span>
              <div className="text-left">
                <p className="text-sm font-medium text-white">Telemedicina</p>
                <p className="text-xs font-light text-white/55">Consultas online</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="relative order-1 lg:order-2"
          style={{ animation: "fadeIn 1s ease .2s both" }}
        >
          <div className="relative mx-auto max-w-sm lg:max-w-md">
            {/* decorative ring */}
            <div className="absolute -inset-4 rounded-[2rem] border border-gold-500/25" />
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-gold-500/30 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-[1.6rem] bg-ink-800 shadow-2xl">
              <img
                src="/images/hero-doctor.png"
                alt="Dr. Rafael Inácio, médico psiquiatra"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-float-slow absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-ink-800/90 px-5 py-3 shadow-xl backdrop-blur"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span className="text-left text-xs">
                <span className="block font-medium text-white">Consultório</span>
                <span className="block font-light text-white/60">Vila Mariana · SP</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
