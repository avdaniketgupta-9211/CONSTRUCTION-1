"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { Arrow, PhoneIcon } from "@/components/ui";
import { track } from "@/lib/analytics";

export function MobileCtaBar() {
  const pathname = usePathname();

  return (
    <div
      className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-primary/20 bg-surface/97 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden"
      role="group"
      aria-label="Quick contact actions"
    >
      <div className="mx-auto flex max-w-lg items-stretch gap-2.5">
        <a
          href={site.phone.href}
          onClick={() => track("call_now_tap", { location: "mobile_bar", page: pathname })}
          className="btn btn-outline flex-1 px-3 text-[0.8125rem]"
        >
          <PhoneIcon />
          Call Now
        </a>
        <Link
          href={pathname === "/contact" ? "#estimate-form" : "/contact#estimate-form"}
          onClick={() => track("book_estimate_tap", { location: "mobile_bar", page: pathname })}
          className="btn btn-primary flex-1 px-3 text-[0.8125rem]"
        >
          Book Estimate
          <Arrow />
        </Link>
      </div>
    </div>
  );
}
