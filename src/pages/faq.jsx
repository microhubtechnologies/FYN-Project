import { useState } from "react";
import faqVideo from "../assets/graphic.mp4"
import { ChevronRight, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
  },
  {
    question:
      "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices.",
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer:
      "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(index === active ? null : index);
  };

  return (
   <section id="faq" className="pt-20 pb-20 bg-[#aabfec] text-blue-900">

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-4xl font-light mb-4">
              Frequently Asked <strong className="font-semibold">Questions</strong>
            </h3>
            <p className="text-black/70 mb-8">
              Answers to the most common questions about our services and process.
            </p>

            {/* FAQ LIST */}
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <div
                  key={i}
                  className={`bg-[#102A52] rounded-xl p-5 shadow-md relative transition-all duration-300 
                  ${active === i ? "shadow-blue-500/40" : ""}`}
                >
                  {/* QUESTION ROW */}
                  <div
                    className="flex items-center cursor-pointer pr-8"
                    onClick={() => toggleFAQ(i)}
                  >
                    <HelpCircle className="text-blue-400 mr-3" size={22} />
                    <h3
                      className={`text-lg font-semibold transition-colors duration-300
                      ${active === i ? "text-blue-400" : "text-white"}
                    `}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* ARROW */}
                  <ChevronRight
                    size={20}
                    className={`absolute top-6 right-6 transition-transform duration-300 
                    ${active === i ? "rotate-90 text-blue-400" : "text-white"}`}
                    onClick={() => toggleFAQ(i)}
                  />

                  {/* ANSWER */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      active === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <video
  src={faqVideo}
  autoPlay
  loop
  muted
  playsInline
  className="shadow-lg w-full max-w-lg h-[400px] md:h-[500px] object-cover "
/>

        </div>
      </div>
    </section>
  );
}
