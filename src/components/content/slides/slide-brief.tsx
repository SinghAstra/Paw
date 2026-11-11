import { SlideFrame } from "@/components/content/slides/slide-frame";

const brief = [
  {
    label: "Context",
    copy: "Who is this for? What do they need?",
    tone: "bg-white",
    labelTone: "text-violet",
  },
  {
    label: "Task",
    copy: "What should the AI help you do?",
    tone: "bg-lime",
    labelTone: "text-ink/55",
  },
  {
    label: "Format",
    copy: "A checklist? A table? A short draft?",
    tone: "bg-peach",
    labelTone: "text-violet",
  },
  {
    label: "Boundaries",
    copy: "What must it preserve or avoid?",
    tone: "bg-lavender",
    labelTone: "text-violet",
  },
];

export function SlideBrief() {
  return (
    <SlideFrame
      number={3}
      className="bg-[#ece7f7] text-ink"
      activeTone="bg-violet"
      inactiveTone="bg-violet/15"
      labelTone="text-ink/55"
    >
      <p className="text-[2cqw] font-semibold uppercase tracking-[0.2em] text-violet">
        02 / Make the brief useful
      </p>

      <h2 className="mt-[6.5cqw] font-display text-[12.6cqw] font-bold leading-[0.94] tracking-[-0.045em]">
        Good output
        <br />
        <span className="text-violet">starts here.</span>
      </h2>

      <p className="mt-[3.2cqw] text-[3.6cqw] leading-[1.45] text-ink/55">
        Tell the AI what success looks like.
      </p>

      <div className="mt-[4cqw] rounded-[2cqw] bg-ink p-[3cqw]">
        <p className="text-[1.9cqw] font-semibold uppercase tracking-[0.18em] text-lime">
          Your reusable brief
        </p>
        <div className="mt-[2.4cqw] grid grid-cols-2 gap-[1.6cqw]">
          {brief.map((item) => (
            <div
              key={item.label}
              className={`rounded-[1.2cqw] p-[2.2cqw] ${item.tone}`}
            >
              <p
                className={`text-[1.8cqw] font-semibold uppercase tracking-[0.14em] ${item.labelTone}`}
              >
                {item.label}
              </p>
              <p className="mt-[0.9cqw] text-[2.75cqw] font-medium leading-[1.35] text-ink">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-auto text-[2.9cqw] text-ink/60">
        Never paste confidential or sensitive information.
      </p>
    </SlideFrame>
  );
}
