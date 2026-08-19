import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BOOKING_URL } from "../Navbar/Navbar";
import "./Hero.scss";

const TYPED = [
  "Certified for SOC 2",
  "Certified for ISO 27001",
  "Certified for HIPAA",
  "Certified for PCI DSS",
];

const FRAMEWORKS = ["SOC 2", "ISO 27001", "PCI DSS", "HIPAA"];

/** Slow, subtle typewriter for the line under the headline. */
function useTypewriter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = TYPED[index] ?? "";
    const done = !deleting && text === full;
    const empty = deleting && text === "";

    const delay = done ? 1800 : empty ? 300 : deleting ? 34 : 68;

    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (empty) {
        setDeleting(false);
        setIndex((i) => (i + 1) % TYPED.length);
        return;
      }
      setText(full.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return text;
}

export default function Hero() {
  const rootRef = useRef(null);
  const typed = useTypewriter();

  useEffect(() => {
    // Single staggered entrance. No scroll or pointer driven motion here.
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        y: 26,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.09,
      });
      gsap.from(".hero__panel", {
        y: 34,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={rootRef}>
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow" data-hero-reveal>
            Cybersecurity &amp; Compliance Advisory
          </p>

          <h1 className="hero__title" data-hero-reveal>
            Build trust.
            <br />
            Stay secure.
            <br />
            Get <span>certified</span>.
          </h1>

          <p className="hero__typed" data-hero-reveal>
            <span>{typed}</span>
            <i aria-hidden="true" />
          </p>

          <p className="hero__lede" data-hero-reveal>
            Mr. Compliance is a global cybersecurity and compliance advisory firm
            helping startups and enterprises navigate complex regulatory
            landscapes and achieve certifications across SOC 2, ISO 27001, PCI
            DSS, HIPAA, GDPR and NIST.
          </p>

          <div className="hero__actions" data-hero-reveal>
            <a
              className="btn btn--primary"
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
            >
              Book Free Assessment <span aria-hidden="true">↗</span>
            </a>
            <a className="btn btn--ghost" href="#services">
              Explore Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Static compliance command-center panel. Fixed in place by design. */}
        <aside className="hero__panel" aria-label="Compliance readiness overview">
          <div className="hero__panel-head">
            <span className="hero__panel-label">Security Status</span>
            <span className="hero__live">
              <i /> Live
            </span>
          </div>

          <ul className="hero__list">
            {FRAMEWORKS.map((f) => (
              <li key={f}>
                <span>{f}</span>
                <em>Ready</em>
              </li>
            ))}
          </ul>

          <div className="hero__meter">
            <div className="hero__meter-top">
              <span>Audit Readiness</span>
              <strong>92%</strong>
            </div>
            <div className="hero__bar">
              <i style={{ width: "92%" }} />
            </div>
          </div>

          <div className="hero__foot">
            <span>Controls mapped</span>
            <span>Evidence collected</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
