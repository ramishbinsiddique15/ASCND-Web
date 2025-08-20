import React from 'react';
import { motion } from 'framer-motion';
import bg from "../../assets/icons/background.png";

// Animation variants
const container = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: { delayChildren: 0.18, staggerChildren: 0.15 }
    }
};

const fadeUp = {
    hidden: { y: 22, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
};

const dividerVar = {
    hidden: { scaleX: 0, opacity: 0.5 },
    show: { scaleX: 1, opacity: 1, transition: { duration: 0.85, ease: 'easeOut', delay: 0.3 } }
};

const backgroundVar = {
    hidden: { opacity: 0, x: 50 },
    show: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }
    }
};

const HomeOwnerHero = () => {
    return (
        <motion.section
            className="w-full"
            initial="hidden"
            animate="show"
        >
            <motion.img 
                src={bg} 
                className='absolute right-0 -z-50 w-[60%] sm:w-[50%] md:w-[45%] lg:w-[40%]' 
                alt=""
                variants={backgroundVar}
            />

            <div className="mx-auto max-w-[100rem] px-4 sm:px-6 md:px-8 lg:px-12">
                {/* Content grid */}
                <motion.div
                    className="grid grid-cols-1 items-stretch gap-6 pb-6 pt-8 sm:gap-8 sm:pb-8 sm:pt-10 md:grid-cols-12 md:gap-14 md:pb-10 md:pt-14 md:min-h-[380px] lg:min-h-[460px] lg:gap-24 lg:pt-16"
                    variants={container}
                >
                    {/* Left: Tag + Headline */}
                    <motion.div className="md:col-span-7 flex h-full flex-col md:pr-6 lg:pr-10 pt-6 sm:pt-8 md:pt-10" variants={container}>
                        <motion.span variants={fadeUp} className="w-fit inline-block rounded-sm border-2 border-[#FF4C16] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#FF4C16] sm:px-3 sm:text-[10px] md:text-[11px]">
                            ASCND HOME SERVICES
                        </motion.span>
                        <h2 className="mt-3 font-extrabold leading-[0.98] text-[#0b0c0e] sm:mt-4 md:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                            <motion.span variants={fadeUp} className="block">Turn projects into</motion.span>
                            <motion.span variants={fadeUp} className="block">progress and progress</motion.span>
                            <motion.span variants={fadeUp} className="block">into equity.</motion.span>
                        </h2>
                    </motion.div>

                    {/* Right: Copy */}

                </motion.div>

                {/* Bottom divider line */}
                <motion.div className="border-t border-[#0D1318] origin-left" variants={dividerVar} />
            </div>
        </motion.section>
    );
};

export default HomeOwnerHero;