"use client";

import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { animalTypes, serviceFilters } from "@/lib/data/practo";
import type { AnimalType } from "@/lib/data/practo";

type FilterPanelProps = {
  animals: AnimalType[];
  onAnimalsChange: (value: AnimalType[]) => void;
  openNow: boolean;
  onOpenNowChange: (value: boolean) => void;
  emergency: boolean;
  onEmergencyChange: (value: boolean) => void;
  nearbyOnly: boolean;
  onNearbyOnlyChange: (value: boolean) => void;
  services: string[];
  onServicesChange: (value: string[]) => void;
  onReset: () => void;
  className?: string;
};

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

function Check({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <label className="group flex cursor-pointer items-center gap-2.5 py-1.5 text-[0.86rem] text-forest/85">
      <span
        className={cn(
          "grid size-4 place-items-center rounded-[0.3rem] border transition-colors",
          checked
            ? "border-forest bg-forest text-paper"
            : "border-forest/25 bg-white group-hover:border-forest/50",
        )}
      >
        <svg
          viewBox="0 0 12 12"
          aria-hidden
          className={cn("size-2.5", checked ? "opacity-100" : "opacity-0")}
        >
          <path
            d="M2 6.2 4.6 8.8 10 3.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="sr-only"
      />
      {label}
    </label>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-forest/10 py-4 first:border-0 first:pt-0">
      <legend className="eyebrow mb-1 text-[0.62rem] text-forest-muted">
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

export function FilterPanel({
  animals,
  onAnimalsChange,
  openNow,
  onOpenNowChange,
  emergency,
  onEmergencyChange,
  nearbyOnly,
  onNearbyOnlyChange,
  services,
  onServicesChange,
  onReset,
  className,
}: FilterPanelProps) {
  return (
    <div className={cn("rounded-2xl border border-forest/10 bg-white p-5", className)}>
      <div className="flex items-center justify-between pb-3">
        <h3 className="text-[0.95rem] font-semibold text-forest">Refine your search</h3>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1 text-xs text-forest-muted transition-colors hover:text-forest"
        >
          <RotateCcw className="size-3" />
          Reset
        </button>
      </div>

      <Group title="Animal type">
        {animalTypes.map((animal) => (
          <Check
            key={animal.id}
            label={animal.label}
            checked={animals.includes(animal.id)}
            onChange={() => onAnimalsChange(toggle(animals, animal.id))}
          />
        ))}
      </Group>

      <Group title="Availability">
        <Check label="Open now" checked={openNow} onChange={onOpenNowChange} />
        <Check
          label="24/7 emergency"
          checked={emergency}
          onChange={onEmergencyChange}
        />
      </Group>

      <Group title="Distance">
        <Check
          label="Within 5 km"
          checked={nearbyOnly}
          onChange={onNearbyOnlyChange}
        />
      </Group>

      <Group title="Services">
        {serviceFilters.map((service) => (
          <Check
            key={service}
            label={service}
            checked={services.includes(service)}
            onChange={() => onServicesChange(toggle(services, service))}
          />
        ))}
      </Group>
    </div>
  );
}
