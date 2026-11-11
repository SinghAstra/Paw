import { SlideFrame } from "@/components/content/slides/slide-frame";

export function SlideHook() {
  return (
    <SlideFrame
      number={1}
      className="bg-ink text-cream"
      activeTone="bg-lime"
      inactiveTone="bg-white/20"
      labelTone="text-cream/70"
    >
      <div className="flex items-start justify-between gap-[3cqw]">
        <p className="text-[2cqw] font-semibold uppercase tracking-[0.2em] text-lime">
          The practical AI playbook
        </p>
        <span className="rounded-full bg-white/10 px-[2.4cqw] py-[1.2cqw] text-[1.7cqw] uppercase tracking-[0.14em] text-cream/65">
          Field guide / 01
        </span>
      </div>

      <h2 className="mt-[8cqw] font-display text-[13.2cqw] font-bold leading-[0.9] tracking-[-0.045em]">
        Your first
        <br />
        <span className="text-lime">AI workflow.</span>
      </h2>

      <p className="mt-[3.2cqw] font-display text-[5.8cqw] font-semibold tracking-tight text-lime/90">
        Without the overwhelm.
      </p>

      <p className="mt-[2.4cqw] max-w-[85%] text-[3.7cqw] leading-[1.45] text-cream/55">
        You don&apos;t need ten new tools.
        <br />
        You need one useful process.
      </p>

      <div className="mt-auto rounded-[2cqw] border border-white/10 bg-white/[0.04] p-[3.4cqw]">
        <p className="text-[1.9cqw] font-semibold uppercase tracking-[0.18em] text-lime">
          One task
        </p>
        <p className="mt-[1.2cqw] text-[4cqw] font-semibold tracking-tight text-cream">
          Clear input → AI draft → Your review
        </p>
        <div className="mt-[2.6cqw] flex items-stretch gap-[1.4cqw] text-[2.8cqw] font-medium">
          <span className="flex flex-1 items-center rounded-[1.2cqw] bg-white/[0.07] px-[2cqw] py-[2.6cqw] text-cream/80">
            INPUT
          </span>
          <span className="flex items-center text-cream/30">→</span>
          <span className="flex flex-1 items-center rounded-[1.2cqw] bg-white/[0.07] px-[2cqw] py-[2.6cqw] text-cream/80">
            AI DRAFT
          </span>
          <span className="flex items-center text-cream/30">→</span>
          <span className="flex flex-1 items-center rounded-[1.2cqw] bg-lime px-[2cqw] py-[2.6cqw] text-ink">
            YOUR REVIEW
          </span>
        </div>
      </div>

      <p className="mt-[3.6cqw] text-[3.1cqw] text-cream/70">
        A beginner&apos;s guide in 6 slides →
      </p>
    </SlideFrame>
  );
}
