"use client"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import solar from "../../assets/icons/solar.svg"
import epoxy from "../../assets/icons/epoxy.svg"
import roofing from "../../assets/icons/roofing.svg"
import lighting from "../../assets/icons/lighting.svg"
import hvac from "../../assets/icons/hvac.svg"
import windows from "../../assets/icons/windows.svg"
import doubleArrow from "../../assets/icons/double-arrow.svg"

import power from "../../assets/img/power.jpg"
import garage from "../../assets/img/garage.jpg"
import protect from "../../assets/img/protect.jpg"
import light from "../../assets/img/lighting.jpg"
import comfort from "../../assets/img/comfort.jpg"
import privacy from "../../assets/img/privacy.jpg"

// Animation variants (simplified)
const sectionFade = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const cardVar = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const contentVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const textVar = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const dividerVar = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const imageVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const listVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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
        hidden: { y: 20, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }

  const localTextVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.1 } } }
    : {
        hidden: { y: 20, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }

  const localImageVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.1 } } }
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }

  return (
    <motion.article
      className="h-full overflow-hidden rounded-[28px] border border-[#B0B8C7] bg-[#F6F6F4]"
      variants={localCardVar}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -15% 0px" }}
    >
      <div className="grid h-full grid-cols-1 lg:grid-cols-[2fr_1fr]">
        {/* Content */}
        <motion.div className="flex h-full flex-col justify-between p-4 py-8 sm:p-6 sm:py-16" variants={contentVar}>
          {/* Top section - Label */}
          <motion.div className="flex items-center gap-3 sm:gap-5 mb-32" variants={localTextVar}>
            <motion.img
              src={icon}
              alt=""
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
            />
            <span className="font-[700] uppercase tracking-[-0.02em] text-[#0D1318] 
            text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[30px] xl:leading-[32px]
2xl:text-[30px] 2xl:leading-[36px]
1821:text-[30px] 1821:leading-[36px]
            ">
              {label}
            </span>
          </motion.div>

          {/* Middle section - Title (bottom-aligned across cards) */}
          <div className="flex flex-col justify-end w-fit">
            <motion.h3
              variants={localTextVar}
              className="text-[#0D1318] text-[16px] leading-[24px]
sm:text-[18px] sm:leading-[28px]
md:text-[20px] md:leading-[32px]
lg:text-[24px] lg:leading-[36px]
xl:text-[32px] xl:leading-[40px]
2xl:text-[38px] 2xl:leading-[48px]
1821:text-[45px] 1821:leading-[48px]
font-[600]
tracking-[-0.04em]
"
            >
              {title}
            </motion.h3>
          </div>

          {/* Bottom section - Description, divider, and CTA */}
          <div className="space-y-4 sm:space-y-6">
            <motion.p
              variants={localTextVar}
              className="max-w-2xl text-[#636E80] pt-5
              text-[14px] leading-[20px]
sm:text-[16px] sm:leading-[24px]
md:text-[18px] md:leading-[28px]
2xl:text-[18px] 2xl:leading-[26px]
1821:text-[20px] 1821:leading-[28px] font-[600]
              "
            >
              {body}
            </motion.p>

            <motion.div className="border-t border-[#0D1318]/15 border-[1px] origin-left" variants={dividerVar} />

            <motion.div variants={localTextVar}>
              <MotionLink
                to="/request-quote"
                className="inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-4 py-2.5  font-[700] uppercase tracking-[0.25em] text-[#F6F6F4] transition-colors duration-300 sm:px-6 sm:py-3 text-[11px] md:px-7 md:py-3.5  overflow-hidden relative"
                aria-label={`Go to request a quote`}
              >
                <span>Learn How</span>
                <img
                  src={doubleArrow}
                  alt=""
                  className="flex-shrink-0"
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
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6">
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