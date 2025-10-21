import { FaFacebook, FaInstagram, FaLinkedin, FaYelp, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const whatsappLink = "https://wa.me/12069196886?text=Hi%2C%20I%20am%20interested%20in%20your%20realty%20services";

const formAnim = {
  hidden: { opacity: 0, x: -40, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, type: "spring", bounce: 0.12 } }
};
const infoAnim = {
  hidden: { opacity: 0, x: 40, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, delay: 0.2, type: "spring", bounce: 0.13 } }
};
const iconAnim = {
  rest: { scale: 1, filter: "drop-shadow(0 0 0 #fff)" },
  hover: { scale: 1.25, filter: "drop-shadow(0 2px 8px #6ee7b7)", transition: { type: "spring", bounce: 0.38, duration: 0.26 } }
};

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const validateEmail = email => /^\S+@\S+\.\S+$/.test(email);
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={formAnim}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="bg-white/95 backdrop-blur p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-xl mx-auto"
    >
      <h3 className="text-xl font-semibold mb-7 text-gray-800 font-serif tracking-wide">Send Message</h3>
      <input
        type="text"
        name="name"
        required
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="mb-4 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-gray-600 text-sm font-sans text-gray-900"
      />
      <input
        type="email"
        name="email"
        required
        value={form.email}
        onChange={handleChange}
        placeholder="you@email.com"
        className={`mb-1 w-full border rounded-lg px-4 py-2 focus:ring-1 focus:ring-gray-600 text-sm font-sans text-gray-900 ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <span className="text-red-600 text-sm mb-2 block font-sans">{error}</span>}
      <textarea
        name="message"
        required
        value={form.message}
        onChange={handleChange}
        placeholder="Type your message..."
        className="mb-5 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-gray-600 text-sm font-sans text-gray-900"
        rows={4}
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.1, backgroundColor: "#e2e8f0" }}
        whileTap={{ scale: 0.96 }}
        className="mx-auto block w-full sm:w-[120px] py-3 rounded-full bg-gray-100 text-gray-800 shadow font-semibold font-serif tracking-wide text-base transition hover:bg-gray-200 active:scale-95"
        style={{ letterSpacing: '0.1em' }}
      >
        SEND
      </motion.button>
      <AnimatePresence>
        {sent && (
          <motion.span
            initial={{ opacity: 0, y: 7 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 7 }}
            className="text-green-600 text-sm block mt-2"
          >
            Message sent!
          </motion.span>
        )}
      </AnimatePresence>
      <div className="mt-6 text-xs text-gray-500 text-center font-sans">
        Protected by reCAPTCHA & Google Privacy Policy.
      </div>
    </motion.form>
  );
};

const ContactInfo = () => (
  <motion.div
    className="bg-white/95 p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-xl mx-auto flex flex-col gap-4 items-start"
    variants={infoAnim}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.38 }}
  >
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-gray-200 transition w-full justify-center"
      onClick={() => window.open(whatsappLink, "_blank")}
      type="button"
    >
      <FaWhatsapp className="text-green-500" size={16} /> WhatsApp
    </motion.button>
    <div>
      <div className="font-semibold text-gray-900 text-base">Marci Metzger - THE RIDGE REALTY GROUP</div>
      <div className="text-gray-600 mt-2 text-sm">
        3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
      </div>
      <div className="mt-2 text-gray-600 text-sm">
        <span className="font-bold">Phone:</span> (206) 919-6886
      </div>
    </div>
    <div className="mt-3">
      <h4 className="text-gray-800 font-semibold text-sm">Office Hours</h4>
      <div className="text-gray-600 text-sm">Open today <b>08:00 am – 07:00 pm</b></div>
      <div className="text-gray-600 text-sm">Open daily <b>8:00 am - 7:00 pm</b></div>
      <div className="text-gray-600 text-xs mt-2">
        Appointments outside office hours available upon request. Just call!
      </div>
    </div>
    <div className="mt-4 flex gap-2 justify-center w-full">
      {[
        { href: "https://facebook.com", icon: <FaFacebook className="text-blue-600" size={20} /> },
        { href: "https://instagram.com", icon: <FaInstagram className="text-pink-500" size={20} /> },
        { href: "https://linkedin.com", icon: <FaLinkedin className="text-blue-800" size={20} /> },
        { href: "https://yelp.com", icon: <FaYelp className="text-red-700" size={20} /> },
      ].map((s, idx) => (
        <motion.a
          href={s.href}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          whileHover="hover"
          initial="rest"
          animate="rest"
          variants={iconAnim}
          className="p-2 rounded bg-gray-100 text-current hover:bg-opacity-90 transition"
        >
          {s.icon}
        </motion.a>
      ))}
    </div>
  </motion.div>
);

const MapSection = () => (
  <motion.div
    className="w-full flex justify-center items-center mt-10"
    initial={{ opacity: 0, scale: 0.96, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.12, type: "spring" }}
    viewport={{ once: true, amount: 0.45 }}
  >
    <iframe
      title="Office Location"
      width="100%"
      height="340"
      className="rounded-xl shadow border border-gray-200 max-w-full"
      frameBorder="0"
      style={{ border: 0 }}
      src="https://www.google.com/maps?q=3190+HW-160,+Suite+F,+Pahrump,+NV&output=embed"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </motion.div>
);

const Contact = () => (
  <section className="min-h-screen py-12 md:py-20 bg-gray-50 flex flex-col items-center px-2">
    <motion.h1
      initial={{ opacity: 0, y: -26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.62, type: 'spring', bounce: 0.19 }}
      viewport={{ once: true }}
      className="text-2xl md:text-4xl font-serif text-gray-700 mb-10 md:mb-12 tracking-wide text-center px-3"
    >
      CALL OR VISIT
    </motion.h1>
    <div className="flex flex-col gap-10 md:gap-14 w-full max-w-4xl mx-auto md:flex-row justify-center items-start">
      <ContactForm />
      <ContactInfo />
    </div>
    <MapSection />
  </section>
);

export default Contact;
