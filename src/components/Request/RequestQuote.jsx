"use client"
import { motion, useReducedMotion } from "framer-motion"
import bg from "../../assets/icons/bg.png"
import logo from "../../assets/icons/logo.png"

const RequestQuote = () => {
  const prefersReduced = useReducedMotion()

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

  return (
    <div
      className="relative w-full max-w-4xl mx-auto min-h-[60vh] sm:min-h-screen px-4 sm:px-6"
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
          className="h-5 w-auto sm:h-6 md:h-7"
          variants={logoVar}
          whileHover={{
            scale: 1.1,
            rotateY: 10,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
        />
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1318] leading-[0.8] tracking-tighter"
          variants={textVar}
          style={{ perspective: "1000px" }}
        >
          Smart upgrades that improve
          <br />
          your home and strengthen
          <br />
          your investment
        </motion.h1>
      </motion.div>
    </div>
  )
}

export default RequestQuote
