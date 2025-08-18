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
          <div className="relative px-8 py-12 h-full z-10 flex flex-col justify-between">
            {/* Main heading */}
            <motion.h3 className="font-extrabold leading-[1.1] text-[#0D1318] text-7xl max-w-2xl" variants={fadeUp}>
              Why The ASCND Model Works
            </motion.h3>

            {/* Feature cards grid */}
            <motion.div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-8" variants={container}>
              {/* Build equity card */}
              <motion.div 
                className=" rounded-2xl p-6 border border-[#0D1318] flex items-center gap-4"
                variants={fadeUp}
              >
                <div className="bg-[#0D1318] rounded-xl p-3 flex-shrink-0">
                  <img src={equity} alt="Build equity icon" className="w-8 h-8" />
                </div>
                <span className="text-[#0D1318] text-xl font-semibold">Real career mobility—from entry-level to business ownership</span>
              </motion.div>

              {/* Reduce monthly costs card */}
              <motion.div 
                className=" rounded-2xl p-6 border border-[#0D1318] flex items-center gap-4"
                variants={fadeUp}
              >
                <div className="bg-[#0D1318] rounded-xl p-3 flex-shrink-0">
                  <img src={utility} alt="Reduce costs icon" className="w-8 h-8" />
                </div>
                <span className="text-[#0D1318] text-xl font-semibold">Tradespeople get financial power without needing licensing up front</span>
              </motion.div>

              {/* Unlock financing card */}
              <motion.div 
                className=" rounded-2xl p-6 border border-[#0D1318] flex items-center gap-4"
                variants={fadeUp}
              >
                <div className="bg-[#0D1318] rounded-xl p-3 flex-shrink-0">
                  <img src={finance} alt="Financing icon" className="w-8 h-8" />
                </div>
                <span className="text-[#0D1318] text-xl font-semibold">Multi-discipline selling for more deals, more commissions</span>
              </motion.div>

              {/* Fast installations card */}
              <motion.div 
                className=" rounded-2xl p-6 border border-[#0D1318] flex items-center gap-4"
                variants={fadeUp}
              >
                <div className="bg-[#0D1318] rounded-xl p-3 flex-shrink-0">
                  <img src={tier} alt="High-quality installations icon" className="w-8 h-8" />
                </div>
                <span className="text-[#0D1318] text-xl font-semibold">Fast installs, no clawbacks, and built-in growth support</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BusinessWhy;