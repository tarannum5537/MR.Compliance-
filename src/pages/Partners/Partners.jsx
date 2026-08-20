import useSeo from "../../hooks/useSeo";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import PageHero from "../../components/PageHero/PageHero";
import useReveal from "../../hooks/useReveal";
const TITLE = "Partners & Clients Compliance Automation Platforms | Mr.Compliance";
const DESC = "We work with leading compliance automation platforms Drata, Vanta, Scrut Automation and AuditBoard to streamline evidence collection, monitoring and audit readiness.";
const PARTNERS = [
  {
    name: "Scrut Automation",
    to: "/scrut",
    text: "Scrut-powered SOC 2 accelerator: integrations, control mapping and evidence strategy delivered with hands-on consulting."
  },
  {
    name: "Vanta",
    to: "/vanta",
    text: "Vanta-powered SOC 2 accelerator for lean SaaS teams that need audit-ready controls, not another tool to manage."
  },
  {
    name: "Drata",
    to: "/drata",
    text: "Drata-powered SOC 2 accelerator with full implementation support across engineering, HR and leadership."
  }
];
function PartnersPage() {
  useSeo({ title: TITLE, description: DESC, path: "/partners/" });
  const ref = useReveal();
  return <PageLayout>
      <PageHero
    eyebrow="Clients & Partners"
    title="Working with the"
    accent="best."
    text="We leverage leading compliance automation platforms including Drata, Vanta, Scrut Automation and AuditBoard to streamline evidence collection, monitoring, and audit readiness."
  />

      <section className="psec">
        <div className="psec__inner" ref={ref}>
          <p className="psec__eyebrow" data-reveal>
            Platform programs
          </p>
          <h2 className="psec__title" data-reveal>
            Accelerators built on your <span>compliance platform</span>.
          </h2>

          <div className="pgrid">
            {PARTNERS.map((p) => <Link className="pcard" key={p.name} to={p.to} data-reveal>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <p className="pcard__meta">View program ↗︎</p>
              </Link>)}
          </div>

          {/* <div className="pgrid">
            <article className="pcard" data-reveal>
              <h3>AuditBoard</h3>
              <p>
                Governance, risk and compliance tooling used to manage
                enterprise audit programs and continuous monitoring.
              </p>
            </article>
          </div> */}
        </div>
      </section>
    </PageLayout>;
}

export default PartnersPage;
