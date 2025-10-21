import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

// Color accent for sidebar items.
const ACCENT = "text-[#8D7C75]";

const Sidebar = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Overlay */}
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        {/* Sidebar Panel */}
        <motion.aside
          className="fixed top-0 left-0 h-full w-64 bg-[#f6f5f3] shadow-lg z-50 flex flex-col py-10 px-8"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {/* Menu Top Row - moved close to links for perfect alignment */}
          <div className="flex items-center justify-end mb-2">
            <button
              onClick={onClose}
              className={`text-2xl ${ACCENT} hover:text-gray-700 transition`}
              aria-label="Close sidebar"
            >
              <FiX />
            </button>
          </div>
          {/* Navigation List */}
          <nav className="flex flex-col gap-7 mt-8 ml-2">
            <a
              href="#home"
              className={`font-semibold tracking-wide uppercase ${ACCENT} text-base hover:text-gray-800 transition`}
            >
              HOME
            </a>
            <a
              href="#listings"
              className={`${ACCENT} tracking-wide text-base hover:text-gray-800 transition`}
            >
              LISTINGS
            </a>
            <a
              href="#move"
              className={`${ACCENT} tracking-wide text-base hover:text-gray-800 transition`}
            >
              LET'S MOVE
            </a>
            <a
              href="#about"
              className={`${ACCENT} tracking-wide text-base hover:text-gray-800 transition`}
            >
              ABOUT US
            </a>
          </nav>
        </motion.aside>
      </>
    )}
  </AnimatePresence>
);

export default Sidebar;
