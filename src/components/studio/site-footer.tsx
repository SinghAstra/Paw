import Link from "next/link";
import { DeliverablesNav } from "@/components/shared/deliverables-nav";

const links = [
  { label: "Programmes", href: "#programmes" },
  { label: "Contact", href: "#enquire" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export function StudioFooter() {
  return (
    <footer className="bg-ink pb-10 pt-14 text-cream/70">
      <div className="wrap">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-[1.05rem] font-bold tracking-tight text-cream">
              AI <span className="font-normal text-cream/40">/</span> STUDIO
            </p>
            <p className="mt-3 text-sm text-cream/60">
              Build skills. Make your next move.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-cream/60 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <DeliverablesNav current="studio" tone="dark" />
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-cream/40">
            Concept design. Programme names, duration, fees and session times are
            illustrative.
          </p>
        </div>
      </div>
    </footer>
  );
}
