"use client"
import { motion } from "framer-motion"
import grow from "../../assets/img/growth.jpg"

// Image clip path to match the reference screenshot - angled top-left corner
const bevel = 200
const IMAGE_CLIP = `polygon(
  ${bevel}px 0,
  100% 0,
  100% calc(100% - ${bevel}px),
  calc(100% - ${bevel}px) 100%,
  0 100%,
  0 ${bevel}px
)`

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

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 80,
    rotateY: -25,
    scale: 0.8,
    filter: "blur(15px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 80,
      damping: 18,
      mass: 1.2,
    },
  },
}

const Growth = () => {
  return (
    <motion.section
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ perspective: "1000px" }} // Added perspective for 3D effects
    >
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-12 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Left: Outlined clipped text block */}
          <motion.div
            className="md:col-span-6"
            variants={textVariants} // Updated to use enhanced textVariants
            style={{ transformStyle: "preserve-3d" }} // Added 3D transform style
          >
            <div className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px]">
              {/* Content */}
              <div className="relative rounded-xl sm:rounded-2xl py-6 sm:py-8 md:py-10 lg:py-12">
                <h3 className="text-[22px] font-extrabold leading-[0.85] text-[#0b0c0e] sm:text-[26px] sm:leading-[0.8] md:text-[32px] lg:text-[40px] xl:text-[48px]">
                  We don't just help you
                  <br /> get into the industry,
                  <br />
                  <span className="text-[#FF4C16]"> we give you a clear</span>
                  <br />
                  <span className="text-[#FF4C16]"> path to grow in it.</span>
                </h3>
                <p className="mt-3 ml-auto w-[70%] text-[12px] font-semibold tracking-tight text-[#0D1318]/70 leading-[0.8] sm:mt-4 sm:w-[65%] sm:text-[13px] md:w-[60%] md:text-[14px] lg:text-[15px]">
                  At ASCND, we believe that smart home upgrades don’t just improve your space today; they build
                  long-term value, efficiency, and comfort.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image with angled top-left corner clip */}
          <motion.div
            className="md:col-span-6"
            variants={imageVariants} // Updated to use enhanced imageVariants
            whileHover={{
              scale: 1.02,
              rotateY: 2,
              transition: { duration: 0.3, ease: "easeOut" },
            }} // Added interactive hover effects
            style={{ transformStyle: "preserve-3d" }} // Added 3D transform style
          >
            <div className="relative h-48 overflow-hidden rounded-xl sm:h-56 sm:rounded-2xl md:h-[320px] lg:h-[380px] xl:h-[420px]">
              <img
                src={grow || "/placeholder.svg"}
                alt="Home should grow with you"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105" // Added hover scale effect
                style={{ clipPath: IMAGE_CLIP, WebkitClipPath: IMAGE_CLIP }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Growth
