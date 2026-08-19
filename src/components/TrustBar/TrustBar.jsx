import useReveal from "../../hooks/useReveal";
import "./TrustBar.scss";
const STATS = [
  { value: "200+", label: "Companies Guided" },
  { value: "100%", label: "Audit Pass Rate" },
  { value: "8 Weeks", label: "Certification Journey" }
];
function TrustBar() {
  const ref = useReveal();
  return <section className="trust">
      <div className="trust__inner" ref={ref}>
        <div className="trust__card">
          {STATS.map((s) => <div className="trust__item" key={s.label} data-reveal>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>)}
        </div>
      </div>
    </section>;
}
export {
  TrustBar as default
};
