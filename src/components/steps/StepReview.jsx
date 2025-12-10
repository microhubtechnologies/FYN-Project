"use client"

import { motion } from "framer-motion"
import { CheckCircle2, FileText, Zap, ArrowRight } from "lucide-react"

export default function StepReview({ formData, onFormChange }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-5">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-center p-8 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
          className="flex justify-center mb-4"
        >
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </motion.div>
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Application Submitted!</h2>
        <p className="text-slate-600 text-sm">
          Thank you for completing your loan application. We'll review it and get back to you shortly.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <h3 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
          <FileText className="w-4 h-4" />
          What to Expect
        </h3>

        {[
          { step: "1", title: "Review", desc: "Our team will review your application", icon: FileText },
          { step: "2", title: "Verification", desc: "We'll verify your information", icon: CheckCircle2 },
          { step: "3", title: "Approval", desc: "Receive loan offer decision", icon: Zap },
          { step: "4", title: "Funding", desc: "Get your funds", icon: ArrowRight },
        ].map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.08 }}
            className="flex gap-3 p-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold flex-shrink-0 text-xs">
              {item.step}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
              <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="p-4 rounded-lg bg-slate-50 border border-slate-200"
      >
        <p className="text-xs text-slate-600 leading-relaxed">
          Check your email for confirmation and next steps. If you have any questions, our support team is here to help!
        </p>
      </motion.div>
    </motion.div>
  )
}
