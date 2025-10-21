import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

// Utility for character spacing in "Homes"
const homesChars = "Homes".split("");

const Header = ({ onOpenSidebar }) => (
  <motion.header
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="bg-white pt-10 pb-14 flex flex-col items-center relative shadow z-50"
  >
    <button
      onClick={onOpenSidebar}
      className="absolute top-3 left-4 text-gray-700 hover:text-blue-900 transition-transform duration-200 hover:scale-110 focus:outline-none z-40"
      aria-label="Open navigation"
    >
      <FiMenu className="h-7 w-7" />
    </button>
    <div className="relative flex flex-col items-center w-fit select-none">
      <div className="relative">
        {/* Top Name */}
        <h1
          className="text-6xl font-light uppercase tracking-[0.07em] text-[#232939] pb-3 z-20 text-center"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          MARCI METZGER
        </h1>
        {/* Underline w/ "Homes" centered between lines */}
        <div className="flex flex-col items-center w-full relative">
          <div className="w-full h-0.5 bg-transparent flex items-center relative">
            {/* ONE CONTINUOUS LINE BEHIND TEXT */}
            <span
              className="block h-[2px] bg-[#232939] absolute left-0 top-1/2"
              style={{ width: "100%", transform: "translateY(-50%)", zIndex: 10 }}
            />
            {/* "Homes" text overlapping the line with NO WHITE BACKGROUND */}
            <span
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{ top: 0, lineHeight: 1, background: "transparent" }}
            >
              <span
                className="text-4xl md:text-5xl text-[#232939] italic font-normal flex"
                style={{ fontFamily: "'Dancing Script', cursive", letterSpacing: "0.32em" }}
              >
                {homesChars.map((ch, i) => (
                  <span key={i} style={{ marginLeft: i === 0 ? 0 : '0.38em' }}>{ch}</span>
                ))}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </motion.header>
);

export default Header;
