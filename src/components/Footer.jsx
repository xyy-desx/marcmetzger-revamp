import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialIcons = [
  { icon: FaFacebookF, url: "https://www.facebook.com/MarciHomes/", label: "Facebook" },
  { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/marci-metzger-30642496/", label: "LinkedIn" },
  { icon: FaYelp, url: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump", label: "Yelp" }
];

const Footer = () => (
  <footer className="bg-black text-gray-400 pt-10 pb-6 mt-2 relative z-10">
    {/* Social Icons Row with animation */}
    <div className="flex justify-center space-x-8 mb-5">
      {socialIcons.map((s, i) => (
        <motion.a
          key={s.label}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="hover:bg-gray-900 rounded-full p-2 transition flex items-center"
          initial={{ scale: 1, opacity: 0, y: 12 }}
          whileInView={{ scale: 1, opacity: 1, y: 0, transition: { delay: i * 0.08, type: "spring" } }}
          whileHover={{ scale: 1.22, backgroundColor: "#111" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <s.icon className="text-xl" />
        </motion.a>
      ))}
    </div>
    {/* Copyright */}
    <div className="text-center tracking-wider text-xs mb-5 font-light text-gray-400">
      COPYRIGHT © {new Date().getFullYear()} MARCI METZGER HOMES – ALL RIGHTS RESERVED
    </div>
    {/* Separator Line */}
    <div className="flex justify-center mb-5">
      <span className="w-14 border-b border-gray-600"></span>
    </div>
    {/* Powered by */}
    <div className="text-center text-xs font-light mb-1 tracking-wider">POWERED BY</div>
    <motion.div
      className="flex justify-center items-center mb-2"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, type: 'spring', bounce: 0.19, delay: 0.18 }}
      viewport={{ once: true }}
    >
      <a
        href="https://www.godaddy.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:opacity-90 transition"
        aria-label="GoDaddy"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g>
            <path d="M22.69 8.53c-1.05 0-2.15.34-3.09 1.2-.94-.86-2.03-1.2-3.09-1.2-2.08 0-3.77 1.42-3.79 3.76-.02 2.12 1.61 4.86 5.63 8.71l.73.7.73-.7c4.01-3.85 5.65-6.59 5.63-8.7-.01-2.34-1.71-3.77-3.79-3.77zm-3.09 10.24l-.01-.01c-3.36-3.22-4.89-5.55-4.87-7.2.01-1.38 1.04-2.26 2.42-2.26.85 0 1.78.37 2.45 1.22l.47.58.47-.58c.66-.85 1.59-1.22 2.44-1.22 1.37 0 2.41.89 2.42 2.27.01 1.65-1.51 3.97-4.87 7.2z" fill="#fff"/>
          </g>
        </svg>
        <span className="text-white text-lg font-bold ml-2" style={{fontFamily: 'sans-serif'}}>GoDaddy</span>
      </a>
    </motion.div>
  </footer>
);

export default Footer;
