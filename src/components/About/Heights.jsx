import React from 'react'
import { motion } from 'framer-motion'
import heights from "../../assets/img/heights.png";
import logo from "../../assets/icons/white-logo.png";
import mountain from "../../assets/img/mountain.png";

const Heights = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 1 },
    show: { 
      opacity: 1, 
      transition: { delayChildren: 0.12, staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const logoVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  return (
    <motion.section 
      className="relative w-full min-h-screen overflow-hidden pt-44 pb-72"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {/* Background image - B&W mountains */}
      <div className="absolute inset-0">
        <img 
          src={heights} 
          alt="Mountain landscape" 
          className="w-full h-full grayscale"
        />
      </div>

      {/* Orange overlay on mountains using the mountain image */}
      <div className="absolute inset-0">
        {/* Mountain image mirrored with opacity */}
        {/* <img 
          src={mountain} 
          alt="Mountain overlay" 
          className="absolute inset-0 h-full w-full object-cover opacity-70 scale-x-[-1]"
        /> */}
        {/* Orange overlay with mix-blend-multiply like in Contact.jsx */}
        <div className="absolute inset-0 bg-[#FF4C16]/80 mix-blend-multiply opacity-100" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Logo and heading */}
            <motion.div className="text-white" variants={itemVariants}>
              {/* Logo */}
              <motion.div className="mb-6" variants={logoVariants}>
                <img src={logo} alt="ASCND Logo" className="w-16 h-16 md:w-20 md:h-20" />
              </motion.div>

              {/* Divider line after logo */}
              <motion.hr 
                className="border-t-2 border-white w-full mb-8" 
                variants={itemVariants}
              />

              {/* Main heading */}
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                Reaching
                <br />
                <span className="text-[#FF4C16]">New Heights</span>
              </motion.h1>
            </motion.div>

            {/* Right side - Description text */}
            <motion.div className="text-white space-y-6" variants={itemVariants}>
              <motion.p 
                className="text-lg md:text-xl leading-relaxed font-medium"
                variants={itemVariants}
              >
                To help people rise. In their homes. In their businesses. In their lives.
              </motion.p>
              
              <motion.p 
                className="text-base md:text-lg leading-relaxed opacity-90"
                variants={itemVariants}
              >
                We remove the complexity, the slowdowns, and the gatekeepers—and replace them with ownership, clarity, and profit.
              </motion.p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for better text contrast */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </motion.section>
  )
}

export default Heights