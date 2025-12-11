// import { useEffect, useRef, useState } from "react";
// import { MapPin } from "lucide-react";

// export default function StepContact({ formData, onFormChange, errors }) {
//   const autoRef = useRef(null);          // current address search
//   const prevAutoRef = useRef(null);       // previous address search

//   const [showManual, setShowManual] = useState(false);
//   const [showPrevAddress, setShowPrevAddress] = useState(
//     formData.lived2Years === false
//   );

//   /* -----------------------------
//        INIT GOOGLE AUTOCOMPLETE
//   ------------------------------ */
//   useEffect(() => {
//     if (!window.google) return;

//     // 1) CURRENT ADDRESS AUTOCOMPLETE
//     const auto = new window.google.maps.places.Autocomplete(autoRef.current, {
//       types: ["address"],
//       componentRestrictions: { country: "nz" },
//     });

//     auto.addListener("place_changed", () => {
//       const place = auto.getPlace();
//       fillAddress(place, "current");
//       setShowManual(true);
//     });

//     // 2) PREVIOUS ADDRESS AUTOCOMPLETE
//     if (prevAutoRef.current) {
//       const prevAuto = new window.google.maps.places.Autocomplete(
//         prevAutoRef.current,
//         {
//           types: ["address"],
//           componentRestrictions: { country: "nz" },
//         }
//       );

//       prevAuto.addListener("place_changed", () => {
//         const place = prevAuto.getPlace();
//         fillAddress(place, "previous");
//       });
//     }
//   }, []);

//   /* -----------------------------
//        PARSE GOOGLE ADDRESS
//   ------------------------------ */
//   const fillAddress = (place, type) => {
//     if (!place.address_components) return;

//     let line1 = "";
//     let suburb = "";
//     let city = "";
//     let postcode = "";

//     place.address_components.forEach((c) => {
//       if (c.types.includes("street_number")) {
//         line1 = c.long_name + " ";
//       }
//       if (c.types.includes("route")) {
//         line1 += c.long_name;
//       }
//       if (c.types.includes("locality")) {
//         suburb = c.long_name;
//       }
//       if (c.types.includes("administrative_area_level_1")) {
//         city = c.long_name;
//       }
//       if (c.types.includes("postal_code")) {
//         postcode = c.long_name;
//       }
//     });

//     if (type === "current") {
//       onFormChange({
//         addressSearch: place.formatted_address,
//         addressLine1: line1,
//         suburb,
//         city,
//         postcode,
//       });
//     } else {
//       onFormChange({
//         prevAddressSearch: place.formatted_address,
//         prevAddressLine1: line1,
//         prevSuburb: suburb,
//         prevCity: city,
//         prevPostcode: postcode,
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4">

//       {/* EMAIL */}
//       <Field
//         label="Email"
//         value={formData.email}
//         onChange={(v) => onFormChange({ email: v })}
//         error={errors?.email}
//       />

//       {/* PHONE */}
//       <Field
//         label="Mobile phone"
//         value={formData.phoneNumber}
//         onChange={(v) => onFormChange({ phoneNumber: v })}
//         error={errors?.phoneNumber}
//       />

//       {/* Divider */}
//       <Divider title="Address" />

//       {/* SEARCH ADDRESS */}
//       <div className="flex flex-col gap-1">
//         <label>Address Search</label>

//         <div className="relative">
//           <input
//             ref={autoRef}
//             type="text"
//             placeholder="Search address..."
//             defaultValue={formData.addressSearch}
//             className="w-full rounded-lg border px-4 py-3 pl-12"
//           />
//           <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
//         </div>

//         <button
//           type="button"
//           onClick={() => setShowManual(!showManual)}
//           className="text-sm text-blue-600 font-medium mt-1"
//         >
//           {showManual ? "Use Address Search" : "Enter Manually"}
//         </button>
//       </div>

//       {/* MANUAL ADDRESS */}
//       {showManual && (
//         <ManualAddressForm formData={formData} onFormChange={onFormChange} />
//       )}

//       {/* Accommodation */}
//       <Select
//         label="Accommodation Status"
//         value={formData.homeStatus}
//         onChange={(v) => onFormChange({ homeStatus: v })}
//         options={[
//           ["owned-mortgage", "Own Home (With Mortgage)"],
//           ["owned-nonmortgage", "Own Home (Without Mortgage)"],
//           ["rent", "Rent"],
//           ["board", "Board"],
//           ["family", "Live With Family"],
//         ]}
//       />

//       {/* Checkbox — lived 2 years */}
//       <div className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           checked={formData.lived2Years || false}
//           onChange={(e) => {
//             onFormChange({ lived2Years: e.target.checked });
//             setShowPrevAddress(!e.target.checked);
//           }}
//         />
//         <label>I have lived at this address for 2 years or longer</label>
//       </div>

//       {/* If NO → show previous address */}
//       {showPrevAddress && (
//         <>
//           <Divider title="Previous Address" />
//           <PrevAddressSection
//             formData={formData}
//             onFormChange={onFormChange}
//             prevAutoRef={prevAutoRef}
//           />
//         </>
//       )}
//     </div>
//   );
// }

// /* -----------------------------  
//    REUSABLE COMPONENTS
// ------------------------------ */

// function Field({ label, value, onChange, error }) {
//   return (
//     <div className="flex flex-col gap-1">
//       <label>{label}</label>
//       <input
//         value={value || ""}
//         onChange={(e) => onChange(e.target.value)}
//         className="rounded-lg border px-4 py-3"
//       />
//       {error && <p className="text-xs text-red-600">{error}</p>}
//     </div>
//   );
// }

// function Divider({ title }) {
//   return (
//     <p className="relative text-center my-2">
//       <span className="relative bg-white px-2 text-sm font-semibold">{title}</span>
//       <span className="absolute inset-0 top-1/2 block h-px bg-gray-300"></span>
//     </p>
//   );
// }

// function Select({ label, value, onChange, options }) {
//   return (
//     <div className="flex flex-col gap-1">
//       <label>{label}</label>
//       <select
//         value={value || ""}
//         onChange={(e) => onChange(e.target.value)}
//         className="rounded-lg border px-4 py-3"
//       >
//         <option value="">Select</option>
//         {options.map(([val, text]) => (
//           <option key={val} value={val}>
//             {text}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// function ManualAddressForm({ formData, onFormChange }) {
//   return (
//     <div className="grid gap-4 rounded-lg border p-4">
//       <Manual label="Address line 1" value={formData.addressLine1} onChange={(v) => onFormChange({ addressLine1: v })}/>
//       <Manual label="Address line 2" value={formData.addressLine2} onChange={(v) => onFormChange({ addressLine2: v })}/>
//       <Manual label="Suburb" value={formData.suburb} onChange={(v) => onFormChange({ suburb: v })}/>
//       <Manual label="City" value={formData.city} onChange={(v) => onFormChange({ city: v })}/>
//       <Manual label="Post code" value={formData.postcode} onChange={(v) => onFormChange({ postcode: v })}/>
//     </div>
//   );
// }

// function PrevAddressSection({ formData, onFormChange, prevAutoRef }) {
//   return (
//     <div className="flex flex-col gap-4">
//       {/* Search */}
//       <div className="relative">
//         <input
//           ref={prevAutoRef}
//           type="text"
//           placeholder="Search previous address..."
//           defaultValue={formData.prevAddressSearch}
//           className="w-full rounded-lg border px-4 py-3 pl-12"
//         />
//         <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
//       </div>

//       {/* Manual */}
//       <ManualAddressForm
//         formData={{
//           addressLine1: formData.prevAddressLine1,
//           addressLine2: formData.prevAddressLine2,
//           suburb: formData.prevSuburb,
//           city: formData.prevCity,
//           postcode: formData.prevPostcode,
//         }}
//         onFormChange={(obj) =>
//           onFormChange(
//             Object.fromEntries(
//               Object.entries(obj).map(([k, v]) => ["prev" + k[0].toUpperCase() + k.slice(1), v])
//             )
//           )
//         }
//       />
//     </div>
//   );
// }

// function Manual({ label, value, onChange }) {
//   return (
//     <div className="flex flex-col gap-1">
//       <label>{label}</label>
//       <input
//         value={value || ""}
//         onChange={(e) => onChange(e.target.value)}
//         className="rounded-lg border px-4 py-3"
//       />
//     </div>
//   );
// }

import { useState, useEffect } from "react";

/* DEBOUNCE FUNCTION */
function debounce(fn, delay = 400) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export default function StepContact({ formData, onFormChange, errors }) {
  const [showManual, setShowManual] = useState(false);
  const [showPrevManual, setShowPrevManual] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const [prevSuggestions, setPrevSuggestions] = useState([]);
  const [loadingAddr, setLoadingAddr] = useState(false);

  const [showPrevAddress, setShowPrevAddress] = useState(false);

  /* LIVE HERE 2 YEARS? */
  useEffect(() => {
    if (!formData.lived2Years) {
      if (formData.moveInMonth && formData.moveInYear) {
        const enteredDate = new Date(formData.moveInYear, formData.moveInMonth - 1);
        const today = new Date();
        const diffYears = today.getFullYear() - enteredDate.getFullYear();
        setShowPrevAddress(diffYears < 2);
      }
    } else {
      setShowPrevAddress(false);
    }
  }, [formData.lived2Years, formData.moveInMonth, formData.moveInYear]);

  /* FETCH SUGGESTIONS */
  const fetchSuggestions = debounce(async (query, isPrev = false) => {
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
      const res = await fetch(url, { headers: { "User-Agent": "YourAppName" } });
      const data = await res.json();
      if (isPrev) setPrevSuggestions(data.slice(0, 6));
      else setSuggestions(data.slice(0, 6));
    } catch (err) {
      console.log("Autocomplete error:", err);
    } finally {
      setLoadingAddr(false);
    }
  }, 450);

  useEffect(() => fetchSuggestions(formData.addressSearch), [formData.addressSearch]);
  useEffect(() => fetchSuggestions(formData.prevAddressSearch, true), [formData.prevAddressSearch]);

  /* HANDLE SUGGESTION CLICK */
  const handleSuggestionClick = (item, prefix = "") => {
    const a = item.address || {};
    onFormChange({
      [`${prefix}AddressSearch`]: item.display_name,
      [`${prefix}Line1`]: a.road || a.pedestrian || a.neighbourhood || "",
      [`${prefix}Line2`]: a.house_number || "",
      [`${prefix}Suburb`]: a.suburb || a.city_district || a.hamlet || "",
      [`${prefix}City`]: a.city || a.town || a.village || "",
      [`${prefix}Postcode`]: a.postcode || "",
    });
    prefix === "prev" ? setShowPrevManual(true) : setShowManual(true);
    prefix === "prev" ? setPrevSuggestions([]) : setSuggestions([]);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* EMAIL */}
      <InputBlock label="Email" value={formData.email} error={errors?.email} onChange={v => onFormChange({ email: v })} />
      {/* MOBILE PHONE */}
      <InputBlock label="Mobile Phone" value={formData.phoneNumber} error={errors?.phoneNumber} onChange={v => onFormChange({ phoneNumber: v })} />

      {/* CURRENT ADDRESS */}
      <FormDivider title="Current Address" />
      <AddressBlock
        labelPrefix="Current"
        dataPrefix=""
        formData={formData}
        onFormChange={onFormChange}
        showManual={showManual}
        setShowManual={setShowManual}
        suggestions={suggestions}
        handleSuggestionClick={handleSuggestionClick}
      />
      <SelectBlock
        label="Accommodation Status"
        value={formData.homeStatus}
        onChange={v => onFormChange({ homeStatus: v })}
        options={[
          ["owned-mortgage", "Own Home (With Mortgage)"],
          ["owned-nonmortgage", "Own Home (Without Mortgage)"],
          ["rent", "Rent"],
          ["board", "Board"],
          ["family", "Live With Family"],
        ]}
      />
      <div className="flex items-center gap-3 mt-1">
        <input type="checkbox" checked={formData.lived2Years || false} onChange={e => onFormChange({ lived2Years: e.target.checked })} className="h-5 w-5 rounded border border-textColor/30"/>
        <label className="text-[15px] text-textColor">I have lived at this address for 2 years or longer</label>
      </div>
      {!formData.lived2Years && (
        <div className="grid grid-cols-2 gap-3">
          <SelectBlock
            label="Move-in Month"
            value={formData.moveInMonth}
            onChange={v => onFormChange({ moveInMonth: v })}
            options={[["1","Jan"],["2","Feb"],["3","Mar"],["4","Apr"],["5","May"],["6","Jun"],["7","Jul"],["8","Aug"],["9","Sep"],["10","Oct"],["11","Nov"],["12","Dec"]]}
          />
          <SelectBlock
            label="Move-in Year"
            value={formData.moveInYear}
            onChange={v => onFormChange({ moveInYear: v })}
            options={[["2025","2025"],["2024","2024"],["2023","2023"]]}
          />
        </div>
      )}

      {/* PREVIOUS ADDRESS */}
      {showPrevAddress && (
        <>
          <FormDivider title="Previous Address" />

<div className="mt-1 rounded-md bg-blue-200 border border-blue-200 p-3 flex gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" 
       className="h-5 w-5 text-blue-600 mt-0.5" 
       fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
  </svg>

  <p className="text-sm text-grey-100 leading-5">
    As you have been living at your current address for less than 2 years,
    please provide your previous address.
  </p>
</div>





{/* Previous Address Search Input */}
<div className="flex flex-col gap-0.5 relative mt-2">
  <label className="text-[15px] text-textColor">Previous Address Search</label>

  <input
    type="text"
    placeholder="Search previous address..."
    value={formData.prevAddressSearch || ""}
    onChange={(e) => onFormChange({ prevAddressSearch: e.target.value })}
    className="flex w-full rounded-lg border border-textColor/30 bg-white px-4 py-3 pl-12 text-[15px] text-textColor"
  />

  {/* Toggle to Manual */}
  <button
    type="button"
    onClick={() => onFormChange({ showPrevManual: !formData.showPrevManual })}
    className="text-sm font-semibold text-blue-600 mt-1"
  >
    {formData.showPrevManual ? "Use Search Instead" : "Enter Manually"}
  </button>
</div>

{/* Manual Fields (toggle) */}
{formData.showPrevManual && (
  <div className="grid gap-4 rounded-md border border-textColor/30 p-4 mt-2">
    <ManualRow
      label="Address line 1"
      value={formData.prevLine1}
      onChange={(v) => onFormChange({ prevLine1: v })}
    />
    <ManualRow
      label="Address line 2"
      value={formData.prevLine2}
      onChange={(v) => onFormChange({ prevLine2: v })}
    />
    <ManualRow
      label="Suburb"
      value={formData.prevSuburb}
      onChange={(v) => onFormChange({ prevSuburb: v })}
    />
    <ManualRow
      label="City"
      value={formData.prevCity}
      onChange={(v) => onFormChange({ prevCity: v })}
    />
    <ManualRow
      label="Postcode"
      value={formData.prevPostcode}
      onChange={(v) => onFormChange({ prevPostcode: v })}
    />
  </div>
)}

{/* Previous Accommodation */}
<SelectBlock
  label="Previous Accommodation Status"
  value={formData.prevHomeStatus}
  onChange={(v) => onFormChange({ prevHomeStatus: v })}
  options={[
    ["owned-mortgage", "Own Home (With Mortgage)"],
    ["owned-nonmortgage", "Own Home (Without Mortgage)"],
    ["rent", "Rent"],
    ["board", "Board"],
    ["family", "Live With Family"],
  ]}
/>

{/* Move-in Date */}
<div className="grid grid-cols-2 gap-3 mt-2">
  <SelectBlock
    label="Previous Move-in Month"
    value={formData.prevMoveInMonth}
    onChange={(v) => onFormChange({ prevMoveInMonth: v })}
    options={[
      ["1", "Jan"], ["2", "Feb"], ["3", "Mar"], ["4", "Apr"],
      ["5", "May"], ["6", "Jun"], ["7", "Jul"], ["8", "Aug"],
      ["9", "Sep"], ["10", "Oct"], ["11", "Nov"], ["12", "Dec"],
    ]}
  />

  {/* ANY YEAR — 1980 to 2025 */}
  <SelectBlock
    label="Previous Move-in Year"
    value={formData.prevMoveInYear}
    onChange={(v) => onFormChange({ prevMoveInYear: v })}
    options={Array.from({ length: 46 }, (_, i) => {
      const year = 2025 - i;
      return [String(year), String(year)];
    })}
  />
</div>
        </>
      )}
    </div>
  );
}

/* --- SUBCOMPONENTS --- */
function InputBlock({ label, value, onChange, error }) {
  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-[15px] text-textColor">{label}</label>
      <input type="text" value={value || ""} onChange={e => onChange(e.target.value)} className="w-full rounded-lg border border-textColor/30 px-4 py-3"/>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

function SelectBlock({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-[15px] text-textColor">{label}</label>
      <select value={value || ""} onChange={e => onChange(e.target.value)} className="w-full rounded-lg border border-textColor/30 px-4 py-3">
        <option value="">Select</option>
        {options.map(([val, txt], i) => (<option key={i} value={val}>{txt}</option>))}
      </select>
    </div>
  );
}

function ManualRow({ label, value, onChange }) {
  return (
    <div className="flex flex-col gap-0.5 md:grid md:grid-cols-[1.2fr_3fr] md:items-center md:gap-10">
      <label className="text-[15px] text-textColor">{label}</label>
      <input type="text" value={value || ""} onChange={e => onChange(e.target.value)} className="w-full rounded-lg border border-textColor/30 px-4 py-3"/>
    </div>
  );
}

function FormDivider({ title }) {
  return (
    <p className="relative text-center before:absolute before:top-1/2 before:w-full before:h-px before:bg-primary/20 before:-translate-y-1/2">
      <span className="relative bg-backgroundColor px-1.5 z-10 font-semibold">{title}</span>
    </p>
  );
}

/* --- REUSABLE ADDRESS BLOCK --- */
function AddressBlock({ labelPrefix, dataPrefix, formData, onFormChange, showManual, setShowManual, suggestions, handleSuggestionClick }) {
  const searchValue = formData[`${dataPrefix}AddressSearch`] || "";
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder={`Search ${labelPrefix.toLowerCase()} address...`}
        value={searchValue}
        onChange={e => onFormChange({ [`${dataPrefix}AddressSearch`]: e.target.value })}
        className="flex w-full rounded-lg border border-textColor/30 bg-white px-4 py-3 pl-12 text-[15px] text-textColor"
      />
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-md max-h-56 overflow-auto z-20">
          {suggestions.map((item, idx) => (
            <li key={idx} onClick={() => handleSuggestionClick(item, dataPrefix)} className="px-4 py-2 hover:bg-primary/10 cursor-pointer text-sm">
              {item.display_name}
            </li>
          ))}
        </ul>
      )}
      <button type="button" onClick={() => setShowManual(!showManual)} className="text-sm font-semibold text-blue-600 mt-1">
        {showManual ? "Use Search Instead" : "Enter Manually"}
      </button>
      {showManual && (
        <div className="grid gap-4 rounded-md border border-textColor/30 p-4">
          <ManualRow label="Address line 1" value={formData[`${dataPrefix}Line1`]} onChange={v => onFormChange({ [`${dataPrefix}Line1`]: v })} />
          <ManualRow label="Address line 2" value={formData[`${dataPrefix}Line2`]} onChange={v => onFormChange({ [`${dataPrefix}Line2`]: v })} />
          <ManualRow label="Suburb" value={formData[`${dataPrefix}Suburb`]} onChange={v => onFormChange({ [`${dataPrefix}Suburb`]: v })} />
          <ManualRow label="City" value={formData[`${dataPrefix}City`]} onChange={v => onFormChange({ [`${dataPrefix}City`]: v })} />
          <ManualRow label="Postcode" value={formData[`${dataPrefix}Postcode`]} onChange={v => onFormChange({ [`${dataPrefix}Postcode`]: v })} />
        </div>
      )}
    </div>
  );
}
