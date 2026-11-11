import { SlideFrame } from "@/components/content/slides/slide-frame";

const checks = [
  { title: "Check the facts", copy: "Open the source. Verify the claim." },
  { title: "Check the fit", copy: "Does this actually serve your audience?" },
];

export function SlideReview() {
  return (
    <SlideFrame
      number={4}
      className="bg-lime text-ink"
      activeTone="bg-violet"
      inactiveTone="bg-ink/15"
      labelTone="text-ink/60"
    >
      <p className="text-[2cqw] font-semibold uppercase tracking-[0.2em] text-ink/70">
        03 / Keep a human in the loop
      </p>

      <h2 className="mt-[6cqw] font-display text-[9.9cqw] font-bold leading-[0.95] tracking-[-0.045em]">
        Automate
        <br />
        the draft.
        <br />
        <span className="text-violet">Not your judgment.</span>
      </h2>

      <p className="mt-[3cqw] text-[3.5cqw] leading-[1.45] text-ink/60">
        AI can sound confident and still be wrong.
        <br />
        Treat every output as a first draft.
      </p>

      <div className="mt-[4cqw] space-y-[1.6cqw]">
        {checks.map((check) => (
          <div
            key={check.title}
            className="flex items-start gap-[2.2cqw] rounded-[1.4cqw] bg-white px-[2.6cqw] py-[2.2cqw]"
          >
            <span className="mt-[0.3cqw] grid size-[4.2cqw] shrink-0 place-items-center rounded-full bg-violet text-[2.2cqw] text-white">
              ✓
            </span>
            <div>
              <p className="text-[3cqw] font-semibold tracking-tight">
                {check.title}
              </p>
              <p className="text-[2.55cqw] text-ink/50">{check.copy}</p>
            </div>
          </div>
        ))}

        <div className="flex items-start gap-[2.2cqw] rounded-[1.4cqw] bg-ink px-[2.6cqw] py-[2.2cqw] text-cream">
          <span className="mt-[0.3cqw] grid size-[4.2cqw] shrink-0 place-items-center rounded-full bg-lime text-[2.2cqw] text-ink">
            ✓
          </span>
          <div>
            <p className="text-[3cqw] font-semibold tracking-tight text-lime">
              Make it yours
            </p>
            <p className="text-[2.55cqw] text-cream/60">
              Add context only you can bring.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-auto text-[2.9cqw] text-ink/65">
        A review step is part of the workflow, not a workaround.
      </p>
    </SlideFrame>
  );
}
