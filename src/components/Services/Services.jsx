import { useState } from "react";
import useReveal from "../../hooks/useReveal";
import "./Services.scss";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    id: "soc2",
    name: "SOC 2 Type 1 / Type 2",
    kind: " Security & Compliance",
    text: "Build, implement and operate a SOC 2 program that supports enterprise sales, customer trust and long-term compliance.",
    href: "/services/soc2"
  },
 {
  id: "hipaa",
  name: "HIPAA",
  kind: "Healthcare Compliance",
  text: "Build and maintain a practical HIPAA compliance program that protects sensitive health information, strengthens security controls and supports regulatory requirements.",
  href: "/services/hipaa"
},
  {
    id: "iso",
    name: "ISO 27001",
    kind: "Certification Services",
    text: "Build an information security management system designed for real-world operations, certification and continuous improvement.",
    href: "/services/iso-27001"
  },
  {
    id: "pci",
    name: "PCI DSS",
    kind: "Payment Security",
    text: "Protect payment environments, meet PCI DSS requirements and build security controls that scale with your business.",
    href: "/services/pci-dss"
  },
  {
    id: "cloud",
    name: "Cloud Security",
    kind: "Security Engineering",
    text: "Secure your cloud environment across AWS, Azure and GCP with practical controls, monitoring, risk management and security engineering.",
    href: "/services/cloud-security"
  }
];

function ArrowIcon({ className }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Services() {
  const ref = useReveal();
  const [active, setActive] = useState("soc2");

  return (
    <section className="services" id="services">
      <div className="services__inner" ref={ref}>
        <header className="services__head">
          <p className="services__eyebrow" data-reveal>
            Our Services
          </p>
          <h2 className="services__title" data-reveal>
            SECURITY & <span>COMPLIANCE, </span>
            <br />
            BUILT TO SCALE.
          </h2>
        </header>

        <div className="services__list">
  {SERVICES.map((s, i) => {
    const open = active === s.id;

    return (
      <div
        key={s.id}
        className={`services__row ${open ? "is-open" : ""}`}
        data-reveal
        onMouseEnter={() => setActive(s.id)}
      >
        <button
          className="services__row-head"
          aria-expanded={open}
          onClick={() => setActive(s.id)}
        >
          <span className="services__num">0{i + 1}</span>
          <span className="services__name">{s.name}</span>
          <span className="services__kind">{s.kind}</span>
          <ArrowIcon className="services__mark" />
        </button>

        <div className="services__body">
          <div className="services__body-inner">
            <p>{s.text}</p>

            <Link className="service__link" to={s.href}>
              View service <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    );
  })}
</div>

<div className="services__all">
  <Link to="/services/" className="services__all-link">
    <span>View all services</span>
    <ArrowIcon />
  </Link>
</div>
      </div>
    </section>
  );
}

export { Services as default };