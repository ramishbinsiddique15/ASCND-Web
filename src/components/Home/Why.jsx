import React from 'react';
import { motion } from 'framer-motion';
import power from '../../assets/img/speed.jpg';
import comfort from '../../assets/img/pricing.jpg';
import protect from '../../assets/img/work.jpg';

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
  className="inline-block rounded-full border-2 border-[#0D1318] bg-white px-3.5 py-1.5 text-[12px] font-semibold text-[#0D1318]shadow-sm"
  >
    {label}
  </motion.span>
);

const WhyItem = ({ image, headingTop, headingBottom, gradientWord, body, pills }) => (
  <motion.div
    className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-12 md:gap-10"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3, margin: '0px 0px -10% 0px' }}
    variants={container}
  >
    {/* Image */}
    <motion.div className="md:col-span-5" variants={imgVar}>
      <div className="relative h-56 overflow-hidden rounded-2xl md:h-[360px] lg:h-[766px]">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </motion.div>

    {/* Text */}
    <motion.div className="w-[75%] md:col-span-7 h-full md:pl-6 lg:pl-10 flex flex-col justify-end pb-32" variants={textVar}>
      <h3 className="text-[30px] font-extrabold leading-[1.02] text-[#0b0c0e] sm:text-[36px] md:text-[44px] lg:text-[52px]">
        {headingTop} <GradientWord>{gradientWord}</GradientWord>
        <br />
        {headingBottom}
      </h3>
      <p className="mt-4 text-[14px] leading-7 font-semibold tracking-tight text-[#636E80] sm:text-[14.5px]">
        {body}
      </p>
      <motion.div className="mt-5 flex flex-wrap gap-2.5" variants={container}>
        {pills.map((p) => (
          <Pill key={p} label={p} />
        ))}
      </motion.div>
    </motion.div>
  </motion.div>
);

const Why = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[100rem] px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', stiffness: 130, damping: 22 }}
          className="pb-4 pt-4"
        >
          <h2 className="text-[36px] font-extrabold leading-tight text-[#0b0c0e] sm:text-[44px] md:text-8xl">
            Why ASCND?
          </h2>
          <div className="mt-3 border-t border-black/15" />
        </motion.div>

        <div className="flex flex-col gap-10 py-6 md:gap-14 md:py-10">
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
        </div>
      </div>
    </section>
  );
};

export default Why;