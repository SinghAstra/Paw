import {
  ArrowRight,
  Check,
  Layers,
  Mic,
  PenLine,
  Search,
  TriangleAlert,
} from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { pipeline } from "@/lib/data/content";

const icons = {
  mic: Mic,
  search: Search,
  pen: PenLine,
  layers: Layers,
  check: Check,
};

const tones = {
  lavender: "bg-lavender",
  mist: "bg-mist",
  peach: "bg-peach",
  lime: "bg-lime",
};

export function ContentPipeline() {
  return (
    <section id="pipeline" className="scroll-mt-24 bg-white py-14 md:py-16">
      <div className="wrap">
        <Reveal>
          <h2 className="font-display text-[1.5rem] font-bold tracking-[-0.02em] text-ink md:text-[1.9rem]">
            01 / The production pipeline
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {pipeline.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <Reveal key={step.step} delay={index * 70} className="h-full">
                <div className="relative h-full">
                  <article
                    className={cn(
                      "flex h-full flex-col rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1 md:p-5",
                      tones[step.tone],
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-9 place-items-center rounded-full bg-white/55 text-ink/70">
                        <Icon className="size-4" />
                      </span>
                      <span className="font-display text-xs font-semibold text-ink/40">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mt-5 flex items-center gap-1.5 font-display text-[1.1rem] font-semibold tracking-tight text-ink">
                      {step.title}
                      <ArrowRight className="size-3.5 text-ink/35" />
                    </h3>
                    <p className="mt-0.5 text-[0.68rem] font-medium text-ink/55">
                      {step.tool}
                    </p>
                    <p className="mt-2 text-[0.78rem] leading-relaxed text-ink/60">
                      {step.copy}
                    </p>
                  </article>

                  {index < pipeline.length - 1 ? (
                    <span className="absolute -right-2.5 top-1/2 z-10 hidden size-5 -translate-y-1/2 place-items-center rounded-full bg-white text-ink/40 shadow-sm lg:grid">
                      <ArrowRight className="size-3" />
                    </span>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-7 flex items-start gap-2 text-[0.78rem] leading-relaxed text-ink/60 md:items-center">
            <TriangleAlert className="mt-0.5 size-3.5 shrink-0 text-violet md:mt-0" />
            <span>
              <span className="font-semibold text-ink">Quality gate →</span>{" "}
              Missing source? Flag it. Copy too long? Shorten it. No approval? Do
              not export or publish.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
