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

        {/* Cérebro redesenhado diretamente no viewBox, sem escalas que deformam. */}
        <g
          fill="none"
          stroke="url(#rf-brain)"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* hemisfério esquerdo */}
          <path d="M49.5 16.4c-2.2-3.2-6.6-4-9.3-1.1-3.7-.4-6.6 2.6-6 6.2-3.7 1.3-4.7 5.7-2 8.5-2.1 3.5.2 7.7 4.2 8.1.9 3.7 5.7 4.9 8.3 2.1 2.7 1.9 4.8.1 4.8-2.8v-21Z" />

          {/* hemisfério direito */}
          <path d="M50.5 16.4c2.2-3.2 6.6-4 9.3-1.1 3.7-.4 6.6 2.6 6 6.2 3.7 1.3 4.7 5.7 2 8.5 2.1 3.5-.2 7.7-4.2 8.1-.9 3.7-5.7 4.9-8.3 2.1-2.7 1.9-4.8.1-4.8-2.8v-21Z" />

          {/* fissura central */}
          <path d="M50 16.2v25.3" opacity=".9" />

          {/* sulcos do hemisfério esquerdo */}
          <path d="M41.2 18.6c-2.2 1.1-2.8 3.7-1.1 5.4" />
          <path d="M34.8 24.1c2.5-.5 4.7.8 5.3 3" />
          <path d="M40.3 28.5c-2.7.5-4.1 3.3-2.6 5.6" />
          <path d="M45.1 23.3c-2 1.3-2.3 3.8-.5 5.3" />
          <path d="M43.3 34.3c2.1-.4 3.8.9 4 2.8" />

          {/* sulcos do hemisfério direito */}
          <path d="M58.8 18.6c2.2 1.1 2.8 3.7 1.1 5.4" />
          <path d="M65.2 24.1c-2.5-.5-4.7.8-5.3 3" />
          <path d="M59.7 28.5c2.7.5 4.1 3.3 2.6 5.6" />
          <path d="M54.9 23.3c2 1.3 2.3 3.8.5 5.3" />
          <path d="M56.7 34.3c-2.1-.4-3.8.9-4 2.8" />
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
  return /contato/i.test(label) || href === "#contato" ? "#rodape" : href;
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
            height: 76px;
            gap: 7px;
            padding: 0 8px;
          }

          .hdr-logo {
            min-width: 0;
            gap: 6px;
          }

          .hdr-mark {
            width: 52px;
            height: 52px;
          }

          /* O nome continua visível no mobile. */
          .hdr-word {
            display: flex;
            min-width: 0;
          }

          .hdr-name {
            font-size: 14px;
            white-space: nowrap;
          }

          .hdr-spec {
            display: block;
            margin-top: 3px;
            font-size: 7.5px;
            line-height: 1.25;
            letter-spacing: 0.08em;
          }

          .hdr-inner > .hdr-cta-main {
            height: 40px;
            padding: 0 14px;
            font-size: 12.5px;
          }

          .hdr-burger {
            width: 36px;
            height: 36px;
          }

          .hdr-bar {
            left: 8px;
            width: 18px;
          }

          .hdr-bar:nth-child(1) { top: 11px; }
          .hdr-bar:nth-child(2) { top: 17px; }
          .hdr-bar:nth-child(3) { top: 23px; }
          .hdr-bar.a,
          .hdr-bar.c { top: 17px; }
        }

        @media (max-width: 400px) {
          .hdr-inner {
            height: 72px;
            gap: 5px;
            padding: 0 6px;
          }

          .hdr-mark {
            width: 46px;
            height: 46px;
          }

          .hdr-name {
            font-size: 12.5px;
          }

          .hdr-spec {
            margin-top: 2px;
            font-size: 6.8px;
            line-height: 1.2;
            letter-spacing: 0.055em;
          }

          .hdr-inner > .hdr-cta-main {
            height: 37px;
            padding: 0 10px;
            font-size: 11px;
          }

          .hdr-burger {
            width: 34px;
            height: 34px;
          }

          .hdr-bar {
            left: 8px;
            width: 16px;
          }

          .hdr-bar:nth-child(1) { top: 10px; }
          .hdr-bar:nth-child(2) { top: 16px; }
          .hdr-bar:nth-child(3) { top: 22px; }
          .hdr-bar.a,
          .hdr-bar.c { top: 16px; }
        }
      `}</style>
    </header>
  );
}
