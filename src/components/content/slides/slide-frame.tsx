import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SlideFrameProps = {
  number: number;
  children: ReactNode;
  className?: string;
  activeTone?: string;
  inactiveTone?: string;
  labelTone?: string;
};

export function SlideFrame({
  number,
  children,
  className,
  activeTone = "bg-violet",
  inactiveTone = "bg-ink/15",
  labelTone = "text-ink/50",
}: SlideFrameProps) {
  return (
    <div
      className={cn(
        "@container relative flex aspect-4/5 w-full flex-col overflow-hidden rounded-2xl",
        className,
      )}
    >
      <div className="flex flex-1 flex-col px-[6.8cqw] pt-[6.4cqw]">{children}</div>

      <div className="px-[6.8cqw] pb-[5cqw] pt-[4cqw]">
        <div className="flex gap-[1.4cqw]">
          {Array.from({ length: 6 }).map((_, index) => (
            <span
              key={index}
              className={cn(
                "h-[0.6cqw] flex-1 rounded-full",
                index < number ? activeTone : inactiveTone,
              )}
            />
          ))}
        </div>
        <div
          className={cn(
            "mt-[3cqw] flex items-center justify-between text-[1.9cqw] font-semibold uppercase tracking-[0.18em]",
            labelTone,
          )}
        >
          <span>AI / STUDIO</span>
          <span>
            {String(number).padStart(2, "0")} / 06
          </span>
        </div>
      </div>
    </div>
  );
}
