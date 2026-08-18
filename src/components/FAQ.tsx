import { useState } from "react";
import Reveal from "./Reveal";
import { FAQS } from "../lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="faq" aria-labelledby="faq-title">
      {/* Elementos decorativos suaves */}
      <span className="faq-circle faq-circle-one" aria-hidden="true" />
      <span className="faq-circle faq-circle-two" aria-hidden="true" />

      <div className="faq-inner">
        <Reveal>
          <header className="faq-heading">
            <p className="faq-eyebrow">
              <span className="faq-eyebrow-line" aria-hidden="true" />
              Dúvidas frequentes
              <span className="faq-eyebrow-line" aria-hidden="true" />
            </p>

            <h2 id="faq-title" className="faq-title">
              Perguntas frequentes
            </h2>

            <p className="faq-description">
              Reunimos respostas para as dúvidas mais comuns sobre consultas,
              acompanhamento e formas de atendimento.
            </p>
          </header>
        </Reveal>

        <div className="faq-list">
          {FAQS.map((item, index) => {
            const open = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <Reveal key={item.q} delay={index * 50}>
                <article className={`faq-item${open ? " faq-item-open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    aria-controls={answerId}
                  >
                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq-question-text">{item.q}</span>

                    <span className="faq-toggle" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={answerId}
                    className="faq-answer-grid"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                    aria-hidden={!open}
                  >
                    <div className="faq-answer-clip">
                      <div className="faq-answer">
                        <span className="faq-answer-line" aria-hidden="true" />
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              720px 360px at 92% 8%,
              rgba(226, 160, 58, 0.09),
              transparent 68%
            ),
            linear-gradient(180deg, #ffffff 0%, #fcf8f5 52%, #f7f0ea 100%);
          color: #8d4936;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }

        .faq::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(141, 73, 54, 0.2) 22%,
            rgba(200, 112, 58, 0.38) 50%,
            rgba(141, 73, 54, 0.2) 78%,
            transparent
          );
        }

        .faq-circle {
          position: absolute;
          display: block;
          border-radius: 50%;
          pointer-events: none;
        }

        .faq-circle-one {
          top: 120px;
          right: -150px;
          width: 330px;
          height: 330px;
          border: 1px solid rgba(141, 73, 54, 0.08);
        }

        .faq-circle-two {
          top: 175px;
          right: -92px;
          width: 210px;
          height: 210px;
          border: 1px solid rgba(49, 146, 171, 0.1);
        }

        .faq-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 72px 24px 82px;
        }

        .faq-heading {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
        }

        .faq-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 0;
          color: #c8703a;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .faq-eyebrow-line {
          display: block;
          width: 30px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c8703a);
        }

        .faq-eyebrow-line:last-child {
          background: linear-gradient(90deg, #c8703a, transparent);
        }

        .faq-title {
          margin: 14px 0 0;
          color: #8d4936;
          font-size: 40px;
          font-weight: 300;
          line-height: 1.2;
          letter-spacing: 0.005em;
        }

        .faq-description {
          max-width: 590px;
          margin: 16px auto 0;
          color: #a08578;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .faq-list {
          display: grid;
          gap: 12px;
          margin-top: 42px;
        }

        .faq-item {
          overflow: hidden;
          border: 1px solid rgba(141, 73, 54, 0.13);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.84);
          box-shadow: 0 8px 24px rgba(93, 70, 64, 0.035);
          backdrop-filter: blur(8px);
          transition:
            border-color 0.28s ease,
            box-shadow 0.28s ease,
            transform 0.28s ease,
            background-color 0.28s ease;
        }

        .faq-item:hover {
          border-color: rgba(141, 73, 54, 0.25);
          box-shadow: 0 12px 32px rgba(93, 70, 64, 0.07);
          transform: translateY(-1px);
        }

        .faq-item-open {
          border-color: rgba(49, 146, 171, 0.42);
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 14px 38px rgba(49, 146, 171, 0.09);
        }

        .faq-question {
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr) 38px;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 20px 22px;
          border: 0;
          background: transparent;
          color: inherit;
          text-align: left;
          cursor: pointer;
          font: inherit;
        }

        .faq-number {
          color: #c8703a;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.13em;
        }

        .faq-question-text {
          color: #5d4640;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.4;
        }

        .faq-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(141, 73, 54, 0.22);
          border-radius: 50%;
          color: #8d4936;
          background-color: rgba(255, 255, 255, 0.75);
          transition:
            transform 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            background-color 0.3s ease;
        }

        .faq-toggle svg {
          width: 16px;
          height: 16px;
        }

        .faq-item-open .faq-toggle {
          transform: rotate(45deg);
          border-color: #3192ab;
          background-color: #3192ab;
          color: #ffffff;
        }

        .faq-answer-grid {
          display: grid;
          transition: grid-template-rows 0.32s ease;
        }

        .faq-answer-clip {
          overflow: hidden;
        }

        .faq-answer {
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr);
          gap: 16px;
          padding: 0 68px 22px 22px;
        }

        .faq-answer-line {
          justify-self: center;
          width: 1px;
          height: 100%;
          min-height: 34px;
          background: linear-gradient(
            180deg,
            rgba(49, 146, 171, 0.55),
            rgba(49, 146, 171, 0.06)
          );
        }

        .faq-answer p {
          margin: 0;
          color: #806d65;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.7;
        }

        .faq-question:focus-visible {
          outline: 3px solid rgba(49, 146, 171, 0.2);
          outline-offset: -3px;
          border-radius: 18px;
        }

        @media (max-width: 720px) {
          .faq-inner {
            padding: 56px 18px 64px;
          }

          .faq-title {
            font-size: 32px;
          }

          .faq-description {
            font-size: 14px;
          }

          .faq-list {
            margin-top: 32px;
          }

          .faq-question {
            grid-template-columns: 26px minmax(0, 1fr) 34px;
            gap: 11px;
            padding: 18px 16px;
          }

          .faq-question-text {
            font-size: 15px;
          }

          .faq-toggle {
            width: 32px;
            height: 32px;
          }

          .faq-answer {
            grid-template-columns: 26px minmax(0, 1fr);
            gap: 11px;
            padding: 0 50px 19px 16px;
          }

          .faq-circle-one {
            right: -220px;
          }

          .faq-circle-two {
            right: -150px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-item,
          .faq-toggle,
          .faq-answer-grid {
            transition: none;
          }

          .faq-item:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
