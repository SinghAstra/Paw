import Link from "next/link";
import { DeliverablesNav } from "@/components/shared/deliverables-nav";

const links = [
  { label: "System", href: "#pipeline" },
  { label: "Carousel", href: "#carousel" },
  { label: "Handoff", href: "#handoff" },
];

export function ContentFooter() {
  return (
    <footer className="bg-ink pb-10 pt-14 text-cream/65">
      <div className="wrap">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-[0.95rem] font-bold tracking-[0.02em] text-cream">
              CONTENT <span className="font-normal text-cream/40">/</span> OS
            </p>
            <p className="mt-3 text-sm text-cream/55">
              One useful workflow beats ten saved tools.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/55 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/practical-ai-playbook.pdf"
                download
                className="text-cream/55 transition-colors hover:text-cream"
              >
                Download PDF
              </a>
            </nav>
            <DeliverablesNav current="content" tone="dark" />
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-cream/40">
            Design deliverable only. Automation is proposed, not connected. Six
            editable sample slides are arranged above.
          </p>
        </div>
      </div>
    </footer>
  );
}
