import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import Reveal from "./Reveal";
import { ADDRESS_LINES, WHATSAPP_URL } from "../lib/data";

const areas = [
  {
    number: "01",
    title: "Psiquiatria Clínica",
    description:
      "Avaliação e acompanhamento individualizado da saúde mental, considerando sintomas, história e contexto de vida.",
  },
  {
    number: "02",
    title: "Psicoterapia",
    description:
      "Um espaço de escuta e elaboração para compreender emoções, escolhas, relações e formas de enfrentar dificuldades.",
  },
  {
    number: "03",
    title: "Psiquiatria Forense",
    description:
      "Atuação técnica na interface entre a psiquiatria e o Direito, com análise responsável e fundamentada.",
  },
];

export default function SobreMimPage() {
  return (
    <div className="smp-page">
      <Header />

      <main>
        {/* Apresentação */}
        <section className="smp-hero" aria-labelledby="smp-title">
          <span className="smp-circle smp-circle-large" aria-hidden="true" />
          <span className="smp-circle smp-circle-small" aria-hidden="true" />

          <div className="smp-hero-inner">
            <div className="smp-intro">
              <Reveal>
                <p className="smp-eyebrow">
                  <span aria-hidden="true" />
                  Conheça o médico
                </p>

                <h1 id="smp-title" className="smp-title">
                  Dr. Rafael Inácio
                </h1>

                <p className="smp-role">Médico Psiquiatra</p>
              </Reveal>

              <Reveal delay={80}>
                <p className="smp-lead">
                  Um olhar integral para a saúde mental, com escuta atenta,
                  orientação clara e respeito à história de cada pessoa.
                </p>
              </Reveal>

              <Reveal delay={140}>
                <div className="smp-credentials" aria-label="Registros profissionais">
                  <div>
                    <span>CRM-SP</span>
                    <strong>189212</strong>
                  </div>
                  <span className="smp-credentials-divider" aria-hidden="true" />
                  <div>
                    <span>RQE Psiquiatria</span>
                    <strong>102285</strong>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="smp-primary-button"
                >
                  Agendar consulta
                </a>
              </Reveal>
            </div>

            <Reveal className="smp-photo-area" delay={100}>
              <div className="smp-photo-decoration" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className="smp-photo-frame">
                <img
                  src="/images/about-doctor.png"
                  alt="Retrato profissional do Dr. Rafael Inácio"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Biografia e abordagem */}
        <section className="smp-story" aria-labelledby="smp-story-title">
          <div className="smp-story-inner">
            <Reveal>
              <div className="smp-section-heading">
                <p className="smp-eyebrow">
                  <span aria-hidden="true" />
                  Sobre o Dr. Rafael
                </p>
                <h2 id="smp-story-title">Cuidado que considera a pessoa por inteiro</h2>
              </div>
            </Reveal>

            <div className="smp-story-grid">
              <Reveal delay={80}>
                <div className="smp-story-copy">
                  <p>
                    Sou um psiquiatra encantado pela profissão e procuro olhar
                    cada paciente de forma integral. Por trás de sintomas e
                    critérios diagnósticos, existe uma pessoa com sua própria
                    trajetória, escolhas, desafios, dificuldades e superações.
                  </p>

                  <p>
                    Acredito que o atendimento deve oferecer segurança para que
                    cada pessoa possa falar sobre o que sente, compreender o
                    momento que está vivendo e participar ativamente das decisões
                    relacionadas ao seu cuidado.
                  </p>

                  <p>
                    Invisto na psicoeducação de pacientes e familiares, pois
                    informação, diálogo e clareza ajudam a fortalecer o
                    protagonismo durante o tratamento.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <aside className="smp-quote">
                  <span className="smp-quote-mark" aria-hidden="true">“</span>
                  <p>
                    Mais do que tratar sintomas, o cuidado busca compreender a
                    pessoa, sua história e suas necessidades.
                  </p>
                  <span className="smp-quote-line" aria-hidden="true" />
                  <small>Escuta, respeito e cuidado individualizado.</small>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Áreas de atuação */}
        <section className="smp-areas" aria-labelledby="smp-areas-title">
          <div className="smp-areas-inner">
            <Reveal>
              <div className="smp-section-heading smp-section-heading-centered">
                <p className="smp-eyebrow smp-eyebrow-centered">
                  <span aria-hidden="true" />
                  Áreas de atuação
                  <span aria-hidden="true" />
                </p>
                <h2 id="smp-areas-title">Experiência dedicada à saúde mental</h2>
                <p className="smp-section-description">
                  Atuação profissional direcionada ao cuidado psiquiátrico,
                  psicoterápico e forense.
                </p>
              </div>
            </Reveal>

            <div className="smp-areas-grid">
              {areas.map((area, index) => (
                <Reveal key={area.title} delay={80 + index * 70}>
                  <article className="smp-area-item">
                    <span className="smp-area-number">{area.number}</span>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Informações profissionais */}
        <section className="smp-information" aria-labelledby="smp-information-title">
          <div className="smp-information-inner">
            <Reveal>
              <div className="smp-information-heading">
                <p className="smp-eyebrow smp-eyebrow-light">
                  <span aria-hidden="true" />
                  Informações profissionais
                </p>
                <h2 id="smp-information-title">Atendimento com responsabilidade e clareza</h2>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <dl className="smp-information-list">
                <div>
                  <dt>Profissional</dt>
                  <dd>Dr. Rafael Inácio</dd>
                </div>
                <div>
                  <dt>Especialidade</dt>
                  <dd>Médico Psiquiatra</dd>
                </div>
                <div>
                  <dt>Registro</dt>
                  <dd>CRM-SP 189212</dd>
                </div>
                <div>
                  <dt>Qualificação</dt>
                  <dd>RQE Psiquiatria 102285</dd>
                </div>
                <div>
                  <dt>Modalidades</dt>
                  <dd>Atendimento particular presencial e online</dd>
                </div>
                <div>
                  <dt>Consultório</dt>
                  <dd>
                    {ADDRESS_LINES.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />

      <style>{`
        .smp-page {
          min-height: 100vh;
          overflow-x: hidden;
          background-color: #ffffff;
          color: #5d4640;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }

        .smp-page *,
        .smp-page *::before,
        .smp-page *::after {
          box-sizing: border-box;
        }

        .smp-hero {
          position: relative;
          overflow: hidden;
          padding-top: 96px;
          background:
            radial-gradient(620px 400px at 88% 42%, rgba(226, 160, 58, 0.12), transparent 70%),
            linear-gradient(110deg, #ffffff 0%, #fcf8f5 62%, #f7f0ea 100%);
          border-bottom: 1px solid #e7c9b6;
        }

        .smp-circle {
          position: absolute;
          display: block;
          border-radius: 50%;
          pointer-events: none;
        }

        .smp-circle-large {
          left: -150px;
          bottom: -100px;
          width: 330px;
          height: 330px;
          border: 1px solid rgba(141, 73, 54, 0.1);
        }

        .smp-circle-small {
          left: -90px;
          bottom: -42px;
          width: 210px;
          height: 210px;
          border: 1px solid rgba(49, 146, 171, 0.12);
        }

        .smp-hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(420px, 0.9fr);
          align-items: center;
          gap: 64px;
          width: 100%;
          max-width: 1180px;
          min-height: 590px;
          margin: 0 auto;
          padding: 54px 28px 60px;
        }

        .smp-intro {
          padding-left: 32px;
        }

        .smp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin: 0;
          color: #c8703a;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.19em;
        }

        .smp-eyebrow > span {
          display: block;
          width: 34px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #e2a03a, #c8703a);
        }

        .smp-title {
          margin: 16px 0 0;
          color: #8d4936;
          font-size: clamp(44px, 5vw, 66px);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: 0.005em;
        }

        .smp-role {
          margin: 13px 0 0;
          color: #3192ab;
          font-size: 15px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.16em;
        }

        .smp-lead {
          max-width: 570px;
          margin: 30px 0 0;
          color: #806d65;
          font-size: 18px;
          font-weight: 300;
          line-height: 1.7;
        }

        .smp-credentials {
          display: inline-flex;
          align-items: stretch;
          gap: 24px;
          margin-top: 32px;
          padding: 18px 24px;
          border: 1px solid rgba(141, 73, 54, 0.13);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.7);
          box-shadow: 0 12px 34px rgba(93, 70, 64, 0.05);
          backdrop-filter: blur(8px);
        }

        .smp-credentials div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .smp-credentials span {
          color: #a08578;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .smp-credentials strong {
          color: #8d4936;
          font-size: 17px;
          font-weight: 500;
        }

        .smp-credentials .smp-credentials-divider {
          width: 1px;
          height: auto;
          background: rgba(141, 73, 54, 0.14);
        }

        .smp-primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 46px;
          margin-top: 30px;
          padding: 0 28px;
          border-radius: 999px;
          background-color: #3192ab;
          color: #ffffff;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(49, 146, 171, 0.2);
          transition: transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
        }

        .smp-primary-button:hover {
          transform: translateY(-2px);
          background-color: #2a8199;
          box-shadow: 0 14px 30px rgba(49, 146, 171, 0.28);
        }

        .smp-photo-area {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 480px;
        }

        .smp-photo-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .smp-photo-decoration span {
          position: absolute;
          left: 50%;
          top: 50%;
          display: block;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .smp-photo-decoration span:nth-child(1) {
          width: 460px;
          height: 460px;
          border: 1px solid rgba(141, 73, 54, 0.12);
        }

        .smp-photo-decoration span:nth-child(2) {
          width: 390px;
          height: 390px;
          border: 2px solid rgba(200, 112, 58, 0.23);
          border-left-color: transparent;
          transform: translate(-50%, -50%) rotate(22deg);
        }

        .smp-photo-decoration span:nth-child(3) {
          width: 320px;
          height: 320px;
          border: 8px solid rgba(226, 160, 58, 0.1);
          border-right-color: transparent;
          transform: translate(-50%, -50%) rotate(-18deg);
        }

        .smp-photo-frame {
          position: relative;
          z-index: 1;
          width: 370px;
          height: 425px;
          overflow: hidden;
          border: 10px solid #8d4936;
          border-radius: 48% 52% 45% 55% / 54% 48% 52% 46%;
          background-color: #ede7e2;
          box-shadow: 0 22px 50px rgba(93, 70, 64, 0.16);
        }

        .smp-photo-frame img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 8%;
        }

        .smp-story {
          background-color: #ffffff;
        }

        .smp-story-inner,
        .smp-areas-inner,
        .smp-information-inner {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 80px 28px;
        }

        .smp-section-heading {
          max-width: 720px;
        }

        .smp-section-heading h2,
        .smp-information-heading h2 {
          margin: 15px 0 0;
          color: #8d4936;
          font-size: 40px;
          font-weight: 300;
          line-height: 1.2;
        }

        .smp-story-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
          align-items: start;
          gap: 72px;
          margin-top: 40px;
        }

        .smp-story-copy {
          color: #806d65;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.75;
        }

        .smp-story-copy p {
          margin: 0;
        }

        .smp-story-copy p + p {
          margin-top: 20px;
        }

        .smp-quote {
          padding: 8px 0 8px 28px;
          border-left: 1px solid rgba(200, 112, 58, 0.42);
        }

        .smp-quote-mark {
          display: block;
          height: 34px;
          color: rgba(200, 112, 58, 0.42);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 54px;
          line-height: 0.9;
        }

        .smp-quote p {
          margin: 10px 0 0;
          color: #5d4640;
          font-size: 19px;
          font-weight: 400;
          line-height: 1.55;
        }

        .smp-quote-line {
          display: block;
          width: 44px;
          height: 1px;
          margin-top: 20px;
          background: linear-gradient(90deg, #3192ab, transparent);
        }

        .smp-quote small {
          display: block;
          margin-top: 12px;
          color: #a08578;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.6;
        }

        .smp-areas {
          position: relative;
          background:
            radial-gradient(700px 300px at 86% 0%, rgba(226, 160, 58, 0.09), transparent 70%),
            linear-gradient(180deg, #fcf8f5 0%, #f7f0ea 100%);
          border-top: 1px solid rgba(141, 73, 54, 0.1);
          border-bottom: 1px solid rgba(141, 73, 54, 0.1);
        }

        .smp-section-heading-centered {
          margin: 0 auto;
          text-align: center;
        }

        .smp-eyebrow-centered {
          justify-content: center;
        }

        .smp-eyebrow-centered > span:last-child {
          background: linear-gradient(90deg, #c8703a, #e2a03a);
        }

        .smp-section-description {
          max-width: 580px;
          margin: 16px auto 0;
          color: #a08578;
          font-size: 15px;
          line-height: 1.65;
        }

        .smp-areas-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 42px;
        }

        .smp-area-item {
          height: 100%;
          padding: 28px 26px;
          border: 1px solid rgba(141, 73, 54, 0.13);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.82);
          box-shadow: 0 10px 30px rgba(93, 70, 64, 0.05);
          transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
        }

        .smp-area-item:hover {
          transform: translateY(-4px);
          border-color: rgba(49, 146, 171, 0.36);
          box-shadow: 0 16px 36px rgba(93, 70, 64, 0.1);
        }

        .smp-area-number {
          color: #c8703a;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
        }

        .smp-area-item h3 {
          margin: 14px 0 0;
          color: #8d4936;
          font-size: 21px;
          font-weight: 400;
          line-height: 1.3;
        }

        .smp-area-item p {
          margin: 14px 0 0;
          color: #806d65;
          font-size: 14px;
          line-height: 1.65;
        }

        .smp-information {
          background-color: #8d4936;
          color: #ffffff;
        }

        .smp-information-inner {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(420px, 1.15fr);
          align-items: start;
          gap: 72px;
          padding-top: 70px;
          padding-bottom: 72px;
        }

        .smp-eyebrow-light {
          color: #f0ccb3;
        }

        .smp-eyebrow-light > span {
          background: linear-gradient(90deg, #f0ccb3, rgba(240, 204, 179, 0.3));
        }

        .smp-information-heading h2 {
          color: #ffffff;
          font-size: 36px;
        }

        .smp-information-list {
          margin: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .smp-information-list > div {
          display: grid;
          grid-template-columns: 145px minmax(0, 1fr);
          gap: 20px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .smp-information-list dt {
          color: #f0ccb3;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        .smp-information-list dd {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 1.55;
        }

        .smp-information-list dd span {
          display: block;
        }

        @media (max-width: 980px) {
          .smp-hero {
            padding-top: 72px;
          }

          .smp-hero-inner {
            grid-template-columns: 1fr;
            gap: 24px;
            min-height: 0;
            padding: 52px 24px 58px;
            text-align: center;
          }

          .smp-intro {
            padding-left: 0;
          }

          .smp-eyebrow,
          .smp-credentials {
            justify-content: center;
          }

          .smp-lead {
            margin-right: auto;
            margin-left: auto;
          }

          .smp-photo-area {
            min-height: 440px;
          }

          .smp-story-inner,
          .smp-areas-inner,
          .smp-information-inner {
            padding: 62px 24px;
          }

          .smp-story-grid,
          .smp-information-inner {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .smp-areas-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .smp-hero-inner {
            padding: 44px 18px 48px;
          }

          .smp-title {
            font-size: 42px;
          }

          .smp-role {
            font-size: 12px;
          }

          .smp-lead {
            font-size: 16px;
          }

          .smp-credentials {
            gap: 15px;
            padding: 15px 17px;
          }

          .smp-credentials strong {
            font-size: 15px;
          }

          .smp-photo-area {
            min-height: 375px;
          }

          .smp-photo-frame {
            width: 290px;
            height: 340px;
            border-width: 8px;
          }

          .smp-photo-decoration span:nth-child(1) {
            width: 360px;
            height: 360px;
          }

          .smp-photo-decoration span:nth-child(2) {
            width: 320px;
            height: 320px;
          }

          .smp-photo-decoration span:nth-child(3) {
            width: 270px;
            height: 270px;
          }

          .smp-story-inner,
          .smp-areas-inner,
          .smp-information-inner {
            padding: 52px 19px;
          }

          .smp-section-heading h2,
          .smp-information-heading h2 {
            font-size: 30px;
          }

          .smp-story-copy {
            font-size: 15px;
          }

          .smp-information-list > div {
            grid-template-columns: 1fr;
            gap: 6px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .smp-primary-button,
          .smp-area-item {
            transition: none;
          }

          .smp-primary-button:hover,
          .smp-area-item:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
