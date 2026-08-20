import { SERVICE_PAGES } from "./servicePages";
const CATEGORIES = [
  "Security & Compliance",
  "Security",
  "GRC",
  "Leadership"
];
const vulnerabilityManagement = {
  slug: "vulnerability-management",
  tag: "Vulnerability Management",
  tagIcon: "bug",
  title: "Vulnerability Management Services",
  tagline: "Find, prioritise and close vulnerabilities on a repeatable cycle  with the scanning cadence, SLAs and evidence your auditors and customers expect.",
  duration: "4 weeks",
  price: "$1,500",
  timelineTitle: "Your Path to a Working Program",
  timelineSub: "From first scan to a cadence your team can sustain.",
  steps: [
    { icon: "search", title: "Asset Discovery", text: "Inventory the systems, endpoints and cloud assets in scope." },
    { icon: "bug", title: "Scanning Setup", text: "Deploy and tune scanning across infrastructure, apps and containers." },
    { icon: "target", title: "Risk-Based Triage", text: "Prioritise findings by exploitability and business impact, not raw CVSS." },
    { icon: "zap", title: "Remediation", text: "Assign owners, set SLAs and drive fixes to closed." },
    { icon: "trending", title: "Continuous Cycle", text: "Recurring scans, metrics and reporting that keep the program alive." }
  ],
  educationTitle: "What is Vulnerability Management?",
  educationParagraphs: [
    "Vulnerability management is the ongoing process of discovering weaknesses across your systems, ranking them by real risk, fixing them within agreed timelines, and proving the cycle runs.",
    "It is not the same as running a scanner. The value is in triage, ownership and evidence that issues actually get closed."
  ],
  whyTitle: "Why Do Companies Need Vulnerability Management?",
  why: [
    { icon: "shield", title: "Required by every framework", text: "SOC 2, ISO 27001, PCI DSS and HIPAA all expect a documented, operating program." },
    { icon: "target", title: "Focus on what matters", text: "Risk-based triage stops teams burning weeks on findings that carry no real exposure." },
    { icon: "clock", title: "Defensible SLAs", text: "Clear remediation timelines by severity make audit questions easy to answer." },
    { icon: "trending", title: "Measurable improvement", text: "Trend reporting shows exposure going down over time, not just tickets moving." }
  ],
  includedTitle: "What's Included in Our Vulnerability Management Program",
  includedSub: "Four workstreams, stood up over four weeks.",
  workstreams: [
    { num: "01", title: "Discovery & Scope", text: "Know what you own before you try to secure it.", items: ["Asset inventory", "Scope and ownership mapping"] },
    { num: "02", title: "Scanning", text: "Coverage across the layers attackers actually use.", items: ["Infrastructure & cloud scanning", "Application & container scanning", "Tool tuning to cut false positives"] },
    { num: "03", title: "Triage & Remediation", text: "Turn findings into owned, time-bound work.", items: ["Risk-based prioritisation", "Remediation SLAs", "Owner assignment & tracking"] },
    { num: "04", title: "Reporting", text: "Evidence for auditors and clarity for leadership.", items: ["Recurring scan cadence", "Executive metrics & trend reporting", "Audit evidence pack"] }
  ],
  turnaround: "4 weeks"
};
const securityAssessments = {
  slug: "security-assessments",
  tag: "Security Assessments",
  tagIcon: "search",
  title: "Security Assessment Services",
  tagline: "An independent, practical review of your security posture \u2014 architecture, controls, processes and people \u2014 with a prioritised roadmap you can actually execute.",
  duration: "3 weeks",
  price: "$2,000",
  timelineTitle: "Your Path to a Clear Roadmap",
  timelineSub: "Three weeks from kickoff to a prioritised plan.",
  steps: [
    { icon: "search", title: "Discovery", text: "Understand your stack, data flows and current controls." },
    { icon: "shield", title: "Control Review", text: "Assess technical and organisational controls against best practice." },
    { icon: "users", title: "Process & People", text: "Review access, onboarding, change and incident processes." },
    { icon: "file", title: "Findings Report", text: "A clear report written for both engineers and executives." },
    { icon: "target", title: "Roadmap", text: "Sequenced remediation plan with effort and impact." }
  ],
  educationTitle: "What is a Security Assessment?",
  educationParagraphs: [
    "A security assessment is a point-in-time review of how well your organisation is actually protected \u2014 across cloud and application architecture, access management, monitoring, and day-to-day operating practices.",
    "Unlike a pentest, it looks at the whole program rather than a single system, and ends with a plan rather than a finding list."
  ],
  whyTitle: "Why Do Companies Need Security Assessments?",
  why: [
    { icon: "search", title: "An honest baseline", text: "Know where you really stand before committing budget to a compliance push." },
    { icon: "target", title: "Prioritised action", text: "A sequenced roadmap avoids months of scattered, low-value security work." },
    { icon: "building", title: "Buyer and board confidence", text: "An independent review is credible in ways an internal opinion is not." },
    { icon: "clock", title: "Faster certification later", text: "Fixing structural gaps first makes SOC 2 or ISO 27001 dramatically smoother." }
  ],
  includedTitle: "What's Included in Our Security Assessment",
  includedSub: "Four workstreams, run over three weeks.",
  workstreams: [
    { num: "01", title: "Discovery", text: "Map the environment and how data moves through it.", items: ["Architecture review", "Data flow mapping", "Stakeholder interviews"] },
    { num: "02", title: "Technical Review", text: "Assess the controls that carry the most weight.", items: ["Cloud & network controls", "Identity and access review", "Logging & monitoring review"] },
    { num: "03", title: "Process Review", text: "Check that the operating routines hold up.", items: ["Access lifecycle review", "Change management review", "Incident handling review"] },
    { num: "04", title: "Reporting", text: "Deliverables both engineering and leadership can use.", items: ["Findings report", "Risk-ranked roadmap", "Executive readout"] }
  ],
  turnaround: "3 weeks"
};
const incidentReadiness = {
  slug: "incident-readiness",
  tag: "Incident Readiness",
  tagIcon: "alert",
  title: "Incident Readiness Services",
  tagline: "Be ready before it happens. Incident response plans, playbooks, escalation paths and tabletop exercises so your team knows exactly what to do under pressure.",
  duration: "4 weeks",
  price: "$2,000",
  timelineTitle: "Your Path to Response Readiness",
  timelineSub: "From plan to tested, rehearsed capability.",
  steps: [
    { icon: "search", title: "Readiness Review", text: "Assess current detection, escalation and response capability." },
    { icon: "file", title: "Response Plan", text: "Write the incident response plan and severity model." },
    { icon: "zap", title: "Playbooks", text: "Scenario playbooks for the incidents you're most likely to face." },
    { icon: "users", title: "Tabletop Exercise", text: "Run a live exercise with the actual response team." },
    { icon: "award", title: "Continuous Improvement", text: "Lessons learned, plan updates and an annual cadence." }
  ],
  educationTitle: "What is Incident Readiness?",
  educationParagraphs: [
    "Incident readiness is everything you put in place before a security incident: a documented response plan, clear roles, severity definitions, communication paths, and rehearsed playbooks.",
    "Frameworks require the plan. Real-world outcomes depend on whether the team has ever practised it."
  ],
  whyTitle: "Why Do Companies Need Incident Readiness?",
  why: [
    { icon: "clock", title: "Speed decides impact", text: "Most damage happens in the hours before anyone takes a clear decision." },
    { icon: "shield", title: "Required for compliance", text: "SOC 2, ISO 27001, HIPAA and GDPR all expect documented, tested response procedures." },
    { icon: "users", title: "Removes hesitation", text: "Defined roles and escalation paths mean nobody waits for permission." },
    { icon: "scale", title: "Meets notification duties", text: "Breach notification clocks are short \u2014 the process must already exist." }
  ],
  includedTitle: "What's Included in Our Incident Readiness Program",
  includedSub: "Four workstreams, run over four weeks.",
  workstreams: [
    { num: "01", title: "Readiness Review", text: "Establish what you can detect and who responds today.", items: ["Capability review", "Detection & alerting gaps"] },
    { num: "02", title: "Plan & Roles", text: "Document the plan and who owns each decision.", items: ["Incident response plan", "Severity model", "Roles & escalation matrix"] },
    { num: "03", title: "Playbooks", text: "Step-by-step guides for likely scenarios.", items: ["Ransomware, account compromise & data exposure playbooks", "Communication & notification templates"] },
    { num: "04", title: "Exercise", text: "Prove it works with the people who'd run it.", items: ["Tabletop exercise", "Lessons-learned report", "Annual retest cadence"] }
  ],
  turnaround: "4 weeks"
};
const vendorRisk = {
  slug: "vendor-risk",
  tag: "Vendor Risk",
  tagIcon: "building",
  title: "Vendor Risk Management Services",
  tagline: "Know which third parties can hurt you. A tiered vendor risk program covering intake, due diligence, contracts and ongoing monitoring \u2014 without slowing procurement to a halt.",
  duration: "4 weeks",
  price: "$1,800",
  timelineTitle: "Your Path to Third-Party Assurance",
  timelineSub: "From vendor inventory to a running review cycle.",
  steps: [
    { icon: "database", title: "Vendor Inventory", text: "Build the vendor list and map what data each one touches." },
    { icon: "scale", title: "Risk Tiering", text: "Classify vendors so effort matches actual exposure." },
    { icon: "search", title: "Due Diligence", text: "Review SOC 2 reports, questionnaires and security posture." },
    { icon: "file", title: "Contracts & DPAs", text: "Security terms, DPAs and breach notification clauses." },
    { icon: "trending", title: "Ongoing Monitoring", text: "Annual reviews and re-assessment triggers." }
  ],
  educationTitle: "What is Vendor Risk Management?",
  educationParagraphs: [
    "Vendor (or third-party) risk management is the process of assessing and monitoring the security of the suppliers, SaaS tools and subprocessors that handle your data or support critical operations.",
    "The goal is proportionate diligence: real scrutiny for vendors that matter, and a fast path for those that don't."
  ],
  whyTitle: "Why Do Companies Need Vendor Risk Management?",
  why: [
    { icon: "alert", title: "Their breach is your breach", text: "A large share of incidents now arrive through a third party, not your own perimeter." },
    { icon: "shield", title: "Required by frameworks", text: "SOC 2 and ISO 27001 both expect documented vendor assessment and review." },
    { icon: "zap", title: "Faster procurement", text: "Tiering and templates cut security review from weeks to days." },
    { icon: "building", title: "Enterprise expectation", text: "Enterprise customers ask how you vet your own subprocessors." }
  ],
  includedTitle: "What's Included in Our Vendor Risk Program",
  includedSub: "Four workstreams, stood up over four weeks.",
  workstreams: [
    { num: "01", title: "Inventory & Tiering", text: "Know your vendors and how much they matter.", items: ["Vendor inventory", "Data mapping per vendor", "Risk tiering model"] },
    { num: "02", title: "Due Diligence", text: "A consistent, defensible review process.", items: ["Assessment questionnaires", "SOC 2 / ISO report review", "Findings & exception handling"] },
    { num: "03", title: "Contracts", text: "Get the obligations written down properly.", items: ["Security terms & DPAs", "Breach notification clauses"] },
    { num: "04", title: "Monitoring", text: "Keep the picture current after onboarding.", items: ["Annual review cycle", "Re-assessment triggers", "Vendor register & evidence"] }
  ],
  turnaround: "4 weeks"
};
const securityQuestionnaires = {
  slug: "security-questionnaires",
  tag: "Security Questionnaires",
  tagIcon: "file",
  title: "Security Questionnaire Support",
  tagline: "Stop losing engineering weeks to buyer security reviews. We answer questionnaires, build a reusable answer library and keep your trust materials current.",
  duration: "2 weeks",
  price: "$1,200",
  timelineTitle: "Your Path to Faster Deals",
  timelineSub: "From backlog to a reusable answer library.",
  steps: [
    { icon: "search", title: "Review Backlog", text: "Assess open questionnaires and recurring buyer objections." },
    { icon: "file", title: "Answer Library", text: "Build approved, reusable answers mapped to your controls." },
    { icon: "folder", title: "Evidence Pack", text: "Assemble policies, reports and diagrams buyers ask for." },
    { icon: "zap", title: "Turnaround", text: "We complete incoming questionnaires on your behalf." },
    { icon: "trending", title: "Maintenance", text: "Keep answers accurate as controls and products change." }
  ],
  educationTitle: "What is Security Questionnaire Support?",
  educationParagraphs: [
    "Enterprise buyers send security questionnaires \u2014 CAIQ, SIG, VSA or their own spreadsheet \u2014 before they sign. Answering them well and quickly is a revenue function, not a paperwork chore.",
    "We handle the responses and build the library so the second, third and tenth questionnaire take hours instead of weeks."
  ],
  whyTitle: "Why Do Companies Need Questionnaire Support?",
  why: [
    { icon: "clock", title: "Deals stall without it", text: "Security review is often the longest step between verbal yes and signature." },
    { icon: "users", title: "Protects engineering time", text: "Senior engineers stop being pulled into spreadsheets every week." },
    { icon: "shield", title: "Consistent, accurate answers", text: "One approved source of truth avoids contradictions across deals." },
    { icon: "trending", title: "Scales with sales", text: "The library gets stronger with every completed review." }
  ],
  includedTitle: "What's Included in Our Questionnaire Support",
  includedSub: "Four workstreams, stood up over two weeks.",
  workstreams: [
    { num: "01", title: "Baseline", text: "Understand what buyers keep asking you.", items: ["Backlog review", "Common objection analysis"] },
    { num: "02", title: "Answer Library", text: "Approved answers tied to real controls.", items: ["Reusable answer bank", "Control mapping", "Review & approval workflow"] },
    { num: "03", title: "Trust Materials", text: "The evidence buyers request alongside the questionnaire.", items: ["Policy & report pack", "Architecture and data-flow diagrams"] },
    { num: "04", title: "Ongoing Support", text: "We stay on the hook as new reviews arrive.", items: ["Questionnaire completion (CAIQ, SIG, VSA, custom)", "Quarterly accuracy refresh"] }
  ],
  turnaround: "2 weeks"
};
const policyControlManagement = {
  slug: "policy-control-management",
  tag: "Policy & Control Management",
  tagIcon: "folder",
  title: "Policy & Control Management",
  tagline: "Policies people actually follow and controls that map cleanly to every framework you carry \u2014 written, approved, assigned and reviewed on a schedule.",
  duration: "4 weeks",
  price: "$1,800",
  timelineTitle: "Your Path to a Managed Control Set",
  timelineSub: "From scattered documents to one governed library.",
  steps: [
    { icon: "search", title: "Gap Review", text: "Review existing policies and identify what's missing or stale." },
    { icon: "file", title: "Policy Development", text: "Write policies tailored to how your team really works." },
    { icon: "shield", title: "Control Mapping", text: "Map controls once across SOC 2, ISO 27001, HIPAA and more." },
    { icon: "users", title: "Rollout", text: "Approval, attestation and employee acknowledgement." },
    { icon: "clock", title: "Review Cycle", text: "Owners, review dates and version control." }
  ],
  educationTitle: "What is Policy & Control Management?",
  educationParagraphs: [
    "Your policy set is the written description of how security works at your company; your control set is what actually operates. Managing both together is what keeps audits from turning into archaeology.",
    "Done properly, one control satisfies several frameworks at once \u2014 so adding ISO 27001 after SOC 2 is incremental, not a restart."
  ],
  whyTitle: "Why Do Companies Need This?",
  why: [
    { icon: "scale", title: "Auditors start here", text: "Documentation is the first thing requested and the first place gaps appear." },
    { icon: "zap", title: "Write once, reuse everywhere", text: "Cross-framework mapping avoids duplicating work per certification." },
    { icon: "users", title: "Clear ownership", text: "Every control has a named owner and a review date, not an implied one." },
    { icon: "lock", title: "Stops drift", text: "Scheduled reviews keep documents aligned with what the team actually does." }
  ],
  includedTitle: "What's Included in Our Policy & Control Program",
  includedSub: "Four workstreams, run over four weeks.",
  workstreams: [
    { num: "01", title: "Assessment", text: "Establish what exists and what's out of date.", items: ["Policy gap review", "Control inventory"] },
    { num: "02", title: "Development", text: "Write documentation that fits your organisation.", items: ["Policy suite development", "Standards & procedures", "Approval workflow"] },
    { num: "03", title: "Mapping", text: "One control set, many frameworks.", items: ["Cross-framework control mapping", "Evidence requirements per control"] },
    { num: "04", title: "Operation", text: "Keep the library governed after go-live.", items: ["Owner assignment", "Employee acknowledgement", "Annual review calendar & versioning"] }
  ],
  turnaround: "4 weeks"
};
const continuousCompliance = {
  slug: "continuous-compliance",
  tag: "Continuous Compliance",
  tagIcon: "trending",
  title: "Continuous Compliance Services",
  tagline: "Stay audit-ready all year. Automated monitoring, evidence collection and a managed compliance calendar so the next audit is a checkpoint, not a fire drill.",
  duration: "Ongoing",
  price: "$1,000 / month",
  timelineTitle: "Your Path to Always-On Readiness",
  timelineSub: "From annual scramble to a steady operating rhythm.",
  steps: [
    { icon: "cloud", title: "Platform Setup", text: "Configure Vanta, Drata, Secureframe or Scrut properly." },
    { icon: "database", title: "Integrations", text: "Connect cloud, HR and ticketing systems for live evidence." },
    { icon: "alert", title: "Monitoring", text: "Continuous control checks with alerting on drift." },
    { icon: "folder", title: "Evidence Collection", text: "Automated collection, with gaps chased by us." },
    { icon: "award", title: "Audit Cycle", text: "Managed calendar and yearly audit coordination." }
  ],
  educationTitle: "What is Continuous Compliance?",
  educationParagraphs: [
    "Continuous compliance means your controls are monitored and evidenced throughout the year instead of being reconstructed in the weeks before an audit.",
    "It combines a GRC platform with someone actually watching it \u2014 reviewing failing checks, chasing owners and keeping the evidence complete."
  ],
  whyTitle: "Why Do Companies Need Continuous Compliance?",
  why: [
    { icon: "clock", title: "No annual fire drill", text: "Evidence is already there when the auditor asks for it." },
    { icon: "alert", title: "Catch drift early", text: "Failing controls surface in days, not during fieldwork." },
    { icon: "shield", title: "Type 2 requires it", text: "SOC 2 Type 2 tests controls over a period \u2014 gaps in the window are costly." },
    { icon: "trending", title: "Cheaper over time", text: "Steady maintenance costs far less than repeated readiness projects." }
  ],
  includedTitle: "What's Included in Our Continuous Compliance Service",
  includedSub: "Four workstreams, delivered as an ongoing monthly engagement.",
  workstreams: [
    { num: "01", title: "Platform", text: "Get the tooling configured to reflect reality.", items: ["GRC platform setup (Vanta, Drata, Secureframe, Scrut)", "Framework & scope configuration"] },
    { num: "02", title: "Integrations", text: "Automate evidence at the source.", items: ["Cloud, HR and ticketing integrations", "Automated evidence collection"] },
    { num: "03", title: "Monitoring", text: "Someone watches the dashboard so you don't have to.", items: ["Control drift alerting", "Monthly remediation follow-up", "Access & onboarding reviews"] },
    { num: "04", title: "Audit Management", text: "Run the yearly cycle without disruption.", items: ["Compliance calendar", "Auditor coordination", "Evidence pack delivery"] }
  ],
  turnaround: "ongoing monthly"
};
const vciso = {
  slug: "vciso",
  tag: "vCISO",
  tagIcon: "users",
  title: "Virtual CISO (vCISO) Services",
  tagline: "Senior security leadership without a full-time hire. Strategy, board reporting, customer assurance and hands-on ownership of your security program.",
  duration: "Ongoing",
  price: "$2,500 / month",
  timelineTitle: "How a vCISO Engagement Runs",
  timelineSub: "Embedded leadership from day one, not a quarterly report.",
  steps: [
    { icon: "search", title: "Current State", text: "Assess posture, obligations and the risks that matter to the business." },
    { icon: "target", title: "Strategy & Roadmap", text: "A 12-month security roadmap tied to commercial goals." },
    { icon: "shield", title: "Execution", text: "Own delivery of controls, policies and compliance workstreams." },
    { icon: "building", title: "Customer Assurance", text: "Represent security in enterprise deals and diligence." },
    { icon: "trending", title: "Board Reporting", text: "Metrics and risk reporting leadership can act on." }
  ],
  educationTitle: "What is a vCISO?",
  educationParagraphs: [
    "A virtual CISO is an experienced security executive who works with you part-time \u2014 setting strategy, owning the program, and being the accountable security voice in front of customers, auditors and the board.",
    "It suits companies that need real leadership and credibility but aren't ready for a full-time executive hire."
  ],
  whyTitle: "Why Do Companies Hire a vCISO?",
  why: [
    { icon: "scale", title: "Executive credibility", text: "Enterprise buyers and boards want a named security leader to talk to." },
    { icon: "zap", title: "Faster than hiring", text: "Senior capability in weeks, at a fraction of a full-time package." },
    { icon: "target", title: "Strategy, not tickets", text: "Security spend is directed by risk and revenue, not by whatever broke last." },
    { icon: "shield", title: "One owner for compliance", text: "Frameworks, audits and customer assurance all sit with one accountable person." }
  ],
  includedTitle: "What's Included in Our vCISO Engagement",
  includedSub: "Four workstreams, delivered continuously.",
  workstreams: [
    { num: "01", title: "Strategy", text: "Set direction against real business risk.", items: ["Security strategy & 12-month roadmap", "Risk register ownership", "Budget & tooling guidance"] },
    { num: "02", title: "Program Delivery", text: "Make sure the roadmap actually ships.", items: ["Control & policy ownership", "Compliance program oversight", "Vendor and architecture review"] },
    { num: "03", title: "Customer Assurance", text: "Security as a sales enabler.", items: ["Enterprise deal support", "Questionnaire & diligence calls", "Trust narrative and materials"] },
    { num: "04", title: "Governance", text: "Keep leadership informed and decisions documented.", items: ["Board & exec reporting", "Security metrics", "Incident escalation ownership"] }
  ],
  turnaround: "ongoing monthly"
};
const securityProgramManagement = {
  slug: "security-program-management",
  tag: "Security Program Management",
  tagIcon: "clock",
  title: "Security Program Management",
  tagline: "The delivery layer behind your security strategy. We run the plan, the owners and the deadlines so initiatives finish instead of drifting.",
  duration: "Ongoing",
  price: "$1,800 / month",
  timelineTitle: "How We Run Your Program",
  timelineSub: "Structured delivery with weekly momentum.",
  steps: [
    { icon: "folder", title: "Program Design", text: "Define workstreams, owners and success criteria." },
    { icon: "clock", title: "Planning", text: "Sequenced roadmap with realistic dates and dependencies." },
    { icon: "users", title: "Weekly Delivery", text: "Standups, blockers cleared and follow-through with owners." },
    { icon: "trending", title: "Reporting", text: "Status, risk and metric reporting for leadership." },
    { icon: "award", title: "Audit Coordination", text: "Keep certifications and reviews on schedule." }
  ],
  educationTitle: "What is Security Program Management?",
  educationParagraphs: [
    "Most security programs don't fail on strategy \u2014 they fail on delivery. Work is spread across engineering, IT, HR and legal, and nobody owns the whole plan.",
    "Security program management provides that owner: someone tracking every workstream, chasing evidence, and reporting honestly on where things stand."
  ],
  whyTitle: "Why Do Companies Need It?",
  why: [
    { icon: "clock", title: "Initiatives finish", text: "Named owners and weekly cadence stop work stalling at 80%." },
    { icon: "users", title: "Cross-team coordination", text: "One person drives engineering, IT, HR and legal in the same direction." },
    { icon: "trending", title: "Visible progress", text: "Leadership sees status and risk without chasing updates." },
    { icon: "shield", title: "Certifications stay on track", text: "Audit dates, evidence windows and reviews are managed proactively." }
  ],
  includedTitle: "What's Included in Our Program Management Service",
  includedSub: "Four workstreams, delivered continuously.",
  workstreams: [
    { num: "01", title: "Program Design", text: "Structure the work so it can be delivered.", items: ["Workstream definition", "Owner assignment", "Success criteria"] },
    { num: "02", title: "Planning", text: "A roadmap with dates people believe in.", items: ["Sequenced roadmap", "Dependency & resource mapping"] },
    { num: "03", title: "Delivery", text: "The weekly engine of the program.", items: ["Weekly standups & tracking", "Blocker resolution", "Evidence follow-up"] },
    { num: "04", title: "Reporting", text: "Keep everyone aligned on reality.", items: ["Executive status reporting", "Risk & metric dashboards", "Audit and certification calendar"] }
  ],
  turnaround: "ongoing monthly"
};
const SERVICE_CATALOG = [
  {
    slug: "soc2",
    title: "SOC 2",
    category: "Security & Compliance",
    short: "Type 1 and Type 2 readiness and certification support \u2014 gap assessment, policies, controls, evidence and audit coordination.",
    seoTitle: "SOC 2 Type 1 & Type 2 Compliance Services | Mr. Compliance",
    seoDescription: "End-to-end SOC 2 readiness and certification support: gap assessment, policies, control implementation, evidence collection and audit coordination.",
    customComponent: "soc2",
    legacySlug: "soc2-audit-services"
  },
  {
    slug: "iso-27001",
    title: "ISO 27001",
    category: "Security & Compliance",
    short: "Build an audit-ready ISMS: risk assessment, Statement of Applicability, Annex A controls and Stage 1 / Stage 2 support.",
    seoTitle: "ISO 27001 Certification Services | Mr. Compliance",
    seoDescription: "Get ISO 27001 certified with a structured ISMS: risk assessment, SoA, control implementation and certification audit support.",
    legacySlug: "iso-27001-certification"
  },
  {
    slug: "pci-dss",
    title: "PCI DSS",
    category: "Security & Compliance",
    short: "Cardholder data flow mapping, control implementation, vulnerability management and QSA audit coordination.",
    seoTitle: "PCI DSS Compliance Services | Mr. Compliance",
    seoDescription: "Protect cardholder data and pass your QSA audit: scoping, segmentation review, controls, policies and audit preparation.",
    legacySlug: "pci-dss"
  },
  {
    slug: "hipaa",
    title: "HIPAA",
    category: "Security & Compliance",
    short: "Risk assessments, safeguards, workforce training and PHI protection for providers and health tech companies.",
    seoTitle: "HIPAA Compliance Services | Mr. Compliance",
    seoDescription: "Practical HIPAA compliance for healthcare and health tech: risk assessment, policies, administrative and technical safeguards.",
    legacySlug: "hipaa-compliance"
  },
  {
    slug: "nist-cmmc",
    title: "NIST / CMMC",
    category: "Security & Compliance",
    short: "NIST CSF alignment and CMMC / FedRAMP readiness: maturity evaluation, control implementation and audit preparation.",
    seoTitle: "NIST CSF & CMMC Compliance Services | Mr. Compliance",
    seoDescription: "Align to the NIST Cybersecurity Framework and prepare for CMMC: gap assessment, maturity evaluation, controls and policy development.",
    legacySlug: "nist-cybersecurity"
  },
  {
    slug: "gdpr-privacy",
    title: "GDPR / Privacy",
    category: "Security & Compliance",
    short: "Data mapping, RoPA, privacy policies, consent management, DPIAs and vendor data processing agreements.",
    seoTitle: "GDPR & Privacy Compliance Services | Mr. Compliance",
    seoDescription: "End-to-end GDPR support: data mapping, RoPA, privacy policies, consent management, DPIAs and privacy governance.",
    legacySlug: "gdpr-compliance"
  },
  {
    slug: "cloud-security",
    title: "Cloud Security",
    category: "Security",
    short: "AWS, GCP and Azure review across configuration, IAM, network security, logging and monitoring \u2014 with fixes.",
    seoTitle: "Cloud Security Assessment (AWS, GCP, Azure) | Mr. Compliance",
    seoDescription: "Find and fix cloud security gaps: configuration review, IAM, network security, logging and monitoring with actionable remediation.",
    legacySlug: "cloud-security"
  },
  {
    slug: "vulnerability-management",
    title: "Vulnerability Management",
    category: "Security",
    short: "Scanning, risk-based triage, remediation SLAs and reporting \u2014 a program that runs, not a one-off scan.",
    seoTitle: "Vulnerability Management Services | Mr. Compliance",
    seoDescription: "Build a working vulnerability management program: scanning coverage, risk-based triage, remediation SLAs and audit-ready reporting.",
    page: vulnerabilityManagement
  },
  {
    slug: "penetration-testing",
    title: "Penetration Testing",
    category: "Security",
    short: "Audit-accepted pentest reports for SOC 2, ISO 27001, HIPAA and PCI DSS, with remediation support and retesting.",
    seoTitle: "Compliance-Ready Penetration Testing | Mr. Compliance",
    seoDescription: "Compliance-ready penetration testing with audit-accepted reports for SOC 2, ISO 27001, HIPAA and PCI DSS, plus remediation and retesting.",
    legacySlug: "penetration-testing"
  },
  {
    slug: "security-assessments",
    title: "Security Assessments",
    category: "Security",
    short: "An independent review of architecture, controls and processes, ending in a prioritised remediation roadmap.",
    seoTitle: "Security Assessment Services | Mr. Compliance",
    seoDescription: "Independent security assessment of your architecture, controls and processes with a risk-ranked, executable remediation roadmap.",
    page: securityAssessments
  },
  {
    slug: "incident-readiness",
    title: "Incident Readiness",
    category: "Security",
    short: "Incident response plans, playbooks, escalation paths and tabletop exercises so your team is ready before it happens.",
    seoTitle: "Incident Response Readiness Services | Mr. Compliance",
    seoDescription: "Be ready before an incident: response plan, severity model, scenario playbooks, escalation paths and tabletop exercises.",
    page: incidentReadiness
  },
  {
    slug: "risk-management",
    title: "Risk Management",
    category: "GRC",
    short: "Asset identification, threat analysis, risk scoring and a maintained risk register with treatment plans.",
    seoTitle: "Risk Management & Risk Assessment Services | Mr. Compliance",
    seoDescription: "Structured risk management: asset identification, threat analysis, risk scoring, treatment planning and a living risk register.",
    legacySlug: "risk-assessment"
  },
  {
    slug: "vendor-risk",
    title: "Vendor Risk",
    category: "GRC",
    short: "Vendor inventory, risk tiering, due diligence, DPAs and an ongoing third-party review cycle.",
    seoTitle: "Vendor & Third-Party Risk Management | Mr. Compliance",
    seoDescription: "Third-party risk done proportionately: vendor inventory, risk tiering, due diligence, security terms and ongoing monitoring.",
    page: vendorRisk
  },
  {
    slug: "security-questionnaires",
    title: "Security Questionnaires",
    category: "GRC",
    short: "We answer CAIQ, SIG, VSA and custom buyer questionnaires and build a reusable, approved answer library.",
    seoTitle: "Security Questionnaire Support (CAIQ, SIG, VSA) | Mr. Compliance",
    seoDescription: "Stop losing engineering weeks to buyer security reviews. We complete questionnaires and build a reusable approved answer library.",
    page: securityQuestionnaires
  },
  {
    slug: "policy-control-management",
    title: "Policy & Control Management",
    category: "GRC",
    short: "A governed policy suite and one control set mapped across every framework you carry, with owners and review dates.",
    seoTitle: "Policy & Security Control Management | Mr. Compliance",
    seoDescription: "Policies people follow and controls mapped once across SOC 2, ISO 27001 and HIPAA \u2014 with owners, approvals and review cycles.",
    page: policyControlManagement
  },
  {
    slug: "continuous-compliance",
    title: "Continuous Compliance",
    category: "GRC",
    short: "Automated monitoring and evidence collection in Vanta, Drata, Secureframe or Scrut \u2014 managed year-round.",
    seoTitle: "Continuous Compliance Monitoring Services | Mr. Compliance",
    seoDescription: "Stay audit-ready all year with GRC platform setup, automated evidence collection, control drift alerting and audit coordination.",
    page: continuousCompliance
  },
  {
    slug: "vciso",
    title: "vCISO",
    category: "Leadership",
    short: "Senior security leadership on a fractional basis \u2014 strategy, board reporting and customer assurance.",
    seoTitle: "Virtual CISO (vCISO) Services | Mr. Compliance",
    seoDescription: "Fractional security leadership: strategy and roadmap, program ownership, enterprise customer assurance and board reporting.",
    page: vciso
  },
  {
    slug: "security-program-management",
    title: "Security Program Management",
    category: "Leadership",
    short: "The delivery layer behind your strategy: owners, roadmap, weekly cadence and honest executive reporting.",
    seoTitle: "Security Program Management Services | Mr. Compliance",
    seoDescription: "Security program management that ships: workstream design, sequenced roadmap, weekly delivery cadence and executive reporting.",
    page: securityProgramManagement
  }
];
function getCatalogService(slug) {
  return SERVICE_CATALOG.find((s) => s.slug === slug);
}
function getCatalogPage(service) {
  if (service.page) return service.page;
  if (service.legacySlug) {
    return SERVICE_PAGES.find((p) => p.slug === service.legacySlug);
  }
  return void 0;
}
function getRelatedServices(slug, limit = 3) {
  const service = getCatalogService(slug);
  if (!service) return [];
  const sameCategory = SERVICE_CATALOG.filter(
    (s) => s.slug !== slug && s.category === service.category
  );
  const others = SERVICE_CATALOG.filter(
    (s) => s.slug !== slug && s.category !== service.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}
function getServicesByCategory() {
  return CATEGORIES.map((category) => ({
    category,
    services: SERVICE_CATALOG.filter((s) => s.category === category)
  }));
}
const LEGACY_SLUG_REDIRECTS = {
  "soc2-audit-services": "soc2",
  "iso-27001-certification": "iso-27001",
  "pci-dss": "pci-dss",
  "cloud-security": "cloud-security",
  "gdpr-compliance": "gdpr-privacy",
  "hipaa-compliance": "hipaa",
  "risk-assessment": "risk-management",
  "nist-cybersecurity": "nist-cmmc",
  "cmmc-fedramp": "nist-cmmc",
  "penetration-testing": "penetration-testing"
};
export {
  CATEGORIES,
  LEGACY_SLUG_REDIRECTS,
  SERVICE_CATALOG,
  getCatalogPage,
  getCatalogService,
  getRelatedServices,
  getServicesByCategory
};
