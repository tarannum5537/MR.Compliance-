import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BOOKING_URL } from "../Navbar/Navbar";
import "./Hero.scss";
const TYPED = [
  "Certified for SOC 2",
  "Certified for ISO 27001",
  "Certified for HIPAA",
  "Certified for PCI DSS"
];
const MARQUEE_ITEMS = [
  "PENTEST",
  "RISK ASSESSMENT",
  "CLOUD SECURITY",
  "SOC 2",
  "ISO 27001",
  "NIS2",
  "GDPR",
  "DORA",
  "C5",
  "HIPAA",
  "HITRUST",
  "CMMC / FEDRAMP",
  "vCISO"
];
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
function Hero() {
  const rootRef = useRef(null);
  const typed = useTypewriter();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        y: 26,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.09
      });
      gsap.from(".hero__marquee", {
        y: 34,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out"
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);
  return <section className="hero" id="home" ref={rootRef}>
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow" data-hero-reveal>
            Cybersecurity • Compliance • Trust
          </p>

          <h1 className="hero__title" data-hero-reveal>
            Build trust.
            <br />
            Stay secure.
            <br />
            Grow with <span>confidence</span>.
          </h1>

          <p className="hero__typed" data-hero-reveal>
            <span>{typed}</span>
            <i aria-hidden="true" />
          </p>

          <p className="hero__lede" data-hero-reveal>
            Mr. Compliance helps growing companies build, implement, and operate their security and compliance programs - so they can win enterprise customers, reduce risk, and scale with confidence.
          </p>

          <div className="hero__actions" data-hero-reveal>
            <a
    className="btn btn--primary"
    href={BOOKING_URL}
    target="_blank"
    rel="noreferrer"
  >
              Book Free Assessment <span aria-hidden="true">↗︎</span>
            </a>
            <a className="btn btn--ghost" href="#services">
              Explore Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {
    /* Vertical service marquee */
  }
        <aside className="hero__marquee" aria-label="Service offerings">
          <div className="hero__track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => <div className="hero__card" key={`${item}-${i}`}>
                <span>{item}</span>
                <i aria-hidden="true" />
              </div>)}
          </div>
        </aside>
      </div>
    </section>;
}
export {
  Hero as default
};
