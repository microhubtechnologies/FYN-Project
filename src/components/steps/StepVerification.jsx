"use client"

import { motion } from "framer-motion"
import { AlertCircle, Shield } from "lucide-react"

export default function StepVerification({ formData, onFormChange }) {
  const checks = [
    { id: "identity", label: "Identity Verification", status: "pending" },
    { id: "income", label: "Income Verification", status: "pending" },
    { id: "credit", label: "Credit Check", status: "pending" },
    { id: "documents", label: "Document Review", status: "pending" },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-5">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-blue-50 border border-blue-200 rounded-lg p-4"
      >
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-slate-900 text-sm mb-1">Verification in Progress</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We're verifying your information. This usually takes a few minutes. You can check the status below.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-2.5">
        {checks.map((check, index) => (
          <motion.div
            key={check.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * (index + 1) }}
            className="flex items-center justify-between p-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="w-4 h-4 rounded-full border-2 border-slate-300 border-t-blue-600" />
              </motion.div>
              <span className="font-medium text-slate-900 text-sm">{check.label}</span>
            </div>
            <span className="text-xs text-slate-600">Verifying...</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
      >
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-slate-900 text-sm mb-1">What happens next?</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Once verification is complete, we'll provide you with personalized loan offers that match your financial
              situation.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
