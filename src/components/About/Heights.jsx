"use client"
import { motion } from "framer-motion"
import heights from "../../assets/img/heights.png"
import logo from "../../assets/icons/white-logo.svg"

const Heights = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const logoVariants = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  return (
    <motion.section
      className="relative w-full min-h-screen overflow-hidden pt-20 sm:pt-32 md:pt-36 lg:pt-44 pb-16 sm:pb-32 md:pb-48 lg:pb-72 mt-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.div className="absolute inset-0" variants={itemVariants}>
        <img
          src={heights || "/placeholder.svg"}
          alt="Mountain landscape"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-10 h-full flex items-center">
        <div className=" mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div className="text-[#F6F6F4] text-center md:text-left" variants={itemVariants}>
              <motion.div className="mb-4 sm:mb-5 md:mb-6 flex justify-center md:justify-start" variants={logoVariants}>
                <img
                  src={logo || "/placeholder.svg"}
                  alt="ASCND Logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
              </motion.div>

              <motion.hr
                className="border-t-2 border-[#F6F6F4] w-full mb-6 sm:mb-7 md:mb-8"
                variants={itemVariants}
              />

              <motion.h1
                className="text-[30px] leading-[32px]
sm:text-[36px] sm:leading-[40px]
md:text-[48px] md:leading-[48px]
lg:text-[60px] lg:leading-[56px]
xl:text-[72px] xl:leading-[64px]
2xl:text-[90px] 2xl:leading-[72px]
1821:text-[102px] 1821:leading-[80px]
tracking-[-0.04em] font-[700]"
                variants={container}
              >
                <motion.span className="inline-block" variants={itemVariants}>
                  Reaching
                </motion.span>
                <br />
                <motion.span className="text-[#FF4C16] inline-block" variants={itemVariants}>
                  New Heights
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div
              className="text-[#F6F6F4] space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left"
              variants={itemVariants}
            >
              <motion.p className="text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[30px] xl:leading-[32px]
2xl:text-[30px] 2xl:leading-[36px]
1821:text-[30px] 1821:leading-[36px]
tracking-[-0.02em] font-[700]" variants={itemVariants}>
                To help people rise. In their homes. In their businesses. In their lives.
              </motion.p>

              <motion.p className="text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[30px] xl:leading-[32px]
2xl:text-[30px] 2xl:leading-[36px]
1821:text-[30px] 1821:leading-[36px]
tracking-[-0.02em] font-[700]" variants={itemVariants}>
                We remove the complexity, the slowdowns, and the gatekeepers—and replace them with ownership, clarity,
                and profit.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </motion.section>
  )
}

export default Heights