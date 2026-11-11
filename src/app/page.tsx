import type { Metadata } from "next";
import { BusinessBand } from "@/components/practo/business-band";
import { ClaritySection } from "@/components/practo/clarity-section";
import { ProviderDirectory } from "@/components/practo/directory";
import { PractoHero } from "@/components/practo/hero";
import { ServiceGrid } from "@/components/practo/service-grid";
import { PractoSiteFooter } from "@/components/practo/site-footer";
import { PractoSiteHeader } from "@/components/practo/site-header";

export const metadata: Metadata = {
  title: "Practo for Animals",
  description:
    "Find veterinary clinics, hospitals, boarding, diagnostics, ambulances and NGOs near you. An animal-care discovery MVP for Bengaluru.",
};

export default function PractoPage() {
  return (
    <>
      <a
        href="#find-care"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to providers
      </a>
      <PractoSiteHeader />
      <main>
        <PractoHero />
        <ServiceGrid />
        <ProviderDirectory />
        <ClaritySection />
        <BusinessBand />
      </main>
      <PractoSiteFooter />
    </>
  );
}
