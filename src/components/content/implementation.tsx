import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { implementation } from "@/lib/data/content";

const tones = {
  lavender: "bg-lavender",
  peach: "bg-peach",
  lime: "bg-lime",
  mist: "bg-mist",
};

export function ContentImplementation() {
  return (
    <section className="bg-cream py-14 md:py-16">
      <div className="wrap">
        <Reveal>
          <h2 className="font-display text-[1.5rem] font-bold tracking-[-0.02em] text-ink md:text-[1.9rem]">
            04 / How to make it real
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {implementation.map((item, index) => (
            <Reveal key={item.step} delay={index * 60} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20">
                <span
                  className={cn(
                    "grid size-8 place-items-center rounded-full font-display text-[0.68rem] font-semibold text-ink/70",
                    tones[item.tone],
                  )}
                >
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-[1.02rem] font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-ink/55">
                  {item.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 text-[0.68rem] text-ink/40">
            Set up once: brand templates, approved sources, connected accounts.
            Usage costs and API access depend on the tools selected.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
