"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { FilterPanel } from "@/components/practo/filter-panel";
import { ProviderCard } from "@/components/practo/provider-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { providers } from "@/lib/data/practo";
import type { AnimalType } from "@/lib/data/practo";

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "nearest", label: "Nearest first" },
  { value: "rating", label: "Highest rated" },
  { value: "price", label: "Lowest fee" },
];

export function ProviderDirectory() {
  const [animals, setAnimals] = useState<AnimalType[]>([]);
  const [openNow, setOpenNow] = useState(false);
  const [emergency, setEmergency] = useState(false);
  const [nearbyOnly, setNearbyOnly] = useState(false);
  const [services, setServices] = useState<string[]>([]);
  const [sort, setSort] = useState("recommended");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const reset = () => {
    setAnimals([]);
    setOpenNow(false);
    setEmergency(false);
    setNearbyOnly(false);
    setServices([]);
  };

  const activeCount =
    animals.length +
    services.length +
    (openNow ? 1 : 0) +
    (emergency ? 1 : 0) +
    (nearbyOnly ? 1 : 0);

  const results = useMemo(() => {
    const filtered = providers.filter((provider) => {
      if (animals.length && !animals.some((animal) => provider.animals.includes(animal)))
        return false;
      if (openNow && !provider.openNow) return false;
      if (emergency && !provider.emergency) return false;
      if (nearbyOnly && provider.distance > 5) return false;
      if (services.length && !services.every((service) => provider.services.includes(service)))
        return false;
      return true;
    });

    return filtered.sort((a, b) => {
      if (sort === "nearest") return a.distance - b.distance;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "price") return a.fee - b.fee;
      return b.reviews - a.reviews;
    });
  }, [animals, openNow, emergency, nearbyOnly, services, sort]);

  const filterProps = {
    animals,
    onAnimalsChange: setAnimals,
    openNow,
    onOpenNowChange: setOpenNow,
    emergency,
    onEmergencyChange: setEmergency,
    nearbyOnly,
    onNearbyOnlyChange: setNearbyOnly,
    services,
    onServicesChange: setServices,
    onReset: reset,
  };

  return (
    <section id="find-care" className="scroll-mt-24 bg-cream py-14 md:py-20">
      <div className="wrap">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="serif-display text-[2rem] text-forest md:text-[2.6rem]">
              Veterinary care in Bengaluru
            </h2>
            <p className="mt-2 text-sm text-forest-muted">
              {results.length} illustrative{" "}
              {results.length === 1 ? "listing" : "listings"} · Confirm
              availability directly with the provider
            </p>
          </div>

          <div className="hidden items-center gap-2 text-sm text-forest-muted md:flex">
            <span>Sort:</span>
            <Select items={sortOptions} value={sort} onValueChange={(value) => setSort(value as string)}>
              <SelectTrigger
                className="h-9 min-w-40 border-forest/15 bg-white px-3 text-forest"
                aria-label="Sort providers"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-5 flex gap-2 md:hidden">
          <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="forest-soft"
                  size="cta"
                  className="flex-1 rounded-full"
                />
              }
            >
              <SlidersHorizontal className="size-4" />
              Filters
              {activeCount > 0 ? (
                <span className="grid size-5 place-items-center rounded-full bg-forest text-[0.65rem] text-paper">
                  {activeCount}
                </span>
              ) : null}
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="max-h-[86dvh] overflow-y-auto rounded-t-3xl bg-cream"
            >
              <SheetHeader className="border-b border-forest/10 pb-3">
                <SheetTitle className="flex items-center justify-between text-base text-forest">
                  Filters
                  <X className="size-4 text-forest-muted" aria-hidden />
                </SheetTitle>
              </SheetHeader>
              <div className="p-4 pb-8">
                <FilterPanel {...filterProps} className="border-0 p-0" />
                <Button
                  variant="forest"
                  size="cta-lg"
                  className="mt-4 w-full"
                  onClick={() => setFiltersOpen(false)}
                >
                  Show {results.length} results
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Select items={sortOptions} value={sort} onValueChange={(value) => setSort(value as string)}>
            <SelectTrigger
              className="h-11 min-w-0 flex-1 justify-between rounded-full border-forest/15 bg-white px-4 text-forest"
              aria-label="Sort providers"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[17rem_1fr] lg:items-start">
          <div className="hidden lg:sticky lg:top-24 lg:block">
            <FilterPanel {...filterProps} />
            <p className="mt-3 px-1 text-[0.7rem] leading-relaxed text-forest/50">
              Listings, prices and reviews are demo content.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {results.length ? (
              results.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-forest/20 bg-white/60 px-6 py-14 text-center">
                <p className="serif-display text-2xl text-forest">
                  No providers match those filters.
                </p>
                <p className="mx-auto mt-2 max-w-sm text-sm text-forest-muted">
                  Try widening the distance or removing a service to see more
                  animal-care options nearby.
                </p>
                <Button
                  variant="forest"
                  size="cta"
                  className="mt-5"
                  onClick={reset}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
