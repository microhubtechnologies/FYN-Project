"use client"

import { motion } from "framer-motion"
import InputField from "../ui/InputField"
import SelectField from "../ui/SelectField"
import { Briefcase, DollarSign, Calendar, Zap } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export default function StepEmployment({ formData, onFormChange }) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-5">
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-100"
      >
        <div className="flex gap-3 items-start">
          <Zap className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-slate-700 font-medium">Employment Information</p>
            <p className="text-xs text-slate-600 mt-1">
              Tell us about your employment. This helps us understand your financial stability.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectField
          label="Employment Status"
          options={[
            { value: "employed", label: "Employed Full-Time" },
            { value: "part-time", label: "Employed Part-Time" },
            { value: "self-employed", label: "Self-Employed" },
            { value: "retired", label: "Retired" },
            { value: "student", label: "Student" },
            { value: "other", label: "Other" },
          ]}
          onChange={(value) => onFormChange({ employmentStatus: value })}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputField
          label="Employer / Company Name"
          placeholder="ABC Corporation"
          icon={<Briefcase className="w-4 h-4" />}
          onChange={(value) => onFormChange({ employer: value })}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputField
          label="Job Title"
          placeholder="Senior Manager"
          icon={<Briefcase className="w-4 h-4" />}
          onChange={(value) => onFormChange({ jobTitle: value })}
        />
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
        <InputField
          label="Annual Income"
          type="currency"
          placeholder="$75,000"
          icon={<DollarSign className="w-4 h-4" />}
          onChange={(value) => onFormChange({ annualIncome: value })}
        />
        <InputField
          label="Years at Current Job"
          type="number"
          placeholder="3"
          icon={<Calendar className="w-4 h-4" />}
          onChange={(value) => onFormChange({ yearsAtJob: value })}
        />
      </motion.div>
    </motion.div>
  )
}
