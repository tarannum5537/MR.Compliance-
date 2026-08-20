import useReveal from "../../hooks/useReveal";
import "./Careers.scss";
function Careers() {
  const ref = useReveal();
  return <section className="careers">
      <div className="careers__inner" ref={ref}>
        <div className="careers__card" data-reveal>
          <div>
            <p className="careers__eyebrow">Careers</p>
            <h2 className="careers__title">
              BUILD THE FUTURE OF  <span>SECURITY & COMPLIANCE.</span>
            </h2>
            <p className="careers__text">
              We're building a team of security, compliance and risk professionals helping growing companies build programs that actually work.
            </p>
          </div>

          <a className="careers__mail" href="mailto:hr@mrcompliance.co">
            <span>Send your resume</span>
            <strong>hr@mrcompliance.co ↗︎</strong>
          </a>
        </div>
      </div>
    </section>;
}
export {
  Careers as default
};
