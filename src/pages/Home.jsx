
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, TrendingUp, Users } from "lucide-react";
import React, { useState, lazy, Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
// Lazy-load big components
const LoanCarousel = lazy(() => import("../components/Services.jsx"));
const WhyChooseUs = lazy(() => import("../components/WhyChoose.jsx"));
const HowWeHelpSection = lazy(() => import("../components/HowweHelp.jsx"));
const TestimonialsSection = lazy(() => import("../components/Testimonials.jsx"));
const AboutSection = lazy(() => import("../components/About.jsx"));
const Calculator = lazy(() => import("./Calculator.jsx"));
const QuickPrequalForm = lazy(() => import("../components/Form.jsx"));
const WhatWeOffer = lazy(() => import("../components/HowItWorks.jsx"));
const FAQ = lazy(() => import("../pages/faq.jsx"));

// Static assets (kept same)
import CTA1 from "../assets/CTA.mp4";
import finance from "../assets/finance.jpg";
import Work from "../assets/work.mp4";
import im from "../assets/ip1.jpg";
import { usePrequal } from "../context/PopupForm";
import im1 from "../assets/ip2.jpg";
import loan from "../assets/loan1.jpg";
import hero from "../assets/hero-bg.png";
import hero1 from "../assets/hero-bg1.png";
import WorkBg from "../assets/work.png";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
const { openPrequal } = usePrequal();
  // Logos (same as before)
  const logos = [
    'https://i0.wp.com/fyn.co.nz/wp-content/uploads/2025/09/FinanceNOW.png-e1756892080413.webp',
    'https://i0.wp.com/fyn.co.nz/wp-content/uploads/2025/09/cfs-finance-logo.png?fit=551%2C155&ssl=1',
    'https://i0.wp.com/fyn.co.nz/wp-content/uploads/2025/09/Screenshot-2025-09-03-at-9.24.08-PM.png?fit=632%2C250&ssl=1',
    'https://i0.wp.com/fyn.co.nz/wp-content/uploads/2025/09/avanti-logo-new-black_orig.png?fit=610%2C132&ssl=1',
    'https://i0.wp.com/fyn.co.nz/wp-content/uploads/2025/09/scotpaclogo-e1756890228870.webp?fit=299%2C115&ssl=1',
    'https://i0.wp.com/fyn.co.nz/wp-content/uploads/2025/09/og_logo.png?fit=1200%2C630&ssl=1',
  ];
  const loopLogos = [...logos, ...logos];

  const steps = [
    {
      imgSrc: finance,
      title: "Application submit",
      text: "In a free hour, when our power of choice is untrammelled and when nothing prevents",
      delay: "0s",
      down: false,
    },
    {
      imgSrc: im,
      title: "Review & Verification",
      text: "Back to the drawing-board show grit, for we should have a meeting to discuss the details",
      delay: "0.1s",
      down: true,
    },
    {
      imgSrc: im1,
      title: "Loan Approval",
      text: "Hit the ground running do i have consent to record this meeting quick sync helicopter view",
      delay: "0.2s",
      down: false,
    },
    {
      imgSrc: loan,
      title: "Loan disbursement",
      text: "Radical candor upsell this is a no-brainer no need to talk to users, just base it on the",
      delay: "0.3s",
      down: true,
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast Approval",
      description: "Get approved in as little as 60 seconds with our express application process",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Your data is encrypted and protected with industry-leading security",
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "We offer some of the most competitive interest rates in New Zealand",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our team is here to help you through every step of the process",
    },
  ];
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 + i * 0.08, ease: "easeOut" }
  }),
};
  /* --------------------------
     Small internal hook: useFadeIn
     -------------------------- */
  function useFadeIn(threshold = 0.25) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold }
      );
      obs.observe(ref.current);
      return () => obs.disconnect();
    }, [ref, threshold]);

    return [ref, visible];
  }

  /* --------------------------
     Small local SectionTitle component
     - Keeps title style consistent across page
     - Triggers single animation when visible
     -------------------------- */
  function SectionTitle({ children, className = "" }) {
    const [ref, visible] = useFadeIn(0.28);
    return (
      <div ref={ref} className={`my-8 w-full ${className}`}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-black dark:text-white transform transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ willChange: "transform, opacity" }}
        >
          {children}
        </h2>
      </div>
    );
  }

  return (
    <div>
      {/* HERO SECTION */}
<section
  className="
    relative w-full px-4 py-10
    flex items-center
    min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px]
    bg-white
    pt-24 md:pt-0    /* ← ADD THIS */
  "
>

  <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">

    {/* LEFT TEXT CONTENT */}
    <div className="order-1 slide-in-left">
      <h5 className="font-semibold text-lg mb-3 text-[#212dad]">
        Finance Tailored To You
      </h5>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5 text-[#000]">
        Are You <span className="text-[#212dad]">Covered</span> Financially?
      </h1>

      <p className="text-[#333] text-base leading-relaxed mb-6 max-w-[420px]">
        We make finance simple. Whether you're buying a car, growing your
        business, or need to consolidate debt — we help you find the best
        lending options fast.
      </p>

      <button
       onClick={openPrequal}
        className="
      
          group
          bg-[#212dad] text-white px-7 py-3 
          font-semibold text-lg rounded-lg 
          shadow-lg hover:shadow-xl transition-all
          flex items-center gap-2
        "
      >
        Get Started

        <span
          className="
            inline-block 
            transform transition-all duration-300
            group-hover:translate-x-2 group-hover:-translate-y-1 
            group-hover:rotate-12
          "
        >
          ↗
        </span>
      </button>
    </div>

    {/* RIGHT ILLUSTRATION */}
    <div className="order-2 flex justify-center md:justify-end">
      <img
        src={hero1}
        alt="Finance Illustration"
        className="
          w-full max-w-[700px]
          object-contain
          md:h-[600px]
          animate-fade-in
        "
      />
    </div>

  </div>

  {/* SINGLE MINIMAL BLUE WAVE AT THE BOTTOM */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 390"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <path
        d="M 0,400 L 0,150 C 75.16053019145804,112.2615058910162 150.32106038291607,74.5230117820324 202,96 C 253.67893961708393,117.4769882179676 281.8762886597938,198.16945876288662 328,224 C 374.1237113402062,249.83054123711338 438.17378497790867,220.7991531664212 508,228 C 577.8262150220913,235.2008468335788 653.4285714285714,278.6339285714286 718,320 C 782.5714285714286,361.3660714285714 836.1119293078056,400.6651325478646 892,435 C 947.8880706921944,469.3348674521354 1006.1237113402062,498.7055412371134 1066,543 C 1125.8762886597938,587.2944587628866 1187.3932253313696,646.5127025036819 1250,671 C 1312.6067746686304,695.4872974963181 1376.3033873343152,685.2436487481591 1440,675 L 1440,400 L 0,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="#cce0ff" 
      ></path>
    </svg>
  </div>

  {/* Animations */}
  <style>{`
    @keyframes slideInLeft {
      0% { transform: translateX(-20%); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    .slide-in-left {
      animation: slideInLeft 0.9s ease both;
    }

    @keyframes fadeIn {
      0% { opacity: 0; transform: scale(1.05); }
      100% { opacity: 1; transform: scale(1); }
    }
    .animate-fade-in {
      animation: fadeIn 1s ease forwards;
    }
  `}</style>
</section>



      {/* LOAN CAROUSEL */}
      <Suspense fallback={<div className="py-10 text-center">Loading services…</div>}>
        <LoanCarousel />
      </Suspense>

      {/* LOGO MARQUEE */}
      <div className="py-10">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black tracking-wide">
            Our Trusted Lending Partners
          </h2>
          <p className="text-sm md:text-base text-blue-700 mt-1">
            We work with leading finance providers to get you better rates.
          </p>
        </div>

        <div className="overflow-hidden py-6" aria-hidden>
          <div className="flex animate-scroll whitespace-nowrap">
            {loopLogos.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="logo"
                className="h-20 mx-8 transition-all"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll { animation: scroll 22s linear infinite; }
        `}</style>
      </div>

      {/* HOW IT WORKS — with consistent animated title */}
      <section className="relative py-16 md:py-18 overflow-hidden">
  {/* BACKGROUND */}
  <div className="absolute inset-0 -z-10">
    <img
      src={WorkBg}
      alt="work background"
      className="w-full h-full object-cover"
      loading="lazy"
      decoding="async"
    />
    <div className="absolute inset-0 bg-blue-900/60" />
  </div>

  <div className="relative container mx-auto px-4">
    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 text-white"
    >
      <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">How It Works</h1>
      <p className="text-base md:text-lg text-blue-100 mt-4 max-w-2xl mx-auto">
        <span className="  leading-relaxed">
          A step-by-step guidance process — from checking your eligibility to final approval.
        </span>
      </p>
    </motion.div>

    {/* STEPS GRID */}
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
      {/* Curved line */}
      <svg
        className="hidden lg:block absolute top-24 left-0 w-full h-56 pointer-events-none z-0"
        viewBox="0 0 1400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#BFDBFE"
        strokeWidth="3"
      >
        <path
          d="M50 150 C250 20, 350 280, 550 150 S850 20, 1050 150 S1250 280, 1350 150"
          strokeLinecap="round"
        />
      </svg>

      {steps.map(({ imgSrc, title, text, down }, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className={`relative z-10 flex flex-col items-center text-center p-6 rounded-xl
            bg-white/95 backdrop-blur-sm shadow-md hover:shadow-xl
            transition-transform duration-300 hover:-translate-y-1
            ${down ? "mt-10 lg:mt-16" : ""}`}
        >
          <div className="relative mb-5">
            <img
              src={imgSrc}
              alt={title}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full font-bold tracking-wide z-20 text-sm">
              {i + 1}
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-semibold mb-2 capitalize text-slate-900">
            {title}
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    

      {/* Lazy-loaded feature sections & components (content unchanged) */}
      {/* <Suspense fallback={<div className="py-10 text-center">Loading How We Help…</div>}>
        <HowWeHelpSection />
      </Suspense> */}

      {/* <Suspense fallback={<div className="py-10 text-center">Loading About…</div>}>
        <AboutSection />
      </Suspense> */}

      <Suspense fallback={<div className="py-10 text-center">Loading Calculator…</div>}>
        <Calculator />
      </Suspense>

      {/* <Suspense fallback={<div className="py-10 text-center">Loading What We Offer…</div>}>
        <WhatWeOffer />
      </Suspense> */}

      <Suspense fallback={<div className="py-10 text-center">Loading Testimonials…</div>}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<div className="py-10 text-center">Loading FAQ…</div>}>
        <FAQ />
      </Suspense>
    </div>
  );
}
