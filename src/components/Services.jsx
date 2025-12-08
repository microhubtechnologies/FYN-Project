import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import supportImg from "../assets/ip1.jpg";
import quickImg from "../assets/loan2.jpg";
import compareImg from "../assets/ip2.jpg";
import secureImg from "../assets/finance.jpg";

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Fast, flexible car finance with great rates",
      category: "Car Loans",
      iconImage: supportImg,
      bgColor: "bg-gradient-to-br from-red-50 to-red-100"
    },
    {
      id: 2,
      title: "Ride your dream bike with simple motorbike finance",
      category: "Motorbike Loans",
      iconImage: quickImg,
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      id: 3,
      title: "Affordable finance for your next boat or jetski",
      category: "Boat & Jetski Loans",
      iconImage: compareImg,
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100"
    },
    {
      id: 4,
      title: "Combine your debts into one easy payment",
      category: "Debt Consolidation Loans",
      iconImage: secureImg,
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100"
    },
    {
      id: 5,
      title: "Personal loans made simple with fast approvals",
      category: "Personal Loans",
      iconImage: secureImg,
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      id: 6,
      title: "Finance your caravan or motorhome easily",
      category: "Caravan Loans",
      iconImage: secureImg,
      bgColor: "bg-gradient-to-br from-green-50 to-green-100"
    },
    {
      id: 7,
      title: "Flexible funding to grow your business",
      category: "Business Loans",
      iconImage: secureImg,
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100"
    },
    {
      id: 8,
      title: "Specialised finance for equipment and assets",
      category: "Equipment Finance",
      iconImage: secureImg,
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
    }
  ];

  // NEXT Slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  // PREV Slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Auto-slide
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Visible cards (4 at a time)
  const visibleCards = [];
  for (let i = 0; i < 4; i++) {
    visibleCards.push(services[(currentIndex + i) % services.length]);
  }

  return (
    <section className="py-16 px-4 bg-gray-50 relative select-none">
      <div className="max-w-7xl mx-auto relative">

        {/* LEFT BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={prevSlide}
          className="hidden lg:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-md hover:shadow-xl rounded-full z-20"
        >
          <ChevronLeft className="w-6 h-6 text-[#05004f]" />
        </motion.button>

        {/* RIGHT BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={nextSlide}
          className="hidden lg:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-md hover:shadow-xl rounded-full z-20"
        >
          <ChevronRight className="w-6 h-6 text-[#05004f]" />
        </motion.button>

        {/* SLIDER WRAPPER */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) nextSlide();
            if (info.offset.x > 50) prevSlide();
          }}
          className="overflow-hidden px-12"
        >
          <motion.div
            animate={{ x: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {visibleCards.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col group cursor-pointer transition-all"
              >
                {/* IMAGE */}
                <div className={`${service.bgColor} h-48 relative`}>
                  <img
                    src={service.iconImage}
                    className="w-full h-full object-cover opacity-95 transition-all duration-500 group-hover:scale-110"
                    alt={service.category}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                </div>

                {/* TEXT */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-bold tracking-widest text-[#05004F] bg-[#05004F]/10 px-3 py-1 rounded-full w-fit mb-3">
                    {service.category}
                  </span>

                  <p className="text-gray-800 text-sm font-semibold mb-6 leading-relaxed group-hover:text-[#05004F] transition-colors">
                    {service.title}
                  </p>

                  <div className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.06 }}
                      className="px-8 py-3 text-sm font-semibold rounded-full border-2 border-[#05004f] bg-[#05004f] text-white hover:bg-transparent hover:text-[#05004f] transition-all shadow-md"
                    >
                      Explore
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
