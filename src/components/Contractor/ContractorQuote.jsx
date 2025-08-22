"use client"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import bg from "../../assets/icons/bg.png"
import logo from "../../assets/icons/logo.png"
import doubleArrow from "../../assets/icons/double-arrow.png"

const ContractorQuote = () => {
  const prefersReduced = useReducedMotion()
  const MotionLink = motion(Link)

  const containerVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8,
          },
        },
      }

  const logoVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, scale: 0.5, rotateY: -180, filter: "blur(10px)" },
        show: {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 15,
            duration: 1.2,
          },
        },
      }

  const textVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: {
          opacity: 0,
          y: 30,
          rotateX: 45,
          filter: "blur(8px)",
          scale: 0.95,
        },
        show: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 18,
            duration: 1.5,
          },
        },
      }

  const buttonVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: {
          opacity: 0,
          y: 40,
          scale: 0.8,
          rotateX: 30,
          filter: "blur(5px)",
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 1.8,
          },
        },
      }

  return (
    <div
      className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center flex-col text-center px-4 sm:px-6"
        variants={containerVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img
          src={logo}
          alt="ASCND Logo"
          className="h-5 sm:h-6 w-auto md:h-7"
          variants={logoVar}
          whileHover={{
            scale: 1.1,
            rotateY: 10,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
        />

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-[0.8] tracking-tighter"
          variants={textVar}
          style={{ perspective: "1000px" }}
        >
          Build your Business. Grow your
          <br />
          team. Become the Installer
          <br />
          <span className="text-[#FF4C16]">ASCND is your partner every step of the way.</span>
        </motion.h1>

        <MotionLink
          to="/business-apply"
          className="mt-5 cursor-pointer inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-4 py-2.5 text-[10px] sm:px-6 sm:py-3 sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#0D1318]/90 md:px-7 md:py-3.5 md:text-[12px] hover:shadow-lg hover:shadow-[#0D1318]/30"
          whileHover={{
            scale: 1.05,
            y: -3,
            boxShadow: "0 10px 25px rgba(13, 19, 24, 0.3)",
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.95 }}
          variants={buttonVar}
          aria-label="Apply to ASCND"
        >
          <span>Apply Today</span>
          <motion.img
            src={doubleArrow}
            alt=""
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />
        </MotionLink>
      </motion.div>
    </div>
  )
}

export default ContractorQuote
