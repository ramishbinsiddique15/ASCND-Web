import React from 'react';
import { motion } from 'framer-motion';
import power from '../../assets/img/learn.jpg';
import comfort from '../../assets/img/turn.jpg';
import protect from '../../assets/img/local.jpg';
import plug from "../../assets/img/plug.jpg";
import trade from "../../assets/img/trade.jpg";
import doubleArrowWhite from '../../assets/icons/double-arrow-white.png';

// Animation variants
const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { delayChildren: 0.1, staggerChildren: 0.12 } },
};

const imgVar = {
  hidden: { x: -22, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 140, damping: 22 } },
};

const textVar = {
  hidden: { x: 22, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 160, damping: 24 } },
};

const pillVar = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 160, damping: 24 } },
};

const GradientWord = ({ children }) => (
  <span
    className="bg-clip-text text-transparent"
    style={{ backgroundImage: 'linear-gradient(90deg, #0D1318 0%, #FF4C16 100%)' }}
  >
    {children}
  </span>
);

const Pill = ({ label }) => (
  <motion.span
    variants={pillVar}
    className="inline-block rounded-full border-2 border-[#0D1318] bg-white px-2.5 py-1 text-[10px] font-semibold text-[#0D1318] shadow-sm sm:px-3 sm:py-1.5 sm:text-[11px] md:px-3.5 md:text-[12px]"
  >
    {label}
  </motion.span>
);

const bevel =200; /* adjust to match the slope length in your image */
const CLIP_DIAG = `polygon(
  0 0,
  calc(100% - ${bevel}px) 0,
  100% ${bevel}px,
  100% 100%,
  ${bevel}px 100%,
  0 calc(100% - ${bevel}px)
)`;


const WhyItem = ({ image, clip = CLIP_DIAG, headingTop, headingBottom, gradientWord, body, pills }) => (
  <motion.div
    className="grid grid-cols-1 items-stretch gap-4 sm:gap-6 md:grid-cols-12 md:gap-8 lg:gap-10"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3, margin: '0px 0px -10% 0px' }}
    variants={container}
  >
    {/* Image */}
    <motion.div className="md:col-span-5" variants={imgVar}>
      <div className="relative h-48 overflow-hidden rounded-xl sm:h-56 sm:rounded-2xl md:h-[320px] lg:h-[400px] xl:h-[460px]">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ clipPath: clip, WebkitClipPath: clip }}
        />
      </div>
    </motion.div>

    {/* Text */}
    <motion.div className="w-full md:col-span-7 h-full md:pl-4 lg:pl-6 xl:pl-10 flex flex-col justify-end pb-4 sm:pb-6 md:pb-8" variants={textVar}>
      <h3 className="text-[24px] font-extrabold leading-[1.02] text-[#0b0c0e] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px]">
        {headingTop} <GradientWord>{gradientWord}</GradientWord>
        <br />
        {headingBottom}
      </h3>
      <p className="mt-3 text-[13px] leading-6 font-semibold tracking-tight text-[#636E80] sm:mt-4 sm:text-[14px] sm:leading-7 md:text-[14.5px]">
        {body}
      </p>
      <motion.div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5" variants={container}>
        {pills.map((p) => (
          <Pill key={p} label={p} />
        ))}
      </motion.div>
      <motion.button
        className="w-fit mt-4 inline-flex items-center gap-2 rounded-md bg-[#FF4C16] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#e74312] sm:mt-5 sm:px-5 sm:py-2.5 sm:text-[11px] md:text-[12px]"
        variants={pillVar}
      >
        Apply Now
        <img src={doubleArrowWhite} alt="" className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
      </motion.button>
    </motion.div>
  </motion.div>
);

const ContractorWhy = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', stiffness: 130, damping: 22 }}
          className="pb-3 pt-3 sm:pb-4 sm:pt-4 md:pb-5 md:pt-5"
        >
          <h2 className="text-[28px] font-extrabold leading-tight text-[#0b0c0e] sm:text-[36px] md:text-[60px] lg:text-[72px] xl:text-8xl">
            Why ASCND?
          </h2>
          <div className="mt-2 border-t border-black/15 sm:mt-3" />
        </motion.div>

        <div className="flex flex-col gap-12 py-4 sm:gap-14 sm:py-6 md:gap-16 md:py-8 lg:gap-20 lg:py-10">
          <WhyItem
            image={power}
            headingTop=""
            gradientWord="Speed matters."
            headingBottom="We don’t waste time."
            body="Most homeowners wait weeks (or months) just to get started. ASCND has streamlined operations to eliminate delays—so you can start your project right away and enjoy it sooner.."
            pills={[
              'Lightning-fast quotes',
              'Pre-vetted contractor',
              'Direct project management',
              'Clear communication from start to finish',
            ]}
          />

          <WhyItem
            image={comfort}
            headingTop="Better Pricing."
            gradientWord="No Games."
            headingBottom=""
            body="We don’t believe in bloated quotes or shady change orders. Our pricing is transparent, competitive, and built to protect your wallet— and your trust."
            pills={[
              'Price-matched offers',
              'Bundled project discounts',
              'Financing options available',
              'No hidden fees or surprise charges',
            ]}
          />

          <WhyItem
            image={protect}
            headingTop=""
            gradientWord="Trusted Work."
            headingBottom="Real Results."
            body="We work with licensed, vetted professionals who meet our standards of quality and professionalism. From design to final walkthrough, our project team guides every step of the way."
            pills={[
              'Full warranties',
              'Reliable materials',
              'Clean, efficient installs',
              'Local contractor partnerships',
            ]}
          />

          {/* New items using remaining images */}
          <WhyItem
            image={plug}
            headingTop=""
            gradientWord="Plug in and grow."
            headingBottom="We connect you with demand."
            body="Tap into ASCND’s pipeline of ready-to-go installs and use our tools to quote, schedule, and deliver—so you can focus on the work."
            pills={[
              'Leads in your area',
              'Tools and systems',
              'Scheduling support',
              'Scale with confidence',
            ]}
          />

          <WhyItem
            image={trade}
            headingTop="Train with Pros."
            gradientWord="Own your future."
            headingBottom=""
            body="Get hands-on training, mentorship, and clear pathways to grow from crew to company owner—on your timeline."
            pills={[
              'Real jobsite training',
              'Compliance guidance',
              'Business playbooks',
              'Community & referrals',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ContractorWhy;