import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="abt" aria-label="Sobre o doutor">
      <div className="abt-inner">
        {/* ---------- arte / imagem ---------- */}
        <Reveal className="abt-art">
          <div className="abt-stack">
            {/* elemento decorativo: arcos concêntricos + pontos */}
            <svg className="abt-deco" viewBox="0 0 380 380" aria-hidden="true">
              <defs>
                <linearGradient id="abt-arc" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E2A03A" />
                  <stop offset="50%" stopColor="#C8703A" />
                  <stop offset="100%" stopColor="#8D4936" />
                </linearGradient>
              </defs>

              <g
                fill="none"
                stroke="url(#abt-arc)"
                strokeLinecap="round"
                transform="translate(190 190)"
              >
                <circle r="168" strokeWidth="1.5" opacity=".28" />
                <path
                  d="M0-140A140 140 0 0 1 121 70"
                  strokeWidth="3"
                  opacity=".55"
                />
                <path
                  d="M-104-94A140 140 0 0 0 -20 138"
                  strokeWidth="2"
                  opacity=".38"
                />
                <path d="M0-112A112 112 0 0 1 97 56" strokeWidth="7" />
                <path
                  d="M-84-74A112 112 0 0 0 -16 110"
                  strokeWidth="4"
                  opacity=".6"
                />
                <path
                  d="M0-84A84 84 0 0 1 73 42"
                  strokeWidth="10"
                  opacity=".9"
                />
                <circle r="54" strokeWidth="2" opacity=".45" />
                <circle r="26" strokeWidth="12" opacity=".85" />
              </g>

              <g fill="#D9772F">
                {[
                  [44, 96, 5],
                  [70, 58, 3.4],
                  [116, 34, 4.4],
                  [30, 152, 3],
                  [156, 22, 3],
                  [22, 206, 4],
                  [92, 300, 3.4],
                  [58, 262, 2.6],
                  [216, 20, 3.6],
                  [140, 330, 3],
                ].map(([x, y, r], index) => (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r={r}
                    opacity={0.28 + (index % 4) * 0.16}
                  />
                ))}
              </g>
            </svg>

            {/* Foto dentro do blob */}
            <div className="abt-blob">
              <img
                src="/images/about-doctor.png"
                alt="Retrato profissional do Dr. Rafael Inácio"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* ---------- texto ---------- */}
        <div className="abt-text">
          <Reveal>
            <h2 className="abt-title">Sobre Mim</h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="abt-p">
              Sou um psiquiatra encantado pela profissão, com um olhar para o
              paciente de forma integral, compreendendo que por trás de sintomas e
              critérios diagnósticos, há um ser humano que vive desafios,
              dificuldades, superações e que tem sua própria trajetória e escolhas.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="abt-p">
              Invisto na psicoeducação dos pacientes e familiares, pois acredito que
              todos devem ser protagonistas de suas vidas e do tratamento.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="abt-p">
              Atuo nas áreas: Psiquiatria Clínica, Psicoterapia e Forense.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <a
              href="/sobremim"
              className="abt-btn"
              aria-label="Abrir a página Sobre Mim do Dr. Rafael Inácio"
            >
              Saiba Mais
            </a>
          </Reveal>
        </div>
      </div>

      <style>{`
        .abt {
          background-color: #ffffff;
          border-top: 4px solid #8d4936;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }

        .abt-inner {
          margin: 0 auto;
          max-width: 1343px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
          padding: 56px 24px 60px;
        }

        /* ---------- arte ---------- */
        .abt-art {
          position: relative;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .abt-stack {
          position: relative;
          width: 100%;
          max-width: 520px;
          height: 400px;
          margin: 0 auto;
        }

        .abt-deco {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 380px;
          height: 380px;
          pointer-events: none;
        }

        .abt-blob {
          position: absolute;
          right: 56px;
          top: 50%;
          transform: translateY(-50%);
          width: 372px;
          height: 340px;
          overflow: hidden;
          border: 11px solid #8d4936;
          border-radius: 48% 52% 44% 56% / 54% 50% 50% 46%;
          background-color: #ede7e2;
        }

        .abt-blob img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          /*
           * Valor menor que os 22% anteriores: mostra mais do topo da foto
           * e desloca o retrato para baixo dentro da moldura.
           */
          object-position: center 10%;
        }

        /* ---------- texto ---------- */
        .abt-text {
          padding-left: 8px;
        }

        .abt-title {
          margin: 0;
          color: #8d4936;
          font-size: 38px;
          font-weight: 300;
          line-height: 1.2;
          letter-spacing: 0.005em;
        }

        .abt-p {
          margin: 46px 0 0;
          max-width: 480px;
          color: #a08578;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
        }

        .abt-p + .abt-p {
          margin-top: 34px;
        }

        .abt-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 54px;
          height: 42px;
          padding: 0 26px;
          border-radius: 999px;
          background-color: #3192ab;
          color: #ffffff;
          font-size: 16px;
          font-weight: 400;
          text-decoration: none;
          transition: background-color 0.25s ease, transform 0.25s ease;
        }

        .abt-btn:hover {
          background-color: #2a8199;
          transform: translateY(-1px);
        }

        @media (max-width: 1180px) and (min-width: 981px) {
          .abt-stack {
            max-width: 455px;
            height: 350px;
          }

          .abt-deco {
            width: 330px;
            height: 330px;
          }

          .abt-blob {
            width: 310px;
            height: 284px;
            right: 44px;
          }
        }

        @media (max-width: 980px) {
          .abt-inner {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 44px 24px 52px;
          }

          .abt-art {
            min-height: 340px;
            max-width: 460px;
            margin: 0 auto;
            width: 100%;
          }

          .abt-stack {
            max-width: none;
            width: 100%;
            height: 340px;
          }

          .abt-deco {
            width: 300px;
            height: 300px;
          }

          .abt-blob {
            width: 280px;
            height: 256px;
            right: 0;
          }

          .abt-text {
            padding-left: 0;
          }

          .abt-title {
            font-size: 30px;
          }

          .abt-p {
            margin-top: 26px;
            max-width: none;
          }

          .abt-p + .abt-p {
            margin-top: 22px;
          }

          .abt-btn {
            margin-top: 34px;
          }
        }
      `}</style>
    </section>
  );
}
