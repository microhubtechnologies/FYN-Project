"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div>
      {/* Header */}
      <section className="py-16 px-4 text-white" style={{ backgroundColor: "#05004f" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">Get in touch with our team. We're here to help.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
            <Phone size={40} className="mx-auto mb-4" style={{ color: "#3b82f6" }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: "#05004f" }}>
              Call Us
            </h3>
            <a href="tel:+64123456789" className="text-gray-600 hover:text-blue-500 transition-colors">
              +64 (0) 123 456 789
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
            <Mail size={40} className="mx-auto mb-4" style={{ color: "#3b82f6" }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: "#05004f" }}>
              Email Us
            </h3>
            <a href="mailto:info@fyn.co.nz" className="text-gray-600 hover:text-blue-500 transition-colors">
              info@fyn.co.nz
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
            <MapPin size={40} className="mx-auto mb-4" style={{ color: "#3b82f6" }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: "#05004f" }}>
              Visit Us
            </h3>
            <p className="text-gray-600">Auckland, New Zealand</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#05004f" }}>
              Send us a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border-2 border-green-200 text-green-700">
                Thank you! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block font-semibold mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-8">
                <label className="block font-semibold mb-2 text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                style={{ backgroundColor: "#3b82f6" }}
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#05004f" }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How long does approval take?",
                a: "Our express process takes just 60 seconds for initial approval. Full approval can take up to 1 hour depending on your application.",
              },
              {
                q: "What are your interest rates?",
                a: "Interest rates vary based on loan type, amount, and term. Get an instant quote in our calculator.",
              },
              {
                q: "Are there any hidden fees?",
                a: "No! We guarantee zero hidden fees. What you see is what you pay.",
              },
              { q: "Can I repay early?", a: "Yes, you can make early repayments without any penalties." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2" style={{ color: "#05004f" }}>
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
