import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui";

export type AccordionItem = { q: string; a: ReactNode; id?: string };

export function FaqAccordion({
  items,
  eyebrow,
  title,
  intro,
  columns = 1,
}: {
  items: AccordionItem[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  columns?: 1 | 2;
}) {
  return (
    <div>
      {title ? (
        <div className="max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="display-section mt-4">{title}</h2>
          {intro ? <p className="mt-5 measure text-muted">{intro}</p> : null}
        </div>
      ) : null}
      <div className={`mt-9 grid gap-x-12 ${columns === 2 ? "md:grid-cols-2" : ""}`}>
        {items.map((item, index) => (
          <details key={item.id ?? `${item.q}-${index}`} className="group border-b border-border py-1">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-left text-[0.9375rem] font-semibold text-heading marker:hidden hover:text-accent-strong [&::-webkit-details-marker]:hidden">
              <span>{item.q}</span>
              <span
                aria-hidden="true"
                className="relative flex h-5 w-5 shrink-0 items-center justify-center border border-border-strong text-accent-strong transition-colors group-hover:border-accent-strong group-open:border-accent-strong"
              >
                <span className="absolute h-[1.5px] w-2.5 bg-current" />
                <span className="absolute h-2.5 w-[1.5px] bg-current transition-opacity group-open:opacity-0" />
              </span>
            </summary>
            <div className="pb-5 pr-8 text-[0.9375rem] leading-relaxed text-muted">{item.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
