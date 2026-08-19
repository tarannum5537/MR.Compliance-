import useSeo from "../../hooks/useSeo";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import PageHero from "../../components/PageHero/PageHero";
import useReveal from "../../hooks/useReveal";
import { getServicesByCategory } from "../../data/services";
import "./Services.scss";
const TITLE = "Compliance & Security Services \u2014 SOC 2, ISO 27001, GRC, vCISO | Mr. Compliance";
const DESC = "Security & compliance, security engineering, GRC and security leadership services \u2014 SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, cloud security, vendor risk and vCISO.";
function ServicesPage() {
  useSeo({ title: TITLE, description: DESC, path: "/services/" });
  const ref = useReveal();
  const groups = getServicesByCategory();
  return <PageLayout>
      <PageHero
    eyebrow="Services"
    title="Security & compliance services —"
    accent="built, implemented, operated."
    text="Four practice areas, eighteen engagements. Pick the outcome you need and we'll run it end to end."
  />

      <div ref={ref}>
        {groups.map((group) => <section className="psec services-group" key={group.category}>
            <div className="psec__inner">
              <header className="services-group__head" data-reveal>
                <p className="psec__eyebrow">{group.category}</p>
              </header>

              <div className="pgrid services-grid">
                {group.services.map((s) => <Link
    className="pcard services-card"
    key={s.slug}
    to={`/services/${s.slug}/`}
    data-reveal
  >
                    <span className="services-card__arrow" aria-hidden="true">
                      ↗︎
                    </span>
                    <h3>{s.title}</h3>
                    <div className="services-card__description">
                      <p>{s.short}</p>
                    </div>
                    <div className="services-card__footer">
                      <p className="pcard__meta services-card__meta">
                        {group.category}
                      </p>
                    </div>
                  </Link>)}
              </div>
            </div>
          </section>)}
      </div>
    </PageLayout>;
}

export default ServicesPage;
