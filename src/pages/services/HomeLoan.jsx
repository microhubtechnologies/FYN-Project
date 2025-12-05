import { Home, Check } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomeLoan() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 px-4 text-white" style={{ backgroundColor: "#05004f" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Home size={40} style={{ color: "#3b82f6" }} />
            <h1 className="text-5xl font-bold">Home Loan</h1>
          </div>
          <p className="text-xl text-blue-100">Achieve your dream of home ownership with our flexible home loans</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#05004f" }}>
            About Our Home Loans
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Home ownership is a significant milestone, and FYN is here to help make it achievable. With competitive
            interest rates, flexible terms, and a smooth application process, we make financing your home simple and
            straightforward.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#05004f" }}>
            Why Choose FYN for Your Home Loan?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Competitive Rates", desc: "Best home loan rates in the market" },
              { title: "Up to 30 Years", desc: "Flexible repayment periods for your situation" },
              { title: "Fast Approval", desc: "Quick approval process for your home loan" },
              { title: "No Hidden Fees", desc: "Transparent pricing throughout the process" },
              { title: "Expert Advice", desc: "Dedicated home loan specialists" },
              { title: "Refinancing Options", desc: "Refinance your existing home loan" },
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
            Ready to Own Your Dream Home?
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
