import {
  ADDRESS_LINES,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "../lib/data";

export default function Footer() {
  return (
    <footer id="rodape" className="footer">
      <div className="footer-top-line" aria-hidden="true" />

      {/* Formas decorativas */}
      <span className="footer-circle footer-circle-one" aria-hidden="true" />
      <span className="footer-circle footer-circle-two" aria-hidden="true" />

      <div className="footer-inner">
        <div className="footer-grid">
          {/* Marca */}
          <div className="footer-brand">
            <div className="footer-brand-heading">
              <span className="footer-monogram" aria-hidden="true">
                R
              </span>

              <span className="footer-brand-text">
                <strong>Dr. Rafael Inácio</strong>
                <small>Médico Psiquiatra</small>
              </span>
            </div>

            <div className="footer-registers">
              <span>CRM-SP 189212</span>
              <span className="footer-dot" aria-hidden="true" />
              <span>RQE 102285</span>
            </div>

            <p className="footer-brand-description">
              Atendimento psiquiátrico com escuta cuidadosa, respeito e atenção
              individualizada.
            </p>
          </div>

          {/* Consultório */}
          <div className="footer-column">
            <h3 className="footer-column-title">Consultório</h3>

            <address className="footer-address">
              <span className="footer-small-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>

              <span>
                <span>{ADDRESS_LINES[0]}</span>
                <span>{ADDRESS_LINES[1]}</span>
                <span>{ADDRESS_LINES[2]}</span>
              </span>
            </address>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              <span className="footer-link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 12C2 5 6 2 12 2s10 3 10 10-4 10-10 10c-1.4 0-2.7-.2-3.8-.7L2 22l1.2-4.3C2.6 16.3 2 14.4 2 12Z" />
                </svg>
              </span>
              <span>WhatsApp {WHATSAPP_DISPLAY}</span>
            </a>
          </div>

          {/* Redes sociais */}
          <div className="footer-column">
            <h3 className="footer-column-title">Redes sociais</h3>

            <ul className="footer-social-list">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <span className="footer-link-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  </span>
                  <span>Instagram · {INSTAGRAM_HANDLE}</span>
                </a>
              </li>

              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <span className="footer-link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.5 8.5v13H2.8v-13h3.7ZM4.6 7.1a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM21.4 13.9v7.6h-3.7v-7c0-2-.8-3-2.4-3-1.8 0-2.9 1.2-2.9 3v7H8.7v-13h3.7v1.9c.5-.9 1.6-2.2 3.8-2.2 2.9 0 5.2 1.8 5.2 5.7Z" />
                    </svg>
                  </span>
                  <span>LinkedIn · Dr. Rafael Inácio</span>
                </a>
              </li>

              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <span className="footer-link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 12C2 5 6 2 12 2s10 3 10 10-4 10-10 10c-1.4 0-2.7-.2-3.8-.7L2 22l1.2-4.3C2.6 16.3 2 14.4 2 12Z" />
                    </svg>
                  </span>
                  <span>WhatsApp · {WHATSAPP_DISPLAY}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Desenvolvido por Code Art.
          </p>

          <p>
            © {new Date().getFullYear()} Dr. Rafael Inácio · Médico Psiquiatra ·
            CRM-SP 189212
          </p>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          overflow: hidden;
          /* Mesmo marrom utilizado na seção Especialidades. */
          background-color: #8d4936;
          color: #ffffff;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }

        /* Garante que nenhum estilo antigo altere a tipografia do rodapé. */
        .footer *,
        .footer *::before,
        .footer *::after {
          font-family: inherit;
        }

        .footer-top-line {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(231, 201, 182, 0.45) 20%,
            #e7c9b6 50%,
            rgba(231, 201, 182, 0.45) 80%,
            transparent
          );
        }

        .footer-circle {
          position: absolute;
          display: block;
          border-radius: 50%;
          pointer-events: none;
        }

        .footer-circle-one {
          top: -190px;
          right: -130px;
          width: 430px;
          height: 430px;
          border: 1px solid rgba(231, 201, 182, 0.1);
        }

        .footer-circle-two {
          top: -115px;
          right: -55px;
          width: 280px;
          height: 280px;
          border: 1px solid rgba(92, 188, 205, 0.13);
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 56px 28px 28px;
          box-sizing: border-box;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.9fr 0.9fr;
          gap: 64px;
        }

        .footer-brand-heading {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .footer-monogram {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          width: 46px;
          height: 46px;
          border: 1px solid rgba(231, 201, 182, 0.52);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.055);
          color: #f1d2bd;
          font-size: 20px;
          font-weight: 400;
        }

        .footer-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .footer-brand-text strong {
          color: #ffffff;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .footer-brand-text small {
          margin-top: 7px;
          color: #e7c9b6;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.24em;
        }

        .footer-registers {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          font-weight: 400;
        }

        .footer-dot {
          display: block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background-color: #64b4c5;
        }

        .footer-brand-description {
          max-width: 340px;
          margin: 13px 0 0;
          color: rgba(255, 255, 255, 0.56);
          font-size: 13px;
          font-weight: 400;
          line-height: 1.65;
        }

        .footer-column-title {
          margin: 2px 0 0;
          color: #e7c9b6;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .footer-address {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.66);
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.7;
        }

        .footer-address > span:last-child,
        .footer-address > span:last-child span {
          display: block;
        }

        .footer-small-icon {
          display: inline-flex;
          flex: 0 0 auto;
          width: 17px;
          height: 17px;
          margin-top: 2px;
          color: #64b4c5;
        }

        .footer-small-icon svg {
          width: 100%;
          height: 100%;
        }

        .footer-contact-link,
        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: rgba(255, 255, 255, 0.74);
          font-size: 13px;
          font-weight: 400;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .footer-contact-link {
          margin-top: 18px;
        }

        .footer-contact-link:hover,
        .footer-social-link:hover {
          color: #ffffff;
        }

        .footer-link-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(231, 201, 182, 0.25);
          border-radius: 50%;
          color: #e7c9b6;
          background: rgba(255, 255, 255, 0.025);
          transition:
            color 0.25s ease,
            border-color 0.25s ease,
            background-color 0.25s ease,
            transform 0.25s ease;
        }

        .footer-link-icon svg {
          width: 16px;
          height: 16px;
        }

        .footer-contact-link:hover .footer-link-icon,
        .footer-social-link:hover .footer-link-icon {
          color: #ffffff;
          border-color: #3192ab;
          background-color: #3192ab;
          transform: translateY(-1px);
        }

        .footer-social-list {
          display: grid;
          gap: 12px;
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 44px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-bottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.4);
          font-size: 11px;
          font-weight: 400;
          line-height: 1.6;
        }

        .footer-bottom p:first-child {
          max-width: 440px;
        }

        .footer-bottom p:last-child {
          text-align: right;
        }

        @media (max-width: 900px) {
          .footer-inner {
            padding: 50px 24px 26px;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 42px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 640px) {
          .footer-inner {
            padding: 44px 20px 24px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .footer-brand {
            grid-column: auto;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            margin-top: 38px;
          }

          .footer-bottom p:last-child {
            text-align: left;
          }

          .footer-circle-one {
            right: -260px;
          }

          .footer-circle-two {
            right: -180px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-contact-link,
          .footer-social-link,
          .footer-link-icon {
            transition: none;
          }

          .footer-contact-link:hover .footer-link-icon,
          .footer-social-link:hover .footer-link-icon {
            transform: none;
          }
        }
      `}</style>
    </footer>
  );
}
