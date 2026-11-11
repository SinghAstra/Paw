import { Bookmark } from "lucide-react";
import { SlideFrame } from "@/components/content/slides/slide-frame";

const checklist = [
  "Pick one repeatable task",
  "Write a clear input brief",
  "Define a useful output",
  "Add a human review step",
  "Test, refine and save the process",
];

export function SlideChecklist() {
  return (
    <SlideFrame
      number={6}
      className="bg-violet text-white"
      activeTone="bg-lime"
      inactiveTone="bg-white/25"
      labelTone="text-white/80"
    >
      <div className="flex items-start justify-between gap-[3cqw]">
        <p className="text-[2cqw] font-semibold uppercase tracking-[0.2em] text-lime">
          Save this for your first build
        </p>
        <span className="grid size-[5.2cqw] place-items-center rounded-full bg-white/15">
          <Bookmark className="size-[2.3cqw]" />
        </span>
      </div>

      <h2 className="mt-[7cqw] font-display text-[12.2cqw] font-bold leading-[0.94] tracking-[-0.045em]">
        <span className="text-lime">One useful</span>
        <br />
        workflow beats
        <br />
        ten saved tools.
      </h2>

      <div className="mt-[5cqw] rounded-[2cqw] bg-ink p-[3.2cqw]">
        <p className="text-[1.9cqw] font-semibold uppercase tracking-[0.18em] text-lime">
          Your starter checklist
        </p>
        <div className="mt-[2.4cqw] space-y-[2cqw]">
          {checklist.map((item, index) => (
            <div key={item} className="flex items-center gap-[2.2cqw]">
              <span className="grid size-[4.4cqw] shrink-0 place-items-center rounded-full bg-lime font-display text-[2.1cqw] font-semibold text-ink">
                {index + 1}
              </span>
              <p className="text-[3cqw] font-medium text-cream">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-auto text-[2.9cqw] text-white/80">
        Save this checklist. Then build one small thing today.
      </p>
    </SlideFrame>
  );
}
