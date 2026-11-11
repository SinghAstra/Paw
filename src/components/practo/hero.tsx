import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SearchPanel } from "@/components/practo/search-panel";

export function PractoHero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-12 pt-8 md:pb-16 md:pt-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(226,237,212,0.9),transparent_68%)]"
      />
      <div className="wrap relative">
        <div className="grid items-center gap-10 md:grid-cols-[1.04fr_0.96fr] md:gap-12">
          <div className="animate-rise">
            <p className="eyebrow text-forest-mid">
              For every animal. For every kind of care.
            </p>
            <h1 className="serif-display mt-5 text-[2.9rem] text-forest sm:text-[3.6rem] md:mt-7 md:text-[4.3rem] lg:text-[4.9rem]">
              Good care starts
              <br className="hidden sm:block" /> with the right
              <br className="hidden sm:block" /> connection.
            </h1>
            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-forest/75 md:text-lg">
              Discover vets, hospitals and trusted animal-care services near
              you.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-forest/70">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-forest-mid" />
                Bengaluru pilot
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-forest-mid" />
                Verified listings
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-forest-mid" />
                24/7 emergency filter
              </span>
            </div>
          </div>

          <div className="relative animate-fade">
            <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] rounded-tl-[7rem] bg-mint md:rounded-[2.5rem] md:rounded-tl-[9rem]">
              <Image
                src="/images/dog-sofa.jpg"
                alt="A dog and a cat resting together in warm afternoon light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 46vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(20,62,53,0.18))]" />
            </div>

            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 shadow-[0_20px_45px_-30px_rgba(20,62,53,0.8)] backdrop-blur md:left-6">
              <span className="grid size-9 place-items-center rounded-full bg-mint text-forest">
                <Heart className="size-4" />
              </span>
              <p className="text-sm font-medium text-forest">
                For the ones you call family.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-12">
          <SearchPanel />
          <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-forest/70">
            Urgent care?
            <Link
              href="#find-care"
              className="inline-flex items-center gap-1 font-medium text-forest underline decoration-forest/30 underline-offset-4 transition-colors hover:decoration-forest"
            >
              24/7 hospitals and ambulances
              <ArrowRight className="size-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
