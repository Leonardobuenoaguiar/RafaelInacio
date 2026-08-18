import type { ReactNode } from "react";

type Item = {
  title: string;
  text: string;
  icon: ReactNode;
};

const iconProps = {
  viewBox: "0 0 64 64",
  className: "esp-svg",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const items: Item[] = [
  {
    title: "Psiquiatria Clínica",
    text: "A psiquiatria que tem como objetivo o bem-estar mental e maior qualidade de vida das pessoas.",
    icon: (
      <svg {...iconProps}>
        {/* Cérebro simétrico */}
        <path d="M31.5 14.2c-2.6-4.1-8.8-4.2-11.1-.1-4.6-.8-8.3 3.7-6.5 8-4.2 2.5-4.3 8.6-.2 11.2-2.1 4.7 1.5 10.1 6.6 9.8 2.2 4.2 8.6 4.2 11.2.2V14.2Z" />
        <path d="M32.5 14.2c2.6-4.1 8.8-4.2 11.1-.1 4.6-.8 8.3 3.7 6.5 8 4.2 2.5 4.3 8.6.2 11.2 2.1 4.7-1.5 10.1-6.6 9.8-2.2 4.2-8.6 4.2-11.2.2V14.2Z" />
        <path d="M32 14v30.8" opacity=".85" />

        {/* Sulcos do lado esquerdo */}
        <path d="M23 17.5c-3.1 1.8-3.7 5.6-1.2 8" />
        <path d="M14.8 25.5c3.6-.9 6.9 1.2 7.7 4.6" />
        <path d="M22.2 32.1c-3.5.8-5.3 4.5-3.4 7.5" />
        <path d="M27.6 24.4c-2.8 1.7-3.2 5.2-.8 7.3" />
        <path d="M25.3 39c2.8-.6 5 1 5.5 3.5" />

        {/* Sulcos do lado direito */}
        <path d="M41 17.5c3.1 1.8 3.7 5.6 1.2 8" />
        <path d="M49.2 25.5c-3.6-.9-6.9 1.2-7.7 4.6" />
        <path d="M41.8 32.1c3.5.8 5.3 4.5 3.4 7.5" />
        <path d="M36.4 24.4c2.8 1.7 3.2 5.2.8 7.3" />
        <path d="M38.7 39c-2.8-.6-5 1-5.5 3.5" />

        {/* Base sutil */}
        <path d="M26 51h12" opacity=".7" />
        <path d="M29 55h6" opacity=".45" />
      </svg>
    ),
  },
  {
    title: "Psicoterapia",
    text: "Atendimento psicoterapêutico através da Terapia Comportamental Dialética (DBT).",
    icon: (
      <svg {...iconProps}>
        {/* Balão principal */}
        <path d="M11 12.5h30a6 6 0 0 1 6 6v13a6 6 0 0 1-6 6H27l-10 8v-8h-6a6 6 0 0 1-6-6v-13a6 6 0 0 1 6-6Z" />

        {/* Pontos de conversa */}
        <circle cx="19" cy="25" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="26" cy="25" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="33" cy="25" r="1.4" fill="currentColor" stroke="none" />

        {/* Segundo balão, representando escuta e resposta */}
        <path d="M45 27.5h7a7 7 0 0 1 7 7v8.5a7 7 0 0 1-7 7h-2v6l-7.5-6H38a7 7 0 0 1-7-7v-1" />
        <path d="M43 38.5h7M43 43h4.5" opacity=".75" />
      </svg>
    ),
  },
  {
    title: "Psiquiatria Forense",
    text: "Auxílio técnico aos pacientes e profissionais do direito nas implicações legais em processos judiciais.",
    icon: (
      <svg {...iconProps}>
        {/* Topo e coluna da balança */}
        <path d="M32 9v43" />
        <path d="M22 56h20" />
        <path d="M26 52h12" />
        <path d="M12 21h40" />
        <path d="m32 13-7 8h14l-7-8Z" />

        {/* Prato esquerdo */}
        <path d="m17 21-8 17h16l-8-17Z" />
        <path d="M7 38c1.2 5 5 7.5 10 7.5S25.8 43 27 38H7Z" />

        {/* Prato direito */}
        <path d="m47 21-8 17h16l-8-17Z" />
        <path d="M37 38c1.2 5 5 7.5 10 7.5S55.8 43 57 38H37Z" />

        {/* Pequeno símbolo cerebral no centro */}
        <path d="M28 29.5c-2.2-1.7-5 .4-3.8 2.9-1.6 1.4-.5 4.2 1.7 4.1.8 2.1 3.6 1.9 4.2.1V31c0-1.1-.9-1.8-2.1-1.5Z" />
        <path d="M36 29.5c2.2-1.7 5 .4 3.8 2.9 1.6 1.4.5 4.2-1.7 4.1-.8 2.1-3.6 1.9-4.2.1V31c0-1.1.9-1.8 2.1-1.5Z" />
      </svg>
    ),
  },
];

export default function Especialidades() {
  return (
    <section id="especialidades" aria-label="Especialidades" className="esp-section">
      <div className="esp-grid">
        {items.map((item) => (
          <div className="esp-col" key={item.title}>
            <span className="esp-icon">{item.icon}</span>
            <h3 className="esp-title">{item.title}</h3>
            <p className="esp-text">{item.text}</p>
          </div>
        ))}
      </div>

      <style>{`
        .esp-section {
          width: 100%;
          background-color: #8d4936;
        }

        .esp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          max-width: 1360px;
          margin: 0 auto;
          padding: 72px 20px 78px;
        }

        .esp-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 12px;
          text-align: center;
        }

        /* Moldura orgânica e consistente para os três novos ícones. */
        .esp-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 92px;
          height: 92px;
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 50% 50% 46% 54% / 54% 48% 52% 46%;
          background: rgba(255, 255, 255, 0.055);
          color: #ffffff;
        }

        .esp-svg {
          display: block;
          width: 58px;
          height: 58px;
          overflow: visible;
        }

        .esp-svg * {
          vector-effect: non-scaling-stroke;
        }

        .esp-title {
          margin: 30px 0 0;
          color: #ffffff;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
          font-size: 24px;
          font-weight: 300;
          line-height: 1.25;
          letter-spacing: 0.01em;
        }

        .esp-text {
          max-width: 250px;
          margin: 18px 0 0;
          color: #f3c1b2;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.45;
        }

        @media (max-width: 860px) {
          .esp-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 56px 24px 60px;
          }

          .esp-icon {
            width: 86px;
            height: 86px;
          }

          .esp-svg {
            width: 54px;
            height: 54px;
          }
        }
      `}</style>
    </section>
  );
}
