import logo from "../../assets/images/mr-compliance-logo.png";
import "./Footer.scss";

const QUICK = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
];

const SERVICES = [
  { label: "SOC 2 Type 1 / Type 2", href: "https://www.mrcompliance.co/service/59/" },
  {
    label: "ISO 27001 Certification",
    href: "https://www.mrcompliance.co/service/iso-27001-certification-services/",
  },
  { label: "PCI DSS", href: "https://www.mrcompliance.co/service/pci-dss/" },
  { label: "Cloud Security", href: "https://www.mrcompliance.co/service/cloud-security/" },
  { label: "GDPR Compliance", href: "https://www.mrcompliance.co/service/gdpr-compliance/" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Mr. Compliance" />
          <p>
            A global cybersecurity and compliance advisory firm helping companies
            navigate complex regulatory landscapes with confidence.
          </p>
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h3>Quick Links</h3>
          {QUICK.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <nav className="footer__col" aria-label="Services">
          <h3>Services</h3>
          {SERVICES.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__col">
          <h3>Contact</h3>
          <a href="mailto:support@mrcompliance.co">support@mrcompliance.co</a>
          <a href="mailto:hr@mrcompliance.co">hr@mrcompliance.co</a>
          <a href="https://wa.me/7634076777" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer__bar">
        <span>© {new Date().getFullYear()} Mr. Compliance. All rights reserved.</span>
        <span className="footer__frameworks">
          SOC 2 · ISO 27001 · PCI DSS · HIPAA · GDPR · NIST
        </span>
      </div>
    </footer>
  );
}
