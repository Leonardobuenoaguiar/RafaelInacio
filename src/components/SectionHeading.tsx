import Reveal from "./Reveal";
import { cn } from "../utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-2xl lg:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <div
        className={cn(
          "mb-5 flex items-center gap-4",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        <span className="h-px w-8 bg-gold-500" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-600">
          {eyebrow}
        </span>
        {align === "center" && <span className="h-px w-8 bg-gold-500" />}
      </div>
      <h2
        className={cn(
          "text-balance font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.9rem]",
          dark ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base font-light leading-relaxed sm:text-lg",
            dark ? "text-white/65" : "text-neutral-600"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
