"use client";

import { Menu, ArrowUpRight } from "lucide-react";
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
  { label: "Find care", href: "#find-care" },
  { label: "How it works", href: "#how-it-works" },
  { label: "For providers", href: "#for-providers" },
];

export function PractoSiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className="serif-display text-[1.35rem] tracking-tight text-forest md:text-[1.55rem]"
        >
          practo for animals
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-forest/85 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-forest-mid"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Link
              href="#for-providers"
              className={buttonVariants({ variant: "forest", size: "cta" })}
            >
              List your business
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="forest-soft"
                  size="icon-lg"
                  className="rounded-full md:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[86%] bg-cream sm:max-w-sm">
              <SheetHeader className="border-b border-forest/10 p-6 pb-5">
                <SheetTitle className="serif-display text-[1.3rem] font-normal text-forest">
                  practo for animals
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-forest transition-colors hover:bg-forest/5"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto border-t border-forest/10 p-4">
                <Link
                  href="#for-providers"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({
                    variant: "forest",
                    size: "cta",
                    className: "w-full",
                  })}
                >
                  List your business
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
