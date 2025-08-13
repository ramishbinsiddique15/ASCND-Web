import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/icons/logo-orange.png';
import man from '../../assets/img/man.png';
import contact from '../../assets/img/contact.png';
import doubleArrow from '../../assets/icons/double-arrow.png';
import doubleArrowWhite from '../../assets/icons/double-arrow-white.png';

// Animation variants (matching style from other components)
const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { delayChildren: 0.12, staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const slideLeft = {
  hidden: { x: -24, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 150, damping: 22 } },
};

const slideRight = {
  hidden: { x: 24, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 150, damping: 22 } },
};

const dividerVar = {
  hidden: { scaleX: 0, opacity: 0.6 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Contact = () => {
  return (
    <motion.section
      className="w-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35, margin: '0px 0px -10% 0px' }}
    >
      <div className="mx-auto max-w-[100rem] px-4 md:px-8 py-8 md:py-12">
        <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2" variants={container}>
          {/* Left: Subscribe card (white card with inset orange panel) */}
          <motion.div className='self-end' variants={slideLeft}>
            <motion.img src={logo} alt="ASCND" className="h-6 w-auto md:h-7 " variants={fadeUp} />
            <motion.hr className="border-t border-[#FF4C16] mt-2 origin-left" variants={dividerVar} />

            {/* Orange subscribe panel below the divider */}
            <motion.div className="relative mt-3 overflow-visible h-82 rounded-2xl bg-[#FF4C16]" variants={fadeUp}>
              {/* background solar graphic */}
              <img src={contact} alt="" className="absolute inset-0 h-full w-full rounded-2xl object-cover opacity-70" />
              <div className='absolute inset-0 rounded-2xl bg-[#FF4C16]/80'/>

              {/* content */}
              <div className="relative grid grid-cols-1 items-end gap-4 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 md:min-h-[260px] h-full z-50">
                <div className=" self-end">
                  <motion.h3 className="text-[24px] font-extrabold leading-[1.1] text-white sm:text-[28px] md:text-[32px]" variants={fadeUp}>
                    Subscribe to follow
                    <br /> along with our latest
                    <br /> news & updates.
                  </motion.h3>
                  <motion.hr className='border-t border-white mt-5 origin-left' variants={dividerVar}/>

                  {/* input + button in a row */}
                  <motion.div className="mt-5 flex max-w-lg items-stretch gap-3" variants={fadeUp}>
                    <motion.input
                      type="email"
                      placeholder="ENTER YOUR EMAIL ADDRESS"
                      className="w-full rounded-md border border-white/60 bg-[#FF4C16]/50 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white placeholder-white/80 outline-none backdrop-blur-sm focus:border-white"
                    />
                    <motion.button className="whitespace-nowrap rounded-md bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF4C16] shadow-sm hover:bg-white/95 flex items-center gap-2" variants={fadeUp}>
                      Subscribe
                      <img src={doubleArrow} className="w-2 h-2" alt="" />
                    </motion.button>
                  </motion.div>

                  {/* fine print */}
                  <motion.p className="mt-3 text-[11px] leading-5 text-white/80" variants={fadeUp}>
                    By subscribing, you consent to allow ASCND to store and process the info you submitted in order to provide the
                    content requested. You can unsubscribe at any time. For more info, please review our Privacy Policy.
                  </motion.p>
                </div>
              </div>

              {/* worker image on the right */}
              <div className="pointer-events-none absolute bottom-0 right-0 select-none">
                <img src={man} alt="" className="h-full w-full rounded-br-2xl" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.article className="rounded-2xl border border-[#0D1318]/20 bg-[#FAFBFB] shadow-sm p-3" variants={slideRight}>
            <motion.h4 className="text-[20px] font-bold text-[#4B5361] mb-4" variants={fadeUp}>Contact Us</motion.h4>
            <motion.form className="space-y-3" variants={container}>
              <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-2" variants={fadeUp}>
                <motion.input
                  type="text"
                  placeholder="FIRST NAME*"
                  className="rounded-lg border border-[#D9D9D9] bg-white px-4 py-3 text-[14px] font-semibold tracking-[0.14em] text-[#0D1318] outline-none placeholder-[#0D1318]/60 focus:border-2 focus:border-[#FF4C16] transition-all"
                />
                <motion.input
                  type="text"
                  placeholder="LAST NAME*"
                  className="rounded-lg border border-[#D9D9D9] bg-white px-4 py-3 text-[14px] font-semibold tracking-[0.14em] text-[#0D1318] outline-none placeholder-[#0D1318]/60 focus:border-2 focus:border-[#FF4C16] transition-all"
                />
              </motion.div>

              <motion.input
                type="email"
                placeholder="EMAIL ADDRESS*"
                className="w-full rounded-lg border border-[#D9D9D9] bg-white px-4 py-3 text-[14px] font-semibold tracking-[0.14em] text-[#0D1318] outline-none placeholder-[#0D1318]/60 focus:border-2 focus:border-[#FF4C16] transition-all"
                variants={fadeUp}
              />

              <motion.textarea
                rows={5}
                placeholder="MESSAGE*"
                className="w-full rounded-lg border border-[#D9D9D9] bg-white px-4 py-3 text-[14px] font-semibold tracking-[0.14em] text-[#0D1318] outline-none placeholder-[#0D1318]/60 focus:border-2 focus:border-[#FF4C16] transition-all"
                variants={fadeUp}
              />

              <motion.div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto] items-center" variants={fadeUp}>
                <label className="flex items-center gap-2 rounded-lg border border-[#D9D9D9] bg-[#F3F4F6] px-4 py-3 text-[13px] font-semibold tracking-[0.08em] text-[#0D1318]/80">
                  <input type="checkbox" className="accent-[#0D1318]" />
                  <span>Subscribe to news & updates</span>
                </label>
                <motion.button type="button" className="rounded-lg bg-[#0D1318] px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white flex items-center gap-2 hover:bg-[#0D1318]/90" variants={fadeUp}>
                  Submit
                  <img src={doubleArrowWhite} alt="" />
                </motion.button>
              </motion.div>

              <motion.div className="text-[12px] leading-5 text-[#0D1318]/60 mt-2" variants={fadeUp}>
                <p>We send periodic news and updates to our subscribers. Check the box above to sign up. You can unsubscribe at any time. For more info please review our <a href="#" className="underline">Privacy Policy</a>.</p>
                <p className="mt-1">By clicking submit, you consent to allow ASCND to store and process the info you submitted in order to provide the content requested.</p>
              </motion.div>
            </motion.form>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;