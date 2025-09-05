"use client"
import { motion, useReducedMotion } from "framer-motion"
import bg from "../../assets/icons/bg.svg"
import logo from "../../assets/icons/logo.svg"

const RequestQuote = () => {
  const prefersReduced = useReducedMotion()

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
