import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  Check,
  Clock,
  FileText,
  FolderCheck,
  Handshake,
  Search,
  ShieldCheck,
  Tag,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { BOOKING_URL } from "../Navbar/Navbar";
import "./Soc2Page.scss";
const STEPS = [
  {
    icon: Search,
    title: "Gap Assessment",
    text: "See where you stand against SOC 2 requirements."
  },
  {
    icon: FileText,
    title: "Policy & Controls Setup",
    text: "Build the policies and controls that form your program."
  },
  {
    icon: FolderCheck,
    title: "Evidence Collection",
    text: "Collect and organize proof that controls are working."
  },
  {
    icon: Users,
    title: "Audit Coordination",
    text: "We manage the auditor relationship and requests."
  },
  {
    icon: Award,
    title: "Certified",
    text: "Receive your SOC 2 report and close the deal."
  }
];
const WHY = [
  {
    icon: TrendingUp,
    title: "Wins enterprise deals",
    text: "Large buyers ask for a SOC 2 report before they sign. Having one keeps you on the shortlist."
  },
  {
    icon: ShieldCheck,
    title: "Builds real trust",
    text: "An independent auditor confirms your claims, so customers don't have to take your word for it."
  },
  {
    icon: Zap,
    title: "Lowers breach risk",
    text: "The controls you put in place genuinely reduce the chance and impact of a security incident."
  },
  {
    icon: Clock,
    title: "Shortens sales cycles",
    text: "Security questionnaires and vendor reviews move in days instead of dragging on for months."
  }
];
const WORKSTREAMS = [
  {
    num: "01",
    title: "Assessment & Strategy",
    text: "Gap assessment against the Trust Services Criteria, plus a readiness roadmap with owners and dates.",
    items: ["Gap assessment", "Readiness roadmap", "Scope definition"]
  },
  {
    num: "02",
    title: "Policy & Controls",
    text: "Security policies written for how your team actually works, then implemented control by control.",
    items: ["Policy development", "Control implementation", "Access reviews"]
  },
  {
    num: "03",
    title: "Tools & Automation",
    text: "GRC platform onboarding and continuous monitoring so evidence collects itself in the background.",
    items: [
      "Vanta, Drata, Secureframe, Scrut",
      "Continuous monitoring",
      "Alert triage"
    ]
  },
  {
    num: "04",
    title: "Audit & Beyond",
    text: "We run evidence collection and auditor coordination, then keep the program healthy after the report.",
    items: [
      "Evidence collection",
      "Audit coordination",
      "Vendor risk & training"
    ]
  }
];
const REASONS = [
  {
    icon: Users,
    title: "Experienced consultants",
    text: "Practitioners who have taken dozens of teams through Type 1 and Type 2 audits end to end."
  },
  {
    icon: CalendarCheck,
    title: "Predictable timeline",
    text: "A structured 8-week plan with weekly checkpoints, so nothing is a surprise in week seven."
  },
  {
    icon: Handshake,
    title: "Hands-on audit coordination",
    text: "We sit in the auditor calls, answer requests and chase evidence instead of forwarding you a checklist."
  },
  {
    icon: Zap,
    title: "Built for startups & SaaS",
    text: "Lean controls that fit small teams and modern cloud stacks  no enterprise-sized overhead."
  }
];
const STATS = [
  { value: "200", label: "Companies certified" },
  { value: "8 weeks", label: "Average turnaround" },
  { value: "100%", label: "Audit success rate" }
];
function Soc2Page() {
  return <div className="soc2">
      {
    /* SECTION 1 - HERO + SECTION 2 - PROCESS TIMELINE CARD */
  }
      <section className="soc2__hero">
        <div className="soc2__container">
          <Link className="soc2__back" to="/services">
            <span aria-hidden="true">←</span> Back to services
          </Link>

          <div className="soc2__hero-grid">
            <div>
              <span className="soc2__tag">
                <ShieldCheck aria-hidden="true" /> SOC 2 Compliance
              </span>

              <h1 className="soc2__hero-title">
                SOC 2 Type 1 / 2 Audit Services
              </h1>

              <p className="soc2__hero-sub">
                Get audit-ready and certified - without the confusion. We handle
                the controls, the evidence and the auditor, so your team keeps
                shipping.
              </p>

              <div className="soc2__badges">
                <span className="soc2__badge">
                  <Clock aria-hidden="true" /> Duration:&nbsp;
                  <strong>8 weeks</strong>
                </span>
                <span className="soc2__badge">
                  <Tag aria-hidden="true" /> Starting at&nbsp;
                  <strong>$2,000</strong>
                </span>
              </div>

              <a
    className="soc2__cta"
    href={BOOKING_URL}
    target="_blank"
    rel="noreferrer"
  >
                Book Free Assessment <ArrowRight aria-hidden="true" />
              </a>
            </div>

            <div className="soc2__timeline">
              <h2 className="soc2__timeline-title">Your Path to Certification</h2>
              <p className="soc2__timeline-sub">
                A clear roadmap from readiness to report.
              </p>

              <ol className="soc2__timeline-list">
                {STEPS.map(({ icon: Icon, title, text }) => <li className="soc2__step" key={title}>
                    <span className="soc2__step-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </li>)}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {
    /* SECTION 3 - EDUCATION */
  }
      <section className="soc2__section">
        <div className="soc2__container">
          <div className="soc2__panel soc2__split">
            <h2>What is SOC 2 Certification?</h2>
            <div>
              <p>
                SOC 2 is an independent check on how well a company protects the
                data it holds for its customers. An outside auditor reviews your
                day-to-day practices and writes a report on what they found.
              </p>
              <p>
                Passing it proves you have real safeguards in place - who can
                access data, how systems are monitored, and what happens when
                something goes wrong. A Type 1 report looks at
                one moment in time, a Type 2 report watches
                those safeguards work over several months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {
    /* SECTION 4 - WHY NEEDED */
  }
      <section className="soc2__section">
        <div className="soc2__container">
          <header className="soc2__head">
            <h2>Why Do Companies Need SOC 2 Certification?</h2>
          </header>

          <div className="soc2__cards">
            {WHY.map(({ icon: Icon, title, text }) => <article className="soc2__card" key={title}>
                <span className="soc2__card-icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>)}
          </div>
        </div>
      </section>

      {
    /* SECTION 5 - WHAT'S INCLUDED */
  }
      <section className="soc2__section">
        <div className="soc2__container">
          <header className="soc2__head">
            <h2>What&apos;s Included in Our SOC 2 Program</h2>
            <p>Four workstreams, run in sequence over eight weeks.</p>
          </header>

          <div className="soc2__included">
            {WORKSTREAMS.map((w) => <article className="soc2__work" key={w.num}>
                <span className="soc2__work-num">{w.num}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <ul>
                  {w.items.map((item) => <li key={item}>
                      <Check aria-hidden="true" /> {item}
                    </li>)}
                </ul>
              </article>)}
          </div>
        </div>
      </section>

      {
    /* SECTION 6 - WHY WORK WITH US + STATS */
  }
      <section className="soc2__section">
        <div className="soc2__container">
          <header className="soc2__head">
            <h2>Why Work With Mr.Compliance?</h2>
          </header>

          <div className="soc2__cards">
            {REASONS.map(({ icon: Icon, title, text }) => <article className="soc2__card" key={title}>
                <span className="soc2__card-icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>)}
          </div>

          <div className="soc2__stats">
            {STATS.map((s) => <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>)}
          </div>
        </div>
      </section>

    </div>;
}
export {
  Soc2Page as default
};
