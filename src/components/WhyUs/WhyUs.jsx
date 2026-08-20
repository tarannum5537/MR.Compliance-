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
    text: "A dedicated team working alongside your engineering, operations and leadership teams  helping you build and operate security and compliance year-round.",
  
    
  },
  {
    title: "Platform-agnostic approach",
    text: "We work across all major GRC automation platforms Drata, Vanta and Scrut  or none at all."
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
            A SECURITY PROGRAM
            <br />
             BUILT AROUND <span> YOUR BUSINESS</span>.
          </h2>
          <p className="why__lede" data-reveal>
           We don't just help you pass an audit. We help you build the security, compliance and risk capabilities your business needs to win customers, reduce risk and scale with confidence.
          </p>
        <Link
  className="why__link"
  to="/about-us"
  data-reveal
>
  View details ↗︎
</Link>
        </div>

        <div className="why__right">
          {POINTS.map((p, i) => <article
  className="why__point"
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
