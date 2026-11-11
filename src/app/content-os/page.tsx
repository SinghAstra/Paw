import type { Metadata } from "next";
import { CarouselDeck } from "@/components/content/carousel-deck";
import { ContentHandoff } from "@/components/content/handoff";
import { ContentHero } from "@/components/content/hero";
import { ContentImplementation } from "@/components/content/implementation";
import { ContentHeader } from "@/components/content/site-header";
import { ContentIntro } from "@/components/content/intro";
import { ContentPipeline } from "@/components/content/pipeline";
import { ContentReview } from "@/components/content/review";
import { ContentFooter } from "@/components/content/site-footer";
import { ContentWorkspace } from "@/components/content/workspace";

export const metadata: Metadata = {
  title: "Content OS",
  description:
    "A founder-owned idea-to-carousel system: capture, research, structure, design, approve, export. Includes a six-slide sample carousel.",
};

export default function ContentOsPage() {
  return (
    <>
      <a
        href="#pipeline"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to the pipeline
      </a>
      <ContentHeader />
      <main>
        <ContentHero />
        <ContentIntro />
        <ContentPipeline />
        <ContentWorkspace />
        <ContentReview />
        <ContentImplementation />
        <CarouselDeck />
        <ContentHandoff />
      </main>
      <ContentFooter />
    </>
  );
}
