import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/mr-compliance-logo.png";
import "./Navbar.scss";
const LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-study" },
  { label: "Partners", to: "/partners" },
  { label: "Contact Us", to: "/contact-us" }
];
const BOOKING_URL = "https://calendly.com/adarshkumar-mrcompliance/30min";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <Link className="nav__brand" to="/" aria-label="Mr. Compliance home">
          <img src={logo} alt="Mr. Compliance" />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => <Link key={l.to} to={l.to}>
              {l.label}
            </Link>)}
        </nav>

        <a
    className="nav__cta"
    href={BOOKING_URL}
    target="_blank"
    rel="noreferrer"
  >
          Book Free Assessment <span aria-hidden="true">↗</span>
        </a>

        <button
    className="nav__burger"
    aria-label={open ? "Close menu" : "Open menu"}
    aria-expanded={open}
    onClick={() => setOpen((v) => !v)}
  >
          <span className={open ? "is-open" : ""} />
          <span className={open ? "is-open" : ""} />
        </button>
      </div>

      {open && <div className="nav__mobile">
          {LINKS.map((l) => <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </Link>)}
          <a
    className="nav__mobile-cta"
    href={BOOKING_URL}
    target="_blank"
    rel="noreferrer"
    onClick={() => setOpen(false)}
  >
            Book Free Assessment ↗
          </a>
        </div>}
    </header>;
}
export {
  BOOKING_URL,
  Navbar as default
};
