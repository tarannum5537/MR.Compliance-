import { Link } from "react-router-dom";
import logo from "../../assets/images/mr-compliance-logo.png";
import "./Footer.scss";

const QUICK = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-study" },
  { label: "Partners", to: "/partners" },
  { label: "Contact Us", to: "/contact-us" },
];

const SERVICES = [
  { label: "SOC 2 Type 1 / Type 2", slug: "soc-2-type-1-type-2" },
  {
    label: "ISO 27001 Certification",
    slug: "iso-27001-certification-services",
  },
  { label: "PCI DSS", slug: "pci-dss" },
  { label: "Cloud Security", slug: "cloud-security" },
  { label: "GDPR Compliance", slug: "gdpr-compliance" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Mr. Compliance" />
          <p>
            Mr. Compliance helps growing companies build, implement, and operate
            their security and compliance programs - so they can win enterprise
            customers, reduce risk, and scale with confidence.
          </p>
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h3>Quick Links</h3>
          {QUICK.map((l) => (
            <Link key={l.label} to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>

        <nav className="footer__col" aria-label="Services">
          <h3>Services</h3>
          {SERVICES.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>
              {s.label}
            </Link>
          ))}
        </nav>

        <div className="footer__col">
          <h3>Offices</h3>
          <div className="footer__office">
            <strong>India</strong>
            <span>Phone: +91 7634076777</span>
            <span>15, 2nd floor, cross road buildings Wakad pune 411057</span>
          </div>
          <div className="footer__office">
            <strong>USA</strong>
            <span>971 US Hwy 202N, Ste R, Branchburg, NJ 08876</span>
          </div>
        </div>

        <div className="footer__col">
          <h3>Contact</h3>
          <a href="mailto:support@mrcompliance.co">support@mrcompliance.co</a>
        </div>
      </div>

      <div className="footer__bar">
        <span>
          © {new Date().getFullYear()} Mr. Compliance. All rights reserved.
        </span>
        <span className="footer__frameworks">
          SOC 2 · ISO 27001 · PCI DSS · HIPAA · GDPR · NIST
        </span>
      </div>
    </footer>
  );
}

export { Footer as default };
