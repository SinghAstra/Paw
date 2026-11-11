import { SlideFrame } from "@/components/content/slides/slide-frame";

const options = [
  {
    number: "01",
    title: "Weekly notes → action list",
    copy: "Clear input. Easy to check.",
    tone: "bg-lime",
  },
  {
    number: "02",
    title: "A long article → a short brief",
    copy: "Review the summary against the original.",
    tone: "bg-lavender",
  },
  {
    number: "03",
    title: "A rough idea → a post outline",
    copy: "Keep your perspective. Improve the structure.",
    tone: "border border-ink/10 bg-white",
  },
];

export function SlideTask() {
  return (
    <SlideFrame
      number={2}
      className="bg-[#faf8f1] text-ink"
      activeTone="bg-violet"
      inactiveTone="bg-ink/12"
      labelTone="text-ink/55"
    >
      <div className="flex items-start justify-between">
        <p className="text-[2cqw] font-semibold uppercase tracking-[0.2em] text-violet">
          01 / Pick your starting point
        </p>
      </div>

      <div className="relative mt-[6cqw]">
        <h2 className="font-display text-[11.6cqw] font-bold leading-[0.96] tracking-[-0.045em]">
          Start small.
          <br />
          <span className="text-violet">Repeat often.</span>
        </h2>
        <span className="absolute right-0 top-0 font-display text-[9cqw] font-medium leading-none text-violet/25">
          01
        </span>
      </div>

      <p className="mt-[3.2cqw] max-w-[92%] text-[3.6cqw] leading-[1.45] text-ink/55">
        Choose a task you already understand.
        <br />
        That makes the result easier to judge.
      </p>

      <div className="mt-[4.4cqw] space-y-[1.6cqw]">
        {options.map((option) => (
          <div
            key={option.number}
            className={`flex items-start gap-[2.4cqw] rounded-[1.6cqw] px-[2.6cqw] py-[2.4cqw] ${option.tone}`}
          >
            <span className="grid size-[5.6cqw] shrink-0 place-items-center rounded-full bg-ink font-display text-[2.1cqw] font-semibold text-cream">
              {option.number}
            </span>
            <div>
              <p className="text-[3.1cqw] font-semibold tracking-tight">
                {option.title}
              </p>
              <p className="mt-[0.4cqw] text-[2.6cqw] text-ink/50">
                {option.copy}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-auto text-[2.9cqw] text-violet">
        Make one recurring task easier before adding another.
      </p>
    </SlideFrame>
  );
}
