import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
  className?: string;
  goldWord?: string;
}

export default function SectionHeader({ kicker, title, subtitle, align = "center", id, className, goldWord }: SectionHeaderProps) {
  const center = align === "center";
  const displayTitle = goldWord
    ? title.replace(goldWord, `<span class="gold-text">${goldWord}</span>`)
    : title;

  return (
    <div className={cn(center && "text-center", "mb-12", className)}>
      {kicker && (
        <div className={cn("flex items-center gap-3 mb-4", center && "justify-center")}>
          <span className="block h-px w-8 bg-gold/60" />
          <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">{kicker}</span>
          <span className="block h-px w-8 bg-gold/60" />
        </div>
      )}
      <h2
        id={id}
        className="text-display-sm font-display font-bold text-foreground leading-tight"
        dangerouslySetInnerHTML={goldWord ? { __html: displayTitle } : undefined}
      >
        {!goldWord ? title : undefined}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-muted-foreground leading-relaxed text-sm", center ? "max-w-xl mx-auto" : "max-w-md")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
