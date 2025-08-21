import React from 'react'
import { motion } from 'framer-motion'
import contractor from "../../assets/img/contractor-bg.png";
import training from "../../assets/img/training.png";
import fast from "../../assets/img/fast.jpg";
import marketing from "../../assets/img/marketing.jpg";
import installation from "../../assets/img/installation.jpg";
import doubleArrow from "../../assets/icons/double-arrow.png";

const ForContractor = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 1 },
    show: { 
      opacity: 1, 
      transition: { delayChildren: 0.12, staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const cardVariants = {
    hidden: { y: 16, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <motion.section 
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 ">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5">
          {/* Left side - Dark section with content */}
          <motion.div className="flex-1" variants={itemVariants}>
            <div className="relative bg-[#0D1318] rounded-xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 text-white h-full flex flex-col justify-center">
              {/* Positioned contractor image like phaseBg */}
              <img 
                src={contractor} 
                alt="" 
                className="absolute right-4 sm:right-6 md:right-8 lg:right-10 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-60 opacity-80 sm:opacity-100"
              />
              
              {/* Content */}
              <div className="relative z-10 max-w-md lg:max-w-lg">
                <div className="inline-block border border-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6 md:mb-8 rounded">
                  FOR CONTRACTORS & SALES PROFESSIONALS
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold leading-[0.8] mb-4 sm:mb-5 md:mb-6">
                  We help ambitious professionals build{" "}
                  <span className="text-[#FF4C16]">real careers</span> and offer a clear path
                  from sales rep to full installer ownership in multiple trades.
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                  Whether you're starting out or ready to own your own install division, ASCND provides:
                </p>
                
                <motion.button 
                  className="inline-flex items-center justify-between gap-2 rounded-md bg-white px-4 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-[10px] sm:text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.18em] text-[#FF4C16] transition"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>LEARN MORE</span>
                  <img src={doubleArrow} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right side - Grid of feature cards */}
          <motion.div className="flex-1" variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-full">
              {/* Training & tools card - Orange overlay */}
              <motion.div 
                className="relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 min-h-[200px] sm:min-h-[150px]"
                variants={cardVariants}
              >
                <img src={training} alt="Training & tools" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-[#FF4C16] mix-blend-multiply opacity-100  rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 md:p-5 z-10">
                  <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">Training & tools</h3>
                </div>
              </motion.div>

              {/* Fast, consistent fulfillment card - Grayscale */}
              <motion.div 
                className="relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 min-h-[200px] sm:min-h-[150px]"
                variants={cardVariants}
              >
                <img src={fast} alt="Fast, consistent fulfillment" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 md:p-5 z-10">
                  <h3 className="text-[#4B5361] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">Fast, consistent fulfillment</h3>
                </div>
              </motion.div>

              {/* Marketing & lead gen support card - Grayscale */}
              <motion.div 
                className="relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 min-h-[200px] sm:min-h-[150px]"
                variants={cardVariants}
              >
                <img src={marketing} alt="Marketing & lead gen support" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 md:p-5 z-10">
                  <h3 className="text-[#4B5361] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">Marketing & lead gen support</h3>
                </div>
              </motion.div>

              {/* Installation ownership card - Grayscale */}
              <motion.div 
                className="relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 min-h-[200px] sm:min-h-[150px]"
                variants={cardVariants}
              >
                <img src={installation} alt="Installation ownership" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 md:p-5 z-10">
                  <h3 className="text-[#4B5361] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">Installation ownership without the back-end burden</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ForContractor