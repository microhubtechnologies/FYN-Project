import { Package, Check } from "lucide-react"
import { Link } from "react-router-dom"

export default function EquipmentFinance() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 px-4 text-white" style={{ backgroundColor: "#05004f" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Package size={40} style={{ color: "#3b82f6" }} />
            <h1 className="text-5xl font-bold">Equipment Finance</h1>
          </div>
          <p className="text-xl text-blue-100">Specialized financing for machinery, tools, and business equipment</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#05004f" }}>
            About Our Equipment Finance
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Acquire the equipment your business needs without the burden of large upfront capital. FYN's equipment
            financing solutions offer flexible terms, competitive rates, and quick approval processes to help you invest
            in the tools and machinery essential to your business operations.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#05004f" }}>
            Why Choose FYN for Equipment Finance?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Wide Range of Equipment", desc: "Finance machinery, tools, vehicles, and more" },
              { title: "Flexible Terms", desc: "Repayment terms matched to equipment lifespan" },
              { title: "Fast Approval", desc: "Get funding quickly to start operations" },
              { title: "Competitive Rates", desc: "Best rates for equipment financing" },
              { title: "Expert Assessment", desc: "Our team evaluates your equipment needs" },
              { title: "Tax Benefits", desc: "Possible tax deductions on lease payments" },
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
            Ready to Equip Your Business?
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
