import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Careers.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
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
    <section className="careers">
      <div className="careers__inner" ref={ref}>
        <div className="careers__card" data-reveal>
          <div>
            <p className="careers__eyebrow">Careers</p>
            <h2 className="careers__title">
              Join the <span>GRC Ninjas</span>
            </h2>
            <p className="careers__text">
              We're growing and looking for passionate GRC professionals. Want to
              build your career in SOC 2, ISO 27001, and other global compliance
              frameworks?
            </p>
          </div>

          <a className="careers__mail" href="mailto:hr@mrcompliance.co">
            <span>Send your resume</span>
            <strong>hr@mrcompliance.co ↗</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
