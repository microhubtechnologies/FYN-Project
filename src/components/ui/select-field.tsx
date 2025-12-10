"use client"

import { motion, useState } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function SelectField({ label, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const selectedOption = options.find((opt) => opt.value === value)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-1.5"
    >
      <label className="block text-xs font-semibold text-slate-900 uppercase tracking-wide">{label}</label>
      <motion.div
        animate={{
          boxShadow: isFocused ? "0 0 0 3px rgba(37, 99, 235, 0.1)" : "0 0 0 0 rgba(0,0,0,0)",
        }}
        className="relative"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-3.5 py-2.5 rounded-lg border-2 text-sm transition-all duration-300 outline-none flex items-center justify-between ${
            isFocused || isOpen ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-slate-300 bg-white"
          }`}
        >
          <span className={selectedOption ? "text-slate-900" : "text-slate-500"}>
            {selectedOption?.label || "Select an option"}
          </span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </motion.div>
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg border border-slate-200 shadow-lg z-10"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange?.(option.value)
                  setIsOpen(false)
                }}
                className={`w-full px-3.5 py-2.5 text-left text-sm hover:bg-blue-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  option.value === value ? "bg-blue-100 text-blue-900 font-semibold" : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
