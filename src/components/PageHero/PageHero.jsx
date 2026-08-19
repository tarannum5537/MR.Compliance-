import useReveal from "../../hooks/useReveal";
import "./PageHero.scss";
function PageHero({
  eyebrow,
  title,
  accent,
  text
}) {
  const ref = useReveal();
  return <section className="phero">
      <div className="phero__inner" ref={ref}>
        <p className="phero__eyebrow" data-reveal>
          {eyebrow}
        </p>
        <h1 className="phero__title" data-reveal>
          {title} {accent && <span>{accent}</span>}
        </h1>
        {text && <p className="phero__text" data-reveal>
            {text}
          </p>}
      </div>
    </section>;
}
export {
  PageHero as default
};
