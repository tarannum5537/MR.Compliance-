import useSeo from "../../hooks/useSeo";
import PageLayout from "../../components/PageLayout/PageLayout";
import PageHero from "../../components/PageHero/PageHero";
import Testimonials from "../../components/Testimonials/Testimonials";
import ClientLogoSlider from "../../components/ClientLogoSlider/ClientLogoSlider";
import useReveal from "../../hooks/useReveal";
const TITLE = "About Us  Expert Security & Compliance Consulting | Mr.Compliance";
const DESC = "Mr.Compliance helps startups and growing technology companies implement SOC 2, ISO 27001, HIPAA, PCI DSS, NIST and SOX using automation platforms like Drata, Vanta and Scrut.";
function AboutUsPage() {
  useSeo({ title: TITLE, description: DESC, path: "/about-us/" });
  const ref = useReveal();
  return <PageLayout>
      <PageHero
    eyebrow="About Us"
    title="
YOUR SECURITY PROGRAM. 
"
    accent="OUR EXPERTISE."
    text="Mr.Compliance helps growing companies build, implement and operate their security, compliance and risk programs - so they can win enterprise customers, reduce risk and scale with confidence.
We work as an extension of your team, bringing the expertise, structure and execution needed to turn security requirements into a program that actually works
"
  />

      <section className="psec">
        <div className="psec__inner" ref={ref}>
          <p className="psec__eyebrow" data-reveal>
            Who we are
          </p>
          <h2 className="psec__title" data-reveal>
            Compliance built into <span>everyday operations</span>.
          </h2>
          <p className="psec__about" data-reveal>
            As companies grow, security stops being an audit project and becomes part of how the business operates. Enterprise customers, regulators and partners expect organizations to have security and compliance programs that are not only documented, but actually working.
          </p>
          <p className="psec__main" data-reveal>
            Mr.Compliance helps growing companies build those programs - from security foundations and compliance frameworks to risk management, customer questionnaires and ongoing operations. We work alongside your team to make security practical, measurable and sustainable as you scale.
          </p>

          <div className="pgrid pgrid--2">
            <article className="pcard" data-reveal>
              <p className="pcard__num">Our Mission</p>
              <h3>Make security work for the business.</h3>
              <p>
                We believe security and compliance should enable growth, not slow it down. Our mission is to help companies build practical security programs that protect the business, satisfy customer and regulatory requirements, and create a foundation for sustainable growth.
              </p>
            </article>

            <article className="pcard" data-reveal>
              <p className="pcard__num">HOW WE WORK</p>
              <h3>An extension of your team.</h3>
              <p>
               Whether you need to build a security program from the ground up or strengthen an existing one, we work alongside your team to assess, implement, operate and continuously improve your security and compliance program.
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
          <p className="psec__main">
           From startups to growing technology companies, we work alongside teams building stronger security programs, earning customer trust and scaling into enterprise markets.
          </p>
          <ClientLogoSlider />
        </div>
      </section>

      <Testimonials />

    </PageLayout>;
}

export default AboutUsPage;
