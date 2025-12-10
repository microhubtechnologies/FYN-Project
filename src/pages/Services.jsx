// "use client"

// import { motion } from "framer-motion"
// import { ArrowLeft, TrendingUp, Zap, CheckCircle, Shield, Users, Home, Car, Briefcase, GraduationCap, Heart, Rocket } from "lucide-react"

// export default function ServicesPage({ onBack }) {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40, scale: 0.95 },
//     visible: i => ({
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, delay: 0.1 + i * 0.12 }
//     })
//   }

//   const services = [
//     {
//       icon: Car,
//       title: "Vehicle Loans",
//       description: "Get competitive funding for cars, utes, trucks, or machinery — perfect for both personal and business use.",
//       color: "from-blue-600 to-blue-700"
//     },
//     {
//       icon: Briefcase,
//       title: "Business Lending",
//       description: "Flexible funding options to help small and medium businesses grow, expand or manage cash flow.",
//       color: "from-emerald-600 to-emerald-700"
//     },
//     {
//       icon: CheckCircle,
//       title: "Personal Loans",
//       description: "Secure the right personal loan for big purchases, debt consolidation, or unexpected expenses.",
//       color: "from-orange-600 to-orange-700"
//     },
//     {
//       icon: Home,
//       title: "Home Loans",
//       description: "Comprehensive home financing solutions with flexible terms tailored to your financial situation.",
//       color: "from-purple-600 to-purple-700"
//     },
//     {
//       icon: GraduationCap,
//       title: "Education Loans",
//       description: "Finance your education or your child's future with our competitive education loan programs.",
//       color: "from-cyan-600 to-cyan-700"
//     },
//     {
//       icon: Heart,
//       title: "Medical Loans",
//       description: "Quick and accessible funding for medical expenses and healthcare-related needs.",
//       color: "from-red-600 to-red-700"
//     },
//     {
//       icon: Rocket,
//       title: "StartUp Loans",
//       description: "Launch your business with our startup financing solutions designed for entrepreneurs.",
//       color: "from-yellow-600 to-yellow-700"
//     },
//     {
//       icon: TrendingUp,
//       title: "Investment Loans",
//       description: "Grow your investment portfolio with our flexible and competitive investment loan programs.",
//       color: "from-pink-600 to-pink-700"
//     },
//     {
//       icon: Shield,
//       title: "Secured Loans",
//       description: "Leverage your assets for competitive rates and favorable terms on secured financing.",
//       color: "from-indigo-600 to-indigo-700"
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Navigation */}
//       <motion.div
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <button
//             onClick={onBack}
//             className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span className="font-medium">Back</span>
//           </button>
//         </div>
//       </motion.div>

//       {/* Hero Banner */}
//       <section className="relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-48">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-slate-50/50" />
//           <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/15 to-cyan-200/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             {/* Left - Text */}
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="space-y-8"
//             >
//               <motion.div variants={itemVariants} className="space-y-4">
//                 <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.22em] text-blue-600 uppercase px-4 py-2 bg-blue-100/50 rounded-full">
//                   Our Services
//                 </span>
//                 <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
//                   Financing Solutions for Every Need
//                 </h1>
//                 <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
//                   From vehicle loans to personal financing, we offer comprehensive lending solutions tailored to your unique financial requirements.
//                 </p>
//               </motion.div>

//               <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:shadow-lg transition-all"
//                 >
//                   Get Started
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-4 border-2 border-slate-300 text-slate-900 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all"
//                 >
//                   Learn More
//                 </motion.button>
//               </motion.div>
//             </motion.div>

//             {/* Right - Image */}
//             <motion.div
//               initial={{ opacity: 0, x: 40, scale: 0.9 }}
//               animate={{ opacity: 1, x: 0, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="relative hidden lg:block"
//             >
//               <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200/50 shadow-2xl">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-6xl text-blue-400 opacity-20">💰</div>
//                 </div>
//                 {/* Decorative elements */}
//                 <motion.div
//                   animate={{ y: [0, -20, 0] }}
//                   transition={{ duration: 4, repeat: Infinity }}
//                   className="absolute top-12 right-12 w-32 h-32 rounded-2xl bg-white shadow-lg p-4 border border-slate-200"
//                 >
//                   <div className="text-4xl mb-2">📈</div>
//                   <p className="text-xs font-semibold text-slate-600">Growth</p>
//                 </motion.div>
//                 <motion.div
//                   animate={{ y: [0, 20, 0] }}
//                   transition={{ duration: 5, repeat: Infinity }}
//                   className="absolute bottom-12 left-12 w-32 h-32 rounded-2xl bg-white shadow-lg p-4 border border-slate-200"
//                 >
//                   <div className="text-4xl mb-2">🎯</div>
//                   <p className="text-xs font-semibold text-slate-600">Targets</p>
//                 </motion.div>
//               </div>
//               <div className="absolute -inset-8 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl blur-2xl -z-10" />
//             </motion.div>
//           </div>
//         </div>
//       </section>



//  {/* Services Section - Modern Bento Layout */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         className="py-20 sm:py-32 bg-white"
//       >
//         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-20"
//           >
//             <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-blue-600 uppercase mb-4">
//               What We Offer
//             </p>
//             <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Our Services</h2>
//             <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
//               We provide practical, transparent, and flexible solutions designed around what matters most — your needs.
//             </p>
//           </motion.div>

//           <div className="space-y-8">
//             {services.map((service, idx) => {
//               const Icon = service.icon
//               const imageUrls = [
//                 "https://pixabay.com/illustrations/company-architecture-finance-city-3175300/",
//                 "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
//                 "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
//                 "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
//                 "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
//                 "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
//               ]

//               const isEven = idx % 2 === 0

//               return (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: idx * 0.08, duration: 0.6 }}
//                   className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center py-12 px-8 rounded-3xl border border-slate-200 hover:border-blue-300 bg-gradient-to-br from-slate-50/50 to-white transition-all duration-500 hover:shadow-xl`}
//                 >
//                   {/* Image */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: idx * 0.08 + 0.1, duration: 0.6 }}
//                     whileHover={{ scale: 1.05 }}
//                     className={`relative overflow-hidden rounded-2xl shadow-lg ${isEven ? 'md:order-1' : 'md:order-2'}`}
//                   >
//                     <img
//                       src={imageUrls[idx]}
//                       alt={service.title}
//                       className="w-full h-64 md:h-80 object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
//                   </motion.div>

//                   {/* Content */}
//                   <motion.div
//                     initial={{ opacity: 0, x: isEven ? 30 : -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: idx * 0.08 + 0.15, duration: 0.6 }}
//                     className={`space-y-4 ${isEven ? 'md:order-2' : 'md:order-1'}`}
//                   >
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
//                         <Icon className="w-7 h-7 text-blue-600" />
//                       </div>
//                       <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
//                         {service.title}
//                       </h3>
//                     </div>

//                     <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
//                       {service.description}
//                     </p>

//                     {/* Bullet points */}
//                     <ul className="space-y-3 pt-4">
//                       {[
//                         "Flexible terms to suit your needs",
//                         "Fast approval process",
//                         "Expert support throughout"
//                       ].map((point, i) => (
//                         <li key={i} className="flex items-start gap-3">
//                           <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
//                             <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                             </svg>
//                           </div>
//                           <span className="text-slate-700 font-medium">{point}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     <motion.button
//                       whileHover={{ x: 4 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group"
//                     >
//                       <span>Learn More</span>
//                       <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </motion.button>
//                   </motion.div>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//       </motion.section>



//       {/* Services Grid */}
//       <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-blue-200/30 to-transparent rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-t from-indigo-200/20 to-transparent rounded-full blur-3xl" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-20"
//           >
//             <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-blue-600 uppercase mb-4">
//               Comprehensive Solutions
//             </p>
//             <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
//               Our Service Offerings
//             </h2>
//             <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
//               Explore our wide range of financing options designed to meet every financial need with competitive rates and flexible terms.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, idx) => {
//               const Icon = service.icon
//               return (
//                 <motion.div
//                   key={idx}
//                   custom={idx}
//                   variants={cardVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, amount: 0.3 }}
//                   whileHover={{ y: -8 }}
//                   className="group relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500"
//                 >
//                   {/* Background gradient on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   {/* Animated circular background for icon */}
//                   <motion.div
//                     className={`absolute top-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-all duration-500 -z-10`}
//                   />

//                   <div className="relative z-10 space-y-6">
//                     {/* Icon with circular background */}
//                     <motion.div
//                       initial={{ scale: 0, y: -20 }}
//                       whileInView={{ scale: 1, y: 0 }}
//                       transition={{ delay: 0.1 + idx * 0.05, duration: 0.5, type: "spring", stiffness: 200 }}
//                       whileHover={{ scale: 1.15, rotate: 360 }}
//                       className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${service.color} text-white shadow-lg`}
//                     >
//                       <Icon className="w-10 h-10" />
//                       {/* Half circle accent */}
//                       <div className="absolute inset-0 rounded-full border-4 border-white/20" />
//                     </motion.div>

//                     {/* Content */}
//                     <div className="space-y-3">
//                       <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
//                         {service.title}
//                       </h3>
//                       <p className="text-slate-600 leading-relaxed text-base">
//                         {service.description}
//                       </p>
//                     </div>

//                     {/* Learn More Link */}
//                     <motion.button
//                       initial={{ opacity: 0, x: -10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.2 + idx * 0.05, duration: 0.5 }}
//                       whileHover={{ x: 4 }}
//                       className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group/link text-sm sm:text-base"
//                     >
//                       <span>Learn More</span>
//                       <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </motion.button>
//                   </div>

//                   {/* Decorative blur effect */}
//                   <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         className="relative py-20 sm:py-32 overflow-hidden"
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 to-blue-400/15 rounded-full blur-3xl" />
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-4"
//           >
//             <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Ready to Get Started?</h2>
//             <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
//               Get a personalized quote today and discover the best financing solution for your needs.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <motion.button
//               onClick={onBack}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full hover:shadow-lg transition-all"
//             >
//               Get Free Quote
//             </motion.button>
//             <motion.button
//               onClick={onBack}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-10 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all"
//             >
//               Contact Us
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <motion.footer
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="bg-slate-900 text-slate-400 py-12 text-center"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="mb-3 text-sm">FYN Limited is a registered company in NZ (NZBN: 9429052469602)</p>
//           <p className="text-sm">Holds Class 2 licence with FMA (FSP1009679)</p>
//         </div>
//       </motion.footer>
//     </div>
//   )
// }
"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Car, Briefcase, CheckCircle, Home, Graduation, Heart, Rocket, TrendingUp, Shield } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function ServicesPage() {
  const navigate = useNavigate()

  const services = [
    { id: "0", icon: Car, title: "Car Loans", description: "Fast car finance with competitive rates and flexible terms.", color: "from-blue-600 to-blue-700" },
    { id: "1", icon: Rocket, title: "Motorbike Loans", description: "Easy financing for your dream bike.", color: "from-emerald-600 to-emerald-700" },
    { id: "2", icon: CheckCircle, title: "Personal Loans", description: "Flexible funding for any purpose.", color: "from-orange-600 to-orange-700" },
    { id: "3", icon: Briefcase, title: "Business Loans", description: "Grow your business with smart financing.", color: "from-purple-600 to-purple-700" },
    // Baaki services add kar sakte ho
  ]

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
        </div>
      </motion.div>

      {/* Services Grid */}
      <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-20">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-blue-600 uppercase mb-4">Our Services</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Choose Your Financing Solution</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-500 cursor-pointer"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="relative z-10 space-y-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${service.color} text-white shadow-lg`}
                    >
                      <Icon className="w-10 h-10" />
                    </motion.div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{service.description}</p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 4 }}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-base"
                    >
                      <span>Learn More</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
