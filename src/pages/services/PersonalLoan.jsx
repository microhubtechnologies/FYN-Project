import { DollarSign, Check } from "lucide-react"
import { Link } from "react-router-dom"

export default function PersonalLoan() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 px-4 text-white" style={{ backgroundColor: "#05004f" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <DollarSign size={40} style={{ color: "#3b82f6" }} />
            <h1 className="text-5xl font-bold">Personal Loan</h1>
          </div>
          <p className="text-xl text-blue-100">
            Flexible personal loans for any purpose, from home improvements to holidays
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#05004f" }}>
            About Our Personal Loans
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Need funds for any purpose? FYN's personal loans provide flexible borrowing solutions whether you're
            planning a holiday, home renovation, debt consolidation, or any other personal expense. With quick approvals
            and competitive rates, we make borrowing simple and stress-free.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#05004f" }}>
            Why Choose FYN for Your Personal Loan?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Borrow $1,000 - $50,000", desc: "Flexible loan amounts for your needs" },
              { title: "2-7 Year Terms", desc: "Choose repayment terms that work for you" },
              { title: "Fixed Interest Rates", desc: "Know exactly what you'll pay each month" },
              { title: "Instant Quotes", desc: "Get a loan quote in minutes online" },
              { title: "Flexible Purposes", desc: "Borrow for any legitimate purpose" },
              { title: "Fast Funding", desc: "Money in your account quickly" },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <Check size={24} style={{ color: "#3b82f6" }} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#05004f" }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator & Apply */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#05004f" }}>
            Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calculator"
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: "#3b82f6" }}
            >
              Use Our Calculator
            </Link>
            <Link
              to="/apply"
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: "#05004f" }}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
