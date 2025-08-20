import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import logo from '../../assets/icons/logo.png';
import request from '../../assets/icons/request_white.png';
import apply from '../../assets/icons/apply_white.png';
import arrow from "../../assets/icons/arrow.png"
import { motion } from 'framer-motion';

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

const baseBtn =
  'group flex min-w-0 items-center justify-between gap-2 rounded-md border-2 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] transition-all duration-200 h-9 sm:px-3 sm:py-2 sm:text-[10px] sm:h-10 md:px-4 md:py-2 md:text-[11px] md:h-11 lg:px-5 lg:py-3 lg:text-[12px] lg:h-12';
const outlineBtn = `${baseBtn} border-[#0D1318]/80 bg-transparent text-[#0D1318] hover:bg-[#0D1318]/[0.04]`;
const darkBtn = `${baseBtn} border-transparent bg-[#0D1318] text-white hover:bg-[#0D1318]/90`;
const orangeBtn = `${baseBtn} border-transparent bg-[#FF4C16] text-white hover:bg-[#e74312]`;

const Navbar = () => {
  return (
    <header className="w-full">

      {/* Main bar */}
      <motion.nav className="w-full bg-[[#0D1318]6f6f6] px-3 py-2 text-[#0D1318] md:px-6 md:py-3" variants={navReveal} initial="hidden" animate="visible">
        <motion.div className="flex items-center gap-2 md:gap-4" variants={rowStagger} initial="hidden" animate="visible">
          {/* Logo */}
          <motion.div className="flex items-center gap-2 pr-2 md:gap-3 md:pr-4" variants={logoItem}>
            <img src={logo} alt="ASCND" className="h-6 w-auto md:h-7" />
          </motion.div>
          {/* Flexible spacer to push buttons away from logo */}
          <div className="flex-1" />

          {/* Buttons row */}
          <motion.div className="flex min-w-0 flex-nowrap items-center gap-1.5 whitespace-nowrap sm:gap-2 lg:gap-4" variants={rowStagger}>
            <MotionLink to="/home-owner" className={outlineBtn + ' basis-0 grow min-w-[92px] max-w-[260px]'} variants={btnItem} whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <span className="truncate">
                <span className="hidden xl:inline">ASCND YOUR HOME</span>
                <span className="hidden lg:inline xl:hidden">YOUR HOME</span>
                <span className="lg:hidden">HOME</span>
              </span>
              <img src={arrow} alt="" />
            </MotionLink>
            <MotionLink to="/business" className={outlineBtn + ' basis-0 grow min-w-[92px] max-w-[260px]'} variants={btnItem} whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <span className="truncate">
                <span className="hidden xl:inline">ASCND YOUR BUSINESS</span>
                <span className="hidden lg:inline xl:hidden">YOUR BUSINESS</span>
                <span className="lg:hidden">BUSINESS</span>
              </span>
              <img src={arrow} alt="" />
            </MotionLink>
            <MotionLink to="/about" className={outlineBtn + ' justify-center basis-0 grow min-w-[92px] max-w-[220px]'} variants={btnItem} whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <span className="truncate">ABOUT US</span>
            </MotionLink>
            <MotionLink to="/request-quote" className={darkBtn + ' basis-0 grow min-w-[92px] max-w-[280px]'} variants={btnItem} whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <span className="truncate">
                <span className="hidden xl:inline">REQUEST A QUOTE</span>
                <span className="lg:hidden xl:hidden">QUOTE</span>
                <span className="hidden lg:inline xl:hidden">QUOTE</span>
              </span>
              <img src={request} alt="Request" className="h-3 w-auto sm:h-3.5 md:h-4" />
            </MotionLink>
            <MotionLink to="/business-apply" className={orangeBtn + ' basis-0 grow min-w-[92px] max-w-[200px]'} variants={btnItem} whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <span className="truncate">APPLY</span>
              <img src={apply} alt="Apply" className="h-3 w-auto sm:h-3.5 md:h-4" />
            </MotionLink>
          </motion.div>

          {/* Social icons */}
          <motion.div className="ml-2 flex items-center gap-3 text-[#111] sm:ml-3 md:ml-4 md:gap-4" variants={rowStagger}>
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
        </motion.div>
      </motion.nav>
    </header>
  );
};

export default Navbar;