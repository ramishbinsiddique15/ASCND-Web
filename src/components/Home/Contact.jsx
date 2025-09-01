"use client"
import { motion } from "framer-motion"
import logo from "../../assets/icons/logo-orange.svg"
import man from "../../assets/img/man.png"
import contact from "../../assets/img/contact.png"
import doubleArrow from "../../assets/icons/double-arrow.svg"
import doubleArrowWhite from "../../assets/icons/double-arrow-white.svg"

// Simplified animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
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

const slideLeft = {
  hidden: { x: -30, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const slideRight = {
  hidden: { x: 30, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
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
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const formField = {
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

const Contact = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .placeholder-with-orange-asterisk::placeholder {
            background: linear-gradient(to right, #0D1318 0%, #0D1318 calc(100% - 8px), #FF4C16 calc(100% - 8px));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            opacity: 0.6;
          }
          .placeholder-with-orange-asterisk::-webkit-input-placeholder {
            background: linear-gradient(to right, #0D1318 0%, #0D1318 calc(100% - 8px), #FF4C16 calc(100% - 8px));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            opacity: 0.6;
          }
          .placeholder-with-orange-asterisk::-moz-placeholder {
            background: linear-gradient(to right, #0D1318 0%, #0D1318 calc(100% - 8px), #FF4C16 calc(100% - 8px));
            background-clip: text;
            color: transparent;
            opacity: 0.6;
          }
        `
      }} />
      
      
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
              />
              <motion.hr className="border-t border-[#FF4C16] mt-2 origin-left" variants={dividerVar} />

              {/* Orange subscribe panel below the divider */}
              <motion.div
                className="relative mt-3 overflow-visible h-82 rounded-2xl bg-[#FF4C16]"
                variants={fadeUp}
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
                      className=" text-[#F6F6F4] 
                      text-[16px] leading-[16px]
  sm:text-[18px] sm:leading-[18px]
  md:text-[20px] md:leading-[20px]
  lg:text-[24px] lg:leading-[24px]
  xl:text-[32px] xl:leading-[32px]
  2xl:text-[38px] 2xl:leading-[38px]
  1821:text-[45px] 1821:leading-[45px]
  font-[700]
  tracking-[-0.04em]
                      "
                      variants={fadeUp}
                    >
                      Subscribe to follow
                      <br /> along with our latest
                      <br /> news & updates.
                    </motion.h3>
                    <motion.hr className="border-t border-[#F6F6F4] mt-4 sm:mt-5 origin-left" variants={dividerVar} />

                    {/* input + button in a row */}
                    <motion.div className="mt-4 sm:mt-5 flex w-full items-stretch gap-2 sm:gap-3" variants={fadeUp}>
                      <motion.input
                        type="email"
                        placeholder="ENTER YOUR EMAIL ADDRESS"
                        className="flex-1 min-w-0 rounded-md border border-[#F6F6F4]/60 bg-[#FF4C1680]/50 px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold uppercase tracking-[0.25em] text-[#F6F6F4] placeholder-[#F6F6F4] outline-none  focus:border-[#F6F6F4]"
                        variants={formField}
                      />
                      <motion.button
                        className="flex-shrink-0 whitespace-nowrap rounded-md bg-[#F6F6F4] px-4 py-2.5 text-[11px] sm:px-5 sm:py-3  font-semibold uppercase tracking-[0.25em] text-[#FF4C16] shadow-sm hover:bg-[#F6F6F4]/95 flex items-center justify-center gap-2 min-w-[140px] sm:min-w-[160px]"
                        variants={formField}
                      >
                        Subscribe
                        <img src={doubleArrow} className="flex-shrink-0" alt="" />
                      </motion.button>
                    </motion.div>

                    {/* fine print */}
                    <motion.p
                      className="mt-3 text-[11px] leading-[16px] text-[#F6F6F4] w-[60%]"
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
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                >
                  <img src={man || "/placeholder.svg"} alt="" className="h-full w-full rounded-br-2xl" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.article
              className="rounded-2xl border border-[#4B5361] bg-[#FAFBFB] shadow-sm p-3 sm:p-4 md:p-6"
              variants={slideRight}
            >
              <motion.h4 className="text-[#4B5361] mb-3 sm:mb-4
              text-[14px] leading-[20px]
  sm:text-[16px] sm:leading-[24px]
  md:text-[18px] md:leading-[28px]
  2xl:text-[18px] 2xl:leading-[26px]
  1821:text-[20px] 1821:leading-[28px] font-[700]
  tracking-[-0.02em]
              " variants={fadeUp}>
                Contact Us
              </motion.h4>
              <motion.form className="space-y-3" variants={container}>
                <motion.div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2" variants={formField}>
                  <motion.input
                    type="text"
                    placeholder="FIRST NAME*"
                    className="placeholder-with-orange-asterisk rounded-lg border border-[#4B5361] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3  font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-2 focus:border-[#FF4C16] transition-all"
                    variants={formField}
                  />
                  <motion.input
                    type="text"
                    placeholder="LAST NAME*"
                    className="placeholder-with-orange-asterisk rounded-lg border border-[#4B5361] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3  font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-2 focus:border-[#FF4C16] transition-all"
                    variants={formField}
                  />
                </motion.div>

                <motion.input
                  type="email"
                  placeholder="EMAIL ADDRESS*"
                  className="placeholder-with-orange-asterisk w-full rounded-lg border border-[#4B5361] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3  font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-2 focus:border-[#FF4C16] transition-all"
                  variants={formField}
                />

                <motion.textarea
                  rows={4}
                  placeholder="MESSAGE*"
                  className="placeholder-with-orange-asterisk w-full rounded-lg border border-[#4B5361] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3  sm:rows-5 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-2 focus:border-[#FF4C16] transition-all"
                  variants={formField}
                />

                <motion.div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto] items-center" variants={formField}>
                  <motion.label
                    className="flex items-center gap-2 rounded-lg border border-[#4B5361] bg-[#B0B8C740]/25 px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold text-[#4B5361] cursor-pointer h-full"
                  >
                    <input type="checkbox" className="accent-[#0D1318] w-4 h-4 cursor-pointer" />
                    <span>Subscribe to news & updates</span>
                  </motion.label>
                  <motion.button
                    type="button"
                    className="rounded-lg bg-[#0D1318] px-6 py-2.5 text-[11px] sm:px-8 sm:py-3 font-[700] uppercase tracking-[0.25em] text-[#F6F6F4] flex items-center justify-center gap-2 hover:bg-[#0D1318]/90 cursor-pointer h-full"
                    variants={formField}
                  >
                    Submit
                    <img src={doubleArrowWhite} alt="" />
                  </motion.button>
                </motion.div>

                <motion.div
                  className="text-[11px] text-[#4B5361] font-[600] leading-[16px] mt-2"
                  variants={fadeUp}
                >
                  <p>
                    We send periodic news and updates to our subscribers. Check the box above to sign up. You can
                    unsubscribe at any time. For more info please review our{" "}
                    <a href="#" className="underline">
                      Privacy Policy
                    </a>
                    . <br/>
                    By clicking submit, you consent to allow ASCND to store and process the info you submitted in order to
                    provide the content requested.
                  </p>
                </motion.div>
                <hr className="border-t border-1 border-[#4B5361]" />
              </motion.form>
            </motion.article>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Contact