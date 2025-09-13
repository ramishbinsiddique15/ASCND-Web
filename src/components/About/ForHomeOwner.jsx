"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import solar from "../../assets/icons/solar-white.svg"
import solarOrange from "../../assets/icons/solar.svg"
import epoxy from "../../assets/icons/epoxy.svg"
import epoxyWhite from "../../assets/icons/epoxy-white.svg"
import roofing from "../../assets/icons/roofing.svg"
import roofingWhite from "../../assets/icons/roofing-white.svg"
import hvac from "../../assets/icons/hvac.svg"
import hvacWhite from "../../assets/icons/hvac-white.svg"
import turf from "../../assets/icons/turf.svg"
import turfWhite from "../../assets/icons/turf-white.svg"
import lighting from "../../assets/icons/lighting.svg"
import lightingWhite from "../../assets/icons/lighting-white.svg"
import windows from "../../assets/icons/windows.svg"
import windowsWhite from "../../assets/icons/windows-white.svg"
import doubleArrow from "../../assets/icons/double-arrow.svg"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const tagVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const wordVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const textVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const buttonVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const serviceVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const ForHomeOwner = () => {
  const services = [
    { icon: solarOrange, iconWhite: solar , label: "SOLAR ENERGY" },
    { icon: epoxy, iconWhite: epoxyWhite, label: "EPOXY FLOORING" },
    { icon: roofing, iconWhite: roofingWhite, label: "ROOFING" },
    { icon: hvac, iconWhite: hvacWhite, label: "HVAC" },
    { icon: turf, iconWhite: turfWhite, label: "TURF" },
    { icon: lighting, iconWhite: lightingWhite, label: "PERMANENT LIGHTING" },
    { icon: windows, iconWhite: windowsWhite, label: "WINDOW COVERINGS" },
  ]
  const MotionLink = motion(Link)

  return (
    <motion.section
      className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24 mt-28"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto  px-4 sm:px-6 ">
        <div className="bg-[#F6F6F4] rounded-[24px] p-6 sm:p-8 md:p-12 lg:p-32  border border-[#B0B8C7]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left side - Content */}
            <motion.div variants={containerVariants} className="space-y-4 sm:space-y-6">
              {/* Tag */}
              <motion.span
                variants={tagVariant}
                className="w-fit inline-block rounded-sm border-2 border-[#FF4C16] py-1 font-semibold uppercase tracking-[0.25em] text-[#FF4C16] text-[9px] sm:text-[14px] md:text-[14px] px-4"
              style={{
                transformOrigin: "center",
                transformStyle: "preserve-3d",
              }}
              >
                FOR HOMEOWNERS
              </motion.span>

              {/* Main heading */}
         <motion.h2
  variants={containerVariants}
  className=" text-[#0D1318] 
  text-[16px] leading-[16px]
          sm:text-[18px] sm:leading-[18px]
          md:text-[20px] md:leading-[20px]
          lg:text-[24px] lg:leading-[24px]
          xl:text-[32px] xl:leading-[32px]
          2xl:text-[38px] 2xl:leading-[38px]
          1821:text-[45px] 1821:leading-[45px]
          font-[700]
          tracking-[-0.02em]
  "
>
  We help you ASCND your <br />
  home—with expert <br/> installation across a curated<br />
  set of <span className="text-[#FF4C16]">essential services</span>
</motion.h2>


              {/* Description */}
              <motion.p
                variants={textVariant}
                className="text-[#636E80]
                text-[14px] leading-[20px]
sm:text-[16px] sm:leading-[24px]
md:text-[18px] md:leading-[28px]
2xl:text-[18px] 2xl:leading-[26px]
1821:text-[20px] 1821:leading-[28px] font-[600]
                "
              >
                No bloated sales process. No pressure. <br/> Just quality, speed, and transparency.
              </motion.p>

              {/* Learn More button */}
              <MotionLink
                to="/home-owner-growth-model"
                variants={buttonVariant}
                className="inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] font-[700] uppercase tracking-[0.25em] text-[#F6F6F4] transition  md:px-7 md:py-3.5"
                aria-label="Learn more for homeowners"
              >
                <span>Learn More</span>
                <img src={doubleArrow} alt="" className="" />
              </MotionLink>
            </motion.div>

            {/* Right side - Service icons grid */}
            <motion.div variants={containerVariants} className="space-y-3 sm:space-y-4">
              {/* Mobile: Single column layout, Tablet+: Original layout */}
              <div className="block sm:hidden">
                {/* Mobile: All items in a single column grid */}
                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.label}
                      variants={serviceVariant}
                      className="flex flex-col items-center space-y-2 group cursor-pointer"
                    >
                      {/* Octagonal shape container */}
                      <div className="relative aspect-square w-full p-0.5">
                        {/* Border element */}
                        <div
                          className="absolute inset-0 bg-[#B0B8C7] group-hover:bg-[#FF4C16] transition-all duration-300"
                          style={{
                            clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                          }}
                        />

                        {/* Content element - Icon only */}
                        <div
                          className="absolute inset-0.5 flex items-center justify-center transition-all duration-300 bg-[#F6F6F4] group-hover:bg-[#FF4C16]"
                          style={{
                            clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                          }}
                        >
                          <img 
                            src={service.icon || "/placeholder.svg"} 
                            alt={service.label} 
                            className="w-6 h-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                          />
                        </div>
                      </div>

                      {/* Label outside and below the shape */}
                      <span className="text-[10px] 1821:text-[14px] font-[700] uppercase tracking-[0.25em] text-center leading-[22px] px-1 text-[#0D1318] group-hover:text-[#FF4C16] transition-all duration-300">
                        {service.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tablet and Desktop: Original layout */}
              <div className="hidden sm:block space-y-3 md:space-y-4">
                {/* First row - 4 items */}
                <div className="grid grid-cols-4 gap-3 md:gap-4">
                  {services.slice(0, 4).map((service, index) => (
                    <motion.div
                      key={service.label}
                      variants={serviceVariant}
                      className="flex flex-col items-center space-y-2 group cursor-pointer"
                    >
                      {/* Octagonal shape container */}
                      <div className="relative aspect-square w-full p-0.5">
                        {/* Border element */}
                        <div
                          className="absolute inset-0 bg-[#B0B8C7] group-hover:bg-[#FF4C16] transition-all duration-300"
                          style={{
                            clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                          }}
                        />

                        {/* Content element - Icon only */}
                        <div
                          className="absolute inset-0.5 flex items-center justify-center transition-all duration-300 bg-[#F6F6F4] group-hover:bg-[#FF4C16]"
                          style={{
                            clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                          }}
                        >
                          <img
                            src={service.icon || "/placeholder.svg"}
                            alt={service.label}
                            className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                          />
                        </div>
                      </div>

                      {/* Label outside and below the shape */}
                      <span className="text-[10px] 1821:text-[14px] font-[700] uppercase tracking-[0.25em] text-center leading-[22px] px-1 text-[#0D1318] group-hover:text-[#FF4C16] transition-all duration-300">
                        {service.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Second row - 3 items right aligned */}
                <div className="flex gap-3 md:gap-4 justify-end">
                  {services.slice(4).map((service, index) => (
                    <motion.div
                      key={service.label}
                      variants={serviceVariant}
                      className="flex flex-col items-center space-y-2 w-[calc(25%-0.75rem)] group cursor-pointer"
                    >
                      {/* Octagonal shape container */}
                      <div className="relative aspect-square w-full p-0.5">
                        {/* Border element */}
                        <div
                          className="absolute inset-0 bg-[#B0B8C7] group-hover:bg-[#FF4C16] transition-all duration-300"
                          style={{
                            clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                          }}
                        />

                        {/* Content element - Icon only */}
                        <div
                          className="absolute inset-0.5 flex items-center justify-center transition-all duration-300 bg-[#F6F6F4] group-hover:bg-[#FF4C16]"
                          style={{
                            clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                          }}
                        >
                          <img
                            src={service.icon || "/placeholder.svg"}
                            alt={service.label}
                            className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                          />
                        </div>
                      </div>

                      {/* Label outside and below the shape */}
                      <span className="text-[10px] 1821:text-[14px] font-[700] uppercase tracking-[0.25em] text-center leading-[22px] px-1 text-[#0D1318] group-hover:text-[#FF4C16] transition-all duration-300">
                        {service.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ForHomeOwner