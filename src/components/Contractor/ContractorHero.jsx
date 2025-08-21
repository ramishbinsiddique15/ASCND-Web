"use client"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.08 },
  },
}

const tagVariant = {
  hidden: {
    y: 40,
    opacity: 0,
    rotateX: 25,
    filter: "blur(8px)",
    scale: 0.9,
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.8,
      duration: 0.8,
    },
  },
}

const wordVariant = {
  hidden: {
    y: 60,
    opacity: 0,
    rotateX: 30,
    filter: "blur(12px)",
    scale: 0.8,
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 1,
      duration: 0.9,
    },
  },
}

const fadeUp = {
  hidden: {
    y: 50,
    opacity: 0,
    rotateY: 15,
    filter: "blur(10px)",
    scale: 0.95,
  },
  show: {
    y: 0,
    opacity: 1,
    rotateY: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 16,
      mass: 0.9,
      duration: 0.85,
    },
  },
}

const dividerVar = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    rotateZ: -2,
  },
  show: {
    scaleX: 1,
    opacity: 1,
    rotateZ: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      duration: 1.2,
      delay: 0.6,
    },
  },
}

const ContractorHero = () => {
  return (
    <motion.section className="w-full" initial="hidden" animate="show">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6  ">
        {/* Content grid */}
        <motion.div
          className="grid grid-cols-1 items-stretch gap-6 pb-6 pt-8 sm:gap-8 sm:pb-8 sm:pt-10 md:grid-cols-12 md:gap-14 md:pb-10 md:pt-14 md:min-h-[380px] lg:min-h-[460px] lg:gap-24 lg:pt-16"
          variants={container}
        >
          {/* Left: Tag + Headline */}
          <motion.div className="md:col-span-7 flex h-full flex-col justify-end md:pr-6 lg:pr-10" variants={container}>
            <motion.span
              variants={tagVariant}
              className="w-fit inline-block rounded-sm border-2 border-[#FF4C16] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#FF4C16] sm:px-3 sm:text-[10px] md:text-[11px]"
            >
              CONTRACTOR SERVICES
            </motion.span>
            <h2 className="mt-3 font-extrabold leading-[0.8] text-[#0b0c0e] sm:mt-4 md:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
              <motion.span variants={wordVariant} className="block md:whitespace-normal xl:whitespace-nowrap">
                Start Something.
              </motion.span>
              <motion.span variants={wordVariant} className="block md:whitespace-normal xl:whitespace-nowrap">
                Bigger. Build Your
              </motion.span>
              <motion.span variants={wordVariant} className="block md:whitespace-normal xl:whitespace-nowrap">
                Own Installation
              </motion.span>
              <motion.span variants={wordVariant} className="block md:whitespace-normal xl:whitespace-nowrap">
                Company.
              </motion.span>
            </h2>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            className="md:col-span-5 flex h-full flex-col justify-end mt-6 md:mt-0 md:pl-6 lg:pl-10"
            variants={container}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl"
            >
              Whether you're a skilled tradesperson, independent rep, or contractor ready to grow, ASCND gives you the
              blueprint to launch, scale, and own your installation business across the highest-demand home services in
              the market today.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bottom divider line */}
        <motion.div className="border-t border-[#0D1318] origin-left" variants={dividerVar} />
      </div>
    </motion.section>
  )
}

export default ContractorHero
