import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Partners from "../pages/Partners/Partners";
import Services from "../pages/Services/Services";
import ServiceDetail from "../pages/Services/ServiceDetail";
import CaseStudies from "../pages/CaseStudies/CaseStudies";
import CaseStudyDetail from "../pages/CaseStudies/CaseStudyDetail";
import Scrut from "../pages/Scrut/Scrut";
import Vanta from "../pages/Vanta/Vanta";
import Drata from "../pages/Drata/Drata";
import NotFound from "../pages/NotFound/NotFound";

/**
 * All application routes in one place.
 * React Router matches paths with or without a trailing slash.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/partners" element={<Partners />} />

      {/* Services: one page lists them, one reusable page renders each */}
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />

      {/* Case studies */}
      <Route path="/case-study" element={<CaseStudies />} />
      <Route path="/study/:slug" element={<CaseStudyDetail />} />

      {/* Compliance automation platforms */}
      <Route path="/scrut" element={<Scrut />} />
      <Route path="/vanta" element={<Vanta />} />
      <Route path="/drata" element={<Drata />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
