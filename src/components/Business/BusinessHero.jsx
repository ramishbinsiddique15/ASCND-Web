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

const BusinessHero = () => {
    return (
        <motion.section
            className="w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
        >
            <motion.img 
                src={bg} 
                className='absolute right-0 -z-50 w-[40%]' 
                alt=""
                variants={backgroundVar}
            />

            <div className="mx-auto max-w-[100rem] px-4 md:px-8">
                {/* Content grid */}
                <motion.div
                    className="grid grid-cols-1 items-stretch gap-8 pb-8 pt-10 md:grid-cols-12 md:gap-14 md:pb-10 md:pt-14 md:min-h-[380px] lg:min-h-[460px] lg:gap-24 lg:pt-16"
                    variants={container}
                >
                    {/* Left: Tag + Headline */}
                    <motion.div className="md:col-span-7 flex h-full flex-col md:pr-6 lg:pr-10 pt-10" variants={container}>
                        <motion.span variants={fadeUp} className="w-fit inline-block rounded-sm border-2 border-[#FF4C16] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FF4C16] md:text-[11px]">
                            ASCND GROWTH MODEL
                        </motion.span>
                        <h2 className="mt-4 font-extrabold leading-[0.98] text-[#0b0c0e] md:mt-5 text-7xl">
                            <motion.span variants={fadeUp} className="block whitespace-nowrap">From apprentice to</motion.span>
                            <motion.span variants={fadeUp} className="block whitespace-nowrap">owner. The platform</motion.span>
                            <motion.span variants={fadeUp} className="block whitespace-nowrap">that does it all.</motion.span>
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

export default BusinessHero;