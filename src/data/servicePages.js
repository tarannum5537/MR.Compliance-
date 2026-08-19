const SERVICE_PAGES = [
  {
    slug: "iso-27001-certification",
    tag: "ISO 27001 Certification",
    tagIcon: "globe",
    title: "ISO 27001 Certification Services",
    tagline: "Get ISO 27001 certified with a structured, audit-ready ISMS. End-to-end support across ISMS development, risk assessment, asset inventory, Statement of Applicability and certification audit preparation.",
    duration: "8 weeks",
    price: "$2,000",
    timelineTitle: "Your Path to Certification",
    timelineSub: "A clear roadmap from scoping to certificate.",
    steps: [
      { icon: "search", title: "Risk Assessment", text: "Scope your ISMS, inventory assets and score risk." },
      { icon: "file", title: "ISMS Development", text: "Policies, Statement of Applicability and control mapping." },
      { icon: "shield", title: "Control Implementation", text: "Put the selected Annex A controls into practice." },
      { icon: "folder", title: "Internal Audit", text: "Internal audit and management review before Stage 1." },
      { icon: "award", title: "Certification Audit", text: "Stage 1 and Stage 2 audit support until you're certified." }
    ],
    educationTitle: "What is ISO 27001?",
    educationParagraphs: [
      "ISO 27001 is the leading international standard for an Information Security Management System (ISMS) \u2014 a structured way of managing how a company protects its information.",
      "Certification proves your security practices are systematic, risk-based, and independently verified, not just ad hoc."
    ],
    whyTitle: "Why Do Companies Need ISO 27001?",
    why: [
      { icon: "globe", title: "Required by global buyers", text: "Many EU and global enterprise buyers ask for ISO 27001 before they sign a contract." },
      { icon: "shield", title: "Systematic risk management", text: "Demonstrates that risk is identified, treated and reviewed on a repeatable cycle." },
      { icon: "trending", title: "Enables international expansion", text: "An internationally recognised certificate builds trust in markets that don't know you yet." },
      { icon: "scale", title: "The non-US alternative to SOC 2", text: "Often required alongside \u2014 or instead of \u2014 SOC 2 when your clients are outside the US." }
    ],
    includedTitle: "What's Included in Our ISO 27001 Program",
    includedSub: "Four workstreams, run in sequence over eight weeks.",
    workstreams: [
      { num: "01", title: "Risk & Scope", text: "Define what the ISMS covers and understand the risk you are managing.", items: ["Risk assessment", "Asset inventory", "Scope definition"] },
      { num: "02", title: "ISMS Development", text: "Build the documented management system auditors expect to see.", items: ["Policy development", "Statement of Applicability (SoA)", "Control mapping"] },
      { num: "03", title: "Implementation", text: "Turn the documentation into controls that actually operate.", items: ["Control implementation", "Internal audit prep", "Management review setup"] },
      { num: "04", title: "Certification", text: "We run the certification body relationship through to the certificate.", items: ["Certification audit coordination", "Corrective action support", "Continual improvement setup"] }
    ],
    turnaround: "8 weeks"
  },
  {
    slug: "pci-dss",
    tag: "PCI DSS Compliance",
    tagIcon: "lock",
    title: "PCI DSS Compliance Services",
    tagline: "Protect cardholder data and pass your QSA audit with confidence. Practical support across data flow mapping, control implementation, security policies, vulnerability management and audit prep.",
    duration: "8 weeks",
    price: "$3,000",
    timelineTitle: "Your Path to Compliance",
    timelineSub: "From cardholder data mapping to a clean QSA audit.",
    steps: [
      { icon: "search", title: "Scoping", text: "Map cardholder data flows and confirm what's in scope." },
      { icon: "shield", title: "Segmentation Review", text: "Review network segmentation to shrink the scope." },
      { icon: "file", title: "Controls & Policy", text: "Implement PCI DSS controls and write the policies." },
      { icon: "bug", title: "Vulnerability Management", text: "Scanning, patching and remediation cadence." },
      { icon: "award", title: "QSA Audit", text: "Evidence collection and QSA audit coordination." }
    ],
    educationTitle: "What is PCI DSS?",
    educationParagraphs: [
      "PCI DSS (Payment Card Industry Data Security Standard) is a set of security requirements for any business that stores, processes, or transmits credit/debit card data.",
      "It's mandated by card networks (Visa, Mastercard, etc.), not a government law \u2014 but non-compliance can mean losing the ability to process payments."
    ],
    whyTitle: "Why Do Companies Need PCI DSS?",
    why: [
      { icon: "lock", title: "Mandatory for card payments", text: "If you touch card data in any form, the card networks require compliance." },
      { icon: "scale", title: "Avoids fines and bans", text: "Non-compliance can mean penalties or losing the ability to process payments entirely." },
      { icon: "shield", title: "Reduces fraud & breach risk", text: "The controls directly target the attack paths used against payment environments." },
      { icon: "building", title: "Required by processors & banks", text: "Payment processors and acquiring banks ask for evidence before and during the relationship." }
    ],
    includedTitle: "What's Included in Our PCI DSS Program",
    includedSub: "Four workstreams, run in sequence over eight weeks.",
    workstreams: [
      { num: "01", title: "Scoping & Mapping", text: "Understand exactly where card data lives and moves.", items: ["Cardholder data flow mapping", "Network segmentation review"] },
      { num: "02", title: "Controls & Policy", text: "Implement the required controls and document them properly.", items: ["Control implementation", "Security policy development"] },
      { num: "03", title: "Vulnerability Management", text: "Stand up the scanning and patching cadence PCI expects.", items: ["Vulnerability scanning", "Patch management setup"] },
      { num: "04", title: "Audit Readiness", text: "We prepare the evidence and run the QSA relationship.", items: ["QSA audit preparation", "Evidence collection", "Remediation support"] }
    ],
    turnaround: "8 weeks"
  },
  {
    slug: "cloud-security",
    tag: "Cloud Security",
    tagIcon: "cloud",
    title: "Cloud Security Assessment",
    tagline: "Find and fix cloud security gaps before attackers or auditors do. A comprehensive review of AWS, GCP and Azure covering configuration, IAM, network security, logging and monitoring.",
    duration: "8 weeks",
    price: "$1,500",
    timelineTitle: "Your Path to a Secure Cloud",
    timelineSub: "From configuration review to verified remediation.",
    steps: [
      { icon: "search", title: "Configuration Review", text: "Audit AWS, GCP and Azure configuration against benchmarks." },
      { icon: "users", title: "Identity & Access", text: "Review IAM and move toward least-privilege access." },
      { icon: "shield", title: "Network & Monitoring", text: "Network security review plus logging and monitoring setup." },
      { icon: "file", title: "Gap Report", text: "A prioritised report of findings with clear owners." },
      { icon: "award", title: "Remediation", text: "Actionable fixes and a re-assessment to confirm them." }
    ],
    educationTitle: "What is a Cloud Security Assessment?",
    educationParagraphs: [
      "A structured review of your cloud infrastructure (AWS, GCP, Azure) to identify misconfigurations, weak access controls, and exposure risks \u2014 the leading causes of cloud data breaches.",
      "The assessment ends with clear, actionable fixes rather than a raw list of scanner output."
    ],
    whyTitle: "Why Do Companies Need Cloud Security Assessments?",
    why: [
      { icon: "alert", title: "Misconfiguration is the #1 cause", text: "Most cloud breaches start with a setting nobody meant to leave open." },
      { icon: "shield", title: "Required for compliance", text: "SOC 2 and ISO 27001 both expect evidence that your cloud is reviewed and hardened." },
      { icon: "heart", title: "Protects customer trust", text: "Customers assume their data is safe in your cloud \u2014 this is how you prove it." },
      { icon: "target", title: "Reduces attack surface", text: "Fewer exposed services and over-permissioned roles means fewer ways in." }
    ],
    includedTitle: "What's Included in Our Cloud Security Program",
    includedSub: "Four workstreams, run in sequence over eight weeks.",
    workstreams: [
      { num: "01", title: "Configuration Review", text: "A full configuration audit of your cloud footprint.", items: ["Cloud configuration audit across AWS/GCP/Azure"] },
      { num: "02", title: "Identity & Access", text: "Tighten who can reach what, and with which permissions.", items: ["IAM review", "Least-privilege access setup"] },
      { num: "03", title: "Network & Monitoring", text: "Make sure traffic is controlled and activity is visible.", items: ["Network security review", "Logging & monitoring setup"] },
      { num: "04", title: "Remediation", text: "Fix the findings and confirm they stay fixed.", items: ["Gap report", "Actionable remediation guidance", "Re-assessment support"] }
    ],
    turnaround: "8 weeks"
  },
  {
    slug: "gdpr-compliance",
    tag: "GDPR Compliance",
    tagIcon: "scale",
    title: "GDPR Compliance Services",
    tagline: "Handle EU personal data the right way \u2014 and prove it. End-to-end support across data mapping, privacy policies, consent management, DPIAs, RoPA, vendor agreements and privacy governance.",
    duration: "8 weeks",
    price: "$2,500",
    timelineTitle: "Your Path to Compliance",
    timelineSub: "From data inventory to working privacy governance.",
    steps: [
      { icon: "database", title: "Data Mapping", text: "Inventory personal data and build your RoPA." },
      { icon: "file", title: "Policy & Consent", text: "Privacy policy development and consent management." },
      { icon: "search", title: "DPIA", text: "Assess high-risk processing with a formal DPIA." },
      { icon: "users", title: "Vendor Agreements", text: "Put Data Processing Agreements in place with vendors." },
      { icon: "award", title: "Governance", text: "Ongoing privacy governance and incident procedures." }
    ],
    educationTitle: "What is GDPR?",
    educationParagraphs: [
      "The General Data Protection Regulation (GDPR) is the EU's data privacy law governing how companies collect, store, and process personal data of EU residents.",
      "It carries some of the highest penalties in the world for non-compliance \u2014 up to 4% of global revenue."
    ],
    whyTitle: "Why Do Companies Need GDPR Compliance?",
    why: [
      { icon: "scale", title: "Legally required", text: "If you handle EU user or customer data, GDPR applies regardless of where you're based." },
      { icon: "alert", title: "Avoids major fines", text: "Penalties reach up to 4% of global annual revenue for serious breaches." },
      { icon: "heart", title: "Builds customer trust", text: "Clear, honest data handling is increasingly a buying criterion, not a formality." },
      { icon: "building", title: "Required by EU buyers", text: "EU enterprise buyers and partners will not sign without evidence of compliance." }
    ],
    includedTitle: "What's Included in Our GDPR Program",
    includedSub: "Four workstreams, run in sequence over eight weeks.",
    workstreams: [
      { num: "01", title: "Data Mapping", text: "Know exactly what personal data you hold and why.", items: ["Data inventory", "RoPA (Records of Processing Activities)"] },
      { num: "02", title: "Policy & Consent", text: "Get the user-facing side right and legally defensible.", items: ["Privacy policy development", "Consent management setup"] },
      { num: "03", title: "Risk Assessment", text: "Assess and document your higher-risk processing.", items: ["Data Protection Impact Assessment (DPIA)"] },
      { num: "04", title: "Governance", text: "Make privacy an operating routine, not a one-off project.", items: ["Vendor agreements (DPAs)", "Privacy governance implementation"] }
    ],
    turnaround: "8 weeks"
  },
  {
    slug: "hipaa-compliance",
    tag: "HIPAA Compliance",
    tagIcon: "heart",
    title: "HIPAA Compliance Services",
    tagline: "Protect patient data and meet HIPAA requirements with confidence. Practical support for healthcare providers and health tech across risk assessments, policies, safeguards and PHI protection.",
    duration: "6 weeks",
    price: "$2,500",
    timelineTitle: "Your Path to Compliance",
    timelineSub: "From risk assessment to an audit-ready PHI program.",
    steps: [
      { icon: "search", title: "Risk Assessment", text: "HIPAA risk assessment and gap analysis." },
      { icon: "file", title: "Policy Development", text: "Administrative safeguards and policy documentation." },
      { icon: "lock", title: "Technical Safeguards", text: "Access controls, encryption and technical controls." },
      { icon: "users", title: "Workforce Training", text: "Train the people who handle PHI day to day." },
      { icon: "award", title: "Audit Readiness", text: "Evidence and documentation ready for review." }
    ],
    educationTitle: "What is HIPAA?",
    educationParagraphs: [
      "HIPAA (Health Insurance Portability and Accountability Act) is a US law requiring healthcare providers, health tech companies, and their vendors to protect patients' health information (PHI).",
      "It does that through specific administrative, technical, and physical safeguards that must be documented and demonstrably in use."
    ],
    whyTitle: "Why Do Companies Need HIPAA Compliance?",
    why: [
      { icon: "scale", title: "Legally mandatory", text: "Required for healthcare organizations and their business associates, without exception." },
      { icon: "alert", title: "Avoids fines & liability", text: "Violations carry significant financial penalties and legal exposure." },
      { icon: "building", title: "Required by partners", text: "Healthcare partners and payers require it before they'll share data with you." },
      { icon: "heart", title: "Builds patient trust", text: "Patients are handing over their most sensitive data \u2014 safeguards are the minimum." }
    ],
    includedTitle: "What's Included in Our HIPAA Program",
    includedSub: "Four workstreams, run in sequence over six weeks.",
    workstreams: [
      { num: "01", title: "Risk Assessment", text: "Establish where PHI lives and where the gaps are.", items: ["HIPAA risk assessment", "Gap analysis"] },
      { num: "02", title: "Policy Development", text: "Document the administrative side auditors ask for first.", items: ["Administrative safeguards", "Policy documentation"] },
      { num: "03", title: "Technical Safeguards", text: "Implement the controls that actually protect PHI.", items: ["Access controls", "Encryption", "Technical safeguards implementation"] },
      { num: "04", title: "PHI Program", text: "Turn it into an ongoing program your team can run.", items: ["PHI protection program", "Workforce training", "Audit readiness"] }
    ],
    turnaround: "6 weeks"
  },
  {
    slug: "risk-assessment",
    tag: "Risk Assessment",
    tagIcon: "target",
    title: "Risk Assessment Services",
    tagline: "Know your risks before they become incidents. Structured risk assessment across information security, operational and technology risk \u2014 with a register and treatment plan you can act on.",
    duration: "3 weeks",
    price: "$2,000",
    timelineTitle: "Your Path to a Risk Register",
    timelineSub: "Three weeks from asset inventory to treatment plan.",
    steps: [
      { icon: "database", title: "Asset Identification", text: "Inventory assets and scope the assessment." },
      { icon: "search", title: "Risk Analysis", text: "Analyse threats with likelihood and impact scoring." },
      { icon: "file", title: "Treatment Planning", text: "Decide what to mitigate, accept or transfer." },
      { icon: "award", title: "Risk Register", text: "A living register plus a remediation roadmap." }
    ],
    educationTitle: "What is a Risk Assessment?",
    educationParagraphs: [
      "A structured process to identify, analyze, and prioritize security, operational, and technology risks facing your organization.",
      "It forms the foundation that most compliance frameworks \u2014 SOC 2, ISO 27001, HIPAA \u2014 require before anything else."
    ],
    whyTitle: "Why Do Companies Need a Risk Assessment?",
    why: [
      { icon: "shield", title: "Foundational for compliance", text: "Most frameworks start here; without it, the rest of the program has no basis." },
      { icon: "target", title: "Prioritises security spend", text: "Put budget and effort where the real exposure is, not where the noise is." },
      { icon: "zap", title: "Reduces incident impact", text: "Known risks with owners and treatments are far less likely to become incidents." },
      { icon: "building", title: "Expected by auditors & buyers", text: "Auditors and enterprise customers ask to see the register and how it's maintained." }
    ],
    includedTitle: "What's Included in Our Risk Assessment Program",
    includedSub: "Three workstreams, run in sequence over three weeks.",
    workstreams: [
      { num: "01", title: "Asset Identification", text: "Establish what you're protecting and what's in scope.", items: ["Asset inventory", "Risk scoping"] },
      { num: "02", title: "Risk Analysis", text: "Score each risk consistently so priorities are defensible.", items: ["Risk analysis", "Likelihood/impact scoring"] },
      { num: "03", title: "Treatment & Reporting", text: "Turn analysis into decisions and a documented plan.", items: ["Risk treatment planning", "Risk register development"] }
    ],
    turnaround: "3 weeks"
  },
  {
    slug: "nist-cybersecurity",
    tag: "NIST Cybersecurity",
    tagIcon: "shield",
    title: "NIST Cybersecurity Framework Services",
    tagline: "Build a mature cybersecurity program aligned to NIST CSF. Gap assessment, maturity evaluation, control implementation and policy development across all five framework functions.",
    duration: "10 weeks",
    price: "$4,500",
    timelineTitle: "Your Path to CSF Alignment",
    timelineSub: "From gap assessment to a maturity roadmap.",
    steps: [
      { icon: "search", title: "Gap Assessment", text: "Assess current state against the NIST CSF." },
      { icon: "trending", title: "Maturity Evaluation", text: "Score maturity across all five CSF functions." },
      { icon: "shield", title: "Control Implementation", text: "Implement controls aligned to the framework." },
      { icon: "file", title: "Policy Development", text: "Security policies covering each function." },
      { icon: "award", title: "Maturity Roadmap", text: "A sequenced roadmap for continued improvement." }
    ],
    educationTitle: "What is NIST CSF?",
    educationParagraphs: [
      "The NIST Cybersecurity Framework is a widely-adopted US framework organizing cybersecurity practices into five functions \u2014 Identify, Protect, Detect, Respond, Recover.",
      "It's used to assess and mature an organization's overall security posture rather than to certify a single point in time."
    ],
    whyTitle: "Why Do Companies Need NIST CSF?",
    why: [
      { icon: "building", title: "Expected by US buyers", text: "Often required or preferred by US enterprise and government-adjacent customers." },
      { icon: "trending", title: "A structured maturity path", text: "Gives you a defensible roadmap instead of a scattered list of security projects." },
      { icon: "shield", title: "Strengthens security posture", text: "Coverage across detect and respond, not just preventive controls." },
      { icon: "scale", title: "Complements other frameworks", text: "Maps cleanly onto SOC 2 and ISO 27001 work you've already done." }
    ],
    includedTitle: "What's Included in Our NIST CSF Program",
    includedSub: "Four workstreams, run in sequence over ten weeks.",
    workstreams: [
      { num: "01", title: "Gap Assessment", text: "Understand where you stand today against the framework.", items: ["NIST CSF gap assessment"] },
      { num: "02", title: "Maturity Evaluation", text: "Score maturity so progress can be measured over time.", items: ["Security maturity evaluation across the 5 functions"] },
      { num: "03", title: "Control Implementation", text: "Close the gaps with controls that fit your stack.", items: ["Control implementation aligned to CSF"] },
      { num: "04", title: "Policy & Roadmap", text: "Document the program and plan the next stage.", items: ["Security policy development", "Maturity roadmap"] }
    ],
    turnaround: "10 weeks"
  },
  {
    slug: "cmmc-fedramp",
    tag: "CMMC & FedRAMP",
    tagIcon: "building",
    title: "CMMC & FedRAMP Compliance Services",
    tagline: "Get compliance-ready to work with U.S. federal agencies and DoD contractors. Control implementation, documentation, gap assessment and audit preparation for government work.",
    duration: "12\u201316 weeks",
    price: "Custom Pricing",
    customQuote: true,
    timelineTitle: "Your Path to Federal Readiness",
    timelineSub: "From gap assessment to audit-ready documentation.",
    steps: [
      { icon: "search", title: "Gap Assessment", text: "Assess against your required CMMC level or FedRAMP baseline." },
      { icon: "file", title: "Documentation", text: "System Security Plan (SSP) and supporting documentation." },
      { icon: "shield", title: "Control Implementation", text: "Implement the required security controls." },
      { icon: "folder", title: "Evidence & Review", text: "Collect evidence and review against the baseline." },
      { icon: "award", title: "Audit Preparation", text: "Audit prep and ongoing compliance support." }
    ],
    educationTitle: "What is CMMC & FedRAMP?",
    educationParagraphs: [
      "CMMC (Cybersecurity Maturity Model Certification) and FedRAMP are US government compliance frameworks required for contractors and cloud providers working with the Department of Defense and federal agencies.",
      "Both verify that strict security controls are in place before sensitive government data is handled."
    ],
    whyTitle: "Why Do Companies Need CMMC & FedRAMP?",
    why: [
      { icon: "building", title: "Mandatory for federal contracts", text: "You cannot bid on or hold DoD and federal contracts without it." },
      { icon: "cloud", title: "Required to sell cloud to gov", text: "FedRAMP authorisation is the gate for selling cloud services to agencies." },
      { icon: "lock", title: "Protects sensitive data", text: "Demonstrates you can protect controlled and sensitive government information." },
      { icon: "trending", title: "Opens a large market", text: "Federal buyers are long-term customers once you clear the compliance bar." }
    ],
    includedTitle: "What's Included in Our CMMC & FedRAMP Program",
    includedSub: "Four workstreams, run in sequence over 12\u201316 weeks.",
    workstreams: [
      { num: "01", title: "Gap Assessment", text: "Establish the target level and what's missing today.", items: ["CMMC/FedRAMP gap assessment against required level"] },
      { num: "02", title: "Documentation", text: "Build the documentation package assessors work from.", items: ["System Security Plan (SSP)", "Documentation development"] },
      { num: "03", title: "Control Implementation", text: "Implement the controls behind the documentation.", items: ["Security control implementation"] },
      { num: "04", title: "Audit Preparation", text: "Prepare for assessment and stay compliant after it.", items: ["Audit preparation", "Ongoing compliance support"] }
    ],
    turnaround: "12\u201316 weeks"
  },
  {
    slug: "penetration-testing",
    tag: "Penetration Testing",
    tagIcon: "bug",
    title: "Compliance-Ready Penetration Testing",
    tagline: "Get an audit-accepted pentest report without the runaround. Manual testing, automated scanning and remediation support, scoped for SOC 2, ISO 27001, HIPAA and PCI DSS.",
    duration: "1 week",
    price: "$500",
    timelineTitle: "Your Path to an Accepted Report",
    timelineSub: "One week from scoping to a report auditors accept.",
    steps: [
      { icon: "target", title: "Scoping", text: "Scope defined against your target compliance framework." },
      { icon: "bug", title: "Manual Testing", text: "Hands-on testing for real, exploitable issues." },
      { icon: "search", title: "Automated Scanning", text: "Automated vulnerability scanning for coverage." },
      { icon: "file", title: "Reporting", text: "An audit-accepted report with clear findings." },
      { icon: "award", title: "Remediation", text: "Remediation support and retesting of fixes." }
    ],
    educationTitle: "What is Compliance-Ready Pentesting?",
    educationParagraphs: [
      "A penetration test specifically scoped and reported to satisfy auditor requirements for frameworks like SOC 2, ISO 27001, HIPAA, and PCI DSS.",
      "It combines manual and automated testing with a report auditors will actually accept \u2014 not a raw scanner export."
    ],
    whyTitle: "Why Do Companies Need Compliance-Ready Pentesting?",
    why: [
      { icon: "scale", title: "Required annually", text: "Most compliance frameworks expect a penetration test at least once a year." },
      { icon: "bug", title: "Finds real vulnerabilities", text: "Manual testing surfaces exploitable issues scanners routinely miss." },
      { icon: "alert", title: "Avoids report rejection", text: "Improper scoping is the usual reason auditors reject a pentest report." },
      { icon: "clock", title: "Keeps audits on schedule", text: "A one-week turnaround means the test never becomes the blocker." }
    ],
    includedTitle: "What's Included in Our Pentesting Program",
    includedSub: "Three workstreams, delivered inside one week.",
    workstreams: [
      { num: "01", title: "Scoping", text: "Scope the test so the report will hold up in your audit.", items: ["Scope definition aligned to target compliance framework"] },
      { num: "02", title: "Testing", text: "Combine hands-on testing with broad automated coverage.", items: ["Manual testing", "Automated vulnerability scanning"] },
      { num: "03", title: "Reporting & Fixes", text: "Deliver the report and help you close the findings.", items: ["Audit-accepted report delivery", "Remediation support"] }
    ],
    turnaround: "1 week"
  }
];
function getServicePage(slug) {
  return SERVICE_PAGES.find((p) => p.slug === slug);
}
export {
  SERVICE_PAGES,
  getServicePage
};
