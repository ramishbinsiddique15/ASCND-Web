import React from 'react';
import { motion } from 'framer-motion';
import model from "../../assets/img/model.png";
import equity from "../../assets/icons/career.png";
import utility from "../../assets/icons/trade.png";
import finance from "../../assets/icons/discipline.png";
import tier from "../../assets/icons/fast.png";

// Animation variants
const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { delayChildren: 0.12, staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const BusinessWhy = () => {
  return (
    <motion.section
      className="w-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35, margin: '0px 0px -10% 0px' }}
    >
      <div className="mx-auto max-w-[100rem] ">
        <motion.div className="relative overflow-hidden" variants={fadeUp}>

          {/* Content */}
          <div className="relative px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 h-full z-10 flex flex-col justify-between">
            {/* Main heading */}
            <motion.h3 className="font-extrabold leading-[1.1] text-[#0D1318] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-xl sm:max-w-2xl lg:max-w-3xl" variants={fadeUp}>
              Why The ASCND Model Works
            </motion.h3>

            {/* Feature cards grid */}
            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-7 md:mt-8" variants={container}>
              {/* Build equity card */}
              <motion.div 
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#0D1318] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                variants={fadeUp}
              >
                <div className="bg-[#0D1318] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <img src={equity} alt="Build equity icon" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <span className="text-[#0D1318] text-base sm:text-lg md:text-xl font-semibold leading-tight">Real career mobility—from entry-level to business ownership</span>
              </motion.div>

              {/* Reduce monthly costs card */}
              <motion.div 
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#0D1318] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                variants={fadeUp}
              >
                <div className="bg-[#0D1318] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <img src={utility} alt="Reduce costs icon" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <span className="text-[#0D1318] text-base sm:text-lg md:text-xl font-semibold leading-tight">Tradespeople get financial power without needing licensing up front</span>
              </motion.div>

              {/* Unlock financing card */}
              <motion.div 
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#0D1318] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                variants={fadeUp}
              >
                <div className="bg-[#0D1318] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <img src={finance} alt="Financing icon" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <span className="text-[#0D1318] text-base sm:text-lg md:text-xl font-semibold leading-tight">Multi-discipline selling for more deals, more commissions</span>
              </motion.div>

              {/* Fast installations card */}
              <motion.div 
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#0D1318] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                variants={fadeUp}
              >
                <div className="bg-[#0D1318] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <img src={tier} alt="High-quality installations icon" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <span className="text-[#0D1318] text-base sm:text-lg md:text-xl font-semibold leading-tight">Fast installs, no clawbacks, and built-in growth support</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BusinessWhy;