import { Reveal } from "@/components/shared/reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    copy: "Search by location, animal and care need. Use open-now and emergency filters.",
  },
  {
    number: "02",
    title: "Compare",
    copy: "See services, indicative fees, reviews and contact details in one clear view.",
  },
  {
    number: "03",
    title: "Connect",
    copy: "Call the provider or get directions. Confirm services before you travel.",
  },
];

export function ClaritySection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-paper py-16 md:py-20">
      <div className="wrap">
        <Reveal>
          <h2 className="serif-display max-w-3xl text-[2rem] text-forest md:text-[2.9rem]">
            A little clarity. A lot more confidence.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90}>
              <div className="border-t border-forest/15 pt-4">
                <p className="eyebrow text-[0.62rem] text-forest-muted">
                  {step.number} / {step.title}
                </p>
                <p className="mt-3 max-w-xs text-[0.9rem] leading-relaxed text-forest/70">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
