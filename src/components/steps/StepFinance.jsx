"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, ChevronDown, DollarSign } from "lucide-react";
import InputField from "../ui/InputField"; // Ensure this path is correct
// If you don't have a specific SelectField, standard select is used below for simplicity in dynamic rows

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Reusable Amount Input with Frequency Dropdown
const AmountWithFrequency = ({
  amountValue,
  freqValue,
  onAmountChange,
  onFreqChange,
  placeholder = "0.00",
}) => (
  <div className="relative flex items-center">
    <div className="absolute left-3 text-gray-400">
      <DollarSign className="w-4 h-4" />
    </div>
    <input
      type="number"
      placeholder={placeholder}
      className="w-full pl-9 pr-16 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
      value={amountValue}
      onChange={(e) => onAmountChange(e.target.value)}
    />
    <div className="absolute right-0 top-0 bottom-0 flex items-center bg-gray-50 border-l border-gray-300 rounded-r-lg px-1">
      <select
        value={freqValue}
        onChange={(e) => onFreqChange(e.target.value)}
        className="bg-transparent text-xs font-medium text-gray-600 focus:outline-none pr-1 cursor-pointer appearance-none text-center w-10"
      >
        <option value="W">W</option>
        <option value="F">F</option>
        <option value="M">M</option>
        <option value="Y">Y</option>
      </select>
      <ChevronDown className="w-3 h-3 text-gray-400 pointer-events-none -ml-1" />
    </div>
  </div>
);

export default function StepFinancial({ formData, onFormChange }) {
  // Initialize local state if formData doesn't have these arrays yet
  const expenses = formData.expenses || [{ id: 1, type: "", amount: "", freq: "M" }];
  const assets = formData.assets || [{ id: 1, type: "", value: "" }];
  const liabilities = formData.liabilities || [
    { id: 1, type: "", balance: "", limit: "", repayment: "", freq: "M", lender: "" },
  ];

  // --- Handlers for Income ---
  const handleIncomeChange = (field, value) => {
    onFormChange({
      income: { ...formData.income, [field]: value },
    });
  };

  // --- Handlers for Expenses ---
  const addExpense = () => {
    const newExpenses = [
      ...expenses,
      { id: Date.now(), type: "", amount: "", freq: "M" },
    ];
    onFormChange({ expenses: newExpenses });
  };

  const removeExpense = (id) => {
    const newExpenses = expenses.filter((item) => item.id !== id);
    onFormChange({ expenses: newExpenses });
  };

  const updateExpense = (id, field, value) => {
    const newExpenses = expenses.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onFormChange({ expenses: newExpenses });
  };

  // --- Handlers for Assets ---
  const addAsset = () => {
    const newAssets = [...assets, { id: Date.now(), type: "", value: "" }];
    onFormChange({ assets: newAssets });
  };

  const removeAsset = (id) => {
    const newAssets = assets.filter((item) => item.id !== id);
    onFormChange({ assets: newAssets });
  };

  const updateAsset = (id, field, value) => {
    const newAssets = assets.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onFormChange({ assets: newAssets });
  };

  // --- Handlers for Liabilities ---
  const addLiability = () => {
    const newLiabilities = [
      ...liabilities,
      {
        id: Date.now(),
        type: "",
        balance: "",
        limit: "",
        repayment: "",
        freq: "M",
        lender: "",
      },
    ];
    onFormChange({ liabilities: newLiabilities });
  };

  const removeLiability = (id) => {
    const newLiabilities = liabilities.filter((item) => item.id !== id);
    onFormChange({ liabilities: newLiabilities });
  };

  const updateLiability = (id, field, value) => {
    const newLiabilities = liabilities.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onFormChange({ liabilities: newLiabilities });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 pb-20" // added padding bottom for scrolling
    >
      {/* SECTION 1: INCOME */}
      <motion.div
        variants={itemVariants}
        className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          Income <span className="text-sm font-normal text-gray-500 ml-auto">Monthly amount (Net)</span>
        </h3>
        
        <div className="space-y-4">
          {/* Wage */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 items-center">
            <label className="text-sm font-medium text-gray-700">Wage</label>
            <AmountWithFrequency
              amountValue={formData.income?.wageAmount || ""}
              freqValue={formData.income?.wageFreq || "M"}
              onAmountChange={(v) => handleIncomeChange("wageAmount", v)}
              onFreqChange={(v) => handleIncomeChange("wageFreq", v)}
            />
          </div>

          {/* Benefit */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 items-center">
            <label className="text-sm font-medium text-gray-700">Benefit</label>
            <AmountWithFrequency
              amountValue={formData.income?.benefitAmount || ""}
              freqValue={formData.income?.benefitFreq || "M"}
              onAmountChange={(v) => handleIncomeChange("benefitAmount", v)}
              onFreqChange={(v) => handleIncomeChange("benefitFreq", v)}
            />
          </div>

          {/* Partner's Income */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 items-center">
            <label className="text-sm font-medium text-gray-700">Your partner's income</label>
            <AmountWithFrequency
              amountValue={formData.income?.partnerAmount || ""}
              freqValue={formData.income?.partnerFreq || "M"}
              onAmountChange={(v) => handleIncomeChange("partnerAmount", v)}
              onFreqChange={(v) => handleIncomeChange("partnerFreq", v)}
            />
          </div>

          {/* Other Income */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 items-start md:items-center">
             <div className="w-full">
                <label className="text-sm font-medium text-gray-700 mb-1 block md:hidden">Other Income</label>
                <input
                    type="text"
                    placeholder="Please describe (e.g. Dividends)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-sm"
                    value={formData.income?.otherDesc || ""}
                    onChange={(e) => handleIncomeChange("otherDesc", e.target.value)}
                />
             </div>
            <AmountWithFrequency
              amountValue={formData.income?.otherAmount || ""}
              freqValue={formData.income?.otherFreq || "M"}
              onAmountChange={(v) => handleIncomeChange("otherAmount", v)}
              onFreqChange={(v) => handleIncomeChange("otherFreq", v)}
            />
          </div>
        </div>
      </motion.div>

      {/* SECTION 2: EXPENSES */}
      <motion.div
        variants={itemVariants}
        className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-between">
          Expenses
          <span className="text-sm font-normal text-gray-500">Monthly amount (Net)</span>
        </h3>

        <div className="space-y-3">
            <AnimatePresence>
            {expenses.map((expense) => (
                <motion.div
                key={expense.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-[1.2fr_1fr_auto] gap-3 items-center"
                >
                <select
                    value={expense.type}
                    onChange={(e) => updateExpense(expense.id, "type", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                >
                    <option value="" disabled>Select Expense</option>
                    <option value="rent">Rent</option>
                    <option value="mortgage">Mortgage</option>
                    <option value="living">Fixed Living</option>
                    <option value="school">School Fees</option>
                    <option value="insurance">Insurance</option>
                    <option value="transport">Transport/Car</option>
                    <option value="other">Other</option>
                </select>

                <AmountWithFrequency
                    amountValue={expense.amount}
                    freqValue={expense.freq}
                    onAmountChange={(v) => updateExpense(expense.id, "amount", v)}
                    onFreqChange={(v) => updateExpense(expense.id, "freq", v)}
                />

                <button
                    type="button"
                    onClick={() => removeExpense(expense.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-2"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={addExpense}
          className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add another expense
        </button>
      </motion.div>

      {/* SECTION 3: ASSETS */}
      <motion.div
        variants={itemVariants}
        className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex justify-between">
            Assets <span className="text-sm font-normal text-gray-500">Value</span>
        </h3>

        <div className="space-y-3">
          <AnimatePresence>
            {assets.map((asset) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-[1.2fr_1fr_auto] gap-3 items-center"
              >
                <select
                  value={asset.type}
                  onChange={(e) => updateAsset(asset.id, "type", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                >
                  <option value="" disabled>Select Asset</option>
                  <option value="vehicle">Motor Vehicle</option>
                  <option value="property">Property</option>
                  <option value="savings">Savings / Cash</option>
                  <option value="kiwisaver">KiwiSaver / Super</option>
                  <option value="shares">Shares / Investments</option>
                  <option value="household">Household Items</option>
                </select>

                <div className="relative flex items-center">
                    <div className="absolute left-3 text-gray-400">
                    <DollarSign className="w-4 h-4" />
                    </div>
                    <input
                    type="number"
                    placeholder="0.00"
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-sm"
                    value={asset.value}
                    onChange={(e) => updateAsset(asset.id, "value", e.target.value)}
                    />
                </div>

                <button
                  type="button"
                  onClick={() => removeAsset(asset.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-2"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={addAsset}
          className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add another asset
        </button>
      </motion.div>

      {/* SECTION 4: LIABILITIES */}
      <motion.div
        variants={itemVariants}
        className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Liabilities</h3>

        <div className="space-y-6">
          <AnimatePresence>
            {liabilities.map((liability, index) => (
              <motion.div
                key={liability.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-4 border border-gray-200 rounded-lg bg-gray-50 relative"
              >
                {/* Delete Button (Top Right) */}
                <button
                    type="button"
                    onClick={() => removeLiability(liability.id)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
                >
                    <Trash2 className="w-4 h-4" />
                </button>

                <div className="space-y-4">
                    {/* Liability Type */}
                    <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1 block">Liability Type</label>
                        <select
                            value={liability.type}
                            onChange={(e) => updateLiability(liability.id, "type", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                        >
                            <option value="" disabled>Select Type</option>
                            <option value="mortgage">Mortgage</option>
                            <option value="loan">Personal Loan</option>
                            <option value="credit-card">Credit Card</option>
                            <option value="overdraft">Overdraft</option>
                            <option value="hire-purchase">Hire Purchase</option>
                            <option value="fines">Fines</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Balance */}
                        <div>
                            <label className="text-xs font-semibold text-gray-600 mb-1 block">Balance</label>
                            <div className="relative">
                                <DollarSign className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
                                <input
                                    type="number"
                                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary"
                                    value={liability.balance}
                                    onChange={(e) => updateLiability(liability.id, "balance", e.target.value)}
                                />
                            </div>
                        </div>
                        {/* Limit */}
                        <div>
                            <label className="text-xs font-semibold text-gray-600 mb-1 block">Limit</label>
                            <div className="relative">
                                <DollarSign className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
                                <input
                                    type="number"
                                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary"
                                    value={liability.limit}
                                    onChange={(e) => updateLiability(liability.id, "limit", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Repayments */}
                    <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1 block">Repayments</label>
                        <AmountWithFrequency
                            amountValue={liability.repayment}
                            freqValue={liability.freq}
                            onAmountChange={(v) => updateLiability(liability.id, "repayment", v)}
                            onFreqChange={(v) => updateLiability(liability.id, "freq", v)}
                        />
                    </div>

                    {/* Bank / Lender Name */}
                    <div>
                         <label className="text-xs font-semibold text-gray-600 mb-1 block">Bank / Lender Name</label>
                         <input
                            type="text"
                            placeholder="e.g. ANZ, Toyota Finance"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary"
                            value={liability.lender}
                            onChange={(e) => updateLiability(liability.id, "lender", e.target.value)}
                         />
                    </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          <button
            type="button"
            onClick={addLiability}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add another liability
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
