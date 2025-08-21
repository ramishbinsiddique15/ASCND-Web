"use client"
import { motion } from "framer-motion"
import summit from "../../assets/img/trailblazer.png"
import polymer from "../../assets/img/shapes.png"
import doubleArrow from "../../assets/icons/double-arrow-black.png"
import logo from "../../assets/icons/logo-gold.png"

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
    filter: "blur(10px)",
    y: 60,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
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
    filter: "blur(15px)",
    x: -80,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      mass: 1.5,
      duration: 1.4,
    },
  },
}

const dividerVariants = {
  hidden: {
    scaleX: 0,
    rotateZ: -5,
    filter: "blur(5px)",
  },
  visible: {
    scaleX: 1,
    rotateZ: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      duration: 1.0,
      delay: 0.3,
    },
  },
}

const pillVariants = {
  hidden: {
    opacity: 0,
    rotateX: 20,
    scale: 0.9,
    filter: "blur(8px)",
    y: 40,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
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
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
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
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 18,
      mass: 1.0,
      duration: 1.0,
    },
  },
}

const backgroundImageVariants = {
  hidden: {
    scale: 1.1,
    filter: "blur(8px)",
    opacity: 0.8,
  },
  visible: {
    scale: 1,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      mass: 1.8,
      duration: 2.0,
    },
  },
}

const shapesImageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotateZ: -15,
    filter: "blur(12px)",
    x: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    filter: "blur(0px)",
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      mass: 1.4,
      duration: 1.6,
      delay: 0.4,
    },
  },
}

const TrailBlazer = () => {
  return (
    <motion.div
      className="relative min-h-screen overflow-hidden pt-32 sm:pt-48 md:pt-64 lg:pt-72"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${summit})` }}
        variants={backgroundImageVariants}
      />

      <motion.div
        className="absolute top-20 sm:top-32 md:top-44 -right-48 sm:-right-64 md:-right-80 lg:-right-96"
        variants={shapesImageVariants}
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{
          scale: 1.05,
          rotateZ: 2,
          transition: { duration: 0.3 },
        }}
      >
        <img
          src={polymer || "/placeholder.svg"}
          alt="Geometric shapes"
          className="w-[80%] sm:w-[70%] md:w-[60%] max-w-none"
        />
      </motion.div>

      <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-12  md:py-16  max-w-7xl mx-auto">
        <motion.div variants={taglineVariants} className="" style={{ transformStyle: "preserve-3d" }}>
          <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-[0.8] max-w-xs sm:max-w-sm md:max-w-md">
            Be first to market.Lock your
            <br />
            postion. Get paid on every
            <br />
            deal in your region
          </p>
        </motion.div>

        <motion.div variants={headingVariants} className="mb-6" style={{ transformStyle: "preserve-3d" }}>
          <h1 className="text-[#FF990A] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.8]">
            Trailblazer Program
          </h1>
        </motion.div>

        <motion.div
          variants={dividerVariants}
          className="w-full h-0.5 bg-[#FF990A] mb-8 sm:mb-10 md:mb-12"
          style={{ transformOrigin: "left" }}
        ></motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <motion.div variants={containerVariants} className="space-y-3 sm:space-y-4 w-full lg:w-auto">
            <motion.div
              variants={pillVariants}
              className="border-2 border-[#FF990A] rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 w-fit"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FF990A",
                color: "#0D1318",
                transition: { duration: 0.2 },
              }}
            >
              <motion.p className="text-[#FF990A] text-sm sm:text-base font-medium" whileHover={{ color: "#0D1318" }}>
                The first ASCND dealer in a state secures an override (or per-unit in non-solar trades)
              </motion.p>
            </motion.div>

            <motion.div
              variants={pillVariants}
              className="border-2 border-[#FF990A] rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 w-fit"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FF990A",
                color: "#0D1318",
                transition: { duration: 0.2 },
              }}
            >
              <motion.p className="text-[#FF990A] text-sm sm:text-base font-medium" whileHover={{ color: "#0D1318" }}>
                Maintain control while we handle fulfillment
              </motion.p>
            </motion.div>

            <motion.div
              variants={pillVariants}
              className="border-2 border-[#FF990A] rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 w-fit"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FF990A",
                color: "#0D1318",
                transition: { duration: 0.2 },
              }}
            >
              <motion.p className="text-[#FF990A] text-sm sm:text-base font-medium" whileHover={{ color: "#0D1318" }}>
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
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
              style={{
                imageRendering: "crisp-edges",
                imageRendering: "-webkit-optimize-contrast",
                imageRendering: "optimize-contrast",
                msInterpolationMode: "nearest-neighbor",
                transformStyle: "preserve-3d",
              }}
              loading="lazy"
              whileHover={{
                scale: 1.1,
                rotateY: 5,
                boxShadow: "0 10px 30px rgba(255, 153, 10, 0.3)",
                transition: { duration: 0.3 },
              }}
            />

            <motion.button
              variants={buttonVariants}
              className="bg-[#FF990A] text-[#0D1318] px-6 py-2.5 sm:px-7 sm:py-3  md:py-3 rounded-lg font-semibold text-xs sm:text-sm tracking-wider hover:bg-[#FF990A]/90 transition-colors duration-200 flex items-center gap-2 w-fit"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 10px 25px rgba(255, 153, 10, 0.4)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              APPLY NOW
              <motion.img
                src={doubleArrow || "/placeholder.svg"}
                alt="Arrow"
                className="w-3 h-3 sm:w-4 sm:h-4"
                whileHover={{ x: 3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default TrailBlazer
