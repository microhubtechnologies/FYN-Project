// import React, { useEffect, useRef, useState } from 'react';

// const HowItWorks = () => {
//   const stepsRef = useRef([]);
//   const progressBarRef = useRef(null);
//   const [progressHeight, setProgressHeight] = useState(0);

//   // This effect would typically handle scroll animations.
//   // For a real implementation, you'd use an Intersection Observer API
//   // or a library like GreenSock (GSAP) to animate elements based on scroll position.
//   useEffect(() => {
//     const handleScroll = () => {
//       // Placeholder for scroll-based progress bar and element animations.
//       // In a real app, you'd calculate scroll position relative to the component
//       // and update 'progressHeight' and other element styles/classes.

//       // Example: Update progress bar height based on scroll (simplified for demo)
//       const sectionTop = stepsRef.current[0]?.getBoundingClientRect().top || 0;
//       const sectionBottom = stepsRef.current[stepsRef.current.length - 1]?.getBoundingClientRect().bottom || 0;
//       const viewportHeight = window.innerHeight;

//       // This is a very basic calculation. A real one would be more sophisticated.
//       if (sectionTop < viewportHeight && sectionBottom > 0) {
//         const scrolledPortion = Math.min(1, Math.max(0, (viewportHeight - sectionTop) / (sectionBottom - sectionTop + viewportHeight)));
//         setProgressHeight(scrolledPortion * 100);
//       } else if (sectionTop >= viewportHeight) {
//         setProgressHeight(0);
//       } else if (sectionBottom <= 0) {
//         setProgressHeight(100);
//       }

//       // Placeholder for animating individual step elements (e.g., text, images)
//       // You'd add classes like 'animate-in' or update styles here.
//       stepsRef.current.forEach((step, index) => {
//         const stepRect = step.getBoundingClientRect();
//         if (stepRect.top < viewportHeight * 0.75 && stepRect.bottom > viewportHeight * 0.25) {
//           // Add a class to trigger animation when step is in view
//           step.classList.add('is-in-view'); // Tailwind can define styles for 'is-in-view'
//         } else {
//           step.classList.remove('is-in-view');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);


//   // Dummy illustrations - these would be actual SVG/PNG imports
//   const DownloadAppIllustration = () => (
//     <div className="relative w-full h-full flex items-center justify-center">
//       <div className="w-2/3 max-w-[200px] aspect-[9/16] bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-4 border border-gray-200">
//         <div className="w-16 h-16 bg-[#171e60] rounded-full flex items-center justify-center mb-4">
//           <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
//         </div>
//         <div className="text-sm font-medium text-gray-700">Downloading...</div>
//         <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//           <div className="bg-light-blue-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
//         </div>
//         <div className="text-xs text-gray-500 mt-1">65%</div>
//       </div>
//       <div className="absolute top-4 right-4 bg-light-blue-400 p-2 rounded-full shadow-md">
//         <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
//       </div>
//     </div>
//   );

//   const FormSubmitIllustration = () => (
//     <div className="relative w-full h-full flex items-center justify-center">
//       <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg border border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h5 className="text-lg font-semibold text-[#171e60]">Application Form</h5>
//         </div>
//         <div className="space-y-3">
//           <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded focus:ring-[#171e60] focus:border-[#171e60] text-sm" />
//           <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded focus:ring-[#171e60] focus:border-[#171e60] text-sm" />
//           <div className="relative w-full">
//             <select className="block appearance-none w-full p-2 border border-gray-300 rounded pr-8 text-sm focus:ring-[#171e60] focus:border-[#171e60]">
//               <option>Select Document Type</option>
//               <option>ID Card</option>
//               <option>Passport</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z"/></svg>
//             </div>
//           </div>
//           <button className="w-full bg-[#171e60] text-white py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200">Submit</button>
//         </div>
//       </div>
//       <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md text-sm flex items-center space-x-1 border border-green-300 text-green-700">
//         <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
//         <span>Registration successful!</span>
//       </div>
//     </div>
//   );

//   const DigitalCardIllustration = () => (
//     <div className="relative w-full h-full flex items-center justify-center">
//       <div className="w-full max-w-[250px] aspect-[1.6/1] bg-gradient-to-br from-[#171e60] to-light-blue-700 rounded-xl shadow-lg flex flex-col justify-between p-4 transform rotate-3 scale-105">
//         <div className="flex justify-between items-center">
//           <div className="text-white font-semibold text-lg">FYN</div>
//           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
//         </div>
//         <div className="text-white text-xl font-mono tracking-widest mt-4">
//           **** **** **** 5678
//         </div>
//         <div className="flex justify-between items-center mt-2">
//           <div className="text-white text-xs opacity-80">VALID THRU 12/26</div>
//           <div className="text-white text-sm font-medium">JOHN DOE</div>
//         </div>
//       </div>
//       <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center bg-white px-3 py-1 rounded-full shadow-md text-sm border border-green-300 text-green-700">
//         <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
//         <span>Approved!</span>
//       </div>
//     </div>
//   );


//   return (
//     <section className="py-16 md:py-24 bg-white relative overflow-hidden">
//       <div className="container mx-auto px-4 max-w-4xl">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-[#171e60] mb-4">How Sascard Works</h2>
//           <p className="text-lg text-gray-600 mb-6">Experience seamless digital banking in three easy steps.</p>
//           <a href="/get-started" className="inline-block px-8 py-3 bg-light-blue-500 text-white font-semibold rounded-full hover:bg-light-blue-600 transition-colors duration-300 shadow-lg">Get Started</a>
//         </div>

//         <div className="relative flex flex-col lg:flex-row lg:justify-between items-start">
//           {/* Vertical Timeline Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden lg:block z-0">
//             <div
//               ref={progressBarRef}
//               className="absolute top-0 left-0 w-full bg-light-blue-500 transition-all duration-300 ease-out"
//               style={{ height: `${progressHeight}%` }}
//             ></div>
//           </div>
//           {/* Grid Steps */}
//           <div className="w-full space-y-16 lg:space-y-24">
//             {/* Step 1 */}
//             <div ref={el => stepsRef.current[0] = el} className="flex flex-col lg:flex-row lg:items-center gap-8 relative z-10 animate-fade-in-up">
//               <div className="lg:w-1/2 order-2 lg:order-1 lg:pr-12">
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div className="w-10 h-10 bg-[#171e60] text-white rounded-full flex items-center justify-center font-bold text-lg">01</div>
//                   <h4 className="text-2xl font-bold text-[#171e60]">Download & Register</h4>
//                 </div>
//                 <p className="text-gray-700 leading-relaxed text-md">
//                   Get started by downloading the Sascard app from your preferred app store. Quick registration allows you to create your account in minutes.
//                 </p>
//               </div>
//               <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-start min-h-[250px] lg:min-h-[300px] xl:min-h-[350px]">
//                 <DownloadAppIllustration />
//               </div>
//             </div>

//             {/* Step 2 */}
//             <div ref={el => stepsRef.current[1] = el} className="flex flex-col lg:flex-row lg:items-center gap-8 relative z-10 animate-fade-in-up">
//               <div className="lg:w-1/2 order-2 lg:order-2 lg:pl-12 text-right">
//                 <div className="flex items-center justify-end space-x-4 mb-4">
//                   <h4 className="text-2xl font-bold text-[#171e60]">Personal Info & Submit</h4>
//                   <div className="w-10 h-10 bg-[#171e60] text-white rounded-full flex items-center justify-center font-bold text-lg">02</div>
//                 </div>
//                 <p className="text-gray-700 leading-relaxed text-md">
//                   Securely provide your personal details and complete the application form. Our streamlined process ensures your data is protected every step of the way.
//                 </p>
//               </div>
//               <div className="lg:w-1/2 order-1 lg:order-1 flex justify-center lg:justify-end min-h-[250px] lg:min-h-[300px] xl:min-h-[350px]">
//                 <FormSubmitIllustration />
//               </div>
//             </div>

//             {/* Step 3 */}
//             <div ref={el => stepsRef.current[2] = el} className="flex flex-col lg:flex-row lg:items-center gap-8 relative z-10 animate-fade-in-up">
//               <div className="lg:w-1/2 order-2 lg:order-1 lg:pr-12">
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div className="w-10 h-10 bg-[#171e60] text-white rounded-full flex items-center justify-center font-bold text-lg">03</div>
//                   <h4 className="text-2xl font-bold text-[#171e60]">Approved & Get Digital Card</h4>
//                 </div>
//                 <p className="text-gray-700 leading-relaxed text-md">
//                   Once approved, your digital Sascard is instantly available! Start making secure payments and managing your finances right away.
//                 </p>
//               </div>
//               <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-start min-h-[250px] lg:min-h-[300px] xl:min-h-[350px]">
//                 <DigitalCardIllustration />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;



import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

;
import step1 from "../assets/ip1.jpg";
import step2 from "../assets/loan1.jpg";
import step3 from "../assets/ip2.jpg";
const steps = [
  {
    id: 1,
    title: "Eligibility Check",
    text: "Our system quickly analyses your income, credit score and loan needs.",
    img: step1,
  },
  {
    id: 2,
    title: "Compare Top Loan Options",
    text: "We show you the best banks and NBFCs with lowest interest rates.",
    img: step2,
  },
  {
    id: 3,
    title: "Fast & Easy Documentation",
    text: "We guide you through a smooth and quick approval process.",
    img: step3,
  },
];

export default function VerticalSteps() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = sectionRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const height = rect.height;

      // Start tracking when section enters viewport
      const scrollY = Math.min(Math.max(-rect.top, 0), height);

      const percentage = (scrollY / height) * 100;
      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-25   overflow-hidden">

      {/* Title + Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-20 px-4">
        <h2 className="text-6xl font-bold text-gray-900 mb-4 mt-12">How It Works</h2>
        <p className="text-lg text-gray-600 mt-2">
         
          <span className="text-blue-900 font-semibold">A step-by-step guidance process — from checking your eligibility to final approval.</span>
        </p>
      </div>
      {/* <div className="text-center max-w-2xl mx-auto mb-20 px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 mt-12">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg">
          A step-by-step guidance process — from checking your eligibility to final approval.
        </p>
      </div> */}

      {/* Vertical Progress Line */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-1 bg-gray-200 h-[80%] top-1/2 -translate-y-1/2 rounded-full">
        <div
          className="bg-blue-600 w-1 rounded-full transition-all duration-300"
          style={{ height: `${progress}%` }}
        ></div>
      </div>

      <div className="container mx-auto max-w-5xl px-6">
        {steps.map((step, i) => (
  <div
  key={step.id}
  className={`flex flex-col lg:flex-row items-center gap-6 mb-16 relative ${
    i % 2 === 1 ? "lg:flex-row-reverse" : ""
  }`}
>

            {/* Blue Dot */}
            <div
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600"
              style={{ top: "50%" }}
            ></div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img
                src={step.img}
                alt={step.title}
                className="tt"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
