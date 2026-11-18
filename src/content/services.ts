export type ServiceDetail = { label: string; value: string };
export type ServiceBlock = { title: string; body: string };

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  category: string;
  tagline: string;
  summary: string;
  heroTitle: string;
  heroIntro: string;
  image: { src: string; alt: string; position?: string };
  bestFor: string;
  keyDetails: ServiceDetail[];
  forWhom: ServiceBlock[];
  supports: ServiceBlock[];
  whyTitle: string;
  whyBody: string;
  why: ServiceBlock[];
  process: { title: string; body: string }[];
  qualifications: { title: string; items: string[] }[];
  scenarioSlugs: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  ctaTitle: string;
  ctaBody: string;
  seo: { title: string; description: string };
};

export const services: Service[] = [
  {
    slug: "ground-up-construction",
    name: "Ground-Up Construction Financing",
    navLabel: "Ground-Up Construction",
    category: "Vertical construction capital",
    tagline: "Build capital released against inspected progress, not promises.",
    summary:
      "Financing for shovel-ready residential and small commercial construction, sized around land basis, hard costs, soft costs, contingency, and carry.",
    heroTitle: "Construction capital that follows the schedule",
    heroIntro:
      "For builders with approved plans and a real budget. We finance the vertical build with a draw schedule mapped to your contractor's billing cycle, and we flag budget gaps before closing instead of at draw three.",
    image: { src: "/images/ground-up.jpg", alt: "Wood framing of a new house under construction" },
    bestFor: "Builders and developers moving a permitted project into vertical construction.",
    keyDetails: [
      { label: "Use of proceeds", value: "Land (where included), hard costs, soft costs, contingency, and interest reserve." },
      { label: "Typical assets", value: "Detached and attached residential, small multifamily, and light commercial." },
      { label: "Draw process", value: "Funds released against inspected progress, coordinated with your contractor's billing cycle." },
      { label: "Term and extensions", value: "Sized to the build schedule and set per transaction. No published term is implied here." },
      { label: "Recourse and guarantees", value: "Structured per project and sponsor; confirmed before term sheet." },
      { label: "Coverage", value: "Select U.S. metropolitan markets. Coverage is confirmed on the fit call." },
    ],
    forWhom: [
      {
        title: "You have plans and a real budget",
        body: "Permit-ready or permitted drawings, a line-item budget, and a contractor you intend to use. We can work with allowances for items still being finalized, as long as they are named.",
      },
      {
        title: "The number has to survive the build",
        body: "You want contingency and carry tested properly, not a loan amount that only works if nothing goes wrong.",
      },
      {
        title: "You need an answer you can plan around",
        body: "Your schedule is real, your trades are booked, and a slow maybe costs more than a clear no.",
      },
    ],
    supports: [
      { title: "Single-family build", body: "Custom or speculative homes where land and vertical costs are financed together or separately." },
      { title: "Small multifamily", body: "Townhomes, duplexes, and small apartment buildings with phased draws and a defined exit." },
      { title: "Infill development", body: "Tight urban lots where staging, access, and utility work need to be priced honestly." },
      { title: "Light commercial", body: "Small-format commercial where the tenant plan and lease-up assumptions are documented." },
      { title: "Mid-construction transitions", body: "Projects already underway that need a new or replacement capital partner, subject to review." },
      { title: "Phased delivery", body: "Builds released in stages where completion of one phase funds the next." },
    ],
    whyTitle: "Why use construction financing instead of cash or a general line?",
    whyBody:
      "Construction debt spreads the cost of a build across the period the money is actually needed and keeps working capital free for the next opportunity. It also introduces a third-party review of scope and progress — useful discipline when a project drifts.",
    why: [
      {
        title: "Draws engineered around your trades",
        body: "The draw schedule is set up in underwriting, not improvised after closing, so your trades know when their work can be inspected and paid.",
      },
      {
        title: "Contingency tested at the start",
        body: "We review scope against the budget before closing and price the carry. If there is a gap, you know about it while you can still change the plan.",
      },
      {
        title: "Clear boundary with other products",
        body: "If you are buying and stabilizing an existing asset, bridge financing is usually the better tool. If you only need land or entitlement capital, start with land financing. We will redirect you rather than force a fit.",
      },
    ],
    process: [
      { title: "Project intake", body: "Four-field form. Address, asset type, and a short description is enough to begin." },
      { title: "Fit and feasibility call", body: "Coverage, plans, permit status, budget, contractor, and exit are discussed in one pass." },
      { title: "Written indicative structure", body: "A short outline of sizing approach, documents required, and open items." },
      { title: "Plans, budget, and contractor review", body: "Scope, line items, contingency, and the general contractor's experience and capacity." },
      { title: "Appraisal, title, and entity diligence", body: "Third-party work and sponsor documentation completed in parallel where possible." },
      { title: "Approval and closing", body: "Final terms documented, closing coordinated, and initial draw released as work is verified." },
    ],
    qualifications: [
      {
        title: "Project documentation",
        items: [
          "Plans and specifications (permit status disclosed)",
          "Line-item construction budget and schedule",
          "Signed or draft general contractor agreement",
          "Purchase contract or vesting deed for the site",
        ],
      },
      {
        title: "Sponsor information",
        items: [
          "Borrowing entity documents and ownership structure",
          "Completed-project history with scope and outcome",
          "Personal financial statement for guarantors",
          "Sources and uses, including contingency and reserves",
        ],
      },
      {
        title: "Site and title",
        items: ["Title commitment and survey", "Zoning confirmation and any open violations", "Current insurance plan for the build", "Utility and access information where relevant"],
      },
    ],
    scenarioSlugs: ["infill-townhome-assembly", "adaptive-reuse-warehouse"],
    faqs: [
      {
        q: "When should I approach a construction lender?",
        a: "As soon as you have a site you control and a cost estimate you trust. Plans do not need to be permit-ready for an initial conversation, but they must be far enough along to test scope against budget before a term sheet.",
      },
      {
        q: "Can you finance the land and the build together?",
        a: "Often, yes — as a single structure or a bridge to construction, depending on whether the site is already owned and how far permitting has progressed. Timing is set per transaction.",
      },
      {
        q: "How are draws requested and paid?",
        a: "Draw requests are submitted with progress support and reviewed after inspection. Each package is checked against the approved budget, and any change order is reviewed before funds are released.",
      },
      {
        q: "What if my contractor is not approved yet?",
        a: "We review the contractor's experience, licensing, insurance, and capacity alongside your own track record. If the contractor is still being selected, that is an open item rather than an automatic disqualifier.",
      },
      {
        q: "Do you publish rates or leverage?",
        a: "No. Pricing and leverage depend on the site, the budget, the sponsor, and the market, and are only meaningful when underwritten. Nothing on this page is an offer to lend.",
      },
    ],
    related: ["land-acquisition", "bridge-financing", "multifamily-development"],
    ctaTitle: "Have the site and the plan? Let's test the number.",
    ctaBody:
      "Share the address, the build type, and roughly what you are trying to accomplish. We will tell you whether it fits our appetite and what we would need to review.",
    seo: {
      title: "Ground-Up Construction Financing",
      description:
        "Construction financing for builders and developers: draw-based funding, budget and contingency review, and a written indicative structure. Terms set per transaction.",
    },
  },
  {
    slug: "land-acquisition",
    name: "Land & Acquisition Financing",
    navLabel: "Land & Acquisition",
    category: "Site acquisition and carry capital",
    tagline: "Secure the site while the plan catches up.",
    summary:
      "Financing to acquire or carry land, with entitlement and predevelopment milestones identified before closing so hold costs are not a surprise.",
    heroTitle: "Acquire the site before the opportunity closes",
    heroIntro:
      "Land rarely waits for your capital to be ready. We finance site acquisition and, where appropriate, carrying costs during entitlement and predevelopment — with the exit and hold period discussed up front.",
    image: { src: "/images/land.jpg", alt: "Site plans laid out on a grassy development parcel" },
    bestFor: "Developers and land holders acquiring a site or extending control while approvals are completed.",
    keyDetails: [
      { label: "Use of proceeds", value: "Acquisition, closing costs, and — where structured — entitlement or predevelopment carry." },
      { label: "Site types", value: "Infill parcels, assembled sites, and small commercial or residential development land." },
      { label: "Entitlement stage", value: "Raw, zoned, or approved sites reviewed against the realistic development path." },
      { label: "Exit planning", value: "Sale, construction take-out, or refinance identified in underwriting, not deferred." },
      { label: "Extensions", value: "Available in some structures; terms and conditions set per transaction." },
      { label: "Coverage", value: "Select U.S. metropolitan markets. Confirm coverage before assembling a package." },
    ],
    forWhom: [
      {
        title: "You are buying a specific parcel",
        body: "There is a contract or a credible path to one, and you have a view on value after the site is developed — not just a price per acre.",
      },
      {
        title: "The entitlement path is the work",
        body: "You need capital while approvals, utilities, or lot configuration are resolved, and you can explain the milestones.",
      },
      {
        title: "You want the exit defined early",
        body: "Construction take-out, sale, or refinance is discussed at intake. Land debt without a considered exit is how good projects get stuck.",
      },
    ],
    supports: [
      { title: "Acquisition and assembly", body: "Purchasing one parcel or assembling adjacent sites with a documented combination plan." },
      { title: "Entitlement carry", body: "Holding costs during zoning, site plan, or utility approvals, where the structure supports it." },
      { title: "Predevelopment work", body: "Selected soft costs such as survey, engineering, and architectural work tied to the development path." },
      { title: "Construction take-out", body: "A defined transition into vertical financing once the site is ready, subject to new underwriting." },
      { title: "Refinance of owned land", body: "Recovering capital from a controlled site to redeploy into a build, subject to value and terms." },
      { title: "Small commercial sites", body: "Parcels with a specific use plan, tenant interest, or documented demand." },
    ],
    whyTitle: "Why finance land instead of paying cash?",
    whyBody:
      "Land is often the largest and least liquid component of a development. Debt against it can preserve cash for hard costs, where returns are usually generated. The trade-off is carry cost and tighter structure, which is why the exit and hold period belong in the first conversation.",
    why: [
      {
        title: "Basis discipline",
        body: "We review your price against realistic post-entitlement value rather than an aspirational number. That protects both sides if approvals take longer than expected.",
      },
      {
        title: "Milestones instead of vague extensions",
        body: "Entitlement and predevelopment schedules are listed with the responsible party so an extension discussion is grounded in facts.",
      },
      {
        title: "A planned hand-off",
        body: "Where construction financing follows, we plan the transition early — but it is a separate underwriting decision and is not guaranteed by approving the land loan.",
      },
    ],
    process: [
      { title: "Intake", body: "Site address, contract status, intended use, and hold period." },
      { title: "Coverage and basis call", body: "Market, basis, entitlement stage, and exit reviewed together." },
      { title: "Indicative structure", body: "Written summary of sizing approach, reserve treatment, and required diligence." },
      { title: "Site and entitlement review", body: "Zoning, survey, environmental considerations, and approval timeline." },
      { title: "Approval and closing", body: "Documented terms, title, entity, and insurance coordinated to closing." },
      { title: "Hold and milestone tracking", body: "Approval progress and extension needs reviewed against the documented plan." },
    ],
    qualifications: [
      {
        title: "Site documentation",
        items: ["Purchase and sale agreement or vesting deed", "Survey and title commitment", "Zoning designation and known constraints", "Environmental screening where required"],
      },
      {
        title: "Plan documentation",
        items: ["Intended development program", "Entitlement or approval timeline with milestones", "Professional team identified", "Exit assumptions with support"],
      },
      {
        title: "Sponsor information",
        items: ["Entity documents and ownership chart", "Track record of comparable projects", "Financial statement for guarantors", "Sources and uses including carry"],
      },
    ],
    scenarioSlugs: ["land-banking-entitlement", "infill-townhome-assembly"],
    faqs: [
      {
        q: "Can you finance raw land with no approvals?",
        a: "It depends on the market, basis, and exit. Unentitled land carries more risk, so structure and documentation requirements are stricter. The first step is a coverage and basis call, not a full package.",
      },
      {
        q: "Do you fund entitlement costs?",
        a: "In some structures, selected predevelopment or carry costs can be included. What is eligible, and how it is controlled, is set per transaction and documented before closing.",
      },
      {
        q: "Will approving a land loan guarantee construction financing?",
        a: "No. Construction financing is a separate decision underwritten against final plans, budget, and market conditions at that time. We plan the hand-off early, but we do not promise an automatic take-out.",
      },
      {
        q: "How is land value determined?",
        a: "Appraisal and internal review consider the approved or achievable use, comparable site trades, site work required, and the realistic timeframe to reach the next stage.",
      },
      {
        q: "Can an individual or a single-purpose entity borrow?",
        a: "Borrowing entities are structured per transaction. Expect to disclose ownership and provide guarantor information; we confirm entity requirements during underwriting.",
      },
    ],
    related: ["ground-up-construction", "multifamily-development", "bridge-financing"],
    ctaTitle: "Under contract or negotiating a site?",
    ctaBody:
      "Send the address and your intended use. We will tell you how we would look at basis, entitlement risk, and exit — and whether the timeline is realistic.",
    seo: {
      title: "Land & Acquisition Financing",
      description:
        "Land acquisition and entitlement-stage financing for developers. Basis review, milestone tracking, and a defined exit, with terms set per transaction.",
    },
  },
  {
    slug: "bridge-financing",
    name: "Bridge Financing",
    navLabel: "Bridge Financing",
    category: "Transitional capital",
    tagline: "Time to stabilize, lease up, or reposition without a rushed sale.",
    summary:
      "Short-term capital for assets in transition: lease-up, stabilization, recapitalization, or a gap between purchase and a longer-term exit.",
    heroTitle: "Bridge the gap between today's asset and tomorrow's exit",
    heroIntro:
      "Bridge debt buys time to execute a plan — lease up a building, complete a repositioning, or recapitalize before a permanent refinance. The plan and the timeline are underwritten together.",
    image: { src: "/images/bridge.jpg", alt: "Illuminated high-rise residential buildings at dusk" },
    bestFor: "Owners and sponsors with a defined business plan and a realistic path to refinance or sale.",
    keyDetails: [
      { label: "Use of proceeds", value: "Acquisition, refinance, recapitalization, and selected capital improvements." },
      { label: "Asset types", value: "Residential, small multifamily, mixed-use, and select light commercial assets." },
      { label: "Business plan", value: "Lease-up, stabilization, repositioning, or recapitalization with measurable milestones." },
      { label: "Exit", value: "Refinance, sale, or another defined liquidity event, documented at underwriting." },
      { label: "Extensions", value: "Available in some structures and subject to milestones and conditions set per transaction." },
      { label: "Coverage", value: "Select U.S. metropolitan markets. Confirm coverage on the fit call." },
    ],
    forWhom: [
      {
        title: "The asset is in transition",
        body: "Occupancy, rents, or the physical condition of the property are moving toward a new level, and permanent debt is not yet available on workable terms.",
      },
      {
        title: "You have a measurable plan",
        body: "You can name the milestones that define success — leased square footage, completed units, a signed lease, or a completed scope of work.",
      },
      {
        title: "The exit is credible",
        body: "A refinance or sale path exists with realistic assumptions, not a hope that rates or values move in your favour.",
      },
    ],
    supports: [
      { title: "Lease-up", body: "Time to reach stable occupancy with a documented leasing plan and performance tracking." },
      { title: "Stabilization", body: "Completing remaining work or resolving deferred items before a permanent refinance." },
      { title: "Recapitalization", body: "Resetting a capital structure when a partner, maturity, or timeline changes." },
      { title: "Acquisition bridge", body: "Closing a purchase quickly where permanent financing or a partner process is still running." },
      { title: "Maturity refinance", body: "A disciplined option when an existing loan matures and the asset needs more time." },
      { title: "Value-add transition", body: "Selected improvements with a defined scope, not open-ended renovation programs." },
    ],
    whyTitle: "When is bridge debt the right instrument?",
    whyBody:
      "Bridge capital is designed for time-bound transitions, not for holding a stabilized asset indefinitely. It is the right tool when an identifiable action creates the conditions for permanent debt or a sale. It is the wrong tool when the plan depends on a market recovery with no clear timeline.",
    why: [
      {
        title: "Milestones, not vague hope",
        body: "The business plan is broken into checkpoints so both sides can see whether execution is on track and whether an extension is justified.",
      },
      {
        title: "Exit alignment",
        body: "We review the refinance or sale you are planning, including what would break it. If the exit is fragile, we say so before closing.",
      },
      {
        title: "Clear boundary with construction",
        body: "If the property needs ground-up construction, construction financing is the better product. If it needs a defined scope of work, a repositioning structure may fit better than a generic bridge.",
      },
    ],
    process: [
      { title: "Intake", body: "Asset, current position, business plan, and target exit." },
      { title: "Fit call", body: "Coverage, value, existing debt, and timeline reviewed against the plan." },
      { title: "Indicative structure", body: "Written summary of the sizing approach, milestone reporting, and open items." },
      { title: "Underwriting and diligence", body: "Rent roll, leases, operating statements, scope of work, and appraisal coordination." },
      { title: "Approval and closing", body: "Documented terms, title, insurance, and any existing lender payoff coordinated." },
      { title: "Monitoring and exit", body: "Regular performance review against milestones and early planning for refinance or sale." },
    ],
    qualifications: [
      {
        title: "Asset documentation",
        items: ["Rent roll and current occupancy", "Trailing operating statements", "Leases or LOIs supporting the plan", "Scope of work and budget for improvements"],
      },
      {
        title: "Capital structure",
        items: ["Existing loan statements and payoff details", "Entity documents and ownership chart", "Sources and uses for any recapitalization", "Evidence of the intended exit"],
      },
      {
        title: "Sponsor information",
        items: ["Comparable project history", "Financial statement for guarantors", "Reserve position for the transition period", "Property insurance and title information"],
      },
    ],
    scenarioSlugs: ["adaptive-reuse-warehouse", "lease-up-bridge"],
    faqs: [
      {
        q: "How is bridge financing different from a construction loan?",
        a: "Bridge debt is generally secured by an existing income-producing or substantially complete asset and finances a transition such as lease-up or recapitalization. Construction debt finances the physical build and releases funds against inspected progress.",
      },
      {
        q: "Do you require a signed lease before closing?",
        a: "Requirements depend on the asset and the plan. A documented leasing strategy and market support are always reviewed; specific pre-leasing conditions are set per transaction.",
      },
      {
        q: "What happens if the business plan runs late?",
        a: "Extensions may be available in some structures and are assessed against milestones, conditions, and market conditions at the time. No lender can responsibly guarantee an extension before a loan closes.",
      },
      {
        q: "Can bridge financing include renovation funds?",
        a: "Selected, clearly scoped improvements can be included where the structure supports it. If most of the value is created by a large build-out, a construction or repositioning structure may be more appropriate.",
      },
      {
        q: "How much will it cost?",
        a: "Pricing, fees, and any extension terms are set per transaction and depend on the asset, sponsor, leverage, and exit. We do not publish rate claims because they would not be meaningful without underwriting.",
      },
    ],
    related: ["renovation-capital", "multifamily-development", "ground-up-construction"],
    ctaTitle: "Tell us what the asset needs to become.",
    ctaBody:
      "Describe the property, where it stands today, and what has to happen before a refinance or sale. We will tell you if a bridge structure is the right instrument.",
    seo: {
      title: "Bridge Financing for Real Estate Transitions",
      description:
        "Bridge financing for lease-up, stabilization, and recapitalization: milestone-based plans, exit alignment, and terms set per transaction.",
    },
  },
  {
    slug: "multifamily-development",
    name: "Multifamily & Mixed-Use Development Capital",
    navLabel: "Multifamily & Mixed-Use",
    category: "Development capital",
    tagline: "A single capital plan from site control through stabilization.",
    summary:
      "Structures for apartment and mixed-use developments that need land, vertical construction, and a thoughtful path to stabilization or sale.",
    heroTitle: "One capital plan for the whole development sequence",
    heroIntro:
      "Multifamily and mixed-use projects rarely fail at one point — they fail between stages. We structure land, construction, and carry together, with the transition to stabilization or sale planned from the start.",
    image: { src: "/images/multifamily.jpg", alt: "Brick residential buildings with balconies and greenery" },
    bestFor: "Developers building apartment or mixed-use projects with a defined unit mix and exit strategy.",
    keyDetails: [
      { label: "Use of proceeds", value: "Land, hard and soft costs, contingency, and interest reserve, within one structure." },
      { label: "Asset types", value: "Small to mid-sized apartment buildings and mixed-use projects with a residential component." },
      { label: "Unit mix review", value: "Unit sizes, parking, amenity scope, and rent assumptions tested against the market." },
      { label: "Exit paths", value: "Stabilized refinance or sale underwritten from the beginning, not deferred." },
      { label: "Draws", value: "Released against inspected progress with change-order review throughout." },
      { label: "Coverage", value: "Select U.S. metropolitan markets. Coverage confirmed before a full package is assembled." },
    ],
    forWhom: [
      {
        title: "The project is bigger than a single home",
        body: "Multiple units, shared systems, and a rent roll that must be underwritten rather than assumed.",
      },
      {
        title: "Mixed-use needs a clear story",
        body: "Commercial space, parking, and residential units need to fit together financially, not just architecturally.",
      },
      {
        title: "You want one relationship across stages",
        body: "Site, vertical build, and stabilization are treated as one capital sequence with a documented hand-off.",
      },
    ],
    supports: [
      { title: "Small apartment buildings", body: "Units where the rent roll, unit mix, and parking plan drive value and must be underwritten together." },
      { title: "Mixed-use infill", body: "Ground-floor commercial with residential above, where lease-up and structural costs are reviewed honestly." },
      { title: "Townhome developments", body: "Attached for-sale or rental projects with phased delivery and a documented absorption view." },
      { title: "Adaptive reuse", body: "Existing structures converted to residential use, with scope risks identified before closing." },
      { title: "Phased projects", body: "Developments released in stages so earlier phases fund later work as units are verified." },
      { title: "Stabilization planning", body: "A documented path from completion to permanent debt or sale, supported by market evidence." },
    ],
    whyTitle: "What does a lender look for in a multifamily project?",
    whyBody:
      "Beyond the plan set, we look at unit mix, rent assumptions, parking, amenity scope, absorption, and the contractor's capacity. A project that works at 90% of projected rents is different from one that only works at 100%.",
    why: [
      {
        title: "Rent assumptions get tested",
        body: "Comparable rents, unit sizes, and concessions are reviewed against the market — not taken from the pro forma without question.",
      },
      {
        title: "Phasing handled deliberately",
        body: "Draw sequencing and unit delivery are coordinated so leasing can start as early as is practical without compromising inspections.",
      },
      {
        title: "Exit planned before opening",
        body: "The stabilization target for refinance or sale is documented at underwriting, with the risks that could move it named explicitly.",
      },
    ],
    process: [
      { title: "Intake", body: "Site, unit count, project type, and the plan for completion and stabilization." },
      { title: "Fit and market call", body: "Coverage, basis, unit mix, and exit reviewed against current market evidence." },
      { title: "Indicative structure", body: "Written outline of sizing approach, staging, and required diligence items." },
      { title: "Full underwriting", body: "Plans, budget, contractor, rent study, appraisal, and title reviewed in parallel where possible." },
      { title: "Approval and closing", body: "Terms documented and closing coordinated with your team and the contractor." },
      { title: "Construction and lease-up", body: "Draw inspections through delivery, then performance review toward stabilization." },
    ],
    qualifications: [
      {
        title: "Project documentation",
        items: ["Full plan set and specifications", "Line-item budget and development schedule", "Unit mix, rent schedule, and absorption assumptions", "Contractor agreement and licensing"],
      },
      {
        title: "Site and entitlement",
        items: ["Zoning and approved use", "Survey, title, and environmental review", "Parking and access plans", "Utility capacity confirmation"],
      },
      {
        title: "Sponsor information",
        items: ["Comparable multifamily project history", "Entity structure and ownership chart", "Financial statement and liquidity evidence", "Sources and uses including reserves"],
      },
    ],
    scenarioSlugs: ["adaptive-reuse-warehouse", "infill-townhome-assembly"],
    faqs: [
      {
        q: "What size multifamily project do you consider?",
        a: "Project size and appetite are confirmed per market and transaction rather than published as fixed thresholds. Share the unit count and location and we will tell you quickly whether it is in scope.",
      },
      {
        q: "Can you finance the land and the build as one loan?",
        a: "That is often the most efficient structure when the site is not yet owned. It requires the land basis, construction budget, and exit to be underwritten together, and the site must be ready for vertical construction.",
      },
      {
        q: "How do you assess rents and absorption?",
        a: "We look at comparable properties, unit sizes, concessions, parking, and the realistic lease-up pace for the submarket. Your pro forma is a starting point, not a conclusion.",
      },
      {
        q: "What if pre-leasing or pre-sales are required?",
        a: "Where a structure requires pre-leasing or pre-sales, the threshold is documented in the term sheet and verified before closing. Requirements vary by project and market.",
      },
      {
        q: "Is a mixed-use project with retail considered?",
        a: "Yes, where the commercial component is appropriately sized and supported. Retail and office space is underwritten separately from residential, including lease-up risk and tenant improvements.",
      },
    ],
    related: ["ground-up-construction", "land-acquisition", "bridge-financing"],
    ctaTitle: "Let's pressure-test the unit mix and the exit.",
    ctaBody:
      "Send the site, the unit count, and the stabilization plan. We will tell you what we would need to see before committing to a structure.",
    seo: {
      title: "Multifamily & Mixed-Use Development Financing",
      description:
        "Development capital for apartment and mixed-use projects: land and vertical costs, draw management, rent testing, and a planned stabilization exit.",
    },
  },
  {
    slug: "renovation-capital",
    name: "Renovation & Repositioning Capital",
    navLabel: "Renovation & Repositioning",
    category: "Value-add capital",
    tagline: "Fund the work that changes the asset's position.",
    summary:
      "Capital for scoped renovation and repositioning, with the work, the budget, and the post-renovation outcome reviewed before funds are committed.",
    heroTitle: "Finance the work that moves the asset forward",
    heroIntro:
      "Renovation capital only makes sense when the scope, the cost, and the resulting value are connected. We review all three, then fund against verified progress rather than a lump-sum estimate.",
    image: { src: "/images/renovation.jpg", alt: "Workers restoring a historic building facade" },
    bestFor: "Owners and operators improving or repositioning an existing property with a defined scope of work.",
    keyDetails: [
      { label: "Use of proceeds", value: "Acquisition of an underperforming asset, renovation costs, and selected soft costs." },
      { label: "Asset types", value: "Residential, small multifamily, mixed-use, and select commercial properties." },
      { label: "Scope discipline", value: "A written scope with unit-level or line-item costs and a contingency allowance." },
      { label: "Funding", value: "Released against completed and inspected work; change orders reviewed before funding." },
      { label: "Hold or resell", value: "Both explored; the exit is documented and affects structure and sizing." },
      { label: "Coverage", value: "Select U.S. metropolitan markets. Coverage confirmed before full underwriting." },
    ],
    forWhom: [
      {
        title: "The asset needs defined work",
        body: "Kitchens, roofs, building systems, unit turns, or a full repositioning — with a scope you can price and inspect.",
      },
      {
        title: "Value depends on execution",
        body: "The uplift comes from completing work on schedule and leasing or selling at the improved position.",
      },
      {
        title: "You want a funding partner who checks the work",
        body: "Draws against verified progress protect the budget and keep the schedule honest.",
      },
    ],
    supports: [
      { title: "Unit turns and interior upgrades", body: "Kitchens, bathrooms, flooring, and finishes with per-unit costing and staged draws." },
      { title: "Building systems", body: "Roofs, HVAC, plumbing, electrical, and envelope work where cost and timing are documented." },
      { title: "Common areas and amenity work", body: "Lobby, hallway, and amenity improvements where the return is supported by the business plan." },
      { title: "Small multifamily repositioning", body: "Bringing an older building to a stronger operating position with a phased scope." },
      { title: "Adaptive reuse", body: "Converting or reworking an existing structure, with structural and code risk reviewed early." },
      { title: "Acquisition plus improvement", body: "Purchasing an underperforming asset and financing the improvement plan alongside the purchase." },
    ],
    whyTitle: "What makes renovation financing different?",
    whyBody:
      "The property already exists and produces some income, but value depends on completing work and reaching a new operating level. That means the scope and the schedule matter as much as the property itself — and a poorly costed budget is the most common reason a renovation stalls.",
    why: [
      {
        title: "Scope priced before closing",
        body: "Line items, allowances, and contingency are reviewed together. If something is unknown, it is named as an unknown rather than absorbed silently.",
      },
      {
        title: "Draws tied to verified work",
        body: "Funds are released after work is inspected, which protects the budget and helps keep the contractor on schedule.",
      },
      {
        title: "Straight talk on exit",
        body: "If the improved value will not support the debt, we say so. A hold, refinance, and sale each carry different risk and are underwritten accordingly.",
      },
    ],
    process: [
      { title: "Intake", body: "Property, current condition, intended scope, and target outcome." },
      { title: "Fit call", body: "Coverage, basis, scope, and exit reviewed in one conversation." },
      { title: "Indicative structure", body: "Written outline of the sizing approach, reserves, and required documents." },
      { title: "Scope and budget review", body: "Line-item costs, contractor capacity, and inspection plan confirmed." },
      { title: "Approval and closing", body: "Terms documented and closing coordinated with title, insurance, and payoff items." },
      { title: "Renovation and draw support", body: "Progress inspections, change-order review, and reporting through completion." },
    ],
    qualifications: [
      {
        title: "Property documentation",
        items: ["Rent roll or current occupancy details", "Photos identifying existing condition", "Title commitment and survey", "Insurance and any open permits"],
      },
      {
        title: "Scope documentation",
        items: ["Written scope of work by unit or line item", "Contractor estimates and schedule", "Draw schedule and contingency plan", "Design or permit documents where applicable"],
      },
      {
        title: "Sponsor information",
        items: ["Comparable renovation experience", "Entity documents and ownership chart", "Personal financial statement for guarantors", "Sources and uses and reserve position"],
      },
    ],
    scenarioSlugs: ["adaptive-reuse-warehouse", "lease-up-bridge"],
    faqs: [
      {
        q: "Can I finance renovation work on a property I already own?",
        a: "Yes, where the available equity and the completed value support the structure. That is often structured as a refinance with a funded improvement component.",
      },
      {
        q: "Are funds released up front?",
        a: "No. Renovation funds are generally released in draws after work is completed and inspected, with the schedule agreed before closing.",
      },
      {
        q: "What if the scope changes mid-project?",
        a: "Change orders are reviewed before funding. Material changes can affect the budget, contingency, and timeline, so they are documented rather than absorbed informally.",
      },
      {
        q: "Do you finance owner-occupied homes?",
        a: "This program is described for investment property. Consumer or owner-occupied lending is regulated differently and is not offered here. If your request is consumer-purpose, we will say so.",
      },
      {
        q: "Can renovation and rental stabilization be combined?",
        a: "They often are. The renovation scope is funded in draws, and the asset transitions toward stabilization. The exit plan should account for both.",
      },
    ],
    related: ["bridge-financing", "land-acquisition", "multifamily-development"],
    ctaTitle: "A scope, a budget, and a target — that's enough to start.",
    ctaBody:
      "Tell us what the property needs and what it should be worth when the work is done. We will tell you what to document first.",
    seo: {
      title: "Renovation & Repositioning Capital",
      description:
        "Renovation and repositioning financing for investment property: scope and budget review, inspected draws, and a documented business plan.",
    },
  },
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
export const serviceName = (slug: string) => serviceBySlug(slug)?.name ?? slug;
