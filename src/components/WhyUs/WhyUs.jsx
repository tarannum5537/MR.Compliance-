import useReveal from "../../hooks/useReveal";
import "./WhyUs.scss";
const POINTS = [
  {
    title: "Practical Security Expertise",
    text: "Real-world security expertise that goes beyond checklists and templates. We help you implement controls that actually work within your business."
  },
  {
    title: "Built to Stand Up to Scrutiny",
    text: "Security and compliance programs designed to withstand scrutiny from auditors, enterprise customers and regulators."
  },
  {
    title: "An Extension of Your Team",
    text: "A dedicated team working alongside your engineering, operations and leadership teams \u2014 helping you build and operate security and compliance year-round.",
    highlight: true
  },
  {
    title: "Platform-agnostic approach",
    text: "We work across all major GRC automation platforms \u2014 Drata, Vanta and Scrut \u2014 or none at all."
  }
];
function WhyUs() {
  const ref = useReveal();
  return <section className="why" id="about">
      <div className="why__inner" ref={ref}>
        <div className="why__left">
          <p className="why__eyebrow" data-reveal>
            Why Mr. Compliance
          </p>
          <h2 className="why__title" data-reveal>
            A structured path
            <br />
            to <span>certification</span>.
          </h2>
          <p className="why__lede" data-reveal>
            We partner with startups and enterprises to design, implement and
            achieve certifications across leading frameworks — and we stay with
            you through the audit itself.
          </p>
          <a
    className="why__link"
    href="https://www.mrcompliance.co/about-us/"
    target="_blank"
    rel="noreferrer"
    data-reveal
  >
            View details ↗︎
          </a>
        </div>

        <div className="why__right">
          {POINTS.map((p, i) => <article
    className={`why__point ${p.highlight ? "why__point--highlight" : ""}`}
    key={p.title}
    data-reveal
  >
              <span className="why__index">0{i + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </article>)}
        </div>
      </div>
    </section>;
}
export {
  WhyUs as default
};
