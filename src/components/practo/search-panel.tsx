"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { searchNeedOptions } from "@/lib/data/practo";

const cities = [
  { value: "bengaluru", label: "Bengaluru" },
  { value: "mumbai", label: "Mumbai" },
  { value: "pune", label: "Pune" },
  { value: "delhi", label: "Delhi NCR" },
];

export function SearchPanel() {
  const [need, setNeed] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        document.getElementById("find-care")?.scrollIntoView({ block: "start" });
      }}
      className="relative z-10 rounded-[1.4rem] border border-forest/10 bg-white p-2 shadow-[0_18px_50px_-30px_rgba(20,62,53,0.5)]"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-stretch">
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 rounded-2xl px-4 py-3 md:border-r md:border-forest/10">
          <span className="eyebrow text-[0.6rem] text-forest-muted">Location</span>
          <Select items={cities} defaultValue="bengaluru">
            <SelectTrigger
              className="h-7 w-full justify-start gap-2 border-0 bg-transparent p-0 text-[0.98rem] font-medium text-forest shadow-none focus-visible:ring-0 md:text-base dark:bg-transparent"
              aria-label="City"
            >
              <MapPin className="size-4 text-forest-mid" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="min-w-52">
              {cities.map((city) => (
                <SelectItem key={city.value} value={city.value}>
                  {city.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex min-w-0 flex-[1.35] flex-col justify-center gap-1 rounded-2xl px-4 py-3">
          <label
            htmlFor="care-need"
            className="eyebrow text-[0.6rem] text-forest-muted"
          >
            What does your animal need?
          </label>
          <Input
            id="care-need"
            list="care-needs"
            value={need}
            onChange={(event) => setNeed(event.target.value)}
            placeholder="Veterinary clinics, services or a provider"
            className="h-7 w-full border-0 bg-transparent p-0 text-[0.98rem] text-forest shadow-none placeholder:text-forest/45 focus-visible:ring-0 md:text-base dark:bg-transparent"
          />
          <datalist id="care-needs">
            {searchNeedOptions.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
        </div>

        <Button
          type="submit"
          variant="forest"
          size="cta-lg"
          className="w-full shrink-0 md:w-auto md:px-7"
        >
          Find care
          <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
        </Button>
      </div>
    </form>
  );
}
