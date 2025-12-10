import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import car from "../assets/car.png";
import marine from "../assets/cruise.png";
import motorhome from "../assets/motor-home.png";
import property from "../assets/personal.png";
import other from "../assets/ellipsis.png";
const services = [
  { key: "motor-vehicle", label: "Motor Vehicle", img: car },
  { key: "marine", label: "Marine", img: marine },
  { key: "motorhome", label: "Motorhome / Caravan", img: motorhome},
  { key: "motor bike", label: "Motor bike", img: property },
  { key: "Debt consolidation", label: "Debt consolidation", img: other },
];


export default function QuickPrequalForm({ isOpen, onClose, isInline = false }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    service: "",
    amount: 25000,
    term: 5,
    mode: "express",
  });

  if (!isInline && !isOpen) return null;

  return (
    <div
      className={
        isInline
          ? "bg-[#161f74] rounded-lg shadow-lg p-6 max-w-md w-full text-white"
          : "fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
      }
    >
      <div
        className={
          isInline
            ? "text-white"
            : "bg-[#171e60] rounded-2xl max-w-lg w-full p-6 shadow-2xl relative text-white"
        }
      >
        {!isInline && (
          <button
            className="absolute top-4 right-5 text-gray-300 hover:text-white text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
        )}

        {/* STEP BULLETS */}
        {/* <div className="flex gap-3 mb-8 justify-center">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className={`w-8 h-8 flex items-center justify-center rounded-full border text-base font-semibold transition-all 
              ${
                step === n
                  ? "bg-blue-500 border-blue-300 text-white shadow-lg scale-110"
                  : "bg-blue-900/40 border-blue-700 text-blue-200"
              }`}
            >
              {n}
            </div>
          ))}
        </div> */}

        {/* STEP 1 */}
       {/* STEP 1 - Better height */}
{step === 1 && (
  <div className="min-h-[380px] flex flex-col justify-center">
    <div className="font-semibold text-xl mb-8 text-center leading-tight">
      Select the type of loan you're looking for
    </div>
    <div className="grid grid-cols-3 gap-6 flex-1">
      {services.map((s) => (
        <button
          key={s.key}
          className={`
            service-card relative rounded-2xl border p-6 flex flex-col items-center gap-3
            transition-all duration-500 bg-white shadow-lg hover:shadow-2xl
            ${data.service === s.key
              ? "border-blue-500 shadow-2xl ring-2 ring-blue-400/50 scale-105"
              : "border-gray-300 hover:scale-105 hover:border-blue-400 hover:shadow-xl"
            }`}
          onClick={() => {
            setData((d) => ({ ...d, service: s.key }));
            setStep(2);
          }}
        >
          <div className="w-16 h-12 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-2">
            <img 
              src={s.img} 
              alt={s.label} 
              className="w-12 h-9 object-contain drop-shadow-sm"
            />
          </div>
          <span className="text-sm font-bold text-gray-800 text-center leading-tight px-1">
            {s.label}
          </span>
        </button>
      ))}
    </div>
  </div>
)}


{step === 2 && (
  <div className="min-h-[200px] flex flex-col justify-center space-y-6">
    <label className="block font-sans text-xl text-blue-100 leading-tight">
      Enter your desired loan amount
    </label>
<br></br>
    <div className="flex gap-3 items-center">
      <div className="text-3xl font-black bg-gradient-to-r from-blue-900/60 to-indigo-900/60 px-6 py-3 rounded-2xl flex items-center shadow-2xl border border-blue-500/30">
        ${data.amount.toLocaleString()}
        <button
          onClick={() => {
            const amt = prompt("Enter loan amount", data.amount);
            if (amt)
              setData((d) => ({
                ...d,
                amount: Math.max(1000, Number(amt)),
              }));
          }}
          className="ml-3 text-blue-200 hover:text-white text-xl cursor-pointer transition-colors"
          title="Edit amount"
        >
          ✏️
        </button>
      </div>
      <button
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg font-semibold transition-all ml-auto"
        onClick={() => setStep(3)}
      >
        Continue →
      </button>
    </div>

    <input
      type="range"
      min="1000"
      max="200000"
      step="1000"
      value={data.amount}
      className="w-full h-2 bg-blue-900/50 rounded-lg accent-blue-500 shadow-lg [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md"
      onChange={(e) =>
        setData((d) => ({ ...d, amount: Number(e.target.value) }))
      }
    />
  </div>
)}


{step === 3 && (
  <div className="min-h-[200px] flex flex-col justify-center space-y-6">
    <label className="block font-sans text-xl text-blue-100 leading-tight">
      Choose your preferred repayment period
    </label>
<br></br>
    <div className="flex gap-3 items-center">
      <div className="text-3xl font-black bg-gradient-to-r from-blue-900/60 to-indigo-900/60 px-8 py-4 rounded-2xl shadow-2xl border border-blue-500/30 flex items-center">
        {data.term} Years
      </div>
      <button
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg font-semibold transition-all ml-auto"
        onClick={() => setStep(4)}
      >
        Continue →
      </button>
    </div>

    <input
      type="range"
      min="1"
      max="10"
      step="1"
      value={data.term}
      className="w-full h-2 bg-blue-900/50 rounded-lg accent-blue-500 shadow-lg [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md"
      onChange={(e) =>
        setData((d) => ({ ...d, term: Number(e.target.value) }))
      }
    />
  </div>
)}

        {/* STEP 4 */}
       {/* STEP 4 - Updated with more content */}
{/* STEP 4 - Compact Version */}
{step === 4 && (
  <div className="space-y-6">
    <div className="text-center space-y-1">
      <h2 className="text-xl font-bold text-white">How do you want to proceed?</h2>
      <br></br>
      <p className="text-blue-200 text-xs">Choose your preferred method</p>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      {/* EXPRESS */}
      <button
        onClick={() => setData((d) => ({ ...d, mode: "express" }))}
        className={`group relative p-5 rounded-2xl bg-gradient-to-b from-blue-900/30 to-blue-900/10 backdrop-blur-md border transition-all shadow-lg hover:shadow-xl hover:scale-[1.01]
        ${data.mode === "express" ? "border-blue-400 ring-2 ring-blue-400/50 bg-blue-900/50" : "border-blue-700/30 hover:border-blue-400"}`}
      >
        {data.mode === "express" && (
          <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">✓</span>
        )}

        {/* Compact time badge */}
        <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3 border group-hover:border-emerald-400">
          <span className="text-emerald-400 font-bold text-xs">60s</span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3 text-center">Express</h3>

        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-xs text-blue-100">
            <span className="w-4 h-4 bg-emerald-500 rounded-sm flex items-center justify-center text-white text-[10px]">✓</span>
            Call-back ASAP
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-100">
            <span className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center text-white text-[10px]">⏱</span>
            Approval varies
          </div>
        </div>
<br></br>
        <p className="text-[11px] text-blue-300 italic text-center">*High demand may delay response</p>
      </button>

      {/* FULL APPLICATION */}
      <button
        onClick={() => setData((d) => ({ ...d, mode: "full" }))}
        className={`group relative p-5 rounded-2xl bg-gradient-to-b from-indigo-900/30 to-purple-900/10 backdrop-blur-md border transition-all shadow-lg hover:shadow-xl hover:scale-[1.01]
        ${data.mode === "full" ? "border-emerald-400 ring-2 ring-emerald-400/50 bg-indigo-900/50" : "border-blue-700/30 hover:border-emerald-400"}`}
      >
        {data.mode === "full" && (
          <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">✓</span>
        )}

        {/* Compact time badge */}
        <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3 border group-hover:border-emerald-400">
          <span className="text-emerald-400 font-bold text-xs">5m</span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3 text-center">Full Application</h3>

        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-xs text-blue-100">
            <span className="w-4 h-4 bg-emerald-500 rounded-sm flex items-center justify-center text-white text-[10px]">✓</span>
            99% info captured
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-100">
            <span className="w-4 h-4 bg-emerald-500 rounded-sm flex items-center justify-center text-white text-[10px]">⚡</span>
            Under 1hr approval*
          </div>
        </div>
<br></br>
        <p className="text-[11px] text-blue-300 italic text-center">*May need quick 1-2min call</p>
      </button>
    </div>

    <button
      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold w-full text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
      onClick={() => {
        onClose?.();
        navigate("/apply-loan");
      }}
    >
       Start Application
    </button>
  </div>
)}



        {step > 1 && (
          <button
            className="mt-6 text-sm text-blue-300 hover:text-blue-100"
            onClick={() => setStep((s) => s - 1)}
          >
            ← Back
          </button>
        )}
      </div>

      {/* ADD ANIMATION CSS */}
     <style>{`
  /* Floating icon animation */
  @keyframes floatIcon {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0px); }
  }
  .float-icon { animation: floatIcon 3s ease-in-out infinite; }

  /* REMOVE glossy circles completely — deleted ::before and ::after */

  /* 3D tilt effect */
  .service-card { 
    transform-style: preserve-3d; 
    transition: all .4s ease;
  }

  .service-card:hover {
    transform: perspective(600px) rotateX(8deg) rotateY(-8deg) scale(1.05);
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    border-color: #60a5fa;
  }
`}</style>

    </div>
  );
}
