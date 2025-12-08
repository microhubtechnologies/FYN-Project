"use client"

import { motion } from "framer-motion"
import { CheckCircle, Circle } from "lucide-react"

export default function Sidebar({ currentStep, steps, onStepClick }) {
  return (
    <div className="hidden md:flex w-64 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white flex-col pt-8 pb-8 px-6 shadow-2xl sticky top-0 h-screen">
      {/* Logo */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
        >
          FYN
        </motion.div>
        <p className="text-blue-100 text-xs mt-1.5">Loan Application</p>
      </div>

      {/* Progress Overview */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
              <motion.circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 126 }}
                animate={{
                  strokeDashoffset: 126 - (126 * (currentStep + 1)) / steps.length,
                }}
                strokeDasharray="126"
                transition={{ duration: 0.5 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#dbeafe" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
              {currentStep + 1}/{steps.length}
            </div>
          </div>
          <div>
            <p className="text-blue-100 text-xs uppercase tracking-wider">Progress</p>
            <p className="text-white font-semibold text-sm">{Math.round(((currentStep + 1) / steps.length) * 100)}%</p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <nav className="flex-1 space-y-1.5">
        {steps.map((step, index) => (
          <motion.button
            key={step.id}
            onClick={() => onStepClick(index)}
            disabled={index > currentStep + 1}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 ${
              index === currentStep
                ? "bg-white text-blue-700 shadow-lg"
                : index < currentStep
                  ? "bg-blue-500/30 text-white hover:bg-blue-500/50"
                  : index <= currentStep + 1
                    ? "bg-blue-500/20 text-blue-100 hover:bg-blue-500/30"
                    : "bg-transparent text-blue-300/50 cursor-not-allowed"
            }`}
          >
            <div className="relative flex-shrink-0">
              {index < currentStep ? (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <CheckCircle className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  animate={{
                    scale: index === currentStep ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                >
                  <Circle className="w-4 h-4" />
                </motion.div>
              )}
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider opacity-70">Step {index + 1}</p>
              <p className="font-semibold text-xs">{step.title}</p>
            </div>
          </motion.button>
        ))}
      </nav>

      {/* Footer Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="border-t border-blue-500/30 pt-4 mt-auto"
      >
        <p className="text-xs text-blue-100 text-center leading-relaxed">Support available 24/7</p>
      </motion.div>
    </div>
  )
}
