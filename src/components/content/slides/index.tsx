import { SlideBrief } from "@/components/content/slides/slide-brief";
import { SlideChecklist } from "@/components/content/slides/slide-checklist";
import { SlideHook } from "@/components/content/slides/slide-hook";
import { SlideReview } from "@/components/content/slides/slide-review";
import { SlideTask } from "@/components/content/slides/slide-task";
import { SlideTest } from "@/components/content/slides/slide-test";

export const carouselSlides = [
  {
    id: "hook",
    title: "The hook",
    caption: "Your first AI workflow.",
    Slide: SlideHook,
  },
  {
    id: "task",
    title: "Choose one task",
    caption: "Start small. Repeat often.",
    Slide: SlideTask,
  },
  {
    id: "brief",
    title: "Give clear inputs",
    caption: "Good output starts here.",
    Slide: SlideBrief,
  },
  {
    id: "review",
    title: "Keep the review",
    caption: "Automate the draft, not judgment.",
    Slide: SlideReview,
  },
  {
    id: "test",
    title: "Test before scaling",
    caption: "Test. Refine. Then repeat.",
    Slide: SlideTest,
  },
  {
    id: "checklist",
    title: "Starter checklist",
    caption: "One useful workflow.",
    Slide: SlideChecklist,
  },
];
