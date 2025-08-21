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
    title: 'Power your home and your future.',
    body:
      'We offer smart, high-quality solar solutions designed for performance, savings, and a cleaner home. Whether you’re homeowner or care options, ASCND gives you full transparency and top-tier systems.',
    image: power,
  },
  {
    icon: epoxy,
    label: 'EPOXY FLOORING',
    title: 'Garage goals, delivered.',
    body:
      'We offer seamless, high-gloss epoxy flooring designed for durability, style, and easy upkeep. Whether it’s for a garage upgrade or a standout interior, our floors give you lasting quality.',
    image: garage,
  },
  {
    icon: roofing,
    label: 'ROOFING',
    title: 'Protect what matters most.',
    body:
      'We deliver premium roofing replacements with licensed contractors across the US. Every install comes with strong warranties, clean tear-offs, and great timelines.',
    image: protect,
  },
  {
    icon: lighting,
    label: 'PERMANENT LIGHTING',
    title: 'Lighting that lasts all year.',
    body:
      'From holiday-ready displays to architectural lighting, ASCND’s permanent lighting offers programmable control, clean install, and energy efficiency.',
    image: light,
  },
  {
    icon: hvac,
    label: 'HVAC',
    title: 'Comfort, efficiency, and control.',
    body:
      'From full system replacements to upgrades and add-ons, our HVAC experts make sure it’s clean, cool, and cost-effective—year round.',
    image: comfort,
  },
  {
    icon: windows,
    label: 'WINDOWS & BLINDS',
    title: 'Privacy, style, and sunlight on your terms.',
    body:
      'We install modern window treatments with motorized options and sleek designs that are energy-efficient, easy to use, and provide the right cover—when you need it.',
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
      className="h-full overflow-hidden rounded-md border border-[#0D1318]/10 bg-white"
      variants={localCardVar}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3, margin: '0px 0px -12% 0px' }}
    >
      <div className="grid h-full grid-cols-1 lg:grid-cols-[2fr_1fr]">
        {/* Content */}
        <motion.div className="flex h-full flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10" variants={contentVar}>
          {/* Top section - Label */}
          <motion.div className="flex items-center gap-2 sm:gap-3 mb-32" variants={localTextVar}>
            <img src={icon} alt="" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0b0c0e] sm:text-[13px] md:text-[14px]">
              {label}
            </span>
          </motion.div>

          {/* Middle section - Title (bottom-aligned across cards) */}
          <div className="flex flex-col justify-end w-fit">
            <motion.h3 variants={localTextVar} className="leading-[0.8] text-[#0b0c0e] text-2xl sm:text-3xl md:text-4xl">
              {title}
            </motion.h3>
          </div>

          {/* Bottom section - Description, divider, and CTA */}
          <div className="space-y-4 sm:space-y-6">
            <motion.p variants={localTextVar} className="max-w-2xl text-[14px] leading-6 text-[#0D1318]/70 sm:text-[15px] sm:leading-7 md:text-[16px] pt-5">
              {body}
            </motion.p>
            
            <motion.div className="border-t border-[#0D1318]/15 origin-left" variants={dividerVar} />
            
            <motion.div variants={localTextVar}>
              <motion.button
                className="inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#0D1318]/90 sm:px-6 sm:py-3 sm:text-[11px] md:px-7 md:py-3.5 md:text-[12px]"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Learn How</span>
                <img src={doubleArrow} alt="" className="h-3 sm:h-4" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        {/* Image */}
        <div className="relative h-48 overflow-hidden sm:h-52 lg:h-full lg:rounded-r-2xl">
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

const Services = () => {
  return (
    <motion.section className="w-full" variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6  ">
        <motion.div className="grid grid-cols-1 items-stretch gap-4 py-8 sm:gap-6 sm:py-10 lg:grid-cols-2 lg:gap-8" variants={listVar} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {items.map((it) => (
            <Card key={it.label} {...it} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;