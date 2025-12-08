"use client"

import { motion } from "framer-motion"

export default function RadioGroup({ label, value, onChange, options }) {
  const stringValue = value === true ? "true" : value === false ? "false" : String(value || "")

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2.5"
    >
      <label className="block text-xs font-semibold text-slate-900 uppercase tracking-wide">{label}</label>
      <div className="flex gap-3">
        {options.map((option) => {
          const isSelected = stringValue === option.value

          return (
            <motion.button
              key={option.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange?.(option.value)}
              className={`flex-1 px-3 py-2.5 rounded-lg border-2 font-medium text-sm transition-all duration-300 ${
                isSelected
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected ? "border-blue-600 bg-blue-600" : "border-slate-300"
                  }`}
                >
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span>{option.label}</span>
              </div>
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}
