import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaDiscord, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/icons/logo.png';
import request from '../../assets/icons/request_white.png';
import apply from '../../assets/icons/apply_white.png';
import arrow from "../../assets/icons/arrow.png"
import { motion, AnimatePresence } from 'framer-motion';

// Motion-enabled Link for interactive button animations
const MotionLink = motion(Link);

// Animation variants
const navReveal = {
  hidden: { y: -16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const rowStagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { delayChildren: 0.12, staggerChildren: 0.08 } }
};

const logoItem = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
};

const btnItem = {
  hidden: { y: -6, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } }
};

const socialItem = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.35 } }
};

const mobileMenu = {
  hidden: { 
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 }
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.1 }
  }
};

const mobileMenuItem = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3 } }
};

const baseBtn =
  'group flex items-center justify-between gap-2 rounded-md border-2 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] transition-all duration-200 h-9 whitespace-nowrap sm:px-3 sm:py-2 sm:text-[10px] sm:h-10 md:px-4 md:py-2 md:text-[11px] md:h-11 lg:px-5 lg:py-3 lg:text-[12px] lg:h-12';
const outlineBtn = `${baseBtn} border-[#0D1318]/80 bg-transparent text-[#0D1318] hover:bg-[#0D1318]/[0.04]`;
const darkBtn = `${baseBtn} border-transparent bg-[#0D1318] text-white hover:bg-[#0D1318]/90`;
const orangeBtn = `${baseBtn} border-transparent bg-[#FF4C16] text-white hover:bg-[#e74312]`;

// Mobile menu button styles
const mobileMenuBtn = 'w-full flex items-center justify-between gap-3 rounded-md border-2 px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-200';
const mobileOutlineBtn = `${mobileMenuBtn} border-[#0D1318]/20 bg-transparent text-[#0D1318] hover:bg-[#0D1318]/5`;
const mobileDarkBtn = `${mobileMenuBtn} border-transparent bg-[#0D1318] text-white hover:bg-[#0D1318]/90`;
const mobileOrangeBtn = `${mobileMenuBtn} border-transparent bg-[#FF4C16] text-white hover:bg-[#e74312]`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full relative">
      {/* Main bar */}
      <motion.nav className="w-full bg-white px-4 py-2 text-[#0D1318] sm:px-6  md:py-3  relative z-50" variants={navReveal} initial="hidden" animate="visible">
        <motion.div className="flex items-center gap-2 md:gap-4" variants={rowStagger} initial="hidden" animate="visible">
          {/* Logo */}
          <motion.div className="flex items-center gap-2 pr-2 md:gap-3 md:pr-4" variants={logoItem}>
            <img src={logo} alt="ASCND" className="h-6 w-auto md:h-7" />
          </motion.div>
          
          {/* Mobile menu button */}
          <div className="flex-1 lg:hidden" />
          <motion.button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-[#0D1318] hover:bg-[#0D1318]/5 rounded-md transition-colors duration-200"
            variants={btnItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <FaTimes className="size-5" /> : <FaBars className="size-5" />}
          </motion.button>

          {/* Desktop buttons and social - hidden on mobile */}
          <div className="hidden lg:contents">
            {/* Flexible spacer to push buttons away from logo */}
            <div className="flex-1" />

            {/* Buttons row - Now with content-based sizing */}
            <motion.div className="flex items-center gap-1 xl:gap-2 2xl:gap-3" variants={rowStagger}>
              <MotionLink to="/home-owner" className={outlineBtn} variants={btnItem} whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <span>
                  <span className="hidden 2xl:inline">ASCND YOUR HOME</span>
                  <span className="hidden xl:inline 2xl:hidden">YOUR HOME</span>
                  <span className="xl:hidden">HOME</span>
                </span>
                <img src={arrow} alt="" className="flex-shrink-0" />
              </MotionLink>
              
              <MotionLink to="/business" className={outlineBtn} variants={btnItem} whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <span>
                  <span className="hidden 2xl:inline">ASCND YOUR BUSINESS</span>
                  <span className="hidden xl:inline 2xl:hidden">YOUR BUSINESS</span>
                  <span className="xl:hidden">BUSINESS</span>
                </span>
                <img src={arrow} alt="" className="flex-shrink-0" />
              </MotionLink>
              
              <MotionLink to="/about" className={outlineBtn + ' justify-center'} variants={btnItem} whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <span>ABOUT US</span>
              </MotionLink>
              
              <MotionLink to="/request-quote" className={darkBtn} variants={btnItem} whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <span>
                  <span className="hidden 2xl:inline">REQUEST A QUOTE</span>
                  <span className="hidden xl:inline 2xl:hidden">REQUEST QUOTE</span>
                  <span className="xl:hidden">QUOTE</span>
                </span>
                <img src={request} alt="Request" className="h-3 w-auto sm:h-3.5 md:h-4 flex-shrink-0" />
              </MotionLink>
              
              <MotionLink to="/business-apply" className={orangeBtn} variants={btnItem} whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <span>APPLY</span>
                <img src={apply} alt="Apply" className="h-3 w-auto sm:h-3.5 md:h-4 flex-shrink-0" />
              </MotionLink>
            </motion.div>

            {/* Social icons */}
            <motion.div className="ml-2 flex items-center gap-3 text-[#111] sm:ml-3 md:ml-4 md:gap-4 flex-shrink-0" variants={rowStagger}>
              <motion.span variants={socialItem} whileHover={{ scale: 1.15, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                <FaLinkedin className="size-4 sm:size-5 md:size-6" />
              </motion.span>
              <motion.span variants={socialItem} whileHover={{ scale: 1.15, rotate: -2 }} whileTap={{ scale: 0.95 }}>
                <FaInstagram className="size-4 sm:size-5 md:size-6" />
              </motion.span>
              <motion.span variants={socialItem} whileHover={{ scale: 1.15, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                <FaDiscord className="size-4 sm:size-5 md:size-6" />
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 overflow-y-auto"
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-[#0D1318] hover:bg-[#0D1318]/5 rounded-md transition-colors duration-200"
                >
                  <FaTimes className="size-5" />
                </button>
              </div>

              {/* Logo */}
              <motion.div className="flex items-center gap-3 mb-8" variants={mobileMenuItem}>
                <img src={logo} alt="ASCND" className="h-8 w-auto" />
              </motion.div>

              {/* Mobile menu items */}
              <motion.div className="space-y-4" variants={rowStagger}>
                <motion.div variants={mobileMenuItem}>
                  <MotionLink 
                    to="/home-owner" 
                    className={mobileOutlineBtn}
                    onClick={toggleMobileMenu}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>ASCND YOUR HOME</span>
                    <img src={arrow} alt="" className="h-4" />
                  </MotionLink>
                </motion.div>

                <motion.div variants={mobileMenuItem}>
                  <MotionLink 
                    to="/business" 
                    className={mobileOutlineBtn}
                    onClick={toggleMobileMenu}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>ASCND YOUR BUSINESS</span>
                    <img src={arrow} alt="" className="h-4" />
                  </MotionLink>
                </motion.div>

                <motion.div variants={mobileMenuItem}>
                  <MotionLink 
                    to="/about" 
                    className={mobileOutlineBtn + ' justify-center'}
                    onClick={toggleMobileMenu}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>ABOUT US</span>
                  </MotionLink>
                </motion.div>

                <motion.div variants={mobileMenuItem}>
                  <MotionLink 
                    to="/request-quote" 
                    className={mobileDarkBtn}
                    onClick={toggleMobileMenu}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>REQUEST A QUOTE</span>
                    <img src={request} alt="Request" className="h-5" />
                  </MotionLink>
                </motion.div>

                <motion.div variants={mobileMenuItem}>
                  <MotionLink 
                    to="/business-apply" 
                    className={mobileOrangeBtn}
                    onClick={toggleMobileMenu}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>APPLY</span>
                    <img src={apply} alt="Apply" className="h-5" />
                  </MotionLink>
                </motion.div>
              </motion.div>

              {/* Social icons */}
              <motion.div className="mt-12 pt-6 border-t border-[#0D1318]/10" variants={mobileMenuItem}>
                <p className="text-sm font-semibold text-[#0D1318]/60 uppercase tracking-wider mb-4">Follow Us</p>
                <div className="flex items-center gap-6">
                  <motion.a
                    href="#"
                    className="text-[#0D1318] hover:text-[#FF4C16] transition-colors duration-200"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin className="size-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-[#0D1318] hover:text-[#FF4C16] transition-colors duration-200"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaInstagram className="size-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-[#0D1318] hover:text-[#FF4C16] transition-colors duration-200"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaDiscord className="size-6" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;