"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import { Briefcase, Calendar, MapPin, Zap } from "lucide-react";

/* ---------------------- animations ----------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28 } },
};

/* ---------------------- debounce util -------------------- */
function debounce(fn, delay = 400) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/* ---------------------- main component ------------------- */
export default function StepEmployment({ formData = {}, onFormChange, errors = {} }) {
  // local UI state
  const [showManualEmployer, setShowManualEmployer] = useState(false);
  const [showManualPrevEmployer, setShowManualPrevEmployer] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const [prevSuggestions, setPrevSuggestions] = useState([]);
  const [loadingAddr, setLoadingAddr] = useState(false);

  // compute showPreviousEmployment by two ways:
  // 1) employmentYears numeric if present
  // 2) or compute from employmentStartMonth & employmentStartYear
  const parseNumber = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : NaN;
  };

  const yearsAtCurrentJob = parseNumber(formData.employmentYears);
  // compute from start month/year if yearsAtCurrentJob not given or NaN
  const computeYearsFromStart = useCallback(() => {
    const m = Number(formData.employmentStartMonth || NaN);
    const y = Number(formData.employmentStartYear || NaN);
    if (!m || !y) return NaN;
    // entered date: year y, month m-1
    const entered = new Date(y, m - 1, 1);
    const now = new Date();
    // difference in years (float)
    const diffMs = now - entered;
    const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
    return diffYears;
  }, [formData.employmentStartMonth, formData.employmentStartYear]);

  const yearsFromStart = computeYearsFromStart();

  const showPreviousEmployment =
    (Number.isFinite(yearsAtCurrentJob) && yearsAtCurrentJob > 0 && yearsAtCurrentJob < 2) ||
    (Number.isFinite(yearsFromStart) && yearsFromStart > 0 && yearsFromStart < 2);

  /* -------------------- Address autocomplete -------------------- */
  const fetchSuggestions = useCallback(
    debounce(async (query, isPrev = false) => {
      if (!query || query.length < 3) {
        if (isPrev) setPrevSuggestions([]);
        else setSuggestions([]);
        return;
      }

      setLoadingAddr(true);
      try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&countrycodes=nz&q=${encodeURIComponent(
          query
        )}`;
        const res = await fetch(url, {
          headers: { "User-Agent": "YourAppName" },
        });
        const data = await res.json();
        if (isPrev) setPrevSuggestions(data.slice(0, 6));
        else setSuggestions(data.slice(0, 6));
      } catch (e) {
        console.warn("Address autocomplete error", e);
        if (isPrev) setPrevSuggestions([]);
        else setSuggestions([]);
      } finally {
        setLoadingAddr(false);
      }
    }, 450),
    []
  );

  useEffect(() => {
    fetchSuggestions(formData.employerAddressSearch || "", false);
  }, [formData.employerAddressSearch, fetchSuggestions]);

  useEffect(() => {
    fetchSuggestions(formData.prevEmployerAddressSearch || "", true);
  }, [formData.prevEmployerAddressSearch, fetchSuggestions]);

  const handleSuggestionClick = (item, prefix = "") => {
    // prefix: "" for employer, "prev" for previous employer
    const a = item.address || {};
    if (prefix === "prev") {
      onFormChange({
        prevEmployerAddressSearch: item.display_name,
        prevEmployerAddressLine1: a.road || a.pedestrian || a.neighbourhood || "",
        prevEmployerAddressLine2: a.house_number || "",
        prevEmployerAddressSuburb: a.suburb || a.city_district || a.hamlet || "",
        prevEmployerAddressCity: a.city || a.town || a.village || "",
        prevEmployerAddressPostcode: a.postcode || "",
      });
      // show manual so user can edit if needed
      setShowManualPrevEmployer(true);
      setPrevSuggestions([]);
    } else {
      onFormChange({
        employerAddressSearch: item.display_name,
        employerAddressLine1: a.road || a.pedestrian || a.neighbourhood || "",
        employerAddressLine2: a.house_number || "",
        employerAddressSuburb: a.suburb || a.city_district || a.hamlet || "",
        employerAddressCity: a.city || a.town || a.village || "",
        employerAddressPostcode: a.postcode || "",
      });
      setShowManualEmployer(true);
      setSuggestions([]);
    }
  };

  /* --------------------- Year lists ---------------------- */
  // produce years 1995..2025 (you asked wide range). Adjust length if needed
  const years = Array.from({ length: 31 }, (_, i) => 2025 - i); // 2025 down to 1995

  /* --------------------- simple helper validation note ------------- */
  // If previous employment shows but required previous fields missing,
  // parent can show errors (we pass errors prop). This component ensures previous block is shown.
  // We won't modify parent errors from here; we show selected errors via InputField/SelectField props (they accept errors).

  /* --------------------- render ---------------------- */
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Info banner */}
      <motion.div
        variants={itemVariants}
        className="rounded-xl border border-orange-100/60 bg-gradient-to-r from-orange-50 to-amber-50 p-4"
      >
        <div className="flex gap-3 items-start">
          <Zap className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-slate-700 font-medium">Employment</p>
            <p className="text-xs text-slate-600 mt-1">
              Tell us about your current employment and — if needed — your previous employment.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Current employment divider */}
      <motion.div variants={itemVariants}>
        <div className="relative text-center">
          <span className="relative z-10 bg-backgroundColor px-2 text-sm font-semibold text-textColor">
            Current employment
          </span>
          <span className="absolute inset-x-0 top-1/2 h-px bg-primary/20"></span>
        </div>
      </motion.div>

      {/* Employment status */}
      <motion.div variants={itemVariants}>
        <SelectField
          label="Employment status"
          value={formData.employmentStatus || ""}
          options={[
            { value: "full-time", label: "Permanent (Full Time)" },
            { value: "part-time", label: "Permanent (Part Time)" },
            { value: "self-employed", label: "Self-employed" },
            { value: "fixed-term", label: "Fixed Term Contract" },
            { value: "seasonal", label: "Seasonal" },
            { value: "casual", label: "Casual" },
          ]}
          onChange={(value) => onFormChange({ employmentStatus: value })}
          error={errors.employmentStatus}
          required
        />
      </motion.div>

      {/* Occupation type */}
      <motion.div variants={itemVariants}>
        <SelectField
          label="Occupation type"
          value={formData.occupationType || ""}
          options={[
            { value: "Labourer", label: "Labourer" },
            { value: "Office Worker", label: "Office Worker" },
            { value: "Machinery Operator", label: "Machinery Operator" },
            { value: "Service & Sales", label: "Service & Sales" },
            { value: "Support Staff", label: "Support Staff" },
            { value: "Trades Person", label: "Trades Person" },
            { value: "Business Owner", label: "Business Owner" },
            { value: "Manager", label: "Manager" },
            { value: "Technician", label: "Technician" },
            { value: "Company Director", label: "Company Director" },
            { value: "Professional", label: "Professional" },
            {
              value: "Defense/Police/Fire/Ambulance",
              label: "Defense/Police/Fire/Ambulance",
            },
          ]}
          onChange={(value) => onFormChange({ occupationType: value })}
          error={errors.occupationType}
          required
        />
      </motion.div>

      {/* Employer name */}
      <motion.div variants={itemVariants}>
        <InputField
          label="Name of employer"
          value={formData.employerName || ""}
          placeholder="Company name"
          icon={<Briefcase className="w-4 h-4" />}
          onChange={(value) => onFormChange({ employerName: value })}
          error={errors.employerName}
          required
        />
      </motion.div>

      {/* Employer address header */}
      <motion.div variants={itemVariants}>
        <div className="relative text-center">
          <span className="relative z-10 bg-backgroundColor px-2 text-sm font-semibold text-textColor">
            Employer address
          </span>
          <span className="absolute inset-x-0 top-1/2 h-px bg-primary/20"></span>
        </div>
      </motion.div>

      {/* Employer address search */}
      <motion.div variants={itemVariants} className="relative">
        <InputField
          label="Address search"
          value={formData.employerAddressSearch || ""}
          placeholder="Start typing address"
          icon={<MapPin className="w-4 h-4" />}
          onChange={(value) => onFormChange({ employerAddressSearch: value })}
          error={errors.employerAddressSearch}
        />

        {/* suggestions dropdown */}
        {suggestions.length > 0 && (formData.employerAddressSearch || "").length >= 3 && (
          <ul className="absolute left-0 right-0 mt-1 bg-white border rounded-lg shadow-md max-h-56 overflow-auto z-30">
            {suggestions.map((it, idx) => (
              <li
                key={idx}
                onClick={() => handleSuggestionClick(it, "")}
                className="px-4 py-2 hover:bg-primary/10 cursor-pointer text-sm"
              >
                {it.display_name}
              </li>
            ))}
          </ul>
        )}

        {/* enter-manual toggle */}
        <div className="mt-1">
          <button
            type="button"
            onClick={() => setShowManualEmployer((s) => !s)}
            className="text-sm font-semibold text-blue-600"
          >
            {showManualEmployer ? "Use Search Instead" : "Enter address manually"}
          </button>
        </div>
      </motion.div>

      {/* Employer manual fields (toggle) */}
      {showManualEmployer && (
        <motion.div
          variants={itemVariants}
          className="grid gap-4 rounded-md border border-textColor/30 p-4"
        >
          <InputField
            label="Address line 1"
            value={formData.employerAddressLine1 || ""}
            onChange={(value) => onFormChange({ employerAddressLine1: value })}
            error={errors.employerAddressLine1}
            required
          />
          <InputField
            label="Address line 2"
            value={formData.employerAddressLine2 || ""}
            onChange={(value) => onFormChange({ employerAddressLine2: value })}
            error={errors.employerAddressLine2}
          />
          <InputField
            label="Suburb"
            value={formData.employerAddressSuburb || ""}
            onChange={(value) => onFormChange({ employerAddressSuburb: value })}
            error={errors.employerAddressSuburb}
          />
          <InputField
            label="City"
            value={formData.employerAddressCity || ""}
            onChange={(value) => onFormChange({ employerAddressCity: value })}
            error={errors.employerAddressCity}
            required
          />
          <InputField
            label="Post code"
            value={formData.employerAddressPostcode || ""}
            onChange={(value) => onFormChange({ employerAddressPostcode: value })}
            error={errors.employerAddressPostcode}
            required
          />
        </motion.div>
      )}

      {/* Start date current employment */}
    {/* Start date current employment */}
<motion.div variants={itemVariants}>
  <div className="flex flex-col gap-1">
    <label className="text-[15px] text-textColor">
      When did you start working here?
    </label>

    <div className="grid grid-cols-2 gap-3">
      <SelectField
      
        value={formData.employmentStartMonth || ""}
        options={[
          { value: "", label: "Month" },
          { value: "1", label: "January" },
          { value: "2", label: "February" },
          { value: "3", label: "March" },
          { value: "4", label: "April" },
          { value: "5", label: "May" },
          { value: "6", label: "June" },
          { value: "7", label: "July" },
          { value: "8", label: "August" },
          { value: "9", label: "September" },
          { value: "10", label: "October" },
          { value: "11", label: "November" },
          { value: "12", label: "December" },
        ]}
        onChange={(value) => onFormChange({ employmentStartMonth: value })}
        error={errors.employmentStartMonth}
      />

      <SelectField
       
        value={formData.employmentStartYear || ""}
        options={[
          { value: "", label: "Year" },
          ...years.map((y) => ({ value: String(y), label: String(y) })),
        ]}
        onChange={(value) => onFormChange({ employmentStartYear: value })}
        error={errors.employmentStartYear}
      />
    </div>
  </div>
</motion.div>


      {/* Years at current job (helps quickly decide) */}
     

      {/* If less than 2 years → show previous employment block */}
      {showPreviousEmployment && (
        <>
          {/* info box */}
          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-primary/30 bg-primary/5 p-4 flex gap-3"
          >
            <Zap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-[14px] font-medium text-textColor">Short employment history</p>
              <p className="text-[13px] text-textColor/80 mt-1 leading-relaxed">
                Since you have been in your current employment for less than 2 years, please provide details about your previous employment.
              </p>
            </div>
          </motion.div>

          {/* Employment history divider */}
          <motion.div variants={itemVariants}>
            <div className="relative text-center my-2">
              <span className="relative z-10 bg-backgroundColor px-2 text-sm font-semibold text-textColor">
                Employment history
              </span>
              <span className="absolute inset-x-0 top-1/2 h-px bg-primary/20"></span>
            </div>
          </motion.div>

          {/* Previous status + occupation + employer name */}
          <motion.div variants={itemVariants} className="space-y-4">
            <SelectField
              label="Previous employment status"
              value={formData.prevEmploymentStatus || ""}
              options={[
                { value: "", label: "" },
                { value: "full-time", label: "Permanent (Full Time)" },
                { value: "part-time", label: "Permanent (Part Time)" },
                { value: "self-employed", label: "Self-employed" },
                { value: "fixed-term", label: "Fixed Term Contract" },
                { value: "seasonal", label: "Seasonal" },
                { value: "casual", label: "Casual" },
              ]}
              onChange={(value) => onFormChange({ prevEmploymentStatus: value })}
              error={errors.prevEmploymentStatus}
            />

            <SelectField
              label="Previous occupation type"
              value={formData.prevOccupationType || ""}
              options={[
                { value: "", label: "" },
                { value: "Labourer", label: "Labourer" },
                { value: "Office Worker", label: "Office Worker" },
                { value: "Machinery Operator", label: "Machinery Operator" },
                { value: "Service & Sales", label: "Service & Sales" },
                { value: "Support Staff", label: "Support Staff" },
                { value: "Trades Person", label: "Trades Person" },
                { value: "Business Owner", label: "Business Owner" },
                { value: "Manager", label: "Manager" },
                { value: "Technician", label: "Technician" },
                { value: "Company Director", label: "Company Director" },
                { value: "Professional", label: "Professional" },
                {
                  value: "Defense/Police/Fire/Ambulance",
                  label: "Defense/Police/Fire/Ambulance",
                },
              ]}
              onChange={(value) => onFormChange({ prevOccupationType: value })}
              error={errors.prevOccupationType}
            />

            <InputField
              label="Name of previous employer"
              value={formData.prevEmployerName || ""}
              onChange={(value) => onFormChange({ prevEmployerName: value })}
              error={errors.prevEmployerName}
            />
          </motion.div>

          {/* Previous employer address search */}
          <motion.div variants={itemVariants} className="relative">
            <InputField
              label="Previous employer address search"
              value={formData.prevEmployerAddressSearch || ""}
              placeholder="Start typing previous employer address"
              icon={<MapPin className="w-4 h-4" />}
              onChange={(value) => onFormChange({ prevEmployerAddressSearch: value })}
              error={errors.prevEmployerAddressSearch}
            />

            {/* prev suggestions dropdown */}
            {prevSuggestions.length > 0 && (formData.prevEmployerAddressSearch || "").length >= 3 && (
              <ul className="absolute left-0 right-0 mt-1 bg-white border rounded-lg shadow-md max-h-56 overflow-auto z-30">
                {prevSuggestions.map((it, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleSuggestionClick(it, "prev")}
                    className="px-4 py-2 hover:bg-primary/10 cursor-pointer text-sm"
                  >
                    {it.display_name}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-1">
              <button
                type="button"
                onClick={() => setShowManualPrevEmployer((s) => !s)}
                className="text-sm font-semibold text-blue-600"
              >
                {showManualPrevEmployer ? "Use Search Instead" : "Enter address manually"}
              </button>
            </div>
          </motion.div>

          {/* Previous employer manual address block */}
          {showManualPrevEmployer && (
            <motion.div
              variants={itemVariants}
              className="grid gap-4 rounded-md border border-textColor/30 p-4"
            >
              <InputField
                label="Address line 1"
                value={formData.prevEmployerAddressLine1 || ""}
                onChange={(value) => onFormChange({ prevEmployerAddressLine1: value })}
                error={errors.prevEmployerAddressLine1}
              />
              <InputField
                label="Address line 2"
                value={formData.prevEmployerAddressLine2 || ""}
                onChange={(value) => onFormChange({ prevEmployerAddressLine2: value })}
                error={errors.prevEmployerAddressLine2}
              />
              <InputField
                label="Suburb"
                value={formData.prevEmployerAddressSuburb || ""}
                onChange={(value) => onFormChange({ prevEmployerAddressSuburb: value })}
                error={errors.prevEmployerAddressSuburb}
              />
              <InputField
                label="City"
                value={formData.prevEmployerAddressCity || ""}
                onChange={(value) => onFormChange({ prevEmployerAddressCity: value })}
                error={errors.prevEmployerAddressCity}
              />
              <InputField
                label="Post code"
                value={formData.prevEmployerAddressPostcode || ""}
                onChange={(value) => onFormChange({ prevEmployerAddressPostcode: value })}
                error={errors.prevEmployerAddressPostcode}
              />
            </motion.div>
          )}

          {/* Previous start date */}
        {/* Previous start date */}
<motion.div variants={itemVariants}>
  <div className="flex flex-col gap-1">
    <label className="text-[15px] text-textColor">
      When did you start working there?
    </label>

    <div className="grid grid-cols-2 gap-3">
      <SelectField
       
        value={formData.prevEmploymentStartMonth || ""}
        options={[
          { value: "", label: "Month" },
          { value: "1", label: "January" },
          { value: "2", label: "February" },
          { value: "3", label: "March" },
          { value: "4", label: "April" },
          { value: "5", label: "May" },
          { value: "6", label: "June" },
          { value: "7", label: "July" },
          { value: "8", label: "August" },
          { value: "9", label: "September" },
          { value: "10", label: "October" },
          { value: "11", label: "November" },
          { value: "12", label: "December" },
        ]}
        onChange={(value) =>
          onFormChange({ prevEmploymentStartMonth: value })
        }
        error={errors.prevEmploymentStartMonth}
      />

      <SelectField
        
        value={formData.prevEmploymentStartYear || ""}
        options={[
          { value: "", label: "Year" },
          ...years.map((y) => ({ value: String(y), label: String(y) })),
        ]}
        onChange={(value) =>
          onFormChange({ prevEmploymentStartYear: value })
        }
        error={errors.prevEmploymentStartYear}
      />
    </div>
  </div>
</motion.div>

        </>
      )}
    </motion.div>
  );
}
