import { FiPhone } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import hero from "../assets/images/hero.jpg";

const Hero = () => {
  const { scrollY } = useScroll();

  // Animated/parallax background
  const yBg = useTransform(scrollY, [0, 400], [0, 120]);
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0.95]);

  // Text and button scroll animations
  const yText = useTransform(scrollY, [0, 400], [0, 45]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0.2]);
  const titleScale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const subtitleY = useTransform(scrollY, [0, 400], [0, 60]);
  const subtitleOpacity = useTransform(scrollY, [0, 250], [1, 0.3]);
  const buttonY = useTransform(scrollY, [0, 400], [0, 80]);
  const buttonOpacity = useTransform(scrollY, [0, 200], [1, 0.1]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center font-['Cormorant_Garamond',serif]">
      {/* Animated parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: yBg,
          opacity: bgOpacity,
        }}
      />

      {/* Black overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6 mt-48">
        {/* Subtitle */}
        <motion.h2
          style={{
            y: subtitleY,
            opacity: subtitleOpacity
          }}
          className="text-sm md:text-lg font-semibold tracking-[0.25em] uppercase text-white mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          MARCI METZGER – THE RIDGE REALTY GROUP
        </motion.h2>

        {/* Main title */}
        <motion.h1
          style={{
            y: yText,
            opacity: titleOpacity,
            scale: titleScale
          }}
          className="text-[2.5rem] md:text-[4.0rem] font-bold tracking-[0.13em] leading-tight mb-10 text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]"
        >
          Pahrump Realtor
        </motion.h1>

        {/* Call Button */}
        <motion.a
          href="tel:2069196886"
          style={{
            y: buttonY,
            opacity: buttonOpacity
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 6px 30px rgba(0,0,0,0.27)"
          }}
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white/95 text-gray-900 font-semibold text-base tracking-wide shadow-lg hover:bg-white border border-gray-200 transition-transform duration-300"
        >
          <FiPhone className="text-xl" />
          CALL NOW
        </motion.a>
      </div>

      {/* Diamond Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div
          className="w-10 h-10 bg-white border border-gray-300 shadow-md"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
