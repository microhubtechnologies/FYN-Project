"use client"

import { motion } from "framer-motion"
import StepLoanDetails from "./steps/StepLoanDetails"
import StepPersonalInfo from "./steps/StepPersonalInfo"
import StepEmployment from "./steps/StepEmployment"
import StepVerification from "./steps/StepVerification"
import StepReview from "./steps/StepReview"
import { ChevronLeft, ChevronRight } from "lucide-react"

const stepComponents = [StepLoanDetails, StepPersonalInfo, StepEmployment, StepVerification, StepReview]

export default function LoanForm({ step, steps, formData, onFormChange, onNext, onPrev, errors = {} }) {
  const StepComponent = stepComponents[step]

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">{steps[step].title}</h1>
          <p className="text-xs md:text-sm text-slate-600 mt-1.5">
            Step {step + 1} of {steps.length} • Complete your application
          </p>
        </div>
      </motion.div>

      {/* Form Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-xl shadow-md p-4 md:p-6 lg:p-8 border border-slate-100"
      >
        <StepComponent formData={formData} onFormChange={onFormChange} errors={errors} />
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3"
      >
        <button
          onClick={onPrev}
          disabled={step === 0}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
            step === 0
              ? "bg-slate-100 text-slate-400 cursor-not-allowed"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300 hover:shadow-lg"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-1.5">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index <= step ? "bg-blue-600" : "bg-slate-200"
              }`}
              animate={{
                width: index === step ? 24 : 6,
              }}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-lg font-medium text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
        >
          {step === steps.length - 1 ? "Submit" : "Next"}
          <ChevronRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  )
}
