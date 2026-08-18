import Reveal from "./Reveal";
import { SIGNS } from "../lib/data";

export default function Psiquiatria() {
  return (
    <section
      id="psiquiatria"
      className="psy"
      aria-labelledby="psiquiatria-title"
    >
      {/* Elemento decorativo */}
      <svg
        className="psy-deco psy-deco-left"
        viewBox="0 0 230 420"
        aria-hidden="true"
      >
        <g fill="none" stroke="#8D4936" strokeLinecap="round">
          <path
            d="M62 420c4-78 15-147 35-207 17-51 40-99 70-145"
            strokeWidth="2"
            opacity=".15"
          />
          <path
            d="M94 230c-30-6-52-23-65-50"
            strokeWidth="2"
            opacity=".12"
          />
          <path
            d="M113 180c31-7 56-25 74-54"
            strokeWidth="2"
            opacity=".12"
          />
        </g>

        <g fill="#F1DCD4">
          <ellipse
            cx="44"
            cy="173"
            rx="35"
            ry="14"
            transform="rotate(35 44 173)"
          />
          <ellipse
            cx="177"
            cy="117"
            rx="38"
            ry="15"
            transform="rotate(-42 177 117)"
          />
          <ellipse
            cx="72"
            cy="261"
            rx="31"
            ry="13"
            transform="rotate(28 72 261)"
          />
        </g>
      </svg>

      <div className="psy-inner">
        {/* Cabeçalho */}
        <Reveal>
          <header className="psy-header">
            <span className="psy-eyebrow">Psiquiatria</span>

            <h2 id="psiquiatria-title" className="psy-title">
              Quando procurar um psiquiatra?
            </h2>

            <span className="psy-line" aria-hidden="true" />

            <p className="psy-description">
              A saúde mental merece atenção e cuidado. A avaliação de um médico
              psiquiatra pode ser importante diante de mudanças persistentes no
              humor, comportamento, sono, energia, concentração ou interesse
              pelas atividades do dia a dia.
            </p>
          </header>
        </Reveal>

        {/* Lista de sinais */}
        <div className="psy-grid">
          {SIGNS.map((sign, index) => (
            <Reveal
              key={sign}
              className="psy-item"
              delay={(index % 4) * 90}
            >
              <article className="psy-card">
                <span className="psy-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="psy-card-text">{sign}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Observação */}
        <Reveal delay={200}>
          <aside className="psy-note" aria-label="Observação importante">
            <span className="psy-note-icon" aria-hidden="true">
              i
            </span>

            <p>
              Estas são apenas possíveis situações que podem motivar uma
              avaliação profissional. A presença de um ou mais sinais não
              representa um diagnóstico, e a avaliação deve ser sempre
              realizada por um médico psiquiatra.
            </p>
          </aside>
        </Reveal>
      </div>

      <style>{`
  .psy {
    position: relative;
    overflow: hidden;
    background-color: #FAF6F3;
    border: none;
    font-family: "Jost", "Questrial", "Century Gothic", "Futura",
      "Avenir Next", "Segoe UI", system-ui, sans-serif;
  }

  .psy-inner {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 88px 24px 82px;
  }

  /* ---------- decoração ---------- */

  .psy-deco {
    position: absolute;
    pointer-events: none;
    z-index: 0;
  }

  .psy-deco-left {
    left: -35px;
    bottom: -80px;
    width: 230px;
    height: 420px;
    opacity: .8;
  }

  /* ---------- cabeçalho ---------- */

  .psy-header {
    max-width: 780px;
    margin: 0 auto 54px;
    text-align: center;
  }

  .psy-eyebrow {
    display: block;
    margin-bottom: 14px;
    color: #3192AB;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: .17em;
    text-transform: uppercase;
  }

  .psy-title {
    margin: 0;
    color: #8D4936;
    font-size: 38px;
    font-weight: 300;
    line-height: 1.25;
    letter-spacing: .005em;
  }

  .psy-line {
    display: block;
    width: 52px;
    height: 2px;
    margin: 22px auto 0;
    border-radius: 999px;
    background-color: #E2A03A;
  }

  .psy-description {
    max-width: 720px;
    margin: 26px auto 0;
    color: #A08578;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
  }

  /* ---------- grid ---------- */

  .psy-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .psy-item {
    height: 100%;
  }

  .psy-card {
    position: relative;
    box-sizing: border-box;
    min-height: 138px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    gap: 17px;
    margin: 0;
    padding: 24px 21px;
    overflow: hidden;
    border: 1px solid #E8DCD6;
    border-radius: 20px 20px 20px 7px;
    background-color: #FFFFFF;
    box-shadow: 0 8px 28px rgba(93, 70, 64, .045);
    transition:
      transform .25s ease,
      border-color .25s ease,
      box-shadow .25s ease;
  }

  .psy-card::after {
    content: "";
    position: absolute;
    right: -31px;
    bottom: -39px;
    width: 86px;
    height: 86px;
    border: 1px solid rgba(141, 73, 54, .1);
    border-radius: 50%;
    transition:
      transform .3s ease,
      background-color .3s ease;
  }

  .psy-card:hover {
    transform: translateY(-4px);
    border-color: rgba(141, 73, 54, .38);
    box-shadow: 0 16px 36px rgba(141, 73, 54, .1);
  }

  .psy-card:hover::after {
    transform: scale(1.1);
    background-color: rgba(247, 233, 228, .65);
  }

  .psy-number {
    position: relative;
    z-index: 1;
    width: 38px;
    height: 38px;
    flex: 0 0 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #F7E9E4;
    color: #8D4936;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: .04em;
    transition:
      background-color .25s ease,
      color .25s ease;
  }

  .psy-card:hover .psy-number {
    background-color: #3192AB;
    color: #FFFFFF;
  }

  .psy-card-text {
    position: relative;
    z-index: 1;
    margin: 4px 0 0;
    color: #5D4640;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
  }

  /* ---------- observação ---------- */

  .psy-note {
    box-sizing: border-box;
    max-width: 840px;
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin: 46px auto 0;
    padding: 19px 23px;
    border: 1px solid rgba(49, 146, 171, .2);
    border-radius: 16px;
    background-color: rgba(255, 255, 255, .68);
  }

  .psy-note-icon {
    width: 25px;
    height: 25px;
    flex: 0 0 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
    border: 1px solid rgba(49, 146, 171, .45);
    border-radius: 50%;
    color: #3192AB;
    font-family: Georgia, serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }

  .psy-note p {
    margin: 0;
    color: #A08578;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.65;
  }

  /* ---------- responsividade ---------- */

  @media (max-width: 1060px) {
    .psy-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .psy-card {
      min-height: 118px;
    }
  }

  @media (max-width: 680px) {
    .psy-inner {
      padding: 62px 20px 58px;
    }

    .psy-header {
      margin-bottom: 38px;
    }

    .psy-eyebrow {
      margin-bottom: 12px;
      font-size: 12px;
    }

    .psy-title {
      font-size: 30px;
    }

    .psy-description {
      margin-top: 22px;
      font-size: 15px;
      line-height: 1.6;
    }

    .psy-grid {
      grid-template-columns: 1fr;
      gap: 13px;
    }

    .psy-card {
      min-height: auto;
      padding: 20px;
      border-radius: 17px 17px 17px 6px;
    }

    .psy-card-text {
      font-size: 14px;
    }

    .psy-note {
      gap: 12px;
      margin-top: 34px;
      padding: 17px;
    }

    .psy-deco-left {
      left: -90px;
      bottom: -120px;
      opacity: .45;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .psy-card,
    .psy-card::after,
    .psy-number {
      transition: none;
    }

    .psy-card:hover {
      transform: none;
    }
  }
`}</style>
</section>
);
}