import type { Metadata } from "next";
import { StudioCurriculum } from "@/components/studio/curriculum";
import { StudioEnquiry } from "@/components/studio/enquiry";
import { StudioFaq } from "@/components/studio/faq";
import { StudioHeader } from "@/components/studio/site-header";
import { StudioHero } from "@/components/studio/hero";
import { StudioJourney } from "@/components/studio/journey";
import { StudioPrinciples } from "@/components/studio/principles";
import { StudioProgrammes } from "@/components/studio/programmes";
import { StudioFooter } from "@/components/studio/site-footer";

export const metadata: Metadata = {
  title: "AI Studio",
  description:
    "Practical AI and digital-skills programmes for students and early-career professionals. Build a portfolio, not another playlist.",
};

export default function AiStudioPage() {
  return (
    <>
      <a
        href="#programmes"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to programmes
      </a>
      <StudioHeader />
      <main>
        <StudioHero />
        <StudioPrinciples />
        <StudioProgrammes />
        <StudioCurriculum />
        <StudioJourney />
        <StudioEnquiry />
        <StudioFaq />
      </main>
      <StudioFooter />
    </>
  );
}
