"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { FaInstagram, FaLinkedin, FaDiscord, FaBars, FaTimes, FaChevronDown } from "react-icons/fa"
import logo from "../../assets/icons/logo.svg"
import request from "../../assets/icons/request-white.svg"
import apply from "../../assets/icons/apply-white.svg"
import arrow from "../../assets/icons/arrow.svg"
import { motion, AnimatePresence } from "framer-motion"

// Motion-enabled Link for interactive button animations
const MotionLink = motion(Link)

// Animation variants
const navReveal = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

const rowStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
}

const logoItem = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
}

const btnItem = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
}

const socialItem = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
}

const mobileMenu = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
}

const mobileMenuItem = {
  hidden: { x: 10, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
}

const baseBtn =
  "group inline-flex items-center justify-center gap-2 rounded-md border-2 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.25em] transition-all duration-200 h-9 sm:px-5 sm:py-2 sm:text-[10px] sm:h-10 md:px-6 md:py-2 md:text-[11px] md:h-11 lg:px-7 lg:py-3 lg:text-[11px] lg:h-12 leading-none cursor-pointer"

const outlineBtn = `${baseBtn} border-[#0D1318] bg-transparent text-[#0D1318] `
const darkBtn = `${baseBtn} border-transparent bg-[#0D1318] text-[#F6F6F4]`
const orangeBtn = `${baseBtn} border-transparent bg-[#FF4C16] text-[#F6F6F4] `

const mobileMenuBtn = "w-full flex items-center justify-center gap-3 rounded-md border-2 px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-200 leading-none cursor-pointer text-center"
const mobileOutlineBtn = `${mobileMenuBtn} border-[#0D1318]/20 bg-transparent text-[#0D1318] hover:bg-[#0D1318]/5 text-center`
const mobileDarkBtn = `${mobileMenuBtn} border-transparent bg-[#0D1318] text-[#F6F6F4] text-center`
const mobileOrangeBtn = `${mobileMenuBtn} border-transparent bg-[#FF4C16] text-[#F6F6F4] hover:bg-[#e74312] text-center`

const ScrollHandler = () => {
  const { pathname, state } = useLocation()

  useEffect(() => {
    // Scroll to top for specific routes
    const scrollToTopRoutes = ['/about', '/request-quote', '/business-apply', '/home-owner']
    if (scrollToTopRoutes.includes(pathname)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    // Handle anchor link scrolling
    else if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [pathname, state])

  return null
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false)
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false)
  const homeDropdownRef = useRef(null)
  const businessDropdownRef = useRef(null)
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#')
      navigate(route, { state: { scrollTo: hash } })
    } else {
      navigate(path)
    }
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen)
    if (isBusinessDropdownOpen) setIsBusinessDropdownOpen(false)
  }
  const toggleBusinessDropdown = () => {
    setIsBusinessDropdownOpen(!isBusinessDropdownOpen)
    if (isHomeDropdownOpen) setIsHomeDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        homeDropdownRef.current &&
        !homeDropdownRef.current.contains(event.target) &&
        businessDropdownRef.current &&
        !businessDropdownRef.current.contains(event.target)
      ) {
        setIsHomeDropdownOpen(false)
        setIsBusinessDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="w-full relative">
      <ScrollHandler />
      <motion.nav
        className="w-full bg-[#F6F6F4] px-4 py-2 text-[#0D1318] sm:px-6 md:py-3 relative z-50"
        variants={navReveal}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center gap-2 md:gap-4"
          variants={rowStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center gap-2 pr-2 md:gap-3 md:pr-4 cursor-pointer"
            variants={logoItem}
          >
            <img src={logo || "/placeholder.svg"} alt="ASCND" className="h-6 w-auto md:h-7" />
          </motion.div>

          <div className="flex-1 lg:hidden" />
          <motion.button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-[#0D1318] hover:bg-[#0D1318]/5 rounded-md transition-colors duration-200 cursor-pointer"
            variants={btnItem}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <FaTimes className="size-5" /> : <FaBars className="size-5" />}
          </motion.button>

          <div className="hidden lg:contents">
            <div className="flex-1" />

            <motion.div className="flex items-center gap-2 xl:gap-3 2xl:gap-5" variants={rowStagger}>
              <div className="relative" ref={homeDropdownRef}>
                <MotionLink
                  to="#"
                  className={`${outlineBtn} items-center cursor-pointer`}
                  variants={btnItem}
                  onClick={toggleHomeDropdown}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center leading-none">
                    <span className="hidden 2xl:inline">YOUR HOME</span>
                    <span className="hidden xl:inline 2xl:hidden">YOUR HOME</span>
                    <span className="xl:hidden">HOME</span>
                  </span>
                  <motion.img
                    src={arrow}
                    alt=""
                    className=" flex-shrink-0 self-center"
                    animate={{ rotate: isHomeDropdownOpen ? 90 : 0 }}
                    style={{ marginTop: '-1px' }}
                  />
                </MotionLink>
                <AnimatePresence>
                  {isHomeDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-64 z-[9999]  border border-[#0D1318]/10 rounded-md"
                    >
                      <ul className="space-y-2 ">
                        <li>
                          <button
                            onClick={() => {
                              handleNavigation("/home#services")
                              setIsHomeDropdownOpen(false)
                            }}
                            className={`${outlineBtn} w-full justify-center bg-[#F6F6F4]`}
                          >
                            HOME SERVICES
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              handleNavigation("/home#why")
                              setIsHomeDropdownOpen(false)
                            }}
                            className={`${outlineBtn} w-full justify-center bg-[#F6F6F4]`}
                          >
                            WHY ASCND YOUR HOME?
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              handleNavigation("/home-owner-growth-model")
                              setIsHomeDropdownOpen(false)
                            }}
                            className={`${outlineBtn} w-full justify-center bg-[#F6F6F4]`}
                          >
                            HOMEOWNER GROWTH MODEL
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              handleNavigation("/request-quote")
                              setIsHomeDropdownOpen(false)
                            }}
                            className={`${outlineBtn} w-full justify-center bg-[#F6F6F4]`}
                          >
                            REQUEST A QUOTE
                          </button>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative" ref={businessDropdownRef}>
                <MotionLink
                  to="#"
                  className={`${outlineBtn} items-center cursor-pointer`}
                  variants={btnItem}
                  onClick={toggleBusinessDropdown}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center leading-none">
                    <span className="hidden 2xl:inline">YOUR BUSINESS</span>
                    <span className="hidden xl:inline 2xl:hidden">YOUR BUSINESS</span>
                    <span className="xl:hidden">BUSINESS</span>
                  </span>
                  <motion.img
                    src={arrow}
                    alt=""
                    className=" flex-shrink-0 self-center"
                    animate={{ rotate: isBusinessDropdownOpen ? 90 : 0 }}
                    style={{ marginTop: '-1px' }}
                  />
                </MotionLink>
                <AnimatePresence>
                  {isBusinessDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-64 z-[9999]  border border-[#0D1318]/10 rounded-md"
                    >
                      <ul className="space-y-2">
                        <li>
                          <button
                            onClick={() => {
                              handleNavigation("/contractor#contractorservices")
                              setIsBusinessDropdownOpen(false)
                            }}
                            className={`${outlineBtn} w-full justify-center bg-[#F6F6F4]`}
                          >
                            CONTRACTOR SERVICES
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              handleNavigation("/contractor#contractorwhy")
                              setIsBusinessDropdownOpen(false)
                            }}
                            className={`${outlineBtn} w-full justify-center bg-[#F6F6F4]`}
                          >
                            WHY ASCND YOUR BUSINESS?
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              handleNavigation("/business-growth-model")
                              setIsBusinessDropdownOpen(false)
                            }}
                            className={`${outlineBtn} w-full justify-center bg-[#F6F6F4]`}
                          >
                            GROWTH MODEL
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              handleNavigation("/business-apply")
                              setIsBusinessDropdownOpen(false)
                            }}
                            className={`${outlineBtn} w-full justify-center bg-[#F6F6F4]`}
                          >
                            APPLY TO ASCND
                          </button>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                onClick={() => handleNavigation("/about")}
                className={outlineBtn + " justify-center cursor-pointer"}
                variants={btnItem}
                whileTap={{ scale: 0.98 }}
              >
                <span>ABOUT US</span>
              </motion.button>

              <motion.button
                onClick={() => handleNavigation("/request-quote")}
                className={`${darkBtn} items-center cursor-pointer`}
                variants={btnItem}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center">REQUEST QUOTE</span>
                <motion.img
                  src={request}
                  alt="Request"
                  className=" flex-shrink-0"
                />
              </motion.button>

              <motion.button
                onClick={() => handleNavigation("/business-apply")}
                className={`${orangeBtn} items-center cursor-pointer`}
                variants={btnItem}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center">APPLY</span>
                <motion.img
                  src={apply}
                  alt="Apply"
                  className=" flex-shrink-0"
                />
              </motion.button>
            </motion.div>

            <motion.div
              className="ml-2 flex items-center gap-3 text-[#111] sm:ml-3 md:ml-4 md:gap-4 flex-shrink-0"
              variants={rowStagger}
            >
              <motion.span
                variants={socialItem}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
              >
                <FaLinkedin className="size-4 sm:size-5 md:size-6" />
              </motion.span>
              <motion.span
                variants={socialItem}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
              >
                <FaInstagram className="size-4 sm:size-5 md:size-6" />
              </motion.span>
              <motion.span
                variants={socialItem}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
              >
                <FaDiscord className="size-4 sm:size-5 md:size-6" />
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[9998] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#F6F6F4] z-[9999] overflow-y-auto "
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="p-6">
              <div className="flex justify-end mb-6">
                <motion.button
                  onClick={toggleMobileMenu}
                  className="p-2 text-[#0D1318] hover:bg-[#0D1318]/5 rounded-md transition-colors duration-200 cursor-pointer"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes className="size-5" />
                </motion.button>
              </div>

              <motion.div className="flex items-center gap-3 mb-8" variants={mobileMenuItem}>
                <motion.img src={logo} alt="ASCND" className="h-8 w-auto" />
              </motion.div>

              <motion.div className="space-y-4" variants={rowStagger}>
                <motion.div variants={mobileMenuItem}>
                  <MotionLink
                    to="#"
                    className={`${mobileOutlineBtn} items-center cursor-pointer`}
                    onClick={toggleHomeDropdown}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center">ASCND YOUR HOME</span>
                    <motion.img
                      src={arrow}
                      alt=""
                      className="h-4 w-4 flex-shrink-0 self-center"
                      animate={{ rotate: isHomeDropdownOpen ? 90 : 0 }}
                      style={{ marginTop: '-1px' }}
                    />
                  </MotionLink>
                  <AnimatePresence>
                    {isHomeDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 space-y-2"
                      >
                        <button
                          onClick={() => {
                            handleNavigation("/home#services")
                            toggleMobileMenu()
                          }}
                          className={`${mobileOutlineBtn} justify-center`}
                        >
                          HOME SERVICES
                        </button>
                        <button
                          onClick={() => {
                            handleNavigation("/home#why")
                            toggleMobileMenu()
                          }}
                          className={`${mobileOutlineBtn} justify-center`}
                        >
                          WHY ASCND YOUR HOME?
                        </button>
                        <button
                          onClick={() => {
                            handleNavigation("/home-owner-growth-model")
                            toggleMobileMenu()
                          }}
                          className={`${mobileOutlineBtn} justify-center`}
                        >
                          HOMEOWNER GROWTH MODEL
                        </button>
                        <button
                          onClick={() => {
                            handleNavigation("/request-quote")
                            toggleMobileMenu()
                          }}
                          className={`${mobileOutlineBtn} justify-center`}
                        >
                          REQUEST A QUOTE
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div variants={mobileMenuItem}>
                  <MotionLink
                    to="#"
                    className={`${mobileOutlineBtn} items-center cursor-pointer`}
                    onClick={toggleBusinessDropdown}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center">ASCND YOUR BUSINESS</span>
                    <motion.img
                      src={arrow}
                      alt=""
                      className="h-4 w-4 flex-shrink-0 self-center"
                      animate={{ rotate: isBusinessDropdownOpen ? 90 : 0 }}
                      style={{ marginTop: '-1px' }}
                    />
                  </MotionLink>
                  <AnimatePresence>
                    {isBusinessDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 space-y-2"
                      >
                        <button
                          onClick={() => {
                            handleNavigation("/contractor#contractorservices")
                            toggleMobileMenu()
                          }}
                          className={`${mobileOutlineBtn} justify-center`}
                        >
                          CONTRACTOR SERVICES
                        </button>
                        <button
                          onClick={() => {
                            handleNavigation("/contractor#contractorwhy")
                            toggleMobileMenu()
                          }}
                          className={`${mobileOutlineBtn} justify-center`}
                        >
                          WHY ASCND YOUR BUSINESS?
                        </button>
                        <button
                          onClick={() => {
                            handleNavigation("/business-growth-model")
                            toggleMobileMenu()
                          }}
                          className={`${mobileOutlineBtn} justify-center`}
                        >
                          GROWTH MODEL
                        </button>
                        <button
                          onClick={() => {
                            handleNavigation("/business-apply")
                            toggleMobileMenu()
                          }}
                          className={`${mobileOutlineBtn} justify-center`}
                        >
                          APPLY TO ASCND
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div variants={mobileMenuItem}>
                  <motion.button
                    onClick={() => {
                      handleNavigation("/about")
                      toggleMobileMenu()
                    }}
                    className={mobileOutlineBtn + " justify-center cursor-pointer"}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>ABOUT US</span>
                  </motion.button>
                </motion.div>

                <motion.div variants={mobileMenuItem}>
                  <motion.button
                    onClick={() => {
                      handleNavigation("/request-quote")
                      toggleMobileMenu()
                    }}
                    className={`${mobileDarkBtn} items-center cursor-pointer`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center">REQUEST A QUOTE</span>
                    <motion.img 
                      src={request} 
                      alt="Request" 
                      className="h-5 w-5 flex-shrink-0" 
                    />
                  </motion.button>
                </motion.div>

                <motion.div variants={mobileMenuItem}>
                  <motion.button
                    onClick={() => {
                      handleNavigation("/business-apply")
                      toggleMobileMenu()
                    }}
                    className={`${mobileOrangeBtn} items-center cursor-pointer`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center">APPLY</span>
                    <motion.img 
                      src={apply} 
                      alt="Apply" 
                      className="h-5 w-5 flex-shrink-0" 
                    />
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div className="mt-12 pt-6 border-t border-[#0D1318]/10" variants={mobileMenuItem}>
                <p className="text-sm font-semibold text-[#0D1318]/60 uppercase tracking-wider mb-4">Follow Us</p>
                <div className="flex items-center gap-6">
                  <motion.a
                    href="#"
                    className="text-[#0D1318] hover:text-[#FF4C16] transition-colors duration-200 cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="size-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-[#0D1318] hover:text-[#FF4C16] transition-colors duration-200 cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram className="size-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-[#0D1318] hover:text-[#FF4C16] transition-colors duration-200 cursor-pointer"
                    whileTap={{ scale: 0.95 }}
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