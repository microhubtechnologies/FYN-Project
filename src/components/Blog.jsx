import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "./ui/button";

const blogs = [
  {
    title: "5 Tips to Improve Your Credit Score",
    excerpt: "Learn how to boost your credit score and get better loan terms with these proven strategies.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Credit Tips",
  },
  {
    title: "Understanding Home Loan Interest Rates",
    excerpt: "A comprehensive guide to home loan interest rates and how to get the best deal.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    date: "March 12, 2024",
    readTime: "7 min read",
    category: "Home Loans",
  },
  {
    title: "Debt Consolidation: Is It Right for You?",
    excerpt: "Explore the benefits and considerations of consolidating your debts into a single loan.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Financial Planning",
  },
];

export default function BlogSlider() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-secondary-blue/5 to-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tr from-primary-blue/5 to-light-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-primary-blue mb-3">
            Latest{" "}
            <span className=" bg-clip-text text-blue-900">
              Insights
            </span>
          </h2>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto font-normal">
            Stay informed with our latest articles on finance and lending
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-gradient-to-br from-white to-blue-50/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute top-3 left-3 bg-gradient-to-r from-primary-blue to-secondary-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 font-normal">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{blog.date}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-primary-blue mb-2 group-hover:text-secondary-blue transition-colors">
                  {blog.title}
                </h3>

                <p className="text-xs text-gray-600 mb-4 leading-relaxed font-normal">
                  {blog.excerpt}
                </p>

                <Button
                  variant="ghost"
                  className="text-secondary-blue hover:text-primary-blue p-0 h-auto text-xs font-medium group-hover:gap-1 transition-all"
                >
                  Read More
                  <ArrowRight className="ml-1 group-hover:translate-x-0.5 transition-transform" size={14} />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white px-6 py-2.5 text-sm rounded-full shadow-md hover:shadow-lg transition-all font-medium">
            View All Articles
            <ArrowRight className="ml-2" size={14} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};





// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// export default function BlogSlider() {
//   const blogs = [
//     {
//       img: "https://pagedone.io/asset/uploads/1696244059.png",
//       title: "Clever ways to invest in product to organize your portfolio",
//       desc: "Discover smart investment strategies to streamline and organize your portfolio...",
//     },
//     {
//       img: "https://pagedone.io/asset/uploads/1696244074.png",
//       title: "How to grow your profit through systematic investment with us",
//       desc: "Unlock the power of systematic investment and watch your profits soar...",
//     },
//     {
//       img: "https://pagedone.io/asset/uploads/1696244059.png",
//       title: "Clever ways to invest in product to organize your portfolio",
//       desc: "Discover innovative approaches to optimize your financial performance...",
//     },
//     {
//       img: "https://pagedone.io/asset/uploads/1696244074.png",
//       title: "How to grow your profit through systematic investment with us",
//       desc: "Learn the secrets of structured investment for long-term gains...",
//     },
//   ];

//   return (
//     <section className="py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-between">

//           {/* LEFT TEXT COLUMN */}
//           <div className="w-full lg:w-2/5 text-center lg:text-left">
//             <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-5">
//               Our latest <span className="text-blue-700">blogs</span>
//             </h2>

//             <p className="text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0">
//               Welcome to our blog section, where knowledge meets inspiration.
//               Explore insightful articles, expert tips, and the latest trends.
//             </p>

//             <a
//               className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 mx-auto lg:mx-0 flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
//               href="#"
//             >
//               View All
//             </a>

//             {/* Slider Controls */}
//             <div className="flex justify-center lg:justify-start gap-8 mt-8">
//               <button className="swiper-button-prev group flex justify-center items-center border border-blue-900 w-11 h-11 rounded-full hover:bg-blue-900 transition">
//                 <svg className="w-6 h-6 text-blue-700 group-hover:text-white" fill="none" viewBox="0 0 24 24">
//                   <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
//                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>

//               <button className="swiper-button-next group flex justify-center items-center border border-blue-900 w-11 h-11 rounded-full hover:bg-blue-900 transition">
//                 <svg className="w-6 h-6 text-blue-700 group-hover:text-white" fill="none" viewBox="0 0 24 24">
//                   <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
//                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SLIDER */}
//           <div className="w-full lg:w-3/5">
//             <Swiper
//               modules={[Navigation]}
//               navigation={{
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//               }}
//               spaceBetween={28}
//               slidesPerView={2}
//               loop={true}
//               breakpoints={{
//                 0: { slidesPerView: 1, spaceBetween: 20 },
//                 568: { slidesPerView: 2, spaceBetween: 20 },
//                 1024: { slidesPerView: 2, spaceBetween: 32 },
//               }}
//               className="mySwiper"
//             >
//               {blogs.map((blog, index) => (
//                 <SwiperSlide key={index} className="group">
//                   <div className="flex items-center mb-6">
//                     <img src={blog.img} className="rounded-2xl w-full object-cover" alt="blog-image"/>
//                   </div>

//                   <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-blue-900 transition">
//                     {blog.title}
//                   </h3>

//                   <p className="text-gray-500 mb-5 leading-relaxed">
//                     {blog.desc}
//                   </p>

//                   {/* <a href="#" className="text-indigo-700 font-semibold text-lg flex gap-2">
//                     Read more
//                     <svg width="15" height="12" fill="none" viewBox="0 0 15 12">
//                       <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
//                         stroke="#4338CA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </a> */}
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
