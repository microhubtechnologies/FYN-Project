"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle, Users, Zap, Shield, TrendingUp, Award, Gauge, Lock, Star } from "lucide-react"
import ip from "../assets/illus.jpg"
import Quote from "../assets/imag1.png"
import About from "../assets/finance.jpg"
import Pic from "../assets/about-banner.png"
export default function AboutPage({ onBack }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const cardFade = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2 + i * 0.13 }
    })
  };

  const stats = [
    { label: "Partners", value: "10+" },
    { label: "Finance Companies", value: "10+" },
    { label: "Happy Customer", value: "150+" },
   
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Guarantee",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
     bgColor: "white",
      iconColor: "text-blue-500",
      hoverColor: "hover:from-blue-100 hover:to-blue-200/50",
      borderColor: "border-blue-200",
    },
    {
      icon: Gauge,
      title: "Speed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
     bgColor: "bg-gradient-to-br from-blue-50 to-blue-100/50",
      iconColor: "text-blue-500",
      hoverColor: "hover:from-blue-100 hover:to-blue-200/50",
      borderColor: "border-blue-200",
    },
    {
      icon: Lock,
      title: "Reliability",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100/50",
      iconColor: "text-blue-500",
      hoverColor: "hover:from-blue-100 hover:to-blue-200/50",
      borderColor: "border-blue-200",
    },
    {
      icon: Star,
      title: "Experience",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
     bgColor: "white",
      iconColor: "text-blue-500",
      hoverColor: "hover:from-blue-100 hover:to-blue-200/50",
      borderColor: "border-blue-200",
    },
  ]

  const services = [
    {
      icon: TrendingUp,
      title: "Vehicle & Equipment Finance",
      description:
        "Get competitive funding for cars, utes, trucks, or machinery — perfect for both personal and business use.",
    },
    {
      icon: Zap,
      title: "Business Lending Solutions",
      description: "Flexible funding options to help small and medium businesses grow, expand or manage cash flow.",
    },
    {
      icon: CheckCircle,
      title: "Personal Loan Access",
      description:
        "We help you secure the right personal loan, whether it's for a big purchase, debt consolidation, or unexpected expenses.",
    },
    {
      icon: Shield,
      title: "Independent, Unbiased Advice",
      description: "We're not tied to one lender. Our advice is based on what's best for you — always.",
    },
    {
      icon: Zap,
      title: "Fast Pre-Approval Process",
      description:
        "No unnecessary paperwork or long waits. We help you get pre-approved quickly so you can act with confidence.",
    },
    {
      icon: Users,
      title: "Trusted Lender Network",
      description:
        "We work with a wide panel of reputable New Zealand lenders to give you more choice and better rates.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      

      {/* Hero Banner - More Spacious */}
  <section className="relative overflow-hidden pt-20 pb-24 sm:pt-24 sm:pb-32">
  {/* Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-300/50 via-white to-blue-200/50" />
  </div>

  <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

      {/* LEFT — TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8 text-left"
      >
        <div>
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-blue-600 uppercase">
            About Us
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            FYN
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light max-w-xl">
          Smart finance solutions for Kiwis — personal, business, and beyond.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap gap-4 pt-2">
        
          <button className="px-6 py-3 bg-white border border-blue-900 hover:border-blue-400 hover:text-blue-700 text-slate-700 text-sm font-semibold rounded-xl shadow-sm transition-all">
            Contact Us
          </button>
        </div>
      </motion.div>

      {/* RIGHT — IMAGE / ILLUSTRATION */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="flex justify-center"
      >
        <img
          src={Pic}
          alt="About Illustration"
          className="w-[100%] md:w-full max-w-md drop-shadow-xl"
        />
      </motion.div>

    </div>
    
  </div>
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    className="transition duration-300 ease-in-out"
  >
    <path
      fill="#cde3ff"
      d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,192C840,192,960,160,1080,154.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    ></path>
  </svg>
</div>

</section>



      {/* About Us Section - Redesigned with better spacing */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-10 sm:py-18"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* LEFT: Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="space-y-6">
                <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-blue-600 uppercase">
                  Who We Are
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                  We&apos;re a New&nbsp;Zealand‑owned finance brokerage.
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  We&apos;re committed to helping individuals and businesses find tailored
                  funding and insurance solutions. With over 4 years of combined
                  industry experience, we know how to get the best outcomes—without the
                  jargon or the delays.
                </p>
              </div>

              {/* Stats row - Clean white cards */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-6 group-hover:border-transparent transition-all duration-300">
                      <p className="text-4xl sm:text-5xl font-bold text-slate-900 group-hover:text-black transition-colors mb-2">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-blue-600 group-hover:text-blue-900 transition-colors uppercase tracking-wide">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: Image */}
            <motion.div
  variants={itemVariants}
  className="relative lg:h-[500px]"
>
  <div className="relative h-full ">
    {/* Background blobs */}
    
    

    {/* Full height container for image */}
    <div className="relative h-full flex flex-col">
      {/* Image - Full available height */}
      <div className="flex-1  rounded-t-3xl">
        <img
          src={About}
          alt="Finance illustration"
          className="w-full h-full object-contain "
        />
      </div>

      {/* Stats - Fixed height bottom section */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 px-8 py-6 rounded-b-3xl border-t border-slate-200">
        <div className="flex items-center justify-around text-sm text-slate-600">
          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            Fast approvals
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            Trusted lenders
          </span>

          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            Tranparent services
          </span>
        </div>
      </div>
    </div>
  </div>
</motion.div>

          </div>
        </div>
      </motion.section>




      {/* Why Choose Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 sm:py-20 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-blue-900 uppercase"
                >
                  Transparent Process
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight"
                >
                  Why People Choose Us
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-slate-600 text-base sm:text-lg leading-relaxed"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </motion.p>
              </div>

              {/* Image with play button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="relative"
              >
                <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={ip}
                    alt="Professional"
                    className="w-full h-full object-cover"
                  />
                  
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              {whyChooseUs.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className={`group relative  p-7  transition-all duration-300 cursor-pointer ${feature.bgColor} ${feature.borderColor} ${feature.hoverColor}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="mb-4"
                    >
                      <Icon className={`w-10 h-10 ${feature.iconColor} transition-all duration-300`} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-950">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      {/* <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 sm:py-32"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
           
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-200/70 p-10 sm:p-12 flex flex-col gap-6"
            >
              <span className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-500 to-indigo-500" />

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600 text-2xl font-bold">M</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Our Mission
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                To simplify finance for everyday Kiwis by giving honest guidance,
                access to trusted lenders, and loan options that actually fit
                their life – not the other way around.
              </p>
            </motion.div> */}

            {/* Vision Card */}
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 text-white p-10 sm:p-12 flex flex-col gap-6"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 w-48 h-48 rounded-full border-2 border-white/10" />
              <div className="pointer-events-none absolute -right-24 top-8 w-56 h-56 rounded-full border-2 border-white/5" />

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">V</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Our Vision
                </h3>
              </div>

              <p className="relative z-10 text-base sm:text-lg text-blue-50/95 leading-relaxed">
                To become New Zealand&apos;s most trusted finance partner – known
                for transparent advice, quick decisions, and solutions that grow
                with our customers through every stage of life.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section> */}

      {/* How It Works Section */}
     <section className="relative py-12 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Simplified Steps to Find Your Ideal Loan
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Follow these easy steps to get the best loan option hassle-free.
            </p>
          </motion.div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { id: "1", title: "Research & Explore", icon: "🔍", text: "Understand and compare loan options easily." },
        { id: "2", title: "Comparison Tools", icon: "⚖️", text: "Compare top lenders and benefits instantly." },
        { id: "3", title: "Reviews & Feedback", icon: "⭐", text: "Check ratings and experiences by real users." },
        { id: "4", title: "Secure Your Loan", icon: "💼", text: "Submit details securely and get approvals faster." }
      ].map((item) => (
        <div
          key={item.id}
          className="relative bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          {/* NUMBER CHIP ON CARD TOP CENTER (HALF OUTSIDE) */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
            <div className="px-3 py-1 text-[16px] font-semibold rounded-full bg-white shadow-md border border-slate-200 text-slate-600">
              {item.id}
            </div>
          </div>

          {/* OPTIONAL VERY SOFT HALF-CIRCLE BACKGROUND (CUT LOOK) */}
        <div className="relative h-20 overflow-hidden rounded-t-3xl">
  <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-[200%] h-[140px] 
    bg-[#77a0ec] rounded-full " />
</div>


          {/* SMALL ICON CIRCLE (NO NUMBER ON IT) */}
          <div className="flex justify-center -mt-8 mb-4">
            <div className="group relative w-14 h-14 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center overflow-hidden">
              {/* hover fill */}
              <span className="absolute inset-0 rounded-full bg-[#061563] scale-0 group-hover:scale-100 transition-transform duration-300" />
              <span className="relative z-10 text-2xl text-[#061563] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-7 pb-8 text-center">
            <h3 className="text-slate-900 font-semibold text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

     



 <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 sm:py-20 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div variants={itemVariants} className="text-center mb-10">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-blue-600 uppercase mb-4">
              What We Offer
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Our Services</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We provide practical, transparent, and flexible solutions designed around what matters most — your needs.
            </p>
          </motion.div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, idx) => {
    const Icon = service.icon
    return (
      <motion.div
        key={idx}
        variants={itemVariants}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="group relative bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 overflow-hidden"
      >
        {/* subtle background shape (top-right) */}
        <span className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-50 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        {/* subtle background shape (bottom-left) */}
        <span className="pointer-events-none absolute -bottom-14 -left-14 w-40 h-40 rounded-full bg-sky-50 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
          className="relative z-10"
        >
          <Icon className="w-14 h-14 text-blue-600 mb-5" />
        </motion.div>

        {/* content */}
        <div className="relative z-10 flex-1">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {service.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            {service.description}
          </p>
        </div>

        {/* bottom strip */}
        <div className="relative z-10 mt-6">
          <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full w-1/2 bg-blue-900 rounded-full group-hover:w-full transition-all duration-500" />
          </div>
        </div>
      </motion.div>
    )
  })}
</div>

        </div>
      </motion.section>


      {/* CTA Section - Modern Design */}
      <motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  className="relative py-12 sm:py-20 overflow-hidden"  // yahan change
>
  <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">  {/* yahan bhi thoda kam */}
      {/* Left Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"  // pehle space-y-8 tha
      >
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="inline-block text-xs sm:text-sm font-semibold tracking-[0.22em] text-blue-600 uppercase px-4 py-2 bg-blue-100/50 rounded-full"
                >
                  Ready to Get Started?
                </motion.span>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Get Your Free Quote Today
                </h2>

                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                  No pressure, no obligation — just simple, expert help to get you moving. We'll guide you every step of the way.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 pt-4">
                {[
                  { icon: "✓", text: "Fast pre-approval in minutes" },
                  { icon: "✓", text: "Compare multiple lenders instantly" },
                  { icon: "✓", text: "Expert guidance from real people" },
                  { icon: "✓", text: "100% confidential & secure" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.08, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="pt-6"
              >
                <motion.button
                  onClick={onBack}
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-900 text-white font-bold px-10 py-5 rounded-full hover:shadow-2xl transition-all text-lg overflow-hidden"
                >
                  <span className="relative z-10">Get Started Now</span>
                  <motion.svg
                    className="w-5 h-5 relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ translateX: 4 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Element */}
           <motion.div
  initial={{ opacity: 0, x: 40, scale: 0.9 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative hidden lg:block"
>
  {/* Illustration container without heavy shadow */}
  <div className="relative aspect-square rounded-3xl overflow-hidden bg-transparent">
    {/* Blob / illustration from unDraw/Pexels */}
    <div className="w-full h-full flex items-center justify-center">
     <img
  src={Quote}
  alt="Loan illustration"
  className="w-[600px] h-auto object-contain mx-auto"
/>


    </div>

    {/* Floating overlay cards on top of illustration */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Card 1 */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-10 w-44 bg-white rounded-2xl p-4 border border-slate-500 shadow-sm"
      >
        <p className="text-xs text-blue-900 font-semibold mb-1">Total Loan Approved</p>
        <p className="text-xl font-bold text-slate-900">4M+</p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-8 w-40 bg-white rounded-2xl p-4 border border-slate-500 shadow-sm"
      >
        <p className="text-xs text-blue-900 font-semibold mb-1">Avg. Processing</p>
        <p className="text-xl font-bold text-slate-900">2.5h</p>
        <p className="text-[11px] text-emerald-600 font-medium mt-1">95% faster</p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1 -translate-y-1/2 w-40 bg-white rounded-2xl p-4 border border-slate-500 shadow-sm"
      >
        <p className="text-xs font-semibold text-blue-900 mb-1">Customer Rating</p>
        <div className="flex gap-1 text-amber-400 text-lg">
          {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
        </div>
        <p className="text-[11px] text-slate-500 mt-1">4.9/5 from 800+ reviews</p>
      </motion.div>
                </div>

                {/* Floating dots background */}
               
              </div>

              {/* Glow effect */}
              
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 text-slate-400 py-12 text-center"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-3 text-sm">FYN Limited is a registered company in NZ (NZBN: 9429052469602)</p>
          <p className="text-sm">Holds Class 2 licence with FMA (FSP1009679)</p>
        </div>
      </motion.footer>
    </div>
  )
}
