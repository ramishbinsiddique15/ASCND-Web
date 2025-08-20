import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import solar from '../../assets/icons/solar.png';
import epoxy from '../../assets/icons/epoxy.png';
import roofing from '../../assets/icons/roofing.png';
import lighting from '../../assets/icons/lighting.png';
import hvac from '../../assets/icons/hvac.png';
import windows from '../../assets/icons/windows.png';
import doubleArrow from "../../assets/icons/double-arrow.png";

import power from '../../assets/img/power.jpg';
import garage from '../../assets/img/garage.jpg';
import protect from '../../assets/img/protect.jpg';
import light from '../../assets/img/lighting.jpg';
import comfort from '../../assets/img/comfort.jpg';
import privacy from '../../assets/img/privacy.jpg';

// Animation variants (subtle, smooth)
const sectionFade = {
    hidden: { y: 12, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 130, damping: 22 } }
};

const cardVar = {
    hidden: { y: 16, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
};

const contentVar = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { delayChildren: 0.12, staggerChildren: 0.1 } }
};

const textVar = {
    hidden: { y: 14, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

const dividerVar = {
    hidden: { scaleX: 0, opacity: 0.6 },
    show: { scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const imageVar = {
    hidden: { scale: 1.03, opacity: 0.85 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } }
};

const listVar = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { delayChildren: 0.1, staggerChildren: 0.08 } }
};

const items = [
    {
        icon: solar,
        label: 'SOLAR',
        title: 'Sell solar like an installer.',
        body:
            'We give you the tools to close and fulfill solar projects—fast. Keep 100% of your commissions, access full financing options, and get paid with direct pay structures. No clawbacks. No delays. Real control.',
        image: power,
    },
    {
        icon: epoxy,
        label: 'EPOXY FLOORING',
        title: 'Quick installs. Big margins.',
        body:
            'Epoxy is one of the fastest-growing home upgrades. We handle install logistics, materials, and timelines—so you can focus on selling and scaling..',
        image: garage,
    },
    {
        icon: roofing,
        label: 'ROOFING',
        title: 'Add roofing to your toolkit.',
        body:
            'With ASCND, you can quote and sell roofing in all 50 states. Use our tools like RoofX, work with licensed contractors, and earn top-tier margins without becoming a roofer yourself.',
        image: protect,
    },
    {
        icon: lighting,
        label: 'PERMANENT LIGHTING',
        title: 'Recurring income, all year long.',
        body:
            'We’ve partnered with permanent lighting pros to give you a plug-and-play way to offer premium installs. It’s high-margin, low-effort, and backed by smart tech.',
        image: light,
    },
    {
        icon: hvac,
        label: 'HVAC',
        title: 'Tap into year-round opportunity.',
        body:
            'HVAC upgrades are essential in every market. ASCND lets you offer complete HVAC systems or simple add-ons—no license needed, just support from real pros.',
        image: comfort,
    },
    {
        icon: windows,
        label: 'WINDOWS & BLINDS',
        title: 'Expand your product offering—easily.',
        body:
            'Our window covering program gives you custom quoting tools and installers to fulfill across the U.S. Add blinds and roller shades to any project or sell as standalone upgrades.',
        image: privacy,
    },
];

const Card = ({ icon, label, title, body, image }) => {
    const prefersReduced = useReducedMotion();

    const localCardVar = prefersReduced
        ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.1 } } }
        : {
            hidden: { y: 12, opacity: 0 },
            show: {
                y: 0,
                opacity: 1,
                transition: { type: 'spring', stiffness: 140, damping: 22, mass: 0.7 }
            }
        };

    const localTextVar = prefersReduced
        ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.1 } } }
        : {
            hidden: { y: 10, opacity: 0 },
            show: {
                y: 0,
                opacity: 1,
                transition: { type: 'spring', stiffness: 160, damping: 24, mass: 0.6 }
            }
        };

    const localImageVar = prefersReduced
        ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.1 } } }
        : {
            hidden: { scale: 1.02, opacity: 0.9 },
            show: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } }
        };

    return (
        <motion.article
            className="h-full overflow-hidden rounded-xl border border-[#0D1318]/10 bg-white sm:rounded-2xl"
            variants={localCardVar}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3, margin: '0px 0px -12% 0px' }}
        >
            <div className="grid h-full grid-cols-1 lg:grid-cols-[2fr_1fr]">
                {/* Content */}
                <motion.div className="flex h-full flex-col p-4 bg-[#0D1318] sm:p-5 md:p-6" variants={contentVar}>
                    <motion.div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-3 md:mb-6" variants={localTextVar}>
                        <img src={icon} alt="" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#F6F6F4] sm:text-[12px] md:text-[13px] lg:text-[14px]">
                            {label}
                        </span>
                    </motion.div>
                    <div className="mt-auto">
                    <motion.h3 variants={localTextVar} className="text-2xl leading-[1.1] text-[#F6F6F4] sm:text-3xl md:text-4xl">
                        {title}
                    </motion.h3>
                    <motion.p variants={localTextVar} className="mt-3 max-w-2xl text-[14px] leading-6 text-[#F6F6F4] sm:mt-4 sm:text-[15px] sm:leading-7 md:text-[16px]">
                        {body}
                    </motion.p>
                    </div>
                    {/* Bottom CTA section anchored */}
                    <div className="">
                        <motion.div className="mt-4 border-t border-[#F6F6F4] origin-left sm:mt-5 md:mt-6" variants={dividerVar} />
                        <motion.div className="mt-3 sm:mt-4 md:mt-5" variants={localTextVar}>
                            <motion.button
                                className="inline-flex items-center justify-between gap-2 rounded-md bg-[#F6F6F4] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0D1318] transition hover:bg-[#F6F6F4]/90 sm:px-5 sm:py-2.5 sm:text-[11px] md:px-6 md:py-3 md:text-[12px] lg:px-7 lg:py-3.5"
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Learn How</span>
                                <img src={doubleArrow} alt="" />
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden sm:h-52 md:h-56 lg:h-full lg:rounded-r-2xl">
                    <motion.img
                        src={image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        variants={localImageVar}
                    />
                </div>
            </div>
        </motion.article>
    );
};

const ContractorServices = () => {
    return (
        <motion.section className="w-full" variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <div className="mx-auto max-w-[100rem] px-4 sm:px-6  ">
                <motion.div className="grid grid-cols-1 items-stretch gap-4 py-8 sm:gap-6 sm:py-10 md:grid-cols-2 md:gap-6 md:py-12 lg:gap-8 lg:py-14" variants={listVar} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                    {items.map((it) => (
                        <Card key={it.label} {...it} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ContractorServices;