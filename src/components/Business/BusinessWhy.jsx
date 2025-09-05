"use client"
import { motion } from "framer-motion"
import equity from "../../assets/icons/career.svg"
import utility from "../../assets/icons/trade.svg"
import finance from "../../assets/icons/discipline.svg"
import tier from "../../assets/icons/fast.svg"

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

const BusinessWhy = () => {
  return (
    <motion.section
      className="w-full mt-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -10% 0px" }}
    >
      <div className="mx-auto ">
        <motion.div className="relative overflow-hidden" variants={fadeUp}>
          {/* Content */}
          <div className="relative px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:py-16 h-full z-10 flex flex-col justify-between">
            <motion.h3
              className="text-[#0D1318]
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
              Why The ASCND <br/> Model Works
            </motion.h3>

            {/* Feature cards grid */}
            <motion.div
              className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8"
              variants={container}
            >
              <motion.div
                className="rounded-[24px] p-2 border border-[#0D1318] flex flex-row items-center gap-3 sm:gap-4"
                variants={cardVariant}
              >
                <motion.div
                  className=" p-2 sm:p-3 flex-shrink-0"
                >
                  <img
                    src={equity || "/placeholder.svg"}
                    alt="Build equity icon"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16"
                  />
                </motion.div>
                <span className="text-[#0D1318] text-[16px] leading-[16px]
                  sm:text-[18px] sm:leading-[18px]
                  md:text-[20px] md:leading-[20px]
                  lg:text-[24px] lg:leading-[24px]
                  xl:text-[32px] xl:leading-[32px]
                  2xl:text-[38px] 2xl:leading-[38px]
                  1821:text-[45px] 1821:leading-[45px]
                  font-[700]
                  tracking-[-0.04em]">
                  Real career mobility—from entry-level to business ownership
                </span>
              </motion.div>

              <motion.div
                className="rounded-[24px] p-2 border border-[#0D1318] flex flex-row items-center gap-3 sm:gap-4"
                variants={cardVariant}
              >
                <motion.div
                  className=" p-2 sm:p-3 flex-shrink-0"
                >
                  <img
                    src={utility || "/placeholder.svg"}
                    alt="Reduce costs icon"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16"
                  />
                </motion.div>
                <span className="text-[#0D1318] text-[16px] leading-[16px]
                  sm:text-[18px] sm:leading-[18px]
                  md:text-[20px] md:leading-[20px]
                  lg:text-[24px] lg:leading-[24px]
                  xl:text-[32px] xl:leading-[32px]
                  2xl:text-[38px] 2xl:leading-[38px]
                  1821:text-[45px] 1821:leading-[45px]
                  font-[700]
                  tracking-[-0.04em]">
                  Tradespeople get financial power without needing licensing up front
                </span>
              </motion.div>

              <motion.div
                className="rounded-[24px] p-2 border border-[#0D1318] flex flex-row items-center gap-3 sm:gap-4"
                variants={cardVariant}
              >
                <motion.div
                  className=" p-2 sm:p-3 flex-shrink-0"
                >
                  <img
                    src={finance || "/placeholder.svg"}
                    alt="Financing icon"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16"
                  />
                </motion.div>
                <span className="text-[#0D1318] text-[16px] leading-[16px]
                  sm:text-[18px] sm:leading-[18px]
                  md:text-[20px] md:leading-[20px]
                  lg:text-[24px] lg:leading-[24px]
                  xl:text-[32px] xl:leading-[32px]
                  2xl:text-[38px] 2xl:leading-[38px]
                  1821:text-[45px] 1821:leading-[45px]
                  font-[700]
                  tracking-[-0.04em]">
                  Multi-discipline selling for more deals, more commissions
                </span>
              </motion.div>

              <motion.div
                className="rounded-[24px] p-2 border border-[#0D1318] flex flex-row items-center gap-3 sm:gap-4"
                variants={cardVariant}
              >
                <motion.div
                  className=" p-2 sm:p-3 flex-shrink-0"
                >
                  <img
                    src={tier || "/placeholder.svg"}
                    alt="High-quality installations icon"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16"
                  />
                </motion.div>
                <span className="text-[#0D1318] text-[16px] leading-[16px]
                  sm:text-[18px] sm:leading-[18px]
                  md:text-[20px] md:leading-[20px]
                  lg:text-[24px] lg:leading-[24px]
                  xl:text-[32px] xl:leading-[32px]
                  2xl:text-[38px] 2xl:leading-[38px]
                  1821:text-[45px] 1821:leading-[45px]
                  font-[700]
                  tracking-[-0.04em]">
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
