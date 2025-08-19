import React from 'react';
import { motion } from 'framer-motion';
import about from "../../assets/img/about.png";
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

const AboutHero = () => {
    return (
        <motion.section
            className="w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
        >
            <div className="mx-auto max-w-[100rem] px-4 md:px-8">
                {/* Content grid */}
                <motion.div
                    className="grid grid-cols-1 items-stretch gap-8 pb-8 pt-10 md:grid-cols-12 md:gap-14 md:pb-10 md:pt-14 md:min-h-[380px] lg:min-h-[460px] lg:gap-24 lg:pt-16"
                    variants={container}
                >
                    {/* Left: Tag + Headline */}
                    <motion.div className="md:col-span-7 flex h-full flex-col justify-end md:pr-6 lg:pr-10" variants={container}>
                        <motion.span variants={fadeUp} className="w-fit inline-block rounded-sm border-2 border-[#FF4C16] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FF4C16] md:text-[11px]">
                            ABOUT ASCND
                        </motion.span>
                        <h2 className="mt-4 font-extrabold leading-[0.98] text-[#0b0c0e] md:mt-5 text-6xl">
                            <motion.span variants={fadeUp} className="block whitespace-nowrap">Enhance your</motion.span>
                            <motion.span variants={fadeUp} className="block whitespace-nowrap">home. Elevate</motion.span>
                            <motion.span variants={fadeUp} className="block whitespace-nowrap">your life.</motion.span>
                        </h2>
                    </motion.div>

                    {/* Right: Copy */}
                    <motion.div className="md:col-span-5 flex h-full flex-col justify-end md:pl-6 lg:pl-10" variants={container}>
                        <motion.p variants={fadeUp} className="text-base font-semibold leading-relaxed text-[#0D1318] sm:text-lg md:text-xl">
                            ASCND was built with a single belief: Everyone should have the power to improve their space - without the bottlenecks, middlemen, or outdated models.
                        </motion.p>
                        <motion.p variants={fadeUp} className="mt-4 text-sm leading-7 text-[#0D1318]/70 sm:text-base">
                            We’re a new kind of home improvement company—one that empowers homeowners to take control of their upgrades and contractors to take control of their business - and in turn, provide a quality experience for both.
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Bottom divider line */}
                <motion.div className="border-t border-[#0D1318] origin-left" variants={dividerVar} />
            </div>
            
            {/* About image - full width, no constraints */}
            <img src={about} alt="" className="w-full" />
        </motion.section>
    );
};

export default AboutHero;