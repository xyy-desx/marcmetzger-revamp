import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import realtorImg from '../assets/images/realtor.webp';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 bg-black text-white flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-2xl md:text-3xl mb-8 font-serif tracking-wide text-white"
      >
        MARCI METZGER
      </motion.h2>
      <button
        onClick={() => setShowModal(true)}
        className="group focus:outline-gray-200 rounded-full transition-transform"
        aria-label="Enlarge Marci's photo"
        type="button"
        style={{ background: "none", border: "none", padding: 0 }}
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          src={realtorImg}
          alt="Realtor Marci Metzger"
          className="rounded-full shadow-xl mb-6 w-56 h-56 object-cover border-[5px] border-gray-700 cursor-pointer group-hover:scale-105 transition duration-200"
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 text-xs rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
          Click to enlarge
        </span>
      </button>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg font-medium mb-2 tracking-wide text-white drop-shadow"
      >
        REALTOR FOR NEARLY 3 DECADES!
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-white text-xl font-mono mb-10 tracking-widest"
      >
        206-919-6886
      </motion.div>
      {/* Modal for enlarged photo */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={realtorImg}
                alt="Realtor Marci Metzger Large"
                className="w-80 h-80 object-cover rounded-full border-8 border-gray-300 mb-3 shadow-lg"
              />
              <button
                className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-gray-900 px-3 py-1 bg-gray-100 rounded-full"
                onClick={() => setShowModal(false)}
                aria-label="Close preview"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default About;
