"use client"
import { motion } from "framer-motion"
import bg from "../../assets/icons/background.png"

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

const backgroundVar = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.9,
    filter: "blur(5px)",
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.6,
      type: "spring",
      damping: 30,
      stiffness: 150,
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

const HomeOwnerHero = () => {
  return (
    <motion.section className="w-full relative " initial="hidden" animate="show">
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

      <motion.img
        src={bg}
        className="absolute right-0 -z-50 w-[60%] sm:w-[50%] md:w-[45%] lg:w-[40%]"
        alt=""
        variants={backgroundVar}
      />

      <div className="mx-auto max-w-[100rem] px-4 sm:px-6  ">
        {/* Content grid */}
        <motion.div
          className="grid grid-cols-1 items-stretch gap-6 pb-6 pt-8 sm:gap-8 sm:pb-8 sm:pt-10 md:grid-cols-12 md:gap-14 md:pb-10 md:pt-14 md:min-h-[380px] lg:min-h-[460px] lg:gap-24 lg:pt-16"
          variants={container}
        >
          {/* Left: Tag + Headline */}
          <motion.div
            className="md:col-span-10 flex h-full flex-col md:pr-6 lg:pr-10 pt-6 sm:pt-8 md:pt-10"
            variants={container}
          >
            <motion.span
              variants={tagVariant}
              className="w-fit inline-block rounded-sm border-2 border-[#FF4C16] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#FF4C16] sm:px-3 sm:text-[10px] md:text-[11px]"
              style={{
                transformOrigin: "center",
                transformStyle: "preserve-3d",
              }}
            >
              ASCND HOME SERVICES
            </motion.span>
            <h2 className="mt-3 font-extrabold leading-[0.8] text-[#0b0c0e] sm:mt-4 md:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <motion.span
                variants={wordVariant}
                className="block"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
              >
                Turn projects into
              </motion.span>
              <motion.span
                variants={wordVariant}
                className="block"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
              >
                progress and progress
              </motion.span>
              <motion.span
                variants={wordVariant}
                className="block"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
              >
                into equity.
              </motion.span>
            </h2>
          </motion.div>

          {/* Right: Copy */}
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
    </motion.section>
  )
}

export default HomeOwnerHero
