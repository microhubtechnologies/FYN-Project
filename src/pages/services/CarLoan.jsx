import { Car, Check } from "lucide-react"
import { Link } from "react-router-dom"

export default function CarLoan() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 px-4 text-white" style={{ backgroundColor: "#05004f" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Car size={40} style={{ color: "#3b82f6" }} />
            <h1 className="text-5xl font-bold">Car Loan</h1>
          </div>
          <p className="text-xl text-blue-100">Finance your dream car with competitive rates and flexible terms</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#05004f" }}>
            About Our Car Loans
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Whether you're buying a new vehicle or refinancing an existing car, FYN provides flexible car loan solutions
            designed to fit your budget. With competitive interest rates, flexible repayment terms, and quick approval
            processes, getting behind the wheel of your dream car has never been easier.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#05004f" }}>
            Why Choose FYN for Your Car Loan?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Competitive Rates", desc: "Get the best market rates on car loans" },
              { title: "Up to 10 Years to Repay", desc: "Flexible repayment terms to suit your budget" },
              { title: "Fast Approval", desc: "Express approval in as little as 60 seconds" },
              { title: "No Hidden Fees", desc: "Transparent pricing with no surprises" },
              { title: "Refinancing Available", desc: "Refinance your existing car loan" },
              { title: "Expert Advice", desc: "Dedicated support team to guide you" },
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
