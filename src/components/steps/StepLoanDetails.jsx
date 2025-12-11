
"use client"
import { motion } from "framer-motion"
import InputField from "../../components/ui/InputField"
import SelectField from "../../components/ui/SelectField"
import RadioGroup from "../../components/ui/RadioGroup"
import { Waves, DollarSign, BarChart3, Zap, TrendingUp, AlertCircle } from "lucide-react"

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

export default function StepLoanDetails({
  formData,
  onFormChange,
  errors = {},
  mode,
}) {
  const isExpress = mode === "express"
  const showFinalizationDetails = formData.isFinalized === true
  const isBusinessLoan = formData.isBusinessLoan === true

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4 md:space-y-6">

      {/* Info Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        <InfoCard icon={<Waves className="w-5 h-5" />} title="Asset Type" description="What are you financing?" color="from-blue-50 to-blue-100" borderColor="border-blue-200" />
        
        {!isExpress && (
          <>
            <InfoCard icon={<TrendingUp className="w-5 h-5" />} title="Loan Amount" description="How much do you need?" color="from-emerald-50 to-emerald-100" borderColor="border-emerald-200" />

            <InfoCard icon={<Zap className="w-5 h-5" />} title="Repayment" description="Choose your terms" color="from-amber-50 to-amber-100" borderColor="border-amber-200" />
          </>
        )}
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">

        {/* Asset Type — ALWAYS SHOW */}
        <SelectField
          label="Asset looking to purchase"
          value={formData.assetType}
          onChange={(value) => onFormChange({ assetType: value })}
          options={[
            { value: "car", label: "Motor Vehicle" },
            { value: "boat", label: "Marine" },
            { value: "motorhome", label: "Motorhome / Caravan" },
            { value: "other", label: "Other" },
          ]}
        />

        {/* ---------------- EXPRESS MODE ---------------- */}
        {isExpress && (
          <>
            <InputField
              label="Purchase price"
              type="currency"
              value={formData.purchasePrice}
              onChange={(value) => onFormChange({ purchasePrice: value })}
              icon={<DollarSign className="w-4 h-4" />}
            />

            <InputField
              label="Deposit / trade-in amount"
              type="currency"
              value={formData.deposit}
              onChange={(value) => onFormChange({ deposit: value })}
              icon={<DollarSign className="w-4 h-4" />}
            />

            <RadioGroup
              label="Is this a business loan?"
              value={formData.isBusinessLoan}
              onChange={(value) => onFormChange({ isBusinessLoan: value === "true" })}
              options={[
                { value: "true", label: "Yes, for business" },
                { value: "false", label: "No, personal use" },
              ]}
            />

            {/* Express stops here */}
          </>
        )}

        {/* ---------------- FULL MODE ---------------- */}
        {!isExpress && (
          <>
            {/* Finalised vehicle? */}
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
              <div className="text-xs text-red-600">{errors.isFinalized}</div>
            )}

            {/* If finalized → Registration + Purchase Price */}
            {showFinalizationDetails && (
              <>
                <InputField
                  label="Registration number"
                  value={formData.registrationNumber}
                  onChange={(v) => onFormChange({ registrationNumber: v })}
                />

             
              </>
            )}
                <InputField
                  label="Purchase price"
                  type="currency"
                  value={formData.purchasePrice}
                  onChange={(v) => onFormChange({ purchasePrice: v })}
                  icon={<DollarSign className="w-4 h-4" />}
                />
            {/* Deposit */}
            <InputField
              label="Deposit / Trade-in amount"
              type="currency"
              value={formData.deposit}
              onChange={(value) => onFormChange({ deposit: value })}
              icon={<DollarSign className="w-4 h-4" />}
            />

            {/* Loan Amount */}
            <InputField
              label="Loan amount"
              type="currency"
              value={formData.loanAmount}
              onChange={(value) => onFormChange({ loanAmount: value })}
              icon={<DollarSign className="w-4 h-4" />}
            />

            {/* Term */}
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

            {/* Repayment Frequency */}
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

            {/* Business Loan */}
            <RadioGroup
              label="Is this a business loan?"
              value={formData.isBusinessLoan}
              onChange={(value) => onFormChange({ isBusinessLoan: value === "true" })}
              options={[
                { value: "true", label: "Yes, for business" },
                { value: "false", label: "No, personal use" },
              ]}
            />

            {/* Business Type */}
            {isBusinessLoan && (
              <SelectField
                label="Business type"
                value={formData.businessType}
                onChange={(value) => onFormChange({ businessType: value })}
                options={[
                  { value: "company", label: "Company" },
                  { value: "trust", label: "Trust" },
                  { value: "sole-trader", label: "Sole Trader" },
                  { value: "partnership", label: "Partnership" },
                ]}
              />
            )}
          </>
        )}

      </motion.div>

      {/* FULL MODE Summary */}
      {!isExpress && (
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
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
              <p className="font-bold text-slate-900">{formData.repayFrequency || "N/A"}</p>
            </div>
          </div>
        </motion.div>
      )}

    </motion.div>
  )
}
