"use client"
import { motion } from "framer-motion"
import bg from "../../assets/icons/background.svg"

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
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
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
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
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
    y: -50,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.6,
      type: "spring",
      damping: 30,
      stiffness: 100,
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
        className="absolute right-0 z-40 w-[60%] sm:w-[50%] md:w-[45%] lg:w-[40%]"
        alt=""
        variants={backgroundVar}
      />

      <div className="mx-auto  px-4 sm:px-6  ">
        {/* Content grid */}
        <motion.div
          className="grid grid-cols-1 items-stretch gap-6 pb-6 pt-8 sm:gap-8 sm:pb-8 sm:pt-10 md:grid-cols-12 md:gap-14 md:pb-10 md:pt-14 md:min-h-[380px] lg:min-h-[460px] lg:gap-24 lg:pt-16 "
          variants={container}
        >
          {/* Left: Tag + Headline */}
          <motion.div
            className="md:col-span-full flex h-full flex-col md:pr-6 lg:pr-10 pt-6 sm:pt-8 md:pt-10"
            variants={container}
          >
            <motion.span
              variants={tagVariant}
              className="w-fit text-center rounded-sm border-2 border-[#FF4C16] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] sm:px-3 sm:text-[14px] md:text-[14px] flex items-center justify-center mb-5"
              style={{
                transformOrigin: "center",
                transformStyle: "preserve-3d",
              }}
            >
              ASCND HOME SERVICES
            </motion.span>
            <h2 className="z-40 mt-3 text-[#0D1318]
              text-[36px] leading-[32px]
              sm:text-[48px] sm:leading-[40px]
              md:text-[60px] md:leading-[52px]
              lg:text-[72px] lg:leading-[60px]
              xl:text-[120px] xl:leading-[100px]
              2xl:text-[150px] 2xl:leading-[124px]
              1821:text-[169px] 1821:leading-[144px]
              tracking-[-0.06em] font-[800]
">
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

        <motion.div className="border-t border-[#0D1318] origin-left relative " variants={dividerVar}>
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
