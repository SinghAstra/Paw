import {
  Ambulance,
  ArrowUpRight,
  Building2,
  FlaskConical,
  HeartHandshake,
  House,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { careCategories } from "@/lib/data/practo";

const icons = {
  vets: Stethoscope,
  hospitals: Building2,
  boarding: House,
  diagnostics: FlaskConical,
  ambulances: Ambulance,
  ngos: HeartHandshake,
};

export function ServiceGrid() {
  return (
    <section id="services" className="bg-paper-soft py-12 md:py-16">
      <div className="wrap">
        <h2 className="serif-display text-[2rem] text-forest md:text-[2.6rem]">
          One place. Every care need.
        </h2>
        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:mt-9 md:grid-cols-6 md:gap-3">
          {careCategories.map((category, index) => {
            const Icon = icons[category.id];
            const active = index === 0;
            return (
              <Link
                key={category.id}
                href="#find-care"
                className={cn(
                  "group relative flex flex-col justify-between gap-5 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 md:min-h-[7.5rem] md:p-4",
                  active
                    ? "border-transparent bg-forest text-paper shadow-[0_18px_40px_-28px_rgba(20,62,53,0.9)]"
                    : "border-forest/10 bg-white/70 text-forest hover:border-forest/25 hover:bg-white",
                )}
              >
                <div className="flex items-start justify-between">
                  <Icon
                    className={cn(
                      "size-[1.2rem] transition-transform duration-300 group-hover:scale-110",
                      active ? "text-lime" : "text-forest-mid",
                    )}
                  />
                  <ArrowUpRight
                    className={cn(
                      "size-3.5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                      active ? "text-lime" : "text-forest/45",
                    )}
                  />
                </div>
                <span className="text-[0.86rem] font-medium leading-tight md:text-[0.92rem]">
                  {category.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
