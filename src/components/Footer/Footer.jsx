import { Link } from "react-router-dom";
import logo from "../../assets/images/mr-compliance-logo.png";
import indiaFlag from "../../assets/images/india-flag.png";
import usaFlag from "../../assets/images/usa-flag.png";
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
  {
    label: "SOC 2 Type 1 / Type 2",
    slug: "soc2",
  },
  {
    label: "ISO 27001 Certification",
    slug: "iso-27001",
  },
  {
    label: "PCI DSS",
    slug: "pci-dss",
  },
  {
    label: "Cloud Security",
    slug: "cloud-security",
  },
  {
    label: "GDPR Compliance",
    slug: "gdpr-privacy",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Mr.Compliance" />
          <p>
            Mr.Compliance helps growing companies build, implement, and operate
            their security and compliance programs - so they can win enterprise
            customers, reduce risk, and scale with confidence.
          </p>
          <a
  href="https://www.linkedin.com/company/mrcompliance/"
  target="_blank"
  rel="noopener noreferrer"
  className="footer__linkedin"
  aria-label="Mr.Compliance on LinkedIn"
>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M6.5 8.5H3.5V20H6.5V8.5ZM5 4C4.04 4 3.25 4.79 3.25 5.75S4.04 7.5 5 7.5s1.75-.79 1.75-1.75S5.96 4 5 4ZM20.5 13.4C20.5 10.2 18.8 8.5 16.4 8.5C14.9 8.5 13.9 9.3 13.3 10.2V8.5H10.5V20H13.5V14.3C13.5 12.8 13.8 11.5 15.2 11.5C16.6 11.5 16.5 12.8 16.5 14.4V20H20.5V13.4Z"
      fill="currentColor"
    />
  </svg>
</a>
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
    <strong>
      India
      <img
        src={indiaFlag}
        alt="India"
        className="footer__flag"
      />
    </strong>

    <span>Phone: +91 7634076777</span>
    <span>603, White Square, Hinjewadi-Wakad Road, Bridge, near Wakad, Maharashtra 411057</span>
  </div>

  <div className="footer__office">
    <strong>
      USA
      <img
        src={usaFlag}
        alt="USA"
        className="footer__flag"
      />
    </strong>

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
          © {new Date().getFullYear()} Mr.Compliance. All rights reserved.
        </span>
        <span className="footer__frameworks">
          SOC 2 · ISO 27001 · PCI DSS · HIPAA · GDPR · NIST
        </span>
      </div>
    </footer>
  );
}

export { Footer as default };
