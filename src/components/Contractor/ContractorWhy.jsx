import React from 'react';
import { motion } from 'framer-motion';
import learn from '../../assets/img/learn.jpg';
import turn from '../../assets/img/turn.jpg';
import local from '../../assets/img/local.jpg';
import plug from '../../assets/img/plug.jpg';
import trade from '../../assets/img/trade.jpg';
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
    className="inline-block rounded-full border-2 border-[#0D1318] bg-white px-2.5 py-1 text-[12px] font-semibold text-[#0D1318] shadow-sm sm:px-3 sm:py-1.5 sm:text-[11px] md:px-3.5 md:text-[14px]"
  >
    {label}
  </motion.span>
);

const bevel = 200; /* adjust to match the slope length in your image */
const CLIP_DIAG_LEFT_TO_RIGHT = `polygon(
  0 0,
  calc(100% - ${bevel}px) 0,
  100% ${bevel}px,
  100% 100%,
  ${bevel}px 100%,
  0 calc(100% - ${bevel}px)
)`;
const CLIP_DIAG_RIGHT_TO_LEFT = `polygon(
  ${bevel}px 0,
  100% 0,
  100% calc(100% - ${bevel}px),
  calc(100% - ${bevel}px) 100%,
  0 100%,
  0 ${bevel}px
)`;

const WhyItem = ({ image, clip = CLIP_DIAG_LEFT_TO_RIGHT, headingTop, headingBottom, gradientWord, body, pills, index }) => (
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
          style={{ clipPath: index % 2 === 0 ? CLIP_DIAG_RIGHT_TO_LEFT : CLIP_DIAG_LEFT_TO_RIGHT, WebkitClipPath: index % 2 === 0 ? CLIP_DIAG_RIGHT_TO_LEFT : CLIP_DIAG_LEFT_TO_RIGHT }}
        />
      </div>
    </motion.div>

    {/* Text */}
    <motion.div className="w-full md:col-span-7 h-full md:pl-4 lg:pl-6 xl:pl-10 flex flex-col justify-end pb-4 sm:pb-6 md:pb-8" variants={textVar}>
      <h3 className="text-[24px] font-extrabold leading-[1.02] text-[#0b0c0e] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px]">
        {index === 0 ? (
          <>
            Learn the Trade.
            <br />
            <GradientWord>{gradientWord} the Company.</GradientWord>
          </>
        ) : index === 1 ? (
          <>
            Turn Side Jobs Into
            <br />
            <GradientWord>{gradientWord} Business.</GradientWord>
          </>
        ) : index === 2 ? (
          <>
            <GradientWord>{headingTop}</GradientWord>
            <br />
            in
            Multiple Trades.
          </>
        ) : index === 3 ? (
          <>
            A Plug-and-Play
            <br />
            <GradientWord>{gradientWord} Growth.</GradientWord>
          </>
        ) : (
          <>
            <GradientWord>{headingTop}</GradientWord> to
            <br />
            Start a Trades Business.
          </>
        )}
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
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6  ">
        {/* Heading */}
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', stiffness: 130, damping: 22 }}
          className="pb-3 pt-3 sm:pb-4 sm:pt-4 md:pb-5 md:pt-5"
        >
          <h2 className="text-[28px] font-extrabold leading-[0.8] text-[#0b0c0e] sm:text-[36px] md:text-[60px] lg:text-[72px] xl:text-8xl">
            Why ASCND?
          </h2>
          <div className="mt-2 border-t border-black/15 sm:mt-3" />
        </motion.div>

        <div className="flex flex-col gap-12 py-4 sm:gap-14 sm:py-6 md:gap-16 md:py-8 lg:gap-20 lg:py-10">
          <WhyItem
            image={learn}
            headingTop="Learn the Trade."
            gradientWord="Launch"
            headingBottom="the Company."
            body="We don’t just help you sell—we help you become the installer. Whether you’re new to solar or want to add epoxy, turf, HVAC, or lighting to your service offerings, ASCND gives you:"
            pills={[
              'Hands-on training and onboarding',
              'Project-ready customers in your area',
              'Licensing and compliance guidance',
              'Access to tools, tech, and systems',
              'Support staff to help you grow',
            ]}
            index={0}
          />

          <WhyItem
            image={turn}
            headingTop="Turn Side Jobs Into"
            gradientWord="a Scalable"
            headingBottom="Business."
            body="You can start in one vertical—like epoxy or solar—and expand into others when you’re ready. Tired of bouncing between gig work or subcontracting? We help you:"
            pills={[
              'Go from crew to company',
              'Handle quoting, scheduling, and fulfillment',
              'Get paid fast—no waiting 30/60/90',
              'Win repeat and referral business',
            ]}
            index={1}
          />

          <WhyItem
            image={local}
            headingTop="Become the Local Pro"
            headingBottom="in Multiple Trades."
            body="You can operate as the installer, sell through our network, or build your own team. The business is yours. We just help you build it. We’ll help you set up a branded, full-service operation in:"
            pills={[
              'Solar Installations',
              'Roof Replacements',
              'HVAC Install & Repair',
              'Garage Epoxy Flooring',
              'Turf & Artificial Grass',
              'Permanent Lighting',
              'Blinds & Window Treatments',
            ]}
            index={2}
          />

          <WhyItem
            image={plug}
            headingTop="A Plug-and-Play"
            gradientWord="System for"
            headingBottom="Growth."
            body="No need to figure it all out alone. You’ll be plugged into a proven system. Launching a business is hard. So we simplified it. ASCND gives you:"
            pills={[
              'Proposal tools & quoting platforms',
              'Project management dashboards',
              'Payment tracking and installer pay',
              'AI chat support (Everest) and contractor guidance',
              'Access to appointments and customer leads (Robinhood Home)',
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
              'Launch with little or no capital',
              'Operate legally in your state with our licensing support',
              'Tap into jobs and active demand',
              'Grow with confidence under the ASCND brand—or white-label your own',
            ]}
            index={4}
          />
        </div>
      </div>
    </section>
  );
};

export default ContractorWhy;