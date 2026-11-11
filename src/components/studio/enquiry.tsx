import { EnquiryForm } from "@/components/studio/enquiry-form";
import { Reveal } from "@/components/shared/reveal";

export function StudioEnquiry() {
  return (
    <section
      id="enquire"
      className="relative scroll-mt-24 overflow-hidden bg-violet py-14 text-white md:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_65%)]"
      />
      <div className="wrap relative grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-[2.2rem] font-bold leading-[1.02] tracking-[-0.03em] md:text-[3rem]">
            Your next chapter
            <br />
            starts with a hello.
          </h2>
          <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/75">
            Not sure which path fits? Tell us a little about yourself. We&apos;ll
            help you find your starting point.
          </p>

          <div className="mt-8 max-w-sm rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/55">
              What happens next
            </p>
            <ul className="mt-3 space-y-2 text-[0.85rem] text-white/85">
              <li>Check your inbox for the syllabus.</li>
              <li>An advisor follows up within 2 working days.</li>
              <li>Join a cohort only when the fit is right.</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
