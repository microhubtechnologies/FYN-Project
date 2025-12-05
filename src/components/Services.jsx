import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import supportImg from "../assets/ip1.jpg";
import quickImg from "../assets/loan2.jpg";
import compareImg from "../assets/ip2.jpg";
import secureImg from "../assets/finance.jpg";

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: "Get on the road: fixed interest rates and fast decisions",
      category: "CAR LOANS",
      iconImage: supportImg,
      bgColor: "bg-gradient-to-br from-red-50 to-red-100"
    },
    {
      id: 2,
      title: "Take off on your two-wheeled road trip with better™ finance",
      category: "MOTORBIKE LOANS",
      iconImage: quickImg,
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      id: 3,
      title: 'Make the most of the "big blue" with better™ finance',
      category: "BOAT & MARINE LOANS",
      iconImage: compareImg,
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100"
    },
    {
      id: 4,
      title: "Get on top of your Credit Cards and loans...",
      category: "DEBT CONSOLIDATION",
      iconImage: secureImg,
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % services.length;
      cards.push({ ...services[index], displayIndex: i });
    }
    return cards;
  };

  // 🔥 SUPER SMOOTH SCROLL + FADE ANIMATION
  const cardVariants = {
    offscreen: { opacity: 0, y: 60, scale: 0.95 },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto relative">

        {/* LEFT ARROW */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={prevSlide}
          className="hidden lg:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-md hover:shadow-xl rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-[#05004f]" />
        </motion.button>

        {/* RIGHT ARROW */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={nextSlide}
          className="hidden lg:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-md hover:shadow-xl rounded-full"
        >
          <ChevronRight className="w-6 h-6 text-[#05004f]" />
        </motion.button>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
          {getVisibleCards().map((service) => (
           <motion.div
  key={`${service.id}-${service.displayIndex}`}
  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col group cursor-pointer will-change-transform"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  <motion.div
    whileHover={{ y: -10, scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col h-full"
  >
    {/* IMAGE */}
    <div
      className={`${service.bgColor} h-48 relative overflow-hidden`}
    >
      <img
        loading="lazy"
        src={service.iconImage}
        alt={service.category}
        className="w-full h-full object-cover object-center opacity-95 transition-all duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
    </div>

    {/* TEXT CONTENT */}
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
  </motion.div>
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
