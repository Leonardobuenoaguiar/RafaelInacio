import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FEATURES = [
  {
    title: "Atendimento individualizado",
    text: "Cada cuidado é planejado a partir das necessidades de cada pessoa.",
    icon: (
      <path d="M12 2a7 7 0 0 1 4.5 12.3c1.6.7 3.5 2 3.5 4.7v3h-16v-3c0-2.7 1.9-4 3.5-4.7A7 7 0 0 1 12 2Zm0 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    ),
  },
  {
    title: "Atendimento presencial",
    text: "Consultas em consultório acolhedor em São Paulo – SP.",
    icon: (
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Zm-8 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    ),
  },
  {
    title: "Telemedicina",
    text: "Consultas online com a mesma atenção e privacidade.",
    icon: (
      <rect x="2" y="6" width="20" height="12" rx="2" />
    ),
  },
  {
    title: "Ambiente acolhedor",
    text: "Espaço pensado para que você se sinta ouvido e à vontade.",
    icon: (
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
    ),
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative bg-[#faf8f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Sobre o Doutor"
          title="Conheça o Dr. Rafael Inácio"
          description="Dr. Rafael Inácio é médico psiquiatra, com atendimento presencial em São Paulo e também por telemedicina. Seu trabalho é baseado em uma abordagem individualizada, com escuta, acolhimento e atenção às necessidades de cada paciente."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full border border-gold-500/30" />
            <div className="absolute -bottom-6 -right-4 hidden h-32 w-32 rounded-full border border-gold-500/30 sm:block" />
            <div className="relative overflow-hidden rounded-[1.6rem] bg-ink-800 shadow-2xl">
              <img
                src="/images/about-doctor.png"
                alt="Retrato profissional do Dr. Rafael Inácio"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-gold-500/30 bg-white/95 px-6 py-5 shadow-xl backdrop-blur">
              <p className="font-display text-2xl font-semibold text-ink-900">Dr. Rafael Inácio</p>
              <p className="mt-0.5 text-sm font-medium uppercase tracking-[0.18em] text-gold-600">
                Médico Psiquiatra
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 border-t border-neutral-200 pt-3 text-sm text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-gold-500" /> CRM-SP 189212
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-gold-500" /> RQE 102285
                </span>
              </div>
            </div>
          </Reveal>

          {/* Text + cards */}
          <div>
            <Reveal>
              <p className="text-base font-light leading-relaxed text-neutral-600 sm:text-lg">
                A psiquiatria vai além do diagnóstico: é um processo de cuidado contínuo e
                humanizado. O Dr. Rafael acredita que cada pessoa merece ser compreendida em sua
                história e acompanhada de forma próxima, com respeito ao seu tempo e às suas
                particularidades.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 90}>
                  <div className="group h-full rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-[0_16px_40px_rgba(201,162,39,0.12)]">
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/40 text-gold-600 transition-colors group-hover:bg-gold-500 group-hover:text-ink-900">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {f.icon}
                      </svg>
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink-900">{f.title}</h3>
                    <p className="mt-1 text-sm font-light text-neutral-500">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
