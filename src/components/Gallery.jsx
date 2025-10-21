import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import gallery1 from '../assets/images/gallery1.webp';
import gallery2 from '../assets/images/gallery2.webp';
import gallery3 from '../assets/images/gallery3.webp';
import gallery4 from '../assets/images/gallery4.webp';
import gallery5 from '../assets/images/gallery5.webp';
import gallery6 from '../assets/images/gallery6.webp';
import gallery7 from '../assets/images/gallery7.webp';

// Example quotes for inspiration (edit as you wish)
const cards = [
  { img: gallery1, quote: "Luxury living meets scenic skies." },
  { img: gallery2, quote: "Home is where your story begins." },
  { img: gallery3, quote: "Modern comfort, stunning views." },
  { img: gallery4, quote: "Natural light. Peaceful space." },
  { img: gallery5, quote: "A retreat to cherish every day." },
  { img: gallery6, quote: "Happiness begins at home." },
  { img: gallery7, quote: "Find beauty in every corner." }
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.22, type: 'spring', bounce: 0.26 }},
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.17 } }
};

export default function Gallery() {
  const [modalCard, setModalCard] = useState(null);

  return (
    <section className="py-12 md:py-20 bg-linear-to-b from-slate-900 via-black to-slate-800 min-h-[80vh]">
      <h2 className="text-center text-4xl md:text-5xl font-serif text-white mb-14 tracking-wide">
        Featured Gallery
      </h2>
      <div className="max-w-6xl mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6, boxShadow: '0 8px 32px 0 rgb(30,41,59,0.17)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-10%' }}
            className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 flex flex-col cursor-pointer overflow-hidden transition-shadow group"
            onClick={() => setModalCard(card)}
          >
            <div className="aspect-3/4 w-full overflow-hidden relative">
              <img
                src={card.img}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center justify-center p-5 pt-6 bg-linear-to-b from-slate-800/60 to-black/80 min-h-[72px]">
              <span className="font-normal italic text-[14px] text-blue-200 opacity-85 text-center">
                {card.quote}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {modalCard && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm p-3"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={() => setModalCard(null)}
          >
            <motion.div
              className="relative bg-slate-900 rounded-2xl shadow-2xl p-4 md:p-8 flex flex-col items-center max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 transition p-2 rounded-full"
                onClick={() => setModalCard(null)}
                aria-label="Close"
              >
                <FiX size={32} />
              </button>
              <img
                src={modalCard.img}
                alt=""
                className="w-full h-[60vh] object-cover rounded-lg shadow-lg mb-6"
              />
              <span className="font-normal italic text-lg text-blue-200 opacity-95 text-center">
                {modalCard.quote}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
