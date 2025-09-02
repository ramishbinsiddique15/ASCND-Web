"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import summit from "../../assets/img/summit.svg"
import polymer from "../../assets/img/polymer.svg"
import doubleArrow from "../../assets/icons/double-arrow-blue.svg"
import logo from "../../assets/icons/logo.svg"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const taglineVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const headingVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
}

const pillVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const logoVariants = {
  hidden: {
    opacity: 0,
    rotateY: -180,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1.3,
      duration: 1.3,
    },
  },
}

const buttonVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const backgroundImageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      delay: 0.8,
    },
  },
}

const shapesImageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.0,
      delay: 0.4,
    },
  },
}

const Summit = () => {
  return (
    <motion.div
      className="relative min-h-screen overflow-hidden pt-32 sm:pt-64 md:pt-72 lg:pt-96 mt-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      style={{ perspective: "1000px", backgroundColor: "#105CE9" }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${summit})` }}
        variants={backgroundImageVariants}
      />

      {/* Main content */}
      <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-12 md:py-16 mx-auto mt-28">
        <div className="flex items-end justify-between mb-10">
          <motion.div variants={taglineVariants} className=" flex-shrink-0 ">
            <p className="text-[#F6F6F4] 
            text-[16px] leading-[16px]
            sm:text-[18px] sm:leading-[18px]
            md:text-[20px] md:leading-[20px]
            lg:text-[24px] lg:leading-[24px]
            xl:text-[32px] xl:leading-[32px]
            2xl:text-[38px] 2xl:leading-[38px]
            1821:text-[45px] 1821:leading-[45px]
            font-[700]
            tracking-[-0.02em]">
              Earn like an installer—
              <br />
              without becoming one
              <br />
              overnight
            </p>
          </motion.div>

          
            <motion.img
            variants={shapesImageVariants}
              src={polymer || "/placeholder.svg"}
              alt="Geometric shapes"
              className="hidden sm:block w-[40%] sm:w-[50%] md:w-[60%] max-w-none"
            />
        </div>

        <motion.div
          variants={headingVariants}
          className="mb-4 sm:mb-5 md:mb-6"
        >
          <h1 className="text-[#F6F6F4]
          text-[36px] leading-[32px]
          sm:text-[48px] sm:leading-[40px]
          md:text-[60px] md:leading-[52px]
          lg:text-[72px] lg:leading-[60px]
          xl:text-[120px] xl:leading-[100px]
          2xl:text-[150px] 2xl:leading-[124px]
          1821:text-[169px] 1821:leading-[144px]
          tracking-[-0.06em] font-[800]">
            Summit Program
          </h1>
        </motion.div>

        <motion.div
          variants={dividerVariants}
          className="w-full h-0.5 bg-[#F6F6F4] mb-8 sm:mb-10 md:mb-12"
          style={{ transformOrigin: "left center" }}
        ></motion.div>

        {/* Layout container for bullets and right side content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <motion.div variants={containerVariants} className="space-y-3 sm:space-y-4 w-full lg:w-auto">
            <motion.div
              variants={pillVariants}
              className="border-2 border-[#F6F6F4] rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 w-fit"
            >
              <p className="text-[#F6F6F4]
                text-[14px] leading-[20px]
                sm:text-[16px] sm:leading-[24px]
                md:text-[18px] md:leading-[28px]
                2xl:text-[18px] 2xl:leading-[26px]
                1821:text-[20px] 1821:leading-[28px] font-[600]">
                Keep 100% of your commission + % of install margin
              </p>
            </motion.div>

            <motion.div
              variants={pillVariants}
              className="border-2 border-[#F6F6F4] rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 w-fit"
            >
              <p className="text-[#F6F6F4]
                text-[14px] leading-[20px]
                sm:text-[16px] sm:leading-[24px]
                md:text-[18px] md:leading-[28px]
                2xl:text-[18px] 2xl:leading-[26px]
                1821:text-[20px] 1821:leading-[28px] font-[600]">
                Maintain control while we handle fulfillment
              </p>
            </motion.div>

            <motion.div
              variants={pillVariants}
              className="border-2 border-[#F6F6F4] rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 w-fit"
            >
              <p className="text-[#F6F6F4]
                text-[14px] leading-[20px]
                sm:text-[16px] sm:leading-[24px]
                md:text-[18px] md:leading-[28px]
                2xl:text-[18px] 2xl:leading-[26px]
                1821:text-[20px] 1821:leading-[28px] font-[600]">
                Works across all ASCND trades
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-col items-start lg:items-end space-y-4 sm:space-y-5 md:space-y-6 w-full lg:w-auto"
          >
            <motion.img
              variants={logoVariants}
              src={logo || "/placeholder.svg"}
              alt="ASCND Logo"
              className="invert h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
              style={{
                imageRendering: "crisp-edges",
                imageRendering: "-webkit-optimize-contrast",
                imageRendering: "optimize-contrast",
                msInterpolationMode: "nearest-neighbor",
              }}
              loading="lazy"
            />

            <motion.div variants={buttonVariants}>
              <Link
                to="/business-apply"
                className="bg-[#F6F6F4] text-[#105CE9] px-6 py-2.5 sm:px-20 sm:py-3 md:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-colors duration-200 flex items-center gap-2 w-fit text-[14px] tracking-[0.25em] leading-[22px]"
              >
                APPLY NOW
                <img
                  src={doubleArrow || "/placeholder.svg"}
                  alt="Arrow"
                  className="flex-shrink-0"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Summit