"use client";

import { ArrowDownToLine, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { label: "System", href: "#pipeline" },
  { label: "Carousel", href: "#carousel" },
  { label: "Handoff", href: "#handoff" },
];

export function ContentHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link
          href="/content-os"
          className="font-display text-[0.95rem] font-bold tracking-[0.02em] text-cream"
        >
          CONTENT <span className="font-normal text-cream/40">/</span> OS
        </Link>

        <nav className="hidden items-center gap-8 text-[0.84rem] text-cream/65 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <a
              href="/practical-ai-playbook.pdf"
              download
              className={buttonVariants({ variant: "lime", size: "cta" })}
            >
              <ArrowDownToLine className="size-4" />
              Download PDF
            </a>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ink-soft"
                  size="icon-lg"
                  className="rounded-full md:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[86%] border-white/10 bg-ink text-cream sm:max-w-sm"
            >
              <SheetHeader className="border-b border-white/10 p-6 pb-5">
                <SheetTitle className="font-display text-sm font-bold text-cream">
                  CONTENT / OS
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-cream/80 transition-colors hover:bg-white/5 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto border-t border-white/10 p-4">
                <a
                  href="/practical-ai-playbook.pdf"
                  download
                  className={buttonVariants({
                    variant: "lime",
                    size: "cta",
                    className: "w-full",
                  })}
                >
                  <ArrowDownToLine className="size-4" />
                  Download PDF
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
