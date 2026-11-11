import { ArrowRight, Circle } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { draftSlides } from "@/lib/data/content";

const slideTones = {
  violet: "bg-violet text-white",
  lime: "bg-lime text-ink",
  light: "bg-white text-ink",
};

export function ContentWorkspace() {
  return (
    <section className="bg-lavender-soft py-14 md:py-16">
      <div className="wrap">
        <Reveal>
          <h2 className="font-display text-[1.5rem] font-bold tracking-[-0.02em] text-ink md:text-[1.9rem]">
            02 / A small workspace. A clear next action.
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_30px_60px_-50px_rgba(25,23,36,0.8)]">
            <div className="flex items-center justify-between gap-3 bg-ink px-4 py-2.5 text-cream/70 md:px-5">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em]">
                Content / OS <span className="mx-1.5 text-cream/25">/</span>{" "}
                <span className="font-normal text-cream/50">Draft 014</span>
              </p>
              <span className="hidden items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.62rem] text-cream/65 sm:inline-flex">
                <span className="size-1.5 rounded-full bg-lime" />
                Ready for founder review
              </span>
            </div>

            <div className="grid gap-4 p-4 md:grid-cols-[0.78fr_1.22fr] md:p-5">
              <div className="flex flex-col rounded-xl bg-cream p-4 md:p-5">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
                  Founder brief
                </p>
                <h3 className="mt-2 font-display text-[1.2rem] font-semibold tracking-tight text-ink">
                  What&apos;s the idea?
                </h3>
                <p className="mt-2 border-l-2 border-ink/15 pl-3 text-[0.82rem] italic leading-relaxed text-ink/60">
                  &ldquo;People overcomplicate AI. Show a beginner how to build
                  one useful workflow, not collect more tools.&rdquo;
                </p>

                <dl className="mt-5 space-y-2.5 text-[0.74rem]">
                  <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-2">
                    <dt className="text-ink/45">Audience</dt>
                    <dd className="text-right font-medium text-ink">
                      Students & early-career
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-2">
                    <dt className="text-ink/45">Goal / format</dt>
                    <dd className="text-right font-medium text-ink">
                      Teach one process · 6 slides · 4:5
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-ink/45">Platform</dt>
                    <dd className="text-right font-medium text-ink">
                      LinkedIn + Instagram
                    </dd>
                  </div>
                </dl>

                <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-violet px-4 py-2 text-[0.78rem] font-medium text-white">
                  Generate first draft
                  <ArrowRight className="size-3.5" />
                </span>
              </div>

              <div className="rounded-xl bg-[#fbfaf7] p-4 md:p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-violet">
                      Draft 014 / Your first AI workflow
                    </p>
                    <h3 className="mt-1 font-display text-[1.05rem] font-semibold tracking-tight text-ink">
                      One useful task. Six clear slides.
                    </h3>
                  </div>
                  <Circle className="size-2 fill-lime text-lime" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {draftSlides.map((slide) => (
                    <div
                      key={slide.tag}
                      className={cn(
                        "flex min-h-[7.6rem] flex-col justify-between rounded-lg border border-ink/5 p-3 transition-transform duration-300 hover:-translate-y-0.5",
                        slideTones[slide.tone],
                      )}
                    >
                      <p
                        className={cn(
                          "text-[0.48rem] font-semibold uppercase tracking-[0.14em]",
                          slide.tone === "violet" ? "text-white/60" : "text-ink/40",
                        )}
                      >
                        {slide.tag}
                      </p>
                      <div>
                        <p className="text-[0.72rem] font-semibold leading-snug">
                          {slide.title}
                        </p>
                        {slide.copy ? (
                          <p
                            className={cn(
                              "mt-1 text-[0.6rem]",
                              slide.tone === "violet"
                                ? "text-white/70"
                                : "text-ink/50",
                            )}
                          >
                            {slide.copy}
                          </p>
                        ) : null}
                        <span
                          className={cn(
                            "mt-2 block h-0.5 w-6 rounded-full",
                            slide.tone === "violet"
                              ? "bg-white/50"
                              : slide.tone === "lime"
                                ? "bg-violet"
                                : "bg-violet/70",
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.62rem] text-ink/40">
                  <span>Brand kit: Inter / Ink / Lime / Violet</span>
                  <span>Layouts: hook, steps, checklist, CTA</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
