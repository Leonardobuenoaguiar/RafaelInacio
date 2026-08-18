type Item = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const items: Item[] = [
  {
    title: "Psiquiatria Clínica",
    text: "A psiquiatria que tem como objetivo o bem-estar mental e maior qualidade de vida das pessoas.",
    icon: (
      <svg viewBox="0 0 72 72" className="esp-svg" {...stroke}>
        {/* perfil da cabeça */}
        <path d="M34 6c12 0 22 8.6 22 20.4 0 7-3 11.4-6 15.2-2.2 2.8-3.2 4.4-3.2 7.2V52c0 2-1.4 3.4-3.4 3.4h-5.6c-2 0-3.4 1.4-3.4 3.4V66" />
        <path d="M34 6C22.8 6 14.4 13 12.4 22.4c-.7 3.3-1.6 5.6-3.4 8.2-1.2 1.7-1 3.4.8 4.2l3.6 1.6c1 .5 1.5 1.3 1.5 2.4v3.6c0 2 1.4 3.4 3.4 3.4h2.5c1.6 0 2.6 1 2.8 2.6l1 8" />
        {/* cérebro */}
        <path d="M25.5 24.6c0-4.4 4.4-7.6 10.4-7.6s10.6 3.2 10.6 7.6c0 4.2-3.6 7-8.6 7.5" />
        <path d="M25.5 24.6c-1.8 1-2.8 2.6-2.8 4.4 0 3.2 3.4 5.6 8.2 5.9" />
        <path d="M37.9 32.1l-.4 6.2-4.6-3.4" />
        <path d="M30.9 34.9c1.3.1 2.7.1 4 0" />
        {/* mão aberta */}
        <path d="M22 44.5h6.5v-6H22z" />
        <path d="M28.5 44.5c2.6 0 4-1.2 6.6-1.2h5.2c1.5 0 2.4-.8 2.4-1.9 0-1.1-.9-1.8-2.4-1.8h-6.6" />
        <path d="M33.7 39.6c-1.9 0-3.4-.6-5.2-1.6" />
        <path d="M43.3 41.4l4.6-1.8c1.4-.5 2.6.1 2.9 1.1.3 1-.3 2-1.6 2.6l-7.4 3.3c-1.5.7-2.6.9-4.2.9h-9.1" />
      </svg>
    ),
  },
  {
    title: "Psicoterapia",
    text: "Atendimento psicoterapêutico através da Terapia Comportamental Dialética (DBT).",
    icon: (
      <svg viewBox="0 0 72 72" className="esp-svg" {...stroke}>
        {/* balão de fala */}
        <path d="M45.5 4h15.8c2 0 3.7 1.6 3.7 3.6v9.2c0 2-1.7 3.6-3.7 3.6h-8.9l-6.1 4.6v-4.6h-.8c-2 0-3.7-1.6-3.7-3.6V7.6C41.8 5.6 43.5 4 45.5 4Z" />
        <circle cx="48.4" cy="12.2" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="53.5" cy="12.2" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="58.6" cy="12.2" r="1.1" fill="currentColor" stroke="none" />
        {/* pessoa esquerda (terapeuta) */}
        <circle cx="16.4" cy="22.6" r="4.6" />
        <path d="M16.4 27.2c-4.2 0-6.8 2.8-6.8 6.8v6.4" />
        <path d="M16.4 34.2c1.8 0 3 .9 4.8 2.4l3.4 2.8" />
        <path d="M9.6 40.4h7.2" />
        <path d="M9.6 40.4V56M16.8 40.4V56" />
        <path d="M6 56h7.2M13.4 56h7.2" />
        {/* mesa / prancheta */}
        <path d="M25.5 39.6h21" />
        {/* pessoa direita (paciente) */}
        <circle cx="55.6" cy="30.4" r="4.6" />
        <path d="M55.6 35c4.2 0 6.8 2.8 6.8 6.8v5" />
        <path d="M55.6 41c-2 0-3.4.9-5.2 2.2l-3.2 2.2" />
        <path d="M48.8 46.8h7.2" />
        <path d="M48.8 46.8V60M56 46.8V60" />
        <path d="M45.2 60h7.2M52.4 60h7.2" />
      </svg>
    ),
  },
  {
    title: "Psiquiatria Forense",
    text: "Auxílio técnico aos pacientes e profissionais do direito nas implicações legais em processos judiciais.",
    icon: (
      <svg viewBox="0 0 72 72" className="esp-svg" {...stroke}>
        {/* martelo */}
        <path d="M20.6 21.4 33 33.8" />
        <path d="M27.4 14.6 39.8 27" />
        <path d="M24 11.2 43.2 30.4" />
        <path d="M17.2 18 36.4 37.2" />
        <path d="m24.4 30-14 14" />
        <path d="m6.2 47.4 6.8 6.8" />
        <path d="m9.6 44 6.8 6.8" />
        {/* cabeça com cérebro */}
        <path d="M40 46.6c-5.6-3.4-9.4-9.4-9.4-16.4 0-10.6 8.8-19.2 19.6-19.2S69 19.6 69 29.4c0 6.6-3.4 12.4-8.6 15.6v6.6c0 2.2-1.6 3.8-3.8 3.8h-2.2v3.8c0 2.2-1.6 3.8-3.8 3.8h-7.4c-2.2 0-3.8-1.6-3.8-3.8v-6" />
        <path d="M44.6 30.6c0-3.4 3.4-5.8 8-5.8s8.2 2.4 8.2 5.8c0 3.2-2.8 5.4-6.6 5.7" />
        <path d="M44.6 30.6c-1.4.8-2.2 2-2.2 3.4 0 2.4 2.6 4.3 6.3 4.5" />
        <path d="m54.2 36.3-.3 4.8-3.6-2.6" />
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
          background-color: #8D4936;
          width: 100%;
        }
        .esp-grid {
          margin: 0 auto;
          max-width: 1360px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 72px 20px 78px;
        }
        .esp-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 12px;
        }
        .esp-icon {
          color: #FFFFFF;
          display: inline-flex;
        }
        .esp-svg {
          width: 72px;
          height: 72px;
          display: block;
        }
        .esp-title {
          margin: 30px 0 0;
          color: #FFFFFF;
          font-size: 24px;
          font-weight: 300;
          line-height: 1.25;
          letter-spacing: 0.01em;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }
        .esp-text {
          margin: 18px 0 0;
          max-width: 250px;
          color: #F3C1B2;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.45;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }
        @media (max-width: 860px) {
          .esp-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 56px 24px 60px;
          }
        }
      `}</style>
    </section>
  );
}
