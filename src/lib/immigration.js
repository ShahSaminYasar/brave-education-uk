export const IMMIGRATION_BASE = "/services/immigration";
export const FEES_PATH = `${IMMIGRATION_BASE}/fees`;
export const SELF_SPONSORSHIP_PATH = `${IMMIGRATION_BASE}/self-sponsorship`;

export const IAA = {
  regulator: "Immigration Advice Authority (IAA)",
  referenceNumber: "F202641136",
  adviser: "Md. Abdur Rahman",
  level: "Level 1",
  regulatorUrl:
    "https://www.gov.uk/government/organisations/immigration-advice-authority",
  registerUrl: "https://www.gov.uk/find-an-immigration-adviser",
  complaintUrl:
    "https://www.gov.uk/find-an-immigration-adviser/complain-about-an-adviser",
};

export const GOV_LINKS = {
  checkVisa: "https://www.gov.uk/check-uk-visa",
  visaFees: "https://www.gov.uk/visa-fees",
  processingTimes: "https://www.gov.uk/visa-processing-times",
  sponsorLicence: "https://www.gov.uk/uk-visa-sponsorship-employers",
  skilledWorkerJob: "https://www.gov.uk/skilled-worker-visa/your-job",
};

export const FEES_UPDATED = "February 2026";
export const WITHDRAWAL_HOURLY_RATE = 100;

export const formatFee = (amount) =>
  `£${amount.toLocaleString("en-GB", { minimumFractionDigits: 0 })}`;

export const bookingHref = (event) =>
  event ? `/appointment?event=${event}` : "/appointment";

export const CONSULTATIONS = [
  {
    id: "15min",
    name: "Quick Consultation",
    duration: "15 minutes",
    label: "15-minute call",
    price: 30,
    summary:
      "A focused call for one specific question, so you know where you stand before committing to anything.",
    points: [
      "One clear question answered by a regulated adviser",
      "Sponsor licence and Certificate of Sponsorship (CoS) questions",
      "Skilled Worker visa questions",
      "Guidance on whether you need a full assessment",
    ],
    cta: "Book 15-minute call",
  },
  {
    id: "30min",
    name: "Initial Assessment",
    duration: "30 minutes",
    label: "30-minute initial assessment",
    price: 50,
    recommended: true,
    summary:
      "Our full initial assessment. We look at your situation, confirm the right route and explain exactly what happens next.",
    points: [
      "Eligibility check for the visa or status you want",
      "The right route for your circumstances",
      "A personalised document checklist",
      "The fixed fee for your application, upfront",
      "Online or at our Whitechapel office",
    ],
    cta: "Book initial assessment",
  },
];

export const SERVICES = {
  "skilled-worker": {
    name: "Skilled Worker Visa",
    fee: 500,
    forWho:
      "People with a job offer from a UK employer that holds a sponsor licence.",
    weHelp: [
      "Check your job, salary and Certificate of Sponsorship meet the route's requirements",
      "Prepare a document checklist and review everything you send us",
      "Complete and submit your application",
    ],
    youNeed: [
      "Your Certificate of Sponsorship (CoS) reference number",
      "A valid passport",
      "Proof of your English language ability",
      "Proof of funds, unless your employer certifies your maintenance",
      "A TB test certificate, if required for your country",
    ],
    officialLinks: [
      { label: "Official GOV.UK guide", href: "https://www.gov.uk/skilled-worker-visa" },
    ],
    note: {
      text: "Looking to sponsor yourself through your own UK company?",
      cta: "See our self-sponsorship service",
      href: SELF_SPONSORSHIP_PATH,
    },
  },
  "global-talent": {
    name: "Global Talent Visa",
    fee: 800,
    forWho:
      "Leaders and emerging leaders in academia and research, arts and culture, or digital technology.",
    weHelp: [
      "Confirm whether the endorsement or eligible-award route suits you",
      "Plan the evidence for your endorsement and visa stages",
      "Complete and submit your visa application",
    ],
    youNeed: [
      "An endorsement from an approved body, or an eligible award",
      "A valid passport",
      "Evidence supporting your talent or promise in your field",
    ],
    officialLinks: [
      { label: "Official GOV.UK guide", href: "https://www.gov.uk/global-talent" },
    ],
  },
  "temporary-work": {
    name: "Temporary Work Visas (formerly Tier 5)",
    fee: 500,
    forWho:
      "Short-term workers on the Youth Mobility Scheme, Creative Worker, Charity Worker, Religious Worker, Government Authorised Exchange, International Agreement and Seasonal Worker routes.",
    weHelp: [
      "Identify which temporary work route fits your plans",
      "Check your sponsorship or scheme eligibility",
      "Complete and submit your application",
    ],
    youNeed: [
      "A Certificate of Sponsorship, where your route requires one",
      "A valid passport",
      "Proof of funds",
    ],
    feeLabel: "One fixed fee, all categories",
    officialLinks: [
      { label: "All work & temporary visas", href: "https://www.gov.uk/browse/visas-immigration/work-visas" },
      { label: "Charity Worker visa", href: "https://www.gov.uk/temporary-worker-charity-worker-visa" },
      { label: "Creative Worker visa", href: "https://www.gov.uk/creative-worker-visa" },
      { label: "Government Authorised Exchange", href: "https://www.gov.uk/government-authorised-exchange" },
      { label: "International Agreement visa", href: "https://www.gov.uk/international-agreement-worker-visa" },
      { label: "Religious Worker visa", href: "https://www.gov.uk/religious-worker-visa" },
      { label: "Seasonal Worker visa", href: "https://www.gov.uk/seasonal-worker-visa" },
      { label: "Youth Mobility Scheme", href: "https://www.gov.uk/youth-mobility" },
    ],
  },
  student: {
    name: "Student Visa",
    fee: 300,
    forWho:
      "Students aged 16 or over with an unconditional offer from a licensed UK student sponsor.",
    weHelp: [
      "Check your Confirmation of Acceptance for Studies (CAS) details",
      "Make sure your funds meet the requirements",
      "Complete and submit your application",
    ],
    youNeed: [
      "Your CAS from your university or college",
      "A valid passport",
      "Proof of funds for tuition and living costs, held for 28 days",
      "An ATAS certificate or TB test, if required",
    ],
    officialLinks: [
      { label: "Official GOV.UK guide", href: "https://www.gov.uk/student-visa" },
    ],
    note: {
      text: "Still choosing a course or university? Our admissions team can help.",
      cta: "Explore courses",
      href: "/courses",
    },
  },
  "leave-to-enter": {
    name: "Family Visa: Joining Family in the UK",
    shortName: "Joining family in the UK",
    fee: 800,
    forWho:
      "Spouses, civil partners, fiancé(e)s, unmarried partners and family members applying from outside the UK.",
    weHelp: [
      "Assess your relationship, financial, English language and accommodation requirements",
      "Build a clear, well-organised evidence bundle",
      "Complete and submit your application",
    ],
    youNeed: [
      "Evidence of your relationship",
      "Evidence that you meet the financial requirement",
      "Proof of English language ability",
      "Details of your accommodation in the UK",
    ],
    feeLabel: "Leave to Enter",
    officialLinks: [
      { label: "Family visa overview", href: "https://www.gov.uk/uk-family-visa" },
      { label: "Partner / spouse route", href: "https://www.gov.uk/uk-family-visa/partner-spouse" },
    ],
  },
  "leave-to-remain": {
    name: "Family Visa: Extending or Switching in the UK",
    shortName: "Extending or switching in the UK",
    fee: 800,
    forWho:
      "Partners and family members already in the UK who need to extend their visa or switch into a family route.",
    weHelp: [
      "Check you can extend or switch from your current visa",
      "Review your evidence against the Immigration Rules",
      "Complete and submit your application",
    ],
    youNeed: [
      "Your current visa or eVisa details",
      "Up-to-date relationship and financial evidence",
      "Proof of English language ability",
    ],
    feeLabel: "Leave to Remain, excluding human rights applications",
    officialLinks: [
      { label: "Family visa overview", href: "https://www.gov.uk/uk-family-visa" },
      { label: "All visas & immigration", href: "https://www.gov.uk/browse/visas-immigration" },
    ],
  },
  "euss-family-permit": {
    name: "EU Settlement Scheme Family Permit",
    fee: 700,
    forWho:
      "Non-EU family members of EU, EEA or Swiss citizens living in the UK under the EU Settlement Scheme.",
    weHelp: [
      "Confirm your eligibility as a family member",
      "Gather evidence of your relationship and your family member's status",
      "Complete and submit your application",
    ],
    youNeed: [
      "A valid passport",
      "Evidence of your relationship",
      "Your family member's EU Settlement Scheme status",
    ],
    officialLinks: [
      { label: "Official GOV.UK guide", href: "https://www.gov.uk/family-permit" },
    ],
  },
  ilr: {
    name: "Indefinite Leave to Remain (ILR)",
    fee: 1000,
    forWho:
      "People who have completed the qualifying period on their visa route and want to settle in the UK permanently.",
    weHelp: [
      "Confirm when you qualify and check your continuous residence",
      "Review absences from the UK and route-specific requirements",
      "Complete and submit your application",
    ],
    youNeed: [
      "Your immigration history and current visa details",
      "A record of your absences from the UK",
      "A Life in the UK test pass",
      "Proof of English language ability",
    ],
    officialLinks: [
      { label: "Official GOV.UK guide", href: "https://www.gov.uk/indefinite-leave-to-remain" },
    ],
    note: {
      text: "Need to pass the Life in the UK test first?",
      cta: "Start revising",
      href: "/revision-notes",
    },
  },
  euss: {
    name: "EU Settlement Scheme",
    fee: 700,
    forWho:
      "EU, EEA and Swiss citizens and their family members applying for settled or pre-settled status.",
    weHelp: [
      "Confirm which status you're eligible for",
      "Check your residence evidence",
      "Complete and submit your application",
    ],
    youNeed: [
      "A valid passport or national identity card",
      "Evidence of your residence in the UK",
    ],
    officialLinks: [
      { label: "Official GOV.UK guide", href: "https://www.gov.uk/settled-status-eu-citizens-families" },
    ],
  },
  naturalisation: {
    name: "Naturalisation as a British Citizen",
    fee: 1000,
    forWho:
      "Adults with indefinite leave to remain or settled status who meet the residence and good character requirements.",
    weHelp: [
      "Check your residence period and absences",
      "Review good character requirements",
      "Complete and submit your application",
    ],
    youNeed: [
      "Proof of your ILR or settled status",
      "A record of your absences from the UK",
      "A Life in the UK test pass",
      "Proof of English language ability",
    ],
    officialLinks: [
      { label: "Standard route (ILR or settled status)", href: "https://www.gov.uk/apply-citizenship-indefinite-leave-to-remain" },
      { label: "Spouse / civil partner route", href: "https://www.gov.uk/apply-citizenship-spouse" },
    ],
    note: {
      text: "Improve your English or prepare for the Life in the UK test with our courses.",
      cta: "View courses",
      href: "/courses",
    },
  },
  "child-registration": {
    name: "Registering a Child as a British Citizen",
    fee: 500,
    forWho:
      "Children who may be entitled or eligible to register, for example a child born in the UK whose parent later settled.",
    weHelp: [
      "Identify the registration provision that applies",
      "Gather evidence about the child and parents",
      "Complete and submit the application",
    ],
    youNeed: [
      "The child's full birth certificate",
      "Evidence of the parents' immigration or citizenship status",
    ],
    officialLinks: [
      { label: "Application guidance (Form MN1)", href: "https://www.gov.uk/government/publications/register-child-under-18-as-british-citizen-form-mn1" },
      { label: "Registering a child (parents with ILR)", href: "https://www.gov.uk/apply-citizenship-indefinite-leave-to-remain/apply-for-your-children" },
      { label: "Born in the UK routes", href: "https://www.gov.uk/apply-citizenship-born-uk" },
    ],
  },
  "uk-visitor": {
    name: "UK Standard Visitor Visa",
    fee: 500,
    forWho:
      "Visitors coming for tourism, to see family and friends, for business meetings or for a short course.",
    weHelp: [
      "Check whether you need a visa for your nationality",
      "Prepare evidence of your ties at home and travel plans",
      "Complete and submit your application",
    ],
    youNeed: [
      "A valid passport",
      "Evidence of your finances and travel plans",
      "Evidence of your ties to your home country",
    ],
    feeLabel: "Same fixed fee for 6-month, 2-year, 5-year and 10-year visas",
    officialLinks: [
      { label: "Standard Visitor overview", href: "https://www.gov.uk/standard-visitor" },
      { label: "How to apply", href: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
    ],
  },
  schengen: {
    name: "Schengen Visa",
    fee: 200,
    forWho:
      "UK residents travelling to Schengen countries for up to 90 days in any 180-day period.",
    weHelp: [
      "Identify which country's consulate you should apply to",
      "Prepare a complete document checklist",
      "Complete your application form and appointment booking",
    ],
    youNeed: [
      "A valid passport",
      "Proof of your UK residence status",
      "Travel insurance, itinerary and proof of funds",
    ],
    officialLinks: [
      { label: "European Commission Schengen visa portal", href: "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en" },
      { label: "GOV.UK travel to the EU/Schengen area", href: "https://www.gov.uk/travel-to-eu-schengen-area" },
    ],
  },
  "canada-visitor": {
    name: "Canadian Visa (Visitor Visa / eTA)",
    fee: 450,
    forWho:
      "UK residents travelling to Canada who need a visitor visa or an Electronic Travel Authorization (eTA), depending on nationality.",
    weHelp: [
      "Check whether you need a visitor visa or an eTA for your nationality",
      "Prepare a complete document checklist",
      "Complete your application and guide you through submission",
    ],
    youNeed: [
      "A valid passport",
      "Evidence of your finances and travel plans",
      "Evidence of your ties to the UK or your home country",
    ],
    officialLinks: [
      {
        label: "Check if you need a visa or eTA for Canada",
        href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/check-visa-eta.html",
      },
    ],
  },
};

export const CATEGORIES = [
  {
    slug: "work-and-study",
    title: "Work & Study Visas",
    shortTitle: "Work & Study",
    tagline: "Skilled Worker, Global Talent, Temporary Work and Student visas.",
    intro:
      "Coming to the UK to work or study? We check your eligibility, prepare your documents and submit your application, all for one fixed fee.",
    metaTitle: "Work & Study Visa Help: Skilled Worker, Student, Global Talent",
    metaDescription:
      "Fixed-fee help with Skilled Worker, Global Talent, Temporary Work (Tier 5) and Student visas from an IAA-regulated adviser in London.",
    services: ["skilled-worker", "global-talent", "temporary-work", "student"],
  },
  {
    slug: "family",
    title: "Family Visas",
    shortTitle: "Family",
    tagline: "Spouse, partner, fiancé(e) and family member visas.",
    intro:
      "Bringing your family together is personal. We help you meet the Home Office requirements with a complete, well-organised application.",
    metaTitle: "Spouse, Partner & Family Visa Help",
    metaDescription:
      "Fixed-fee help with spouse, partner, fiancé(e) and family visas, extensions and EU Settlement Scheme family permits from an IAA-regulated adviser.",
    services: ["leave-to-enter", "leave-to-remain", "euss-family-permit"],
  },
  {
    slug: "settlement-and-citizenship",
    title: "Settlement & Citizenship",
    shortTitle: "Settlement & Citizenship",
    tagline: "ILR, EU Settlement Scheme and British citizenship.",
    intro:
      "Ready to make the UK your permanent home? We guide you from indefinite leave to remain through to British citizenship.",
    metaTitle: "ILR, EU Settlement Scheme & British Citizenship Help",
    metaDescription:
      "Fixed-fee help with Indefinite Leave to Remain, the EU Settlement Scheme, naturalisation and child registration as a British citizen.",
    services: ["ilr", "euss", "naturalisation", "child-registration"],
  },
  {
    slug: "visit-and-travel",
    title: "Visit & Travel Visas",
    shortTitle: "Visit & Travel",
    tagline: "UK visitor visas, Canadian visas and Schengen visas.",
    intro:
      "Visiting the UK, travelling to Canada, or heading to Europe from the UK? We make sure your application is complete and clearly presented.",
    metaTitle: "UK Visitor, Canadian & Schengen Visa Help",
    metaDescription:
      "Fixed-fee help with UK Standard Visitor visas (6 months to 10 years), Canadian visitor visas/eTAs and Schengen visa applications from London.",
    services: ["uk-visitor", "canada-visitor", "schengen"],
  },
];

export const getCategory = (slug) => CATEGORIES.find((c) => c.slug === slug);

export const getServiceCategory = (serviceId) =>
  CATEGORIES.find((c) => c.services.includes(serviceId));

export const categoryHref = (slug) => `${IMMIGRATION_BASE}/${slug}`;

export const serviceHref = (serviceId) =>
  `${categoryHref(getServiceCategory(serviceId).slug)}#${serviceId}`;

export const FEE_GROUPS = [
  {
    title: "Work & Study (Points-Based System)",
    rows: [
      { id: "global-talent" },
      { id: "skilled-worker" },
      { id: "temporary-work", label: "Temporary Work, formerly Tier 5 (all categories)" },
      { id: "student" },
    ],
  },
  {
    title: "Visitor Visas",
    rows: [
      { id: "uk-visitor", label: "Visitor visa (6 months)" },
      { id: "uk-visitor", label: "Visitor visa (2 years)" },
      { id: "uk-visitor", label: "Visitor visa (5 years)" },
      { id: "uk-visitor", label: "Visitor visa (10 years)" },
    ],
  },
  {
    title: "Family Applications",
    rows: [
      {
        id: "leave-to-enter",
        label: "Leave to Enter (spouse, fiancé(e), unmarried partner, family member)",
      },
      { id: "leave-to-remain", label: "Leave to Remain (excluding human rights)" },
      { id: "ilr" },
    ],
  },
  {
    title: "Nationality & Citizenship",
    rows: [
      { id: "child-registration" },
      { id: "naturalisation" },
    ],
  },
  {
    title: "EU & EEA Applications",
    rows: [
      { id: "euss" },
      { id: "euss-family-permit", label: "Family Permit (non-EU/EEA family member)" },
    ],
  },
  {
    title: "Schengen Visas",
    rows: [{ id: "schengen", label: "Schengen visa application" }],
  },
  {
    title: "Canadian Visas",
    rows: [{ id: "canada-visitor", label: "Canadian visitor visa / eTA" }],
  },
];

export const PROCESS_STEPS = [
  {
    title: "Book a consultation",
    text: "Choose a 15-minute call or a 30-minute initial assessment, online or at our Whitechapel office.",
  },
  {
    title: "Get a clear plan",
    text: "We confirm the right route, give you a document checklist and tell you the fixed fee upfront.",
  },
  {
    title: "We prepare your application",
    text: "We review your documents, complete the forms and check everything before it's submitted.",
  },
  {
    title: "Submit and stay updated",
    text: "We submit your application and keep you informed until you receive a decision.",
  },
];

export const INCLUDED = [
  "Advice on your route and eligibility",
  "A personalised document checklist",
  "Review of the documents you provide",
  "Completing and submitting your application",
  "Updates until a decision is made",
];

export const PAID_SEPARATELY = [
  "Home Office application fees",
  "The Immigration Health Surcharge (IHS)",
  "Biometric and visa application centre appointment fees",
  "Optional priority or super priority service fees",
  "Third-party costs such as translations, English tests and TB tests",
];

export const PAYMENT_TERMS = [
  "Fixed fees only. The fee we quote is the fee you pay for our work.",
  "Fees can be paid in stages as your case moves forward. We confirm your payment schedule in writing before any work starts.",
  "We are not VAT registered, so no VAT is added to our fees.",
  "Pay by bank transfer or card. We never ask for your bank details, and we don't accept cash.",
  `If you withdraw part-way through your case, we charge only for work already done, at £${WITHDRAWAL_HOURLY_RATE} per hour.`,
];

export const HUB_FAQS = [
  {
    q: "Are you regulated?",
    a: `Yes. Brave Education UK Ltd is regulated by the ${IAA.regulator}, reference number ${IAA.referenceNumber}. Our adviser, ${IAA.adviser}, is authorised at ${IAA.level}.`,
  },
  {
    q: "What does IAA Level 1 mean?",
    a: "The IAA authorises advisers at three levels. Level 1 covers advice and straightforward applications made under the Immigration Rules. If your case needs a higher level, we'll tell you at your consultation and point you to an adviser who can help.",
  },
  {
    q: "Do your fees include Home Office fees?",
    a: "No. Home Office application fees, the Immigration Health Surcharge and appointment fees are paid directly to the Home Office or its partners. Our fixed fee covers our work on your application.",
  },
  {
    q: "Can you guarantee my visa will be approved?",
    a: "No one can guarantee an outcome, because the Home Office makes every decision. What we do is make sure your application is complete, carefully checked and clearly presented.",
  },
  {
    q: "Can we meet in person?",
    a: "Yes. Consultations can take place online or at our office at 129 Whitechapel Road, London E1 1DT.",
  },
  {
    q: "How long will my application take?",
    a: "Processing times are set by the Home Office and depend on the visa and where you apply from. We'll explain the current timescales for your route at your consultation.",
  },
];

export const FEE_FAQS = [
  {
    q: "Why do you charge for a consultation?",
    a: "It's dedicated time with a regulated adviser who looks at your circumstances properly. You leave knowing whether you can apply, what you need and exactly what it will cost.",
  },
  {
    q: "Which consultation should I book?",
    a: "Book the 15-minute call if you have one specific question. Book the 30-minute initial assessment if you're planning an application and want a full eligibility check.",
  },
  {
    q: "Do I have to pay VAT?",
    a: "No. We are not VAT registered, so the fees shown are the full fees for our work.",
  },
  {
    q: "How can I pay?",
    a: "By bank transfer or card. We will never ask for your bank details, and we don't accept cash.",
  },
  {
    q: "What happens if I change my mind?",
    a: `You can withdraw at any time. We only charge for the work we've already done, at £${WITHDRAWAL_HOURLY_RATE} per hour.`,
  },
];

export const SELF_SPONSORSHIP = {
  metaTitle: "Self-Sponsorship: Sponsor Your Own Skilled Worker Visa",
  metaDescription:
    "How self-sponsorship works in the UK: set up or take over a genuine UK company, apply for a sponsor licence, and sponsor your own Skilled Worker visa.",
  intro:
    "If you own and run a genuine UK company, that company can apply for a Home Office sponsor licence and sponsor you for a Skilled Worker visa, the same way it would sponsor any other employee. This is sometimes called self-sponsorship.",
  steps: [
    {
      title: "Set up or take over a genuine UK company",
      text: "Your company must genuinely trade in the UK. It has to be a real, operating business, not one set up only to support a visa application.",
    },
    {
      title: "Check the job is eligible and appoint Key Personnel",
      text: "The role must meet the Skilled Worker route's skill and salary requirements, and you'll need to decide who manages your sponsor licence (your Key Personnel).",
    },
    {
      title: "Apply for a sponsor licence",
      text: "Standard processing takes around 8 weeks. UK Visas and Immigration may visit your business to check it's suitable before granting the licence.",
    },
    {
      title: "Assign a Certificate of Sponsorship and apply",
      text: "Once licensed, your company issues you a Certificate of Sponsorship, and you apply for your Skilled Worker visa.",
    },
  ],
  companyNeeds: [
    "A genuine organisation operating or trading lawfully in the UK",
    "Registration with any regulator your sector requires",
    "Key Personnel in place to manage the sponsor licence",
    "HR and record-keeping systems that can evidence your sponsor duties",
    "The ability to carry out right-to-work checks",
  ],
  genuineVacancy: {
    title: "The genuine vacancy rule",
    text: "Under the Immigration Rules, your application will be refused if there are reasonable grounds to believe the role does not exist, is a sham, or was created mainly so you could get a visa. This applies to every Skilled Worker sponsorship, including where the sponsor and the sponsored worker are connected. We'll help you understand whether your circumstances meet this requirement before you commit to setting up a company.",
  },
  faqs: [
    {
      q: "Can my own company really sponsor my visa?",
      a: "Yes. The Immigration Rules don't prevent a company from sponsoring someone who owns or directs it. The company still has to meet the same sponsor licence requirements, and the role still has to be a genuine vacancy.",
    },
    {
      q: "What does a sponsor licence cost?",
      a: "The Home Office charges a fee that depends on your company's size, plus a Certificate of Sponsorship fee and the Immigration Skills Charge when you assign a CoS. Figures change, so we'll confirm the current fees for your circumstances at your consultation.",
    },
    {
      q: "Can UKVI visit my business?",
      a: "Yes. UK Visas and Immigration may carry out a compliance visit before or after granting a licence, to check your business is genuine and your HR systems can support your sponsor duties.",
    },
    {
      q: "Is this the same as the Innovator Founder visa?",
      a: "No. Self-sponsorship uses the standard Skilled Worker route through a company you own. It's a different route from the Innovator Founder visa, which has its own separate eligibility criteria. We'll help you work out which route fits your plans.",
    },
  ],
};
