"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import contractor from "../../assets/img/contractor-bg.svg"
import training from "../../assets/img/training.svg"
import fast from "../../assets/img/fast.jpg"
import marketing from "../../assets/img/marketing.jpg"
import installation from "../../assets/img/installation.jpg"
import doubleArrow from "../../assets/icons/double-arrow.svg"

const ForContractor = () => {
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

  const itemVariants = {
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

  const cardVariants = {
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

  const contractorImageVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    show: {
      scale: 1,
      opacity: 0.8,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  }

  const tagVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  }

  const headingWords =
    "We help ambitious professionals build real careers and offer a clear path from sales rep to full installer ownership in multiple trades.".split(
      " ",
    )

  return (
    <motion.section
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 mt-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5">
          {/* Left side - Dark section with content */}
          <motion.div className="flex-1" variants={itemVariants}>
            <div className="relative bg-[#0D1318] rounded-xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 text-[#F6F6F4] h-full flex flex-col justify-center">
              <motion.img
                src={contractor}
                alt=""
                className="absolute right-4 sm:right-6 md:right-8 lg:right-10 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-60 opacity-80 sm:opacity-100"
                variants={contractorImageVariants}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="w-fit inline-block rounded-sm border-2 border-[#F6F6F4] py-1 font-semibold uppercase tracking-[0.25em] text-[#F6F6F4] text-[9px] sm:text-[14px] md:text-[14px] px-4 mb-10"
                  variants={tagVariants}
                >
                  FOR CONTRACTORS & SALES PROFESSIONALS
                </motion.div>

                <motion.h2
                  className="mb-4 sm:mb-5 md:mb-6 text-[#F6F6F4]
                  text-[16px] leading-[16px]
                  sm:text-[18px] sm:leading-[18px]
                  md:text-[20px] md:leading-[20px]
                  lg:text-[24px] lg:leading-[24px]
                  xl:text-[32px] xl:leading-[32px]
                  2xl:text-[38px] 2xl:leading-[38px]
                  1821:text-[45px] 1821:leading-[45px]
                  font-[700]
                  tracking-[-0.02em]"
                >
                  We help ambitious <br />
                  professionals build <span className="text-[#FF4C16]">real <br /> careers</span> and offer a clear path <br />
                  from sales rep to full installer<br />
                  ownership in multiple trades.
                </motion.h2>

                <motion.p
                  className="mb-6 sm:mb-8 md:mb-10 
                  text-[14px] leading-[20px]
sm:text-[16px] sm:leading-[24px]
md:text-[18px] md:leading-[28px]
2xl:text-[18px] 2xl:leading-[26px]
1821:text-[20px] 1821:leading-[28px] font-[600]
                  "
                  variants={itemVariants}
                >
                  Whether you're starting out or ready to own your own install division, ASCND provides:
                </motion.p>

                <motion.div variants={itemVariants}>
                  <Link
                    to="/contractor"
                    className="inline-flex items-center justify-between gap-2 rounded-md bg-[#F6F6F4] px-4 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-[10px] sm:text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition"
                    aria-label="Learn more for contractors"
                  >
                    <span>LEARN MORE</span>
                    <img src={doubleArrow} alt="" className="" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Grid of feature cards */}
          <motion.div className="flex-1" variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-full">
              <motion.div
                className="relative rounded-xl overflow-hidden cursor-pointer min-h-[200px] sm:min-h-[150px]"
                variants={cardVariants}
              >
                <img
                  src={training || "/placeholder.svg"}
                  alt="Training & tools"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#FF4C16] mix-blend-multiply opacity-100 rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 md:p-5 z-10">
                  <h3 className="text-[#F6F6F4] text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[30px] xl:leading-[32px]
2xl:text-[30px] 2xl:leading-[36px]
1821:text-[30px] 1821:leading-[36px]
tracking-[-0.02em] font-[700]">
                    Training & tools
                  </h3>
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-xl overflow-hidden cursor-pointer min-h-[200px] sm:min-h-[150px] bg-black/10"
                variants={cardVariants}
              >
                <img
                  src={fast || "/placeholder.svg"}
                  alt="Fast, consistent fulfillment"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
                />
                <div className="absolute bottom-0 left-0 right-0  p-3 sm:p-4 md:p-5 z-10">
                  <h3 className="text-[#4B5361] text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[30px] xl:leading-[32px]
2xl:text-[30px] 2xl:leading-[36px]
1821:text-[30px] 1821:leading-[36px]
tracking-[-0.02em] font-[700]">
                    Fast, consistent fulfillment
                  </h3>
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-xl overflow-hidden cursor-pointer min-h-[200px] sm:min-h-[150px] bg-black/10"
                variants={cardVariants}
              >
                <img
                  src={marketing || "/placeholder.svg"}
                  alt="Marketing & lead gen support"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
                />
                <div className="absolute bottom-0 left-0 right-0  p-3 sm:p-4 md:p-5 z-10">
                  <h3 className="text-[#4B5361] text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[30px] xl:leading-[32px]
2xl:text-[30px] 2xl:leading-[36px]
1821:text-[30px] 1821:leading-[36px]
tracking-[-0.02em] font-[700]">
                    Marketing & lead gen support
                  </h3>
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-xl overflow-hidden cursor-pointer min-h-[200px] sm:min-h-[150px] bg-black/10"
                variants={cardVariants}
              >
                <img
                  src={installation || "/placeholder.svg"}
                  alt="Installation ownership"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 z-10">
                  <h3 className="text-[#4B5361] text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[30px] xl:leading-[32px]
2xl:text-[30px] 2xl:leading-[36px]
1821:text-[30px] 1821:leading-[36px]
tracking-[-0.02em] font-[700]">
                    Installation ownership without the back-end burden
                  </h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ForContractor