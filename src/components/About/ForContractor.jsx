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
      className="py-16 md:py-20 bg-gray-50"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="max-w-[100rem] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-5">
          {/* Left side - Dark section with content */}
          <motion.div className="flex-1" variants={itemVariants}>
            <div className="relative bg-[#0D1318] rounded-xl p-20 py-32 text-white h-full flex flex-col justify-center">
              {/* Positioned contractor image like phaseBg */}
              <img 
                src={contractor} 
                alt="" 
                className="absolute right-10 w-60"
              />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-block border border-white px-4 py-2 text-xs font-semibold uppercase tracking-wider mb-8 rounded">
                  FOR CONTRACTORS & SALES PROFESSIONALS
                </div>
                
                <h2 className="text-3xl font-bold leading-tight mb-6">
                  We help ambitious professionals build{" "}
                  <span className="text-[#FF4C16]">real careers</span> and offer a clear path
                  from sales rep to full installer ownership in multiple trades.
                </h2>
                
                <p className="text-lg opacity-90 mb-10 leading-relaxed">
                  Whether you're starting out or ready to own your own install division, ASCND provides:
                </p>
                
                <motion.button 
                  className="inline-flex items-center justify-between gap-2 rounded-md bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF4C16] transition hosm:px-7 sm:py-3.5 md:text-[12px]"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>LEARN MORE</span>
                  <img src={doubleArrow} alt="" className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right side - Grid of feature cards */}
          <motion.div className="flex-1" variants={itemVariants}>
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Training & tools card - Orange overlay */}
              <motion.div 
                className="relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                variants={cardVariants}
              >
                <img src={training} alt="Training & tools" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-[#FF4C16] mix-blend-multiply opacity-100  rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 z-10">
                  <h3 className="text-white text-lg font-semibold leading-tight">Training & tools</h3>
                </div>
              </motion.div>

              {/* Fast, consistent fulfillment card - Grayscale */}
              <motion.div 
                className="relative rounded-xl overflow-hidden  cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                variants={cardVariants}
              >
                <img src={fast} alt="Fast, consistent fulfillment" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 z-10">
                  <h3 className="text-[#4B5361] text-lg font-semibold leading-tight">Fast, consistent fulfillment</h3>
                </div>
              </motion.div>

              {/* Marketing & lead gen support card - Grayscale */}
              <motion.div 
                className="relative rounded-xl overflow-hidden  cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                variants={cardVariants}
              >
                <img src={marketing} alt="Marketing & lead gen support" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 z-10">
                  <h3 className="text-[#4B5361] text-lg font-semibold leading-tight">Marketing & lead gen support</h3>
                </div>
              </motion.div>

              {/* Installation ownership card - Grayscale */}
              <motion.div 
                className="relative rounded-xl overflow-hidden  cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                variants={cardVariants}
              >
                <img src={installation} alt="Installation ownership" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 z-10">
                  <h3 className="text-[#4B5361] text-lg font-semibold leading-tight">Installation ownership without the back-end burden</h3>
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