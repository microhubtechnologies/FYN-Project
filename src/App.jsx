import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
// import CarLoan from "./pages/services/CarLoan"
// import PersonalLoan from "./pages/services/PersonalLoan"
// import BusinessLoan from "./pages/services/BusinessLoan"
// import EquipmentFinance from "./pages/services/EquipmentFinance"
// import Insurance from "./pages/services/Insurance"
// import HomeLoan from "./pages/services/HomeLoan"
import Calculator from "./pages/Calculator"
import Apply from "./pages/Apply"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import { PrequalProvider } from "./context/PopupForm";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <PrequalProvider>
      <Navbar />
      <main className="flex-grow">
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/services/car-loan" element={<CarLoan />} />
          <Route path="/services/personal-loan" element={<PersonalLoan />} />
          <Route path="/services/business-loan" element={<BusinessLoan />} />
          <Route path="/services/equipment-finance" element={<EquipmentFinance />} />
          <Route path="/services/insurance" element={<Insurance />} />
          <Route path="/services/home-loan" element={<HomeLoan />} /> */}
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<NotFound />} />
        
        </Routes>
      </main>
      </PrequalProvider>
      <Footer />
    </div>
  )
}
