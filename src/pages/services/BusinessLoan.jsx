import { Briefcase, Check } from "lucide-react"
import { Link } from "react-router-dom"

export default function BusinessLoan() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 px-4 text-white" style={{ backgroundColor: "#05004f" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Briefcase size={40} style={{ color: "#3b82f6" }} />
            <h1 className="text-5xl font-bold">Business Loan</h1>
          </div>
          <p className="text-xl text-blue-100">Grow your business with our flexible business lending solutions</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#05004f" }}>
            About Our Business Loans
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Whether you're starting a new venture or expanding an existing business, FYN provides tailored business loan
            solutions. From funding equipment purchases to working capital needs, we partner with you to support your
            business growth with competitive rates and flexible terms.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#05004f" }}>
            Why Choose FYN for Your Business Loan?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Borrow Up to $250,000", desc: "Substantial funding for business growth" },
              { title: "Flexible Repayment", desc: "Terms tailored to your business cash flow" },
              { title: "Quick Decisions", desc: "Fast approval process for business loans" },
              { title: "Expert Advice", desc: "Dedicated business finance specialists" },
              { title: "Equipment Finance", desc: "Special packages for machinery and equipment" },
              { title: "Competitive Rates", desc: "Best market rates for business lending" },
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
            Ready to Grow Your Business?
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
