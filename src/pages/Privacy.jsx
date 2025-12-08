import { ShieldCheck, FileText, Lock, PhoneCall, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Page Wrapper */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-4">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FYN Limited is committed to safeguarding your information and ensuring 
            transparency in how your data is used and protected.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1 bg-white rounded-2xl shadow p-6 sticky top-10 h-fit">
            <h2 className="font-semibold text-lg mb-4">Sections</h2>
            <ul className="space-y-3 text-blue-700 font-medium">
              <li><a href="#info-collect" className="hover:underline">1. Information We Collect</a></li>
              <li><a href="#how-collect" className="hover:underline">2. How We Collect Information</a></li>
              <li><a href="#why-collect" className="hover:underline">3. Why We Collect Information</a></li>
              <li><a href="#sharing" className="hover:underline">4. Sharing Your Information</a></li>
              <li><a href="#cookies" className="hover:underline">5. Cookies & Tracking</a></li>
              <li><a href="#storage" className="hover:underline">6. Storage & Protection</a></li>
              <li><a href="#access" className="hover:underline">7. Access & Correction</a></li>
              <li><a href="#retention" className="hover:underline">8. Data Retention</a></li>
              <li><a href="#contact" className="hover:underline">9. Contact Us</a></li>
              <li><a href="#changes" className="hover:underline">10. Policy Changes</a></li>
            </ul>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-12">
            {/* Section 1 */}
            <section id="info-collect" className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-2xl font-semibold mb-4">1. What Information We Collect</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Full name, date of birth, contact details</li>
                <li>Employment and income details</li>
                <li>Business financial information</li>
                <li>Credit history and credit score</li>
                <li>Identification documents</li>
                <li>Bank statements & financial records</li>
                <li>Information from credit reporting agencies</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="how-collect" className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-2xl font-semibold mb-4">2. How We Collect Information</h2>
              <p className="mb-3">We collect information directly when you:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Submit a loan application or enquiry</li>
                <li>Register on our website</li>
                <li>Use tools, calculators, or speak with our advisers</li>
                <li>Contact us via phone, email, or chat</li>
                <li>Consent to credit checks</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="why-collect" className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-2xl font-semibold mb-4">3. Why We Collect Your Information</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Assess loan or finance eligibility</li>
                <li>Provide financial product options & advice</li>
                <li>Submit lender applications for you</li>
                <li>Identity verification & AML/CFT compliance</li>
                <li>Improve services and website performance</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="sharing" className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Panel lenders & financial institutions</li>
                <li>Credit reporting agencies</li>
                <li>Third-party service providers</li>
                <li>Legal/regulatory bodies when required</li>
              </ul>
              <p className="mt-4 font-medium">We never sell your personal information.</p>
            </section>

            {/* Section 5 */}
            <section id="cookies" className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-2xl font-semibold mb-4">5. Cookies & Website Tracking</h2>
              <p>We use cookies to improve experience and understand user behaviour. You may disable cookies in browser settings.</p>
            </section>

            {/* Section 6 */}
            <section id="storage" className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-2xl font-semibold mb-4">6. How We Store & Protect Information</h2>
              <p>We take reasonable security measures and may store data in NZ or secure overseas servers with safeguards.</p>
            </section>

            {/* Section 7 */}
            <section id="access" className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-2xl font-semibold mb-4">7. Accessing & Correcting Information</h2>
              <p>You may request access or corrections anytime by contacting us.</p>
            </section>

            {/* Section 8 */}
            <section id="retention" className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-2xl font-semibold mb-4">8. Retention of Personal Information</h2>
              <p>We retain data only as long as needed or required under NZ law.</p>
            </section>

            {/* Section 9 */}
            <section id="contact" className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-2xl font-semibold mb-6">9. Contact Us</h2>
              <div className="space-y-3">
                <p className="flex items-center gap-3"><Mail className="w-5 h-5" /> info@fyn.co.nz</p>
                <p className="flex items-center gap-3"><PhoneCall className="w-5 h-5" /> 0225742755</p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="changes" className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
              <p>We may update this page periodically. Please review regularly for updates.</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
