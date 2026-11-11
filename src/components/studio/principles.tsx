import { Reveal } from "@/components/shared/reveal";
import { principles } from "@/lib/data/studio";

export function StudioPrinciples() {
  return (
    <section className="bg-linen py-10 md:py-12">
      <div className="wrap grid gap-8 sm:grid-cols-3 sm:gap-6">
        {principles.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <div className="border-t-2 border-violet pt-4">
              <h2 className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
                {item.title}
              </h2>
              <p className="mt-1.5 text-sm text-ink/55">{item.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
