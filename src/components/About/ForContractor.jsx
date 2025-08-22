"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import contractor from "../../assets/img/contractor-bg.png"
import training from "../../assets/img/training.png"
import fast from "../../assets/img/fast.jpg"
import marketing from "../../assets/img/marketing.jpg"
import installation from "../../assets/img/installation.jpg"
import doubleArrow from "../../assets/icons/double-arrow.png"

const ForContractor = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const itemVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      rotateX: 45,
      scale: 0.9,
      filter: "blur(10px)",
    },
    show: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 1.2,
        duration: 1.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      y: 40,
      opacity: 0,
      rotateY: -25,
      scale: 0.8,
      filter: "blur(8px)",
    },
    show: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
        mass: 1,
        duration: 1,
      },
    },
  }

  const contractorImageVariants = {
    hidden: {
      scale: 0.7,
      opacity: 0,
      rotateZ: -15,
      filter: "blur(12px)",
    },
    show: {
      scale: 1,
      opacity: 0.8,
      rotateZ: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.3,
        duration: 1.5,
      },
    },
  }

  const tagVariants = {
    hidden: {
      rotateX: -90,
      scale: 0.8,
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      rotateX: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 25,
        delay: 0.1,
      },
    },
  }

  const headingWords =
    "We help ambitious professionals build real careers and offer a clear path from sales rep to full installer ownership in multiple trades.".split(
      " ",
    )

  return (
    <motion.section
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
      style={{ perspective: "1000px" }}
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 ">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5">
          {/* Left side - Dark section with content */}
          <motion.div className="flex-1" variants={itemVariants}>
            <div className="relative bg-[#0D1318] rounded-xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 text-white h-full flex flex-col justify-center">
              <motion.img
                src={contractor}
                alt=""
                className="absolute right-4 sm:right-6 md:right-8 lg:right-10 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-60 opacity-80 sm:opacity-100"
                variants={contractorImageVariants}
                whileHover={{
                  scale: 1.05,
                  rotateZ: 2,
                  transition: { duration: 0.3 },
                }}
              />

              {/* Content */}
              <div className="relative z-10 max-w-md lg:max-w-lg">
                <motion.div
                  className="inline-block border border-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6 md:mb-8 rounded"
                  variants={tagVariants}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  FOR CONTRACTORS & SALES PROFESSIONALS
                </motion.div>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold leading-[0.8] mb-4 sm:mb-5 md:mb-6">
                  {headingWords.slice(0, 5).map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-2"
                      variants={{
                        hidden: {
                          rotateY: -15,
                          opacity: 0,
                          filter: "blur(8px)",
                          scale: 0.9,
                        },
                        show: {
                          rotateY: 0,
                          opacity: 1,
                          filter: "blur(0px)",
                          scale: 1,
                          transition: {
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 120,
                            damping: 20,
                          },
                        },
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                  <motion.span
                    className="text-[#FF4C16] inline-block mr-2"
                    variants={{
                      hidden: {
                        rotateY: -15,
                        opacity: 0,
                        filter: "blur(8px)",
                        scale: 0.9,
                      },
                      show: {
                        rotateY: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        scale: 1,
                        transition: {
                          delay: 0.5,
                          type: "spring",
                          stiffness: 120,
                          damping: 20,
                        },
                      },
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    real careers
                  </motion.span>
                  {headingWords.slice(7).map((word, index) => (
                    <motion.span
                      key={index + 7}
                      className="inline-block mr-2"
                      variants={{
                        hidden: {
                          rotateY: -15,
                          opacity: 0,
                          filter: "blur(8px)",
                          scale: 0.9,
                        },
                        show: {
                          rotateY: 0,
                          opacity: 1,
                          filter: "blur(0px)",
                          scale: 1,
                          transition: {
                            delay: (index + 7) * 0.1,
                            type: "spring",
                            stiffness: 120,
                            damping: 20,
                          },
                        },
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h2>

                <motion.p
                  className="text-sm sm:text-base md:text-lg opacity-90 mb-6 sm:mb-8 md:mb-10 leading-relaxed"
                  variants={{
                    hidden: {
                      rotateX: 30,
                      opacity: 0,
                      filter: "blur(6px)",
                      scale: 0.95,
                    },
                    show: {
                      rotateX: 0,
                      opacity: 0.9,
                      filter: "blur(0px)",
                      scale: 1,
                      transition: {
                        delay: 0.8,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                    },
                  }}
                  style={{ perspective: "500px" }}
                >
                  Whether you're starting out or ready to own your own install division, ASCND provides:
                </motion.p>

                {(() => { const MotionLink = motion(Link); return (
                <MotionLink
                  to="/contractor"
                  className="inline-flex items-center justify-between gap-2 rounded-md bg-white px-4 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-[10px] sm:text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.18em] text-[#FF4C16] transition"
                  variants={{
                    hidden: {
                      rotateX: 30,
                      scale: 0.8,
                      opacity: 0,
                      filter: "blur(5px)",
                    },
                    show: {
                      rotateX: 0,
                      scale: 1,
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: {
                        delay: 1,
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(255, 76, 22, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Learn more for contractors"
                >
                  <span>LEARN MORE</span>
                  <motion.img src={doubleArrow} alt="" className="w-3 h-3 sm:w-4 sm:h-4" whileHover={{ x: 2 }} />
                </MotionLink> ); })()}
              </div>
            </div>
          </motion.div>

          {/* Right side - Grid of feature cards */}
          <motion.div className="flex-1" variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-full">
              <motion.div
                className="relative rounded-xl overflow-hidden cursor-pointer min-h-[200px] sm:min-h-[150px]"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  rotateY: 2,
                  boxShadow: "0 15px 30px rgba(255, 76, 22, 0.2)",
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={training || "/placeholder.svg"}
                  alt="Training & tools"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#FF4C16] mix-blend-multiply opacity-100  rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 md:p-5 z-10">
                  <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">
                    Training & tools
                  </h3>
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-xl overflow-hidden cursor-pointer min-h-[200px] sm:min-h-[150px]"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  rotateY: -2,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={fast || "/placeholder.svg"}
                  alt="Fast, consistent fulfillment"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 md:p-5 z-10">
                  <h3 className="text-[#4B5361] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">
                    Fast, consistent fulfillment
                  </h3>
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-xl overflow-hidden cursor-pointer min-h-[200px] sm:min-h-[150px]"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  rotateY: 2,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={marketing || "/placeholder.svg"}
                  alt="Marketing & lead gen support"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 md:p-5 z-10">
                  <h3 className="text-[#4B5361] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">
                    Marketing & lead gen support
                  </h3>
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-xl overflow-hidden cursor-pointer min-h-[200px] sm:min-h-[150px]"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  rotateY: -2,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={installation || "/placeholder.svg"}
                  alt="Installation ownership"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 md:p-5 z-10">
                  <h3 className="text-[#4B5361] text-sm sm:text-base md:text-lg font-semibold leading-[0.8]">
                    Installation ownership without the back-end burden
                  </h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ForContractor
