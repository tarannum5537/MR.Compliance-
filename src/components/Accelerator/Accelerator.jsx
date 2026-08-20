import useReveal from "../../hooks/useReveal";
import PageHero from "../PageHero/PageHero";
import { BOOKING_URL } from "../Navbar/Navbar";
function Accelerator({ tool }) {
  const ref = useReveal();
  const ref2 = useReveal();
  const STEPS = [
    {
      num: `01 Foundations`,
      title: "Architecture & readiness review",
      text: `We understand your product, data flows, and customer expectations, then align ${tool}'s control set to your real environment \u2013 not a generic template.`
    },
    {
      num: `02  ${tool} setup`,
      title: "Integrations & automation strategy",
      text: "We work with your admins to connect IdP, cloud, code repos and ticketing tools. We then decide which evidences should be automated vs. manual to keep the system lean."
    },
    {
      num: "03  Execution",
      title: "Hands-on control implementation",
      text: `From access reviews to logging, backups and HR processes \u2013 we guide owners, draft missing artefacts and configure ${tool} so controls are actually operating, not just documented.`
    }
  ];
  const WEEKS = [
    {
      week: "Week 1",
      title: "Baseline & planning",
      text: `Quick workshops, ${tool} review, gap snapshot and a realistic SOC 2 plan tailored to your customer pipeline.`
    },
    {
      week: "Week 2",
      title: "Integrations & policies",
      text: "Connect key systems, review existing policies, and introduce only the controls you actually need to pass an audit and unblock deals."
    },
    {
      week: "Week 3+",
      title: "Evidence & workflows",
      text: "Operate the controls, collect evidence and prepare your team for auditor questions with clear owners and repeatable workflows."
    }
  ];
  return <>
      <PageHero
    eyebrow={`${tool} partner program`}
      title={`${tool}\u00A0-\u00A0Powered SOC 2`}
    accent="Accelerator"
    text={`Fast-track your SOC 2 readiness without drowning your team in spreadsheets. We combine the ${tool} platform with hands-on, practical consulting so you get real SOC 2 progress in weeks \u2013 not just another tool to manage.`}
  />

      <section className="psec">
        <div className="psec__inner" ref={ref}>
          <p className="psec__eyebrow" data-reveal>
            Is this you?
          </p>
          <h2 className="psec__title" data-reveal>
            SaaS founders, CTOs &amp; <span>security owners</span> who:
          </h2>

          <ul className="plist" data-reveal>
            <li>
              <span>01</span>
              <p>
                Have {tool} but aren&apos;t using even 50% of its potential.
              </p>
            </li>
            <li>
              <span>02</span>
              <p>Need SOC 2 for enterprise deals or renewals this year.</p>
            </li>
            <li>
              <span>03</span>
              <p>
                <strong>Limited bandwidth</strong> — small team, too many
                priorities, no in-house GRC.
              </p>
            </li>
            <li>
              <span>04</span>
              <p>
                Want clarity on &quot;what to do next&quot; without reading
                every framework.
              </p>
            </li>
          </ul>

          <p className="psec__lead" data-reveal>
            If this sounds familiar, this accelerator gives you a clear plan,
            realistic timelines, and a partner who has actually done this for
            multiple SaaS products.
          </p>

          <div className="pactions" data-reveal>
            <a
    className="btn btn--primary"
    href={BOOKING_URL}
    target="_blank"
    rel="noreferrer"
  >
              Schedule a discovery call <span aria-hidden="true">↗︎</span>
            </a>
            <a
    className="btn btn--ghost"
    href="mailto:support@mrcompliance.co?subject=Program outline request"
  >
              Request program outline
            </a>
          </div>
        </div>
      </section>

      <section className="psec">
        <div className="psec__inner" ref={ref2}>
          <p className="psec__eyebrow" data-reveal>
            What you get
          </p>
          <h2 className="psec__title" data-reveal>
            The {tool} SOC 2 <span>Accelerator</span>.
          </h2>

          <div className="pgrid">
            {STEPS.map((s) => <article className="pcard" key={s.num} data-reveal>
                <p className="pcard__num">{s.num}</p>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>)}
          </div>

          <h2 className="psec__title" data-reveal style={{ marginTop: 72 }}>
            A simple, <span>time-boxed</span> approach.
          </h2>

          <div className="pgrid">
            {WEEKS.map((w) => <article className="pcard" key={w.week} data-reveal>
                <p className="pcard__num">{w.week}</p>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </article>)}
          </div>

          <p className="psec__lead" data-reveal>
            No obligation, no sales pressure. 20–30 minutes to see if
            we&apos;re the right fit.
          </p>
        </div>
      </section>
    </>;
}
export {
  Accelerator as default
};
