"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import welcome from "../../assets/img/welcome.svg"
import logoOutlined from "../../assets/icons/logo-outlined.svg"
import logo from "../../assets/icons/logo-white.svg"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.2 },
  },
}

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
}

const logoVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        variants={logoVariants}
      >
        <motion.img
          src={logoOutlined || "/placeholder.svg"}
          alt="Logo Outlined"
          className="w-96"
          variants={logoVariants}
        />
      </motion.div>

      <motion.div className="flex flex-col items-center gap-66 z-10" variants={fadeUp}>
        <motion.div className="flex flex-col items-start mt-72" variants={fadeUp}>
          <motion.h3 className="text-[#FF4C16]" variants={fadeUp}>
            Welcome to
          </motion.h3>

          <motion.img src={logo} alt="Logo" className="w-60" variants={fadeUp} />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md px-4 sm:px-0"
          variants={fadeUp}
        >
          <MotionLink
            to="/home-owner"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#F6F6F4] text-[#0D1318] rounded-md  transition-colors text-[11px] font-[700] flex-1 sm:flex-none whitespace-nowrap tracking-[0.25em] leading-[16px]"
            variants={fadeUp}
          >
            ASCND YOUR HOME
          </MotionLink>
          <MotionLink
            to="/business"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#FF4C16] text-[#F6F6F4] rounded-md  transition-colors text-[11px] font-[700] flex-1 sm:flex-none whitespace-nowrap tracking-[0.25em] leading-[16px]"
            variants={fadeUp}
          >
            ASCND YOUR BUSINESS
          </MotionLink>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Welcome