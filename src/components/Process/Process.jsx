import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useReveal from "../../hooks/useReveal";
import "./Process.scss";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    n: "01",
    label: "ASSESS",
    title: "Understand Where You Stand",
    text: "Assess your current security, compliance and risk posture. Identify gaps, priorities and the path forward."
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
  const rowRefs = useRef([]);
  const nodeRefs = useRef([]);

  useEffect(() => {
    const triggers = [];

    rowRefs.current.forEach((row, i) => {
      const node = nodeRefs.current[i];

      const st = ScrollTrigger.create({
        trigger: row,
        start: "top center",
        end: "bottom center",
        // markers: true, // debug ke liye on kar sakte ho
        onEnter: () => activate(node),
        onEnterBack: () => activate(node),
        onLeave: () => deactivate(node),
        onLeaveBack: () => deactivate(node)
      });

      triggers.push(st);
    });

 function activate(node) {
  gsap.to(node, {
    backgroundColor: "var(--lime)",
    borderColor: "var(--lime)",
    boxShadow: `
      0 0 0 8px rgba(163, 255, 18, 0.25),
      0 0 20px 6px rgba(163, 255, 18, 0.55),
      0 0 40px 12px rgba(163, 255, 18, 0.3)
    `,
    duration: 0.35,
    ease: "power2.out"
  });
}
    function deactivate(node) {
      gsap.to(node, {
        backgroundColor: "var(--black)",
        borderColor: "rgba(163, 255, 18, 0.55)",
        boxShadow: "0 0 0 0px rgba(163, 255, 18, 0)",
        duration: 0.35,
        ease: "power2.out"
      });
    }

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="process" id="process">
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
          {STEPS.map((s, i) => (
            <li
              className={`ptl__row ${i % 2 === 0 ? "ptl__row--left" : "ptl__row--right"}`}
              key={s.n}
              data-reveal
              ref={(el) => (rowRefs.current[i] = el)}
            >
              <span
                className="ptl__node"
                aria-hidden="true"
                ref={(el) => (nodeRefs.current[i] = el)}
              />
              <span className="ptl__connector" aria-hidden="true" />
              <div className="ptl__block">
                <p className="ptl__num">
                  {s.n} — {s.label}
                </p>
                <h3>{s.title}</h3>
                <p className="ptl__text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export { Process as default };