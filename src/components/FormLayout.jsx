"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoanForm from "../components/LoanForm"
import Sidebar from "../components/Sidebar"

export default function FormLayout() {
  const [currentStep, setCurrentStep] = useState(0)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    assetType: "car",
    isFinalized: null,
    purchasePrice: "",
    deposit: "",
    loanAmount: "50000",
    loanTerm: "5",
    repayFrequency: "",
    isBusinessLoan: null,
  })

  const steps = [
    { id: "loan-details", title: "Loan Details" },
    { id: "personal-info", title: "Personal Info" },
    { id: "employment", title: "Employment" },
    { id: "verification", title: "Verification" },
    { id: "review", title: "Review" },
  ]

  const validateStep = (step) => {
    const newErrors = {}

    if (step === 0) {
      if (!formData.purchasePrice && formData.isFinalized === true)
        newErrors.purchasePrice = "Purchase price is required"
      if (formData.isFinalized === null) newErrors.isFinalized = "Please select if vehicle is finalized"
      if (!formData.loanAmount) newErrors.loanAmount = "Loan amount is required"
      if (!formData.repayFrequency) newErrors.repayFrequency = "Repayment frequency is required"
      if (formData.isBusinessLoan === null) newErrors.isBusinessLoan = "Please select loan type"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFormChange = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }))
    setErrors({})
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex h-screen overflow-hidden flex-col md:flex-row">
        <Sidebar currentStep={currentStep} steps={steps} onStepClick={setCurrentStep} />

        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-4 md:p-6 lg:p-8 max-w-4xl mx-auto w-full"
            >
              <LoanForm
                step={currentStep}
                steps={steps}
                formData={formData}
                onFormChange={handleFormChange}
                onNext={handleNext}
                onPrev={handlePrev}
                errors={errors}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
