import React, { useEffect, useRef } from "react";
import "./Founder.scss";
import FOUNDER_IMAGE from "../../assets/images/Founder.png";
/**
 * Founder — isolated "Meet Our Founder" section.
 * Replace FOUNDER_IMAGE with your final portrait path.
 */


const LINKEDIN_URL = "https://www.linkedin.com/in/adarsh-mrcompliance/";

function IconAward() {
  return (
    <svg
      className="mc-founder__highlight-icon-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      className="mc-founder__highlight-icon-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg
      className="mc-founder__highlight-icon-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg
      className="mc-founder__cta-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const HIGHLIGHTS = [
  {
    icon: IconAward,
    title: "CISM Certified",
    text: "Certified Information Security Manager (ISACA)",
  },
  {
    icon: IconShield,
    title: "GRC & Audit Expertise",
    text: "SOC 2, ISO 27001, GDPR and compliance frameworks",
  },
  {
    icon: IconUsers,
    title: "Third-Party Risk Management",
    text: "Helping organizations assess and manage vendor risk",
  },
];

export default function Founder() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const targets = root.querySelectorAll(".mc-founder__reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mc-founder__reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="mc-founder-heading"
      className="mc-founder"
    >
      {/* Subtle background detail */}
      <div aria-hidden="true" className="mc-founder__bg" />

      <div className="mc-founder__container">
        <div className="mc-founder__reveal">
          <p className="mc-founder__eyebrow">Meet Our Founder</p>
          <h2 id="mc-founder-heading" className="mc-founder__heading">
            Leadership. Vision.{" "}
            <span className="mc-founder__heading-accent">Commitment.</span>
          </h2>
        </div>

        <div className="mc-founder__reveal mc-founder__reveal--delay">
          <div className="mc-founder__card">
            {/* Portrait */}
            <div className="mc-founder__portrait">
              <img
                src={FOUNDER_IMAGE}
                alt="Adarsh Kumar, CISM — Founder of Mr.Compliance"
                width={1024}
                height={1280}
                loading="lazy"
                className="mc-founder__portrait-img"
              />
              <div aria-hidden="true" className="mc-founder__portrait-fade" />
              <div className="mc-founder__portrait-badge">
                <p className="mc-founder__portrait-name">Adarsh Kumar, CISM</p>
                <p className="mc-founder__portrait-role">
                  Founder, Mr.Compliance
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="mc-founder__info">
              <div>
                <h3 className="mc-founder__name">Adarsh Kumar, CISM</h3>
                <p className="mc-founder__role">Founder, Mr.Compliance</p>
              </div>

              <p className="mc-founder__bio">
                Adarsh Kumar, CISM, is an Information Security and GRC
                professional with expertise in SOC 2, compliance, and
                Third-Party Risk Management.
              </p>
              <p className="mc-founder__bio mc-founder__bio--tight">
                As the Founder of Mr.Compliance, he is focused on helping
                organizations build practical compliance programs, strengthen
                security, and earn customer trust.
              </p>

              <ul className="mc-founder__highlights">
                {HIGHLIGHTS.map((h) => (
                  <li key={h.title} className="mc-founder__highlight">
                    <span className="mc-founder__highlight-icon">
                      <h.icon />
                    </span>
                    <div>
                      <p className="mc-founder__highlight-title">{h.title}</p>
                      <p className="mc-founder__highlight-text">{h.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mc-founder__cta"
                >
                  <IconLinkedIn />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
