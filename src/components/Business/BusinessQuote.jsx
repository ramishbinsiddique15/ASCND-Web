"use client"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import quote from "../../assets/icons/quote.svg"
import logo from "../../assets/icons/logo.svg"
import doubleArrow from "../../assets/icons/double-arrow.svg"

const BusinessQuote = () => {
  const prefersReduced = useReducedMotion()
  const MotionLink = motion(Link)

  const containerVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.1,
          },
        },
      }

  const logoVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, scale: 0.5, rotateY: -180 },
        show: {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 15,
            duration: 1.2,
          },
        },
      }

  const textVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }

  const buttonVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }

  return (
    <div className="relative w-full bg-[#F6F6F4] py-12 sm:py-14 md:py-16 pt-32 sm:pt-36 md:pt-40 lg:pt-44">
      <div className="mx-auto px-4 sm:px-6 max-w-7xl 1821:max-w-[150rem]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
          {/* Left side - Content */}
          <motion.div
            className="space-y-4 sm:space-y-5 md:space-y-6 "
            variants={containerVar}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={logo}
              alt="ASCND Logo"
              className="h-6 sm:h-7 md:h-8 w-auto"
              variants={logoVar}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            />

            <motion.h1
              className="font-[700] text-[#0D1318]
          text-3xl leading-8
sm:text-4xl sm:leading-10
md:text-5xl md:leading-[48px]
lg:text-6xl lg:leading-[56px]
xl:text-[74px] xl:leading-[55px]
2xl:text-[74px] 2xl:leading-[55px]
1821:text-[102px] 1821:leading-[80px]

tracking-[-0.04em]

          "
              variants={textVar}
              style={{ perspective: "1000px" }}
            >
              <span
                style={{
                  background: "linear-gradient(to right, rgba(13, 19, 24, 1) 20%, rgba(255, 76, 22, 1) 50%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Start as a setter.
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(to right, #0D1318 20%, #FF4C16 50%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Close your own deals.
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(to right, #0D1318 20%, #FF4C16 50%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Lead a team.
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(to right, #0D1318 20%, #FF4C16 50%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Open your own dealership.
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(to right, #0D1318 20%, #FF4C16 50%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Run your own installation business.
              </span>
              <br />
              In turf. In solar. In anything.
            </motion.h1>

            <MotionLink
              to="/business-apply"
              className="inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-4 py-2.5  font-[700] uppercase tracking-[0.25em] text-[#F6F6F4] transition-colors duration-300 sm:px-6 sm:py-3 text-[11px] md:px-7 md:py-3.5  overflow-hidden relative mt-5"
              variants={buttonVar}
              aria-label="Apply to ASCND"
            >
              <span>Apply Today</span>
              <motion.img
                src={doubleArrow}
                alt=""
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex-shrink-0"
              />
            </MotionLink>
          </motion.div>

          {/* Right side - Quote Image */}
          <motion.div
            className="flex justify-center items-center lg:block"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={quote}
              className="w-64 sm:w-80 lg:w-96 1821:w-[550px] lg:relative lg:-top-44 lg:right-32 1821:-top-60 1821:right-52"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BusinessQuote
