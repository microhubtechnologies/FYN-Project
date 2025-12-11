
// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { useLocation } from "react-router-dom"
// import LoanForm from "./loanform"
// import Sidebar from "./sidebar"

// export default function FormLayout() {
//   const location = useLocation()
//   const mode = location.state?.mode || "full"

//   const [currentStep, setCurrentStep] = useState(0)
//   const [errors, setErrors] = useState({})
//   const [formData, setFormData] = useState({
//     // Loan Details (common)
//     assetType: "car",
//     isFinalized: null, // boolean
//     registrationNumber: "",
//     purchasePrice: "",
//     deposit: "",
//     loanAmount: "",
//     loanTerm: "5",
//     repayFrequency: "",
//     isBusinessLoan: null, // boolean
//     businessType: "",

//     // Personal / Contact (some placeholders - fill later)
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     // ... other fields for full flow
//   })

//   // Steps definition
//   const allStepsBase = [
//     { id: "loan-details", title: "Loan Details" },
//     { id: "personal-info", title: "Personal Info" },
//     { id: "contact", title: "Contact Details" },
//     { id: "employment", title: "Employment" },
//     { id: "financial", title: "Financial Info" },
//   ]

//   const allStepsBusiness = [
//     { id: "loan-details", title: "Loan Details" },
//     { id: "business-entity", title: "Business Entity" },
//     { id: "business-finance", title: "Business Finance" },
//     { id: "applicant-personal", title: "Applicant Personal" },
//     { id: "review", title: "Review" },
//   ]

//   const expressSteps = [
//     { id: "loan-details", title: "Loan Details" },
//     { id: "personal-info", title: "Personal Info" },
//   ]

//   // Choose correct steps based on mode and business loan (only for full mode we may switch to business steps)
//   const steps = (() => {
//     if (mode === "express") return expressSteps
//     // full mode: if user already selected business loan (true) use business flow, else normal full flow
//     if (mode === "full" && formData.isBusinessLoan === true) return allStepsBusiness
//     return allStepsBase
//   })()

//   // VALIDATION for step index
//  const validateStep = (stepIndex) => {
//   const newErrors = {};
//   const stepId = steps[stepIndex]?.id;

//   // ----------------------- EXPRESS MODE -----------------------
//   if (mode === "express" && stepId === "loan-details") {
//     if (!formData.assetType) newErrors.assetType = "Select asset type";
//     if (!formData.purchasePrice) newErrors.purchasePrice = "Purchase price required";
    
//        if (!formData.deposit) newErrors.deposit = "Deposit is required"; 
//    if (formData.isBusinessLoan === null)
//       newErrors.isBusinessLoan = "Please select business use";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   }

//   // ----------------------- FULL MODE -----------------------
//   if (mode === "full" && stepId === "loan-details") {
//     if (formData.isFinalized === null)
//       newErrors.isFinalized = "Please select if you finalised a vehicle";

//     if (formData.isFinalized === true) {
//       if (!formData.registrationNumber)
//         newErrors.registrationNumber = "Registration number required";

//       if (!formData.purchasePrice)
//         newErrors.purchasePrice = "Purchase price required";
//     }

//     if (!formData.loanAmount)
//       newErrors.loanAmount = "Loan amount required";

//     if (!formData.repayFrequency)
//       newErrors.repayFrequency = "Repayment frequency required";

// if (formData.dependents === "" || formData.dependents === null)
//   newErrors.dependents = "Please enter number of dependents";

//      // Loan term = REQUIRED
//     if (!formData.loanTerm)
//       newErrors.loanTerm = "Loan term required";

//     if (formData.isBusinessLoan === null)
//       newErrors.isBusinessLoan = "Please select if this is business use";

//     if (formData.isBusinessLoan === true && !formData.businessType)
//       newErrors.businessType = "Business type required";
//   }

//  /* -------------------- PERSONAL INFO -------------------- */
//   if (stepId === "personal-info") {
//     // Common fields (Express + Full)
//     if (!formData.firstName) newErrors.firstName = "First name required";
//     if (!formData.lastName) newErrors.lastName = "Last name required";
//     if (!formData.email) newErrors.email = "Email required";
//     if (!formData.phone) newErrors.phone = "Phone required";

//     /* EXPRESS MODE ONLY */
//     if (mode === "express") {
//       if (!formData.employmentStatus)
//         newErrors.employmentStatus = "Employment status required";

//       if (!formData.accommodationStatus)
//         newErrors.accommodationStatus = "Accommodation status required";

//       // Either address search OR manual address required
//       if (!formData.addressSearch && !formData.manualAddress)
//         newErrors.address = "Please provide an address";

//       setErrors(newErrors);
//       return Object.keys(newErrors).length === 0;
//     }

//     /* FULL MODE ONLY */
//     if (mode === "full") {
//       if (!formData.gender) newErrors.gender = "Gender required";
//       if (!formData.dob) newErrors.dob = "Date of birth required";
//       if (!formData.residency) newErrors.residency = "Residency status required";
//       if (!formData.maritalStatus) newErrors.maritalStatus = "Marital status required";
//       if (formData.dependents === "") newErrors.dependents = "Number of dependents required";

//       // Licence details required
//       if (!formData.licenceNumber) newErrors.licenceNumber = "Licence number required";
//       if (!formData.licenceVersion) newErrors.licenceVersion = "Licence version required";
//       if (!formData.licenceType) newErrors.licenceType = "Licence type required";
//       if (!formData.licenceExpiry) newErrors.licenceExpiry = "Licence expiry required";
//     }
//   }




//   if (stepId === "contact") {
//   // Email
//   if (!formData.contactEmail) {
//     newErrors.contactEmail = "Email is required";
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
//     newErrors.contactEmail = "Enter a valid email";
//   }

//   // Phone (basic NZ/IN check)
//   if (!formData.contactPhone) {
//     newErrors.contactPhone = "Phone number is required";
//   } else if (!/^[0-9]{7,15}$/.test(formData.contactPhone)) {
//     newErrors.contactPhone = "Enter a valid phone number";
//   }

//   // Address Search or Manual
//   const usingSearch = formData.addressSearch && formData.addressSearch.trim() !== "";
//   const usingManual =
//     formData.manualAddress &&
//     formData.manualAddress.line1 &&
//     formData.manualAddress.city &&
//     formData.manualAddress.postcode;

//   if (!usingSearch && !usingManual) {
//     newErrors.address = "Please provide an address (search or manual)";
//   }

//   // Manual address fields (if opened)
//   if (formData.manualAddressOpen) {
//     if (!formData.manualAddress?.line1)
//       newErrors.line1 = "Address line 1 required";

//     if (!formData.manualAddress?.city)
//       newErrors.city = "City required";

//     if (!formData.manualAddress?.postcode)
//       newErrors.postcode = "Postcode required";
//   }

//   // Accommodation status
//   if (!formData.accommodationStatus)
//     newErrors.accommodationStatus = "Accommodation status required";

//   // Checkbox: lived for 2 years
//   if (formData.lived2Years === null)
//     newErrors.lived2Years = "Please confirm if you lived here 2+ years";
// }

//   setErrors(newErrors);
//   return Object.keys(newErrors).length === 0;
// };


// // FormLayout.jsx ke andar validateStep me

//   const handleNext = () => {
//     if (validateStep(currentStep)) {
//       // if last step -> submission (handle outside)
//       if (currentStep < steps.length - 1) {
//         setCurrentStep(currentStep + 1)
//       } else {
//         // final submit - parent can send email / API call here
//         // Example: collectLoanDetailsForEmail(formData) and call backend
//         console.log("Final submit payload:", formData)
//       }
//     }
//   }

//   const handlePrev = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1)
//     }
//   }

//   const handleFormChange = (updates) => {
//     // updates may contain booleans, strings etc.
//     setFormData((prev) => ({ ...prev, ...updates }))
//     setErrors({})
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       <div className="flex h-screen overflow-hidden flex-col md:flex-row">
//         <Sidebar currentStep={currentStep} steps={steps} onStepClick={setCurrentStep} mode={mode} />

//         <div className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentStep}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="p-4 md:p-6 lg:p-8 max-w-4xl mx-auto w-full"
//             >
//               <LoanForm
//                 step={currentStep}
//                 steps={steps}
//                 formData={formData}
//                 onFormChange={handleFormChange}
//                 onNext={handleNext}
//                 onPrev={handlePrev}
//                 errors={errors}
//                 mode={mode}
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import LoanForm from "./loanform";
import Sidebar from "./sidebar";

export default function FormLayout() {
  const location = useLocation();
  const mode = location.state?.mode || "full";

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    // Loan Details (common)
    assetType: "car",
    isFinalized: null,
    registrationNumber: "",
    purchasePrice: "",
    deposit: "",
    loanAmount: "",
    loanTerm: "5",
    repayFrequency: "",
    isBusinessLoan: null,
    businessType: "",

    // Personal / Contact (examples)
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    residency: "",
    maritalStatus: "",
    dependents: "",
    licenceNumber: "",
    licenceVersion: "",
    licenceType: "",
    licenceExpiry: "",

    // Contact step specific
    contactEmail: "",
    contactPhone: "",
    addressSearch: "",
    manualAddressOpen: false,
    manualAddress: {
      line1: "",
      city: "",
      postcode: "",
    },
    accommodationStatus: "",
    lived2Years: null,

    // Employment step
    employmentStatus: "",
    occupationType: "",
    employerName: "",
    employerAddressSearch: "",
    employerAddressLine1: "",
    employerAddressLine2: "",
    employerAddressSuburb: "",
    employerAddressCity: "",
    employerAddressPostcode: "",
    employmentStartMonth: "",
    employmentStartYear: "",
    employmentYears: "",
    prevEmploymentStatus: "",
    prevOccupationType: "",
    prevEmployerName: "",
    prevEmploymentStartMonth: "",
    prevEmploymentStartYear: "",


    //financial
     income: {},
    expenses: [],
    assets: [],
    liabilities: []
  });

  // Steps
  const allStepsBase = [
    { id: "loan-details", title: "Loan Details" },
    { id: "personal-info", title: "Personal Info" },
    { id: "contact", title: "Contact Details" },
    { id: "employment", title: "Employment" },
    { id: "financial", title: "Financial Info" },
  ];

  const allStepsBusiness = [
    { id: "loan-details", title: "Loan Details" },
    { id: "business-entity", title: "Business Entity" },
    { id: "business-finance", title: "Business Finance" },
    { id: "applicant-personal", title: "Applicant Personal" },
    { id: "review", title: "Review" },
  ];

  const expressSteps = [
    { id: "loan-details", title: "Loan Details" },
    { id: "personal-info", title: "Personal Info" },
  ];

  const steps = (() => {
    if (mode === "express") return expressSteps;
    if (mode === "full" && formData.isBusinessLoan === true) return allStepsBusiness;
    return allStepsBase;
  })();

  // VALIDATION
  const validateStep = (stepIndex) => {
    const newErrors = {};
    const stepId = steps[stepIndex]?.id;

    /* ----------- LOAN DETAILS ----------- */
    if (stepId === "loan-details") {
      if (!formData.assetType) newErrors.assetType = "Select asset type";

      if (mode === "express") {
        if (!formData.purchasePrice) newErrors.purchasePrice = "Purchase price required";
        if (!formData.deposit) newErrors.deposit = "Deposit is required";
        if (formData.isBusinessLoan === null)
          newErrors.isBusinessLoan = "Please select business use";
      }

      if (mode === "full") {
        if (formData.isFinalized === null)
          newErrors.isFinalized = "Please select if you finalised a vehicle";

        if (formData.isFinalized === true) {
          if (!formData.registrationNumber)
            newErrors.registrationNumber = "Registration number required";
          if (!formData.purchasePrice)
            newErrors.purchasePrice = "Purchase price required";
        }

        if (!formData.loanAmount)
          newErrors.loanAmount = "Loan amount required";

        if (!formData.repayFrequency)
          newErrors.repayFrequency = "Repayment frequency required";

        if (!formData.loanTerm)
          newErrors.loanTerm = "Loan term required";

        if (formData.isBusinessLoan === null)
          newErrors.isBusinessLoan = "Please select if this is business use";

        if (formData.isBusinessLoan === true && !formData.businessType)
          newErrors.businessType = "Business type required";
      }
    }

    /* ----------- PERSONAL INFO ----------- */
    if (stepId === "personal-info") {
      if (!formData.firstName) newErrors.firstName = "First name required";
      if (!formData.lastName) newErrors.lastName = "Last name required";
      if (!formData.email) newErrors.email = "Email required";
      if (!formData.phone) newErrors.phone = "Phone required";

      if (mode === "express") {
        if (!formData.employmentStatus)
          newErrors.employmentStatus = "Employment status required";

        if (!formData.accommodationStatus)
          newErrors.accommodationStatus = "Accommodation status required";

        if (!formData.addressSearch && !formData.manualAddress?.line1)
          newErrors.address = "Please provide an address";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      }

      if (mode === "full") {
        if (!formData.gender) newErrors.gender = "Gender required";
        if (!formData.dob) newErrors.dob = "Date of birth required";
        if (!formData.residency) newErrors.residency = "Residency status required";
        if (!formData.maritalStatus) newErrors.maritalStatus = "Marital status required";
        if (formData.dependents === "")
          newErrors.dependents = "Number of dependents required";

        if (!formData.licenceNumber)
          newErrors.licenceNumber = "Licence number required";
        if (!formData.licenceVersion)
          newErrors.licenceVersion = "Licence version required";
        if (!formData.licenceType)
          newErrors.licenceType = "Licence type required";
        if (!formData.licenceExpiry)
          newErrors.licenceExpiry = "Licence expiry required";
      }
    }

    /* ----------- CONTACT STEP ----------- */
    if (stepId === "contact") {
      if (!formData.contactEmail) {
        newErrors.contactEmail = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
        newErrors.contactEmail = "Enter a valid email";
      }

      if (!formData.contactPhone) {
        newErrors.contactPhone = "Phone number is required";
      } else if (!/^[0-9]{7,15}$/.test(formData.contactPhone)) {
        newErrors.contactPhone = "Enter a valid phone number";
      }

      const usingSearch =
        formData.addressSearch && formData.addressSearch.trim() !== "";
      const usingManual =
        formData.manualAddress &&
        formData.manualAddress.line1 &&
        formData.manualAddress.city &&
        formData.manualAddress.postcode;

      if (!usingSearch && !usingManual) {
        newErrors.address = "Please provide an address (search or manual)";
      }

      if (formData.manualAddressOpen) {
        if (!formData.manualAddress?.line1)
          newErrors.line1 = "Address line 1 required";
        if (!formData.manualAddress?.city)
          newErrors.city = "City required";
        if (!formData.manualAddress?.postcode)
          newErrors.postcode = "Postcode required";
      }

      if (!formData.accommodationStatus)
        newErrors.accommodationStatus = "Accommodation status required";

      if (formData.lived2Years === null)
        newErrors.lived2Years = "Please confirm if you lived here 2+ years";
    }

    /* ----------- EMPLOYMENT STEP ----------- */
    if (stepId === "employment") {
      const e = {};

      if (!formData.employmentStatus) e.employmentStatus = "Required";
      if (!formData.occupationType) e.occupationType = "Required";
      if (!formData.employerName) e.employerName = "Required";
      if (!formData.employerAddressLine1)
        e.employerAddressLine1 = "Required";
      if (!formData.employerAddressCity)
        e.employerAddressCity = "Required";
      if (!formData.employerAddressPostcode)
        e.employerAddressPostcode = "Required";
      if (!formData.employmentYears)
        e.employmentYears = "Required";

      const years = Number(formData.employmentYears || 0);
      if (years > 0 && years < 2) {
        if (!formData.prevEmploymentStatus)
          e.prevEmploymentStatus = "Required";
        if (!formData.prevOccupationType)
          e.prevOccupationType = "Required";
        if (!formData.prevEmployerName)
          e.prevEmployerName = "Required";
        if (!formData.prevEmploymentStartMonth)
          e.prevEmploymentStartMonth = "Required";
        if (!formData.prevEmploymentStartYear)
          e.prevEmploymentStartYear = "Required";
      }

      Object.assign(newErrors, e);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep((s) => s + 1);
      } else {
        console.log("Final submit payload:", formData);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  const handleFormChange = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex h-screen overflow-hidden flex-col md:flex-row">
        <Sidebar
          currentStep={currentStep}
          steps={steps}
          onStepClick={setCurrentStep}
          mode={mode}
        />

        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-4 md:p-6 lg:p-8 max-w-4xl mx-auto w-full"
            >
              <LoanForm
                step={currentStep}
                steps={steps}
                formData={formData}
                onFormChange={handleFormChange}
                onNext={handleNext}
                onPrev={handlePrev}
                errors={errors}
                mode={mode}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
