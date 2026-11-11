"use client";

import { ArrowDownToLine, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/shared/reveal";
import { Button, buttonVariants } from "@/components/ui/button";
import { carouselSlides } from "@/components/content/slides";
import { cn } from "@/lib/utils";

export function CarouselDeck() {
  const [index, setIndex] = useState(0);
  const active = carouselSlides[index];
  const ActiveSlide = active.Slide;

  const step = (direction: number) => {
    setIndex((current) => (current + direction + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <section id="carousel" className="scroll-mt-24 bg-lime py-14 text-ink md:py-20">
      <div className="wrap">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink/50">
                Sample output / Built with this workflow
              </p>
              <h2 className="mt-2 font-display text-[2rem] font-bold leading-[1.02] tracking-[-0.03em] md:text-[2.9rem]">
                Start simple.
                <br className="sm:hidden" /> Automate what repeats.
              </h2>
              <p className="mt-3 max-w-lg text-[0.9rem] leading-relaxed text-ink/60">
                MVP: generate copy, fill a template, review and export manually.
                Then connect the same steps in n8n once quality is consistent.
              </p>
            </div>
            <a
              href="/practical-ai-playbook.pdf"
              download
              className={buttonVariants({
                variant: "ink",
                size: "cta-lg",
                className: "w-fit shrink-0",
              })}
            >
              <ArrowDownToLine className="size-4" />
              Download the PDF
            </a>
          </div>
        </Reveal>

        <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_19rem] lg:items-start lg:gap-12">
          <div>
            <div className="mx-auto max-w-[26rem] sm:max-w-[30rem]">
              <div
                key={active.id}
                className="animate-fade overflow-hidden rounded-2xl shadow-[0_40px_80px_-40px_rgba(25,23,36,0.55)]"
              >
                <ActiveSlide />
              </div>
            </div>

            <div className="mx-auto mt-5 flex max-w-[30rem] items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="cream"
                  size="icon-lg"
                  className="rounded-full border border-ink/10"
                  onClick={() => step(-1)}
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="size-4" />
                </Button>
                <Button
                  variant="cream"
                  size="icon-lg"
                  className="rounded-full border border-ink/10"
                  onClick={() => step(1)}
                  aria-label="Next slide"
                >
                  <ArrowRight className="size-4" />
                </Button>
                <span className="ml-2 text-xs font-medium text-ink/55">
                  {String(index + 1).padStart(2, "0")} / 06
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                {carouselSlides.map((slide, dotIndex) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setIndex(dotIndex)}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                    aria-current={dotIndex === index ? "true" : undefined}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      dotIndex === index
                        ? "w-6 bg-ink"
                        : "w-1.5 bg-ink/25 hover:bg-ink/45",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white/60 p-4 backdrop-blur-sm md:p-5">
            <div className="flex items-center justify-between">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
                The deck
              </p>
              <span className="rounded-full bg-ink/10 px-2.5 py-1 text-[0.6rem] text-ink/55">
                1080 × 1350
              </span>
            </div>

            <ol className="mt-3 space-y-1">
              {carouselSlides.map((slide, slideIndex) => (
                <li key={slide.id}>
                  <button
                    type="button"
                    onClick={() => setIndex(slideIndex)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                      slideIndex === index
                        ? "bg-ink text-cream"
                        : "text-ink/65 hover:bg-ink/5",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-[0.68rem] font-semibold",
                        slideIndex === index ? "text-lime" : "text-ink/35",
                      )}
                    >
                      {String(slideIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.8rem] font-medium">
                        {slide.title}
                      </span>
                      <span
                        className={cn(
                          "block truncate text-[0.68rem]",
                          slideIndex === index ? "text-cream/55" : "text-ink/40",
                        )}
                      >
                        {slide.caption}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>

            <p className="mt-4 border-t border-ink/10 pt-3 text-[0.68rem] leading-relaxed text-ink/50">
              Export: numbered 1080 × 1350 PNGs for Instagram, PDF + caption for
              LinkedIn. Keep the editable source.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
