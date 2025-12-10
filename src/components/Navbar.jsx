// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { Menu, X, ChevronDown } from "lucide-react"
// import logo from "../assets/logo.webp"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [servicesOpen, setServicesOpen] = useState(false)

//   const services = [
//     { name: "Car Loan", href: "/services/car-loan" },
//     { name: "Personal Loan", href: "/services/personal-loan" },
//     { name: "Business Loan", href: "/services/business-loan" },
//     { name: "Equipment Finance", href: "/services/equipment-finance" },
//     { name: "Insurance", href: "/services/insurance" },
//     { name: "Home Loan", href: "/services/home-loan" },
//   ]

//   const links = [
//     // { name: "Home", href: "/" },
//     // { name: "About", href: "/about" },
//     // { name: "Calculator", href: "/calculator" },
//     // { name: "Contact", href: "/contact" },
//   ]

//   return (
//     <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <img
//               src={logo}
//               alt="Fyn Logo"
//               className="h-10 w-auto transition-transform duration-300 hover:scale-110"
//             />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex gap-8 items-center">
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group"
//               >
//                 {link.name}

//                 {/* Underline Animation */}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             ))}

//             {/* Services Dropdown */}
//             {/* <div className="relative group">
//               <button className="relative text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
//                 Services
//                 <ChevronDown size={18} />
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//               </button>

             
//               <div className="absolute left-0 mt-3 w-56 bg-white/90 backdrop-blur-lg rounded-lg shadow-xl border border-gray-100 opacity-0 translate-y-4
//                 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 py-2">
//                 {services.map((service) => (
//                   <Link
//                     key={service.name}
//                     to={service.href}
//                     className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                   >
//                     {service.name}
//                   </Link>
//                 ))}
//               </div>
//             </div> */}
//           </div>

//           {/* Apply Button */}
//           <Link
//   to="/apply"
//   className="hidden md:flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-white 
//              bg-gradient-to-r from-blue-900 to-blue-900 shadow-md hover:shadow-xl 
//              transform transition-all hover:scale-105 group relative overflow-hidden"
// >

//   <span className="relative z-10">Apply Now</span>

//   {/* Arrow Icon */}
//   <span
//     className="relative z-10 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
//   >
//     ➜
//   </span>

//   {/* Glow Effect */}
//   <span
//     className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//   />
// </Link>


//           {/* Mobile Menu Button */}
//           <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
//             {isOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden pb-4 flex flex-col gap-4 animate-slideDown">
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="px-2 py-2 text-gray-700 font-medium hover:text-blue-600 transition"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {/* Mobile Services Accordion */}
//             <div>
//               <button
//                 onClick={() => setServicesOpen(!servicesOpen)}
//                 className="px-2 py-2 text-gray-700 font-medium flex items-center gap-1 w-full"
//               >
//                 Services
//                 <ChevronDown
//                   size={18}
//                   className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
//                 />
//               </button>

//               {servicesOpen && (
//                 <div className="ml-4 flex flex-col gap-2 mt-2 animate-fadeIn">
//                   {services.map((service) => (
//                     <Link
//                       key={service.name}
//                       to={service.href}
//                       onClick={() => {
//                         setIsOpen(false)
//                         setServicesOpen(false)
//                       }}
//                       className="px-2 py-2 text-gray-700 hover:text-blue-600 transition"
//                     >
//                       {service.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Mobile Apply Button */}
//             <Link
//   to="/apply"
//   onClick={() => setIsOpen(false)}
//   className="px-4 py-2 rounded-lg font-semibold text-white text-center 
//              bg-gradient-to-r from-blue-700 to-blue-900 shadow 
//              flex items-center justify-center gap-2
//              hover:scale-105 transition-transform group"
// >
//   Apply Now
//   <span className="transform transition-all duration-300 group-hover:translate-x-2">
//     ➜
//   </span>
// </Link>

//           </div>
//         )}
//       </div>

//       {/* Animations */}
//       <style>{`
//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-in;
//         }
//       `}</style>
//     </nav>
//   )
// }
import { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { usePrequal } from "../context/PopupForm";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
const { openPrequal } = usePrequal();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between 
                      px-4 py-4 sm:py-5">
        
        {/* BIGGER LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Fyn Logo"
            className="h-12 sm:h-14 w-auto transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* ANIMATED APPLY NOW BUTTON */}
        <button
        onClick={openPrequal}
          className="
            relative px-7 py-2 sm:py-3
            border border-blue-900
            text-blue-900 font-semibold text-base sm:text-lg
            rounded-xl overflow-hidden
            transition-all duration-300
            hover:bg-blue-900 hover:text-white
            animate-pulse-slow
          "
        >
          Apply Now

          {/* Glow Effect */}
          <span
            className="
              absolute inset-0 rounded-xl 
              bg-blue-300 opacity-10 
              animate-glow
            "
          ></span>
        </button>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes glow {
          0% { opacity: 0.1; }
          50% { opacity: 0.3; }
          100% { opacity: 0.1; }
        }
        .animate-glow {
          animation: glow 2.5s infinite ease-in-out;
        }

        @keyframes pulse-slow {
          0% { transform: scale(1); }
          50% { transform: scale(1.04); }
          100% { transform: scale(1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
