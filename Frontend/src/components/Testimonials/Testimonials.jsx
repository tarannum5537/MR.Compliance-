import { useState } from "react";
import useReveal from "../../hooks/useReveal";
import "./Testimonials.scss";
const QUOTES = [
  {
    quote: "We worked with Mr.Compliance for our company's compliance with ISO 27001, GDPR, and SOC 2 Type 2. Collaborating with the team made the process much smoother. They are knowledgeable and provided us with helpful advice and support, helping us understand the requirements and implement the necessary security measures.",
    name: "Brian Ip",
    role: "Founder, Omni HR"
  },
  {
    quote: "Working with Mr.Compliance has been a pleasure. They operate with high integrity, diligence, and a methodical approach that aligns with our business needs. Their ability to grasp complex issues quickly and organise effective solutions has given us great confidence in having them manage our cyber security.",
    name: "Nasir",
    role: "CEO, Enablen"
  },
  {
    quote: "Mr.Compliance was instrumental in leading our SOC 2 and HIPAA compliance initiatives end-to-end. The team managed the entire implementation within Drata, acted as the primary point of contact for the auditors, and handled evidence collection efficiently. We successfully achieved certification without exceptions.",
    name: "Joe Phongpreecha",
    role: "Founder at takeoff41"
  },
  {
    quote: "Mr.Compliance helped us successfully navigate the complex process of SOC 2 certification and implementing Drata. The team's expertise and hands-on support made the entire process much easier. Thank you, Mr.Compliance!",
    name: "Jeremy Antoniuk",
    role: "Founder & CEO at Scalafai"
  }
];
function Testimonials() {
  const ref = useReveal();
  const [i, setI] = useState(0);
  const current = QUOTES[i];
  const go = (d) => setI((v) => (v + d + QUOTES.length) % QUOTES.length);
  return <section className="quotes" id="testimonials">
      <div className="quotes__inner" ref={ref}>
        <p className="quotes__eyebrow" data-reveal>
          What clients actually say
        </p>

        <blockquote className="quotes__body" data-reveal key={current.name}>
          <p>“{current.quote}”</p>
        </blockquote>

        <div className="quotes__foot" data-reveal>
          <div className="quotes__author">
            <strong>{current.name}</strong>
            <span>{current.role}</span>
          </div>

          <div className="quotes__nav">
            <button onClick={() => go(-1)} aria-label="Previous testimonial">
              ←
            </button>
            <span className="quotes__count">
              {String(i + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
            </span>
            <button onClick={() => go(1)} aria-label="Next testimonial">
              →
            </button>
          </div>
        </div>
      </div>
    </section>;
}
export {
  Testimonials as default
};
