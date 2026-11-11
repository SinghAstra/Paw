import { RotateCw } from "lucide-react";
import { SlideFrame } from "@/components/content/slides/slide-frame";

const checks = [
  {
    number: "01",
    title: "Is it accurate?",
    copy: "No invented facts or missing context.",
    tone: "bg-white",
    numberTone: "text-violet",
  },
  {
    number: "02",
    title: "Is it useful?",
    copy: "The output solves your original task.",
    tone: "bg-lavender",
    numberTone: "text-violet",
  },
  {
    number: "03",
    title: "Is it worth repeating?",
    copy: "The editing effort feels manageable.",
    tone: "bg-ink text-cream",
    numberTone: "text-lime",
  },
];

export function SlideTest() {
  return (
    <SlideFrame
      number={5}
      className="bg-[#faf8f1] text-ink"
      activeTone="bg-violet"
      inactiveTone="bg-ink/12"
      labelTone="text-ink/55"
    >
      <p className="text-[2cqw] font-semibold uppercase tracking-[0.2em] text-violet">
        04 / Try it before you scale it
      </p>

      <div className="relative mt-[6cqw]">
        <h2 className="font-display text-[13.4cqw] font-bold leading-[0.95] tracking-[-0.045em]">
          Test. Refine.
          <br />
          <span className="text-violet">Then repeat.</span>
        </h2>
        <span className="absolute right-0 top-0 grid size-[12cqw] place-items-center rounded-full bg-violet/10 text-violet">
          <RotateCw className="size-[4.8cqw]" strokeWidth={1.6} />
        </span>
      </div>

      <p className="mt-[3.2cqw] max-w-[88%] text-[3.5cqw] leading-[1.45] text-ink/55">
        Use a few real examples. Compare the result with what you would have done
        yourself.
      </p>

      <div className="mt-[4cqw] space-y-[1.5cqw]">
        {checks.map((check) => (
          <div
            key={check.number}
            className={`flex items-start gap-[2.4cqw] rounded-[1.4cqw] px-[2.6cqw] py-[2.3cqw] ${check.tone}`}
          >
            <span
              className={`font-display text-[3.2cqw] font-semibold ${check.numberTone}`}
            >
              {check.number}
            </span>
            <div>
              <p className="text-[3cqw] font-semibold tracking-tight">
                {check.title}
              </p>
              <p
                className={`text-[2.55cqw] ${
                  check.tone.includes("bg-ink") ? "text-cream/60" : "text-ink/50"
                }`}
              >
                {check.copy}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-auto text-[2.85cqw] text-violet">
        If it fails, improve the brief before adding more tools.
      </p>
    </SlideFrame>
  );
}
