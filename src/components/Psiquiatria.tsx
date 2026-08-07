import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SIGNS } from "../lib/data";

export default function Psiquiatria() {
  return (
    <section id="psiquiatria" className="relative bg-[#faf8f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Psiquiatria"
          title="Quando procurar um psiquiatra?"
          description="A saúde mental merece atenção e cuidado. A avaliação de um médico psiquiatra pode ser importante diante de mudanças persistentes no humor, comportamento, sono, energia, concentração ou interesse pelas atividades do dia a dia."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNS.map((sign, i) => (
            <Reveal key={sign} delay={(i % 4) * 90}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-[0_16px_40px_rgba(201,162,39,0.12)]">
                <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-gold-500/40 font-display text-sm font-semibold text-gold-600 transition-colors group-hover:bg-gold-500 group-hover:text-ink-900">
                  {i + 1}
                </span>
                <p className="text-sm font-medium leading-snug text-neutral-700">{sign}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-light leading-relaxed text-neutral-500">
            Estas são apenas possíveis situações que podem motivar uma avaliação profissional. A
            presença de um ou mais sinais não representa um diagnóstico, e a avaliação deve ser
            sempre realizada por um médico psiquiatra.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
