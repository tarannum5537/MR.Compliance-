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
  },
  {
    id: "gdpr",
    name: "GDPR",
    kind: "Data Privacy",
    text: "Build practical privacy programs that help you manage personal data, reduce regulatory risk and meet customer expectations.",
    href: "/services/gdpr-privacy"
  }
];

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
            SECURITY & <span>COMPLIANCE </span>,
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
                  <span className="services__mark" aria-hidden="true">
                    ↗︎
                  </span>
                </button>

                <div className="services__body">
                  <div className="services__body-inner">
                    <p>{s.text}</p>
                    <Link className="service__link" to={s.href}>
                      View service ↗
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Services as default };