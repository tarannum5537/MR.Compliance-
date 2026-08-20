import { Link } from "react-router-dom";
import logo from "../../assets/images/mr-compliance-logo.png";
import "./Footer.scss";
const QUICK = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-study" },
  { label: "Partners", to: "/partners" },
  { label: "Contact Us", to: "/contact-us" }
];
const SERVICES = [
  { label: "SOC 2 Type 1 / Type 2", href: "https://www.mrcompliance.co/service/59/" },
  {
    label: "ISO 27001 Certification",
    href: "https://www.mrcompliance.co/service/iso-27001-certification-services/"
  },
  { label: "PCI DSS", href: "https://www.mrcompliance.co/service/pci-dss/" },
  { label: "Cloud Security", href: "https://www.mrcompliance.co/service/cloud-security/" },
  { label: "GDPR Compliance", href: "https://www.mrcompliance.co/service/gdpr-compliance/" }
];
function Footer() {
  return <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Mr. Compliance" />
          <p>
            Mr. Compliance helps growing companies build, implement, and operate their security and compliance programs - so they can win enterprise customers, reduce risk, and scale with confidence.
          </p>
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h3>Quick Links</h3>
          {QUICK.map((l) => <Link key={l.label} to={l.to}>
              {l.label}
            </Link>)}
        </nav>

        <nav className="footer__col" aria-label="Services">
          <h3>Services</h3>
          {SERVICES.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>)}
        </nav>

        <div className="footer__col">
          <h3>Offices</h3>
          <div className="footer__office">
            <strong>India</strong>
            <span>Phone: +91 00000 00000</span>
            <span>
              4th Floor, Business Plaza, Andheri East, Mumbai, Maharashtra
              400069, India
            </span>
          </div>
          <div className="footer__office">
            <strong>USA</strong>
            <span>Phone: +1 000 000 0000</span>
            <span>
              350 Fifth Avenue, Suite 4200, New York, NY 10118, United States
            </span>
          </div>
        </div>

        <div className="footer__col">
          <h3>Contact</h3>
          <a href="mailto:support@mrcompliance.co">support@mrcompliance.co</a>
          
        </div>
      </div>

      <div className="footer__bar">
        <span>© {(/* @__PURE__ */ new Date()).getFullYear()} Mr. Compliance. All rights reserved.</span>
        <span className="footer__frameworks">
          SOC 2 · ISO 27001 · PCI DSS · HIPAA · GDPR · NIST
        </span>
      </div>
    </footer>;
}
export {
  Footer as default
};
