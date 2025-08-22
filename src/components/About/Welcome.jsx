"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import welcome from "../../assets/img/welcome.png"
import logoOutlined from "../../assets/icons/logo-outlined.png"
import logo from "../../assets/icons/logo-white.png"

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.18, staggerChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { y: 22, opacity: 0, filter: "blur(6px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      damping: 25,
      stiffness: 120,
    },
  },
}

const logoScale = {
  hidden: {
    scale: 0.4,
    opacity: 0,
    rotateY: -45,
    rotateX: 15,
    filter: "blur(15px)",
    transformOrigin: "center",
  },
  show: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
}

const buttonVar = {
  hidden: { y: 30, opacity: 0, filter: "blur(8px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      damping: 30,
      stiffness: 150,
    },
  },
}

const Welcome = () => {
  const MotionLink = motion(Link)
  return (
    <motion.div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-20"
      style={{ backgroundImage: `url(${welcome})` }}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div
        className="absolute inset-0 bg-[#0D1318] opacity-90 overflow-hidden"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Primary shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF4C16]/12 to-transparent"
          initial={{ x: "-100%", scaleY: 0, rotateZ: 2 }}
          animate={{
            x: "100%",
            scaleY: [0, 2.5, 0],
            rotateZ: [2, -1, 2],
          }}
          transition={{
            duration: 3,
            delay: 1.5,
            ease: "easeInOut",
          }}
        />

        {/* Secondary shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-white/4 to-transparent"
          initial={{ x: "100%", scaleX: 0 }}
          animate={{
            x: "-100%",
            scaleX: [0, 1.5, 0],
          }}
          transition={{
            duration: 2.5,
            delay: 2.8,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles effect */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FF4C16]/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        variants={logoScale}
        animate={{
          y: [0, -18, 0],
          rotateY: [0, 5, -3, 0],
          rotateX: [0, 2, -1, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          transformOrigin: "center",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.img
          src={logoOutlined || "/placeholder.svg"}
          alt="Logo Outlined"
          className="w-96"
          animate={{
            filter: [
              "drop-shadow(0 0 20px rgba(255, 76, 22, 0.3))",
              "drop-shadow(0 0 40px rgba(255, 76, 22, 0.5))",
              "drop-shadow(0 0 20px rgba(255, 76, 22, 0.3))",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </motion.div>

      {/* Buttons */}
      <motion.div className="flex flex-col items-center gap-66 z-10" variants={fadeUp}>
        <motion.div className="flex flex-col items-start mt-72" variants={fadeUp}>
          <motion.h3 className="text-[#FF4C16]" variants={fadeUp}>
            Welcome to
          </motion.h3>

          <motion.img src={logo} alt="Logo" className="w-60" variants={fadeUp} />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md px-4 sm:px-0"
          variants={buttonVar}
        >
          <MotionLink
            to="/home-owner"
            className="px-4 sm:px-6  py-2.5 sm:py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors text-sm sm:text-base font-medium flex-1 sm:flex-none whitespace-nowrap"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              filter: "brightness(1.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            ASCND YOUR HOME
          </MotionLink>
          <MotionLink
            to="/business"
            className="px-4 sm:px-6  py-2.5 sm:py-3 bg-[#FF4C16] text-white rounded-md hover:bg-[#FF4C16]/90 transition-colors text-sm sm:text-base font-medium flex-1 sm:flex-none whitespace-nowrap"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 10px 25px rgba(255, 76, 22, 0.4)",
              filter: "brightness(1.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            ASCND YOUR BUSINESS
          </MotionLink>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Welcome
