import { lazy } from "react";
import { Routes, Route } from "react-router-dom";



const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Partners = lazy(() => import("../pages/Partners/Partners"));
const Services = lazy(() => import("../pages/Services/Services"));
const ServiceDetail = lazy(() => import("../pages/Services/ServiceDetail"));
const CaseStudies = lazy(() => import("../pages/CaseStudies/CaseStudies"));
const CaseStudyDetail = lazy(() => import("../pages/CaseStudies/CaseStudyDetail"));
const Scrut = lazy(() => import("../pages/Scrut/Scrut"));
const Vanta = lazy(() => import("../pages/Vanta/Vanta"));
const Drata = lazy(() => import("../pages/Drata/Drata"));

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));


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
