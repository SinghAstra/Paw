"use client";

import { Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/studio";

export function StudioFaq() {
  return (
    <section id="faqs" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="wrap">
        <h2 className="font-display text-[1.9rem] font-bold tracking-[-0.03em] text-ink md:text-[2.4rem]">
          A few things you might be wondering.
        </h2>

        <Accordion className="mt-8 max-w-3xl" defaultValue={["faq-0"]}>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border-ink/10"
            >
              <AccordionTrigger className="group items-center gap-4 py-5 text-left font-display text-[1rem] font-semibold tracking-tight text-ink hover:no-underline [&>[data-slot=accordion-trigger-icon]]:hidden md:text-[1.08rem]">
                <span className="flex-1">{faq.question}</span>
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-ink/15 text-ink/60">
                  <Plus className="size-3.5 group-aria-expanded:hidden" />
                  <Minus className="hidden size-3.5 group-aria-expanded:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl text-[0.9rem] leading-relaxed text-ink/55">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
