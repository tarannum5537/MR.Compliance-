import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TrustBar.scss";

const STATS = [
  { value: "200+", label: "Companies Guided" },
  { value: "100%", label: "Audit Pass Rate" },
  { value: "8 Weeks", label: "Certification Journey" },
];

gsap.registerPlugin(ScrollTrigger);

export default function TrustBar() {
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
    <section className="trust">
      <div className="trust__inner" ref={ref}>
        <div className="trust__card">
          {STATS.map((s) => (
            <div className="trust__item" key={s.label} data-reveal>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
