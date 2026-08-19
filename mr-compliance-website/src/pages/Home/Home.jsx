import Hero from "../../components/Hero/Hero.jsx";
import TrustBar from "../../components/TrustBar/TrustBar.jsx";
import Services from "../../components/Services/Services.jsx";
import About from "../../components/About/About.jsx";
import Process from "../../components/Process/Process.jsx";
import CaseStudies from "../../components/CaseStudies/CaseStudies.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Careers from "../../components/Careers/Careers.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import "./Home.scss";

// The home page is just the sections stacked in order.
export default function Home() {
  return (
    <main className="home">
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Careers />
      <Contact />
    </main>
  );
}
