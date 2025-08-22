"use client"
import { motion } from "framer-motion"
import about from "../../assets/img/about.png"

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

const textVariant = {
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
    opacity: 1,
    rotateZ: 0,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 1.2,
    },
  },
}

const floatingElement = {
  hidden: { opacity: 0, scale: 0 },
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

const imageVariant = {
  hidden: {
    scale: 1.1,
    filter: "blur(8px)",
    opacity: 0.8,
  },
  show: {
    scale: 1,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.8,
    },
  },
}

const AboutHero = () => {
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
              className="w-fit inline-block rounded-sm border-2 border-[#FF4C16] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#FF4C16] sm:px-3 sm:text-[10px] md:text-[11px]"
              style={{
                transformOrigin: "center",
                transformStyle: "preserve-3d",
              }}
            >
              ABOUT ASCND
            </motion.span>
            <h2 className="mt-3 font-extrabold leading-[0.8] text-[#0b0c0e] sm:mt-4 md:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <motion.span
                variants={wordVariant}
                className="block whitespace-nowrap"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
              >
                Enhance your
              </motion.span>
              <motion.span
                variants={wordVariant}
                className="block whitespace-nowrap"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
              >
                home. Elevate
              </motion.span>
              <motion.span
                variants={wordVariant}
                className="block whitespace-nowrap"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
              >
                your life.
              </motion.span>
            </h2>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            className="md:col-span-5 flex h-full flex-col justify-end mt-6 md:mt-0 md:pl-6 lg:pl-10"
            variants={container}
          >
            <motion.p
              variants={textVariant}
              className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl"
            >
              ASCND was built with a single belief: Everyone should have the power to improve their space - without the
              bottlenecks, middlemen, or outdated models.
            </motion.p>
            <motion.p
              variants={textVariant}
              className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base"
            >
              We're a new kind of home improvement company—one that empowers homeowners to take control of their
              upgrades and contractors to take control of their business - and in turn, provide a quality experience for
              both.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div className="border-t border-[#0D1318] origin-left relative overflow-hidden" variants={dividerVar}>
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

      <motion.img src={about} alt="" className="w-full" variants={imageVariant} />
    </motion.section>
  )
}

export default AboutHero
