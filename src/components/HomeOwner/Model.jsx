"use client"
import { motion } from "framer-motion"
import model from "../../assets/img/model.png"
import equity from "../../assets/icons/equity.png"
import utility from "../../assets/icons/utility.png"
import finance from "../../assets/icons/finance.png"
import tier from "../../assets/icons/tier.png"

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const fadeUp = {
  hidden: {
    y: 60,
    opacity: 0,
    rotateX: 25,
    scale: 0.9,
    filter: "blur(12px)",
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 1.2,
    },
  },
}

const cardVariant = {
  hidden: {
    y: 80,
    opacity: 0,
    rotateY: -15,
    scale: 0.85,
    filter: "blur(15px)",
  },
  show: {
    y: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 100,
      damping: 18,
      mass: 1.5,
    },
  },
}

const headingVariant = {
  hidden: {
    y: 100,
    opacity: 0,
    rotateX: 45,
    scale: 0.8,
    filter: "blur(20px)",
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 80,
      damping: 25,
      mass: 2,
    },
  },
}

const Model = () => {
  return (
    <motion.section
      className="w-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -10% 0px" }}
      style={{ perspective: "1000px" }}
    >
      <div className="mx-auto max-w-[100rem]">
        <motion.div className="relative overflow-hidden bg-[#FF4C16]" variants={fadeUp}>
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img src={model || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
            {/* Orange overlay */}
            <div className="absolute inset-0 bg-[#FF4C16] mix-blend-multiply opacity-100" />
          </div>

          {/* Content */}
          <div className="relative px-4 py-8 sm:px-6 sm:py-10  md:py-12  lg:py-16 h-full z-10 flex flex-col justify-between">
            <motion.h3
              className="font-extrabold leading-[0.8] text-[#F6F6F4] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] max-w-full sm:max-w-2xl"
              variants={headingVariant}
              style={{ transformStyle: "preserve-3d" }}
            >
              Why The ASCND
              <br />
              Model Works
              <br />
              for Homeowners
            </motion.h3>

            <motion.div
              className="mb-12 sm:mb-20 md:mb-40 lg:mb-96 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8"
              variants={container}
            >
              {/* Build equity card */}
              <motion.div
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#F6F6F4] flex items-center gap-3 sm:gap-4"
                variants={cardVariant}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-[#F6F6F4] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <img
                    src={equity || "/placeholder.svg"}
                    alt="Build equity icon"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </motion.div>
                <span className="text-[#F6F6F4] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">
                  Build equity with each upgrade
                </span>
              </motion.div>

              {/* Reduce monthly costs card */}
              <motion.div
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#F6F6F4] flex items-center gap-3 sm:gap-4"
                variants={cardVariant}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-[#F6F6F4] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <img
                    src={utility || "/placeholder.svg"}
                    alt="Reduce costs icon"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </motion.div>
                <span className="text-[#F6F6F4] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">
                  Reduce monthly costs across utilities and maintenance
                </span>
              </motion.div>

              {/* Unlock financing card */}
              <motion.div
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#F6F6F4] flex items-center gap-3 sm:gap-4"
                variants={cardVariant}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-[#F6F6F4] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <img
                    src={finance || "/placeholder.svg"}
                    alt="Financing icon"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </motion.div>
                <span className="text-[#F6F6F4] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">
                  Unlock financing options that make big improvements accessible
                </span>
              </motion.div>

              {/* Fast installations card */}
              <motion.div
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#F6F6F4] flex items-center gap-3 sm:gap-4"
                variants={cardVariant}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-[#F6F6F4] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <img
                    src={tier || "/placeholder.svg"}
                    alt="High-quality installations icon"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </motion.div>
                <span className="text-[#F6F6F4] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">
                  Enjoy fast, high-quality installations by top-tier local pros
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Model
