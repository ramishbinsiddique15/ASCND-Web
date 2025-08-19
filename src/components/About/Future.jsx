import React from 'react'
import { motion } from 'framer-motion'
import future from "../../assets/img/future.png";

const Future = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 1 },
    show: { 
      opacity: 1, 
      transition: { delayChildren: 0.2, staggerChildren: 0.1 } 
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
  <motion.section
  style={{
    backgroundImage: `url(${future})`,
    backgroundColor: "#0D1318",
    backgroundBlendMode: "overlay",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  variants={container}
>

      {/* Background image */}
      {/* <div className="absolute inset-0">
        <img 
          src={future} 
          alt="Future background" 
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.8]"
          variants={textVariants}
        >
          We're not
          <br />
          another 'platform.'
          <br />
          <span className="text-[#FF4C16]">
            We're the future
            <br />
            of fulfillment.
          </span>
        </motion.h1>
      </div>
    </motion.section>
  )
}

export default Future