import useReveal from "../../hooks/useReveal";
import "./Process.scss";
const STEPS = [
  {
    n: "01",
    label: "ASSESS",
    title: "Understand Where You Stand",
    text: "Assess your current security, compliance and risk posture. Identify gaps, priorities and the path forward.",
    active: true
  },
  {
    n: "02",
    label: "BUILD",
    title: "Design the Right Program",
    text: "Build the policies, controls, processes and security foundations aligned with your business and regulatory requirements."
  },
  {
    n: "03",
    label: "IMPLEMENT",
    title: "Turn Requirements Into Reality",
    text: "Work alongside your teams to implement controls, remediate gaps and integrate security into day-to-day operations."
  },
  {
    n: "04",
    label: "OPERATE",
    title: "Keep Security & Compliance Running",
    text: "Manage evidence, risks, policies, questionnaires, monitoring and compliance activities throughout the year."
  },
  {
    n: "05",
    label: "IMPROVE",
    title: "Continuously Raise the Bar",
    text: "Prepare for audits, respond to changing requirements and continuously strengthen your security program as your business grows."
  }
];
function Process() {
  const ref = useReveal();
  return <section className="process" id="process">
      <div className="process__inner" ref={ref}>
        <header className="process__head">
          <p className="process__eyebrow" data-reveal>
            Our simple 5-step process
          </p>
          <h2 className="process__title" data-reveal>
            From security gaps
            <br />
            <span>to a program that works.</span>
          </h2>
          <p className="process__lead" data-reveal>
            We take you from where you are today to a security and compliance
            program that is implemented, operational and continuously improving.
          </p>
        </header>

        <ol className="ptl">
          {STEPS.map((s, i) => <li
    className={`ptl__row ${i % 2 === 0 ? "ptl__row--left" : "ptl__row--right"}`}
    key={s.n}
    data-reveal
  >
              <span
    className={`ptl__node ${s.active ? "ptl__node--active" : ""}`}
    aria-hidden="true"
  />
              <span className="ptl__connector" aria-hidden="true" />
              <div className="ptl__block" tabIndex={0}>
                <p className="ptl__num">
                  {s.n} — {s.label}
                </p>
                <h3>{s.title}</h3>
                <p className="ptl__text">{s.text}</p>
              </div>
            </li>)}
        </ol>
      </div>
    </section>;
}
export {
  Process as default
};
