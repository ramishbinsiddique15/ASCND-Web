"use client"
import { motion } from "framer-motion"
import heights from "../../assets/img/heights.png"
import logo from "../../assets/icons/white-logo.png"

const Heights = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      rotateX: 45,
      scale: 0.9,
      filter: "blur(10px)",
    },
    show: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1.2,
        duration: 1.2,
      },
    },
  }

  const logoVariants = {
    hidden: {
      y: -40,
      opacity: 0,
      rotateY: -180,
      scale: 0.5,
      filter: "blur(10px)",
    },
    show: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.8,
        duration: 1.0,
      },
    },
  }

  const wordVariants = {
    hidden: {
      y: 40,
      opacity: 0,
      rotateY: -15,
      scale: 0.9,
      filter: "blur(8px)",
    },
    show: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
        mass: 1.0,
      },
    },
  }

  const backgroundVariants = {
    hidden: {
      scale: 1.1,
      opacity: 0.8,
      filter: "blur(5px)",
    },
    show: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 25,
        mass: 1.5,
        duration: 1.8,
      },
    },
  }

  const dividerVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
      rotateZ: -5,
    },
    show: {
      scaleX: 1,
      opacity: 1,
      rotateZ: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.8,
        duration: 1.0,
      },
    },
  }

  return (
    <motion.section
      className="relative w-full min-h-screen overflow-hidden pt-20 sm:pt-32 md:pt-36 lg:pt-44 pb-16 sm:pb-32 md:pb-48 lg:pb-72"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.div className="absolute inset-0" variants={backgroundVariants}>
        <img
          src={heights || "/placeholder.svg"}
          alt="Mountain landscape"
          className="w-full h-full object-cover object-center grayscale"
        />
      </motion.div>

      {/* Orange overlay on mountains using the mountain image */}
      <div className="absolute inset-0">
        {/* Mountain image mirrored with opacity */}
        {/* <img 
          src={mountain || "/placeholder.svg"} 
          alt="Mountain overlay" 
          className="absolute inset-0 h-full w-full object-cover opacity-70 scale-x-[-1]"
        /> */}
        {/* Orange overlay with mix-blend-multiply like in Contact.jsx */}
        <div className="absolute inset-0 bg-[#FF4C16]/80 mix-blend-multiply opacity-100" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6   w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left side - Logo and heading */}
            <motion.div className="text-white text-center md:text-left" variants={itemVariants}>
              <motion.div
                className="mb-4 sm:mb-5 md:mb-6 flex justify-center md:justify-start"
                variants={logoVariants}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  boxShadow: "0 10px 30px rgba(255, 76, 22, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={logo || "/placeholder.svg"}
                  alt="ASCND Logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
              </motion.div>

              <motion.hr
                className="border-t-2 border-white w-full mb-6 sm:mb-7 md:mb-8 origin-left"
                variants={dividerVariants}
                style={{ transformOrigin: "left center" }}
              />

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.8]"
                variants={container}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                <motion.span className="inline-block" variants={wordVariants}>
                  Reaching
                </motion.span>
                <br />
                <motion.span className="text-[#FF4C16] inline-block" variants={wordVariants}>
                  New Heights
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Right side - Description text */}
            <motion.div
              className="text-white space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left"
              variants={itemVariants}
            >
              <motion.p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium" variants={itemVariants}>
                To help people rise. In their homes. In their businesses. In their lives.
              </motion.p>

              <motion.p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90" variants={itemVariants}>
                We remove the complexity, the slowdowns, and the gatekeepers—and replace them with ownership, clarity,
                and profit.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for better text contrast */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </motion.section>
  )
}

export default Heights
