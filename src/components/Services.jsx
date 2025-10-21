import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import service1 from '../assets/images/service1.webp';
import service2 from '../assets/images/service2.webp';
import service3 from '../assets/images/service3.webp';

const whatsappLink = "https://api.whatsapp.com/send/?phone=14259412560&text&type=phone_number&app_absent=0";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.15, duration: 0.55 } }
};

const imgVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1.08, opacity: 1, transition: { type: "spring", bounce: 0.28, duration: 0.5 } }
};

const Services = () => (
  <section className="py-16 bg-linear-to-br from-gray-50 via-gray-100 to-gray-200">
    <motion.h2
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.67 }}
      viewport={{ once: true }}
      className="text-center text-3xl md:text-4xl font-serif mb-12 text-neutral-900 drop-shadow"
    >
      Our Services
    </motion.h2>
    <div className="flex flex-wrap justify-center gap-10 sm:gap-12 px-4 md:px-2">
      {[{
        img: service1,
        title: "Real Estate Done Right",
        desc: "Whether you're buying, selling, or just exploring, our team ensures you get the best experience possible!"
      }, {
        img: service2,
        title: "Commercial & Residential",
        desc: "Luxury, condos, fixer-uppers—we help with all. We live, work, and play in the community."
      },{
        img: service3,
        title: "Rely on Expertise",
        desc: "Confident, step-by-step guidance. Loan advice, credit help, answers you need in a timely fashion."
      }].map((card, idx) => (
        <motion.div
          key={card.title}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{
            scale: 1.04,
            y: -8,
            boxShadow: "0 16px 40px 0 rgb(80 80 80 / 0.14), 0 2px 12px 0 #fff",
            borderColor: "#bbb",
          }}
          transition={{ duration: 0.38, ease: "easeOut" }}
          className="max-w-sm w-full rounded-2xl shadow-2xl border border-gray-200 bg-linear-to-br from-white via-gray-50 to-gray-100 text-center p-9 flex flex-col items-center transition-all duration-200 hover:border-gray-400"
        >
          <motion.img
            src={card.img}
            alt={card.title}
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.14, y: -4, boxShadow: "0 0 0 6px #ececec88" }}
            transition={{ duration: 0.33, ease: "easeOut" }}
            className="rounded-full h-28 w-28 object-cover shadow mb-4 border-4 border-gray-200"
          />
          <h3 className="text-xl font-semibold mb-2 text-neutral-900">{card.title}</h3>
          <p className="text-gray-700">{card.desc}</p>
        </motion.div>
      ))}
    </div>

  
  </section>
);

export default Services;
