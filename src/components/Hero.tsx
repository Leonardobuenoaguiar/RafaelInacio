import { WHATSAPP_URL } from "../lib/data";

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-label="Apresentação">
      {/* Folhagem decorativa à esquerda */}
      <svg className="hero-leaves" viewBox="0 0 260 460" aria-hidden="true">
        <g fill="#F7E9E4">
          <path
            d="M132 460c-6-90-4-170 6-238 8-56 20-104 30-152l6 1c-10 48-22 96-30 152-10 68-12 148-6 237h-6Z"
            fill="#F4E2DC"
          />

          {[
            { x: 120, y: 60, r: -38, s: 1 },
            { x: 150, y: 92, r: 32, s: 0.95 },
            { x: 96, y: 118, r: -46, s: 1.1 },
            { x: 158, y: 150, r: 40, s: 0.9 },
            { x: 80, y: 176, r: -52, s: 1.15 },
            { x: 160, y: 208, r: 44, s: 0.88 },
            { x: 70, y: 236, r: -56, s: 1.1 },
            { x: 150, y: 266, r: 46, s: 0.85 },
            { x: 64, y: 296, r: -58, s: 1 },
            { x: 140, y: 322, r: 48, s: 0.8 },
            { x: 62, y: 352, r: -60, s: 0.9 },
            { x: 30, y: 150, r: -70, s: 0.9 },
            { x: 26, y: 232, r: -74, s: 0.85 },
            { x: 34, y: 300, r: -76, s: 0.8 },
          ].map((leaf, index) => (
            <ellipse
              key={index}
              cx="0"
              cy="0"
              rx={30 * leaf.s}
              ry={13 * leaf.s}
              transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r})`}
            />
          ))}
        </g>
      </svg>

      <div className="hero-inner">
        {/* Texto */}
        <div className="hero-text">
          <h1 className="hero-title">
            Médico Psiquiatra
            <br />
            Dr. Rafael Inácio
          </h1>

          <p className="hero-crm">CRM 189.212 • RQE PSIQUIATRIA 102285</p>

          <p className="hero-sub">
            Atendimentos em psiquiatria clínica,
            <br />
            psicoterapia e psiquiatria forense.
          </p>

          <p className="hero-strong">
            Assistência particular presencial e online.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            Agendar Consulta
          </a>
        </div>

        {/* PNG transparente, exibido inteiro e sem fundo adicional */}
        <div className="hero-media">
          <img
            className="hero-doctor"
            src="/images/hero-doctor.png"
            alt="Dr. Rafael Inácio, médico psiquiatra"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      <style>{`
        .hero {
          --header-h: 96px;
          position: relative;
          /* A próxima seção fica em uma camada acima da Hero. */
          z-index: 1;
          /* Permite que a imagem continue alguns pixels abaixo da divisão. */
          overflow: visible;
          padding-top: var(--header-h);
          margin: 0 !important;
          background-color: #ffffff;

          /* Remove qualquer borda antiga para ela não voltar. */
          border: 0 !important;
          border-top: 0 !important;
          border-bottom: 0 !important;
          box-shadow: none !important;
        }

        /* Cria somente a divisão fina e sutil do print. */
        .hero::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          /* A linha passa atrás da imagem transparente. */
          z-index: 1;
          width: 100%;
          height: 1px;
          background-color: #e7c9b6;
          box-shadow: 0 6px 18px rgba(141, 73, 54, 0.04);
          pointer-events: none;
        }

        /* Impede que a próxima seção acrescente uma segunda linha. */
        .hero + section {
          position: relative;
          /* Cobre a parte da imagem que ultrapassa a Hero. */
          z-index: 3;
          border-top: 0 !important;
          box-shadow: none !important;
        }

        .hero-leaves {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 260px;
          height: 460px;
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          margin: 0 auto;
          max-width: 1240px;
          min-height: 451px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 24px;
          padding: 0 24px;
        }

        .hero-text {
          position: relative;
          z-index: 2;
          /* Afasta o texto e o botão da lateral esquerda. */
          padding-left: clamp(80px, 8vw, 124px);
        }

        .hero-title {
          margin: 0;
          color: #8d4936;
          font-size: 40px;
          font-weight: 300;
          line-height: 1.28;
          letter-spacing: 0.005em;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }

        .hero-crm {
          margin: 14px 0 0;
          color: #8d4936;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.01em;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }

        .hero-sub {
          margin: 42px 0 0;
          color: #a08578;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.55;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }

        .hero-strong {
          margin: 18px 0 0;
          color: #5d4640;
          font-size: 15px;
          font-weight: 600;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 52px;
          padding: 0 26px;
          height: 46px;
          border-radius: 999px;
          background-color: #3192ab;
          color: #ffffff;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          transition: background-color 0.25s ease, transform 0.25s ease;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }

        .hero-btn:hover {
          background-color: #2a8199;
          transform: translateY(-1px);
        }

        /*
         * A imagem já é um PNG transparente.
         * Não existe fundo, máscara, borda ou recorte criado pelo CSS.
         */
        .hero-media {
          position: relative;
          z-index: 3;
          align-self: end;
          width: 100%;
          height: 451px;
          overflow: visible;
        }

        .hero-doctor {
          position: absolute;
          right: 0;
          /*
           * A imagem atravessa discretamente a linha, mas a próxima seção
           * fica por cima e encobre essa sobra, produzindo um corte limpo.
           */
          bottom: -26px;
          display: block;
          width: min(112%, 620px);
          max-width: none;
          height: auto;
          max-height: 535px;
          object-fit: contain;
          object-position: right bottom;
          background: transparent !important;
          border: 0 !important;
          border-radius: 0 !important;
          outline: 0 !important;
          box-shadow: none !important;
          filter: none;
        }

        @media (max-width: 900px) {
          .hero {
            --header-h: 72px;
          }

          .hero-inner {
            grid-template-columns: 1fr;
            min-height: 0;
            /* Reduz somente no mobile o espaço entre o botão e a imagem. */
            gap: 10px;
            padding: 48px 24px 0;
            text-align: center;
          }

          .hero-text {
            padding-left: 0;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-sub {
            margin-top: 28px;
          }

          .hero-btn {
            margin-top: 32px;
          }

          .hero-media {
            /* Aproxima a foto do botão sem reduzir o tamanho da imagem. */
            height: 280px;
          }

          .hero-doctor {
            right: 50%;
            bottom: -16px;
            width: min(135%, 560px);
            max-width: none;
            max-height: 500px;
            object-position: center bottom;
            transform: translateX(50%);
          }

          .hero-leaves {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}
