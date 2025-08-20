import React from 'react'
import { motion } from 'framer-motion'
import summit from "../../assets/img/summit.png"
import polymer from "../../assets/img/polymer.png"
import doubleArrow from "../../assets/icons/double-arrow-blue.png"
import logo from "../../assets/icons/logo.png"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Summit = () => {
  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden pt-32 sm:pt-48 md:pt-64 lg:pt-72 "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
     <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat "
  style={{ backgroundImage: `url(${summit})` }}
></div>

{/* Gradient overlay that stays blue */}
<div className="absolute inset-0 bg-gradient-to-b from-[#105CE9]/50 to-[#105CE9]" />


      <div className="absolute top-20 sm:top-32 md:top-44 -right-48 sm:-right-64 md:-right-80 lg:-right-96">
        <img src={polymer } alt="Geometric shapes" className="w-[40%] sm:w-[50%] md:w-[60%] max-w-none" />
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 max-w-7xl mx-auto">
        {/* Top tagline */}
        <motion.div variants={itemVariants} className="">
          <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-[1.1] max-w-full sm:max-w-md">
            Earn like an installer—
            <br />
            without becoming one
            <br />
            overnight
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-5 md:mb-6">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">Summit Program</h1>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full h-0.5 bg-white mb-8 sm:mb-10 md:mb-12"></motion.div>

        {/* Layout container for bullets and right side content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4 w-full lg:w-auto">
            <motion.div 
              variants={itemVariants}
              className="border-2 border-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 w-fit"
            >
              <p className="text-white text-sm sm:text-base font-medium">Keep 100% of your commission + % of install margin</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="border-2 border-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 w-fit"
            >
              <p className="text-white text-sm sm:text-base font-medium">Maintain control while we handle fulfillment</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="border-2 border-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 w-fit"
            >
              <p className="text-white text-sm sm:text-base font-medium">Works across all ASCND trades</p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-start lg:items-end space-y-4 sm:space-y-5 md:space-y-6 w-full lg:w-auto">
            {/* ASCND Logo */}
            <img 
              src={logo || "/placeholder.svg"} 
              alt="ASCND Logo" 
              className="invert h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" 
              style={{
                imageRendering: 'crisp-edges',
                imageRendering: '-webkit-optimize-contrast',
                imageRendering: 'optimize-contrast',
                msInterpolationMode: 'nearest-neighbor'
              }}
              loading="lazy"
            />

            {/* Apply Now button */}
            <motion.button 
              className="bg-white text-blue-600 px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3 rounded-lg font-semibold text-xs sm:text-sm tracking-wider hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 w-fit"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              APPLY NOW
              <img src={doubleArrow || "/placeholder.svg"} alt="Arrow" className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Summit
