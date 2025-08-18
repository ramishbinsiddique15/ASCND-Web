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
        <div className="relative w-full p bg-gray-100 py-16 pt-44">
            <motion.img 
                src={quote} 
                className='absolute -top-10 right-0 w-96' 
                alt=""
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
            />
            <div className="mx-auto max-w-[100rem] px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">

                    {/* Left side - Content */}
                    <motion.div
                        className="space-y-6"
                        variants={containerVar}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.img
                            src={logo}
                            alt="ASCND Logo"
                            className="h-8 w-auto"
                            variants={itemVar}
                        />

                        <motion.div className="space-y-2" variants={itemVar}>
                            <h1
                                className="text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[0.8]
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
                            className="inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#0D1318]/90 sm:px-7 sm:py-3.5 md:text-[12px]"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            variants={itemVar}
                        >
                            <span>Apply Today</span>
                            <img src={doubleArrow} alt="" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BusinessQuote;