"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import summit from "../../assets/img/summit.png"
import polymer from "../../assets/img/polymer.png"
import doubleArrow from "../../assets/icons/double-arrow-blue.png"
import logo from "../../assets/icons/logo.png"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const taglineVariants = {
  hidden: {
    opacity: 0,
    rotateX: 45,
    scale: 0.9,
    blur: 10,
    y: 60,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    blur: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1.2,
      duration: 1.2,
    },
  },
}

const headingVariants = {
  hidden: {
    opacity: 0,
    rotateY: -25,
    scale: 0.8,
    blur: 15,
    x: -80,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    blur: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25,
      mass: 1.5,
      duration: 1.4,
    },
  },
}

const dividerVariants = {
  hidden: {
    scaleX: 0,
    rotateZ: -5,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    rotateZ: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 30,
      duration: 1.0,
      delay: 0.3,
    },
  },
}

const pillVariants = {
  hidden: {
    opacity: 0,
    rotateX: 20,
    scale: 0.85,
    blur: 8,
    y: 40,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    blur: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 22,
      mass: 1.1,
      duration: 1.1,
    },
  },
}

const logoVariants = {
  hidden: {
    opacity: 0,
    rotateY: -180,
    scale: 0.5,
    blur: 10,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    blur: 0,
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
  hidden: {
    opacity: 0,
    rotateX: 30,
    scale: 0.8,
    blur: 5,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    blur: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25,
      mass: 1.0,
      duration: 1.0,
    },
  },
}

const Summit = () => {
  return (
    <motion.div
      className="relative min-h-screen overflow-hidden pt-32 sm:pt-48 md:pt-64 lg:pt-72"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ perspective: "1000px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${summit})` }}
      ></div>

      {/* Gradient overlay that stays blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#105CE9]/50 to-[#105CE9]" />

      <div className="hidden md:block absolute top-20 sm:top-32 md:top-44 -right-48 sm:-right-64 md:-right-80 lg:-right-96">
        <img
          src={polymer || "/placeholder.svg"}
          alt="Geometric shapes"
          className="w-[40%] sm:w-[50%] md:w-[60%] max-w-none"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-12  md:py-16  max-w-7xl mx-auto">
        <motion.div variants={taglineVariants} className="" style={{ transformStyle: "preserve-3d" }}>
          <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-[0.8] max-w-full sm:max-w-md">
            Earn like an installer—
            <br />
            without becoming one
            <br />
            overnight
          </p>
        </motion.div>

        <motion.div
          variants={headingVariants}
          className="mb-4 sm:mb-5 md:mb-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.8]">
            Summit Program
          </h1>
        </motion.div>

        <motion.div
          variants={dividerVariants}
          className="w-full h-0.5 bg-white mb-8 sm:mb-10 md:mb-12"
          style={{ transformOrigin: "left center" }}
        ></motion.div>

        {/* Layout container for bullets and right side content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <motion.div variants={containerVariants} className="space-y-3 sm:space-y-4 w-full lg:w-auto">
            <motion.div
              variants={pillVariants}
              className="border-2 border-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 w-fit"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                transition: { duration: 0.2 },
              }}
              style={{ transformStyle: "preserve-3d", cursor: "default" }}
            >
              <motion.p
                className="text-white text-sm sm:text-base font-medium"
                whileHover={{
                  color: "#105CE9",
                  transition: { duration: 0.2 },
                }}
              >
                Keep 100% of your commission + % of install margin
              </motion.p>
            </motion.div>

            <motion.div
              variants={pillVariants}
              className="border-2 border-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 w-fit"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                transition: { duration: 0.2 },
              }}
              style={{ transformStyle: "preserve-3d", cursor: "default" }}
            >
              <motion.p
                className="text-white text-sm sm:text-base font-medium"
                whileHover={{
                  color: "#105CE9",
                  transition: { duration: 0.2 },
                }}
              >
                Maintain control while we handle fulfillment
              </motion.p>
            </motion.div>

            <motion.div
              variants={pillVariants}
              className="border-2 border-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 w-fit"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                transition: { duration: 0.2 },
              }}
              style={{ transformStyle: "preserve-3d", cursor: "default" }}
            >
              <motion.p
                className="text-white text-sm sm:text-base font-medium"
                whileHover={{
                  color: "#105CE9",
                  transition: { duration: 0.2 },
                }}
              >
                Works across all ASCND trades
              </motion.p>
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
                transformStyle: "preserve-3d",
              }}
              loading="lazy"
            />

            {(() => {
              const MotionLink = motion(Link)
              return (
            <MotionLink
              to="/business-apply"
              variants={buttonVariants}
              className="bg-white text-blue-600 px-6 py-2.5 sm:px-7 sm:py-3  md:py-3 rounded-lg font-semibold text-xs sm:text-sm tracking-wider hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 w-fit"
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 8px 25px rgba(255, 255, 255, 0.3)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              APPLY NOW
              <motion.img
                src={doubleArrow || "/placeholder.svg"}
                alt="Arrow"
                className="w-3 h-3 sm:w-4 sm:h-4"
                whileHover={{ x: 3, transition: { duration: 0.2 } }}
              />
            </MotionLink>)})()}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Summit
