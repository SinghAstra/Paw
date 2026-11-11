export const programmes = [
  {
    id: "essentials",
    name: "AI Essentials",
    audience: "Students & curious beginners",
    format: "4 weeks · Live weekends",
    price: 4999,
    summary: "Build a strong foundation in everyday AI.",
    outcome: "Prompting · Research · Presentations",
    features: ["Brief", "Prompt", "Useful output"],
    tone: "light" as const,
  },
  {
    id: "work",
    name: "AI for Work & Creation",
    audience: "Young professionals & creators",
    format: "6 weeks · Live evenings",
    price: 7999,
    summary: "Make better content and automate repetitive work.",
    outcome: "Content systems · No-code · Automation",
    features: ["Idea", "AI draft", "Your review"],
    tone: "dark" as const,
  },
];

export const curriculum = [
  {
    step: "01",
    title: "Think clearly with AI",
    copy: "Prompt foundations, context and responsible use.",
  },
  {
    step: "02",
    title: "Research with confidence",
    copy: "Compare sources and turn findings into a brief.",
  },
  {
    step: "03",
    title: "Create something useful",
    copy: "Build a presentation and a content mini-project.",
  },
  {
    step: "04",
    title: "Ship your first workflow",
    copy: "Automate a task, test it and present your portfolio.",
  },
];

export const principles = [
  {
    title: "Learn by doing",
    copy: "Guided projects, not passive videos.",
  },
  {
    title: "Build your confidence",
    copy: "Live practice and useful feedback.",
  },
  {
    title: "Leave with proof",
    copy: "Work you can add to your portfolio.",
  },
];

export const journey = [
  {
    step: "01",
    title: "Enquire",
    copy: "Choose a programme and share your goal.",
  },
  {
    step: "02",
    title: "Find your fit",
    copy: "Receive a syllabus and speak to an advisor.",
  },
  {
    step: "03",
    title: "Join your cohort",
    copy: "Confirm your seat after reviewing the details.",
  },
];

export const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. AI Essentials starts from the basics. You will learn with accessible, no-code tools and leave with a workflow you can repeat without a developer.",
  },
  {
    question: "What will I have at the end?",
    answer:
      "A portfolio of practical exercises and a final project, with mentor feedback along the way. You keep every prompt, template and workflow we build together.",
  },
  {
    question: "Is this a job-placement programme?",
    answer:
      "No job guarantee. The focus is building useful skills and work you can show. If you want interview prep next, we can point you to the right resources.",
  },
  {
    question: "How much time do I need each week?",
    answer:
      "Plan for 3–4 hours: one live session plus a short project. Sessions are recorded, so a missed weekend does not put you behind.",
  },
];

export const programmeOptions = [
  { value: "essentials", label: "AI Essentials · ₹4,999" },
  { value: "work", label: "AI for Work & Creation · ₹7,999" },
  { value: "unsure", label: "Not sure yet, help me choose" },
];

export const learnerOptions = [
  { value: "student", label: "Student" },
  { value: "professional", label: "Working professional" },
  { value: "founder", label: "Founder / freelancer" },
  { value: "other", label: "Something else" },
];
