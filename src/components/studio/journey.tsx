import { Reveal } from "@/components/shared/reveal";
import { journey } from "@/lib/data/studio";

export function StudioJourney() {
  return (
    <section className="bg-linen py-14 md:py-16">
      <div className="wrap">
        <Reveal>
          <h2 className="font-display text-[1.9rem] font-bold tracking-[-0.03em] text-ink md:text-[2.4rem]">
            A human-first learning experience.
          </h2>
        </Reveal>

        <div className="mt-9 grid gap-7 md:grid-cols-3 md:gap-8">
          {journey.map((item, index) => (
            <Reveal key={item.step} delay={index * 90}>
              <div className="flex gap-4 md:block">
                <p className="font-display text-sm font-semibold text-violet md:text-base">
                  {item.step}
                </p>
                <div className="md:mt-2">
                  <h3 className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-56 text-[0.86rem] leading-relaxed text-ink/55">
                    {item.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-9 text-[0.72rem] text-ink/40">
          No payment at enquiry. No pressure to enrol.
        </p>
      </div>
    </section>
  );
}
