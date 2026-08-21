import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Building2,
  Bug,
  CalendarCheck,
  Check,
  Clock,
  Cloud,
  Database,
  FileText,
  FolderCheck,
  Globe,
  Handshake,
  Heart,
  Lock,
  Scale,
  Search,
  ShieldCheck,
  Tag,
  Target,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { BOOKING_URL } from "../Navbar/Navbar";
import "../Soc2Page/Soc2Page.scss";
const ICONS = {
  search: Search,
  file: FileText,
  folder: FolderCheck,
  users: Users,
  award: Award,
  shield: ShieldCheck,
  zap: Zap,
  clock: Clock,
  trending: TrendingUp,
  lock: Lock,
  globe: Globe,
  cloud: Cloud,
  database: Database,
  scale: Scale,
  heart: Heart,
  alert: AlertTriangle,
  target: Target,
  building: Building2,
  bug: Bug
};
function ServicePage({
  page,
  category,
  related = []
}) {
  const TagIcon = ICONS[page.tagIcon];
  const REASONS = [
    {
      icon: Users,
      title: "Experienced consultants",
      text: "Practitioners who have taken dozens of teams through this process end to end."
    },
    {
      icon: CalendarCheck,
      title: "Predictable timeline",
      text: `A structured ${page.turnaround} plan with weekly checkpoints, so nothing is a surprise at the end.`
    },
    {
      icon: Handshake,
      title: "Hands-on coordination",
      text: "We sit in the calls, answer requests and chase evidence instead of forwarding you a checklist."
    },
    {
      icon: Zap,
      title: "Built for startups & SaaS",
      text: "Lean controls that fit small teams and modern cloud stacks  no enterprise-sized overhead."
    }
  ];
  const STATS = [
    { value: "200+", label: "Companies certified" },
    { value: page.turnaround, label: "Average turnaround" },
    { value: "100%", label: "Audit success rate" }
  ];
  return <div className="soc2">
      <section className="soc2__hero">
        <div className="soc2__container">
          <Link className="soc2__back" to="/services">
            <span aria-hidden="true">←</span> Back to services
          </Link>

          <div className="soc2__hero-grid">
            <div>
              {category && <p className="soc2__category">{category}</p>}

              <span className="soc2__tag">
                <TagIcon aria-hidden="true" /> {page.tag}
              </span>

              <h1 className="soc2__hero-title">{page.title}</h1>

              <p className="soc2__hero-sub">{page.tagline}</p>

              <div className="soc2__badges">
                <span className="soc2__badge">
                  <Clock aria-hidden="true" /> Duration:&nbsp;
                  <strong>{page.duration}</strong>
                </span>
                <span className="soc2__badge">
                  <Tag aria-hidden="true" />{" "}
                  {page.customQuote ? <strong>{page.price}</strong> : <>
                      Starting at&nbsp;<strong>{page.price}</strong>
                    </>}
                </span>
              </div>

              <a
    className="soc2__cta"
    href={BOOKING_URL}
    target="_blank"
    rel="noreferrer"
  >
                {page.customQuote ? "Get Custom Quote" : "Book Free Assessment"}{" "}
                <ArrowRight aria-hidden="true" />
              </a>
            </div>

            <div className="soc2__timeline">
              <h2 className="soc2__timeline-title">{page.timelineTitle}</h2>
              <p className="soc2__timeline-sub">{page.timelineSub}</p>

              <ol className="soc2__timeline-list">
                {page.steps.map((step) => {
    const Icon = ICONS[step.icon];
    return <li className="soc2__step" key={step.title}>
                      <span className="soc2__step-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.text}</p>
                      </div>
                    </li>;
  })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="soc2__section">
        <div className="soc2__container">
          <div className="soc2__panel soc2__split">
            <h2>{page.educationTitle}</h2>
            <div>
              {page.educationParagraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="soc2__section">
        <div className="soc2__container">
          <header className="soc2__head">
            <h2>{page.whyTitle}</h2>
          </header>

          <div className="soc2__cards">
            {page.why.map((item) => {
    const Icon = ICONS[item.icon];
    return <article className="soc2__card" key={item.title}>
                  <span className="soc2__card-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>;
  })}
          </div>
        </div>
      </section>

      <section className="soc2__section">
        <div className="soc2__container">
          <header className="soc2__head">
            <h2>{page.includedTitle}</h2>
            <p>{page.includedSub}</p>
          </header>

          <div className="soc2__included">
            {page.workstreams.map((w) => <article className="soc2__work" key={w.num}>
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

      {related.length > 0 && <section className="soc2__section">
          <div className="soc2__container">
            <header className="soc2__head">
              <h2>Related services</h2>
              <p>Other engagements teams usually pair with this one.</p>
            </header>

            <div className="soc2__cards soc2__related">
              {related.map((item) => <Link
    className="soc2__card soc2__related-card"
    key={item.slug}
    to={`/services/${item.slug}`}
  >
                  <p className="soc2__related-cat">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.short}</p>
                  <span className="soc2__related-arrow" aria-hidden="true">
                    ↗︎
                  </span>
                </Link>)}
            </div>
          </div>
        </section>}
    </div>;
}
export {
  ServicePage as default
};
