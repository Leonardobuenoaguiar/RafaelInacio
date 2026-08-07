import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { NAV_LINKS, WHATSAPP_URL } from "../lib/data";

function Monogram() {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label="Dr. Rafael Inácio - Início">
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/70 bg-ink-900 transition-transform duration-300 group-hover:scale-105">
        <span className="font-display text-xl font-semibold text-gold-400">R</span>
        <span className="absolute inset-0 rounded-full ring-1 ring-gold-500/30 ring-offset-2 ring-offset-transparent" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-wide text-white">
          Dr. Rafael Inácio
        </span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-gold-400">
          Médico Psiquiatra
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-ink-900/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Monogram />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[13px] font-medium uppercase tracking-[0.14em] text-white/80 transition-colors hover:text-gold-300"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/60 bg-gold-500 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-ink-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_24px_rgba(201,162,39,0.45)]"
          >
            Agende sua consulta
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <div className="relative h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-full rounded bg-gold-300 transition-all duration-300",
                open && "top-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-full rounded bg-gold-300 transition-all duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-0.5 w-full rounded bg-gold-300 transition-all duration-300",
                open && "top-1.5 -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 lg:hidden",
          open ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav
          className="flex flex-col gap-1 border-t border-white/10 bg-ink-900/95 px-6 py-6 backdrop-blur-xl"
          aria-label="Navegação móvel"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-display text-2xl text-white/85 transition-colors hover:bg-white/5 hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink-900"
          >
            Agende sua consulta
          </a>
        </nav>
      </div>
    </header>
  );
}
