import { useState } from "react";
import hero from "../assets/untitled design.mp4"; // your moving illustration

function formatCurrency(amount) {
  return amount.toLocaleString("en-NZ", {
    style: "currency",
    currency: "NZD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const Calculator = () => {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(12.99);
  const [years, setYears] = useState(5);
  const [freq, setFreq] = useState(12);

  const n = years * freq;
  const i = rate / 100 / freq;
  let payment = i === 0 ? amount / n : (amount * i) / (1 - Math.pow(1 + i, -n));
  const totalPay = payment * n;
  const totalInterest = totalPay - amount;

  return (
    <section className="py-16 bg-gradient-to-br from-[#eef3ff] to-[#e8fff7] flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 shadow-2xl rounded-[30px] bg-white/80 backdrop-blur-xl px-8 py-10">

        {/* Illustration */}
        <div className="flex items-center justify-center h-full rounded-3xl">
  <video
    src={hero}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-contain rounded-3xl"
  />
</div>



        {/* Form */}
        <div className="flex flex-col gap-8 p-6 md:p-8 border-x border-slate-200 bg-white/70 rounded-2xl animate-slideUp">
          <h2 className="text-3xl font-bold text-[#071e60]">Loan Calculator</h2>
          <p className="text-gray-500 text-sm">
            Enter details to estimate your repayments instantly.
          </p>

          {/* Amount */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Loan Amount
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={1000}
                max={250000}
                step={500}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="flex-1 accent-blue-700"
              />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-28 rounded-lg border border-gray-300 px-3 py-2 shadow-sm text-sm"
              />
            </div>
          </div>

          {/* Rate */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Interest Rate (%)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={6}
                max={30}
                step={0.01}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="flex-1 accent-blue-700"
              />
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-20 rounded-lg border border-gray-300 px-3 py-2 shadow-sm text-sm"
              />
            </div>
          </div>

          {/* Years */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Loan Term (Years)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={1}
                max={7}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="flex-1 accent-blue-600"
              />
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-20 rounded-lg border border-gray-300 px-3 py-2 shadow-sm text-sm"
              />
            </div>
          </div>

          {/* Frequency */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Repayment Frequency
            </label>
            <select
              className="w-full border rounded-lg py-2 px-3 bg-white shadow-sm text-sm"
              value={freq}
              onChange={(e) => setFreq(Number(e.target.value))}
            >
              <option value={12}>Monthly</option>
              <option value={26}>Fortnightly</option>
              <option value={52}>Weekly</option>
            </select>
          </div>
        </div>

        {/* Results */}
     {/* Results - New Premium Layout */}
<div className="flex flex-col gap-6 justify-center items-center p-8 animate-slideRight
  rounded-3xl bg-white/60 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.06)]">

  {/* Heading */}
  <h2 className="text-xl font-bold text-[#041144] tracking-tight">
    Your Repayment
  </h2>

  {/* Premium Cards Row */}
  <div className="w-full flex flex-col gap-4">

    {/* Per Payment */}
    <div className="flex items-center gap-4 bg-gradient-to-r from-white to-[#e8fff4]
        rounded-2xl p-4 shadow-sm border border-slate-100">
      <div className="flex flex-col">
        <span className="text-[11px] font-medium text-gray-500">Per Payment</span>
        <h3 className="text-2xl font-extrabold text-blue-800 leading-none">
          {formatCurrency(payment)}
        </h3>
      </div>
    </div>

    {/* Total Interest */}
    <div className="flex items-center gap-4 bg-gradient-to-r from-white to-[#f0f7ff]
        rounded-2xl p-4 shadow-sm border border-slate-100">
      <div className="flex flex-col">
        <span className="text-[11px] font-medium text-gray-500">Total Interest</span>
        <h3 className="text-xl font-bold text-blue-700 leading-none">
          {formatCurrency(totalInterest)}
        </h3>
      </div>
    </div>

    {/* Total Payment */}
    <div className="flex items-center gap-4 bg-gradient-to-r from-white to-[#eefcff]
        rounded-2xl p-4 shadow-sm border border-slate-100">
      <div className="flex flex-col">
        <span className="text-[11px] font-medium text-gray-500">Total Cost</span>
        <h3 className="text-xl font-bold text-blue-900 leading-none">
          {formatCurrency(totalPay)}
        </h3>
      </div>
    </div>
  </div>

  {/* Button */}
  <a
    href="https://fyn.co.nz/apply-now/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full 
      py-3 px-10 text-center shadow-lg transition-transform hover:-translate-y-1 text-sm"
  >
    Get Started
  </a>

  {/* Disclosure (unchanged content, new modern styling) */}
  <div className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
    <p className="text-[11px] text-slate-600 leading-tight">
      <span className="font-semibold italic text-slate-800">Disclosure: </span>
      This calculator provides an estimate only and is not an offer of finance.
      Actual interest rates, fees, and repayment amounts may vary depending on
      your individual circumstances and the lender's credit criteria.
    </p>
  </div>
</div>

      </div>

      {/* Animations */}
      <style>
        {`
        .animate-slideLeft { animation: slideLeft .7s ease-out 1 both; }
        @keyframes slideLeft { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }

        .animate-slideRight { animation: slideRight .7s ease-out 1 both; }
        @keyframes slideRight { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }

        .animate-slideUp { animation: slideUp .7s ease-out 1 both; }
        @keyframes slideUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        `}
      </style>
    </section>
  );
};

export default Calculator;
