"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import learn from "../../assets/img/learn.svg"
import turn from "../../assets/img/turn.png"
import local from "../../assets/img/local.png"
import plug from "../../assets/img/plug.png"
import trade from "../../assets/img/trade.svg"
import doubleArrowWhite from "../../assets/icons/double-arrow-white.svg"

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

const WhyItem = ({
  image,
  headingTop,
  headingBottom,
  gradientWord,
  body,
  pills,
  index,
}) => (
  // Motion-enabled Router Link for CTA
  
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
        {index === 0 ? (
          <>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              Learn the Trade.{" "}
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <GradientWord>Launch</GradientWord>
            </motion.span>
            <br />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              the Company.
            </motion.span>
          </>
        ) : index === 1 ? (
          <>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              Turn Side Jobs Into{" "}
            </motion.span>
            <br />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <GradientWord>a Scalable</GradientWord>
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              {" "}Business.
            </motion.span>
          </>
        ) : index === 2 ? (
          <>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <GradientWord>Become the Local Pro</GradientWord>
            </motion.span>
            <br />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              in Multiple Trades.
            </motion.span>
          </>
        ) : index === 3 ? (
          <>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              A Plug-and-Play{" "}
            </motion.span>
            <br />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <GradientWord>System for</GradientWord>
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              {" "}Growth.
            </motion.span>
          </>
        ) : (
          <>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <GradientWord>The Fastest Way</GradientWord>
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              {" "}to{" "}
            </motion.span>
            <br />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              Start a Trades Business.
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
      {(() => {
        const MotionLink = motion(Link)
        return (
          <MotionLink
            to="/business-apply"
            className="w-fit mt-4 inline-flex items-center gap-2 rounded-md bg-[#FF4C16] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F6F6F4]  sm:mt-5 sm:px-5 sm:py-2.5 sm:text-[11px] md:text-[12px] transition-colors duration-300"
            variants={pillVar}
            aria-label="Apply to ASCND"
          >
            Apply Now
            <img
              src={doubleArrowWhite}
              alt=""
              className="flex-shrink-0"
            />
          </MotionLink>
        )
      })()}
    </motion.div>
  </motion.div>
)

const ContractorWhy = () => {
  return (
    <section className="w-full mt-28" id="contractorwhy">
      <div className="mx-auto  px-4 sm:px-6  ">
        {/* Heading */}
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
            image={learn}
            headingTop="Learn the Trade."
            gradientWord="Launch"
            headingBottom="the Company."
            body="We don't just help you sell—we help you become the installer. Whether you're new to solar or want to add epoxy, turf, HVAC, or lighting to your service offerings, ASCND gives you:"
            pills={[
              "Hands-on training and onboarding",
              "Project-ready customers in your area",
              "Licensing and compliance guidance",
              "Access to tools, tech, and systems",
              "Support staff to help you grow",
            ]}
            index={0}
          />

          <WhyItem
            image={turn}
            headingTop="Turn Side Jobs Into"
            gradientWord="a Scalable"
            headingBottom="Business."
            body="You can start in one vertical—like epoxy or solar—and expand into others when you're ready. Tired of bouncing between gig work or subcontracting? We help you:"
            pills={[
              "Go from crew to company",
              "Handle quoting, scheduling, and fulfillment",
              "Get paid fast—no waiting 30/60/90",
              "Win repeat and referral business",
            ]}
            index={1}
          />

          <WhyItem
            image={local}
            headingTop="Become the Local Pro"
            headingBottom="in Multiple Trades."
            body="You can operate as the installer, sell through our network, or build your own team. The business is yours. We just help you build it. We'll help you set up a branded, full-service operation in:"
            pills={[
              "Solar Installations",
              "Roof Replacements",
              "HVAC Install & Repair",
              "Garage Epoxy Flooring",
              "Turf & Artificial Grass",
              "Permanent Lighting",
              "Blinds & Window Treatments",
            ]}
            index={2}
          />

          <WhyItem
            image={plug}
            headingTop="A Plug-and-Play"
            gradientWord="System for"
            headingBottom="Growth."
            body="No need to figure it all out alone. You'll be plugged into a proven system. Launching a business is hard. So we simplified it. ASCND gives you:"
            pills={[
              "Proposal tools & quoting platforms",
              "Project management dashboards",
              "Payment tracking and installer pay",
              "AI chat support (Everest) and contractor guidance",
              "Access to appointments and customer leads (Robinhood Home)",
            ]}
            index={3}
          />

          <WhyItem
            image={trade}
            headingTop="The Fastest Way to"
            gradientWord="Start a"
            headingBottom="Trades Business."
            body="Just like the other sections in this accordion dropdown, this little section needs some additional copy to live in this place that is formatted to end with something to lead into the pill items below:"
            pills={[
              "Launch with little or no capital",
              "Operate legally in your state with our licensing support",
              "Tap into jobs and active demand",
              "Grow with confidence under the ASCND brand—or white-label your own",
            ]}
            index={4}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ContractorWhy
