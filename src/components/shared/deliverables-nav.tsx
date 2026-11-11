import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type DeliverablesNavProps = {
  current: "practo" | "studio" | "content";
  className?: string;
  tone?: "light" | "dark";
};

const links = [
  { key: "practo", href: "/", label: "Practo for Animals" },
  { key: "studio", href: "/ai-studio", label: "AI Studio" },
  { key: "content", href: "/content-os", label: "Content OS" },
] as const;

export function DeliverablesNav({
  current,
  className,
  tone = "light",
}: DeliverablesNavProps) {
  return (
    <nav aria-label="Deliverables" className={cn("flex flex-wrap gap-2", className)}>
      {links.map((link) => {
        const active = link.key === current;
        return (
          <Link
            key={link.key}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors",
              tone === "light"
                ? "border-forest/20 text-forest/80 hover:border-forest/50 hover:text-forest"
                : "border-white/15 text-cream/70 hover:border-white/40 hover:text-cream",
              active &&
                (tone === "light"
                  ? "border-transparent bg-forest text-paper hover:text-paper"
                  : "border-transparent bg-lime text-ink hover:text-ink"),
            )}
          >
            {link.label}
            {active ? <ArrowUpRight className="size-3" /> : null}
          </Link>
        );
      })}
    </nav>
  );
}
