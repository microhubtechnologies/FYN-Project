"use client"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronDown, Calculator } from "lucide-react"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import applyImage from '../assets/LoanD.png';
import ClaculateLoan from "./Calculator"
export default function ServiceDetailPage() {
  const navigate = useNavigate()
  const { serviceId } = useParams() // ID se read karega
  const [openFAQ, setOpenFAQ] = useState(0)



  // ID-based service mapping
  const serviceDetails = {
    "0": {
      title: "Fast, Flexible Car Finance with Great Rates",
      subtitle: "Get behind the wheel of your dream car today",
      description: "Whether you're buying your first car or upgrading to a new model, our car finance solutions offer competitive rates and flexible terms tailored to your budget.",
      image: "🚗",
      name: "Car Loans",
      benefits: ["Competitive interest rates", "Flexible loan terms from 1-7 years", "Fast approval process", "No hidden fees", "Finance new or used vehicles", "Expert support throughout"],
      whatYouNeed: ["Valid driver's license", "Proof of income (last 2 payslips)", "Bank statements (3 months)", "ID verification", "Car details or invoice"],
      processSteps: [
        { step: "1", title: "Apply in 10 minutes", desc: "Quick online application with all the details we need" },
        { step: "2", title: "Hear from us in 1 hour", desc: "Our team reviews and gets back with initial approval" },
        { step: "3", title: "Decision in 24 hours", desc: "Complete verification and final approval within a day" },
        { step: "4", title: "Funds transferred", desc: "Money in your account ready to purchase your car" }
      ],
      faqs: [
        { q: "How quickly can I get the funds?", a: "Once approved, funds are typically transferred within 24-48 hours to your nominated bank account." },
        { q: "Can I refinance my existing car loan?", a: "Yes, we offer refinancing options to help you get better rates or adjust your loan terms." },
        { q: "What's the maximum loan amount?", a: "Loan amounts range from $5,000 to $150,000 depending on your income and credit profile." },
        { q: "Do you finance used cars?", a: "Absolutely! We finance both new and used vehicles up to 10 years old." },
        { q: "Is early repayment possible?", a: "Yes, you can make additional payments or pay off early without penalty." }
      ]
    },
    "1": {
      title: "Ride Your Dream Bike with Simple Motorbike Finance",
      subtitle: "Easy financing for your next adventure",
      description: "Get on the road with our hassle-free motorbike financing. Whether it's a sports bike, cruiser, or adventure bike, we make it affordable.",
      image: "🏍️",
      name: "Motorbike Loans",
      benefits: ["Low interest rates for motorbikes", "Loan terms up to 5 years", "Quick application process", "Finance new or used bikes", "Flexible payment options", "Support for all bike types"],
      whatYouNeed: ["Loan Amount Range: ₹50,000 – ₹50,00,000", "Interest Rate starting from just 8.5%", "Flexible repayment tenure from 1 to 7 years", "Superfast approval in as little as 30 minutes"],
      processSteps: [
        { step: "1", title: "Apply in 10 minutes", desc: "Submit your application online with bike details" },
        { step: "2", title: "Hear from us in 1 hour", desc: "Quick review and pre-approval notification" },
        { step: "3", title: "Decision in 24 hours", desc: "Final approval after verification" },
        { step: "4", title: "Your bike awaits", desc: "Funds ready to buy your perfect bike" }
      ],
      faqs: [
        { q: "What bikes can I finance?", a: "We finance all types - sports bikes, cruisers, touring bikes, and adventure bikes." },
        { q: "Is a helmet purchase included?", a: "No, but you can include safety gear in your budget calculation." },
        { q: "Can I get GAP insurance?", a: "Yes, we offer optional Guaranteed Asset Protection coverage." },
        { q: "What's the minimum bike value?", a: "We finance bikes with a minimum value of $3,000." },
        { q: "Do you require a deposit?", a: "Deposits are flexible depending on your circumstances and credit profile." }
      ]
    },
    "2": {
      title: "Personal Loans Made Simple with Fast Approvals",
      subtitle: "Get funds for whatever you need",
      description: "Whether it's for home renovations, vacation, or consolidating debt, our personal loans offer competitive rates with no fuss.",
      image: "💰",
      name: "Personal Loans",
      benefits: ["Fast approval in 24 hours", "Flexible loan amounts $2,000-$100,000", "Terms from 1-7 years", "No security required", "Fixed interest rates", "Transparent terms"],
      whatYouNeed: ["Government-issued ID", "Proof of income", "Recent bank statements", "Contact details", "Employment verification"],
      processSteps: [
        { step: "1", title: "Apply in 10 minutes", desc: "Simple online form with basic information" },
        { step: "2", title: "Hear from us in 1 hour", desc: "Initial assessment and pre-approval" },
        { step: "3", title: "Decision in 24 hours", desc: "Final approval and verification" },
        { step: "4", title: "Funds in your account", desc: "Money ready to use for your needs" }
      ],
      faqs: [
        { q: "Can I use the loan for any purpose?", a: "Yes, personal loans are flexible and can be used for most purposes." },
        { q: "Is there a penalty for early repayment?", a: "No, you can repay early without any penalties." },
        { q: "What are the interest rates?", a: "Rates are competitive and depend on your credit profile. Get a quote for your specific situation." },
        { q: "Do I need to provide collateral?", a: "No, personal loans are unsecured - no collateral needed." },
        { q: "Can I adjust my repayment schedule?", a: "Yes, contact us to discuss flexible repayment options." }
      ]
    },
    "3": {
      title: "Flexible Funding to Grow Your Business",
      subtitle: "Smart financing for smart entrepreneurs",
      description: "Expand your business, manage cash flow, or invest in equipment with our business financing solutions designed for success.",
      image: "🏢",
      name: "Business Loans",
      benefits: ["Funding from $5,000-$500,000", "Fast 48-hour approval", "Flexible repayment terms", "Equipment and asset financing", "No prepayment penalties", "Dedicated business support"],
      whatYouNeed: ["Business registration", "Recent financial statements", "Business tax returns", "Bank statements", "Business plan", "ID verification"],
      processSteps: [
        { step: "1", title: "Apply in 10 minutes", desc: "Submit business details and financial information" },
        { step: "2", title: "Hear from us in 1 hour", desc: "Initial review of your application" },
        { step: "3", title: "Decision in 24 hours", desc: "Full assessment and approval notification" },
        { step: "4", title: "Funds transferred", desc: "Capital ready to invest in your business growth" }
      ],
      faqs: [
        { q: "What can I use business loan for?", a: "Inventory, equipment, expansion, cash flow, premises, or working capital." },
        { q: "How quickly can I get funding?", a: "Once approved, funds are typically available within 2-3 business days." },
        { q: "Do I need a personal guarantee?", a: "Depending on loan size and circumstances, this may be required." },
        { q: "What are typical interest rates?", a: "Rates vary based on loan amount, term, and business profile." },
        { q: "Can I increase my loan later?", a: "Yes, successful businesses can often access additional funding." }
      ]
    },
     "4": {
    title: "Combine Your Debts into One Easy Payment",
    subtitle: "Simplify your finances and save money",
    description:
      "Tired of juggling multiple debt payments? Consolidate all your debts into one manageable monthly payment with better rates.",
    image: "📊",
    name: "Debt Consolidation Loans",
    benefits: [
      "Combine multiple debts",
      "Lower monthly payments",
      "Lower interest rates",
      "Single payment",
      "Better cash flow",
      "Improve credit score",
    ],
    whatYouNeed: [
      "List of current debts",
      "Bank statements",
      "Proof of income",
      "Current loan details",
      "ID verification",
      "Employment history",
    ],
    processSteps: [
      { step: "1", title: "Apply in 10 minutes", desc: "Tell us about your debts" },
      { step: "2", title: "Hear from us in 1 hour", desc: "We calculate savings" },
      { step: "3", title: "Decision in 24 hours", desc: "Approval with a consolidation plan" },
      { step: "4", title: "Debts consolidated", desc: "One simple payment remains" },
    ],
    faqs: [
      { q: "How much can I save?", a: "Depends on interest rate difference." },
      { q: "Effect on credit?", a: "Improves over time with regular payments." },
      { q: "Types of debt included?", a: "Credit cards, personal loans, etc." },
      { q: "Bad credit accepted?", a: "Yes, multiple options available." },
      { q: "Consolidation time?", a: "7–10 business days." },
    ],
  },

  "5": {
    title: "Finance Your Caravan or Motorhome Easily",
    subtitle: "Make your travel dreams a reality",
    description:
      "Adventure awaits! Get affordable caravan and motorhome financing to hit the road in your dream mobile home.",
    image: "🚐",
    name: "Caravan Loans",
    benefits: [
      "Competitive caravan financing",
      "Loans up to $300,000",
      "Terms 1–10 years",
      "Finance new or used caravans",
      "Flexible conditions",
      "Quick approval",
    ],
    whatYouNeed: [
      "Valid driver's license",
      "Proof of income",
      "Bank statements",
      "ID verification",
      "Caravan details or invoice",
    ],
    processSteps: [
      { step: "1", title: "Apply in 10 minutes", desc: "Submit caravan details" },
      { step: "2", title: "Hear from us in 1 hour", desc: "Initial assessment" },
      { step: "3", title: "Decision in 24 hours", desc: "Full approval" },
      { step: "4", title: "Start your adventure", desc: "Funds ready to purchase" },
    ],
    faqs: [
      { q: "Can I finance used caravans?", a: "Yes, we finance both new and used caravans." },
      { q: "Is insurance included?", a: "Insurance is optional and can be added separately." },
      { q: "Minimum loan amount?", a: "$5,000." },
      { q: "Do you finance motorhomes?", a: "Yes, motorhomes and RVs are supported." },
      { q: "Approval time?", a: "Typically within 24 hours." },
    ],
  },

  "6": {
  title: "Finance Your Dream Boat with Ease",
  subtitle: "Smooth sailing with easy boat and marine finance",
  description: "Whether it's a jet ski, speed boat, or luxury marine vessel, we provide flexible marine finance options with quick approval and competitive rates.",
  image: "🛥️",
  name: "Boat & Marine Loans",
  benefits: [
    "Finance new or used boats",
    "Loan amounts up to $500,000",
    "Flexible terms 1–10 years",
    "Competitive marine interest rates",
    "Fast approval in 24–48 hours",
    "Support for all vessel types"
  ],
  whatYouNeed: [
    "Government ID",
    "Proof of income (last 2 payslips)",
    "Bank statements (3–6 months)",
    "Boat details / invoice",
    "Insurance details (if available)",
    "Credit check authorization"
  ],
  processSteps: [
    { step: "1", title: "Apply online", desc: "Fill a quick application with boat details" },
    { step: "2", title: "Get pre-approval", desc: "We assess and notify you quickly" },
    { step: "3", title: "Final approval", desc: "Complete verification and documentation" },
    { step: "4", title: "Purchase your boat", desc: "Funds transferred for your marine purchase" }
  ],
  faqs: [
    { q: "Do you finance used boats?", a: "Yes, we finance both new and used marine vessels." },
    { q: "Is insurance required?", a: "Marine insurance is recommended, not mandatory." },
    { q: "Minimum boat value?", a: "Minimum financed value is $5,000." },
    { q: "Can I include equipment?", a: "Yes, navigation and safety gear can be included." },
    { q: "How long is the approval time?", a: "Most approvals are completed within 24–48 hours." }
  ]
},
"7": {
  title: "Equipment Finance for Every Business Need",
  subtitle: "Power your growth with the right tools",
  description: "Get the equipment your business needs without affecting cash flow. From machinery to technology, we offer fast and flexible financing options.",
  image: "⚙️",
  name: "Equipment Finance",
  benefits: [
    "Finance new or used equipment",
    "Loans from $10,000 to $1,000,000",
    "Terms from 1–10 years",
    "Tax-friendly repayment structure",
    "Quick approval within 48 hours",
    "Low-documentation options available"
  ],
  whatYouNeed: [
    "Business registration documents",
    "Equipment quotation or invoice",
    "Bank statements (6–12 months)",
    "Financial statements (if required)",
    "Director/Owner ID",
    "GST & tax filings"
  ],
  processSteps: [
    { step: "1", title: "Apply easily", desc: "Submit business & equipment details" },
    { step: "2", title: "Pre-approval", desc: "Initial financing assessment" },
    { step: "3", title: "Final approval", desc: "Verification and loan confirmation" },
    { step: "4", title: "Equipment delivered", desc: "Funds released to the vendor" }
  ],
  faqs: [
    { q: "What equipment can I finance?", a: "Machinery, vehicles, tools, IT equipment, medical devices, and more." },
    { q: "Do you support startups?", a: "Yes, if minimal financials are available." },
    { q: "Can I upgrade equipment later?", a: "Yes, upgrade or refinance anytime." },
    { q: "Is collateral needed?", a: "The equipment itself often acts as security." },
    { q: "Approval time?", a: "Usually within 48 hours." }
  ]
},
"8": {
  title: "Finance Your Insurance Premiums Easily",
  subtitle: "Pay your annual insurance premium in easy monthly installments",
  description: "Don’t let large annual insurance premiums hurt your cash flow. Spread your payments over flexible monthly terms.",
  image: "🛡️",
  name: "Insurance Premium Finance",
  benefits: [
    "Pay insurance in monthly installments",
    "Better cash flow management",
    "Covers business & personal insurance",
    "Fast approval in minutes",
    "No hidden costs",
    "Flexible terms"
  ],
  whatYouNeed: [
    "Insurance policy details",
    "ID verification",
    "Basic income proof",
    "Bank statements",
    "Credit assessment"
  ],
  processSteps: [
    { step: "1", title: "Share insurance details", desc: "Upload your policy or renewal notice" },
    { step: "2", title: "Instant assessment", desc: "Quick evaluation of your details" },
    { step: "3", title: "Approval", desc: "Funding approved & setup completed" },
    { step: "4", title: "Monthly payments", desc: "Enjoy insurance coverage without upfront burden" }
  ],
  faqs: [
    { q: "Which insurance can be financed?", a: "Car, home, health, business, liability, and more." },
    { q: "Is the interest high?", a: "Rates are affordable and fixed." },
    { q: "Is credit check required?", a: "Yes, a basic check is required." },
    { q: "Can I cancel anytime?", a: "Yes, based on your insurer’s cancellation policy." },
    { q: "How quick is approval?", a: "Usually within minutes." }
  ]
}


    // Baaki services (4-6) same pattern me add kar sakte ho
  }

  const details = serviceDetails[serviceId] || serviceDetails["0"]

 const selectedService = serviceDetails[serviceId];

  // Agar galat ID ho
  if (!selectedService) {
    return <div className="p-10 text-center text-red-500">Service Not Found</div>;
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      

      {/* Hero Banner with Waves */}
      <section className="relative pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30" />
        <svg
          className="absolute bottom-0 left-0 w-full h-32 sm:h-48 text-blue-100 opacity-40"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.22em] text-blue-600 uppercase px-3 py-1.5 bg-blue-100/50 rounded-full">
                  {details.name}
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                  {details.title}
                </h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {details.subtitle}
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {details.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:shadow-lg transition-all w-fit"
              >
                Apply Now
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-blue-200/50 shadow-2xl flex items-center justify-center">
                  <span className="text-8xl">{details.image}</span>
                </div>
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -inset-4 border-2 border-blue-300/20 rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>



{/* LOAN OVERVIEW SECTION (Premium UI) */}
<section className="w-full py-16 px-4 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    <div className="relative">
      <img
        src={selectedService?.heroImage}
        alt={selectedService?.name}
        className="w-full h-auto rounded-2xl shadow-lg"
      />

     
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <h3 className="text-3xl font-bold text-gray-900 mb-4">
        Our {selectedService?.name}?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6">
         {selectedService?.description} 
      </p>

<ul className="text-primary space-y-3 mb-8">
          {selectedService?.whatYouNeed?.map((item, i) => (
            <li  key={i}>✔ {item}</li>
          ))}
        </ul>
      {/* MAIN BULLET POINTS */}
   
      {/* RESOURCES */}
    

      {/* APPLY BUTTON */}
      <button
        onClick={() => navigate("/apply-now")}
        className="px-8 py-4 bg-primary text-white bg-blue-950 rounded-xl text-lg font-semibold shadow hover:bg-primary/90 transition"
      >
        Apply Now
      </button>
    </div>

  </div>
</section>



{/* How to Apply Section */}
     {/* How to Apply Section */}
<section className="py-12 sm:py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
        How do I apply for a loan
      </h2>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Side - Timeline Steps */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Steps + Line wrapper */}
        <div className="relative">
          {/* Vertical Line - only behind steps */}
          <div className="absolute left-6 top-8 bottom-8 w-1 bg-blue-900 rounded-full" />
          {/*                  ^ bottom-0 se bottom-8 */}

          {/* Steps */}
          <div className="space-y-10">
            {details.processSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative pl-32"
              >
                {/* Number Circle */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="absolute -left-1 top-0 w-14 h-14 rounded-full bg-blue-50 border-2 border-blue-900 flex items-center justify-center font-semibold text-xl text-blue-900 shadow-lg"
                >
                  {item.step}
                </motion.div>

                {/* Step Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Apply Button - line ke neeche nahi jayegi */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-4 bg-blue-950 hover:bg-blue-800 text-white font-bold rounded-lg transition-all shadow-lg"
        >
          Apply now
        </motion.button>
      </motion.div>
            {/* Right Side - Image with Blob Shape */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-md">
                {/* Blob Background with dashed border */}
               {/* Blob Background */}
                    <img 
    src={applyImage} 
    alt="Scanner Feature"
    className=" max-w-md rounded-3xl object-cover  "
  />

 


                {/* Inner Content - Placeholder Images */}
                {/* <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[40% 60% 70% 30% / 40% 50% 60% 50%]">
                  <div className="space-y-6 px-8">
                   
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200/50"
                    >
                      <div className="text-4xl mb-3">👨‍💼</div>
                      <p className="text-sm font-semibold text-slate-800">Professional Support</p>
                    </motion.div>

                    
                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200/50"
                    >
                      <div className="text-4xl mb-3">😊</div>
                      <p className="text-sm font-semibold text-slate-800">Quick Decisions</p>
                    </motion.div>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>




{/* WHY CHOOSE US – Modern, No Icons, No Images */}
 <section className="py-10 sm:py-12 bg-gradient-to-b from-white to-slate-50/50"> 
<div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12"> 
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12" >
     <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3"> Why Choose Us </h2>
     <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        We offer a combination of transparency, trust, and convenience so you can
        borrow with confidence and repay with comfort.
      </p> 
     </motion.div> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
       {details.benefits.map((benefit, idx) => 
        ( <motion.div key={idx} 
        initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }} 
         transition={{ delay: idx * 0.08, duration: 0.5 }} 
         className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all" > 
  <div className="flex items-start gap-4"> 
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all">
       <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /> 
       </svg> 
       </div> 
       <p className="text-slate-700 font-medium">{benefit}</p> 
       </div> </motion.div> ))} </div>
        </div> 
        </section>


    <ClaculateLoan/>
    {/* FAQ Section */}
<section className="py-16 sm:py-24 bg-white">
  <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
        Frequently Asked Questions
      </h2>
      <p className="text-slate-600 text-lg">
        Get answers to common questions about our {details.name.toLowerCase()}
      </p> {/* ✅ FIXED */}
    </motion.div>

    <div className="space-y-3">
      {details.faqs.map((faq, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05, duration: 0.3 }}
          className="border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all"
        >
          <button
            onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
            className="w-full p-5 sm:p-6 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
          >
            <span className="font-semibold text-slate-900 text-left">{faq.q}</span>
            <motion.div
              animate={{ rotate: openFAQ === idx ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 ml-4"
            >
              <ChevronDown className="w-5 h-5 text-blue-600" />
            </motion.div>
          </button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: openFAQ === idx ? "auto" : 0, opacity: openFAQ === idx ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-slate-200 bg-gradient-to-b from-slate-50/50 to-white">
              <p className="text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      

    </div>
  )
}
