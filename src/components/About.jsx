import { motion, useScroll, useTransform } from "framer-motion";
import finance from "../assets/fin.jpg";
import database from "../assets/database.png";
import exp from "../assets/experience.png";
import { useRef } from "react";
import illustration from "../assets/money.png";
import Bg from "../assets/bg.mp4";
import AboutBanner from "../assets/about-bg.png";
export default function AboutSection() {
  const cards = [
    { iconSrc: exp, title: "Expert Advice", text: "We help you choose the best loan based on your needs." },
    { iconSrc: database, title: "Compare Options", text: "Instantly compare different banks and loan providers." },
    { iconSrc: finance, title: "Secure & Trusted", text: "Your data is always protected and secure." },
    { iconSrc: finance, title: "Fast Process", text: "Apply faster with our simplified guidance." },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* VIDEO BACKGROUND */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={AboutBanner}
        alt="About Background"
      />
    

      {/* DARK GLASS OVERLAY */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* FLOATING BLOB */}
      {/* <motion.img
        src={illustration}
        className="absolute top-10 right-0 w-80 opacity-25 pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      /> */}

      {/* SCROLL PROGRESS LINE */}
      <div className="absolute left-10 top-24 h-80 w-[4px] bg-white/20 rounded-full hidden lg:block">
        <motion.div
          className="bg-blue-400 w-full rounded-full"
          style={{ height: progressHeight }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-y-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="w-full lg:w-7/12 pl-16 md:pl-24"
          >
            <span className="inline-flex items-center gap-2 text-blue-300 font-bold text-lg mb-3">
              <img src={finance} alt="icon" className="w-8 h-8 rounded-md" />
              About Us
            </span>

            <h2 className="text-4xl font-extrabold text-white mb-6 max-w-xl leading-tight">
              Your Trusted Source for Loan Reviews & Comparison
            </h2>

            <p className="text-blue-100 max-w-lg text-lg leading-relaxed">
              We provide a reliable and transparent platform that simplifies the
              loan comparison process — helping you choose the perfect plan with
              confidence.
            </p>

            <a
              href="#"
              className="inline-block mt-8 px-7 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 shadow-lg hover:shadow-xl transition"
            >
              Read On <i className="bi bi-arrow-up-right ml-1" />
            </a>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="w-full lg:w-5/12 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cards.map(({ iconSrc, title, text }, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl backdrop-blur-lg bg-white/20 shadow-md hover:shadow-2xl border border-white/30"
              >
                <motion.img
                  src={iconSrc}
                  alt={title}
                  className="w-11 h-11 mb-3"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    delay: idx * 0.3,
                  }}
                />
                <h5 className="font-semibold text-white mb-1">{title}</h5>
                <p className="text-blue-100 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
