"use client"

import { useState, useEffect } from "react"
import banner from "../../assets/img/banner.jpg"
import logo from "../../assets/icons/logo-white.png"
import request from "../../assets/icons/request.png"
import apply from "../../assets/icons/apply.png"
import doubleArrow from "../../assets/icons/double-arrow.png"
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

// Motion-enabled Link
const MotionLink = motion(Link)

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.12,
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const lineItem = {
  hidden: {
    y: 80,
    opacity: 0,
    rotateX: -20,
    scale: 0.8,
    filter: "blur(10px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      damping: 20,
      stiffness: 80,
    },
  },
}

const logoAnimation = {
  hidden: {
    scale: 0.2,
    opacity: 0,
    rotate: -360,
    y: -100,
    filter: "blur(20px)",
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 2,
      ease: [0.175, 0.885, 0.32, 1.275],
      type: "spring",
      damping: 15,
      stiffness: 60,
    },
  },
}

const bottomBar = {
  hidden: { y: 100, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.5,
      duration: 1.2,
      ease: [0.19, 1, 0.22, 1],
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
}

const buttonItem = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.7,
    rotateX: 20,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      damping: 18,
      stiffness: 90,
    },
  },
}

const socialItem = {
  hidden: {
    scale: 0.2,
    opacity: 0,
    rotate: -180,
    y: 30,
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.175, 0.885, 0.32, 1.275],
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
}

const buttonHover = {
  scale: 1.02,
  y: -2,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 25,
    duration: 0.2,
  },
}

const buttonTap = {
  scale: 0.98,
  transition: {
    type: "spring",
    stiffness: 600,
    damping: 20,
    duration: 0.1,
  },
}

const socialHover = {
  scale: 1.1,
  y: -3,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 20,
    duration: 0.3,
  },
}

const socialTap = {
  scale: 0.95,
  transition: {
    type: "spring",
    stiffness: 600,
    damping: 15,
    duration: 0.1,
  },
}

const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeButton, setActiveButton] = useState(null)

  // Simulate loading completion
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="fixed inset-0 w-full overflow-hidden text-white">
      <motion.div className="absolute inset-0 w-full h-full">
        <motion.img
          src={banner}
          alt="ASCND background"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      />

      <motion.div
        className="absolute top-1/2 md:top-auto md:bottom-[calc(4rem+30px)] px-4 text-left sm:px-6 lg:px-8"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-3 sm:mb-4" variants={logoAnimation}>
          <motion.img src={logo} alt="ASCND Logo" className="h-[35px] sm:h-[42px] lg:h-[50px]" />
        </motion.div>

        <h1 className="max-w-[60rem] text-[28px] font-extrabold leading-[0.8] tracking-[-0.02em] sm:text-[38px] md:text-[48px] lg:text-[76px]">
          <motion.span className="block" variants={lineItem}>
            Advanced Strategies
          </motion.span>
          <motion.span className="block" variants={lineItem}>
            in Construction
          </motion.span>
          <motion.span className="block" variants={lineItem}>
            &amp; National Distribution
          </motion.span>
        </h1>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6"
        variants={bottomBar}
        initial="hidden"
        animate="visible"
      >
        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Buttons Row 1 */}
          <motion.div
            className="flex items-center gap-2 border-t pt-4 border-t-white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          >
            <MotionLink
              to="/home-owner"
              role="button"
              variants={buttonItem}
              className="group flex flex-1 items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={buttonHover}
              whileTap={buttonTap}
              onMouseEnter={() => setActiveButton("homeowner")}
              onMouseLeave={() => setActiveButton(null)}
            >
              <motion.span
                animate={activeButton === "homeowner" ? { x: 2 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                HOMEOWNER
              </motion.span>
              <motion.img
                src={doubleArrow}
                alt=""
                className="h-3"
                animate={activeButton === "homeowner" ? { x: 3 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </MotionLink>
            <MotionLink
              to="/business"
              role="button"
              variants={buttonItem}
              className="group flex flex-1 items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={buttonHover}
              whileTap={buttonTap}
              onMouseEnter={() => setActiveButton("business")}
              onMouseLeave={() => setActiveButton(null)}
            >
              <motion.span
                animate={activeButton === "business" ? { x: 2 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                BUSINESS
              </motion.span>
              <motion.img
                src={doubleArrow}
                alt=""
                className="h-3"
                animate={activeButton === "business" ? { x: 3 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </MotionLink>
          </motion.div>

          {/* Buttons Row 2 */}
          <div className="flex items-center gap-2">
            <MotionLink
              to="/about"
              role="button"
              variants={buttonItem}
              className="group flex flex-1 items-center justify-center rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              ABOUT US
            </MotionLink>
            <MotionLink
              to="/request-quote"
              role="button"
              variants={buttonItem}
              className="group flex flex-1 items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={buttonHover}
              whileTap={buttonTap}
              onMouseEnter={() => setActiveButton("quotes")}
              onMouseLeave={() => setActiveButton(null)}
            >
              <motion.span
                animate={activeButton === "quotes" ? { x: 2 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                QUOTES
              </motion.span>
              <motion.img
                src={request}
                alt="Request"
                className="h-4"
                animate={activeButton === "quotes" ? { x: 3, scale: 1.05 } : { x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </MotionLink>
            <MotionLink
              to="/business-apply"
              role="button"
              variants={buttonItem}
              className="group flex flex-1 items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={buttonHover}
              whileTap={buttonTap}
              onMouseEnter={() => setActiveButton("apply")}
              onMouseLeave={() => setActiveButton(null)}
            >
              <motion.span
                animate={activeButton === "apply" ? { x: 2 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                APPLY
              </motion.span>
              <motion.img
                src={apply}
                alt="Apply"
                className="h-4"
                animate={activeButton === "apply" ? { x: 3, scale: 1.05 } : { x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </MotionLink>
          </div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            {[
              { Icon: FaDiscord, label: "Discord", color: "#5865F2" },
              { Icon: FaInstagram, label: "Instagram", color: "#E4405F" },
              { Icon: FaLinkedin, label: "LinkedIn", color: "#0077B5" },
            ].map(({ Icon, label, color }, index) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full bg-white text-gray-900 shadow-md transition-all duration-200"
                variants={socialItem}
                whileHover={{
                  ...socialHover,
                  backgroundColor: color,
                  color: "white",
                }}
                whileTap={socialTap}
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  delay: 2.7 + index * 0.1,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <Icon className="size-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Tablet Layout - Two Rows */}
        <div className="hidden md:flex lg:hidden flex-col gap-4 border-t pt-4 border-t-white">
          {/* First Row - Main buttons */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          >
            <MotionLink
              to="/home-owner"
              role="button"
              variants={buttonItem}
              className="group flex flex-1 items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={buttonHover}
              whileTap={buttonTap}
              onMouseEnter={() => setActiveButton("homeowner")}
              onMouseLeave={() => setActiveButton(null)}
            >
              <motion.span
                animate={activeButton === "homeowner" ? { x: 2 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                HOMEOWNER
              </motion.span>
              <motion.img
                src={doubleArrow}
                alt=""
                className="h-4"
                animate={activeButton === "homeowner" ? { x: 3 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </MotionLink>
            <MotionLink
              to="/business"
              role="button"
              variants={buttonItem}
              className="group flex flex-1 items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              whileHover={buttonHover}
              whileTap={buttonTap}
              onMouseEnter={() => setActiveButton("business")}
              onMouseLeave={() => setActiveButton(null)}
            >
              <motion.span
                animate={activeButton === "business" ? { x: 2 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                BUSINESS
              </motion.span>
              <motion.img
                src={doubleArrow}
                alt=""
                className="h-4"
                animate={activeButton === "business" ? { x: 3 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </MotionLink>
          </motion.div>

          {/* Second Row - Secondary buttons and social */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1">
              <MotionLink
                to="/about"
                role="button"
                variants={buttonItem}
                className="group flex items-center justify-center rounded-lg border-2 border-white/80 bg-transparent px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                ABOUT US
              </MotionLink>
              <MotionLink
                to="/request-quote"
                role="button"
                variants={buttonItem}
                className="group flex items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                whileHover={buttonHover}
                whileTap={buttonTap}
                onMouseEnter={() => setActiveButton("quotes")}
                onMouseLeave={() => setActiveButton(null)}
              >
                <motion.span
                  animate={activeButton === "quotes" ? { x: 2 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  QUOTES
                </motion.span>
                <motion.img
                  src={request}
                  alt="Request"
                  className="h-4"
                  animate={activeButton === "quotes" ? { x: 3, scale: 1.05 } : { x: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </MotionLink>
              <MotionLink
                to="/business-apply"
                role="button"
                variants={buttonItem}
                className="group flex items-center justify-between gap-2 rounded-lg border-2 border-white/80 bg-transparent px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                whileHover={buttonHover}
                whileTap={buttonTap}
                onMouseEnter={() => setActiveButton("apply")}
                onMouseLeave={() => setActiveButton(null)}
              >
                <motion.span
                  animate={activeButton === "apply" ? { x: 2 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  APPLY
                </motion.span>
                <motion.img
                  src={apply}
                  alt="Apply"
                  className="h-4"
                  animate={activeButton === "apply" ? { x: 3, scale: 1.05 } : { x: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </MotionLink>
            </div>

            {/* Social Icons */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              {[
                { Icon: FaDiscord, label: "Discord", color: "#5865F2" },
                { Icon: FaInstagram, label: "Instagram", color: "#E4405F" },
                { Icon: FaLinkedin, label: "LinkedIn", color: "#0077B5" },
              ].map(({ Icon, label, color }, index) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full bg-white text-gray-900 shadow-md transition-all duration-200"
                  variants={socialItem}
                  whileHover={{
                    ...socialHover,
                    backgroundColor: color,
                    color: "white",
                  }}
                  whileTap={socialTap}
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    delay: 2.2 + index * 0.1,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <Icon className="size-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout - Enhanced Interactive Single Row */}
        <div className="hidden lg:flex items-center justify-between border-t pt-5 border-t-white">
          {/* Animated border line */}
          <motion.div
            className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          />

          {/* Left Side: Buttons - Enhanced with stagger animation */}
          <motion.div
            className="flex items-center gap-1 lg:gap-2 xl:gap-3 2xl:gap-4 pr-2 lg:pr-4 xl:pr-6 2xl:pr-8"
            variants={heroContainer}
          >
            {[
              { label: "I'M A HOMEOWNER", route: "/home-owner", icon: doubleArrow, hasIcon: true, key: "homeowner" },
              { label: "ASCND YOUR BUSINESS", route: "/business", icon: doubleArrow, hasIcon: true, key: "business" },
              { label: "ABOUT US", route: "/about", icon: null, hasIcon: false, key: "about" },
              { label: "REQUEST A QUOTE", route: "/request-quote", icon: request, hasIcon: true, key: "quotes" },
              { label: "APPLY", route: "/business-apply", icon: apply, hasIcon: true, key: "apply" },
            ].map(({ label, route, icon, hasIcon, key }, index) => (
              <MotionLink
                to={route}
                role="button"
                variants={buttonItem}
                key={label}
                className={`group relative flex items-center ${hasIcon ? "justify-between" : "justify-center"} gap-2 lg:gap-2 xl:gap-3 rounded-lg border-2 border-white/80 bg-transparent px-2 lg:px-3 xl:px-4 2xl:px-6 py-3 xl:py-4 text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] font-semibold uppercase tracking-[0.1em] lg:tracking-[0.15em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 h-10 xl:h-11 2xl:h-12 whitespace-nowrap overflow-hidden`}
                whileHover={buttonHover}
                whileTap={buttonTap}
                onMouseEnter={() => setActiveButton(key)}
                onMouseLeave={() => setActiveButton(null)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 1.8 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={activeButton === key ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                <motion.span
                  animate={activeButton === key ? { x: hasIcon ? 2 : 0, scale: 1.02 } : { x: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative z-10"
                >
                  {label}
                </motion.span>

                {hasIcon && (
                  <motion.img
                    src={icon}
                    alt=""
                    className="h-3 xl:h-4 2xl:h-5 flex-shrink-0 relative z-10"
                    animate={
                      activeButton === key
                        ? {
                            x: 3,
                            rotate: icon === doubleArrow ? 5 : [0, 15, -15, 0],
                            scale: 1.1,
                          }
                        : { x: 0, rotate: 0, scale: 1 }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                {/* Ripple effect on click */}
                <motion.div
                  className="absolute inset-0 rounded-lg border border-white/30"
                  initial={{ scale: 1, opacity: 0 }}
                  whileTap={{ scale: 1.5, opacity: [0, 1, 0] }}
                  transition={{ duration: 0.4 }}
                />
              </MotionLink>
            ))}
          </motion.div>

          {/* Right Side: Enhanced Social Icons */}
          <motion.div
            className="flex items-center gap-2 xl:gap-3 2xl:gap-4 flex-shrink-0"
            variants={heroContainer}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            {[
              { Icon: FaDiscord, label: "Discord", color: "#5865F2" },
              { Icon: FaInstagram, label: "Instagram", color: "#E4405F" },
              { Icon: FaLinkedin, label: "LinkedIn", color: "#0077B5" },
            ].map(({ Icon, label, color }, index) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                className="relative grid size-10 xl:size-11 2xl:size-12 place-items-center rounded-full bg-white text-gray-900 shadow-md transition-all duration-200"
                variants={socialItem}
                whileHover={{
                  ...socialHover,
                  backgroundColor: color,
                  color: "white",
                }}
                whileTap={socialTap}
                initial={{ rotate: -90, scale: 0, y: 20 }}
                animate={{ rotate: 0, scale: 1, y: 0 }}
                transition={{
                  delay: 2.7 + index * 0.15,
                  duration: 1,
                  type: "spring",
                  stiffness: 150,
                  damping: 12,
                }}
                onMouseEnter={() => setActiveButton(label.toLowerCase())}
                onMouseLeave={() => setActiveButton(null)}
              >
                {/* Animated background circle */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ scale: 0 }}
                  animate={activeButton === label.toLowerCase() ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                <motion.div
                  animate={{
                    rotate: activeButton === label.toLowerCase() ? [0, 360] : 0,
                    scale: activeButton === label.toLowerCase() ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    rotate: { duration: 0.8, ease: "easeInOut" },
                    scale: { duration: 0.4, ease: "easeInOut" },
                  }}
                  className="relative z-10"
                >
                  <Icon className="size-4 xl:size-5 2xl:size-6" />
                </motion.div>

                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  animate={
                    activeButton === label.toLowerCase()
                      ? {
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Banner
