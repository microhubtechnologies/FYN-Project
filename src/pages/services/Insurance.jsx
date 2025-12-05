import { Shield, Check } from "lucide-react"
import { Link } from "react-router-dom"

export default function Insurance() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 px-4 text-white" style={{ backgroundColor: "#05004f" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Shield size={40} style={{ color: "#3b82f6" }} />
            <h1 className="text-5xl font-bold">Insurance</h1>
          </div>
          <p className="text-xl text-blue-100">Comprehensive insurance solutions to protect what matters most</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#05004f" }}>
            About Our Insurance Products
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Protect your investments with FYN's insurance products. From loan protection insurance to comprehensive
            coverage options, our insurance solutions are designed to give you peace of mind while you grow your
            business or manage your personal finances.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#05004f" }}>
            Our Insurance Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Loan Protection Insurance", desc: "Protect your family if something happens" },
              { title: "Payment Protection", desc: "Cover monthly payments in case of hardship" },
              { title: "Income Protection", desc: "Secure your income if you become ill or injured" },
              { title: "Life Insurance", desc: "Ensure your family's financial security" },
              { title: "Business Insurance", desc: "Comprehensive coverage for business assets" },
              { title: "Property Insurance", desc: "Protect your property and assets" },
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

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#05004f" }}>
            Protect Your Future
          </h2>
          <Link
            to="/apply"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
            style={{ backgroundColor: "#3b82f6" }}
          >
            Learn More & Apply
          </Link>
        </div>
      </section>
    </div>
  )
}
