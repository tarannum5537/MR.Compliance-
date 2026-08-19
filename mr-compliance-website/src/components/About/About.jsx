import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.scss";

const POINTS = [
  {
    title: "Practical security expertise",
    text: "Trusted by global startups for practical security and compliance expertise — not theory, not templates.",
  },
  {
    title: "Audit-ready implementations",
    text: "Controls, policies and evidence built to survive real auditor scrutiny from day one.",
  },
  {
    title: "Dedicated compliance experts",
    text: "A named expert leads your program end-to-end, with weekly check-ins that keep the timeline honest.",
  },
  {
    title: "Platform-agnostic approach",
    text: "We work across all major GRC automation platforms — Drata, Vanta and Scrut — or none at all.",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
    <section className="why" id="about">
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
            View details ↗
          </a>
        </div>

        <div className="why__right">
          {POINTS.map((p, i) => (
            <article className="why__point" key={p.title} data-reveal>
              <span className="why__index">0{i + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
