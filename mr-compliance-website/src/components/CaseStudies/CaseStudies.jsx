import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import healthcare from "../../assets/images/healthcare-case-study.webp";
import portqii from "../../assets/images/portqii-case-study.jpg";
import "./CaseStudies.scss";

const CASES = [
  {
    tag: "Healthcare",
    date: "05 March 2026",
    title: "Strengthening Healthcare Security",
    img: healthcare,
    href: "https://www.mrcompliance.co/study/strengthening-healthcare-security/",
  },
  {
    tag: "SaaS / SOC 2",
    date: "25 February 2026",
    title: "Portqii SOC2 Journey",
    img: portqii,
    href: "https://www.mrcompliance.co/study/portqii-soc2-journey/",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
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
    <section className="cases" id="case-studies">
      <div className="cases__inner" ref={ref}>
        <header className="cases__head">
          <p className="cases__eyebrow" data-reveal>
            Case Studies
          </p>
          <h2 className="cases__title" data-reveal>
            Programs we <span>shipped</span>.
          </h2>
        </header>

        <div className="cases__grid">
          {CASES.map((c, i) => (
            <a
              className={`cases__card cases__card--${i}`}
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              data-reveal
            >
              <div className="cases__media">
                <img src={c.img} alt={c.title} loading="lazy" />
                <span className="cases__tag">{c.tag}</span>
              </div>
              <div className="cases__meta">
                <span>{c.date}</span>
                <h3>{c.title}</h3>
                <em aria-hidden="true">↗</em>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
