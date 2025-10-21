import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../assets/images/getitsold1.webp';
import img2 from '../assets/images/getitsold2.webp';
import img3 from '../assets/images/getitsold3.webp';

const cardVariants = {
  offscreen: { opacity: 0, y: 30, scale: 0.98 },
  onscreen: {
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", bounce: 0.18, duration: 0.6 }
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.2 } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    transition: { duration: 0.15 } 
  }
};

export default function GetItSold() {
  const [modal, setModal] = useState(null);

  const items = [
    {
      img: img1,
      title: "Top Residential Sales Last 5 Years",
      desc: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year."
    },
    {
      img: img2,
      title: "Don't Just List it...",
      desc: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home."
    },
    {
      img: img3,
      title: "Guide to Buyers",
      desc: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!"
    }
  ];

  return (
    <section className="py-4 md:py-6 px-4 md:px-6 lg:px-8 bg-white text-black">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-serif mb-6 md:mb-8"
      >
        GET IT SOLD
      </motion.h2>
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-6 md:gap-10 lg:gap-16`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.35, once: true }}
            variants={cardVariants}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <button
                className="block w-full relative group"
                style={{ background: "none", border: "none", padding: 0 }}
                onClick={() => setModal(item)}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-lg shadow-xl w-full h-64 md:h-80 object-cover transition-transform duration-300 active:scale-95 md:hover:scale-[1.02]"
                />
                <span className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-black/60 text-white px-4 py-2 text-sm rounded-lg opacity-0 group-hover:opacity-100
                  transition-opacity font-semibold pointer-events-none">
                  Click to enlarge 🔍
                </span>
              </button>
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
                {item.title}
              </h3>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Modal */}
      <AnimatePresence mode="wait">
        {modal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="relative bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-[95vw] sm:max-w-lg w-full"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-3xl leading-none text-gray-400 hover:text-black w-9 h-9 flex items-center justify-center transition-colors z-10"
                onClick={() => setModal(null)}
                aria-label="Close"
              >
                ×
              </button>
              <img 
                src={modal.img} 
                alt={modal.title} 
                className="rounded-lg mb-4 w-full h-auto max-h-[55vh] object-contain" 
              />
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 text-center pr-6">
                {modal.title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg text-center leading-relaxed">
                {modal.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
