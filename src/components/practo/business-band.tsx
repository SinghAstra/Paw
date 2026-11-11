import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function BusinessBand() {
  return (
    <section id="for-providers" className="scroll-mt-24 bg-mint py-14 md:py-16">
      <div className="wrap">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="serif-display max-w-xl text-[2.1rem] leading-[1.05] text-forest md:text-[3.1rem]">
                Care for animals?
                <br />
                Let your community find you.
              </h2>
              <p className="mt-4 max-w-md text-[0.95rem] text-forest/70">
                Clinics, boarding facilities, labs, ambulances and NGOs are
                welcome.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end">
              <Link
                href="#"
                className={buttonVariants({ variant: "forest", size: "cta-lg" })}
              >
                List your business
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-sm text-forest/75 underline decoration-forest/25 underline-offset-4 transition-colors hover:text-forest hover:decoration-forest"
              >
                Spotted outdated information? Submit a correction
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
