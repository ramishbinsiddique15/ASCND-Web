"use client"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
      duration: 0.8,
    },
  },
}

const tagVariant = {
  hidden: {
    y: 60,
    opacity: 0,
    scale: 0.8,
    rotateX: -90,
    filter: "blur(10px)",
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
}

const wordVariant = {
  hidden: {
    y: 80,
    opacity: 0,
    scale: 0.9,
    rotateY: -15,
    filter: "blur(8px)",
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      damping: 25,
      stiffness: 120,
    },
  },
}

const fadeUp = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.95,
    filter: "blur(6px)",
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      damping: 30,
      stiffness: 150,
    },
  },
}

const dividerVar = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    rotateZ: -5,
  },
  show: {
    scaleX: 1,
    opacity:  1,
    rotateZ: 0,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 1.2,
    },
  },
}

const floatingElement = {
  hidden: {opacity: 0, scale: 0 },
  show: {
    opacity: [0, 0.1, 0.05],
    scale: [0, 1.2, 1],
    transition: {
      duration: 3,
      ease: "easeOut",
      delay: 0.5,
    },
  },
}

const ContractorHero = () => {
  return (
    <motion.section className="w-full relative overflow-hidden" initial="hidden" animate="show">
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#FF4C16]/10 to-transparent"
        variants={floatingElement}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#FF4C16]/5 to-transparent"
        variants={floatingElement}
        animate={{
          y: [0, 15, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

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
              className="w-fit inline-block rounded-sm border-2 border-[#FF4C16] px-2 py-1 font-semibold uppercase tracking-[0.25em] text-[#FF4C16] text-[9px] sm:text-[14px] md:text-[14px]"
              style={{
                transformOrigin: "center",
                transformStyle: "preserve-3d",
              }}
            >
              CONTRACTOR SERVICES
            </motion.span>
            <h2 className="mt-3 font-extrabold text-[#0D1318] sm:mt-4 md:mt-5 
            text-[30px] leading-[32px]
sm:text-[36px] sm:leading-[40px]
md:text-[48px] md:leading-[48px]
lg:text-[60px] lg:leading-[56px]
xl:text-[72px] xl:leading-[64px]
2xl:text-[90px] 2xl:leading-[72px]
1821:text-[102px] 1821:leading-[80px]
tracking-[-0.04em]
            ">
              <motion.span
                variants={wordVariant}
                className="block"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
              >
                Start Something.
              </motion.span>
              <motion.span
                variants={wordVariant}
                className="block"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
              >
                Bigger. Build Your
              </motion.span>
              <motion.span
                variants={wordVariant}
                className="block"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
              >
                Own Installation
              </motion.span>
              <motion.span
                variants={wordVariant}
                className="block"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
              >
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
              className="font-bold text-[#0D1318] 
              text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[30px] xl:leading-[32px]
2xl:text-[30px] 2xl:leading-[36px]
1821:text-[30px] 1821:leading-[36px]
tracking-[-0.02em]
              "
            >
              Whether you're a skilled tradesperson, independent rep, or contractor ready to grow, ASCND gives you the
              blueprint to launch, scale, and own your installation business across the highest-demand home services in
              the market today.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div className="border-t border-[#B0B8C7] origin-left relative overflow-hidden" variants={dividerVar}>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF4C16]/30 to-transparent"
            initial={{ x: "-100%", scaleY: 0 }}
            animate={{
              x: "100%",
              scaleY: [0, 2, 0],
            }}
            transition={{
              duration: 2.5,
              delay: 2,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ContractorHero
