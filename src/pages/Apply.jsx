import React, { useState } from "react";

export default function ApplyNowFull() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    loanAmount: "",
    loanType: "",
    city: "",
    employment: "",
    income: "",
  });

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex justify-center py-16 px-4 text-white">

      <div className="bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl max-w-2xl w-full p-8">

        {/* Progress Steps */}
        <div className="flex justify-center gap-3 mb-10">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold border
                ${step === n ? "bg-blue-500 border-blue-300 text-white scale-110" : "border-blue-300 text-blue-100"}
              `}
            >
              {n}
            </div>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Personal Information
            </h2>

            <div className="space-y-5">
              <input
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200"
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) => setForm({...form, fullName: e.target.value})}
              />
              <input
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
              />
              <input
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
              />
            </div>

            <button
              onClick={next}
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 p-3 rounded-xl text-lg font-bold"
            >
              Next →
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Loan Details
            </h2>

            <div className="space-y-5">
              <select
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white"
                value={form.loanType}
                onChange={(e) => setForm({...form, loanType: e.target.value})}
              >
                <option value="">Select Loan Type</option>
                <option value="Car Loan">Car Loan</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Business Loan">Business Loan</option>
              </select>

              <input
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200"
                placeholder="Loan Amount"
                value={form.loanAmount}
                onChange={(e) => setForm({...form, loanAmount: e.target.value})}
              />

              <input
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200"
                placeholder="City"
                value={form.city}
                onChange={(e) => setForm({...form, city: e.target.value})}
              />
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={back} className="text-blue-200 hover:text-white">
                ← Back
              </button>
              <button
                onClick={next}
                className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl text-lg font-bold"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Employment Information
            </h2>

            <div className="space-y-5">
              <select
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white"
                value={form.employment}
                onChange={(e) => setForm({...form, employment: e.target.value})}
              >
                <option value="">Employment Type</option>
                <option value="Salaried">Salaried</option>
                <option value="Self Employed">Self Employed</option>
              </select>

              <input
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200"
                placeholder="Monthly Income"
                value={form.income}
                onChange={(e) => setForm({...form, income: e.target.value})}
              />
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={back} className="text-blue-200 hover:text-white">
                ← Back
              </button>
              <button
                onClick={next}
                className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl text-lg font-bold"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 — SUBMIT */}
        {step === 4 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Submit Application</h2>
            <p className="text-blue-100 mb-8">
              Please confirm and submit your details.
            </p>

            <button
              onClick={() => alert("Form Submitted!")}
              className="w-full bg-green-600 hover:bg-green-700 p-4 rounded-xl text-lg font-bold"
            >
              Submit Now ✓
            </button>

            <button onClick={back} className="block mt-4 text-blue-200 hover:text-white">
              ← Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
