import useReveal from "../../hooks/useReveal";
import healthcare from "../../assets/images/case-healthcare.png";
import portqii from "../../assets/images/case-portqii.png";
import "./CaseStudies.scss";
import { Link } from "react-router-dom";
const CASES = [
  {
    tag: "Healthcare",
    title: "Takeoff41- SOC2 & HIPAA Certificate",
    img: healthcare,
    href: "/study/Takeoff41-%20SOC2%20&%20HIPAA%20certificate/",
  },
  {
    tag: "SaaS / SOC 2",
    title: "Portqii SOC2 Journey",
    img: portqii,
    href: "/study/portqii-soc2-journey",
  },
];
function CaseStudies() {
  const ref = useReveal();
  return (
    <section className="cases" id="case-studies">
      <div className="cases__inner" ref={ref}>
        <header className="cases__head">
          <p className="cases__eyebrow" data-reveal>
            Case Studies
          </p>
          <h2 className="cases__title" data-reveal>
            SECURITY PROGRAMS IN <span>ACTION</span>.
          </h2>

          <p className="Para">
            Real-world security, compliance and risk programs built to help
            companies meet requirements, win customers and operate with
            confidence.
          </p>
        </header>

        <div className="cases__grid">
          {CASES.map((c, i) => (
            <Link
              className={`cases__card cases__card--${i}`}
              key={c.title}
              to={c.href}
              data-reveal
            >
              <div className="cases__media">
                <img src={c.img} alt={c.title} loading="lazy" />
                <span className="cases__tag">{c.tag}</span>
              </div>
              <div className="cases__meta">
                <h3>{c.title}</h3>
                <em aria-hidden="true">↗︎</em>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export { CaseStudies as default };
