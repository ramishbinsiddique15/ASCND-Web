"use client"
import { motion } from "framer-motion"
import path from "../../assets/img/path.png"
import logoWhite from "../../assets/icons/white-logo.svg"
import logoBlue from "../../assets/icons/logo-blue.svg"
import blueBullet from "../../assets/icons/blue-bullet.svg"
import whiteBullet from "../../assets/icons/white-bullet.svg"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
}

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: 25,
    scale: 0.9,
    filter: "blur(12px)",
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
    x: -80,
    rotateY: -20,
    scale: 1.1,
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
      damping: 20,
      mass: 1.2,
    },
  },
}

const textVariants = {
  hidden: {
    opacity: 0,
    x: 80,
    rotateY: 20,
    scale: 0.95,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.3,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 1.1,
    },
  },
}

const dividerVariants = {
  hidden: {
    scaleX: 0,
    rotateZ: -2,
    filter: "blur(3px)",
  },
  visible: {
    scaleX: 1,
    rotateZ: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.0,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: 30,
    rotateY: -10,
    scale: 0.85,
    filter: "blur(15px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 70,
      damping: 25,
      mass: 1.3,
    },
  },
}

const pillVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: 15,
    scale: 0.9,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
}

const Path = () => {
  return (
    <motion.section
      className="bg-[#F5F7FA] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 mt-28"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ perspective: "1000px" }}
    >
      <div className="mx-auto  px-4 sm:px-6">
        {/* Header Section - Exact match to image */}
        <motion.div
          className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#F6F6F4]"
          variants={headerVariants}
        >
          <div className="relative items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px]">
            {/* Left: People Image */}
            <motion.div variants={imageVariants} className="absolute left-0 top-0 w-[40%] sm:w-[35%] md:w-1/3 h-full">
              <img
                src={path || "/placeholder.svg"}
                alt="Two professionals discussing home improvements"
                className="w-full h-full object-cover opacity-30 sm:opacity-35 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
             [mask-repeat:no-repeat] [mask-size:100%] filter grayscale"
                onError={(e) => {
                  e.target.style.display = "none"
                  console.log("Image failed to load:", path)
                }}
              />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              variants={textVariants}
              className="px-4 pt-8 sm:px-6 sm:pt-12 md:pt-16 lg:pt-20 w-[85%] sm:w-[80%] md:w-[75%] ml-auto z-40 pb-6 sm:pb-8 flex items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px]"
            >
              <h2 className="z-10 text-[#0D1318] self-end
              sm:text-[36px] sm:leading-[29px]
md:text-[44px] md:leading-[36px]
lg:text-[52px] lg:leading-[42px]
xl:text-[59px] xl:leading-[48px]
2xl:text-[69px] 2xl:leading-[56px]
1821:text-[79px] 1821:leading-[64px]
                font-[800]
    tracking-[-0.04em]
              ">
                We've designed <span className="text-[#105CE9]">a clear path for homeowners to elevate their home</span>{" "}
                step-by-step—whether you're just getting started or ready to transform it all.
              </h2>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          variants={dividerVariants}
          className="w-full h-px bg-[#0D1318] mb-12 sm:mb-16 md:mb-20"
          style={{ transformOrigin: "left center" }}
        />

        {/* Phase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Phase 01 */}
          <motion.div
            variants={cardVariants}
            className="bg-[#105CE9] rounded-2xl p-4 sm:p-6 text-[#F6F6F4] relative overflow-hidden min-h-[380px] sm:min-h-[400px] flex flex-col"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-16 sm:mb-24 md:mb-32">
              <img src={whiteBullet || "/placeholder.svg"} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[30px] xl:leading-[32px]
2xl:text-[30px] 2xl:leading-[36px]
1821:text-[30px] 1821:leading-[36px]
tracking-[-0.02em] font-[700]">PHASE 01</span>
              <img src={logoWhite || "/placeholder.svg"} alt="ASCND Logo" className="w-5 h-5 sm:w-8 sm:h-8 ml-auto" />
            </div>

            <h3 className="mb-3 sm:mb-4 h-auto sm:h-[28px] flex items-end
            text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[32px] xl:leading-[40px]
2xl:text-[38px] 2xl:leading-[48px]
1821:text-[45px] 1821:leading-[48px]
font-[600]
tracking-[-0.02em]
            ">
              Start with the Essentials
            </h3>
            <p className="mb-3 sm:mb-4 h-auto 
            text-[14px] leading-[20px]
sm:text-[16px] sm:leading-[24px]
md:text-[18px] md:leading-[28px]
2xl:text-[18px] 2xl:leading-[26px]
1821:text-[20px] 1821:leading-[28px] font-[600]
            ">
              Begin by upgrading the systems that matter most—solar, HVAC, and roofing. These core improvements:
            </p>

            <hr className="border-t border-[#F6F6F4] mb-3 sm:mb-4" />

            {/* Pill buttons */}
            <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
              {[
                "Slash utility bills",
                "Improve energy efficiency",
                "Increase appraisal value",
                "Future-proof your home against rising energy costs",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={pillVariants}
                  className="inline-block border-2 border-[#F6F6F4] rounded-full px-2.5 py-1 
                  text-[11px] leading-[20px]
sm:text-[11px] sm:leading-[24px]
md:text-[12px] md:leading-[28px]
2xl:text-[14px] 2xl:leading-[26px]
1821:text-[16px] 1821:leading-[28px] font-[600]
                  "
                >
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phase 02 */}
          <motion.div
            variants={cardVariants}
            className="bg-[#E4E6E9] rounded-2xl p-4 sm:p-6 border-none relative overflow-hidden min-h-[380px] sm:min-h-[400px] flex flex-col"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-16 sm:mb-24 md:mb-32">
              <img src={blueBullet || "/placeholder.svg"} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[30px] xl:leading-[32px]
2xl:text-[30px] 2xl:leading-[36px]
1821:text-[30px] 1821:leading-[36px]
tracking-[-0.02em] font-[700] text-[#105CE9]">
                PHASE 02
              </span>
              <img src={logoBlue || "/placeholder.svg"} alt="ASCND Logo" className="w-5 h-5 sm:w-8 sm:h-8 ml-auto" />
            </div>

            <h3 className="text-[#105CE9] mb-3 sm:mb-4 h-auto sm:h-[28px] flex items-end
            text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[32px] xl:leading-[40px]
2xl:text-[38px] 2xl:leading-[48px]
1821:text-[45px] 1821:leading-[48px]
font-[600]
tracking-[-0.02em]">
              Expand Your Living Experience
            </h3>
            <p className="mb-3 sm:mb-4 text-[#105CE9] h-auto 
            text-[14px] leading-[20px]
sm:text-[16px] sm:leading-[24px]
md:text-[18px] md:leading-[28px]
2xl:text-[18px] 2xl:leading-[26px]
1821:text-[20px] 1821:leading-[28px] font-[600]
            ">
              Once the essentials are upgraded, elevate the experience with turf, epoxy flooring, and permanent
              lighting. These lifestyle upgrades:
            </p>

            <hr className="border-t border-[#105CE9] mb-3 sm:mb-4" />

            {/* Pill buttons */}
            <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
              {[
                "Boost curb appeal",
                "Modernize your living space",
                "Create low-maintenance beauty",
                "Add resale and comfort value",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={pillVariants}
                  className="inline-block border-2 border-[#105CE9] rounded-full px-2.5 py-1 
                  text-[11px] leading-[20px]
sm:text-[11px] sm:leading-[24px]
md:text-[12px] md:leading-[28px]
2xl:text-[14px] 2xl:leading-[26px]
1821:text-[16px] 1821:leading-[28px] font-[600]
                  text-[#105CE9]"
                >
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phase 03 */}
          <motion.div
            variants={cardVariants}
            className="bg-[#E4E6E9] rounded-2xl p-4 sm:p-6 border-none relative overflow-hidden min-h-[380px] sm:min-h-[400px] flex flex-col sm:col-span-2 lg:col-span-1"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-16 sm:mb-24 md:mb-32">
              <img src={blueBullet || "/placeholder.svg"} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[30px] xl:leading-[32px]
2xl:text-[30px] 2xl:leading-[36px]
1821:text-[30px] 1821:leading-[36px]
tracking-[-0.02em] font-[700] text-[#105CE9]">
                PHASE 03
              </span>
              <img src={logoBlue || "/placeholder.svg"} alt="ASCND Logo" className="w-5 h-5 sm:w-8 sm:h-8 ml-auto" />
            </div>

            <h3 className="text-[#105CE9] mb-3 sm:mb-4 h-auto sm:h-[28px] flex items-end
            text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[32px] xl:leading-[40px]
2xl:text-[38px] 2xl:leading-[48px]
1821:text-[45px] 1821:leading-[48px]
font-[600]
tracking-[-0.02em]">
              Customize & Complete Your Space
            </h3>
            <p className="mb-3 sm:mb-4 text-[#105CE9] h-auto 
            text-[14px] leading-[20px]
sm:text-[16px] sm:leading-[24px]
md:text-[18px] md:leading-[28px]
2xl:text-[18px] 2xl:leading-[26px]
1821:text-[20px] 1821:leading-[28px] font-[600]
            ">
              Finish with the details that make your home truly yours—like automated blinds, window treatments, or smart
              features. These finishing touches:
            </p>
            <hr className="border-t border-[#105CE9] mb-3 sm:mb-4" />

            {/* Pill buttons */}
            <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
              {[
                "Increase privacy and efficiency",
                "Add comfort and daily convenience",
                "Round out your home's aesthetic and function",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={pillVariants}
                  className="inline-block border-2 border-[#105CE9] rounded-full px-2.5 py-1 
                  text-[11px] leading-[20px]
sm:text-[11px] sm:leading-[24px]
md:text-[12px] md:leading-[28px]
2xl:text-[14px] 2xl:leading-[26px]
1821:text-[16px] 1821:leading-[28px] font-[600]
                  text-[#105CE9]"
                >
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Path