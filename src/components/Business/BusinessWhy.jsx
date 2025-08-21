"use client"
import { motion } from "framer-motion"
import equity from "../../assets/icons/career.png"
import utility from "../../assets/icons/trade.png"
import finance from "../../assets/icons/discipline.png"
import tier from "../../assets/icons/fast.png"

// Animation variants
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

const headingVar = {
  hidden: {
    rotateX: 45,
    y: 60,
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  },
  show: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 1.2,
      duration: 1.2,
    },
  },
}

const cardVar = {
  hidden: {
    rotateY: -25,
    rotateX: 20,
    y: 80,
    opacity: 0,
    scale: 0.8,
    filter: "blur(12px)",
  },
  show: {
    rotateY: 0,
    rotateX: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
      mass: 1.5,
      duration: 1.4,
    },
  },
}

const iconVar = {
  hidden: {
    rotateZ: -180,
    scale: 0.3,
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    rotateZ: 0,
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
      delay: 0.3,
    },
  },
}

const BusinessWhy = () => {
  return (
    <motion.section
      className="w-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -10% 0px" }}
      style={{ perspective: "1000px" }}
    >
      <div className="mx-auto max-w-[100rem] ">
        <motion.div className="relative overflow-hidden" variants={container}>
          {/* Content */}
          <div className="relative px-4 py-8 sm:px-6 sm:py-10  md:py-12  h-full z-10 flex flex-col justify-between">
            <motion.h3
              className="font-extrabold leading-[0.8] text-[#0D1318] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-xl sm:max-w-2xl lg:max-w-3xl"
              variants={headingVar}
              style={{ transformStyle: "preserve-3d" }}
            >
              Why The ASCND Model Works
            </motion.h3>

            {/* Feature cards grid */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-7 md:mt-8"
              variants={container}
            >
              <motion.div
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#0D1318] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                variants={cardVar}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 10px 30px rgba(13, 19, 24, 0.15)",
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-[#0D1318] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0"
                  variants={iconVar}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <img
                    src={equity || "/placeholder.svg"}
                    alt="Build equity icon"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </motion.div>
                <span className="text-[#0D1318] text-base sm:text-lg md:text-xl font-semibold leading-[0.8]">
                  Real career mobility—from entry-level to business ownership
                </span>
              </motion.div>

              <motion.div
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#0D1318] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                variants={cardVar}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 10px 30px rgba(13, 19, 24, 0.15)",
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-[#0D1318] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0"
                  variants={iconVar}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <img
                    src={utility || "/placeholder.svg"}
                    alt="Reduce costs icon"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </motion.div>
                <span className="text-[#0D1318] text-base sm:text-lg md:text-xl font-semibold leading-[0.8]">
                  Tradespeople get financial power without needing licensing up front
                </span>
              </motion.div>

              <motion.div
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#0D1318] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                variants={cardVar}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 10px 30px rgba(13, 19, 24, 0.15)",
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-[#0D1318] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0"
                  variants={iconVar}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <img
                    src={finance || "/placeholder.svg"}
                    alt="Financing icon"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </motion.div>
                <span className="text-[#0D1318] text-base sm:text-lg md:text-xl font-semibold leading-[0.8]">
                  Multi-discipline selling for more deals, more commissions
                </span>
              </motion.div>

              <motion.div
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#0D1318] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                variants={cardVar}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 10px 30px rgba(13, 19, 24, 0.15)",
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-[#0D1318] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0"
                  variants={iconVar}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <img
                    src={tier || "/placeholder.svg"}
                    alt="High-quality installations icon"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </motion.div>
                <span className="text-[#0D1318] text-base sm:text-lg md:text-xl font-semibold leading-[0.8]">
                  Fast installs, no clawbacks, and built-in growth support
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BusinessWhy
