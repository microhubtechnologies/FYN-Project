"use client"

import { motion } from "framer-motion"

// import InputField from "../components/ui/InputField"
// import SelectField from "../components/ui/SelectField"
// import RadioGroup from "../components/ui/RadioGroup"
import { Waves, DollarSign, BarChart3, Zap, TrendingUp, AlertCircle } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
}

function InfoCard({ icon, title, description, color, borderColor }) {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(0,0,0,0.08)" }}
      className={`bg-gradient-to-br ${color} border ${borderColor} rounded-lg p-3 cursor-pointer`}
    >
      <div className="text-blue-600 mb-2">{icon}</div>
      <h4 className="font-semibold text-slate-900 text-xs">{title}</h4>
      <p className="text-xs text-slate-600">{description}</p>
    </motion.div>
  )
}

export default function StepLoanDetails({ formData, onFormChange, errors = {} }) {
  const showFinalizationDetails = formData.isFinalized === true

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4 md:space-y-6">
      {/* Info Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        <InfoCard
          icon={<Waves className="w-5 h-5" />}
          title="Asset Type"
          description="What are you financing?"
          color="from-blue-50 to-blue-100"
          borderColor="border-blue-200"
        />
        <InfoCard
          icon={<TrendingUp className="w-5 h-5" />}
          title="Loan Amount"
          description="How much do you need?"
          color="from-emerald-50 to-emerald-100"
          borderColor="border-emerald-200"
        />
        <InfoCard
          icon={<Zap className="w-5 h-5" />}
          title="Repayment"
          description="Choose your terms"
          color="from-purple-50 to-purple-100"
          borderColor="border-purple-200"
        />
      </motion.div>

      {/* Form Fields */}
      <motion.div variants={itemVariants} className="space-y-4">
        <SelectField
          label="Asset looking to purchase"
          value={formData.assetType}
          onChange={(value) => onFormChange({ assetType: value })}
          options={[
            { value: "car", label: "🚗 Motor Vehicle" },
            { value: "boat", label: "🚤 Marine" },
            { value: "motorhome", label: "🏕️ Motorhome / Caravan" },
            { value: "other", label: "Other" },
          ]}
        />

        <div>
          <RadioGroup
            label="Have you finalised a vehicle?"
            value={formData.isFinalized}
            onChange={(value) => onFormChange({ isFinalized: value === "true" })}
            options={[
              { value: "true", label: "Yes, I have" },
              { value: "false", label: "No, still looking" },
            ]}
          />
          {errors.isFinalized && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mt-1.5 p-2 rounded bg-red-50 text-xs text-red-600"
            >
              <AlertCircle className="w-3 h-3" />
              {errors.isFinalized}
            </motion.div>
          )}
        </div>

        {showFinalizationDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <InputField
              label="Purchase price (estimate)"
              type="currency"
              value={formData.purchasePrice}
              onChange={(value) => onFormChange({ purchasePrice: value })}
              placeholder="e.g., $45,000"
              icon={<DollarSign className="w-4 h-4" />}
            />
            {errors.purchasePrice && <p className="text-xs text-red-600 mt-1">{errors.purchasePrice}</p>}
          </motion.div>
        )}

        <InputField
          label="Deposit / trade-in amount"
          type="currency"
          value={formData.deposit}
          onChange={(value) => onFormChange({ deposit: value })}
          placeholder="Optional"
          optional
          icon={<DollarSign className="w-4 h-4" />}
        />

        <InputField
          label="Loan amount"
          type="currency"
          value={formData.loanAmount}
          onChange={(value) => onFormChange({ loanAmount: value })}
          placeholder="Calculated automatically"
          icon={<DollarSign className="w-4 h-4" />}
        />
        {errors.loanAmount && <p className="text-xs text-red-600 -mt-2">{errors.loanAmount}</p>}

        <SelectField
          label="Preferred loan term"
          value={formData.loanTerm}
          onChange={(value) => onFormChange({ loanTerm: value })}
          options={[
            { value: "1", label: "1 Year" },
            { value: "2", label: "2 Years" },
            { value: "3", label: "3 Years" },
            { value: "4", label: "4 Years" },
            { value: "5", label: "5 Years (Recommended)" },
            { value: "6", label: "6 Years" },
            { value: "7", label: "7 Years" },
          ]}
        />

        <div>
          <SelectField
            label="Repayment frequency"
            value={formData.repayFrequency}
            onChange={(value) => onFormChange({ repayFrequency: value })}
            options={[
              { value: "monthly", label: "Monthly" },
              { value: "fortnightly", label: "Fortnightly" },
              { value: "weekly", label: "Weekly" },
            ]}
          />
          {errors.repayFrequency && <p className="text-xs text-red-600 mt-1">{errors.repayFrequency}</p>}
        </div>

        <div>
          <RadioGroup
            label="Is this a business loan?"
            value={formData.isBusinessLoan}
            onChange={(value) => onFormChange({ isBusinessLoan: value === "true" })}
            options={[
              { value: "true", label: "Yes, for business" },
              { value: "false", label: "No, personal use" },
            ]}
          />
          {errors.isBusinessLoan && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mt-1.5 p-2 rounded bg-red-50 text-xs text-red-600"
            >
              <AlertCircle className="w-3 h-3" />
              {errors.isBusinessLoan}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Summary */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 md:p-5 border border-blue-200"
      >
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="w-4 h-4 text-blue-600" />
          <h3 className="font-semibold text-slate-900 text-xs md:text-sm">Loan Summary</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div>
            <p className="text-slate-600">Loan Amount</p>
            <p className="font-bold text-slate-900">${formData.loanAmount || "0"}</p>
          </div>
          <div>
            <p className="text-slate-600">Term</p>
            <p className="font-bold text-slate-900">{formData.loanTerm} Years</p>
          </div>
          <div>
            <p className="text-slate-600">Frequency</p>
            <p className="font-bold text-slate-900 capitalize">{formData.repayFrequency || "Not selected"}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
