import { ArrowDownToLine, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const mini = [
  { tone: "bg-lime", lines: 4 },
  { tone: "bg-[#b9a8f5]", lines: 3 },
  { tone: "bg-[#f5c99b]", lines: 5 },
];

export function ContentHero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-14 pt-12 text-cream md:pb-20 md:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-0 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(100,70,229,0.28),transparent_68%)]"
      />
      <div className="wrap relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="animate-rise">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cream/40">
            03 / AI system design
          </p>
          <h1 className="mt-3 font-display text-[3rem] font-bold leading-none tracking-[-0.04em] sm:text-[4rem] md:text-[5rem]">
            CONTENT <span className="font-light text-cream/35">/</span> OS
          </h1>
          <p className="mt-4 font-display text-[1.15rem] tracking-tight text-cream/75 md:text-[1.35rem]">
            A founder&apos;s idea-to-carousel playbook.
          </p>
          <p className="mt-4 max-w-xl text-[0.92rem] leading-relaxed text-cream/55">
            Turn a rough thought into a researched, editable carousel — without
            starting from a blank canvas. One workflow, six slides, a human
            decision at every gate.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#carousel"
              className={buttonVariants({ variant: "lime", size: "cta-lg" })}
            >
              View the sample carousel
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="/practical-ai-playbook.pdf"
              download
              className={buttonVariants({ variant: "ink-soft", size: "cta-lg" })}
            >
              <ArrowDownToLine className="size-4" />
              Download PDF
            </a>
          </div>
        </div>

        <div
          aria-hidden
          className="relative hidden h-44 w-56 shrink-0 animate-fade md:block"
        >
          {mini.map((slide, index) => (
            <div
              key={index}
              style={{
                transform: `rotate(${(index - 1) * 7}deg) translateX(${(index - 1) * 14}px)`,
                zIndex: index,
              }}
              className={`absolute top-0 h-40 w-28 rounded-xl ${slide.tone} p-3 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.9)]`}
            >
              <div className="space-y-1.5">
                {Array.from({ length: slide.lines }).map((_, line) => (
                  <span
                    key={line}
                    className="block h-1 rounded-full bg-ink/25"
                    style={{ width: `${92 - line * 9}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
