import { serviceBySlug } from "@/content/services";

/**
 * Service-specific redirection copy. Kept separate so each service page has a
 * genuinely different "when another service may be better" explanation rather
 * than a shared template line.
 */
const messages: Record<string, string> = {
  "ground-up-construction":
    "If the property already exists and the value comes from leasing or stabilizing rather than construction, bridge financing is usually the better instrument. If you only need capital to buy or carry the site while approvals are completed, start with land financing.",
  "land-acquisition":
    "If the site is already approved, owned outright, and ready for vertical work, construction financing may be the better starting point. If the asset is built and needs time to lease up, bridge financing is the usual fit.",
  "bridge-financing":
    "If the property needs a physical build rather than a transition, construction financing fits better. If the work is a defined improvement scope on an income-producing asset, renovation capital may be more precise than a general bridge.",
  "multifamily-development":
    "A single-family or small attached build is usually handled more simply through ground-up construction. If the building already exists and only needs scoped improvements, renovation capital is the right conversation.",
  "renovation-capital":
    "If the property needs a new structure rather than work to an existing one, construction financing applies. If the main need is time to lease up a completed asset rather than fund work, bridge financing is the better tool.",
};

export function differingDetail(slug: string): string {
  return (
    messages[slug] ??
    `Compare the other structures before committing. Start with the stage of the work, then confirm fit with the team. ${
      serviceBySlug(slug)?.bestFor ?? ""
    }`
  );
}
