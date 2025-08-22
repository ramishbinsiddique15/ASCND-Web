"use client"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import quote from "../../assets/icons/quote.png"
import logo from "../../assets/icons/logo.png"
import doubleArrow from "../../assets/icons/double-arrow.png"

const BusinessQuote = () => {
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
    <div className="relative w-full bg-gray-100 py-12 sm:py-14 md:py-16 pt-32 sm:pt-36 md:pt-40 lg:pt-44">
      <motion.img
        src={quote}
        className="absolute -top-6 sm:-top-8 md:-top-10 right-0 w-48 sm:w-64 md:w-80 lg:w-96"
        alt=""
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      />
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-center">
          {/* Left side - Content */}
          <motion.div
            className="space-y-4 sm:space-y-5 md:space-y-6"
            variants={containerVar}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={logo}
              alt="ASCND Logo"
              className="h-6 sm:h-7 md:h-8 w-auto"
              variants={logoVar}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            />

            <motion.div className="space-y-2" variants={textVar} style={{ perspective: "1000px" }}>
              <h1
                className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-bold leading-[0.8]
             bg-gradient-to-r from-[#0D1318] to-[#FF4C16] bg-clip-text text-transparent z-50"
              >
                Start as a setter.
                <br />
                Close your own deals.
                <br />
                Lead a team.
                <br />
                Open your own dealership.
                <br />
                Run your own installation business.
                <br />
                In turf. In solar. In anything.
              </h1>
            </motion.div>

            <MotionLink
              to="/business-apply"
              className="inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-7 lg:py-3.5 text-[10px] sm:text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#0D1318]/90 hover:shadow-lg hover:shadow-[#0D1318]/30"
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
                className="w-3 h-3 sm:w-4 sm:h-4"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            </MotionLink>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BusinessQuote
