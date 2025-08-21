"use client"
import { motion } from "framer-motion"
import logo from "../../assets/icons/logo-orange.png"
import man from "../../assets/img/man.png"
import contact from "../../assets/img/contact.png"
import doubleArrow from "../../assets/icons/double-arrow.png"
import doubleArrowWhite from "../../assets/icons/double-arrow-white.png"

// Animation variants (matching style from other components)
const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: {
    y: 60,
    opacity: 0,
    rotateX: 15,
    rotateZ: -3,
    filter: "blur(12px)",
    scale: 0.9,
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    rotateZ: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      mass: 1.2,
    },
  },
}

const slideLeft = {
  hidden: {
    x: -80,
    opacity: 0,
    rotateY: -15,
    rotateZ: 5,
    filter: "blur(15px)",
    scale: 0.85,
  },
  show: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    rotateZ: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      mass: 1.5,
    },
  },
}

const slideRight = {
  hidden: {
    x: 80,
    opacity: 0,
    rotateY: 15,
    rotateZ: -5,
    filter: "blur(15px)",
    scale: 0.85,
  },
  show: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    rotateZ: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      mass: 1.5,
    },
  },
}

const dividerVar = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    rotateZ: -15,
    filter: "blur(5px)",
  },
  show: {
    scaleX: 1,
    opacity: 1,
    rotateZ: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.4,
    },
  },
}

const formField = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.9,
    rotateX: 15,
    filter: "blur(8px)",
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 22,
      mass: 1,
    },
  },
}

const buttonHover = {
  scale: 1.05,
  y: -2,
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  },
}

const Contact = () => {
  return (
    <motion.section
      className="w-full overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -15% 0px" }}
    >
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 py-6 sm:py-8 md:py-12 overflow-hidden">
        <motion.div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2" variants={container}>
          {/* Left: Subscribe card (white card with inset orange panel) */}
          <motion.div className="self-end" variants={slideLeft}>
            <motion.img
              src={logo}
              alt="ASCND"
              className="h-5 sm:h-6 w-auto md:h-7"
              variants={fadeUp}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <motion.hr className="border-t border-[#FF4C16] mt-2 origin-left" variants={dividerVar} />

            {/* Orange subscribe panel below the divider */}
            <motion.div
              className="relative mt-3 overflow-visible h-82 rounded-2xl bg-[#FF4C16]"
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(255, 76, 22, 0.2)",
                transition: { type: "spring", stiffness: 300, damping: 25 },
              }}
            >
              {/* background solar graphic */}
              <img
                src={contact || "/placeholder.svg"}
                alt=""
                className="absolute inset-0 h-full w-full rounded-2xl object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-[#FF4C16] mix-blend-multiply opacity-100 rounded-2xl" />

              {/* content */}
              <div className="relative grid grid-cols-1 items-end gap-4 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4 md:px-6 md:pb-6 md:min-h-[260px] h-full z-50">
                <div className="self-end">
                  <motion.h3
                    className="text-[20px] sm:text-[24px] font-extrabold leading-[0.8] text-white md:text-[28px] lg:text-[32px]"
                    variants={fadeUp}
                  >
                    Subscribe to follow
                    <br /> along with our latest
                    <br /> news & updates.
                  </motion.h3>
                  <motion.hr className="border-t border-white mt-4 sm:mt-5 origin-left" variants={dividerVar} />

                  {/* input + button in a row */}
                  <motion.div className="mt-4 sm:mt-5 flex max-w-lg items-stretch gap-2 sm:gap-3" variants={fadeUp}>
                    <motion.input
                      type="email"
                      placeholder="ENTER YOUR EMAIL ADDRESS"
                      className="w-full rounded-md border border-white/60 bg-[#FF4C16]/50 px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 sm:text-[12px] font-semibold uppercase tracking-[0.16em] text-white placeholder-white/80 outline-none backdrop-blur-sm focus:border-white"
                      variants={formField}
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                        transition: { type: "spring", stiffness: 300, damping: 25 },
                      }}
                    />
                    <motion.button
                      className="whitespace-nowrap rounded-md bg-white px-4 py-2.5 text-[10px] sm:px-5 sm:py-3 sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF4C16] shadow-sm hover:bg-white/95 flex items-center gap-2"
                      variants={formField}
                      whileHover={buttonHover}
                      whileTap={{ scale: 0.98 }}
                    >
                      Subscribe
                      <motion.img
                        src={doubleArrow}
                        className="w-2 h-2"
                        alt=""
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                    </motion.button>
                  </motion.div>

                  {/* fine print */}
                  <motion.p
                    className="mt-3 text-[10px] sm:text-[11px] leading-4 sm:leading-5 text-white/80"
                    variants={fadeUp}
                  >
                    By subscribing, you consent to allow ASCND to store and process the info you submitted in order to
                    provide the content requested. You can unsubscribe at any time. For more info, please review our
                    Privacy Policy.
                  </motion.p>
                </div>
              </div>

              {/* worker image on the right */}
              <motion.div
                className="pointer-events-none absolute bottom-0 right-0 select-none hidden sm:block"
                initial={{ scale: 0.7, opacity: 0, x: 30, y: 15, rotateY: 10, filter: "blur(8px)" }}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0, rotateY: 0, filter: "blur(0px)" }}
                transition={{ delay: 1.2, type: "spring", stiffness: 80, damping: 25, mass: 1.5 }}
              >
                <img src={man || "/placeholder.svg"} alt="" className="h-full w-full rounded-br-2xl" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.article
            className="rounded-2xl border border-[#0D1318]/20 bg-[#FAFBFB] shadow-sm p-3 sm:p-4 md:p-6"
            variants={slideRight}
            whileHover={{
              boxShadow: "0 20px 40px rgba(13, 19, 24, 0.1)",
              transition: { type: "spring", stiffness: 300, damping: 25 },
            }}
          >
            <motion.h4 className="text-[18px] sm:text-[20px] font-bold text-[#4B5361] mb-3 sm:mb-4" variants={fadeUp}>
              Contact Us
            </motion.h4>
            <motion.form className="space-y-3" variants={container}>
              <motion.div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2" variants={formField}>
                <motion.input
                  type="text"
                  placeholder="FIRST NAME*"
                  className="rounded-lg border border-[#D9D9D9] bg-white px-3 py-2.5 text-[12px] sm:px-4 sm:py-3 sm:text-[14px] font-semibold tracking-[0.14em] text-[#0D1318] outline-none placeholder-[#0D1318]/60 focus:border-2 focus:border-[#FF4C16] transition-all"
                  variants={formField}
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 15px rgba(255, 76, 22, 0.2)",
                    transition: { type: "spring", stiffness: 300, damping: 25 },
                  }}
                />
                <motion.input
                  type="text"
                  placeholder="LAST NAME*"
                  className="rounded-lg border border-[#D9D9D9] bg-white px-3 py-2.5 text-[12px] sm:px-4 sm:py-3 sm:text-[14px] font-semibold tracking-[0.14em] text-[#0D1318] outline-none placeholder-[#0D1318]/60 focus:border-2 focus:border-[#FF4C16] transition-all"
                  variants={formField}
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 15px rgba(255, 76, 22, 0.2)",
                    transition: { type: "spring", stiffness: 300, damping: 25 },
                  }}
                />
              </motion.div>

              <motion.input
                type="email"
                placeholder="EMAIL ADDRESS*"
                className="w-full rounded-lg border border-[#D9D9D9] bg-white px-3 py-2.5 text-[12px] sm:px-4 sm:py-3 sm:text-[14px] font-semibold tracking-[0.14em] text-[#0D1318] outline-none placeholder-[#0D1318]/60 focus:border-2 focus:border-[#FF4C16] transition-all"
                variants={formField}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(255, 76, 22, 0.2)",
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                }}
              />

              <motion.textarea
                rows={4}
                placeholder="MESSAGE*"
                className="w-full rounded-lg border border-[#D9D9D9] bg-white px-3 py-2.5 text-[12px] sm:px-4 sm:py-3 sm:text-[14px] sm:rows-5 font-semibold tracking-[0.14em] text-[#0D1318] outline-none placeholder-[#0D1318]/60 focus:border-2 focus:border-[#FF4C16] transition-all"
                variants={formField}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(255, 76, 22, 0.2)",
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                }}
              />

              <motion.div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto] items-center" variants={formField}>
                <motion.label
                  className="flex items-center gap-2 rounded-lg border border-[#D9D9D9] bg-[#F3F4F6] px-3 py-2.5 text-[12px] sm:px-4 sm:py-3 sm:text-[13px] font-semibold tracking-[0.08em] text-[#0D1318]/80"
                  whileHover={{
                    backgroundColor: "#E5E7EB",
                    transition: { type: "spring", stiffness: 300, damping: 25 },
                  }}
                >
                  <input type="checkbox" className="accent-[#0D1318]" />
                  <span>Subscribe to news & updates</span>
                </motion.label>
                <motion.button
                  type="button"
                  className="rounded-lg bg-[#0D1318] px-6 py-2.5 text-[12px] sm:px-8 sm:py-3 sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-white flex items-center gap-2 hover:bg-[#0D1318]/90"
                  variants={formField}
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit
                  <motion.img
                    src={doubleArrowWhite}
                    alt=""
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </motion.button>
              </motion.div>

              <motion.div
                className="text-[11px] sm:text-[12px] leading-4 sm:leading-5 text-[#0D1318]/60 mt-2"
                variants={fadeUp}
              >
                <p>
                  We send periodic news and updates to our subscribers. Check the box above to sign up. You can
                  unsubscribe at any time. For more info please review our{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
                <p className="mt-1">
                  By clicking submit, you consent to allow ASCND to store and process the info you submitted in order to
                  provide the content requested.
                </p>
              </motion.div>
            </motion.form>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
