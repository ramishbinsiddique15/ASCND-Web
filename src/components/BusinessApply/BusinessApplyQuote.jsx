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
        <div className="relative  w-[60%] mx-auto h-screen" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
            <motion.div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4" variants={containerVar} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
                <motion.img src={logo} alt="ASCND Logo" className="h-6 w-auto md:h-7" variants={itemVar} />
                <motion.h1 className="text-4xl md:text-5xl font-bold text-black leading-tighter tracking-tighter" variants={itemVar}>
                    Build your business. Grow your<br />
                    team. Become the installer<br />
                    <span className="text-[#FF4C16]">Ascnd is you partner every step</span> <br />
                    <span className="text-[#FF4C16]">of the way</span>
                </motion.h1>
            </motion.div>
        </div>
    );
};

export default BusinessApplyQuote;