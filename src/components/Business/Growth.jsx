import React from 'react';
import { motion } from 'framer-motion';
import grow from '../../assets/img/growth.jpg';

// Image clip path to match the reference screenshot - angled top-left corner
const bevel =200;
const IMAGE_CLIP = `polygon(
  0 0,
  calc(100% - ${bevel}px) 0,
  100% ${bevel}px,
  100% 100%,
  ${bevel}px 100%,
  0 calc(100% - ${bevel}px)
)`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Growth = () => {
  return (
    <motion.section 
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-12 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Left: Outlined clipped text block */}
          <motion.div 
            className="md:col-span-6"
            variants={itemVariants}
          >
            <div className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px]">
             
              {/* Content */}
              <div
                className="relative rounded-xl sm:rounded-2xl py-6 sm:py-8 md:py-10 lg:py-12"
              >
                <h3 className="text-[22px] font-extrabold leading-[0.85] text-[#0b0c0e] sm:text-[26px] sm:leading-[0.8] md:text-[32px] lg:text-[40px] xl:text-[48px]">
                  We don't just help you
                  <br /> get into the industry,
                  <br /><span className="text-[#FF4C16]"> we give you a clear</span>
                  <br /><span className="text-[#FF4C16]"> path to grow in it.</span>
                </h3>
                <p className="mt-3 ml-auto w-[70%] text-[12px] font-semibold tracking-tight text-[#0D1318]/70 leading-tight sm:mt-4 sm:w-[65%] sm:text-[13px] md:w-[60%] md:text-[14px] lg:text-[15px]">
                  At ASCND, we believe that smart home upgrades don’t just improve your space today; they build long-term value,
                  efficiency, and comfort.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image with angled top-left corner clip */}
          <motion.div 
            className="md:col-span-6"
            variants={itemVariants}
          >
            <div className="relative h-48 overflow-hidden rounded-xl sm:h-56 sm:rounded-2xl md:h-[320px] lg:h-[380px] xl:h-[420px]">
              <img
                src={grow}
                alt="Home should grow with you"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ clipPath: IMAGE_CLIP, WebkitClipPath: IMAGE_CLIP }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Growth;