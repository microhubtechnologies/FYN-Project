import React from "react";

export default function Disclosure() {
  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 leading-relaxed">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Disclosure Statement
        </h1>
        <p className="text-gray-700 mb-6">
          The disclosures provided below cover important information that you might like to know
          about us before we begin our journey together.
        </p>

        {/* Section */}
        <Section title="Licence Status and Conditions">
          <p>
            FYN Limited (FSP1009679) holds a licence issued by the Financial Markets Authority
            (FMA) to provide financial advice.
          </p>
        </Section>

        <Section title="Nature and Scope of the Financial Advice Given">
          <p>
            FYN Limited provides advice to our clients about their personal and business loans as
            well as credit-related insurances. We are able to provide financial advice about loan
            and insurance products from the following product providers:
          </p>

          <h3 className="font-semibold text-gray-800 mt-4 mb-2">Lenders</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Avanti Finance</li>
            <li>Broadland Finance</li>
            <li>Community Financial Services</li>
            <li>CFI Finance</li>
            <li>Finance Now</li>
            <li>Financial Holdings Limited</li>
            <li>GEM by Latitude</li>
            <li>Geneva Finance</li>
            <li>Prospa</li>
            <li>ScotPac</li>
          </ul>

          <h3 className="font-semibold text-gray-800 mt-4 mb-2">Insurers</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Quest Insurance</li>
            <li>Autolife Insurance</li>
            <li>Provident Insurance</li>
          </ul>

          <p className="mt-4">
            We do not provide advice on loans for residential or commercial property, personal
            insurance, general insurance, KiwiSaver or Investments.
          </p>
        </Section>

        <Section title="Our Duties">
          <ul className="list-disc ml-5 space-y-2">
            <li>Give priority to your interests by ensuring advice is not influenced by our own interests.</li>
            <li>Exercise care, diligence, and skill in providing advice.</li>
            <li>Meet competence, knowledge, and skill standards set by the Code of Conduct.</li>
            <li>Meet ethical behaviour and client care standards set by the Code of Conduct.</li>
          </ul>
          <p className="mt-4">
            More information is available on the Financial Markets Authority website at{" "}
            <a href="https://www.fma.govt.nz" className="text-blue-600 underline">
              www.fma.govt.nz
            </a>.
          </p>
        </Section>

        <Section title="How We Are Paid">
          <h3 className="font-semibold text-gray-800 mt-2">Personal Loans</h3>
          <p>
            We charge a broker fee ranging from $350–$2,500 or up to 10% of the loan amount,
            depending on loan size and complexity. We also receive interest commission up to 6%.
          </p>

          <h3 className="font-semibold text-gray-800 mt-4">Insurance</h3>
          <p>
            We receive up to 50% commission on insurance policies associated with your loan,
            depending on the insurer and policy.
          </p>
        </Section>

        <Section title="How We Manage Conflicts of Interest">
          <p>
            We follow a structured advice process that ensures recommendations are based solely on
            clients’ needs. All advisers undergo annual conflict management training and our
            compliance programme is reviewed annually by an external consultancy.
          </p>
        </Section>

        <Section title="Internal Complaints Process">
          <p>If you have a complaint, you may contact us at:</p>

          <ContactBlock
            name="FYN Limited"
            attention="Ravi Shankar Prasad"
            address="2/9 Beagle Avenue, Mount Albert, Auckland 1025"
            phone="0225742755"
            email="ravi@fyn.co.nz"
            website="https://fyn.co.nz"
          />

          <h3 className="font-semibold text-gray-800 mt-4">Our Complaint Handling Process</h3>
          <ul className="list-disc ml-5 space-y-2 mt-2">
            <li>We will respond and advise how we intend to resolve your complaint.</li>
            <li>We aim to resolve complaints within 15 working days.</li>
            <li>We will update you if more time is needed.</li>
            <li>You will be informed of the outcome by phone or email.</li>
            <li>
              If unresolved, you may contact Financial Services Complaints Limited (FSCL).
            </li>
          </ul>
        </Section>

        <Section title="Dispute Resolution Process">
          <p>
            If our process does not resolve your complaint, you may contact our external dispute
            resolution scheme:
          </p>

          <ContactBlock
            name="Financial Services Complaints Limited"
            address="Level 4, 101 Lambton Quay, Wellington, 6011"
            phone="0800 347 257"
            email="complaints@fscl.org.nz"
            website="https://fscl.org.nz"
            postal="PO Box 5967, Wellington 6140"
          />
        </Section>

        <Section title="Contact Details">
          <ContactBlock
            name="FYN Limited (FSP1009679)"
            attention="Ravi Shankar Prasad"
            address="2/9 Beagle Avenue, Mount Albert, Auckland 1025"
            phone="0225742755"
            email="ravi@fyn.co.nz"
            website="https://fyn.co.nz"
          />
        </Section>

        <p className="mt-6 text-gray-600 text-sm">
          This information is available in writing upon request.
        </p>
      </div>
    </div>
  );
}

/* ---- Reusable Components ---- */

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-700 space-y-3">{children}</div>
    </div>
  );
}

function ContactBlock({ name, attention, address, phone, email, website, postal }) {
  return (
    <div className="bg-gray-100 p-4 rounded-xl mt-3">
      <p><strong>Company Name:</strong> {name}</p>
      {attention && <p><strong>Attention:</strong> {attention}</p>}
      <p><strong>Address:</strong> {address}</p>
      {postal && <p><strong>Postal Address:</strong> {postal}</p>}
      <p><strong>Telephone:</strong> {phone}</p>
      <p><strong>Email:</strong> {email}</p>
      <a href={website} className="text-blue-600 underline" target="_blank" rel="noreferrer">
        {website}
      </a>
    </div>
  );
}
