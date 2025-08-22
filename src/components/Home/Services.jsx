"use client"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
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
  hidden: { y: 60, opacity: 0, scale: 0.95 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
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
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
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
    title: "Power your home and your future.",
    body: "We offer smart, high-quality solar solutions designed for performance, savings, and a cleaner home. Whether you’re homeowner or care options, ASCND gives you full transparency and top-tier systems.",
    image: power,
  },
  {
    icon: epoxy,
    label: "EPOXY FLOORING",
    title: "Garage goals, delivered.",
    body: "We offer seamless, high-gloss epoxy flooring designed for durability, style, and easy upkeep. Whether it’s for a garage upgrade or a standout interior, our floors give you lasting quality.",
    image: garage,
  },
  {
    icon: roofing,
    label: "ROOFING",
    title: "Protect what matters most.",
    body: "We deliver premium roofing replacements with licensed contractors across the US. Every install comes with strong warranties, clean tear-offs, and great timelines.",
    image: protect,
  },
  {
    icon: lighting,
    label: "PERMANENT LIGHTING",
    title: "Lighting that lasts all year.",
    body: "From holiday-ready displays to architectural lighting, ASCND’s permanent lighting offers programmable control, clean install, and energy efficiency.",
    image: light,
  },
  {
    icon: hvac,
    label: "HVAC",
    title: "Comfort, efficiency, and control.",
    body: "From full system replacements to upgrades and add-ons, our HVAC experts make sure it’s clean, cool, and cost-effective—year round.",
    image: comfort,
  },
  {
    icon: windows,
    label: "WINDOWS & BLINDS",
    title: "Privacy, style, and sunlight on your terms.",
    body: "We install modern window treatments with motorized options and sleek designs that are energy-efficient, easy to use, and provide the right cover—when you need it.",
    image: privacy,
  },
]

const Card = ({ icon, label, title, body, image }) => {
  const prefersReduced = useReducedMotion()
  const MotionLink = motion(Link)

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
      className="h-full overflow-hidden rounded-md border border-[#0D1318]/10 bg-white"
      variants={localCardVar}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -15% 0px" }}
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
        <motion.div className="flex h-full flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10" variants={contentVar}>
          {/* Top section - Label */}
          <motion.div className="flex items-center gap-2 sm:gap-3 mb-32" variants={localTextVar}>
            <motion.img
              src={icon}
              alt=""
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
              whileHover={{
                scale: 1.2,
                rotate: 5,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
            />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0b0c0e] sm:text-[13px] md:text-[14px]">
              {label}
            </span>
          </motion.div>

          {/* Middle section - Title (bottom-aligned across cards) */}
          <div className="flex flex-col justify-end w-fit">
            <motion.h3
              variants={localTextVar}
              className="leading-[0.8] text-[#0b0c0e] text-2xl sm:text-3xl md:text-4xl"
            >
              {title}
            </motion.h3>
          </div>

          {/* Bottom section - Description, divider, and CTA */}
          <div className="space-y-4 sm:space-y-6">
            <motion.p
              variants={localTextVar}
              className="max-w-2xl text-[14px] leading-6 text-[#0D1318]/70 sm:text-[15px] sm:leading-7 md:text-[16px] pt-5"
            >
              {body}
            </motion.p>

            <motion.div className="border-t border-[#0D1318]/15 origin-left" variants={dividerVar} />

            <motion.div variants={localTextVar}>
              <MotionLink
                to="/request-quote"
                className="inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 sm:px-6 sm:py-3 sm:text-[11px] md:px-7 md:py-3.5 md:text-[12px] overflow-hidden relative"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  backgroundColor: "#1a2028",
                  boxShadow: "0 10px 25px rgba(13, 19, 24, 0.3)",
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                whileTap={{
                  scale: 0.98,
                  y: 0,
                  transition: { duration: 0.1 },
                }}
                aria-label={`Go to request a quote`}
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
              </MotionLink>
            </motion.div>
          </div>
        </motion.div>
        {/* Image */}
        <div className="relative h-48 overflow-hidden sm:h-52 lg:h-full lg:rounded-r-2xl">
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

const Services = () => {
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
          className="grid grid-cols-1 items-stretch gap-4 py-8 sm:gap-6 sm:py-10 lg:grid-cols-2 lg:gap-8"
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

export default Services
