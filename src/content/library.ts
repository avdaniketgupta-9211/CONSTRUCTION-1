export type ScenarioMetric = { label: string; value: string };

export type Scenario = {
  slug: string;
  title: string;
  serviceSlug: string;
  profileType: string;
  market: string;
  summary: string;
  metrics: ScenarioMetric[];
  situation: string[];
  constraints: string[];
  structure: string[];
  execution: string[];
  lesson: string;
  image: { src: string; alt: string };
  seo: { title: string; description: string };
};

/**
 * ILLUSTRATIVE PROJECT PROFILES
 * These are not client stories and contain no transaction values, client names,
 * or performance claims. They are clearly labelled in the UI.
 */
export const scenarios: Scenario[] = [
  {
    slug: "infill-townhome-assembly",
    title: "Four-parcel infill assembly for a 14-unit townhome project",
    serviceSlug: "ground-up-construction",
    profileType: "Illustrative profile — infill townhomes",
    market: "Illustrative urban infill submarket",
    summary:
      "A sponsor assembled four adjacent parcels over several months, then needed vertical capital without losing time to a fresh lender process.",
    metrics: [
      { label: "Program", value: "14 attached units" },
      { label: "Stage", value: "Assembly to vertical" },
      { label: "Capital type", value: "Construction" },
    ],
    situation: [
      "Four parcels were controlled under separate contracts with different closing dates. Two were already owned when the sponsor approached us; two remained under contract.",
      "The site had an approved site plan but unresolved utility relocation work that affected the early construction sequence.",
      "The sponsor had completed comparable attached projects and could show a realistic absorption view rather than a single exit assumption.",
    ],
    constraints: [
      "Utility relocation had to be completed before foundation work could begin on two of the four lots.",
      "The sponsor's original budget treated relocation as a soft cost without a dedicated contingency.",
      "A previous lender had declined the file because the assembly was incomplete at application.",
    ],
    structure: [
      "Land basis and vertical costs reviewed as a single sequence, with the remaining parcels included at their contracted price rather than an estimated value.",
      "A line item and contingency reserve created specifically for utility relocation, funded before structural work.",
      "Draw schedule organized by lot and phase so completed units could be inspected and released without waiting for the full project.",
    ],
    execution: [
      "The relocation scope was priced and scheduled before closing, with its own inspection point.",
      "Unit completions were tracked per lot, which allowed leasing conversations to begin earlier in the schedule.",
      "Change orders were reviewed individually; two were approved within the existing contingency, one required a capital contribution.",
    ],
    lesson:
      "Assemblies are rarely one project at application. Breaking the budget and draw schedule into land, site work, and vertical phases makes the risk visible — and gives a lender a way to say yes to a file it might otherwise decline.",
    image: { src: "/images/ground-up.jpg", alt: "Framing of a residential building under construction" },
    seo: {
      title: "Illustrative profile: infill townhome assembly",
      description:
        "An illustrative project profile showing how a four-parcel assembly was reviewed for construction financing. Not a client testimonial or performance claim.",
    },
  },
  {
    slug: "adaptive-reuse-warehouse",
    title: "Adaptive reuse of a light-industrial building into mixed-use",
    serviceSlug: "multifamily-development",
    profileType: "Illustrative profile — adaptive reuse",
    market: "Illustrative secondary-market downtown",
    summary:
      "A warehouse conversion with strong neighbourhood fundamentals and significant unknowns in structure and code compliance.",
    metrics: [
      { label: "Program", value: "Residential with ground-floor commercial" },
      { label: "Stage", value: "Pre-construction to stabilization" },
      { label: "Capital type", value: "Development" },
    ],
    situation: [
      "The existing building had good bones and an approved change of use, but structural reports identified areas requiring further investigation.",
      "The sponsor planned ground-floor commercial space with residential above, and had early tenant interest rather than signed leases.",
      "The neighbourhood had strong rental comparables, but unit sizes in the plan were larger than most recent deliveries.",
    ],
    constraints: [
      "Structural unknowns could only be resolved through selective demolition after closing.",
      "Commercial space carried separate lease-up risk and tenant improvement cost.",
      "Parking was limited and had to be addressed in the approval process, not deferred.",
    ],
    structure: [
      "A pre-construction phase funded for investigation and design completion, with vertical funding released only after the structural scope was priced.",
      "Separate budget lines for residential construction and commercial tenant improvements, each with its own contingency.",
      "Hold and exit explored for both rental stabilization and sale, with the structure reviewed against each.",
    ],
    execution: [
      "Demolition findings were documented and priced before the vertical budget was finalized.",
      "Commercial space was underwritten with a slower lease-up assumption than the sponsor's original plan.",
      "Draw inspections focused on life-safety systems first, then residential completion, then commercial build-out.",
    ],
    lesson:
      "For adaptive reuse, the honest answer is often 'not yet'. Funding investigation before committing the vertical budget is frequently cheaper than discovering the problem after demolition.",
    image: { src: "/images/facade.jpg", alt: "Facade detail of a modern residential building" },
    seo: {
      title: "Illustrative profile: adaptive reuse of a warehouse",
      description:
        "An illustrative adaptive-reuse project profile showing structural unknowns, phased funding, and separate commercial underwriting. Not a client testimonial.",
    },
  },
  {
    slug: "land-banking-entitlement",
    title: "Land banking while a zoning change was completed",
    serviceSlug: "land-acquisition",
    profileType: "Illustrative profile — land and entitlement",
    market: "Illustrative suburban infill corridor",
    summary:
      "A site purchased at a residential land value while the sponsor pursued rezoning for a higher-density program.",
    metrics: [
      { label: "Site", value: "Under 10 acres" },
      { label: "Stage", value: "Acquisition and entitlement" },
      { label: "Capital type", value: "Land" },
    ],
    situation: [
      "The parcel was zoned for a lower-density use, and the sponsor's programme required a change in zoning.",
      "The purchase price reflected the existing use, which reduced basis risk but meant the business plan depended on an approval outcome.",
      "A local approval timeline included a scheduled community consultation process.",
    ],
    constraints: [
      "Approval timing was not fully within the sponsor's control.",
      "Carrying costs could erode the advantage of the lower land basis if approvals ran long.",
      "The construction take-out depended on a future underwriting of the vertical project, not the land loan.",
    ],
    structure: [
      "Sizing based on current-use value plus documented entitlement progress, not on the post-rezoning land value.",
      "Carry and selected predevelopment costs included with a defined hold period and milestone reporting.",
      "Exit documented as construction financing or sale, with the construction decision explicitly separate.",
    ],
    execution: [
      "Milestones were scheduled against the approval calendar, and extension discussions started before deadlines rather than after.",
      "Professional team invoices were reviewed against the approved predevelopment scope.",
      "When approval came through later than originally planned, the documented milestones formed the basis of the extension discussion.",
    ],
    lesson:
      "Land debt should be sized to what exists today, with upside captured through execution. If a loan only works after an approval, it is equity risk dressed as debt.",
    image: { src: "/images/land.jpg", alt: "Plans for a development site laid out on grass" },
    seo: {
      title: "Illustrative profile: land banking through entitlement",
      description:
        "An illustrative land financing profile covering basis discipline, entitlement milestones, and extension documentation. Not a client testimonial.",
    },
  },
  {
    slug: "lease-up-bridge",
    title: "Bridge to stabilization for a lease-up that ran behind",
    serviceSlug: "bridge-financing",
    profileType: "Illustrative profile — bridge",
    market: "Illustrative metropolitan submarket",
    summary:
      "A completed building needed more time to reach stable occupancy before a permanent refinance.",
    metrics: [
      { label: "Asset", value: "Completed multifamily" },
      { label: "Stage", value: "Lease-up" },
      { label: "Capital type", value: "Bridge" },
    ],
    situation: [
      "Construction was complete, but leasing had lagged the original schedule because of competing new supply.",
      "The existing loan matured before the property reached the occupancy required for permanent debt.",
      "The sponsor had a leasing plan and budget, and had already adjusted concessions to reflect the market.",
    ],
    constraints: [
      "Permanent financing required a stabilization level the asset had not yet reached.",
      "Further concessions would affect net operating income at refinance.",
      "A rushed sale would have realized a lower value than the sponsor's plan supported.",
    ],
    structure: [
      "Bridge sized on current in-place income with the business plan reviewed separately, not on projected stabilization.",
      "A leasing milestone schedule and reporting rhythm documented before closing.",
      "Exit aligned to a realistic refinance window, with the conditions that would support extension named explicitly.",
    ],
    execution: [
      "Occupancy and concession data were reviewed monthly against the milestone schedule.",
      "The sponsor reduced concessions once absorption improved, which supported the refinance case.",
      "The permanent refinance was completed within the original bridge period.",
    ],
    lesson:
      "A bridge should be sized on what the asset produces today. If the loan requires stabilized income to service, it is not a bridge — it is an underwriting problem waiting for a maturity date.",
    image: { src: "/images/bridge.jpg", alt: "Illuminated high-rise residential buildings at dusk" },
    seo: {
      title: "Illustrative profile: bridge to stabilization",
      description:
        "An illustrative bridge financing profile covering in-place underwriting, leasing milestones, and refinance planning. Not a client testimonial.",
    },
  },
];

export const scenarioBySlug = (slug: string) => scenarios.find((scenario) => scenario.slug === slug);

export type ArticleSection = {
  heading: string;
  id: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  description: string;
  summary: string;
  minutes: number;
  takeaways: string[];
  sections: ArticleSection[];
  relatedService: string;
  related: string[];
};

export const articles: Article[] = [
  {
    slug: "what-lenders-review-before-a-ground-up-close",
    title: "What a lender actually reviews before a ground-up closing",
    category: "Guides",
    description:
      "The six areas that decide a construction file: basis, budget, sponsorship, contractor, entitlements, and exit. What to prepare before you apply.",
    summary:
      "Most construction files are not declined because of the site. They are declined because the budget cannot survive a surprise, or because no one can explain how the loan gets repaid.",
    minutes: 7,
    takeaways: [
      "Basis and realistic exit value matter more than the plan's ambition.",
      "A budget without a named contingency is a budget with a hidden gap.",
      "Contractor capacity is reviewed alongside the sponsor's track record.",
      "Diligence is faster when title, entity, and insurance items are started early.",
    ],
    sections: [
      {
        id: "basis",
        heading: "1. Basis and completed value",
        paragraphs: [
          "Basis is the total cost of getting the site and the build to completion. Completed value is what the finished asset is realistically worth. The relationship between them is where risk sits.",
          "A lender will typically test both your acquisition price and your exit assumption against evidence — comparable sales, leases, or appraisals. If your completed value depends on a market move that has not happened, expect the underwriting to be cautious.",
        ],
      },
      {
        id: "budget",
        heading: "2. The budget and its contingency",
        paragraphs: [
          "A line-item budget is the working document, not a summary page. Reviewers look for scope coverage: are site work, utilities, permits, insurance, and soft costs actually included?",
        ],
        bullets: [
          "Is the contingency sized to the unknowns in this specific project?",
          "Is the interest reserve consistent with the draw schedule?",
          "Are allowances named, or buried as lump sums?",
          "Does the schedule include realistic permitting and inspection time?",
        ],
      },
      {
        id: "sponsorship",
        heading: "3. Sponsorship and experience",
        paragraphs: [
          "Experience is not a single number. A sponsor who has completed two projects of similar scope in the same market is often stronger than one with a longer history of different asset types.",
          "Expect questions about what went wrong on prior projects, how change orders were handled, and whether the current project's risk profile resembles anything you have managed before.",
        ],
      },
      {
        id: "contractor",
        heading: "4. The contractor and the plan set",
        paragraphs: [
          "The contractor's licence, insurance, capacity, and current workload are reviewed alongside the plans. A capable contractor with no capacity for your start date is a schedule risk.",
          "Plan completeness matters because pricing gaps become change orders. If plans are not final, say so, and expect the budget to include allowances rather than pretending.",
        ],
      },
      {
        id: "entitlements",
        heading: "5. Entitlements, utilities, and site conditions",
        paragraphs: [
          "Zoning, permitted use, utility capacity, access, and environmental considerations are all confirmed before closing. Any open violation or unresolved approval becomes a closing condition.",
        ],
        note: "A common delay: utility capacity assumed to be available is only confirmed during diligence. Ask early.",
      },
      {
        id: "exit",
        heading: "6. The exit",
        paragraphs: [
          "Construction debt is temporary. The exit might be a sale, a refinance, or a permanent loan. Each has conditions, and those conditions should be realistic at closing, not at some hoped-for future date.",
          "If your exit depends on a specific occupancy level, rent level, or sale price, write it down and test it against current evidence. It is better to adjust the plan before closing than at maturity.",
        ],
      },
    ],
    relatedService: "ground-up-construction",
    related: ["how-construction-draws-work", "bridge-vs-construction-financing"],
  },
  {
    slug: "how-construction-draws-work",
    title: "How construction draws work — and why budgets drift",
    category: "Process",
    description:
      "A practical walkthrough of draw requests, inspections, retainage, and change orders, plus the budget habits that keep a project from stalling.",
    summary:
      "Draws are the operating rhythm of a construction loan. Understanding the sequence helps you avoid the two most common problems: missing documentation and unapproved scope.",
    minutes: 6,
    takeaways: [
      "A draw is a reimbursement for completed work, not an advance.",
      "Inspections verify progress against the approved budget.",
      "Change orders should be approved before work proceeds.",
      "Retainage protects completion; plan cash flow around it.",
    ],
    sections: [
      {
        id: "sequence",
        heading: "The draw sequence",
        paragraphs: [
          "A typical cycle starts with a request supported by progress evidence — invoices, lien waivers, and photographs. The lender inspects, compares progress to the approved budget, and releases funds net of any retainage.",
        ],
        bullets: [
          "Request submitted with supporting documentation",
          "Inspection scheduled and completed",
          "Line items confirmed against the approved budget",
          "Change orders reviewed if any are open",
          "Funds disbursed, retainage withheld per the agreement",
        ],
      },
      {
        id: "drift",
        heading: "Why budgets drift",
        paragraphs: [
          "Budgets usually drift for unglamorous reasons: an allowance that was too low, a utility connection that took longer, or a scope item that was never in the budget.",
          "The fix is not optimism. It is a contingency that is genuinely available, a schedule with float, and a discipline of writing changes down before they are executed.",
        ],
      },
      {
        id: "change-orders",
        heading: "Change orders and inspections",
        paragraphs: [
          "Change orders are reviewed against the remaining contingency. If a change consumes the contingency, expect a conversation about additional capital or scope reduction before further draws are released.",
          "Inspections are also an early warning system. Repeated underperformance on a line item is a schedule and budget signal, and it is better addressed at draw two than at draw eight.",
        ],
        note: "Keep a single current budget file with a change log. Version confusion is one of the most common causes of draw delays.",
      },
      {
        id: "retainage",
        heading: "Retainage and final completion",
        paragraphs: [
          "Retainage is held until completion and close-out items are satisfied. It is not a penalty; it is protection for items that are easy to leave unfinished.",
          "Plan liquidity for final completion, including landscaping, punch items, and close-out documentation. These are the items that most often delay the last draw.",
        ],
      },
    ],
    relatedService: "ground-up-construction",
    related: ["what-lenders-review-before-a-ground-up-close", "land-basis-and-entitlement-risk"],
  },
  {
    slug: "bridge-vs-construction-financing",
    title: "Bridge vs. construction financing: choose the right tool",
    category: "Market education",
    description:
      "A comparison of transitional and construction debt, the situations each is designed for, and the questions that reveal which one your project needs.",
    summary:
      "Both are short-term and both are secured by real estate. They solve different problems, and using the wrong one creates friction from the first draw.",
    minutes: 5,
    takeaways: [
      "Construction debt funds a build against inspected progress.",
      "Bridge debt funds a time-bound transition, typically on an existing asset.",
      "The exit determines the structure more than the property type does.",
      "Using a construction structure on a lease-up problem usually creates cost without progress.",
    ],
    sections: [
      {
        id: "construction",
        heading: "When construction financing fits",
        paragraphs: [
          "Construction financing is designed for physical work: the asset is being built, or substantially rebuilt, and funds release against inspected progress. The budget is a line-item document and the schedule is central.",
          "If the property does not yet produce income and the value is created by completion, this is usually the right instrument.",
        ],
      },
      {
        id: "bridge",
        heading: "When bridge financing fits",
        paragraphs: [
          "Bridge debt is designed for transitions on an existing asset: lease-up, recapitalization, maturity, or a defined improvement plan. Milestones are often operational rather than construction-based.",
          "If the asset already exists and the opportunity is time — not a new building — a bridge structure is typically more appropriate.",
        ],
      },
      {
        id: "comparison",
        heading: "A practical comparison",
        bullets: [
          "Primary purpose: construction funds the build; bridge funds a transition",
          "Underwriting focus: budget and schedule vs. in-place income and business plan",
          "Funding cadence: draw-driven vs. typically a smaller number of advances",
          "Exit: permanent financing or sale of a completed asset vs. stabilization refinance or sale",
          "Main risk: construction cost and timeline vs. lease-up and exit assumptions",
        ],
      },
      {
        id: "questions",
        heading: "Four questions that clarify the structure",
        bullets: [
          "Is the property already substantially complete?",
          "Where does value come from — physical work or operating performance?",
          "What specifically has to happen before the permanent exit?",
          "Can the asset service the debt from current income, or does it depend on future performance?",
        ],
        note: "Some projects genuinely need both, in sequence. In that case, plan the transition at the start rather than at the maturity date.",
      },
    ],
    relatedService: "bridge-financing",
    related: ["renovation-scope-and-budget", "how-construction-draws-work"],
  },
  {
    slug: "land-basis-and-entitlement-risk",
    title: "Land basis and entitlement risk, explained plainly",
    category: "Guides",
    description:
      "Why lenders size land debt against current use rather than post-approval value, and how milestone documentation changes an extension conversation.",
    summary:
      "Land is where development risk concentrates. The two variables that matter most are what you paid and what has actually been approved.",
    minutes: 5,
    takeaways: [
      "Size land debt against current use, not a hoped-for approval.",
      "Document entitlement milestones with dates and responsible parties.",
      "Carry costs belong in the decision, not in a footnote.",
      "Construction take-out is a separate underwriting and should never be assumed.",
    ],
    sections: [
      {
        id: "basis",
        heading: "Why basis drives everything",
        paragraphs: [
          "A site's current-use value is observable. Its post-entitlement value is an expectation that depends on an approval. Lending against the second before the first is complete is how land loans become distressed.",
          "Lower basis does not eliminate risk, but it creates room. That room is what allows a project to survive a longer approval timeline or a softer market.",
        ],
      },
      {
        id: "entitlement",
        heading: "Entitlement risk in practice",
        paragraphs: [
          "Entitlement risk includes the approval itself, the conditions attached to it, and the time required. Conditions can add cost — wider setbacks, more parking, utility upgrades, or design changes.",
        ],
        bullets: [
          "What is the exact approval required, and from which body?",
          "What conditions are likely to be attached?",
          "Is there a scheduled review calendar, and how long does each stage take?",
          "Who is responsible for each submission, and what is the dependency order?",
        ],
      },
      {
        id: "carry",
        heading: "Carry costs and the hold period",
        paragraphs: [
          "Interest, taxes, insurance, and professional fees accumulate during the hold. A longer approval timeline can consume the advantage of a low land price if those costs were not modelled.",
          "Include carry in sources and uses from the beginning, and decide in advance what happens if the hold extends.",
        ],
      },
      {
        id: "exit",
        heading: "The exit has to be explicit",
        paragraphs: [
          "Land debt is usually repaid through a sale, a refinance, or a construction take-out. Each of those exits has its own conditions, and none of them is guaranteed by the land loan.",
          "Writing the exit down at the start makes the extension conversation factual rather than circumstantial.",
        ],
        note: "If the plan only works if approvals arrive early and construction financing is available immediately, the plan has no buffer.",
      },
    ],
    relatedService: "land-acquisition",
    related: ["what-lenders-review-before-a-ground-up-close", "bridge-vs-construction-financing"],
  },
  {
    slug: "renovation-scope-and-budget",
    title: "Writing a renovation scope a lender can fund",
    category: "Process",
    description:
      "How to structure scope, unit-level costing, contingency, and draw schedules so a repositioning project can be reviewed and funded without guesswork.",
    summary:
      "Renovation budgets fail when scope is described in adjectives instead of quantities. A fundable scope is specific about what is being replaced, where, and at what cost.",
    minutes: 5,
    takeaways: [
      "Describe work by unit and line item, not by aspiration.",
      "Separate contingency from line items and name the unknowns.",
      "A draw schedule should follow the actual sequence of work.",
      "Identify what you will do if the completed value misses the plan.",
    ],
    sections: [
      {
        id: "scope",
        heading: "From description to schedule of values",
        paragraphs: [
          "A schedule of values converts scope into priced lines that can be inspected. It is the document draws are measured against, and it should mirror how the contractor bills.",
        ],
        bullets: [
          "Interior: kitchens, baths, flooring, paint, lighting by unit type",
          "Building: roof, envelope, windows, mechanical, electrical, plumbing",
          "Common areas: corridors, lobby, amenities, landscaping",
          "Site: parking, drainage, access, signage",
          "Soft costs: design, permits, inspections, insurance",
        ],
      },
      {
        id: "unknowns",
        heading: "Naming unknowns",
        paragraphs: [
          "Older buildings hide conditions: subfloor damage, outdated wiring, undersized services. If you do not have reports, say so and reserve for it. An honest allowance is more credible than a precise number with no basis.",
        ],
      },
      {
        id: "draws",
        heading: "Building the draw schedule",
        paragraphs: [
          "The draw schedule should follow work sequence, not the contractor's preferred cash flow. Group work into inspectable stages and confirm who submits requests and who signs them.",
        ],
      },
      {
        id: "risk",
        heading: "If the completed value misses the plan",
        paragraphs: [
          "Decide in advance what levers exist: hold and rent, reduce scope, add capital, or sell. A plan that only works at the top of the rent range has no fallback.",
        ],
        note: "This article describes investment property. Consumer-purpose renovation lending is regulated differently and is not offered here.",
      },
    ],
    relatedService: "renovation-capital",
    related: ["bridge-vs-construction-financing", "how-construction-draws-work"],
  },
];

export const articleBySlug = (slug: string) => articles.find((article) => article.slug === slug);

export type FaqItem = { q: string; a: string };
export type FaqGroup = { id: string; title: string; intro: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "general",
    title: "General",
    intro: "Who we work with and how the company is set up.",
    items: [
      {
        q: "What kind of borrower does Kestrel Ridge work with?",
        a: "Experienced builders, developers, and property owners financing investment real estate in select U.S. metropolitan markets. Requests involving consumer or owner-occupied lending are outside our scope.",
      },
      {
        q: "Is this a bank?",
        a: "No. Kestrel Ridge is presented as a private real estate capital provider. Nothing on this site is a deposit product, a bank commitment, or a guarantee that financing will be approved.",
      },
      {
        q: "Where do you lend?",
        a: "Coverage is described as select U.S. metropolitan markets. Because a specific verified market list has not been supplied for this build, coverage is confirmed on the fit call rather than published as a claim.",
      },
      {
        q: "Are the program descriptions on this site an offer?",
        a: "No. All program descriptions are illustrative and are not an offer to lend or a commitment to fund. Rate, leverage, term, and fees are set per transaction and subject to underwriting, appraisal, title review, and credit approval.",
      },
    ],
  },
  {
    id: "services",
    title: "Services and fit",
    intro: "Choosing the right instrument for the stage you are in.",
    items: [
      {
        q: "How do I know which service fits my project?",
        a: "Use the service chooser on the Services page. In short: a build needs construction financing, an existing asset needing time needs bridge, a site or approvals need land, a multi-unit development usually needs one coordinated plan, and a scoped improvement to an existing property fits renovation capital.",
      },
      {
        q: "Can I combine products?",
        a: "Some projects are structured in stages — land, construction, then a stabilization refinance. Each stage is underwritten on its own terms. Approving one stage does not commit any party to the next.",
      },
      {
        q: "Do you finance owner-occupied homes?",
        a: "No. The programs described here are for investment property. Consumer-purpose lending is regulated differently and is not offered through this site.",
      },
      {
        q: "Will you tell me if my project does not fit?",
        a: "Yes, and as early as possible. If the request belongs with a bank, an equity partner, or another lender, we would rather say so on the first call than after a month of documents.",
      },
    ],
  },
  {
    id: "process",
    title: "Process and timing",
    intro: "What happens after you submit the form, without invented turnaround promises.",
    items: [
      {
        q: "What happens after I submit the estimate form?",
        a: "Your request is validated and stored securely, then reviewed by the team. If the project appears to be in scope, you will be contacted to discuss coverage, basis, and timing. No automated approval is implied.",
      },
      {
        q: "Do I need a full package to start?",
        a: "No. The starting form has four fields. Plans, budget, and entity documents are requested only after a fit conversation, and the request list is sent in one pass.",
      },
      {
        q: "How long does a financing request take?",
        a: "We do not publish a turnaround claim, because timing depends on the project, documentation quality, third-party reports, and market. The sequence and the open items are documented after the fit call so progress is visible.",
      },
      {
        q: "Can I submit on behalf of a client?",
        a: "Yes, with the sponsor's permission. Include the sponsor's contact details in the message so the fit conversation includes the decision-maker.",
      },
    ],
  },
  {
    id: "documents",
    title: "Documents and diligence",
    intro: "What review actually involves.",
    items: [
      {
        q: "What documents are usually requested?",
        a: "Plans and specifications, a line-item budget, contractor information, site and title documents, entity documentation, a guarantor financial statement, and a sources-and-uses statement. The exact list depends on the product and the project.",
      },
      {
        q: "Do you require an appraisal?",
        a: "Appraisal and other third-party review requirements are set per transaction. Where an appraisal is required, it is ordered as part of diligence and its findings affect final sizing and terms.",
      },
      {
        q: "Will you need personal guarantees?",
        a: "Recourse and guarantee requirements are structured per project and sponsor and confirmed before a term sheet. They are not standardised or guaranteed in advance.",
      },
      {
        q: "How are construction funds controlled?",
        a: "Funds are released against inspected progress, with supporting documentation and a draw schedule agreed before closing. Change orders are reviewed before funding.",
      },
    ],
  },
  {
    id: "costs",
    title: "Costs and terms",
    intro: "Why this site does not publish rates.",
    items: [
      {
        q: "What are the rates?",
        a: "Rates are not published on this site because they are set per transaction and depend on the asset, sponsor, structure, leverage, and market. Any rate or fee indication is only meaningful in a written, underwritten proposal.",
      },
      {
        q: "What fees should I expect?",
        a: "Fees are disclosed in the proposal and closing documents for a specific transaction. This site does not state universal fee amounts, and no fee information here should be relied on as an offer.",
      },
      {
        q: "Can financing include closing costs or interest reserve?",
        a: "In some structures, selected closing costs, carry, or interest reserve can be capitalized. Eligibility and treatment are confirmed during underwriting and documented in the term sheet.",
      },
      {
        q: "Is there any guarantee of approval?",
        a: "No. No lender can responsibly guarantee approval before underwriting and third-party review. Be cautious with any financing source that does.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy and data",
    intro: "What happens to the information you submit.",
    items: [
      {
        q: "What do you do with my information?",
        a: "The four-field form is validated on the server and stored in a secure database so the request can be reviewed. Email and webhook delivery are optional server-side integrations. We do not sell submission data or send form contents to analytics.",
      },
      {
        q: "Should I include sensitive financial details in the form?",
        a: "No. The starting form only asks for a short description of the project. Documents and financial information should only be shared through a secure channel once the fit conversation has begun.",
      },
    ],
  },
];

export const homepageFaqIds = [
  "general-0",
  "general-3",
  "services-0",
  "process-0",
  "process-2",
  "costs-0",
  "documents-3",
];
