import useSeo from "../../hooks/useSeo";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import PageHero from "../../components/PageHero/PageHero";
import useReveal from "../../hooks/useReveal";
import { CASE_STUDIES } from "../../data/caseStudies";
import "./CaseStudies.scss";
const TITLE = "Case Studies  Compliance Programs We Delivered | Mr. Compliance";
const DESC = "Real Mr. Compliance engagements: Takeoff41 healthcare security, Portqii's SOC 2 journey, the Automynd Vanta saga and Udemy SOX compliance.";
function CaseStudyPage() {
  useSeo({ title: TITLE, description: DESC, path: "/case-study/" });
  const ref = useReveal();
  return <PageLayout>
      <PageHero
    eyebrow="Case Study"
    title="Programs we"
    accent="shipped."
    text="A selection of compliance and security programs delivered end-to-end with our clients."
  />

      <div ref={ref}>
        {CASE_STUDIES.map((s, i) => <section
    className={`cstory${i % 2 === 1 ? " cstory--flip" : ""}`}
    key={s.slug}
  >
            <div className="cstory__inner">
              <div className="cstory__media" data-reveal>
                <img
    src={s.img}
    alt={s.imgAlt}
    loading="lazy"
    width={1280}
    height={960}
  />
              </div>

              <div className="cstory__body" data-reveal>
                <span className="cstory__index">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(CASE_STUDIES.length).padStart(2, "0")}
                </span>
                <div className="cstory__meta">
                  <span>{s.category}</span>
                  <i aria-hidden="true" />
                
                </div>
                <h2 className="cstory__title">{s.cardTitle}</h2>
                <p className="cstory__lede">{s.cardLede}</p>
                <ul className="cstory__points">
                  {s.cardPoints.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <Link
    className="cstory__link"
    to={`/study/${s.slug}/`}
  >
                  View Case Study <em aria-hidden="true">↗︎</em>
                </Link>
              </div>
            </div>
          </section>)}
      </div>
    </PageLayout>;
}

export default CaseStudyPage;
