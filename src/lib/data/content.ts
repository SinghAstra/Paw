export const pipeline = [
  {
    step: "01",
    title: "Capture",
    tool: "Tally → Airtable",
    copy: "Idea, audience, objective, platform and a point of view.",
    tone: "lavender" as const,
    icon: "mic" as const,
  },
  {
    step: "02",
    title: "Research",
    tool: "n8n + search-enabled AI",
    copy: "Find primary sources. Store URLs and dates.",
    tone: "mist" as const,
    icon: "search" as const,
  },
  {
    step: "03",
    title: "Structure",
    tool: "AI editorial assistant",
    copy: "Choose one angle. Write a hook and 6–8 slides.",
    tone: "peach" as const,
    icon: "pen" as const,
  },
  {
    step: "04",
    title: "Design",
    tool: "Google Slides API",
    copy: "Fill a brand template with editable text and visuals.",
    tone: "lavender" as const,
    icon: "layers" as const,
  },
  {
    step: "05",
    title: "Approve",
    tool: "Founder review",
    copy: "Check facts and tone. Edit, then approve export.",
    tone: "lime" as const,
    icon: "check" as const,
  },
];

export const draftSlides = [
  {
    tag: "01 / Hook",
    title: "Your first AI workflow.",
    copy: "Without the overwhelm.",
    tone: "violet" as const,
  },
  {
    tag: "02 / Problem",
    title: "Start with one repeatable task.",
    copy: "",
    tone: "light" as const,
  },
  {
    tag: "03 / Process",
    title: "Give it clear inputs.",
    copy: "",
    tone: "light" as const,
  },
  {
    tag: "04 / Review",
    title: "Keep a human in the loop.",
    copy: "",
    tone: "lime" as const,
  },
  {
    tag: "05 / Test",
    title: "Try it on real examples.",
    copy: "",
    tone: "light" as const,
  },
  {
    tag: "06 / CTA",
    title: "Save your starter checklist.",
    copy: "",
    tone: "light" as const,
  },
];

export const reviewColumns = [
  {
    label: "Facts & voice",
    copy: "Check every claim against the saved sources. Keep the founder's point of view intact.",
  },
  {
    label: "Design & accessibility",
    copy: "Check overflow, mobile readability and contrast. Edit any text directly in the source deck.",
  },
  {
    label: "Export package",
    copy: "Instagram: numbered 1080 × 1350 PNGs. LinkedIn: PDF + caption. Keep editable source.",
  },
];

export const implementation = [
  {
    step: "01",
    title: "A lightweight stack",
    copy: "Tally captures the brief. Airtable stores the job, source links and status. n8n orchestrates research, writing, rendering and delivery.",
    tone: "lavender" as const,
  },
  {
    step: "02",
    title: "An editable design engine",
    copy: "Duplicate a 4:5 Google Slides master. The Slides API replaces text and approved assets. Figma examples stay as design references.",
    tone: "lavender" as const,
  },
  {
    step: "03",
    title: "A structured editorial contract",
    copy: "Return: angle, hook, slides[{title, body}], sources[{url, date}], caption and alt text. One idea per slide; body copy ≤ 35 words.",
    tone: "peach" as const,
  },
  {
    step: "04",
    title: "A visual quality gate",
    copy: "Use four repeatable layouts. Keep generous safe margins and a consistent type scale. Flag overflow; regenerate only the failed slide.",
    tone: "lime" as const,
  },
  {
    step: "05",
    title: "A reliable export path",
    copy: "Approved deck → PDF → numbered PNGs with a conversion service. Save both formats and the editable deck link in Drive.",
    tone: "mist" as const,
  },
  {
    step: "06",
    title: "Safe by default",
    copy: "Use licensed assets; no private client data. Review health-related claims with an expert. Retry failed jobs, then flag for manual review.",
    tone: "lavender" as const,
  },
];
