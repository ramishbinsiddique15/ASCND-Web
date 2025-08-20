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
      <motion.div className="absolute top-1/2 -translate-y-1/2 px-4 text-left sm:px-6 lg:px-8" variants={heroContainer} initial="hidden" animate="visible">
        <motion.div className="mb-3 sm:mb-4" variants={lineItem}>
          <img src={logo} alt="ASCND Logo" className="invert-100 h-[35px] sm:h-[42px] lg:h-[50px]" />
        </motion.div>
        <h1 className="max-w-[60rem] text-[28px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[38px] md:text-[48px] lg:text-[76px]">
          <motion.span className="block" variants={lineItem}>Advanced Strategies</motion.span>
          <motion.span className="block" variants={lineItem}>in Construction</motion.span>
          <motion.span className="block" variants={lineItem}>&amp; National Distribution</motion.span>
        </h1>
      </motion.div>

      {/* Bottom navigation buttons */}
      <motion.div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6" variants={bottomBar} initial="hidden" animate="visible">
        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Buttons Row 1 */}
          <div className="flex items-center gap-2 border-t pt-4 border-t-white">
            <MotionLink to="/home-owner" role="button" variants={buttonItem}
              className="group flex flex-1 items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>HOMEOWNER</span>
              <img src={doubleArrow} alt="" className="h-3" />
            </MotionLink>
            <MotionLink to="/business" role="button" variants={buttonItem}
              className="group flex flex-1 items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>BUSINESS</span>
              <img src={doubleArrow} alt="" className="h-3" />
            </MotionLink>
          </div>
          
          {/* Buttons Row 2 */}
          <div className="flex items-center gap-2">
            <MotionLink to="/about" role="button" variants={buttonItem}
              className="group flex flex-1 items-center justify-center rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>ABOUT US</span>
            </MotionLink>
            <MotionLink to="/request-quote" role="button" variants={buttonItem}
              className="group flex flex-1 items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>QUOTES</span>
              <img src={request} alt="Request" className="h-4" />
            </MotionLink>
            <MotionLink to="/business-apply" role="button" variants={buttonItem}
              className="group flex flex-1 items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>APPLY</span>
              <img src={apply} alt="Apply" className="h-4" />
            </MotionLink>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
            {[
              { Icon: FaDiscord, label: "Discord" },
              { Icon: FaInstagram, label: "Instagram" },
              { Icon: FaLinkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full bg-white text-gray-900 shadow-md transition-transform duration-200 hover:scale-105"
                variants={socialItem}
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Icon className="size-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Tablet Layout - Two Rows */}
        <div className="hidden md:flex lg:hidden flex-col gap-4 border-t pt-4 border-t-white">
          {/* First Row - Main buttons */}
          <div className="flex items-center gap-2">
            <MotionLink to="/home-owner" role="button" variants={buttonItem}
              className="group flex flex-1 items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>HOMEOWNER</span>
              <img src={doubleArrow} alt="" className="h-4" />
            </MotionLink>
            <MotionLink to="/business" role="button" variants={buttonItem}
              className="group flex flex-1 items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>BUSINESS</span>
              <img src={doubleArrow} alt="" className="h-4" />
            </MotionLink>
          </div>
          
          {/* Second Row - Secondary buttons and social */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1">
              <MotionLink to="/about" role="button" variants={buttonItem}
                className="group flex items-center justify-center rounded-lg border-2 border-white/80 bg-transparent px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>ABOUT US</span>
              </MotionLink>
              <MotionLink to="/request-quote" role="button" variants={buttonItem}
                className="group flex items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>QUOTES</span>
                <img src={request} alt="Request" className="h-4" />
              </MotionLink>
              <MotionLink to="/business-apply" role="button" variants={buttonItem}
                className="group flex items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>APPLY</span>
                <img src={apply} alt="Apply" className="h-4" />
              </MotionLink>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: FaDiscord, label: "Discord" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaLinkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full bg-white text-gray-900 shadow-md transition-transform duration-200 hover:scale-105"
                  variants={socialItem}
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon className="size-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Single Row */}
        <div className="hidden lg:flex items-center justify-between gap-60 border-t pt-5 border-t-white">
          {/* Left Side: Buttons */}
          <motion.div className="flex flex-1 flex-wrap items-center gap-4" variants={heroContainer}>
            {["I'M A HOMEOWNER", "SECURE YOUR BUSINESS", "ABOUT US", "PRODUCTS & QUOTES", "APPLY"].map((label, index) => {
              if (label === "I'M A HOMEOWNER") {
                return (
                  <MotionLink to="/home-owner" role="button" variants={buttonItem}
                    key={label}
                    className="group flex flex-1 min-w-0 items-center justify-between gap-3 rounded-lg border-2 border-white/80 bg-transparent px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 h-12"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{label}</span>
                    <img src={doubleArrow} alt="" />
                  </MotionLink>
                );
              } else if (label === "SECURE YOUR BUSINESS") {
                return (
                  <MotionLink to="/business" role="button" variants={buttonItem}
                    key={label}
                    className="group flex flex-1 min-w-0 items-center justify-between gap-3 rounded-lg border-2 border-white/80 bg-transparent px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 h-12"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{label}</span>
                    <img src={doubleArrow} alt="" />
                  </MotionLink>
                );
              } else if (label === "ABOUT US") {
                return (
                  <MotionLink to="/about" role="button" variants={buttonItem}
                    key={label}
                    className="group flex flex-1 min-w-0 items-center justify-center gap-3 rounded-lg border-2 border-white/80 bg-transparent px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 h-12"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{label}</span>
                  </MotionLink>
                );
              } else if (label === "PRODUCTS & QUOTES") {
                return (
                  <MotionLink to="/request-quote" role="button" variants={buttonItem}
                    key={label}
                    className="group flex flex-1 min-w-0 items-center justify-between gap-3 rounded-lg border-2 border-white/80 bg-transparent px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 h-12"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{label}</span>
                    <img src={request} alt="Request" style={{ height: '20px' }} />
                  </MotionLink>
                );
              } else if (label === "APPLY") {
                return (
                  <MotionLink to="/business-apply" role="button" variants={buttonItem}
                    key={label}
                    className="group flex flex-1 min-w-0 items-center justify-between gap-3 rounded-lg border-2 border-white/80 bg-transparent px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 h-12"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{label}</span>
                    <img src={apply} alt="Apply" style={{ height: '20px' }} />
                  </MotionLink>
                );
              }
              return null;
            })}
          </motion.div>

          {/* Right Side: Social Icons */}
          <motion.div className="flex items-center gap-4" variants={heroContainer}>
            {[
              { Icon: FaDiscord, label: "Discord" },
              { Icon: FaInstagram, label: "Instagram" },
              { Icon: FaLinkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-12 place-items-center rounded-full bg-white text-gray-900 shadow-md transition-transform duration-200 hover:scale-105"
                variants={socialItem}
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Icon className="size-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
};

export default Banner;