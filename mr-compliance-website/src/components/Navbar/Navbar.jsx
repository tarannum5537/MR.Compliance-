import { useEffect, useState } from "react";
import logo from "../../assets/images/mr-compliance-logo.png";
import "./Navbar.scss";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export const BOOKING_URL = "https://calendly.com/adarshkumar-mrcompliance/30min";

export default function Navbar() {
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

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#home" aria-label="Mr. Compliance home">
          <img src={logo} alt="Mr. Compliance" />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
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

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="nav__mobile-cta"
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Book Free Assessment ↗
          </a>
        </div>
      )}
    </header>
  );
}
