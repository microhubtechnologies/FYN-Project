"use client"

import { motion } from "framer-motion"
import InputField from "../ui/InputField"
import { User, Mail, Phone, MapPin, FileText } from "lucide-react"

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

export default function StepPersonalInfo({ formData, onFormChange }) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-5">
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100"
      >
        <div className="flex gap-3 items-start">
          <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-slate-700 font-medium">Personal Information</p>
            <p className="text-xs text-slate-600 mt-1">
              Help us get to know you better. This information helps us personalize your loan experience.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
        <InputField
          label="First Name"
          placeholder="John"
          icon={<User className="w-4 h-4" />}
          onChange={(value) => onFormChange({ firstName: value })}
        />
        <InputField
          label="Last Name"
          placeholder="Doe"
          icon={<User className="w-4 h-4" />}
          onChange={(value) => onFormChange({ lastName: value })}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputField
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          icon={<Mail className="w-4 h-4" />}
          onChange={(value) => onFormChange({ email: value })}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputField
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 000-0000"
          icon={<Phone className="w-4 h-4" />}
          onChange={(value) => onFormChange({ phone: value })}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputField
          label="Address"
          placeholder="123 Main Street"
          icon={<MapPin className="w-4 h-4" />}
          onChange={(value) => onFormChange({ address: value })}
        />
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
        <InputField label="City" placeholder="New York" onChange={(value) => onFormChange({ city: value })} />
        <InputField label="Postal Code" placeholder="10001" onChange={(value) => onFormChange({ postalCode: value })} />
      </motion.div>
    </motion.div>
  )
}
