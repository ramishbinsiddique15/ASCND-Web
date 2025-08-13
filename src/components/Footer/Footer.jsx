import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import logo from '../../assets/icons/logo-white.png';
import bg from '../../assets/img/footer.png';

// Animation variants (align with other sections)
const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { delayChildren: 0.12, staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const dividerVar = {
  hidden: { scaleX: 0, opacity: 0.7 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.1 } },
};

// Content data
const groups = [
  {
    title: 'ASCND YOUR HOME',
    items: ['Home Services', 'Why ASCND your home?', 'Homeowner Growth Model', 'Request a Quote'],
  },
  {
    title: 'ASCND YOUR BUSINESS',
    items: ['Contractor Services', 'Why ASCND your business?', 'Growth Model', 'Apply to ASCND'],
  },
  {
    title: 'LEARN MORE',
    items: ['About ASCND'],
  },
];

const Pill = ({ title, items }) => (
  <motion.div className="" variants={fadeUp}>
    {/* Flat, full-width header bar */}
    <div className="mb-4 w-full  bg-[#E6E6E6] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0D1318] sm:text-[12px]">
      {title}
    </div>
    <ul className="grid gap-2 px-0 pb-1 text-white/90 sm:gap-2.5">
      {items.map((it, idx) => (
        <li key={it} className="flex items-center gap-4 text-[12px] uppercase tracking-[0.14em]">
          <span className={`inline-block size-[10px] rounded-full ${idx === 0 ? 'bg-white' : 'border border-white/70'}`} />
          <span className="truncate">{it}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Footer = () => {
  return (
  <motion.footer
    className="relative isolate w-full overflow-hidden rounded-t-2xl text-white"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.35, margin: '0px 0px -10% 0px' }}
  >
      {/* Background image */}
      <img
        src={bg}
        alt="ASCND background"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />
      <motion.div className="mx-auto grid min-h-[100vh] max-w-[100rem] grid-rows-[1fr_auto] px-3 pb-3 pt-6 sm:px-6 md:px-8 lg:px-10" variants={container}>
        {/* Row 1: all primary content starts after ~half height */}
        <motion.section className="relative pt-[36vh] sm:pt-[42vh] md:pt-[48vh] lg:pt-[50vh]" variants={container}>
          {/* Logo then divider */}
          {/* Logo row with right-aligned social icons */}
          <motion.div className="mb-3 flex items-center justify-between sm:mb-4" variants={fadeUp}>
            <div className="flex items-center gap-2">
              <img src={logo} alt="ASCND" className="h-6 w-auto sm:h-7 md:h-8" />
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="#" aria-label="Discord" className="grid size-9 place-items-center rounded-full bg-white text-[#FF4C16] shadow-md transition hover:bg-white/90 sm:size-10"><FaDiscord className="size-5" /></a>
              <a href="#" aria-label="Instagram" className="grid size-9 place-items-center rounded-full bg-white text-[#FF4C16] shadow-md transition hover:bg-white/90 sm:size-10"><FaInstagram className="size-5" /></a>
              <a href="#" aria-label="LinkedIn" className="grid size-9 place-items-center rounded-full bg-white text-[#FF4C16] shadow-md transition hover:bg-white/90 sm:size-10"><FaLinkedin className="size-5" /></a>
            </div>
          </motion.div>
          <motion.div className="mb-6 h-[2px] w-full bg-white/70 origin-left sm:mb-8" variants={dividerVar} />

          {/* Headline */}
          <motion.h2
            className="max-w-5xl text-7xl  font-extrabold leading-tighter tracking-tighter"
            style={{ textShadow: '0 2px 0 rgba(0,0,0,.65), 0 18px 40px rgba(0,0,0,.55)' }}
            variants={fadeUp}
          >
            Advanced Strategies
            <br className="hidden sm:block" /> in Construction
            <br className="hidden md:block" /> & National Distribution
          </motion.h2>

          {/* Pills inside a double-bordered container */}
          <motion.div className="mt-6 rounded-3xl border border-white p-3 sm:mt-8" variants={fadeUp}>
            <div className="p-2 sm:p-3">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-3" >
                {groups.map((g) => (
                  <Pill key={g.title} title={g.title} items={g.items} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Row 2: Bottom bar pinned to bottom */}
        <motion.div className="mt-6 flex items-center gap-10 border-t border-white pt-3 text-[11px] text-white sm:mt-8 sm:pt-4 sm:text-[12px]" variants={fadeUp}>
          <span>© ASCND Industries, 2025</span>
            <a className="underline" href="#">Privacy Policy</a>
            <a className="underline" href="#">Cookies</a>
        
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;