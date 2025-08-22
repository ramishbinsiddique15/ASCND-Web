"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

import phaseBg from "../../assets/img/phase-bg.png"
import logoOrange from "../../assets/icons/orange-logo.png"
import logoWhite from "../../assets/icons/white-logo.png"
import whiteBullet from "../../assets/icons/white-bullet.png"
import orangeBullet from "../../assets/icons/orange-bullet.png"

import doubleArrow from "../../assets/icons/double-arrow.png"

import phase from "../../assets/img/phase.png"

const Phase = () => {
  const [expandedPhase, setExpandedPhase] = useState("01")
  const MotionLink = motion(Link)

  const phases = [
    {
      id: "01",
      title: "Setters Become Closers",
      description:
        "Most companies keep setters stuck. We don't. At ASCND, setters are on a path to full commission closers.",
      features: [
        "Hands-on sales training",
        "Live leads & appointment tools (like Terros)",
        "Industry-specific scripting & support",
        "One-on-one mentorship",
      ],
    },
    {
      id: "02",
      title: "Advanced Sales Training",
      description: "Take your sales skills to the next level with advanced techniques and strategies.",
      features: [
        "Advanced closing techniques",
        "Psychology of sales",
        "Objection handling mastery",
        "Revenue optimization",
      ],
    },
    {
      id: "03",
      title: "Leadership Development",
      description: "Develop leadership skills to build and manage high-performing teams.",
      features: [
        "Team building strategies",
        "Performance management",
        "Leadership psychology",
        "Scaling methodologies",
      ],
    },
    {
      id: "04",
      title: "Empire Building",
      description: "Build your business empire with proven systems and strategies.",
      features: ["Business scaling systems", "Empire building strategies", "Advanced operations", "Legacy development"],
    },
  ]

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: 25,
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
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        duration: 0.8,
      },
    },
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 80,
      rotateY: -20,
      scale: 0.95,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 1.2,
        duration: 0.9,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 45,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        duration: 0.6,
      },
    },
  }

  return (
    <motion.section
      className="w-full bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6  lg:pl-8 lg:pr-4 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left side - Phase cards */}
          <motion.div className="space-y-3 sm:space-y-4" variants={cardVariants}>
            {phases.map((phaseData, index) => (
              <motion.div
                key={phaseData.id}
                className={`relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-500 ${
                  expandedPhase === phaseData.id ? "bg-[#0D1318]" : "bg-[#FF4C16]"
                }`}
                onClick={() => setExpandedPhase(expandedPhase === phaseData.id ? null : phaseData.id)}
                layout
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  rotateX: -2,
                  boxShadow:
                    expandedPhase === phaseData.id
                      ? "0 20px 40px rgba(13, 19, 24, 0.3)"
                      : "0 20px 40px rgba(255, 76, 22, 0.3)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotateX: 15,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.7,
                }}
                style={{ perspective: "1000px" }}
              >
                {/* Background pattern for expanded phase */}
                {expandedPhase === phaseData.id && (
                  <motion.img
                    src={phaseBg}
                    alt=""
                    className="absolute right-4 sm:right-6 md:right-10 w-48 sm:w-64 md:w-80 lg:w-96 top-8 sm:top-12 md:top-15"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  />
                )}

                <div
                  className={`relative z-10 ${expandedPhase === phaseData.id ? "p-4 sm:p-5 md:p-6" : "p-2.5 sm:p-3"} &&`}
                >
                  {/* Phase header */}
                  <div
                    className={`flex items-center justify-between ${expandedPhase === phaseData.id ? "mb-12 sm:mb-16 md:mb-20 lg:mb-24" : ""} `}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <motion.img
                        src={expandedPhase === phaseData.id ? orangeBullet : whiteBullet}
                        alt=""
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                        animate={{ rotate: expandedPhase === phaseData.id ? 360 : 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                      />
                      <span
                        className={`text-sm sm:text-lg md:text-xl font-bold uppercase tracking-widest ${
                          expandedPhase === phaseData.id ? "text-[#FF4C16]" : "text-white"
                        }`}
                      >
                        PHASE {phaseData.id}
                      </span>
                    </div>
                    <motion.img
                      src={expandedPhase === phaseData.id ? logoOrange : logoWhite}
                      alt="ASCND Logo"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>

                  {/* Phase title */}
                  {expandedPhase === phaseData.id && (
                    <motion.h3
                      className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${
                        expandedPhase === phaseData.id ? "text-white" : "text-white"
                      }`}
                      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                    >
                      {phaseData.title}
                    </motion.h3>
                  )}
                  {/* Expandable content */}
                  <AnimatePresence>
                    {expandedPhase === phaseData.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          className="text-white text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6 leading-relaxed"
                          initial={{ opacity: 0, y: 15, filter: "blur(3px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                        >
                          {phaseData.description}
                        </motion.p>

                        <motion.hr
                          className="border-t border-[#FF4C16] mb-4 sm:mb-5 md:mb-6"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                        />

                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {phaseData.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{
                                opacity: 0,
                                scale: 0.8,
                                rotateX: 20,
                                filter: "blur(2px)",
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                                rotateX: 0,
                                filter: "blur(0px)",
                              }}
                              transition={{
                                delay: 0.5 + index * 0.1,
                                type: "spring",
                                stiffness: 150,
                                damping: 12,
                                duration: 0.4,
                              }}
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "#FF4C16",
                                borderColor: "#FF4C16",
                                transition: { type: "spring", stiffness: 300 },
                              }}
                              className="border border-white rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm text-white font-medium cursor-pointer"
                            >
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Main content */}
          <motion.div
            className="relative bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center order-first lg:order-last"
            variants={contentVariants}
            style={{ perspective: "1000px" }}
          >
            {/* Background image */}
            <motion.img
              src={phase}
              alt="Business owner"
              className="absolute overflow-hidden right-0 opacity-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96
                         [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
                         [mask-repeat:no-repeat] [mask-size:100%]"
              initial={{ scale: 1.2, opacity: 0, filter: "blur(8px)" }}
              animate={{ scale: 1, opacity: 0.4, filter: "blur(0px)" }}
              transition={{ delay: 0.4, duration: 1, type: "spring", stiffness: 80 }}
            />

            {/* Content overlay */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <motion.h2
                className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] font-bold text-[#0D1318] leading-[0.8] mb-4 sm:mb-5 md:mb-6"
                variants={titleVariants}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                {["The", "ASCND", "Growth", "Model"].map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block mr-2"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {word}
                    {index === 1 && <br />}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.p
                className="text-[#4A5568] text-sm sm:text-base md:text-lg mb-6 sm:mb-7 md:mb-8 max-w-full sm:max-w-md"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100, duration: 0.7 }}
              >
                We turn tradespeople into business owners, and business owners into builders of empires.
              </motion.p>

              <MotionLink
                to="/business-apply"
                className="inline-flex items-center justify-between gap-2 rounded-md border-2 border-[#0d1318] px-4 py-2.5 text-[10px] sm:px-5 sm:py-3 sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0d1318] hover:text-white transition hover:bg-[#0D1318] md:px-6 md:py-3 md:text-[12px]"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(13, 19, 24, 0.2)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
                aria-label="Apply to ASCND"
              >
                <span>Apply Now</span>
                <motion.img
                  src={doubleArrow}
                  alt=""
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </MotionLink>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Phase
