import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import bg from "../../assets/icons/bg.png";
import logo from "../../assets/icons/logo.png";
import doubleArrow from "../../assets/icons/double-arrow.png";

const BusinessApplyQuote = () => {
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
        <div className="relative w-full max-w-4xl mx-auto min-h-[60vh] sm:min-h-screen px-4 sm:px-6" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
            <motion.div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4 sm:px-6" variants={containerVar} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
                <motion.img src={logo} alt="ASCND Logo" className="h-5 w-auto sm:h-6 md:h-7" variants={itemVar} />
                <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1318] leading-tighter tracking-tighter" variants={itemVar}>
                    <span className="block sm:inline">Build your business. Grow your</span><br className="hidden sm:block" />
                    <span className="block sm:inline">team. Become the installer</span><br className="hidden sm:block" />
                    <span className="text-[#FF4C16] block sm:inline">Ascnd is your partner every step</span> <br className="hidden sm:block" />
                    <span className="text-[#FF4C16] block sm:inline">of the way</span>
                </motion.h1>
            </motion.div>
        </div>
    );
};

export default BusinessApplyQuote;