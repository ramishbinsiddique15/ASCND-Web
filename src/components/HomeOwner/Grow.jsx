"use client"
import { motion } from "framer-motion"
import grow from "../../assets/img/grow.svg"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.1 },
  },
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: 45,
    scale: 0.9,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
}

const Grow = () => {
  return (
    <motion.section
      className="max-w-[100rem] mx-auto relative mt-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ perspective: "1000px" }}
    >
      <img
  src={grow || "/placeholder.svg"}
  alt="Growth background"
  className="absolute top-0 bottom-0 right-4 h-full z-0"
/>
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          <motion.div
            className="relative z-10"
            variants={textVariants}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] rounded-xl sm:rounded-2xl py-6 sm:py-8 md:py-10 lg:py-12 sm:w-1/2">
              <h3 className="font-extrabold leading-[0.85] text-[#0D1318] text-[28px]
    sm:text-[36px]
    md:text-[44px]
    lg:text-[52px]
    xl:text-[59px]
    2xl:text-[69px]
    1821:text-[79px]
    tracking-[-0.04em]
">
                Your home should
                <br /> grow with you, not
                <br /> work against you.
              </h3>
              <p className="mt-3 ml-auto w-[70%] font-semibold text-[#0D1318]/70 leading-[28px] sm:mt-4 sm:w-[65%] text-[20px]
    tracking-[0em]">
                At ASCND, we believe that smart home upgrades don't just improve your space today; they build
                long-term value, efficiency, and comfort.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Grow
