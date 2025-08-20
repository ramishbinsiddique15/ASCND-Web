import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import quote from "../../assets/icons/quote.png";
import logo from "../../assets/icons/logo.png";
import doubleArrow from "../../assets/icons/double-arrow.png";

const BusinessQuote = () => {
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
        <div className="relative w-full bg-gray-100 py-12 sm:py-14 md:py-16 pt-32 sm:pt-36 md:pt-40 lg:pt-44">
            <motion.img 
                src={quote} 
                className='absolute -top-6 sm:-top-8 md:-top-10 right-0 w-48 sm:w-64 md:w-80 lg:w-96' 
                alt=""
                initial={{ opacity: 0, y: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
            />
            <div className="mx-auto max-w-[100rem] px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-center">

                    {/* Left side - Content */}
                    <motion.div
                        className="space-y-4 sm:space-y-5 md:space-y-6"
                        variants={containerVar}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.img
                            src={logo}
                            alt="ASCND Logo"
                            className="h-6 sm:h-7 md:h-8 w-auto"
                            variants={itemVar}
                        />

                        <motion.div className="space-y-2" variants={itemVar}>
                            <h1
                                className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-bold leading-[0.8]
             bg-gradient-to-r from-[#0D1318] to-[#FF4C16] bg-clip-text text-transparent z-50"
                            >
                                Start as a setter.
                                <br />
                                Close your own deals.
                                <br />
                                Lead a team.
                                <br />
                                Open your own dealership.
                                <br />
                                Run your own installation business.
                                <br />
                                In turf. In solar. In anything.
                            </h1>

                        </motion.div>

                        <motion.button
                            className="inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-7 lg:py-3.5 text-[10px] sm:text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#0D1318]/90"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            variants={itemVar}
                        >
                            <span>Apply Today</span>
                            <img src={doubleArrow} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BusinessQuote;