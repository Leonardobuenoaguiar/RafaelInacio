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
    <footer id="rodape" className="bg-[#080705] text-white">
      <div className="gold-line h-px w-full" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/70 bg-ink-900">
                <span className="font-display text-xl font-semibold text-gold-400">R</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold tracking-wide text-white">
                  Dr. Rafael Inácio
                </span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-gold-400">
                  Médico Psiquiatra
                </span>
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/60">
              <span>CRM-SP 189212</span>
              <span>RQE 102285</span>
            </div>
            <p className="mt-3 text-sm font-light text-white/50">
              Atendimento presencial e por telemedicina.
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Consultório
            </h3>
            <address className="mt-5 space-y-0.5 text-sm font-light not-italic leading-relaxed text-white/65">
              <p className="flex items-center gap-2">
                <span className="text-gold-500">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                {ADDRESS_LINES[0]}
              </p>
              <p className="pl-6">{ADDRESS_LINES[1]}</p>
              <p className="pl-6">{ADDRESS_LINES[2]}</p>
            </address>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-gold-300"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/40 text-gold-400">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M2 12C2 5 6 2 12 2s10 3 10 10-4 10-10 10c-1.4 0-2.7-.2-3.8-.7L2 22l1.2-4.3C2.6 16.3 2 14.4 2 12Z" />
                </svg>
              </span>
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Redes sociais
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-white/75 transition-colors hover:text-gold-300"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-gold-500/50">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="text-sm">Instagram · {INSTAGRAM_HANDLE}</span>
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-white/75 transition-colors hover:text-gold-300"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-gold-500/50">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M6.5 8.5v13H2.8v-13h3.7ZM4.6 7.1a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM21.4 13.9v7.6h-3.7v-7c0-2-.8-3-2.4-3-1.8 0-2.9 1.2-2.9 3v7H8.7v-13h3.7v1.9c.5-.9 1.6-2.2 3.8-2.2 2.9 0 5.2 1.8 5.2 5.7Z" />
                    </svg>
                  </span>
                  <span className="text-sm">LinkedIn · Dr. Rafael Inácio</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-white/75 transition-colors hover:text-gold-300"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-gold-500/50">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M2 12C2 5 6 2 12 2s10 3 10 10-4 10-10 10c-1.4 0-2.7-.2-3.8-.7L2 22l1.2-4.3C2.6 16.3 2 14.4 2 12Z" />
                    </svg>
                  </span>
                  <span className="text-sm">WhatsApp · {WHATSAPP_DISPLAY}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="mx-auto max-w-xl text-center text-xs font-light leading-relaxed text-white/40">
            Este site possui caráter exclusivamente informativo e não substitui uma avaliação
            médica.
          </p>
          <p className="mt-4 text-center text-xs text-white/35">
            © {new Date().getFullYear()} Dr. Rafael Inácio · Médico Psiquiatra · CRM-SP 189212
          </p>
        </div>
      </div>
    </footer>
  );
}
