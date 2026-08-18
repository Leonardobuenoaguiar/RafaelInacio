import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { NAV_LINKS, WHATSAPP_URL } from "../lib/data";

function Logo() {
  return (
    <a href="#inicio" className="hdr-logo" aria-label="Dr. Rafael Inácio - Início">
      <svg className="hdr-mark" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id="rf-ring" x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0%" stopColor="#F6DFA6" />
            <stop offset="28%" stopColor="#D9AE55" />
            <stop offset="55%" stopColor="#A9761C" />
            <stop offset="78%" stopColor="#E7C77E" />
            <stop offset="100%" stopColor="#8C5E12" />
          </linearGradient>

          <linearGradient id="rf-letter" x1="0.1" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="#FBEBC2" />
            <stop offset="30%" stopColor="#E8C273" />
            <stop offset="58%" stopColor="#C08E2B" />
            <stop offset="82%" stopColor="#F2D693" />
            <stop offset="100%" stopColor="#9A6B15" />
          </linearGradient>

          <linearGradient id="rf-brain" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E9C97F" />
            <stop offset="100%" stopColor="#A87A22" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="52"
          r="43"
          fill="none"
          stroke="url(#rf-ring)"
          strokeWidth="4"
        />

        <g
          transform="translate(50 30) scale(0.74) translate(-50 -26)"
          fill="none"
          stroke="url(#rf-brain)"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M50 13.2c-2.4-1.7-5.6-1.5-7.6.6-2.8-.5-5.4 1.2-6 3.9-2.5.7-4 3.2-3.4 5.7-1.9 1.6-2.2 4.3-.7 6.2-.6 2.2.6 4.5 2.7 5.3.5 2.1 2.6 3.5 4.8 3.1 1.4 1.5 3.7 1.8 5.4.7 1.3.8 2.9.8 4.2.1" />
          <path d="M50 13.2c2.4-1.7 5.6-1.5 7.6.6 2.8-.5 5.4 1.2 6 3.9 2.5.7 4 3.2 3.4 5.7 1.9 1.6 2.2 4.3.7 6.2.6 2.2-.6 4.5-2.7 5.3-.5 2.1-2.6 3.5-4.8 3.1-1.4 1.5-3.7 1.8-5.4.7-1.3.8-2.9.8-4.2.1" />
          <path d="M50 13.2v25.6" />
          <path d="M44.6 17.8c-1.9 1.1-2.2 3-.7 4.4-1.7 1.2-1.8 3.1-.2 4.4-1.4 1.2-1.4 2.9 0 4.1" />
          <path d="M40 22.4c-1.4.9-1.6 2.4-.4 3.5M41.4 30.6c-1.2.9-1.3 2.3-.2 3.3" />
          <path d="M55.4 17.8c1.9 1.1 2.2 3 .7 4.4 1.7 1.2 1.8 3.1.2 4.4 1.4 1.2 1.4 2.9 0 4.1" />
          <path d="M60 22.4c1.4.9 1.6 2.4.4 3.5M58.6 30.6c1.2.9 1.3 2.3.2 3.3" />
          <path d="M50 38.8c.1 2.1-.6 3.9-2 5.3" strokeWidth="1.6" />
        </g>

        <circle cx="48.4" cy="47.4" r="2.2" fill="#FDF6E6" />

        <text
          x="50"
          y="83"
          textAnchor="middle"
          fill="url(#rf-letter)"
          fontFamily='"Playfair Display", "Didot", "Bodoni MT", Georgia, "Times New Roman", serif'
          fontSize="52"
          fontWeight="500"
        >
          R
        </text>
      </svg>

      <span className="hdr-word">
        <span className="hdr-name">Dr. Rafael Inácio</span>
        <span className="hdr-spec">
          Psiquiatria Clínica
          <br />
          Psicoterapia
          <br />
          Psiquiatria Forense
        </span>
      </span>
    </a>
  );
}

function getNavHref(label: string, href: string) {
  /* A antiga seção #contato foi removida; o contato agora leva ao Footer. */
  return /contato/i.test(label) ? "#rodape" : href;
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="hdr">
      <div className="hdr-inner">
        <Logo />

        <nav className="hdr-nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={getNavHref(link.label, link.href)}
              className={cn("hdr-link", index === 0 && "is-active")}
            >
              {link.label}

              {/especialidade/i.test(link.label) && (
                <svg className="hdr-caret" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="m6 9 6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* Visível no desktop e também como botão compacto no mobile. */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hdr-cta hdr-cta-main"
        >
          Agendar Consulta
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="hdr-burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span className={cn("hdr-bar", open && "a")} />
          <span className={cn("hdr-bar", open && "b")} />
          <span className={cn("hdr-bar", open && "c")} />
        </button>
      </div>

      <div className={cn("hdr-mobile", open && "is-open")}>
        <nav aria-label="Navegação móvel">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={getNavHref(link.label, link.href)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            className="hdr-cta hdr-cta-mobile"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Agendar Consulta
          </a>
        </nav>
      </div>

      <style>{`
        .hdr {
          position: fixed;
          inset-inline: 0;
          top: 0;
          z-index: 50;
          background-color: #ffffff;
          border-bottom: 1px solid #e8edf3;
          font-family: "Jost", "Questrial", "Century Gothic", "Futura",
            "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }

        .hdr-inner {
          margin: 0 auto;
          max-width: 1346px;
          height: 110px;
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 0 24px;
        }

        .hdr-logo {
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .hdr-mark {
          width: 84px;
          height: 84px;
          display: block;
          flex: 0 0 auto;
          transition: transform 0.3s ease;
        }

        .hdr-logo:hover .hdr-mark {
          transform: scale(1.04);
        }

        .hdr-word {
          display: flex;
          flex-direction: column;
        }

        .hdr-name {
          color: #a16852;
          font-size: 25px;
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: 0.01em;
        }

        .hdr-spec {
          margin-top: 6px;
          color: #d5aa86;
          font-size: 10px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 46px;
          margin-left: auto;
        }

        .hdr-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #3192ab;
          font-size: 18px;
          font-weight: 400;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.25s ease;
        }

        .hdr-link.is-active,
        .hdr-link:hover {
          color: #bf804b;
        }

        .hdr-caret {
          width: 16px;
          height: 16px;
        }

        .hdr-cta {
          margin-left: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 0 30px;
          border-radius: 999px;
          background-color: #3192ab;
          color: #ffffff;
          font-size: 17px;
          font-weight: 400;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background-color 0.25s ease, transform 0.25s ease;
        }

        .hdr-cta:hover {
          background-color: #2a8199;
          transform: translateY(-1px);
        }

        .hdr-burger {
          display: none;
          position: relative;
          flex: 0 0 auto;
          width: 44px;
          height: 44px;
          margin-left: auto;
          border: 1px solid #e3d3cb;
          border-radius: 999px;
          background: transparent;
          cursor: pointer;
        }

        .hdr-bar {
          position: absolute;
          left: 12px;
          width: 20px;
          height: 2px;
          border-radius: 2px;
          background-color: #a16852;
          transition: all 0.3s ease;
        }

        .hdr-bar:nth-child(1) { top: 15px; }
        .hdr-bar:nth-child(2) { top: 21px; }
        .hdr-bar:nth-child(3) { top: 27px; }
        .hdr-bar.a { top: 21px; transform: rotate(45deg); }
        .hdr-bar.b { opacity: 0; }
        .hdr-bar.c { top: 21px; transform: rotate(-45deg); }

        .hdr-mobile {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }

        .hdr-mobile.is-open {
          max-height: 90vh;
          opacity: 1;
        }

        .hdr-mobile nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 18px 24px 26px;
          border-top: 1px solid #eef2f6;
          background-color: #ffffff;
        }

        .hdr-mobile nav > a {
          padding: 12px 4px;
          color: #3192ab;
          font-size: 19px;
          text-decoration: none;
        }

        /* Esta regra mais específica preserva o formato e o texto do CTA. */
        .hdr-mobile nav > .hdr-cta-mobile {
          align-self: flex-start;
          width: auto;
          height: 44px;
          margin: 12px 0 0;
          padding: 0 22px;
          color: #ffffff;
          font-size: 15px;
        }

        @media (max-width: 1100px) {
          .hdr-nav {
            display: none;
          }

          .hdr-inner {
            height: 88px;
          }

          .hdr-mark {
            width: 64px;
            height: 64px;
          }

          .hdr-name {
            font-size: 20px;
          }

          .hdr-spec {
            font-size: 9px;
          }

          /* O CTA não desaparece mais no mobile. */
          .hdr-inner > .hdr-cta-main {
            display: inline-flex;
            height: 40px;
            margin-left: auto;
            padding: 0 18px;
            font-size: 14px;
          }

          .hdr-burger {
            display: block;
            margin-left: 0;
          }
        }

        @media (max-width: 600px) {
          .hdr-inner {
            height: 78px;
            gap: 10px;
            padding: 0 12px;
          }

          .hdr-logo {
            gap: 8px;
          }

          .hdr-mark {
            width: 52px;
            height: 52px;
          }

          .hdr-name {
            font-size: 17px;
          }

          .hdr-spec {
            display: none;
          }

          .hdr-inner > .hdr-cta-main {
            height: 38px;
            padding: 0 14px;
            font-size: 13px;
          }

          .hdr-burger {
            width: 40px;
            height: 40px;
          }

          .hdr-bar {
            left: 10px;
          }

          .hdr-bar:nth-child(1) { top: 13px; }
          .hdr-bar:nth-child(2) { top: 19px; }
          .hdr-bar:nth-child(3) { top: 25px; }
          .hdr-bar.a,
          .hdr-bar.c { top: 19px; }
        }

        @media (max-width: 480px) {
          /* Libera espaço para o texto completo "Agendar Consulta". */
          .hdr-word {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
