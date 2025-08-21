import React from 'react';
import { motion } from 'framer-motion';
import model from "../../assets/img/model.png";
import equity from "../../assets/icons/equity.png";
import utility from "../../assets/icons/utility.png";
import finance from "../../assets/icons/finance.png";
import tier from "../../assets/icons/tier.png";

// Animation variants
const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { delayChildren: 0.12, staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const Model = () => {
  return (
    <motion.section
      className="w-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35, margin: '0px 0px -10% 0px' }}
    >
      <div className="mx-auto max-w-[100rem]">
        <motion.div className="relative overflow-hidden bg-[#FF4C16]" variants={fadeUp}>
          {/* Background image with overlay */}
         <div className="absolute inset-0">
  <img 
    src={model} 
    alt="" 
    className="h-full w-full object-cover"
  />
  {/* Orange overlay */}
  <div className="absolute inset-0 bg-[#FF4C16] mix-blend-multiply opacity-100" />
</div>

          {/* Content */}
          <div className="relative px-4 py-8 sm:px-6 sm:py-10  md:py-12  lg:py-16 h-full z-10 flex flex-col justify-between">
            {/* Main heading */}
            <motion.h3 className="font-extrabold leading-[1.1] text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] max-w-full sm:max-w-2xl" variants={fadeUp}>
              Why The ASCND Model Works for Homeowners
            </motion.h3>

            {/* Feature cards grid */}
            <motion.div className="mb-12 sm:mb-20 md:mb-40 lg:mb-60 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8" variants={container}>
              {/* Build equity card */}
              <motion.div 
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white flex items-center gap-3 sm:gap-4"
                variants={fadeUp}
              >
                <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <img src={equity} alt="Build equity icon" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <span className="text-white text-sm sm:text-base md:text-lg font-semibold leading-tight">Build equity with each upgrade</span>
              </motion.div>

              {/* Reduce monthly costs card */}
              <motion.div 
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white flex items-center gap-3 sm:gap-4"
                variants={fadeUp}
              >
                <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <img src={utility} alt="Reduce costs icon" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <span className="text-white text-sm sm:text-base md:text-lg font-semibold leading-tight">Reduce monthly costs across utilities and maintenance</span>
              </motion.div>

              {/* Unlock financing card */}
              <motion.div 
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white flex items-center gap-3 sm:gap-4"
                variants={fadeUp}
              >
                <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <img src={finance} alt="Financing icon" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <span className="text-white text-sm sm:text-base md:text-lg font-semibold leading-tight">Unlock financing options that make big improvements accessible</span>
              </motion.div>

              {/* Fast installations card */}
              <motion.div 
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white flex items-center gap-3 sm:gap-4"
                variants={fadeUp}
              >
                <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <img src={tier} alt="High-quality installations icon" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <span className="text-white text-sm sm:text-base md:text-lg font-semibold leading-tight">Enjoy fast, high-quality installations by top-tier local pros</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Model;