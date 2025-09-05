"use client"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import bg from "../../assets/icons/bg.svg"
import logo from "../../assets/icons/logo.svg"
import doubleArrow from "../../assets/icons/double-arrow.svg"

const ContractorQuote = () => {
  const prefersReduced = useReducedMotion()
  const MotionLink = motion(Link)

  const containerVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.1,
          },
        },
      }

  const logoVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, scale: 0.5, rotateY: -180 },
        show: {
          opacity: 1,
          scale: 1,
          rotateY: 0,
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
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }

  const buttonVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }

  return (
    <div
      className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto h-screen mt-28"
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
          
        />

        <motion.h1
          className="mt-10 font-[700] text-[#0D1318]
          text-3xl leading-8
sm:text-4xl sm:leading-10
md:text-5xl md:leading-[48px]
lg:text-6xl lg:leading-[56px]
xl:text-[44px] xl:leading-[36px]
2xl:text-[64px] 2xl:leading-[52px]
1821:text-[102px] 1821:leading-[80px]

tracking-[-0.04em]

          "
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
          className="inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-4 py-2.5  font-[700] uppercase tracking-[0.25em] text-[#F6F6F4] transition-colors duration-300 sm:px-6 sm:py-3 text-[11px] md:px-7 md:py-3.5  overflow-hidden relative mt-5"
          variants={buttonVar}
          aria-label="Apply to ASCND"
        >
          <span>Apply Today</span>
          <motion.img
            src={doubleArrow}
            alt=""
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex-shrink-0"
          />
        </MotionLink>
      </motion.div>
    </div>
  )
}

export default ContractorQuote
