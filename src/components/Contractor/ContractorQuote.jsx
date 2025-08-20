import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import bg from "../../assets/icons/bg.png";
import logo from "../../assets/icons/logo.png";
import  doubleArrow from "../../assets/icons/double-arrow.png";

const ContractorQuote = () => {
  const prefersReduced = useReducedMotion();

  const containerVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { when: 'beforeChildren', staggerChildren: 0.12, type: 'spring', stiffness: 130, damping: 22 }
        }
      };

  const itemVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 160, damping: 24 } } };

  return (
    <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto h-screen" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
      <motion.div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4 sm:px-6 " variants={containerVar} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
        <motion.img src={logo} alt="ASCND Logo" className="h-5 sm:h-6 w-auto md:h-7" variants={itemVar} />
        <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tighter tracking-tighter" variants={itemVar}>
          Build your Business. Grow your<br />
          team. Become the Installer<br />
          <span className="text-[#FF4C16]">ASCND is your partner every step of the way.</span>
        </motion.h1>
         <motion.button
                className="mt-5 cursor-pointer inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-4 py-2.5 text-[10px] sm:px-6 sm:py-3 sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#0D1318]/90 md:px-7 md:py-3.5 md:text-[12px]"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVar}
              >
                <span>Apply Today</span>
                <img src={doubleArrow} alt="" />
              </motion.button>
      </motion.div>
    </div>
  );
};

export default ContractorQuote;