import { WHATSAPP_URL } from "../lib/data";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Dr. Rafael no WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:shadow-[0_14px_40px_rgba(37,211,102,0.6)]"
    >
      <span className="flex h-14 w-14 items-center justify-center">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
          <path d="M2 12C2 5 6 2 12 2s10 3 10 10-4 10-10 10c-1.4 0-2.7-.2-3.8-.7L2 22l1.2-4.3C2.6 16.3 2 14.4 2 12Z" />
        </svg>
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:pr-5 group-hover:opacity-100">
        Agendar consulta
      </span>
    </a>
  );
}
