import useSeo from "../../hooks/useSeo";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import TrustBar from "../../components/TrustBar/TrustBar";
import Services from "../../components/Services/Services";
import WhyUs from "../../components/WhyUs/WhyUs";
import Process from "../../components/Process/Process";
import CaseStudies from "../../components/CaseStudies/CaseStudies";
import Testimonials from "../../components/Testimonials/Testimonials";
import Careers from "../../components/Careers/Careers";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
const TITLE = "Mr. Compliance \u2014 Cybersecurity & Compliance Advisory";
const DESC = "Get SOC 2, ISO 27001, PCI DSS, HIPAA or GDPR certified with dedicated compliance experts who have guided 200+ companies through audits with a 100% pass rate.";
function Index() {
  useSeo({ title: TITLE, description: DESC, path: "/" });
  return <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>;
}

export default Index;
