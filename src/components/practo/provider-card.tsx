"use client";

import { ArrowRight, Clock, MapPin, Navigation, Phone, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { Provider } from "@/lib/data/practo";

export function ProviderCard({ provider }: { provider: Provider }) {
  const [open, setOpen] = useState(false);
  const mapsQuery = encodeURIComponent(
    `${provider.name}, ${provider.area}, Bengaluru`,
  );

  return (
    <>
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/20 hover:shadow-[0_24px_50px_-38px_rgba(20,62,53,0.9)] md:flex-row md:gap-5 md:p-3">
        <div className="relative aspect-4/3 w-full overflow-hidden bg-mint md:aspect-auto md:w-[13.5rem] md:shrink-0 md:rounded-xl">
          <Image
            src={provider.image}
            alt={provider.alt}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 220px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[0.66rem] font-medium text-forest shadow-sm backdrop-blur md:hidden">
            <span className="size-1.5 rounded-full bg-forest-mid" />
            {provider.hours}
          </span>
        </div>

        <div className="flex flex-1 flex-col px-4 pb-4 pt-3 md:px-0 md:py-2 md:pr-3">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-[1.02rem] font-semibold leading-snug text-forest md:text-[1.12rem]">
                {provider.name}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-[0.76rem] text-forest-muted">
                {provider.area}
                <span aria-hidden>·</span>
                {provider.distance} km away
              </p>
            </div>
            <div className="hidden shrink-0 text-right md:block">
              <p className="text-[0.68rem] text-forest-muted">Consultation from</p>
              <p className="text-[0.95rem] font-semibold text-forest">
                ₹{provider.fee}
              </p>
            </div>
          </div>

          <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8rem]">
            <span className="inline-flex items-center gap-1 font-medium text-forest">
              <Star className="size-3.5 fill-forest text-forest" />
              {provider.rating}
            </span>
            <span className="text-forest-muted">({provider.reviews} reviews)</span>
            <span className="text-forest/25 md:hidden">·</span>
            <span className="text-forest-muted md:hidden">
              From ₹{provider.fee}
            </span>
          </div>

          <p className="mt-2 text-[0.8rem] text-forest-mid">
            {provider.services.join(" · ")}
          </p>

          <div className="mt-3 flex items-center justify-between gap-3 md:mt-auto md:pt-5">
            <span className="hidden items-center gap-1.5 text-[0.75rem] text-forest-muted md:inline-flex">
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  provider.openNow ? "bg-forest-mid" : "bg-forest/30",
                )}
              />
              {provider.hours}
            </span>
            <div className="flex w-full items-center gap-2 md:w-auto">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className={buttonVariants({
                  variant: "forest",
                  size: "cta",
                  className: "flex-1 md:flex-none",
                })}
              >
                View provider
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
              </button>
              <a
                href={`tel:${provider.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-forest transition-colors hover:bg-forest/5"
              >
                <Phone className="size-3.5" />
                Call
              </a>
            </div>
          </div>
        </div>
      </article>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-[92%] overflow-y-auto bg-cream p-0 sm:max-w-md"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>{provider.name}</SheetTitle>
            <SheetDescription>Provider details and contact</SheetDescription>
          </SheetHeader>

          <div className="relative aspect-[16/10] w-full overflow-hidden bg-mint">
            <Image
              src={provider.image}
              alt={provider.alt}
              fill
              sizes="(max-width: 640px) 100vw, 440px"
              className="object-cover"
            />
          </div>

          <div className="space-y-6 p-6">
            <div>
              <p className="eyebrow text-forest-mid">Provider</p>
              <h2 className="serif-display mt-2 text-[1.8rem] text-forest">
                {provider.name}
              </h2>
              <p className="mt-2 text-sm text-forest-muted">
                {provider.area} · {provider.distance} km away
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1.5 text-xs font-medium text-forest">
                <Star className="size-3.5 fill-forest text-forest" />
                {provider.rating} · {provider.reviews} reviews
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs text-forest">
                <Clock className="size-3.5" />
                {provider.hours}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs text-forest">
                <MapPin className="size-3.5" />
                {provider.area}, Bengaluru
              </span>
            </div>

            <div>
              <h3 className="eyebrow text-[0.62rem] text-forest-muted">
                Services
              </h3>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {provider.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-forest/15 px-3 py-1.5 text-xs text-forest"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-forest/10 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-forest-muted">
                  Consultation from
                </span>
                <span className="text-lg font-semibold text-forest">
                  ₹{provider.fee}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-forest-muted">
                Indicative fee only. Confirm availability and final cost with the
                provider before you travel.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={`tel:${provider.phone.replace(/\s/g, "")}`}
                className={buttonVariants({ variant: "forest", size: "cta-lg" })}
              >
                <Phone className="size-4" />
                Call {provider.phone}
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: "forest-soft",
                  size: "cta-lg",
                })}
              >
                <Navigation className="size-4" />
                Get directions
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
