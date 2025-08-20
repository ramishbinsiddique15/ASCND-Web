import React from 'react';
import banner from '../../assets/img/banner.jpg';
import logo from '../../assets/icons/logo.png';
import request from '../../assets/icons/request.png';
import apply from '../../assets/icons/apply.png';
import doubleArrow from "../../assets/icons/double-arrow.png";
import { FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Motion-enabled Link
const MotionLink = motion(Link);

// Animation variants
const heroContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.12 }
  }
};

const lineItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const bottomBar = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.6 } }
};

const buttonItem = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } }
};

const socialItem = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } }
};

const Banner = () => {
  return (
    <section className="fixed inset-0 w-full overflow-hidden text-white">
      {/* Background image */}
      <motion.img
        src={banner}
        alt="ASCND background"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

    {/* [#0D1318] inset overlay */}
    <motion.div
      className="absolute inset-0 bg-[#0D1318]/30 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
    />
      {/* Left-aligned headline with logo above */}
      <motion.div className="absolute top-1/2 -translate-y-1/2 px-4 text-left" variants={heroContainer} initial="hidden" animate="visible">
        <motion.div className="mb-4" variants={lineItem}>
          <img src={logo} alt="ASCND Logo" className='invert-100' style={{ height: '50px' }} />
        </motion.div>
        <h1 className="max-w-[60rem] text-[38px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[54px] lg:text-[76px]">
          <motion.span className="block" variants={lineItem}>Advanced Strategies</motion.span>
          <motion.span className="block" variants={lineItem}>in Construction</motion.span>
          <motion.span className="block" variants={lineItem}>&amp; National Distribution</motion.span>
        </h1>
      </motion.div>

      {/* Bottom navigation buttons */}
      <motion.div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-60 border-t pt-5 border-t-white" variants={bottomBar} initial="hidden" animate="visible">
  {/* Left Side: Buttons */}
  <motion.div className="flex flex-1 flex-wrap items-center gap-3 md:gap-4" variants={heroContainer}>
      {["I'M A HOMEOWNER", "SECURE YOUR BUSINESS", "ABOUT US", "PRODUCTS & QUOTES", "APPLY"].map((label, index) => {
      if (label === "I'M A HOMEOWNER") {
        return (
        <MotionLink to="/home-owner" role="button" variants={buttonItem}
            key={label}
            className="group flex flex-1 min-w-0 items-center justify-between gap-3 rounded-lg border-2 border-white/80 bg-transparent px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 sm:px-4 sm:py-2 sm:text-[11px] md:px-5 md:py-3 md:text-[12px] lg:px-6 lg:py-4 lg:text-[13px] h-12"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="truncate">{label.substring(0, 6) + '...'}</span>
            <img src={doubleArrow} alt="" />
        </MotionLink>
        );
      } else if (label === "SECURE YOUR BUSINESS") {
        return (
        <MotionLink to="/business" role="button" variants={buttonItem}
            key={label}
            className="group flex flex-1 min-w-0 items-center justify-between gap-3 rounded-lg border-2 border-white/80 bg-transparent px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 sm:px-4 sm:py-2 sm:text-[11px] md:px-5 md:py-3 md:text-[12px] lg:px-6 lg:py-4 lg:text-[13px] h-12"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="truncate">{label.substring(0, 6) + '...'}</span>
            <img src={doubleArrow} alt="" />
        </MotionLink>
        );
      } else if (label === "ABOUT US") {
        return (
        <MotionLink to="/about" role="button" variants={buttonItem}
            key={label}
            className="group flex flex-1 min-w-0 items-center justify-center gap-3 rounded-lg border-2 border-white/80 bg-transparent px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 sm:px-4 sm:py-2 sm:text-[11px] md:px-5 md:py-3 md:text-[12px] lg:px-6 lg:py-4 lg:text-[13px] h-12"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="truncate">{label}</span>
        </MotionLink>
        );
      } else if (label === "PRODUCTS & QUOTES") {
        return (
        <MotionLink to="/request-quote" role="button" variants={buttonItem}
            key={label}
            className="group flex flex-1 min-w-0 items-center justify-between gap-3 rounded-lg border-2 border-white/80 bg-transparent px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 sm:px-4 sm:py-2 sm:text-[11px] md:px-5 md:py-3 md:text-[12px] lg:px-6 lg:py-4 lg:text-[13px] h-12"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="truncate">{label.substring(0, 6) + '...'}</span>
            <img src={request} alt="Request" style={{ height: '20px' }} />
        </MotionLink>
        );
      } else if (label === "APPLY") {
        return (
        <MotionLink to="/business-apply" role="button" variants={buttonItem}
            key={label}
            className="group flex flex-1 min-w-0 items-center justify-between gap-3 rounded-lg border-2 border-white/80 bg-transparent px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 sm:px-4 sm:py-2 sm:text-[11px] md:px-5 md:py-3 md:text-[12px] lg:px-6 lg:py-4 lg:text-[13px] h-12"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="truncate">{label}</span>
            <img src={apply} alt="Apply" style={{ height: '20px' }} />
        </MotionLink>
        );
      }
      return null;
    })}
  </motion.div>

  {/* Right Side: Social Icons */}
  <motion.div className="flex items-center gap-3 md:gap-4" variants={heroContainer}>
    {[
      { Icon: FaDiscord, label: "Discord" },
      { Icon: FaInstagram, label: "Instagram" },
      { Icon: FaLinkedin, label: "LinkedIn" },
    ].map(({ Icon, label }) => (
      <motion.a
        key={label}
        href="#"
        aria-label={label}
        className="grid size-12 place-items-center rounded-full bg-white text-gray-900 shadow-md transition-transform duration-200 hover:scale-105 "
        variants={socialItem}
        whileHover={{ scale: 1.08, rotate: 2 }}
        whileTap={{ scale: 0.96 }}
      >
        <Icon className="size-4 sm:size-5 md:size-6" />
      </motion.a>
    ))}
  </motion.div>
</motion.div>

    </section>
  )
};

export default Banner;