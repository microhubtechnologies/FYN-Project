import { Routes, Route,useLocation  } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import ScrollToTop from "./pages/ScrollToTop";
import ServiceDetailPage from "./pages/ServiceDetail"
// import Services from "./pages/Services"
// import CarLoan from "./pages/services/CarLoan"
// import PersonalLoan from "./pages/services/PersonalLoan"
// import BusinessLoan from "./pages/services/BusinessLoan"
// import EquipmentFinance from "./pages/services/EquipmentFinance"
// import Insurance from "./pages/services/Insurance"
// import HomeLoan from "./pages/services/HomeLoan"
import Calculator from "./pages/Calculator"

import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import PrivacyPolicyPage from "./pages/Privacy"
import { PrequalProvider } from "./context/PopupForm";
import Terms from "./pages/Terms";
import FormLayout from "./components/FormLayout"
export default function App() {
   const location = useLocation();

  // jis route par navbar footer nhi chahiye
  const hideNavAndFooterRoutes = ["/apply-loan"];

  const hideNavFooter = hideNavAndFooterRoutes.includes(location.pathname);
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop /> 
      <PrequalProvider>
      {!hideNavFooter && <Navbar />}
      <main className="flex-grow">
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply-loan" element={<FormLayout />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/services/car-loan" element={<CarLoan />} />
          <Route path="/services/personal-loan" element={<PersonalLoan />} />
          <Route path="/services/business-loan" element={<BusinessLoan />} />
          <Route path="/services/equipment-finance" element={<EquipmentFinance />} />
          <Route path="/services/insurance" element={<Insurance />} />
          <Route path="/services/home-loan" element={<HomeLoan />} /> */}
         
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />

          <Route path="/calculator" element={<Calculator />} />
        
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<NotFound />} />
        
        </Routes>
      </main>
      </PrequalProvider>
      {!hideNavFooter && <Footer />}
    </div>
  )
}
