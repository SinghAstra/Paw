import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { curriculum } from "@/lib/data/studio";

export function StudioCurriculum() {
  return (
    <section id="curriculum" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-[2rem] font-bold leading-[1.02] tracking-[-0.03em] text-ink md:text-[2.7rem]">
            Make progress.
            <br />
            One useful project
            <br />
            at a time.
          </h2>
          <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-ink/55">
            AI Essentials · four-week learning path. Bring a laptop, curiosity
            and 3–4 hours a week. No coding background needed.
          </p>
          <Link
            href="#enquire"
            className={buttonVariants({
              variant: "lavender",
              size: "cta",
              className: "mt-6",
            })}
          >
            Download the full syllabus
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <div>
          {curriculum.map((item, index) => (
            <Reveal key={item.step} delay={index * 70}>
              <div className="flex gap-4 border-b border-ink/10 py-5 first:pt-0 md:gap-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-lavender font-display text-sm font-semibold text-violet md:size-11">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-[1.02rem] font-semibold tracking-tight text-ink md:text-[1.1rem]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[0.88rem] text-ink/55">{item.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
