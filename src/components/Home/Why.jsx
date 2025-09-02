import { motion } from "framer-motion"
import power from "../../assets/img/speed.jpg"
import comfort from "../../assets/img/pricing.jpg"
import protect from "../../assets/img/work.jpg"

// Animation variants (simplified)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
}

const imgVar = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const textVar = {
  hidden: { x: 20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const pillVar = {
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

const headingVar = {
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
    className="inline-block rounded-full border-[2px] border-[#0D1318] bg-[#F6F6F4] px-2.5 py-1 text-[#0D1318] sm:px-3.5 sm:py-1.5 
    text-[14px] leading-[20px]
sm:text-[16px] sm:leading-[24px]
md:text-[18px] md:leading-[28px]
2xl:text-[18px] 2xl:leading-[26px]
1821:text-[20px] 1821:leading-[28px] font-[600]
    "
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
  >
    {/* Image */}
    <motion.div
      className="lg:col-span-5"
      variants={imgVar}
    >
      <div className="relative h-48 overflow-hidden rounded-xl sm:h-56 sm:rounded-2xl lg:h-[360px] xl:h-[766px]">
        <motion.img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          variants={imgVar}
        />
      </div>
    </motion.div>

    {/* Text */}
    <motion.div className="lg:col-span-7 h-full lg:pl-6 xl:pl-10 flex flex-col justify-end lg:pb-32" variants={textVar}>
      <motion.h3
        className="font-extrabold text-[#0D1318] 
        sm:text-[36px] sm:leading-[29px]
md:text-[44px] md:leading-[36px]
lg:text-[52px] lg:leading-[42px]
xl:text-[59px] xl:leading-[48px]
2xl:text-[69px] 2xl:leading-[56px]
1821:text-[79px] 1821:leading-[64px]

    tracking-[-0.04em]
        "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {headingTop && (
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            {headingTop}{" "}
          </motion.span>
        )}
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          <GradientWord>{gradientWord}</GradientWord>
        </motion.span>
        {headingBottom && (
          <>
            <br />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              {headingBottom}
            </motion.span>
          </>
        )}
      </motion.h3>

      <motion.p
        className="mt-3 text-[#636E80] sm:mt-4 
        text-[14px] leading-[20px]
sm:text-[16px] sm:leading-[24px]
md:text-[18px] md:leading-[28px]
2xl:text-[18px] 2xl:leading-[26px]
1821:text-[20px] 1821:leading-[28px] font-[600]
tracking-[-0.02em]
        "
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
              staggerChildren: 0.05,
              delayChildren: 0.4,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {pills.map((p) => (
          <Pill key={p} label={p} />
        ))}
      </motion.div>
    </motion.div>
  </motion.div>
)

const Why = () => {
  return (
    <section id="why" className="w-full mt-28">
      <div className="mx-auto  px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={headingVar}
          className="pb-3 pt-3 sm:pb-4 sm:pt-4"
        >
          <h2 className="font-extrabold text-[#0D1318] 
          text-4xl       
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-[120px]
          2xl:text-[150px]
          1821:text-[169px]
          tracking-[-0.06em]"
          >
            Why ASCND?
          </h2>
          <motion.div
            className="mt-2 border-t border-[#B0B8C7] border-[1px] sm:mt-3"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
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
          transition={{ duration: 0.5 }}
        >
          <WhyItem
            image={power}
            headingTop=""
            gradientWord="Speed matters."
            headingBottom="We don’t waste time."
            body="Most homeowners wait weeks (or months) just to get started. ASCND has streamlined operations to eliminate delays—so you can start your project right away and enjoy it sooner."
            pills={[
              "Lightning-fast quotes",
              "Pre-vetted contractor",
              "Direct project management",
              "Clear communication from start to finish"
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
              "No hidden fees or surprise charges"
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
              "Local contractor partnerships"
            ]}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Why
