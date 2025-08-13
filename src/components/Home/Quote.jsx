import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import bg from "../../assets/icons/bg.png";
import logo from "../../assets/icons/logo.png";
import  doubleArrow from "../../assets/icons/double-arrow.png";

const Quote = () => {
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
    <div className="relative  w-[60%] mx-auto h-screen" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
      <motion.div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4" variants={containerVar} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
        <motion.img src={logo} alt="ASCND Logo" className="h-6 w-auto md:h-7" variants={itemVar} />
        <motion.h1 className="text-4xl md:text-5xl font-bold text-black leading-tighter tracking-tighter" variants={itemVar}>
          Every home is different.<br />
          Every homeowner has a vision.<br />
          We take the time to understand yours and <span className="text-[#FF4C16]">bring it to life.</span>
        </motion.h1>
         <motion.button
                className="mt-5 cursor-pointer inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#0D1318]/90 sm:px-7 sm:py-3.5 md:text-[12px]"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVar}
              >
                <span>Learn How</span>
                <img src={doubleArrow} alt="" />
              </motion.button>
      </motion.div>
    </div>
  );
};

export default Quote;