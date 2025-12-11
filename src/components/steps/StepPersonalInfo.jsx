// "use client"

// import { motion } from "framer-motion"
// import InputField from "../ui/InputField"
// import { User, Mail, Phone, MapPin, FileText } from "lucide-react"

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.08, delayChildren: 0.1 },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 15 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
// }

// export default function StepPersonalInfo({ formData, onFormChange }) {
//   return (
//     <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-5">
//       <motion.div
//         variants={itemVariants}
//         className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100"
//       >
//         <div className="flex gap-3 items-start">
//           <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
//           <div>
//             <p className="text-sm text-slate-700 font-medium">Personal Information</p>
//             <p className="text-xs text-slate-600 mt-1">
//               Help us get to know you better. This information helps us personalize your loan experience.
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
//         <InputField
//           label="First Name"
//           placeholder="John"
//           icon={<User className="w-4 h-4" />}
//           onChange={(value) => onFormChange({ firstName: value })}
//         />
//         <InputField
//           label="Last Name"
//           placeholder="Doe"
//           icon={<User className="w-4 h-4" />}
//           onChange={(value) => onFormChange({ lastName: value })}
//         />
//       </motion.div>

//       <motion.div variants={itemVariants}>
//         <InputField
//           label="Email Address"
//           type="email"
//           placeholder="john@example.com"
//           icon={<Mail className="w-4 h-4" />}
//           onChange={(value) => onFormChange({ email: value })}
//         />
//       </motion.div>

//       <motion.div variants={itemVariants}>
//         <InputField
//           label="Phone Number"
//           type="tel"
//           placeholder="+1 (555) 000-0000"
//           icon={<Phone className="w-4 h-4" />}
//           onChange={(value) => onFormChange({ phone: value })}
//         />
//       </motion.div>

//       <motion.div variants={itemVariants}>
//         <InputField
//           label="Address"
//           placeholder="123 Main Street"
//           icon={<MapPin className="w-4 h-4" />}
//           onChange={(value) => onFormChange({ address: value })}
//         />
//       </motion.div>

//       <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
//         <InputField label="City" placeholder="New York" onChange={(value) => onFormChange({ city: value })} />
//         <InputField label="Postal Code" placeholder="10001" onChange={(value) => onFormChange({ postalCode: value })} />
//       </motion.div>
//     </motion.div>
//   )
// }
// StepPersonalInfo.jsx
"use client";

import { motion } from "framer-motion";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import RadioGroup from "../ui/RadioGroup";
import { User, Mail, Phone, Calendar, FileText, MapPin } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export default function StepPersonalInfo({
  formData,
  onFormChange,
  errors = {},
  mode,
}) {
  const isExpress = mode === "express";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="space-y-5"
    >
      {/* Header Card */}
      <motion.div
        variants={item}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100"
      >
        <div className="flex gap-3 items-start">
          <FileText className="w-4 h-4 text-blue-600 mt-0.5" />
          <div>
            <p className="font-medium text-sm text-slate-700">
              {isExpress ? "Basic Information" : "Personal Information"}
            </p>
            <p className="text-xs text-slate-600 mt-1">
              {isExpress
                ? "Tell us who you are so we can contact you."
                : "Help us get to know you better."}
            </p>
          </div>
        </div>
      </motion.div>

      {/* COMMON FIELDS (EXPRESS + FULL) */}
      <motion.div variants={item} className="grid md:grid-cols-2 gap-4">
        <InputField
          label="First Name"
          value={formData.firstName}
          icon={<User className="w-4 h-4" />}
          onChange={(v) => onFormChange({ firstName: v })}
        />
        {errors.firstName && (
          <p className="text-xs text-red-600">{errors.firstName}</p>
        )}

        <InputField
          label="Last Name"
          value={formData.lastName}
          icon={<User className="w-4 h-4" />}
          onChange={(v) => onFormChange({ lastName: v })}
        />
        {errors.lastName && (
          <p className="text-xs text-red-600">{errors.lastName}</p>
        )}
      </motion.div>

      <motion.div variants={item}>
        <InputField
          label="Email Address"
          type="email"
          value={formData.email}
          placeholder="john@example.com"
          icon={<Mail className="w-4 h-4" />}
          onChange={(v) => onFormChange({ email: v })}
        />
        {errors.email && (
          <p className="text-xs text-red-600">{errors.email}</p>
        )}
      </motion.div>

      <motion.div variants={item}>
        <InputField
          label="Phone Number"
          type="tel"
          value={formData.phone}
          placeholder="021 000 0000"
          icon={<Phone className="w-4 h-4" />}
          onChange={(v) => onFormChange({ phone: v })}
        />
        {errors.phone && (
          <p className="text-xs text-red-600">{errors.phone}</p>
        )}
      </motion.div>

      {/* EXPRESS-ONLY FIELDS */}
      {isExpress && (
        <>
          {/* Employment Status */}
          <motion.div variants={item}>
            <SelectField
              label="Employment Status"
              value={formData.employmentStatus}
              onChange={(v) => onFormChange({ employmentStatus: v })}
              options={[
                { value: "full-time", label: "Full-time" },
                { value: "part-time", label: "Part-time" },
                { value: "self-employed", label: "Self-employed" },
                { value: "contractor", label: "Contractor" },
                { value: "student", label: "Student" },
                { value: "unemployed", label: "Unemployed" },
              ]}
            />
            {errors.employmentStatus && (
              <p className="text-xs text-red-600">
                {errors.employmentStatus}
              </p>
            )}
          </motion.div>

          {/* Address Search */}
          <motion.div variants={item}>
            <InputField
              label="Address"
              placeholder="Start typing your address"
              value={formData.addressSearch}
              icon={<MapPin className="w-4 h-4" />}
              onChange={(v) => onFormChange({ addressSearch: v })}
            />
          </motion.div>
         

          {/* Accommodation Status */}
          <motion.div variants={item}>
            <SelectField
              label="Accommodation Status"
              value={formData.accommodation}
              onChange={(v) => onFormChange({ accommodation: v })}
              options={[
                { value: "own-home", label: "Own Home" },
                { value: "renting", label: "Renting" },
                { value: "boarding", label: "Boarding" },
                { value: "with-family", label: "Living With Family" },
              ]}
            />
          </motion.div>

          {/* Spacer so bottom doesn't look cut */}
          <div className="pb-3"></div>
        </>
      )}

      {/* ---------------- FULL MODE FIELDS ---------------- */}
      {!isExpress && (
        <>
          {/* Gender */}
          <motion.div variants={item}>
            <RadioGroup
              label="Gender"
              value={formData.gender}
              onChange={(v) => onFormChange({ gender: v })}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
            />
            {errors.gender && (
              <p className="text-xs text-red-600">{errors.gender}</p>
            )}
          </motion.div>

          {/* DOB */}
          <motion.div variants={item}>
            <InputField
              label="Date of Birth"
              type="date"
              value={formData.dob}
              icon={<Calendar className="w-4 h-4" />}
              onChange={(v) => onFormChange({ dob: v })}
            />
          </motion.div>

          {/* Residency */}
          <motion.div variants={item}>
            <SelectField
              label="Residency Type"
              value={formData.residency}
              onChange={(v) => onFormChange({ residency: v })}
              options={[
                { value: "citizen", label: "NZ Citizen" },
                { value: "resident", label: "NZ Resident" },
                { value: "visa", label: "NZ Work Visa" },
                { value: "other", label: "Other" },
              ]}
            />
          </motion.div>

          {/* Marital Status */}
          <motion.div variants={item}>
            <SelectField
              label="Marital Status"
              value={formData.maritalStatus}
              onChange={(v) => onFormChange({ maritalStatus: v })}
              options={[
                { value: "single", label: "Single" },
                { value: "married", label: "Married" },
                { value: "de-facto", label: "De facto" },
              ]}
            />
          </motion.div>

{/* Number of Dependents */}
<motion.div variants={item}>
  <InputField
    label="Number of children or dependents"
    type="number"
    min="0"
    value={formData.dependents}
    onChange={(v) => onFormChange({ dependents: v })}
  />

  <p className="text-[11px] text-slate-500 mt-1">
    Include all children under 18 and any other dependents who rely on
    your financial support (e.g. elderly parents, adult children with disabilities).
  </p>

  {errors.dependents && (
    <p className="text-xs text-red-600">{errors.dependents}</p>
  )}
</motion.div>




          {/* Dependents */}
         

          {/* Licence Details */}
          <motion.div variants={item} className="grid md:grid-cols-2 gap-4">
            <InputField
              label="Driver Licence Number"
              value={formData.licenceNumber}
              onChange={(v) => onFormChange({ licenceNumber: v })}
            />
            <InputField
              label="Licence Version"
              value={formData.licenceVersion}
              onChange={(v) => onFormChange({ licenceVersion: v })}
            />
          </motion.div>

          <motion.div variants={item}>
            <SelectField
              label="Licence Type"
              value={formData.licenceType}
              onChange={(v) => onFormChange({ licenceType: v })}
              options={[
                { value: "full", label: "Full" },
                { value: "restricted", label: "Restricted" },
                { value: "learner", label: "Learner" },
              ]}
            />
          </motion.div>

          <motion.div variants={item}>
            <InputField
              label="Licence Expiry"
              type="date"
              value={formData.licenceExpiry}
              onChange={(v) => onFormChange({ licenceExpiry: v })}
            />
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
