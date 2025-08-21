"use client"
import { motion } from "framer-motion"
import power from "../../assets/img/speed.jpg"
import comfort from "../../assets/img/pricing.jpg"
import protect from "../../assets/img/work.jpg"

// Animation variants
const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
      duration: 0.8,
    },
  },
}

const imgVar = {
  hidden: {
    x: -60,
    opacity: 0,
    scale: 0.8,
    rotateY: -15,
    filter: "blur(10px)",
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 1.2,
    },
  },
}

const textVar = {
  hidden: {
    x: 60,
    opacity: 0,
    scale: 0.95,
    filter: "blur(8px)",
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 22,
      duration: 1.0,
    },
  },
}

const pillVar = {
  hidden: {
    y: 30,
    opacity: 0,
    scale: 0.8,
    rotateX: 20,
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 25,
      duration: 0.8,
    },
  },
}

const headingVar = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.9,
    rotateX: 10,
    filter: "blur(12px)",
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 20,
      duration: 1.4,
    },
  },
}

const GradientWord = ({ children }) => (
  <span
    className="bg-clip-text text-transparent"
    style={{ backgroundImage: "linear-gradient(90deg, #0D1318 0%, #FF4C16 100%)" }}
  >
    {children}
  </span>
)

const Pill = ({ label }) => (
  <motion.span
    variants={pillVar}
    className="inline-block rounded-full border-2 border-[#0D1318] bg-white px-2.5 py-1 text-[12px] font-semibold text-[#0D1318] shadow-sm sm:px-3.5 sm:py-1.5 sm:text-[14px]"
  >
    {label}
  </motion.span>
)

const WhyItem = ({ image, headingTop, headingBottom, gradientWord, body, pills }) => (
  <motion.div
    className="grid grid-cols-1 items-stretch gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-10"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2, margin: "0px 0px -15% 0px" }}
    variants={container}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    }}
  >
    {/* Image */}
    <motion.div
      className="lg:col-span-5"
      variants={imgVar}
      whileHover={{
        scale: 1.05,
        rotateY: 2,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
    >
      <div className="relative h-48 overflow-hidden rounded-xl sm:h-56 sm:rounded-2xl lg:h-[360px] xl:h-[766px] shadow-lg">
        <motion.img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
        />
      </div>
    </motion.div>

    {/* Text */}
    <motion.div className="lg:col-span-7 h-full lg:pl-6 xl:pl-10 flex flex-col justify-end lg:pb-32" variants={textVar}>
      <motion.h3
        className="text-[24px] font-extrabold leading-[1.02] text-[#0b0c0e] sm:text-[30px] md:text-[36px] lg:text-[44px] xl:text-[52px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {headingTop && (
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
            }}
          >
            {headingTop}{" "}
          </motion.span>
        )}
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
          }}
        >
          <GradientWord>{gradientWord}</GradientWord>
        </motion.span>
        {headingBottom && (
          <>
            <br />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
              }}
            >
              {headingBottom}
            </motion.span>
          </>
        )}
      </motion.h3>

      <motion.p
        className="mt-3 text-[13px] leading-6 font-semibold tracking-tight text-[#636E80] sm:mt-4 sm:text-[14px] sm:leading-7 md:text-[14.5px]"
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
      >
        {body}
      </motion.p>

      <motion.div
        className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.8,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {pills.map((p, index) => (
          <motion.span
            key={p}
            variants={pillVar}
            className="inline-block rounded-full border-2 border-[#0D1318] bg-white px-2.5 py-1 text-[12px] font-semibold text-[#0D1318] shadow-sm sm:px-3.5 sm:py-1.5 sm:text-[14px]"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#0D1318",
              color: "#ffffff",
              transition: { duration: 0.2 },
            }}
            style={{
              transformOrigin: "center",
              cursor: "default",
            }}
          >
            {p}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  </motion.div>
)

const Why = () => {
  return (
    <section id="why" className="w-full">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={headingVar}
          className="pb-3 pt-3 sm:pb-4 sm:pt-4"
        >
          <h2 className="text-[28px] font-extrabold leading-[0.8] text-[#0b0c0e] sm:text-[36px] md:text-[44px] lg:text-[64px] xl:text-8xl">
            Why ASCND?
          </h2>
          <motion.div
            className="mt-2 border-t border-black/15 sm:mt-3"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 py-4 sm:gap-10 sm:py-6 md:gap-14 md:py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <WhyItem
            image={power}
            headingTop=""
            gradientWord="Speed matters."
            headingBottom="We don’t waste time."
            body="Most homeowners wait weeks (or months) just to get started. ASCND has streamlined operations to eliminate delays—so you can start your project right away and enjoy it sooner.."
            pills={[
              "Lightning-fast quotes",
              "Pre-vetted contractor",
              "Direct project management",
              "Clear communication from start to finish",
            ]}
          />

          <WhyItem
            image={comfort}
            headingTop="Better Pricing."
            gradientWord="No Games."
            headingBottom=""
            body="We don’t believe in bloated quotes or shady change orders. Our pricing is transparent, competitive, and built to protect your wallet— and your trust."
            pills={[
              "Price-matched offers",
              "Bundled project discounts",
              "Financing options available",
              "No hidden fees or surprise charges",
            ]}
          />

          <WhyItem
            image={protect}
            headingTop=""
            gradientWord="Trusted Work."
            headingBottom="Real Results."
            body="We work with licensed, vetted professionals who meet our standards of quality and professionalism. From design to final walkthrough, our project team guides every step of the way."
            pills={[
              "Full warranties",
              "Reliable materials",
              "Clean, efficient installs",
              "Local contractor partnerships",
            ]}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Why
