import Reveal from "./Reveal";

/*
 * Reutiliza o desenho do cérebro que já existe em Atendimento.tsx
 * sem importar um componente de uma seção para outra.
 */
function BrainWatermark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 351 420"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <use href="#site-brain-shape" fill="currentColor" />
    </svg>
  );
}

export default function Acolhimento() {
  return (
    <section
      id="acolhimento"
      className="acl"
      aria-labelledby="acolhimento-title"
    >
      {/* Mesmo cérebro utilizado na seção Atendimento */}
      <BrainWatermark className="acl-brain" />

      {/* Círculos decorativos mantidos */}
      <span className="acl-circle acl-circle-large" aria-hidden="true" />
      <span className="acl-circle acl-circle-small" aria-hidden="true" />

      <div className="acl-inner">
        <div className="acl-heading">
          <Reveal>
            <p className="acl-eyebrow">
              <span className="acl-eyebrow-line" aria-hidden="true" />
              Cuidado individualizado
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 id="acolhimento-title" className="acl-title">
              Sua história merece ser ouvida com
              <span className="acl-title-accent"> tempo, respeito e cuidado.</span>
            </h2>
          </Reveal>
        </div>

        <div className="acl-content">
          <Reveal delay={140}>
            <div className="acl-copy">
              <p>
                Nem sempre é simples compreender ou colocar em palavras o que
                estamos sentindo. Por isso, o atendimento oferece um espaço
                seguro para conversar com tranquilidade sobre suas emoções,
                dificuldades e experiências.
              </p>

              <p>
                A partir dessa escuta, é possível identificar necessidades,
                esclarecer dúvidas e construir caminhos de cuidado que façam
                sentido para o seu momento de vida.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <aside className="acl-note">
              <span className="acl-quote" aria-hidden="true">
                “
              </span>
              <p className="acl-note-text">
                Mais do que olhar apenas para os sintomas, o cuidado busca
                compreender você por inteiro.
              </p>
              <span className="acl-note-line" aria-hidden="true" />
              <p className="acl-note-caption">
                Um acompanhamento construído com diálogo, clareza e respeito às
                suas escolhas.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>

      <style>{`
        .acl {
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(141, 73, 54, 0.12);
          border-bottom: 1px solid rgba(141, 73, 54, 0.1);
          background:
            radial-gradient(
              720px 330px at 88% 48%,
              rgba(226, 160, 58, 0.11),
              transparent 66%
            ),
            linear-gradient(110deg, #ffffff 0%, #fcf8f5 60%, #f7f0ea 100%);
          color: #8d4936;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }

        /* Mesmo cérebro do Atendimento, usado como marca d'água. */
        .acl-brain {
          position: absolute;
          right: 4%;
          top: 50%;
          width: 330px;
          height: auto;
          color: #8d4936;
          opacity: 0.055;
          transform: translateY(-50%) rotate(4deg);
          pointer-events: none;
          user-select: none;
        }

        .acl-circle {
          position: absolute;
          display: block;
          border-radius: 50%;
          pointer-events: none;
        }

        .acl-circle-large {
          left: -115px;
          top: 50%;
          width: 250px;
          height: 250px;
          border: 1px solid rgba(141, 73, 54, 0.1);
          transform: translateY(-50%);
        }

        .acl-circle-small {
          left: -68px;
          top: 50%;
          width: 155px;
          height: 155px;
          border: 1px solid rgba(49, 146, 171, 0.12);
          transform: translateY(-50%);
        }

        .acl-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 58px 28px 62px;
        }

        .acl-heading {
          max-width: 760px;
        }

        .acl-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin: 0;
          color: #c8703a;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .acl-eyebrow-line {
          display: block;
          width: 34px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #e2a03a, #c8703a);
        }

        .acl-title {
          max-width: 720px;
          margin: 14px 0 0;
          color: #8d4936;
          font-size: 39px;
          font-weight: 300;
          line-height: 1.18;
          letter-spacing: 0.005em;
        }

        /* Mesmo peso e mesma família do título; apenas muda a cor. */
        .acl-title-accent {
          color: #3192ab;
          font: inherit;
        }

        .acl-content {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
          align-items: start;
          gap: 68px;
          margin-top: 34px;
        }

        .acl-copy {
          max-width: 610px;
          color: #806d65;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.72;
        }

        .acl-copy p {
          margin: 0;
        }

        .acl-copy p + p {
          margin-top: 16px;
        }

        /* Um único bloco editorial no lugar dos cards repetitivos. */
        .acl-note {
          position: relative;
          margin: 0;
          padding: 5px 0 4px 26px;
          border-left: 1px solid rgba(200, 112, 58, 0.38);
        }

        .acl-quote {
          display: block;
          height: 30px;
          color: rgba(200, 112, 58, 0.42);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 48px;
          line-height: 0.9;
        }

        .acl-note-text {
          margin: 8px 0 0;
          color: #5d4640;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.5;
        }

        .acl-note-line {
          display: block;
          width: 42px;
          height: 1px;
          margin-top: 18px;
          background: linear-gradient(90deg, #3192ab, transparent);
        }

        .acl-note-caption {
          margin: 12px 0 0;
          color: #a08578;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .acl-inner {
            padding: 50px 24px 54px;
          }

          .acl-title {
            max-width: 650px;
            font-size: 32px;
          }

          .acl-content {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-top: 28px;
          }

          .acl-note {
            max-width: 560px;
          }

          .acl-brain {
            right: -70px;
            width: 280px;
            opacity: 0.045;
          }
        }

        @media (max-width: 600px) {
          .acl-inner {
            padding: 44px 20px 48px;
          }

          .acl-title {
            font-size: 28px;
          }

          .acl-copy {
            font-size: 14px;
          }

          .acl-note-text {
            font-size: 17px;
          }

          .acl-brain {
            right: -105px;
            width: 250px;
          }

          .acl-circle-large {
            left: -170px;
          }

          .acl-circle-small {
            left: -110px;
          }
        }
      `}</style>
    </section>
  );
}
