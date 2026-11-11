import Link from "next/link";
import { DeliverablesNav } from "@/components/shared/deliverables-nav";

const links = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export function PractoSiteFooter() {
  return (
    <footer className="bg-forest pb-10 pt-14 text-paper/80">
      <div className="wrap">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="serif-display text-[1.5rem] text-paper">
              practo for animals
            </p>
            <p className="mt-3 text-sm text-paper/70">
              Better discovery. Better-informed care decisions.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-paper/70 transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-paper/50">
              MVP concept · Bengaluru pilot · Sample provider data
            </p>
            <DeliverablesNav current="practo" tone="dark" />
          </div>
        </div>

        <div className="mt-10 border-t border-paper/15 pt-6">
          <p className="text-xs leading-relaxed text-paper/50">
            Directory only. Not medical advice. In an emergency, contact a
            veterinary hospital directly.
          </p>
        </div>
      </div>
    </footer>
  );
}
