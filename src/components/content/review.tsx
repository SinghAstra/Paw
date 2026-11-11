import { Reveal } from "@/components/shared/reveal";
import { reviewColumns } from "@/lib/data/content";

export function ContentReview() {
  return (
    <section className="bg-ink py-14 text-cream md:py-16">
      <div className="wrap">
        <Reveal>
          <h2 className="font-display text-[1.6rem] font-bold tracking-[-0.02em] md:text-[2.1rem]">
            03 / Review once. Publish with confidence.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
          {reviewColumns.map((column, index) => (
            <Reveal key={column.label} delay={index * 80}>
              <div className="border-t border-white/15 pt-4">
                <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cream/50">
                  {column.label}
                </h3>
                <p className="mt-2.5 text-[0.84rem] leading-relaxed text-cream/70">
                  {column.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.7rem] text-cream/45">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-lime" />
              Status: Draft → Needs review → Approved → Exported
            </span>
            <span>Any edit after approval returns the item to review.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
