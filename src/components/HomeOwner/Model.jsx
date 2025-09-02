"use client"
import { motion } from "framer-motion"
import model from "../../assets/img/model.png"
import equity from "../../assets/icons/equity.svg"
import utility from "../../assets/icons/utility.svg"
import finance from "../../assets/icons/finance.svg"
import tier from "../../assets/icons/tier.svg"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const cardVariant = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const headingVariant = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const Model = () => {
  return (
    <motion.section
      className="w-full mt-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -10% 0px" }}
    >
      <div className="mx-auto ">
        <motion.div className="relative overflow-hidden bg-[#FF4C16]" variants={fadeUp}>
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img src={model || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
           
          </div>

          {/* Content */}
          <div className="relative px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:py-44 h-full z-10 flex flex-col justify-between">
            <motion.h3
              className="text-[#F6F6F4]
              text-[36px] leading-[32px]
              sm:text-[48px] sm:leading-[40px]
              md:text-[60px] md:leading-[52px]
              lg:text-[72px] lg:leading-[60px]
              xl:text-[120px] xl:leading-[100px]
              2xl:text-[150px] 2xl:leading-[124px]
              1821:text-[169px] 1821:leading-[144px]
              tracking-[-0.06em] font-[800]"
              variants={headingVariant}
            >
              Why The ASCND
              <br />
              Model Works
              <br />
              for Homeowners
            </motion.h3>

            <motion.div
              className="mb-12 sm:mb-20 md:mb-40 lg:mb-[400px] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8"
              variants={container}
            >
              {/* Build equity card */}
              <motion.div
                className="rounded-2xl p-3 border border-[#F6F6F4] flex items-center gap-3 sm:gap-4"
                variants={cardVariant}
              >
                <motion.div
                  className="rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0"
                >
                  <img
                    src={equity || "/placeholder.svg"}
                    alt="Build equity icon"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16"
                  />
                </motion.div>
                <span className="text-[#F6F6F4] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">
                  Build equity with each upgrade
                </span>
              </motion.div>

              {/* Reduce monthly costs card */}
              <motion.div
                className="rounded-2xl p-3 border border-[#F6F6F4] flex items-center gap-3 sm:gap-4"
                variants={cardVariant}
              >
                <motion.div
                  className="rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0"
                >
                  <img
                    src={utility || "/placeholder.svg"}
                    alt="Reduce costs icon"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16"
                  />
                </motion.div>
                <span className="text-[#F6F6F4] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">
                  Reduce monthly costs across utilities and maintenance
                </span>
              </motion.div>

              {/* Unlock financing card */}
              <motion.div
                className="rounded-2xl p-3 border border-[#F6F6F4] flex items-center gap-3 sm:gap-4"
                variants={cardVariant}
              >
                <motion.div
                  className="rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0"
                >
                  <img
                    src={finance || "/placeholder.svg"}
                    alt="Financing icon"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16"
                  />
                </motion.div>
                <span className="text-[#F6F6F4] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">
                  Unlock financing options that make big improvements accessible
                </span>
              </motion.div>

              {/* Fast installations card */}
              <motion.div
                className="rounded-2xl p-3 border border-[#F6F6F4] flex items-center gap-3 sm:gap-4"
                variants={cardVariant}
              >
                <motion.div
                  className="rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0"
                >
                  <img
                    src={tier || "/placeholder.svg"}
                    alt="High-quality installations icon"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16"
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