"use client";

import { ArrowUpRight, Menu } from "lucide-react";
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
  { label: "Programmes", href: "#programmes" },
  { label: "How you'll learn", href: "#curriculum" },
  { label: "FAQs", href: "#faqs" },
];

export function StudioHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
        <Link
          href="/ai-studio"
          className="font-display text-[1.05rem] font-bold tracking-tight text-cream"
        >
          AI <span className="font-normal text-cream/40">/</span> STUDIO
        </Link>

        <nav className="hidden items-center gap-9 text-[0.86rem] text-cream/70 md:flex">
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
            <Link
              href="#enquire"
              className={buttonVariants({ variant: "lime", size: "cta" })}
            >
              Get the syllabus
              <ArrowUpRight className="size-4" />
            </Link>
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
                <SheetTitle className="font-display text-base font-bold text-cream">
                  AI / STUDIO
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
                <Link
                  href="#enquire"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({
                    variant: "lime",
                    size: "cta",
                    className: "w-full",
                  })}
                >
                  Get the syllabus
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
