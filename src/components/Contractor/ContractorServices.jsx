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
        <motion.div className="flex h-full flex-col justify-between p-4 py-8 bg-[#0D1318] sm:p-6 sm:py-16" variants={contentVar}>
          {/* Top section - Label */}
          <motion.div className="flex items-center gap-3 sm:gap-5 mb-32" variants={localTextVar}>
            <motion.img
              src={icon}
              alt=""
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
            />
            <span className="font-[700] uppercase tracking-[-0.02em] text-[#F6F6F4] 
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
              className="text-[#F6F6F4] text-[16px] leading-[24px]
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
              className="max-w-2xl text-[#F6F6F4] pt-5
              text-[14px] leading-[20px]
sm:text-[16px] sm:leading-[24px]
md:text-[18px] md:leading-[28px]
2xl:text-[18px] 2xl:leading-[26px]
1821:text-[20px] 1821:leading-[28px] font-[600]
              "
            >
              {body}
            </motion.p>

            <motion.div className="border-t border-[#F6F6F4] origin-left" variants={dividerVar} />

            <motion.div variants={localTextVar}>
              <MotionLink
                to="/request-quote"
                className="inline-flex items-center justify-between gap-2 rounded-md bg-[#F6F6F4] px-4 py-2.5  font-[700] uppercase tracking-[0.25em] text-[#0D1318] transition-colors duration-300 sm:px-6 sm:py-3 text-[11px] md:px-7 md:py-3.5  overflow-hidden relative"
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

const ContractorServices = () => {
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

export default ContractorServices
