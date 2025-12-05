// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
// import supportImg from "../assets/ip1.jpg";
// import quickImg from "../assets/illus.jpg";
// import compareImg from "../assets/ip2.jpg";
// import secureImg from "../assets/finance.jpg";
// export default function HowWeHelpSection() {
//     const howWeHelp = [
//   {
//     image: supportImg,
//     title: "Quick pre-qualification",
//     text: "See your options in seconds without affecting your credit score.",
//   },
//   {
//     image: compareImg,
//     title: "Compare rates",
//     text: "Side-by-side, simple comparisons so you choose the best deal.",
//   },
//   {
//     image: secureImg,
//     title: "Secure guidance",
//     text: "Expert advisors help you understand terms and fees.",
//   },
//   {
//     image: quickImg,
//     title: "Ongoing support",
//     text: "We’re here after approval to answer questions and help manage paperwork.",
//   },
// ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-5">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-gray-900">How We Help</h2>
//           <p className="text-gray-600 mt-2 max-w-xl mx-auto">
//             Simple steps, clear options — built to save you time.
//           </p>
//         </div>

//         <div className="flex flex-col gap-10">
//           {howWeHelp.map((item, i) => (
//             <AnimatedHowWeHelpItem key={i} item={item} reverse={i % 2 === 1} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function AnimatedHowWeHelpItem({ item, reverse }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

// const variants = {
//   hidden: { opacity: 0, y: 30, x: reverse ? 100 : -100 },
//   visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };


//   return (
//    <motion.div
//   ref={ref}
//   animate={controls}
//   initial="hidden"
//   variants={variants}
//   className={`flex flex-col md:flex-row items-center gap-6 ${reverse ? "md:flex-row-reverse" : ""}`}
// >
//   <motion.div
//     className="md:w-1/2 flex justify-center"
//     whileHover={{ scale: 1.03 }}
//     transition={{ type: "spring", stiffness: 200 }}
//   >
//     <img
//       src={item.image}
//       alt={item.title}
//       className="w-56 h-56 object-contain rounded-lg" // no shadow
//     />
//   </motion.div>

//   <motion.div
//     className="md:w-1/2 text-center md:text-left"
//     initial={{ opacity: 0, y: 30 }}
//     animate={controls}
//     variants={{
//       hidden: { opacity: 0, y: 30 },
//       visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
//     }}
//   >
//     <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
//     <p className="text-gray-700 leading-relaxed max-w-prose">{item.text}</p>
//   </motion.div>
// </motion.div>

//   );
// }
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import supportImg from "../assets/ip1.jpg";
import quickImg from "../assets/loan2.jpg";
import compareImg from "../assets/ip2.jpg";
import secureImg from "../assets/finance.jpg";

const detailsData = [
  {
    img: supportImg,
    title: "Voluptatem dignissimos provident quasi",
    italic:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    points: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullam est qui quos consequatur eos accusamus.",
    ],
  },
  {
    img: quickImg,
    title: "Corporis temporibus maiores provident",
    italic:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
  },
  {
    img: compareImg,
    title: "Sunt consequatur ad ut est nulla",
    desc: "Cupiditate placeat cupiditate placeat est ipsam culpa. Sunt saepe odit aut quia voluptas.",
    points: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.",
    ],
  },
  {
    img: secureImg,
    title: "Quas et necessitatibus eaque impedit",
    italic:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
  },
];

// Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function DetailsSection() {
  return (
    <section id="details" className="py-24">

      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-bold text-gray-900">How We Help</h2>
        <p className="text-lg text-gray-600 mt-2">
          <span className="text-blue-900 font-semibold">
            Simple steps, clear options — built to save you time.
          </span>
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {detailsData.map((item, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-10 items-center mb-14 ${
              i !== 0 ? "mt-14" : ""
            }`}
          >
            {/* IMAGE Block */}
            <motion.div
              className={`${i % 2 === 1 ? "md:order-2" : ""} flex justify-center`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: i % 2 === 1 ? 60 : -60 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              <img
                src={item.img}
                alt="details"
                className="w-full max-w-md rounded-lg"
              />
            </motion.div>

            {/* TEXT Block */}
            <motion.div
              className={`${i % 2 === 1 ? "md:order-1" : ""}`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              {item.italic && (
                <motion.p
                  className="italic text-gray-600 mb-4"
                  variants={fadeUp}
                  transition={{ delay: 0.1 }}
                >
                  {item.italic}
                </motion.p>
              )}

              {item.desc && (
                <motion.p
                  className="text-gray-600 mb-4 leading-relaxed"
                  variants={fadeUp}
                  transition={{ delay: 0.15 }}
                >
                  {item.desc}
                </motion.p>
              )}

              {item.points && (
                <motion.ul
                  className="space-y-3 mt-4"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {item.points.map((p, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-2"
                      variants={fadeUp}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-700">{p}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
