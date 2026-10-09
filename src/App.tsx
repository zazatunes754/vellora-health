import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Specialists from "./pages/Specialists";
import SpecialistDetail from "./pages/SpecialistDetail";
import PatientResources from "./pages/PatientResources";
import Pricing from "./pages/Pricing";
import Appointments from "./pages/Appointments";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Insights from "./pages/Insights";
import ArticleDetail from "./pages/ArticleDetail";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/specialists/:slug" element={<SpecialistDetail />} />
          <Route path="/patient-resources" element={<PatientResources />} />
          <Route path="/pricing-insurance" element={<Pricing />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<ArticleDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
