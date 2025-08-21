"use client"
import { motion, useReducedMotion } from "framer-motion"
import solar from "../../assets/icons/solar.png"
import epoxy from "../../assets/icons/epoxy.png"
import roofing from "../../assets/icons/roofing.png"
import lighting from "../../assets/icons/lighting.png"
import hvac from "../../assets/icons/hvac.png"
import windows from "../../assets/icons/windows.png"
import doubleArrow from "../../assets/icons/double-arrow.png"

import power from "../../assets/img/power.jpg"
import garage from "../../assets/img/garage.jpg"
import protect from "../../assets/img/protect.jpg"
import light from "../../assets/img/lighting.jpg"
import comfort from "../../assets/img/comfort.jpg"
import privacy from "../../assets/img/privacy.jpg"

// Animation variants (subtle, smooth)
const sectionFade = {
  hidden: { y: 60, opacity: 0, rotateX: 15, filter: "blur(10px)" },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1.2,
      duration: 1.2,
    },
  },
}

const cardVar = {
  hidden: {
    y: 100,
    opacity: 0,
    rotateX: 25,
    rotateY: -15,
    scale: 0.85,
    filter: "blur(10px)",
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      mass: 1,
      duration: 1.2,
    },
  },
}

const contentVar = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.15 } },
}

const textVar = {
  hidden: {
    y: 50,
    opacity: 0,
    filter: "blur(8px)",
    rotateX: 15,
    scale: 0.9,
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25,
      mass: 0.8,
      duration: 1,
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
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
    },
  },
}

const imageVar = {
  hidden: {
    scale: 1.3,
    opacity: 0,
    filter: "blur(15px)",
    rotateZ: 5,
  },
  show: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    rotateZ: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 25,
      mass: 1.2,
      duration: 1.5,
    },
  },
}

const listVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
}

const items = [
  {
    icon: solar,
    label: "SOLAR",
    title: "Sell solar like an installer.",
    body: "We give you the tools to close and fulfill solar projects—fast. Keep 100% of your commissions, access full financing options, and get paid with direct pay structures. No clawbacks. No delays. Real control.",
    image: power,
  },
  {
    icon: epoxy,
    label: "EPOXY FLOORING",
    title: "Quick installs. Big margins.",
    body: "We make epoxy flooring projects simple from start to finish. Get expert installation, premium materials, and reliable scheduling—without the stress. No delays. No hassles. Just seamless floors and lasting value.",
    image: garage,
  },
  {
    icon: roofing,
    label: "ROOFING",
    title: "Add roofing to your toolkit.",
    body: "With ASCND, you can quote and sell roofing in all 50 states. Use our tools like RoofX, work with licensed contractors, and earn top-tier margins without becoming a roofer yourself.",
    image: protect,
  },
  {
    icon: lighting,
    label: "PERMANENT LIGHTING",
    title: "Recurring income, all year long.",
    body: "We’ve partnered with permanent lighting pros to give you a plug-and-play way to offer premium installs. It’s high-margin, low-effort, and backed by smart tech.",
    image: light,
  },
  {
    icon: hvac,
    label: "HVAC",
    title: "Tap into year-round opportunity.",
    body: "HVAC upgrades are essential in every market. ASCND lets you offer complete HVAC systems or simple add-ons—no license needed, just support from real pros.",
    image: comfort,
  },
  {
    icon: windows,
    label: "WINDOWS & BLINDS",
    title: "Expand your product offering—easily.",
    body: "Our window covering program gives you custom quoting tools and installers to fulfill across the U.S. Add blinds and roller shades to any project or sell as standalone upgrades.",
    image: privacy,
  },
]

const Card = ({ icon, label, title, body, image }) => {
  const prefersReduced = useReducedMotion()

  const localCardVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.1 } } }
    : {
        hidden: {
          y: 80,
          opacity: 0,
          rotateX: 20,
          rotateY: -10,
          scale: 0.8,
          filter: "blur(12px)",
        },
        show: {
          y: 0,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 90,
            damping: 25,
            mass: 1.1,
            duration: 1.3,
          },
        },
      }

  const localTextVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.1 } } }
    : {
        hidden: {
          y: 40,
          opacity: 0,
          filter: "blur(6px)",
          rotateX: 10,
          scale: 0.95,
        },
        show: {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          rotateX: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 130,
            damping: 25,
            mass: 0.7,
            duration: 0.9,
          },
        },
      }

  const localImageVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.1 } } }
    : {
        hidden: {
          scale: 1.4,
          opacity: 0,
          filter: "blur(20px)",
          rotateZ: 8,
        },
        show: {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          rotateZ: 0,
          transition: {
            type: "spring",
            stiffness: 70,
            damping: 25,
            mass: 1.3,
            duration: 1.6,
          },
        },
      }

  return (
    <motion.article
      className="h-full overflow-hidden rounded-xl border border-[#0D1318]/10 bg-white sm:rounded-2xl"
      variants={localCardVar}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -12% 0px" }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(13, 19, 24, 0.15)",
        transition: { type: "spring", stiffness: 300, damping: 30 },
      }}
      style={{ perspective: 1200 }}
    >
      <div className="grid h-full grid-cols-1 lg:grid-cols-[2fr_1fr]">
        {/* Content */}
        <motion.div
          className="flex h-full flex-col justify-between p-4 bg-[#0D1318] sm:p-5 md:p-6"
          variants={contentVar}
        >
          {/* Top section - Label */}
          <motion.div className="flex items-center gap-2 sm:gap-3 mb-32" variants={localTextVar}>
            <motion.img
              src={icon || "/placeholder.svg"}
              alt=""
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
              whileHover={{
                scale: 1.2,
                rotate: 5,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
            />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#F6F6F4] sm:text-[12px] md:text-[13px] lg:text-[14px]">
              {label}
            </span>
          </motion.div>

          {/* Middle section - Title (bottom-aligned across cards) */}
          <div className="flex-1 flex flex-col justify-end mt-32">
            <motion.h3
              variants={localTextVar}
              className="text-2xl leading-[0.8] text-[#F6F6F4] sm:text-3xl md:text-4xl"
            >
              {title}
            </motion.h3>
          </div>

          {/* Bottom section - Description, divider, and CTA */}
          <div className="space-y-4 sm:space-y-6">
            <motion.p
              variants={localTextVar}
              className="max-w-2xl text-[14px] leading-6 text-[#F6F6F4] sm:text-[15px] sm:leading-7 md:text-[16px] pt-5"
            >
              {body}
            </motion.p>

            <motion.div className="border-t border-[#F6F6F4] origin-left" variants={dividerVar} />

            <motion.div variants={localTextVar}>
              <motion.button
                className="inline-flex items-center justify-between gap-2 rounded-md bg-[#F6F6F4] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0D1318] transition-colors duration-300 sm:px-6 sm:py-3 sm:text-[11px] md:px-7 md:py-3.5 md:text-[12px] overflow-hidden relative"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  backgroundColor: "#e8e8e6",
                  boxShadow: "0 10px 25px rgba(13, 19, 24, 0.3)",
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                whileTap={{
                  scale: 0.98,
                  y: 0,
                  transition: { duration: 0.1 },
                }}
              >
                <motion.span whileHover={{ x: 2 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                  Learn How
                </motion.span>
                <motion.img
                  src={doubleArrow}
                  alt=""
                  className="h-3 sm:h-4"
                  whileHover={{
                    x: 3,
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        {/* Image */}
        <div className="relative h-48 overflow-hidden sm:h-52 md:h-56 lg:h-full lg:rounded-r-2xl">
          <motion.img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            variants={localImageVar}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300, damping: 30 },
            }}
          />
        </div>
      </div>
    </motion.article>
  )
}

const ContractorServices = () => {
  return (
    <motion.section
      className="w-full"
      variants={sectionFade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6  ">
        <motion.div
          className="grid grid-cols-1 items-stretch gap-4 py-8 sm:gap-6 sm:py-10 md:grid-cols-2 md:gap-6 md:py-12 lg:gap-8 lg:py-14"
          variants={listVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((it) => (
            <Card key={it.label} {...it} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ContractorServices
