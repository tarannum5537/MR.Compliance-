import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BOOKING_URL } from "../Navbar/Navbar";
import "./Contact.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
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
    <section className="contact" id="contact">
      <div className="contact__inner" ref={ref}>
        <p className="contact__eyebrow" data-reveal>
          Schedule free assessment
        </p>

        <h2 className="contact__title" data-reveal>
          Ready to build a stronger
          <br />
          <span>compliance</span> program?
        </h2>

        <p className="contact__text" data-reveal>
          Book a 30-minute consultation with our compliance experts. We'll
          discuss your needs and create a custom roadmap to certification.
        </p>

        <div className="contact__actions" data-reveal>
          <a
            className="btn btn--primary"
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
          >
            Book Free Assessment <span aria-hidden="true">↗</span>
          </a>
          <a className="btn btn--ghost" href="mailto:support@mrcompliance.co">
            support@mrcompliance.co
          </a>
        </div>
      </div>
    </section>
  );
}
