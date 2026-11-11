import { Reveal } from "@/components/shared/reveal";

const meta = [
  {
    label: "Input",
    value: "A voice note or rough idea",
    border: "border-violet",
  },
  {
    label: "Output",
    value: "6–8 editable slides + captions",
    border: "border-[#b9a8f5]",
  },
  {
    label: "Control",
    value: "Founder approves before export",
    border: "border-lime-deep",
  },
];

export function ContentIntro() {
  return (
    <section className="bg-cream py-14 md:py-16">
      <div className="wrap">
        <Reveal>
          <h2 className="max-w-3xl font-display text-[2rem] font-bold leading-[1.03] tracking-[-0.03em] text-ink md:text-[2.9rem]">
            Your ideas. A repeatable creative system.
          </h2>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink/55">
            Turn a rough thought into a researched, editable carousel — without
            starting from a blank canvas.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-6 sm:grid-cols-3 md:mt-11">
          {meta.map((item, index) => (
            <Reveal key={item.label} delay={index * 80}>
              <div className={`border-l-2 pl-4 ${item.border}`}>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
                  {item.label}
                </p>
                <p className="mt-1.5 text-[0.92rem] font-medium text-ink">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
