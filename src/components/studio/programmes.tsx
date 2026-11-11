import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { programmes } from "@/lib/data/studio";

export function StudioProgrammes() {
  return (
    <section id="programmes" className="scroll-mt-24 bg-cream py-16 md:py-20">
      <div className="wrap">
        <Reveal>
          <h2 className="font-display text-[2rem] font-bold tracking-[-0.03em] text-ink md:text-[2.7rem]">
            Find your starting point.
          </h2>
          <p className="mt-2 max-w-lg text-[0.95rem] text-ink/55">
            Two practical paths. One goal: skills you can actually use.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:mt-11 md:grid-cols-2 md:gap-6">
          {programmes.map((programme, index) => {
            const dark = programme.tone === "dark";
            return (
              <Reveal key={programme.id} delay={index * 100}>
                <article
                  className={cn(
                    "flex h-full flex-col rounded-[1.4rem] border p-2.5 transition-all duration-300 hover:-translate-y-1",
                    dark
                      ? "border-ink bg-ink text-cream shadow-[0_30px_60px_-40px_rgba(25,23,36,0.9)]"
                      : "border-ink/10 bg-white text-ink shadow-[0_24px_50px_-40px_rgba(25,23,36,0.5)]",
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center gap-1.5 rounded-[0.9rem] p-2",
                      dark ? "bg-white/[0.04]" : "bg-lavender",
                    )}
                  >
                    {programme.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className={cn(
                          "flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-center text-[0.68rem] font-medium sm:text-[0.74rem]",
                          dark
                            ? featureIndex === 2
                              ? "bg-lime text-ink"
                              : "bg-white/[0.06] text-cream/70"
                            : "bg-white text-ink/70",
                        )}
                      >
                        {feature}
                        {featureIndex < programme.features.length - 1 ? (
                          <ArrowRight
                            className={cn(
                              "size-3",
                              dark ? "text-cream/30" : "text-ink/30",
                            )}
                          />
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-1 flex-col px-3 pb-2 pt-5 md:px-4">
                    <p
                      className={cn(
                        "text-[0.6rem] font-semibold uppercase tracking-[0.16em]",
                        dark ? "text-lime" : "text-violet",
                      )}
                    >
                      {programme.id === "essentials"
                        ? "01 / Start here"
                        : "02 / Level up"}
                    </p>
                    <h3 className="mt-2 font-display text-[1.5rem] font-semibold tracking-tight md:text-[1.7rem]">
                      {programme.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-1.5 text-[0.9rem]",
                        dark ? "text-cream/60" : "text-ink/55",
                      )}
                    >
                      {programme.summary}
                    </p>

                    <p
                      className={cn(
                        "mt-4 text-[0.68rem] font-medium uppercase tracking-[0.1em]",
                        dark ? "text-cream/45" : "text-ink/40",
                      )}
                    >
                      {programme.audience}
                    </p>
                    <p
                      className={cn(
                        "mt-1 text-[0.78rem]",
                        dark ? "text-cream/65" : "text-ink/60",
                      )}
                    >
                      {programme.format}
                    </p>
                    <p
                      className={cn(
                        "mt-1 text-[0.78rem]",
                        dark ? "text-cream/50" : "text-ink/45",
                      )}
                    >
                      {programme.outcome}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-7">
                      <p className="font-display text-[1.5rem] font-semibold tracking-tight md:text-[1.7rem]">
                        ₹{programme.price.toLocaleString("en-IN")}
                      </p>
                      <Link
                        href="#enquire"
                        className={buttonVariants({
                          variant: dark ? "lime" : "ink",
                          size: "cta",
                          className: "px-5",
                        })}
                      >
                        View syllabus
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-5 text-[0.72rem] text-ink/40">
            Programme names, duration, fees and session times are illustrative.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
