"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion'; // ✅ Only import motion from framer-motion


export default function InputField({ label, type = "text", placeholder, value, onChange, optional, icon }) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-1.5"
    >
      <label className="block text-xs font-semibold text-slate-900 uppercase tracking-wide">
        {label}
        {optional && <span className="ml-2 text-xs font-normal text-slate-500 lowercase">Optional</span>}
      </label>
      <motion.div
        animate={{
          boxShadow: isFocused ? "0 0 0 3px rgba(37, 99, 235, 0.1)" : "0 0 0 0 rgba(0,0,0,0)",
        }}
        className="relative"
      >
        <div className="relative flex items-center">
          {icon && <div className="absolute left-3.5 text-slate-400 pointer-events-none">{icon}</div>}
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full px-3.5 py-2.5 rounded-lg border-2 text-sm transition-all duration-300 outline-none ${
              icon ? "pl-11" : ""
            } ${isFocused ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-slate-300 bg-white"}`}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
