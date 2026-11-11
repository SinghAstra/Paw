import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const proof = ["Beginner friendly", "Live mentor support", "Portfolio projects"];

export function StudioHero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-10 text-cream md:pb-24 md:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(100,70,229,0.35),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(223,247,168,0.14),transparent_70%)]"
      />

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="animate-rise">
          <span className="inline-flex items-center rounded-full border border-white/15 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cream/70">
            Live learning. Real-world skills.
          </span>

          <h1 className="mt-6 font-display text-[2.85rem] font-bold leading-[0.95] tracking-[-0.035em] sm:text-[3.7rem] md:text-[4.6rem] lg:text-[4.4rem] xl:text-[5rem]">
            Don&apos;t just learn AI.
            <br />
            <span className="text-lime">Make something</span>
            <br />
            <span className="text-lime">that matters.</span>
          </h1>

          <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-cream/65 md:text-[1.06rem]">
            Practical AI and digital skills for students and early-career
            professionals. Less theory. More building. Your next chapter.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#programmes"
              className={buttonVariants({ variant: "lime", size: "cta-lg" })}
            >
              Explore programmes
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
            </Link>
            <Link
              href="#enquire"
              className={buttonVariants({
                variant: "violet-soft",
                size: "cta-lg",
              })}
            >
              Talk to an advisor
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] text-cream/45">
            {proof.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="size-3.5 text-lime/70" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade lg:pl-4">
          <div className="rounded-[1.4rem] border border-white/10 bg-ink-soft p-2.5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem]">
              <Image
                src="/images/team.jpg"
                alt="Learners working together on a live project"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,23,36,0.25),rgba(25,23,36,0.85))]" />
              <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-cream/80 backdrop-blur">
                Your next skill, in action
              </span>
              <p className="absolute inset-x-4 bottom-4 font-display text-[1.35rem] font-semibold leading-[1.1] tracking-tight text-cream md:text-[1.6rem]">
                From &ldquo;what if&rdquo;
                <br />
                to &ldquo;I built this.&rdquo;
              </p>
            </div>

            <div className="mt-2.5 rounded-[1rem] bg-white p-4 text-ink md:p-5">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-violet">
                Project 01 / Personal AI assistant
              </p>
              <p className="mt-2 font-display text-[1.05rem] font-semibold leading-snug tracking-tight md:text-[1.15rem]">
                Turn a messy brief into a clear action plan.
              </p>
              <div className="mt-3 flex items-center gap-2 text-[0.68rem] text-ink/50">
                <span>Prompt</span>
                <ArrowRight className="size-3" />
                <span>Test</span>
                <ArrowRight className="size-3" />
                <span>Refine</span>
                <ArrowRight className="size-3" />
                <span>Share</span>
              </div>
            </div>

            <div className="mt-2.5 rounded-[1rem] bg-lime px-4 py-3.5 text-ink md:px-5">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink/55">
                Build it. Own it. Show it.
              </p>
              <p className="mt-1 font-display text-[1rem] font-semibold tracking-tight md:text-[1.08rem]">
                A portfolio, not another playlist.
              </p>
            </div>
          </div>

          <Link
            href="#programmes"
            className="absolute -bottom-5 right-4 hidden items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs font-medium text-ink shadow-lg transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            See the two tracks
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
