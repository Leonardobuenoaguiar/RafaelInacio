import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { NAV_LINKS, WHATSAPP_URL } from "../lib/data";

/** Logo: monograma R com cérebro, dentro de anel dourado (fundo transparente) */
function Logo() {
  return (
    <a href="#inicio" className="hdr-logo" aria-label="Dr. Rafael Inácio - Início">
      <svg className="hdr-mark" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          {/* dourado do anel: claro em cima, âmbar embaixo */}
          <linearGradient id="rf-ring" x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0%" stopColor="#F6DFA6" />
            <stop offset="28%" stopColor="#D9AE55" />
            <stop offset="55%" stopColor="#A9761C" />
            <stop offset="78%" stopColor="#E7C77E" />
            <stop offset="100%" stopColor="#8C5E12" />
          </linearGradient>
          {/* dourado do R: brilho na diagonal */}
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

        {/* anel externo */}
        <circle
          cx="50"
          cy="52"
          r="43"
          fill="none"
          stroke="url(#rf-ring)"
          strokeWidth="4"
        />

        {/* cérebro (topo) */}
        <g
          transform="translate(50 30) scale(0.74) translate(-50 -26)"
          fill="none"
          stroke="url(#rf-brain)"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* contorno do córtex */}
          <path d="M50 13.2c-2.4-1.7-5.6-1.5-7.6.6-2.8-.5-5.4 1.2-6 3.9-2.5.7-4 3.2-3.4 5.7-1.9 1.6-2.2 4.3-.7 6.2-.6 2.2.6 4.5 2.7 5.3.5 2.1 2.6 3.5 4.8 3.1 1.4 1.5 3.7 1.8 5.4.7 1.3.8 2.9.8 4.2.1" />
          <path d="M50 13.2c2.4-1.7 5.6-1.5 7.6.6 2.8-.5 5.4 1.2 6 3.9 2.5.7 4 3.2 3.4 5.7 1.9 1.6 2.2 4.3.7 6.2.6 2.2-.6 4.5-2.7 5.3-.5 2.1-2.6 3.5-4.8 3.1-1.4 1.5-3.7 1.8-5.4.7-1.3.8-2.9.8-4.2.1" />
          {/* fissura central */}
          <path d="M50 13.2v25.6" />
          {/* sulcos esquerda */}
          <path d="M44.6 17.8c-1.9 1.1-2.2 3-.7 4.4-1.7 1.2-1.8 3.1-.2 4.4-1.4 1.2-1.4 2.9 0 4.1" />
          <path d="M40 22.4c-1.4.9-1.6 2.4-.4 3.5M41.4 30.6c-1.2.9-1.3 2.3-.2 3.3" />
          {/* sulcos direita */}
          <path d="M55.4 17.8c1.9 1.1 2.2 3 .7 4.4 1.7 1.2 1.8 3.1.2 4.4 1.4 1.2 1.4 2.9 0 4.1" />
          <path d="M60 22.4c1.4.9 1.6 2.4.4 3.5M58.6 30.6c1.2.9 1.3 2.3.2 3.3" />
          {/* tronco encefálico */}
          <path d="M50 38.8c.1 2.1-.6 3.9-2 5.3" strokeWidth="1.6" />
        </g>

        {/* ponto luminoso entre o cérebro e o R */}
        <circle cx="48.4" cy="47.4" r="2.2" fill="#FDF6E6" />

        {/* letra R serifada */}
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

        {/* Desktop nav */}
        <nav className="hdr-nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={cn("hdr-link", i === 0 && "is-active")}
            >
              {link.label}
              {/* seta do dropdown em "Especialidades" */}
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

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hdr-cta"
        >
          Atendimento
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="hdr-burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span className={cn("hdr-bar", open && "a")} />
          <span className={cn("hdr-bar", open && "b")} />
          <span className={cn("hdr-bar", open && "c")} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn("hdr-mobile", open && "is-open")}>
        <nav aria-label="Navegação móvel">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
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
            Atendimento
          </a>
        </nav>
      </div>

      <style>{`
        .hdr {
          position: fixed;
          inset-inline: 0;
          top: 0;
          z-index: 50;
          background-color: #FFFFFF;
          border-bottom: 1px solid #E8EDF3;
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

        /* ---------- logo ---------- */
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
          transition: transform .3s ease;
        }
        .hdr-logo:hover .hdr-mark { transform: scale(1.04); }
        .hdr-word { display: flex; flex-direction: column; }
        .hdr-name {
          color: #A16852;
          font-size: 25px;
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: .01em;
        }
        .hdr-spec {
          margin-top: 6px;
          color: #D5AA86;
          font-size: 10px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        /* ---------- nav ---------- */
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
          color: #3192AB;
          font-size: 18px;
          font-weight: 400;
          text-decoration: none;
          white-space: nowrap;
          transition: color .25s ease;
        }
        .hdr-link.is-active { color: #BF804B; }
        .hdr-link:hover { color: #BF804B; }
        .hdr-caret { width: 16px; height: 16px; }

        /* ---------- cta ---------- */
        .hdr-cta {
          margin-left: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 0 30px;
          border-radius: 999px;
          background-color: #3192AB;
          color: #FFFFFF;
          font-size: 17px;
          font-weight: 400;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background-color .25s ease, transform .25s ease;
        }
        .hdr-cta:hover {
          background-color: #2A8199;
          transform: translateY(-1px);
        }

        /* ---------- mobile ---------- */
        .hdr-burger {
          display: none;
          position: relative;
          width: 44px;
          height: 44px;
          margin-left: auto;
          border: 1px solid #E3D3CB;
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
          background-color: #A16852;
          transition: all .3s ease;
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
          transition: max-height .3s ease, opacity .3s ease;
        }
        .hdr-mobile.is-open { max-height: 90vh; opacity: 1; }
        .hdr-mobile nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 18px 24px 26px;
          border-top: 1px solid #EEF2F6;
          background-color: #FFFFFF;
        }
        .hdr-mobile nav > a {
          padding: 12px 4px;
          color: #3192AB;
          font-size: 19px;
          text-decoration: none;
        }
        .hdr-cta-mobile { margin: 12px 0 0; align-self: flex-start; }

        @media (max-width: 1100px) {
          .hdr-nav, .hdr-inner > .hdr-cta { display: none; }
          .hdr-burger { display: block; }
          .hdr-inner { height: 88px; }
          .hdr-mark { width: 64px; height: 64px; }
          .hdr-name { font-size: 20px; }
          .hdr-spec { font-size: 9px; }
        }
        @media (max-width: 480px) {
          .hdr-spec { display: none; }
        }
      `}</style>
    </header>
  );
}
