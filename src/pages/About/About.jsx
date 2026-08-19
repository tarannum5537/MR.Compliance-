import useSeo from "../../hooks/useSeo";
import PageLayout from "../../components/PageLayout/PageLayout";
import PageHero from "../../components/PageHero/PageHero";
import Testimonials from "../../components/Testimonials/Testimonials";
import ClientLogoSlider from "../../components/ClientLogoSlider/ClientLogoSlider";
import useReveal from "../../hooks/useReveal";
const TITLE = "About Us \u2014 Expert Security & Compliance Consulting | Mr. Compliance";
const DESC = "Mr. Compliance helps startups and growing technology companies implement SOC 2, ISO 27001, HIPAA, PCI DSS, NIST and SOX using automation platforms like Drata, Vanta and Scrut.";
function AboutUsPage() {
  useSeo({ title: TITLE, description: DESC, path: "/about-us/" });
  const ref = useReveal();
  return <PageLayout>
      <PageHero
    eyebrow="About Us"
    title="Expert security &"
    accent="compliance consulting."
    text="At Mr. Compliance, we help organizations simplify complex cybersecurity and regulatory compliance requirements. Our mission is to make security and compliance practical, structured, and achievable for modern businesses."
  />

      <section className="psec">
        <div className="psec__inner" ref={ref}>
          <p className="psec__eyebrow" data-reveal>
            Who we are
          </p>
          <h2 className="psec__title" data-reveal>
            Compliance built into <span>everyday operations</span>.
          </h2>
          <p className="psec__lead" data-reveal>
            As companies scale and begin working with enterprise customers,
            demonstrating strong security governance becomes essential.
            Frameworks such as SOC 2, ISO 27001, HIPAA, PCI DSS, NIST and SOX
            are no longer optional — they are critical for building trust,
            meeting regulatory expectations, and winning enterprise deals.
          </p>
          <p className="psec__lead" data-reveal>
            Mr. Compliance works with startups and growing technology companies
            to implement these frameworks efficiently while ensuring that
            security practices are integrated into everyday operations.
          </p>

          <div className="pgrid pgrid--2">
            <article className="pcard" data-reveal>
              <p className="pcard__num">Our Mission</p>
              <h3>Strong foundations, simpler journeys</h3>
              <p>
                Our mission is to help organizations build strong security
                foundations while simplifying the compliance journey. By
                combining practical consulting expertise with
                automation-driven compliance tools, we help businesses
                strengthen customer trust, meet regulatory requirements, and
                scale confidently in security-conscious markets.
              </p>
            </article>

            <article className="pcard" data-reveal>
              <p className="pcard__num">Work With Us</p>
              <h3>From readiness to certification</h3>
              <p>
                Whether your organization is preparing for SOC 2, ISO 27001,
                HIPAA, GDPR or other security frameworks, Mr. Compliance can
                guide your journey from readiness to certification. Book a
                consultation with our experts to start your compliance journey.
              </p>
            </article>
          </div>

        </div>
      </section>

      <section className="psec">
        <div className="psec__inner">
          <p className="psec__eyebrow">Clients &amp; Partners</p>
          <h2 className="psec__title">
            Trusted by teams building <span>what’s next</span>.
          </h2>
          <p className="psec__lead">
            From early-stage startups to scaling technology companies, these are
            the teams we’ve guided through SOC 2, ISO 27001, HIPAA and other
            security frameworks.
          </p>
          <ClientLogoSlider />
        </div>
      </section>

      <Testimonials />

    </PageLayout>;
}

export default AboutUsPage;
