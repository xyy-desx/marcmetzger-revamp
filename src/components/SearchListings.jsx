import { motion } from "framer-motion";
import listingsBg from '../assets/images/listingsbg.webp';

const SearchListings = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: "spring", bounce: 0.3 }
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] bg-black font-['Cormorant_Garamond'] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.img
        src={listingsBg}
        alt="Listings Background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-white px-4 md:px-6 max-w-6xl mx-auto w-full">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 tracking-widest drop-shadow-2xl"
        >
          Find Your Dream Home
        </motion.h1>

        {/* Search Box with Glass Morphism */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/90 backdrop-blur-xl max-w-5xl mx-auto rounded-2xl shadow-2xl p-6 md:p-10 text-left border border-white/20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-3xl font-serif text-gray-800 mb-6 md:mb-8 tracking-wide"
          >
            Search Listings
          </motion.h2>

          {/* Form */}
          <motion.form
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {/* Location */}
            <motion.select
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              className="p-3 md:p-4 rounded-lg border-2 border-gray-200 bg-white text-gray-700 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                transition-all duration-300 hover:border-gray-300 cursor-pointer
                shadow-sm hover:shadow-md"
            >
              <option>Location</option>
              <option>Las Vegas</option>
              <option>Summerlin</option>
              <option>Henderson</option>
            </motion.select>

            {/* Type */}
            <motion.select
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              className="p-3 md:p-4 rounded-lg border-2 border-gray-200 bg-white text-gray-700 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                transition-all duration-300 hover:border-gray-300 cursor-pointer
                shadow-sm hover:shadow-md"
            >
              <option>Type</option>
              <option>House</option>
              <option>Condo</option>
              <option>Townhouse</option>
            </motion.select>

            {/* Bedrooms */}
            <motion.select
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              className="p-3 md:p-4 rounded-lg border-2 border-gray-200 bg-white text-gray-700 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                transition-all duration-300 hover:border-gray-300 cursor-pointer
                shadow-sm hover:shadow-md"
            >
              <option>Bedrooms</option>
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </motion.select>

            {/* Bathrooms */}
            <motion.select
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              className="p-3 md:p-4 rounded-lg border-2 border-gray-200 bg-white text-gray-700 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                transition-all duration-300 hover:border-gray-300 cursor-pointer
                shadow-sm hover:shadow-md"
            >
              <option>Bathrooms</option>
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </motion.select>

            {/* Min Price */}
            <motion.input
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              type="number"
              placeholder="Min Price"
              className="p-3 md:p-4 rounded-lg border-2 border-gray-200 bg-white text-gray-700 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                transition-all duration-300 hover:border-gray-300
                shadow-sm hover:shadow-md placeholder:text-gray-400"
            />

            {/* Max Price */}
            <motion.input
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              type="number"
              placeholder="Max Price"
              className="p-3 md:p-4 rounded-lg border-2 border-gray-200 bg-white text-gray-700 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                transition-all duration-300 hover:border-gray-300
                shadow-sm hover:shadow-md placeholder:text-gray-400"
            />

            {/* Sort By */}
            <motion.select
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              className="p-3 md:p-4 rounded-lg border-2 border-gray-200 bg-white text-gray-700 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                transition-all duration-300 hover:border-gray-300 cursor-pointer
                shadow-sm hover:shadow-md"
            >
              <option>Sort By</option>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
            </motion.select>

            {/* Search Button */}
            <motion.button
              variants={itemVariants}
              type="button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="col-span-1 sm:col-span-2 lg:col-span-1 bg-linear-to-r from-blue-900 to-blue-700 
                text-white py-3 md:py-4 px-8 rounded-lg font-semibold tracking-wide 
                hover:from-blue-800 hover:to-blue-600 transition-all duration-300 
                shadow-lg hover:shadow-xl active:shadow-md
                flex items-center justify-center gap-2 group"
            >
              <span>Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchListings;
