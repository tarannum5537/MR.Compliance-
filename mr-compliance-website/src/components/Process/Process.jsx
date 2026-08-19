import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Process.scss";

const STEPS = [
  {
    n: "01",
    title: "Discovery Call",
    text: "Free 30-minute consultation to understand your needs, timeline, and compliance goals. No sales pressure.",
  },
  {
    n: "02",
    title: "Gap Assessment",
    text: "We audit your current security posture, identify gaps, and create a detailed roadmap to certification.",
  },
  {
    n: "03",
    title: "Implementation",
    text: "We work together to implement controls, create policies, and build evidence. Weekly check-ins keep us on track.",
  },
  {
    n: "04",
    title: "Audit Success",
    text: "We coordinate directly with the auditors, answer their questions, and ensure you pass your audit successfully.",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const ref = useRef(null);

  // Fade + rise every [data-reveal] child when this section scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray("[data-reveal]");
      if (!targets.length) return;

      gsap.from(targets, {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process" id="process">
      <div className="process__inner" ref={ref}>
        <header className="process__head">
          <p className="process__eyebrow" data-reveal>
            Our simple 4-step process
          </p>
          <h2 className="process__title" data-reveal>
            Transparent, efficient,
            <br />
            designed to get you <span>certified fast</span>.
          </h2>
        </header>

        <div className="process__grid">
          {STEPS.map((s) => (
            <article className="process__step" key={s.n} data-reveal>
              <span className="process__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
