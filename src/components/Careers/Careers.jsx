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
              Join the <span>GRC Ninjas</span>
            </h2>
            <p className="careers__text">
              We're growing and looking for passionate GRC professionals. Want to
              build your career in SOC 2, ISO 27001, and other global compliance
              frameworks?
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
