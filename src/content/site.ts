/**
 * SINGLE SOURCE OF TRUTH FOR BRAND + BUSINESS FACTS
 *
 * Nothing in this file should be treated as verified business fact unless
 * `verified` is true. Items marked unverified are deliberate, clearly-labelled
 * placeholders and are logged on /content-status. See the final report for the
 * launch-blocker list.
 */

const phoneDisplay = process.env.NEXT_PUBLIC_SITE_PHONE_DISPLAY ?? "+1 (555) 010-0199";
const phoneHref = process.env.NEXT_PUBLIC_SITE_PHONE_E164 ?? "+15550100199";

export const site = {
  name: "Kestrel Ridge Capital",
  shortName: "Kestrel Ridge",
  legalName: "Kestrel Ridge Capital, LLC",
  category: "Private real estate capital",
  audienceLine: "For builders, developers, and sponsors",
  tagline: "Real estate capital, structured around the build.",
  description:
    "Kestrel Ridge Capital structures ground-up, land, bridge, multifamily, and repositioning debt for builders, developers, and sponsors in select U.S. markets.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kestrelridge.example",
  phone: {
    display: phoneDisplay,
    href: `tel:${phoneHref}`,
    verified: false,
    note: "Placeholder demo line (reserved 555 range). Replace with a verified number before launch.",
  },
  email: {
    display: process.env.NEXT_PUBLIC_SITE_EMAIL ?? "projects@kestrelridge.example",
    verified: false,
    note: "Placeholder inbox on a reserved .example domain. Replace with a monitored inbox.",
  },
  markets: {
    label: "Select U.S. metropolitan markets",
    verified: false,
    note: "Coverage claim is qualitative. Publish a verified market list before launch if coverage language is required.",
  },
  hours: {
    label: "Inquiry form is open at any time",
    verified: true,
  },
  social: [] as { label: string; href: string }[],
  formDestination: {
    label: "Server-side database capture (PostgreSQL via Drizzle)",
    verified: true,
    note: "Every submission is validated server-side and persisted. Optional webhook forwarding is configured with LEAD_WEBHOOK_URL.",
  },
  disclosure:
    "Kestrel Ridge Capital is a demonstration brand. Program descriptions on this site are illustrative, are not an offer to lend, and do not constitute a commitment to fund. All financing is subject to underwriting, appraisal, title review, and credit approval. Terms are set per transaction.",
} as const;

export type NavChild = { label: string; href: string; description: string };

export const primaryNav = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Scenario Library", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
] as const;

export const proofStrip = [
  {
    value: "Project-level",
    label: "underwriting",
    detail: "Every request is reviewed against the specific build, basis, and exit.",
  },
  {
    value: "Direct",
    label: "decision access",
    detail: "You speak with the people reviewing the file, not a queue.",
  },
  {
    value: "Draw-based",
    label: "funding",
    detail: "Schedules are mapped to inspected progress and your contractor's billing cycle.",
  },
  {
    value: "Select",
    label: "U.S. markets",
    detail: "Coverage is confirmed during intake before anyone spends time on a full package.",
  },
] as const;

export const differentiators = [
  {
    title: "Read the plan, not just the spreadsheet",
    body: "We start with the site, the sponsor's experience, and the exit. Budget and scope are evaluated in the same conversation as basis and completed value.",
  },
  {
    title: "A single accountable point of contact",
    body: "Underwriting, draw administration, and closing are coordinated by one person who can answer a question without transferring you.",
  },
  {
    title: "Structures that match the schedule",
    body: "Proceeds are organized around land, hard costs, soft costs, contingency, and carry so the budget does not stall in month four.",
  },
  {
    title: "Honest fit conversations",
    body: "If a request belongs with a bank, an equity partner, or a different lender, we say so early. A clear no is worth more than a slow maybe.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Tell us what you are building",
    body: "Use the four-field estimate form. We only need your name, a phone number, an optional email, and a short description of the project. No package required to start.",
    detail: "Five minutes, no file uploads",
  },
  {
    step: "02",
    title: "Fit call and coverage check",
    body: "We confirm market, asset type, basis, experience, and timing. If the request is outside our appetite, you hear that on this call.",
    detail: "Scope and appetite confirmed",
  },
  {
    step: "03",
    title: "Indicative structure",
    body: "You receive a written outline of how the transaction could be sized and structured, plus the open items that would need to be resolved before a term sheet.",
    detail: "Written, not verbal-only",
  },
  {
    step: "04",
    title: "Underwriting and diligence",
    body: "Plans, budget, contractor information, entity documents, and title are reviewed together. We flag problems while they are still cheap to fix.",
    detail: "One consolidated request list",
  },
  {
    step: "05",
    title: "Approval, closing, draws",
    body: "After approval and closing, funds are released against inspected progress. Your point of contact stays with the file through draws and any extension.",
    detail: "Same contact through the build",
  },
] as const;

export const audiences = [
  {
    title: "Builders",
    body: "Production and custom builders who need a lender that understands construction sequencing and draw pacing.",
    href: "/services/ground-up-construction",
    cta: "Ground-up construction financing",
  },
  {
    title: "Developers",
    body: "Sponsors assembling land, securing entitlements, and moving into vertical construction with a single capital plan.",
    href: "/services/multifamily-development",
    cta: "Multifamily and mixed-use capital",
  },
  {
    title: "Operators and owners",
    body: "Owners repositioning a property, bridging to stabilization, or holding a parcel while approvals are completed.",
    href: "/services/renovation-capital",
    cta: "Renovation and repositioning capital",
  },
  {
    title: "Land holders",
    body: "Owners and sponsors financing acquisition or carrying costs while site work, entitlements, or a build plan mature.",
    href: "/services/land-acquisition",
    cta: "Land and acquisition financing",
  },
  {
    title: "Advisors and brokers",
    body: "Brokers who want a straight answer for a client instead of a month of silence. Submit the same four-field form with the sponsor's permission.",
    href: "/contact#estimate-form",
    cta: "Start a project review",
  },
] as const;

export const operatingPrinciples = [
  {
    title: "Underwrite the downside first",
    body: "Before discussing upside, we test basis, contingency, and the realistic exit. If the downside does not work, the loan should not close.",
  },
  {
    title: "Put expectations in writing",
    body: "Open items, responsibility, and expected sequence are documented. Verbal-only terms create problems later.",
  },
  {
    title: "One file, one owner",
    body: "The person who took your first call remains accountable through closing and draw administration.",
  },
  {
    title: "No unsupported claims",
    body: "We do not advertise rates, turnaround times, or approval odds we cannot substantiate. Fit is discussed against the actual project.",
  },
] as const;

export const roles = [
  {
    title: "Project underwriting",
    body: "Reviews basis, budget, scope, contingency, and exit. Produces the written structure you can share with your partners.",
  },
  {
    title: "Construction administration",
    body: "Coordinates draw inspections, budget tracking, and change-order review from first draw to final retention.",
  },
  {
    title: "Closing coordination",
    body: "Manages title, entity, insurance, and lender requirements so closing does not become a scavenger hunt.",
  },
] as const;

export const contentStatus = [
  {
    item: "Brand name and positioning",
    status: "PROPOSED",
    detail: "No supplied brand assets existed in the repository. Kestrel Ridge Capital is an original demonstration identity created for this build.",
  },
  {
    item: "Service lineup and program descriptions",
    status: "PROPOSED",
    detail: "Five services reflect a plausible private real estate capital offering. Descriptions are structural, not numeric, and carry a no-offer disclosure.",
  },
  {
    item: "Phone number",
    status: "PLACEHOLDER",
    detail: "The mobile Call Now action uses the reserved +1 (555) 010-0199 demo number. LAUNCH BLOCKER: replace with a verified number.",
  },
  {
    item: "Email address",
    status: "PLACEHOLDER",
    detail: "projects@kestrelridge.example uses the reserved .example TLD. LAUNCH BLOCKER: replace with a monitored inbox.",
  },
  {
    item: "Geographic coverage",
    status: "UNVERIFIED",
    detail: "Markets are described qualitatively as 'select U.S. metropolitan markets'. Publish a verified coverage list if required.",
  },
  {
    item: "Rates, leverage, terms, minimums, timing",
    status: "WITHHELD",
    detail: "No numeric product terms were supplied, so none are published. Every service page states that terms are set per transaction and are not an offer.",
  },
  {
    item: "Case studies and client stories",
    status: "ILLUSTRATIVE",
    detail: "The scenario library contains illustrative project profiles, clearly labelled as not client testimonials. Replace with approved transactions before launch.",
  },
  {
    item: "Team profiles and photography",
    status: "PLACEHOLDER",
    detail: "No verified names or headshots were supplied. The site describes accountable roles instead of inventing people.",
  },
  {
    item: "Form submission destination",
    status: "VERIFIED IN BUILD",
    detail: "Submissions are validated server-side and written to PostgreSQL. Optional webhook delivery is available via LEAD_WEBHOOK_URL.",
  },
  {
    item: "Legal pages",
    status: "DRAFT",
    detail: "Privacy and Terms are development drafts describing this build's actual behavior. Qualified counsel must review before launch.",
  },
  {
    item: "Photography",
    status: "LICENSED",
    detail: "Pexels photography and the homepage background video are used under the Pexels license. Credits listed below. Footage is contextual, not a company project.",
  },
] as const;

export const imageCredits = [
  { file: "hero.jpg", creator: "Alexandru Cojanu", source: "Pexels", alt: "Modern apartment building with glass balconies and potted plants", url: "https://www.pexels.com/photo/facade-of-a-residential-building-with-balconies-19577805/" },
  { file: "ground-up.jpg", creator: "D Goug", source: "Pexels", alt: "Wood framing of a new house under construction in Sacramento", url: "https://www.pexels.com/photo/framing-construction-of-new-housing-in-sacramento-39367476/" },
  { file: "land.jpg", creator: "Thirdman", source: "Pexels", alt: "Architectural blueprints laid out on a grassy site", url: "https://www.pexels.com/photo/blueprint-on-a-grassy-ground-8470829/" },
  { file: "multifamily.jpg", creator: "Dylan Leagh", source: "Pexels", alt: "Brick residential buildings with balconies and greenery", url: "https://www.pexels.com/photo/low-angle-shot-of-a-concrete-building-9039850/" },
  { file: "bridge.jpg", creator: "Turuncu Sakal", source: "Pexels", alt: "Illuminated high-rise residential buildings at dusk", url: "https://www.pexels.com/photo/glass-facades-of-twin-high-rise-buildings-at-dusk-19392859/" },
  { file: "renovation.jpg", creator: "Ramon Karolan", source: "Pexels", alt: "Workers restoring a historic building facade in Spain", url: "https://www.pexels.com/photo/workers-restoring-historic-building-in-spain-38326993/" },
  { file: "advisory.jpg", creator: "Tima Miroshnichenko", source: "Pexels", alt: "Architect drawing layouts at a drafting desk", url: "https://www.pexels.com/photo/an-architect-making-designs-and-layouts-6614757/" },
  { file: "process.jpg", creator: "Jaffer M", source: "Pexels", alt: "Aerial view of suburban houses under construction", url: "https://www.pexels.com/photo/aerial-view-of-suburban-housing-construction-site-40252155/" },
  { file: "documents.jpg", creator: "Gustavo Fring", source: "Pexels", alt: "Hands analyzing blueprints and project figures at a desk", url: "https://www.pexels.com/photo/architects-discussing-bluep-6285150/" },
  { file: "facade.jpg", creator: "Doğuhan Alpaslan Demir", source: "Pexels", alt: "Contemporary apartment facade with glass balconies", url: "https://www.pexels.com/photo/a-close-up-of-a-modern-apartment-building-27459248/" },
  { file: "hero-construction.mp4", creator: "Rafael Martinez", source: "Pexels", alt: "Aerial background video of a residential construction site", url: "https://www.pexels.com/video/aerial-view-of-residential-construction-site-37522751/" },
  { file: "hero-poster.jpg", creator: "Rafael Martinez", source: "Pexels", alt: "Aerial still from the residential construction background video", url: "https://www.pexels.com/video/aerial-view-of-residential-construction-site-37522751/" },
] as const;
