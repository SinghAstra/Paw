import { Reveal } from "@/components/shared/reveal";

const groups = [
  {
    index: "01",
    title: "Practo for Animals",
    accent: "text-forest",
    rule: "bg-forest",
    cards: [
      {
        title: "Solve discovery first",
        copy: "Launch in one city with searchable, moderated listings across six care categories. Prioritise location, animal type, opening hours and direct contact. Defer booking, payments and clinical advice.",
      },
      {
        title: "Make comparison useful",
        copy: "Show distance, services, indicative fees, hours and review provenance. Provider details add address, map, contact and last-checked date. Validate listings; never imply clinical quality from verification.",
      },
      {
        title: "Keep mobile focused",
        copy: "Single-column results and full-width search. Filters open in a sheet; care categories use a two-column grid. Large touch targets and clear labels keep the experience usable without a map-heavy interface.",
      },
    ],
    note: "CTA hierarchy — Primary: Find care → View provider → Call / directions. Secondary: Explore services. Supply: List your business. Trust: Submit a correction.",
  },
  {
    index: "02",
    title: "AI education",
    accent: "text-violet",
    rule: "bg-violet",
    cards: [
      {
        title: "Lead with a tangible outcome",
        copy: "The page moves from a project-led promise to learning benefits, programme fit, curriculum, the enquiry form and FAQs. Plain language and no placement guarantees help set honest expectations.",
      },
      {
        title: "Keep the first step low-friction",
        copy: "Capture name, email, programme and learner type; WhatsApp is optional. Validate required fields and email format, preserve input on errors and prevent duplicate submissions.",
      },
      {
        title: "Make the handoff explicit",
        copy: "Form → CRM lead tagged by programme → syllabus email → advisor follow-up → cohort and fee confirmation → registration/payment. On success, show a thank-you state and email delivery expectations.",
      },
    ],
    note: "Success & recovery — Thank-you: “You're on the list. Check your inbox for the syllabus.” If sending fails, keep the form filled and offer retry. Track enquiry completion, qualified conversations and paid registrations.",
  },
  {
    index: "03",
    title: "AI-powered content creation",
    accent: "text-violet",
    rule: "bg-violet",
    cards: [
      {
        title: "Founder owns the final voice",
        copy: "The founder supplies the idea and audience, checks claims, makes light edits and approves each export. Store sources with the draft. Human review remains mandatory, especially for animal-health content.",
      },
      {
        title: "Templates do the heavy lifting",
        copy: "Use the six editable examples as a repeatable visual kit. Keep type, margins and colours consistent; swap the idea, not the entire layout. Generate captions and alt text alongside the carousel.",
      },
    ],
    note: "MVP boundary — Editable visual designs, not a wired service. Provider data, reviews, course fees and timelines are illustrative. Automate the repeated steps in n8n only after the manual loop is consistent.",
  },
];

const stack = [
  {
    label: "Design",
    tools: "Figma · Content OS playbook",
    copy: "Brand tokens, six slide layouts and a review checklist built before any automation.",
  },
  {
    label: "Build",
    tools: "Next.js · Tailwind · shadcn/ui",
    copy: "Static-rendered pages, shared UI primitives and CSS-first motion. One deploy, three URLs.",
  },
  {
    label: "Automate",
    tools: "Tally · Airtable · n8n",
    copy: "Intake form, job records and a pipeline that stops for human approval.",
  },
  {
    label: "Publish",
    tools: "Google Slides API · PDF/PNG export",
    copy: "Fill a master deck, export both formats and keep the editable source in Drive.",
  },
];

export function ContentHandoff() {
  return (
    <section id="handoff" className="scroll-mt-24 bg-cream py-16 md:py-20">
      <div className="wrap">
        <Reveal>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
            Handoff / Product rationale
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-[2rem] font-bold leading-[1.02] tracking-[-0.03em] text-ink md:text-[2.9rem]">
            The thinking behind the screens.
          </h2>
          <p className="mt-3 max-w-xl text-[0.92rem] text-ink/55">
            MVP priorities, conversion journeys and a practical path from design
            to delivery.
          </p>
        </Reveal>

        <div className="mt-12 space-y-12 md:space-y-14">
          {groups.map((group) => (
            <Reveal key={group.index}>
              <div>
                <div className="flex items-center gap-3">
                  <span className={`h-px w-6 ${group.rule}`} />
                  <h3
                    className={`font-display text-[1.35rem] font-bold tracking-tight md:text-[1.6rem] ${group.accent}`}
                  >
                    {group.index} / {group.title}
                  </h3>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {group.cards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-ink/10 bg-white p-5"
                    >
                      <h4 className="font-display text-[0.98rem] font-semibold tracking-tight text-ink">
                        {card.title}
                      </h4>
                      <p className="mt-2 text-[0.8rem] leading-relaxed text-ink/55">
                        {card.copy}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 max-w-4xl border-l-2 border-ink/10 pl-4 text-[0.8rem] leading-relaxed text-ink/60">
                  {group.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 rounded-2xl bg-ink p-6 text-cream md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h3 className="font-display text-[1.35rem] font-bold tracking-tight md:text-[1.6rem]">
                Recommended stack
              </h3>
              <p className="text-[0.68rem] text-cream/40">
                Chosen for speed of iteration, not novelty.
              </p>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stack.map((item) => (
                <div key={item.label} className="border-t border-white/15 pt-3">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-lime">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[0.85rem] font-medium text-cream">
                    {item.tools}
                  </p>
                  <p className="mt-1.5 text-[0.75rem] leading-relaxed text-cream/50">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 max-w-4xl text-[0.72rem] leading-relaxed text-ink/45">
            Scope & assumptions — Editable visual designs, not a connected
            service or wired prototype beyond the on-page interactions. Provider
            data, reviews, course fees and timelines are illustrative. Before
            launch: validate with pet parents, providers and learners; test
            keyboard access, screen readers, forms and real-device layouts.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
