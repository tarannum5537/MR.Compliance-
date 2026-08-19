import { useState } from "react";
import useReveal from "../../hooks/useReveal";
import "./Services.scss";
const SERVICES = [
  {
    id: "soc2",
    name: "SOC 2 Type 1 / Type 2",
    kind: "Audit Services",
    text: "End-to-end SOC 2 readiness and audit support \u2014 control design, policy build, evidence collection and direct coordination with your auditor.",
    href: "https://www.mrcompliance.co/service/59/"
  },
  {
    id: "iso",
    name: "ISO 27001",
    kind: "Certification Services",
    text: "ISMS design and implementation aligned to ISO 27001, from risk assessment and Statement of Applicability through Stage 1 and Stage 2 certification.",
    href: "https://www.mrcompliance.co/service/iso-27001-certification-services/"
  },
  {
    id: "pci",
    name: "PCI DSS",
    kind: "Payment Security",
    text: "Scoping, gap assessment and remediation for cardholder data environments so payment operations meet PCI DSS requirements.",
    href: "https://www.mrcompliance.co/service/pci-dss/"
  },
  {
    id: "cloud",
    name: "Cloud Security",
    kind: "Security Engineering",
    text: "Platform-agnostic cloud hardening and security architecture reviews that keep your infrastructure audit-ready as you scale.",
    href: "https://www.mrcompliance.co/service/cloud-security/"
  },
  {
    id: "gdpr",
    name: "GDPR",
    kind: "Data Privacy",
    text: "Privacy program design, data mapping and documentation to meet GDPR obligations across your products and vendors.",
    href: "https://www.mrcompliance.co/service/gdpr-compliance/"
  }
];
function Services() {
  const ref = useReveal();
  const [active, setActive] = useState("soc2");
  return <section className="services" id="services">
      <div className="services__inner" ref={ref}>
        <header className="services__head">
          <p className="services__eyebrow" data-reveal>
            Our Services
          </p>
          <h2 className="services__title" data-reveal>
            Certification programs,
            <br />
            built and <span>delivered</span>.
          </h2>
        </header>

        <div className="services__list">
          {SERVICES.map((s, i) => {
    const open = active === s.id;
    return <div
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
                  <span className="services__num">
                    0{i + 1}
                  </span>
                  <span className="services__name">{s.name}</span>
                  <span className="services__kind">{s.kind}</span>
                  <span className="services__mark" aria-hidden="true">
                    ↗︎
                  </span>
                </button>

                <div className="services__body">
                  <div className="services__body-inner">
                    <p>{s.text}</p>
                    <a href={s.href} target="_blank" rel="noreferrer">
                      View service ↗︎
                    </a>
                  </div>
                </div>
              </div>;
  })}
        </div>
      </div>
    </section>;
}
export {
  Services as default
};
