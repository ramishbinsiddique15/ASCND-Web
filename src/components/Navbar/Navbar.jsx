"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaInstagram, FaLinkedin, FaDiscord, FaBars, FaTimes } from "react-icons/fa"
import logo from "../../assets/icons/logo.png"
import request from "../../assets/icons/request_white.png"
import apply from "../../assets/icons/apply_white.png"
import arrow from "../../assets/icons/arrow.png"
import { motion, AnimatePresence } from "framer-motion"

// Motion-enabled Link for interactive button animations
const MotionLink = motion(Link)

// Animation variants
const navReveal = {
  hidden: { y: -32, opacity: 0, rotateX: -15 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const rowStagger = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.12,
    },
  },
}

const logoItem = {
  hidden: { x: -30, opacity: 0, scale: 0.8, rotateY: -20 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
}

const btnItem = {
  hidden: { y: -20, opacity: 0, scale: 0.9, rotateX: 15 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      stiffness: 150,
      damping: 10,
    },
  },
}

const socialItem = {
  hidden: { scale: 0, opacity: 0, rotate: -180 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.1,
    },
  },
}

const mobileMenu = {
  hidden: {
    opacity: 0,
    x: "100%",
    scale: 0.95,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
      delayChildren: 0.1,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const mobileMenuItem = {
  hidden: { x: 30, opacity: 0, scale: 0.9 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
}

const baseBtn =
  "group flex items-center justify-between gap-2 rounded-md border-2 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] transition-all duration-200 h-9 whitespace-nowrap sm:px-3 sm:py-2 sm:text-[10px] sm:h-10 md:px-4 md:py-2 md:text-[11px] md:h-11 lg:px-5 lg:py-3 lg:text-[12px] lg:h-12"
const outlineBtn = `${baseBtn} border-[#0D1318] bg-transparent text-[#0D1318] hover:bg-[#0D1318]/[0.04]`
const darkBtn = `${baseBtn} border-transparent bg-[#0D1318] text-white hover:bg-[#0D1318]/90`
const orangeBtn = `${baseBtn} border-transparent bg-[#FF4C16] text-white hover:bg-[#e74312]`

// Mobile menu button styles
const mobileMenuBtn =
  "w-full flex items-center justify-between gap-3 rounded-md border-2 px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-200"
const mobileOutlineBtn = `${mobileMenuBtn} border-[#0D1318]/20 bg-transparent text-[#0D1318] hover:bg-[#0D1318]/5`
const mobileDarkBtn = `${mobileMenuBtn} border-transparent bg-[#0D1318] text-white hover:bg-[#0D1318]/90`
const mobileOrangeBtn = `${mobileMenuBtn} border-transparent bg-[#FF4C16] text-white hover:bg-[#e74312]`

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="w-full relative">
      {/* Main bar */}
      <motion.nav
        className="w-full bg-white px-4 py-2 text-[#0D1318] sm:px-6 md:py-3 relative z-50"
        variants={navReveal}
        initial="hidden"
        animate="visible"
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="flex items-center gap-2 md:gap-4"
          variants={rowStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 pr-2 md:gap-3 md:pr-4"
            variants={logoItem}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
          >
            <img src={logo || "/placeholder.svg"} alt="ASCND" className="h-6 w-auto md:h-7" />
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex-1 lg:hidden" />
          <motion.button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-[#0D1318] hover:bg-[#0D1318]/5 rounded-md transition-colors duration-200"
            variants={btnItem}
            whileHover={{
              scale: 1.1,
              rotate: 90,
              backgroundColor: "rgba(13, 19, 24, 0.1)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9, rotate: 180 }}
          >
            {isMobileMenuOpen ? <FaTimes className="size-5" /> : <FaBars className="size-5" />}
          </motion.button>

          {/* Desktop buttons and social - hidden on mobile */}
          <div className="hidden lg:contents">
            {/* Flexible spacer to push buttons away from logo */}
            <div className="flex-1" />

            {/* Buttons row - Now with enhanced interactive animations */}
            <motion.div className="flex items-center gap-1 xl:gap-2 2xl:gap-3" variants={rowStagger}>
              <MotionLink
                to="/home-owner"
                className={outlineBtn}
                variants={btnItem}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  rotateX: -5,
                  boxShadow: "0 10px 25px rgba(13, 19, 24, 0.15)",
                  borderColor: "#FF4C16",
                  transition: { duration: 0.3, type: "spring", stiffness: 300 },
                }}
                whileTap={{
                  scale: 0.95,
                  y: 0,
                  transition: { duration: 0.1 },
                }}
              >
                <span>
                  <span className="hidden 2xl:inline">ASCND YOUR HOME</span>
                  <span className="hidden xl:inline 2xl:hidden">YOUR HOME</span>
                  <span className="xl:hidden">HOME</span>
                </span>
                <motion.img src={arrow} alt="" className="flex-shrink-0" whileHover={{ x: 3, rotate: 5 }} />
              </MotionLink>

              <MotionLink
                to="/business"
                className={outlineBtn}
                variants={btnItem}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  rotateX: -5,
                  boxShadow: "0 10px 25px rgba(13, 19, 24, 0.15)",
                  borderColor: "#FF4C16",
                  transition: { duration: 0.3, type: "spring", stiffness: 300 },
                }}
                whileTap={{
                  scale: 0.95,
                  y: 0,
                  transition: { duration: 0.1 },
                }}
              >
                <span>
                  <span className="hidden 2xl:inline">ASCND YOUR BUSINESS</span>
                  <span className="hidden xl:inline 2xl:hidden">YOUR BUSINESS</span>
                  <span className="xl:hidden">BUSINESS</span>
                </span>
                <motion.img src={arrow} alt="" className="flex-shrink-0" whileHover={{ x: 3, rotate: 5 }} />
              </MotionLink>

              <MotionLink
                to="/about"
                className={outlineBtn + " justify-center"}
                variants={btnItem}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  rotateX: -5,
                  boxShadow: "0 10px 25px rgba(13, 19, 24, 0.15)",
                  borderColor: "#FF4C16",
                  transition: { duration: 0.3, type: "spring", stiffness: 300 },
                }}
                whileTap={{
                  scale: 0.95,
                  y: 0,
                  transition: { duration: 0.1 },
                }}
              >
                <span>ABOUT US</span>
              </MotionLink>

              <MotionLink
                to="/request-quote"
                className={darkBtn}
                variants={btnItem}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  rotateX: -5,
                  boxShadow: "0 15px 35px rgba(13, 19, 24, 0.3)",
                  backgroundColor: "rgba(13, 19, 24, 0.95)",
                  transition: { duration: 0.3, type: "spring", stiffness: 300 },
                }}
                whileTap={{
                  scale: 0.95,
                  y: 0,
                  transition: { duration: 0.1 },
                }}
              >
                <span>
                  <span className="hidden 2xl:inline">REQUEST A QUOTE</span>
                  <span className="hidden xl:inline 2xl:hidden">REQUEST QUOTE</span>
                  <span className="xl:hidden">QUOTE</span>
                </span>
                <motion.img
                  src={request}
                  alt="Request"
                  className="h-3 w-auto sm:h-3.5 md:h-4 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                />
              </MotionLink>

              <MotionLink
                to="/business-apply"
                className={orangeBtn}
                variants={btnItem}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  rotateX: -5,
                  boxShadow: "0 15px 35px rgba(255, 76, 22, 0.4)",
                  backgroundColor: "#ff3300",
                  transition: { duration: 0.3, type: "spring", stiffness: 300 },
                }}
                whileTap={{
                  scale: 0.95,
                  y: 0,
                  transition: { duration: 0.1 },
                }}
              >
                <span>APPLY</span>
                <motion.img
                  src={apply}
                  alt="Apply"
                  className="h-3 w-auto sm:h-3.5 md:h-4 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: -10 }}
                />
              </MotionLink>
            </motion.div>

            {/* Social icons with enhanced interactive animations */}
            <motion.div
              className="ml-2 flex items-center gap-3 text-[#111] sm:ml-3 md:ml-4 md:gap-4 flex-shrink-0"
              variants={rowStagger}
            >
              <motion.span
                variants={socialItem}
                whileHover={{
                  scale: 1.3,
                  rotate: 15,
                  color: "#0077b5",
                  y: -2,
                  transition: { duration: 0.3, type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.9, rotate: -5 }}
                className="cursor-pointer"
              >
                <FaLinkedin className="size-4 sm:size-5 md:size-6" />
              </motion.span>
              <motion.span
                variants={socialItem}
                whileHover={{
                  scale: 1.3,
                  rotate: -15,
                  color: "#e4405f",
                  y: -2,
                  transition: { duration: 0.3, type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.9, rotate: 5 }}
                className="cursor-pointer"
              >
                <FaInstagram className="size-4 sm:size-5 md:size-6" />
              </motion.span>
              <motion.span
                variants={socialItem}
                whileHover={{
                  scale: 1.3,
                  rotate: 15,
                  color: "#5865f2",
                  y: -2,
                  transition: { duration: 0.3, type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.9, rotate: -5 }}
                className="cursor-pointer"
              >
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

      {/* Mobile Menu with enhanced animations */}
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
                <motion.button
                  onClick={toggleMobileMenu}
                  className="p-2 text-[#0D1318] hover:bg-[#0D1318]/5 rounded-md transition-colors duration-200"
                  whileHover={{
                    scale: 1.1,
                    rotate: 90,
                    backgroundColor: "rgba(13, 19, 24, 0.1)",
                  }}
                  whileTap={{ scale: 0.9, rotate: 180 }}
                >
                  <FaTimes className="size-5" />
                </motion.button>
              </div>

              {/* Logo */}
              <motion.div className="flex items-center gap-3 mb-8" variants={mobileMenuItem}>
                <motion.img src={logo} alt="ASCND" className="h-8 w-auto" whileHover={{ scale: 1.05, rotate: 2 }} />
              </motion.div>

              {/* Mobile menu items with enhanced interactions */}
              <motion.div className="space-y-4" variants={rowStagger}>
                <motion.div variants={mobileMenuItem}>
                  <MotionLink
                    to="/home-owner"
                    className={mobileOutlineBtn}
                    onClick={toggleMobileMenu}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                      borderColor: "#FF4C16",
                      boxShadow: "0 5px 15px rgba(13, 19, 24, 0.1)",
                    }}
                    whileTap={{ scale: 0.98, x: 4 }}
                  >
                    <span>ASCND YOUR HOME</span>
                    <motion.img src={arrow} alt="" className="h-4" whileHover={{ x: 3, rotate: 10 }} />
                  </MotionLink>
                </motion.div>

                <motion.div variants={mobileMenuItem}>
                  <MotionLink
                    to="/business"
                    className={mobileOutlineBtn}
                    onClick={toggleMobileMenu}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                      borderColor: "#FF4C16",
                      boxShadow: "0 5px 15px rgba(13, 19, 24, 0.1)",
                    }}
                    whileTap={{ scale: 0.98, x: 4 }}
                  >
                    <span>ASCND YOUR BUSINESS</span>
                    <motion.img src={arrow} alt="" className="h-4" whileHover={{ x: 3, rotate: 10 }} />
                  </MotionLink>
                </motion.div>

                <motion.div variants={mobileMenuItem}>
                  <MotionLink
                    to="/about"
                    className={mobileOutlineBtn + " justify-center"}
                    onClick={toggleMobileMenu}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                      borderColor: "#FF4C16",
                      boxShadow: "0 5px 15px rgba(13, 19, 24, 0.1)",
                    }}
                    whileTap={{ scale: 0.98, x: 4 }}
                  >
                    <span>ABOUT US</span>
                  </MotionLink>
                </motion.div>

                <motion.div variants={mobileMenuItem}>
                  <MotionLink
                    to="/request-quote"
                    className={mobileDarkBtn}
                    onClick={toggleMobileMenu}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                      backgroundColor: "rgba(13, 19, 24, 0.95)",
                      boxShadow: "0 8px 25px rgba(13, 19, 24, 0.2)",
                    }}
                    whileTap={{ scale: 0.98, x: 4 }}
                  >
                    <span>REQUEST A QUOTE</span>
                    <motion.img src={request} alt="Request" className="h-5" whileHover={{ scale: 1.1, rotate: 15 }} />
                  </MotionLink>
                </motion.div>

                <motion.div variants={mobileMenuItem}>
                  <MotionLink
                    to="/business-apply"
                    className={mobileOrangeBtn}
                    onClick={toggleMobileMenu}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                      backgroundColor: "#ff3300",
                      boxShadow: "0 8px 25px rgba(255, 76, 22, 0.3)",
                    }}
                    whileTap={{ scale: 0.98, x: 4 }}
                  >
                    <span>APPLY</span>
                    <motion.img src={apply} alt="Apply" className="h-5" whileHover={{ scale: 1.1, rotate: -15 }} />
                  </MotionLink>
                </motion.div>
              </motion.div>

              {/* Social icons with enhanced mobile interactions */}
              <motion.div className="mt-12 pt-6 border-t border-[#0D1318]/10" variants={mobileMenuItem}>
                <p className="text-sm font-semibold text-[#0D1318]/60 uppercase tracking-wider mb-4">Follow Us</p>
                <div className="flex items-center gap-6">
                  <motion.a
                    href="#"
                    className="text-[#0D1318] hover:text-[#FF4C16] transition-colors duration-200"
                    whileHover={{
                      scale: 1.4,
                      rotate: 15,
                      color: "#0077b5",
                      y: -3,
                    }}
                    whileTap={{ scale: 0.8, rotate: -10 }}
                  >
                    <FaLinkedin className="size-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-[#0D1318] hover:text-[#FF4C16] transition-colors duration-200"
                    whileHover={{
                      scale: 1.4,
                      rotate: -15,
                      color: "#e4405f",
                      y: -3,
                    }}
                    whileTap={{ scale: 0.8, rotate: 10 }}
                  >
                    <FaInstagram className="size-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-[#0D1318] hover:text-[#FF4C16] transition-colors duration-200"
                    whileHover={{
                      scale: 1.4,
                      rotate: 15,
                      color: "#5865f2",
                      y: -3,
                    }}
                    whileTap={{ scale: 0.8, rotate: -10 }}
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
  )
}

export default Navbar
