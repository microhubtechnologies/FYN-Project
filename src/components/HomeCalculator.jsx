// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Calculator } from "lucide-react";
// import { Button } from "./ui/button";

// const CalculatorSection = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [loanAmount, setLoanAmount] = useState(500000);
//   const [interestRate, setInterestRate] = useState(8.5);
//   const [tenure, setTenure] = useState(5);

//   const calculateEMI = () => {
//     const principal = loanAmount;
//     const rate = interestRate / 12 / 100;
//     const time = tenure * 12;
//     const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
//     return emi.toFixed(2);
//   };

//   const totalAmount = (parseFloat(calculateEMI()) * tenure * 12).toFixed(2);
//   const totalInterest = (parseFloat(totalAmount) - loanAmount).toFixed(2);

//   return (
//     <section ref={ref} className="py-16 bg-gradient-to-br from-primary-blue to-secondary-blue relative overflow-hidden">
//       <div className="absolute inset-0">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//           className="absolute top-20 right-20 w-80 h-80 border border-dashed border-white/10 rounded-full"
//         />
//         <motion.div
//           animate={{ rotate: -360 }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-20 left-20 w-80 h-80 border border-dashed border-white/10 rounded-full"
//         />
//       </div>

//       <div className="container mx-auto px-6 lg:px-12 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/10">
//             <Calculator className="text-white" size={16} />
//             <span className="text-white text-sm font-medium">EMI Calculator</span>
//           </div>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-3xl font-semibold text-white mb-3"
//           >
//             Calculate Your Monthly Payment
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-sm text-white/80 max-w-2xl mx-auto font-normal"
//           >
//             Get an instant estimate of your loan EMI
//           </motion.p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-white rounded-2xl p-6 shadow-lg"
//           >
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-primary-blue font-medium mb-2 text-sm">
//                   Loan Amount: ₹{loanAmount.toLocaleString()}
//                 </label>
//                 <input
//                   type="range"
//                   min="100000"
//                   max="10000000"
//                   step="50000"
//                   value={loanAmount}
//                   onChange={(e) => setLoanAmount(Number(e.target.value))}
//                   className="w-full h-2 bg-gradient-to-r from-primary-blue to-secondary-blue rounded-full appearance-none cursor-pointer"
//                 />
//                 <div className="flex justify-between text-xs text-gray-500 mt-1.5">
//                   <span>₹1L</span>
//                   <span>₹1Cr</span>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-primary-blue font-medium mb-2 text-sm">
//                   Interest Rate: {interestRate}% per annum
//                 </label>
//                 <input
//                   type="range"
//                   min="5"
//                   max="20"
//                   step="0.5"
//                   value={interestRate}
//                   onChange={(e) => setInterestRate(Number(e.target.value))}
//                   className="w-full h-2 bg-gradient-to-r from-primary-blue to-secondary-blue rounded-full appearance-none cursor-pointer"
//                 />
//                 <div className="flex justify-between text-xs text-gray-500 mt-1.5">
//                   <span>5%</span>
//                   <span>20%</span>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-primary-blue font-medium mb-2 text-sm">
//                   Loan Tenure: {tenure} years
//                 </label>
//                 <input
//                   type="range"
//                   min="1"
//                   max="30"
//                   step="1"
//                   value={tenure}
//                   onChange={(e) => setTenure(Number(e.target.value))}
//                   className="w-full h-2 bg-gradient-to-r from-primary-blue to-secondary-blue rounded-full appearance-none cursor-pointer"
//                 />
//                 <div className="flex justify-between text-xs text-gray-500 mt-1.5">
//                   <span>1 year</span>
//                   <span>30 years</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//          <motion.div
//   initial={{ opacity: 0, x: 30 }}
//   animate={inView ? { opacity: 1, x: 0 } : {}}
//   transition={{ duration: 0.6, delay: 0.4 }}
//   className="space-y-5"
// >
//   {/* EMI CARD */}
//   <div className="bg-white rounded-2xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100">
//     <div className="text-gray-500 text-sm mb-1 font-medium">Monthly EMI</div>
//     <div className="text-3xl font-bold text-primary-blue mb-4">
//       ₹{parseFloat(calculateEMI()).toLocaleString()}
//     </div>

//     <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
//       <motion.div
//         initial={{ width: 0 }}
//         animate={inView ? { width: "100%" } : {}}
//         transition={{ duration: 1, delay: 0.6 }}
//         className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
//       />
//     </div>
//   </div>

//   {/* 2 SMALL CARDS */}
//   <div className="grid grid-cols-2 gap-4">
//     {/* Principal */}
//     <div className="bg-white rounded-2xl p-4 shadow-[0_4px_14px_rgba(0,0,0,0.06)] border border-gray-100">
//       <div className="text-gray-500 text-xs font-medium mb-1">
//         Principal Amount
//       </div>
//       <div className="text-xl font-bold text-primary-blue">
//         ₹{loanAmount.toLocaleString()}
//       </div>
//     </div>

//     {/* Total Interest */}
//     <div className="bg-white rounded-2xl p-4 shadow-[0_4px_14px_rgba(0,0,0,0.06)] border border-gray-100">
//       <div className="text-gray-500 text-xs font-medium mb-1">
//         Total Interest
//       </div>
//       <div className="text-xl font-bold text-primary-blue">
//         ₹{parseFloat(totalInterest).toLocaleString()}
//       </div>
//     </div>
//   </div>

//   {/* TOTAL AMOUNT CARD */}
//   <div className="bg-white rounded-2xl p-5 shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-gray-100">
//     <div className="text-gray-500 text-xs font-medium mb-1">
//       Total Amount Payable
//     </div>
//     <div className="text-2xl font-bold text-primary-blue">
//       ₹{parseFloat(totalAmount).toLocaleString()}
//     </div>
//   </div>

//   {/* APPLY BUTTON */}
//   <Button className="w-full bg-primary-blue text-white hover:bg-primary-blue/90 py-3 text-sm rounded-full font-semibold shadow-lg">
//     Apply for This Loan
//   </Button>

//   {/* DISCLOSURE BOX (NEW) */}
//   <div className="bg-white rounded-xl p-4 shadow-[0_4px_14px_rgba(0,0,0,0.06)] border border-gray-100">
//     <p className="text-[13px] leading-relaxed text-gray-600">
//       <span className="font-semibold text-gray-800">Disclosure:</span><br />
//       This calculator provides an estimate only and is not an offer of finance.
//       Actual interest rates and repayment amounts may vary depending on your
//       individual circumstances and the lender’s criteria. For an accurate quote
//       and assessment, please contact us directly.
//     </p>
//   </div>
// </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };
// export default CalculatorSection;