import useReveal from "../../hooks/useReveal";
import { BOOKING_URL } from "../Navbar/Navbar";
import "./Contact.scss";

function Contact() {
  const ref = useReveal();

  return (
    <section className="contact" id="contact">
      <div className="contact__inner" ref={ref}>
        <p className="contact__eyebrow" data-reveal>
         READY TO GET STARTED 
        </p>

        <h2 className="contact__title" data-reveal>
          READY TO STRENGTHEN YOUR
          <br />
          <span>SECURITY</span> PROGRAM?
        </h2>

        <p className="contact__text" data-reveal>
          Whether you are preparing for SOC 2, responding to enterprise requirements, or building your security program from the ground up, we will help you build what your business actually needs.
        </p>

        <div className="contact__actions" data-reveal>
          <span className="contact__question">
            Have questions?
          </span>

          <span className="contact__divider" aria-hidden="true" />

          <a
            className="contact__email"
            href="mailto:support@mrcompliance.co"
          >
            <svg
              className="contact__email-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M4 7L12 13L20 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            support@mrcompliance.co
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;