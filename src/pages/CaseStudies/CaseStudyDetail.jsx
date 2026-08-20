import { Link, useParams } from "react-router-dom";
import useSeo from "../../hooks/useSeo";
import PageLayout from "../../components/PageLayout/PageLayout";
import useReveal from "../../hooks/useReveal";
import { CASE_STUDIES, getCaseStudy } from "../../data/caseStudies";
import "./CaseStudyDetail.scss";
function StudyNotFound() {
  return <PageLayout>
      <section className="cs__hero">
        <p className="cs__eyebrow">Case Study</p>
        <h1 className="cs__title">
          Case study <span>not found.</span>
        </h1>
        <p className="cs__sub">
          The case study you are looking for doesn’t exist.{" "}
          <Link to="/case-study">Browse all case studies</Link>.
        </p>
      </section>
    </PageLayout>;
}
function CaseStudyDetailPage() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  useSeo({
    title: study
      ? `${study.cardTitle} — Case Study | Mr. Compliance`
      : "Case study not found | Mr. Compliance",
    description: study ? study.subtitle : "",
    path: `/study/${slug}/`
  });

  if (!study) return <StudyNotFound />;

  const ref = useReveal();
  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug);
  return <PageLayout>
      <div ref={ref}>
        <div className="cs__back" data-reveal>
          <Link to="/case-study">← All case studies</Link>
        </div>

        <header className="cs__hero">
          <p className="cs__eyebrow" data-reveal>
            {study.category} 
          </p>
          <h1 className="cs__title" data-reveal>
            {study.title} <span>{study.accent}</span>
          </h1>
          <p className="cs__sub" data-reveal>
            {study.subtitle}
          </p>
        </header>

        <div className="cs__media" data-reveal>
          <div>
            <img src={study.img} alt={study.imgAlt} width={1600} height={686} />
          </div>
        </div>

        <dl className="cs__facts" data-reveal>
          {study.facts.map((f) => <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>)}
        </dl>

        <section className="cs__section">
          <h2 className="cs__heading" data-reveal>
            {study.about.heading}
          </h2>
          <div className="cs__body" data-reveal>
            {study.about.paras.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
          </div>
        </section>

        <section className="cs__section">
          <h2 className="cs__heading" data-reveal>
            The challenge
          </h2>
          <div className="cs__body" data-reveal>
            {study.challenge.intro.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
            <ul className="cs__list">
              {study.challenge.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </section>

        <section className="cs__section">
          <h2 className="cs__heading" data-reveal>
            The approach
          </h2>
          <div className="cs__body" data-reveal>
            <p>{study.approach.intro}</p>
            <div className="cs__steps">
              {study.approach.items.map((it, i) => <article className="cs__step" key={it.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </article>)}
            </div>
            <p className="cs__note">{study.approach.note}</p>
          </div>
        </section>

        <section className="cs__section">
          <h2 className="cs__heading" data-reveal>
            The outcome
          </h2>
          <div className="cs__body" data-reveal>
            <p>{study.outcome.intro}</p>
            <div className="cs__outcomes">
              {study.outcome.items.map((o) => <div key={o.title}>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                </div>)}
            </div>
          </div>
        </section>

        <section className="cs__section cs__end">
          <h2 className="cs__heading" data-reveal>
            {study.conclusion.heading}
          </h2>
          <div className="cs__body" data-reveal>
            {study.conclusion.paras.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
          </div>
        </section>

        <section className="cs__more" data-reveal>
          <h2>More case studies</h2>
          <div className="cs__more-grid">
            {others.map((o) => <Link key={o.slug} to={`/study/${o.slug}/`}>
                <small>{o.category}</small>
                <strong>{o.cardTitle}</strong>
              </Link>)}
          </div>
        </section>
      </div>
    </PageLayout>;
}

export default CaseStudyDetailPage;
