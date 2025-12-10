import { useState } from "react";
import { motion } from "framer-motion";
import Illustration from "../assets/money.png"; // <-- add your image here
import testinomilalBg from "../assets/customer-review.png";
export default function Testimonials() {
  const [active, setActive] = useState(2);

  const testimonials = {
    1: {
      text: "Leverage agile frameworks to provide a robust and elegant synopsis. Iterative strategy approaches foster collaborative thinking to grow overall value.",
      name: "John Doe",
      title: "CEO, ABC Inc.",
      rating: 5,
    },
    2: {
      text: "Bring to the table win-win survival strategies for proactive domination. A new normal shaped from innovation is accelerating in real-time.",
      name: "Winter Doe",
      title: "CTO, XYZ Corp.",
      rating: 4,
    },
    3: {
      text: "Capitalize on low-hanging fruit to identify meaningful improvements. Override digital gaps using faster and more adaptive workflows.",
      name: "John Wick",
      title: "Product Manager, Fake Corp.",
      rating: 5,
    },
  };

  return (
    <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
  className="my-16 md:my-24 container mx-auto flex flex-col md:flex-row shadow-xl overflow-hidden"
>

  {/* LEFT SECTION */}
<motion.div
  initial={{ x: -60, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="relative w-full py-12 md:py-16 bg-blue-950 md:w-1/2 
             flex flex-row items-center justify-between 
             border-r-8 border-blue-400 px-8 overflow-hidden"
>
{/* Animated Background Blobs */}
<div className="absolute inset-0 overflow-hidden -z-0">
  
  {/* Blob 1 */}
  <motion.div
    initial={{ opacity: 0.3, scale: 1, x: -80, y: -40 }}
    animate={{
      x: [-80, -20, -60],
      y: [-40, -10, -40],
      scale: [1, 1.1, 1],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className="absolute w-72 h-72 bg-blue-700 rounded-full blur-3xl opacity-25"
  />

  {/* Blob 2 */}
  <motion.div
    initial={{ opacity: 0.15, scale: 1, x: 100, y: 50 }}
    animate={{
      x: [100, 60, 120],
      y: [50, 80, 50],
      scale: [1, 1.15, 1],
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="absolute w-80 h-80 bg-blue-500 rounded-full blur-[90px] opacity-20"
  />

  {/* Soft gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-10" />
</div>

  {/* IMAGE (HALF HEIGHT FEEL) */}
<motion.img
  src={testinomilalBg}

  alt="Illustration"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.1, ease: "easeOut" }}
  animate={{ y: [0, -8, 0] }}
  className="
    absolute 
    top-10
    left-1/2            /* moved more to the right */
    -translate-x-1/3    /* balanced centering */
    w-32 md:w-44 lg:w-56
    opacity-90 
    select-none 
    pointer-events-none
    
  "
/>



  {/* HEADING — Right side */}
  <h2 className="relative text-center text-4xl md:text-5xl lg:text-6xl 
                 text-white font-bold ">
    What Our <br /> Clients <br /> Say
  </h2>

  {/* Soft BG Pulse */}
  <div className="absolute inset-0 opacity-10 
      bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_70%)] 
      animate-pulse"></div>

  {/* Arrow Buttons */}
  <div className="absolute bottom-4 right-4 hidden md:flex z-30">
    <button
      className="px-3 py-1.5 bg-white text-gray-700 hover:bg-indigo-100 border border-gray-200 transition text-sm"
      onClick={() => setActive(active === 1 ? 3 : active - 1)}
    >
      ←
    </button>
    <button
      className="px-3 py-1.5 bg-white text-gray-700 hover:bg-indigo-100 border border-gray-200 transition text-sm"
      onClick={() => setActive(active >= 3 ? 1 : active + 1)}
    >
      →
    </button>
  </div>
</motion.div>





  {/* RIGHT SECTION */}
  <motion.div
    initial={{ x: 80, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="bg-white md:w-1/2 flex flex-col relative p-10"
  >
    {/* QUOTATION ICON — TOP RIGHT */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 0.25, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-4 right-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 text-blue-600"
        viewBox="0 0 24 24"
      >
        <path d="M6.5 10c-.223 0-.437.034-.65.065..." />
      </svg>
    </motion.div>

    {/* Right Corner Illustration (Small) */}
    <motion.img
      src={Illustration}
      alt="Illustration"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      animate={{ y: [0, -10, 0] }}
      className="absolute bottom-6 right-6 w-20 md:w-28 opacity-90 pointer-events-none"
    />

    {/* Main Text */}
    <p className="
      text-gray-600 italic text-xl md:text-2xl leading-relaxed tracking-wide [word-spacing:2px]
      mt-6 pr-20
    ">
      {testimonials[active].text}
    </p>

    {/* Star Rating */}
    <div className="flex justify-start mt-4">
      {Array.from({ length: testimonials[active].rating }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-2xl">★</span>
      ))}
    </div>

    {/* Name & Title */}
    <div className="mt-6">
      <h2 className="text-lg font-bold text-gray-800 tracking-wide">
        {testimonials[active].name}
      </h2>
      <p className="text-gray-500 text-sm tracking-wide">
        {testimonials[active].title}
      </p>
    </div>
  </motion.div>
</motion.div>

  );
}
