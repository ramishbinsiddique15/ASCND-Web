import React from 'react'
import { motion } from 'framer-motion'
import path from "../../assets/img/path.png"
import logoWhite from "../../assets/icons/white-logo.png"
import logoBlue from "../../assets/icons/logo-blue.png"
import blueBullet from "../../assets/icons/blue-bullet.png"
import whiteBullet from "../../assets/icons/white-bullet.png"

// Animation variants
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

const Path = () => {
  return (
    <motion.section 
      className="bg-[#F5F7FA] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section - Exact match to image */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white">
          <div className="relative items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px]">
            {/* Left: People Image */}
            <motion.div variants={itemVariants} className="absolute left-0 top-0 w-[40%] sm:w-[35%] md:w-1/3 h-full">
              <img 
                src={path} 
                alt="Two professionals discussing home improvements" 
                className="w-full h-full object-cover opacity-30 sm:opacity-35 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
             [mask-repeat:no-repeat] [mask-size:100%] filter grayscale"
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.log('Image failed to load:', path);
                }}
              />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div variants={itemVariants} className="px-4 pt-8 sm:px-6 sm:pt-12 md:px-8 md:pt-16 lg:px-12 lg:pt-20 w-[85%] sm:w-[80%] md:w-[75%] ml-auto z-50 pb-6 sm:pb-8 flex items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px]">
              <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] font-extrabold leading-[0.85] sm:leading-[0.8] text-[#0b0c0e]">
                We've designed{' '}
                <span className="text-[#105CE9]">a clear path for homeowners to elevate their home</span>{' '}
                step-by-step—whether you're just getting started or ready to transform it all.
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Divider Line */}
        <motion.div 
          variants={itemVariants}
          className="w-full h-px bg-[#0D1318] mb-12 sm:mb-16 md:mb-20"
        />

        {/* Phase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Phase 01 */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#105CE9] rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden min-h-[380px] sm:min-h-[400px] flex flex-col"
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-16 sm:mb-24 md:mb-32">
              <img src={whiteBullet} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">PHASE 01</span>
              <img src={logoWhite} alt="ASCND Logo" className="w-5 h-5 sm:w-6 sm:h-6 ml-auto" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 h-auto sm:h-[28px] flex items-end">Start with the Essentials</h3>
            <p className="text-[11px] sm:text-xs mb-3 sm:mb-4 opacity-75 h-auto sm:h-[48px] leading-relaxed">
              Begin by upgrading the systems that matter most—solar, HVAC, and roofing. These core improvements:
            </p>

            <hr className='border-t border-white mb-3 sm:mb-4'/>

            {/* Pill buttons */}
            <div className="space-y-1.5 sm:space-y-2 space-x-0 sm:space-x-2">
              <div className="inline-block border-2 border-white rounded-full px-2.5 py-1 text-[11px] sm:text-sm font-medium mb-1.5 sm:mb-0">
                Slash utility bills
              </div>
              <div className="inline-block border-2 border-white rounded-full px-2.5 py-1 text-[11px] sm:text-sm font-medium mb-1.5 sm:mb-0">
                Improve energy efficiency
              </div>
              <div className="inline-block border-2 border-white rounded-full px-2.5 py-1 text-[11px] sm:text-sm font-medium mb-1.5 sm:mb-0">
                Increase appraisal value
              </div>
              <div className="inline-block border-2 border-white rounded-full px-2.5 py-1 text-[11px] sm:text-sm font-medium">
                Future-proof your home against rising energy costs
              </div>
            </div>
          </motion.div>

          {/* Phase 02 */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#E4E6E9] rounded-2xl p-4 sm:p-6 border-none relative overflow-hidden min-h-[380px] sm:min-h-[400px] flex flex-col"
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-16 sm:mb-24 md:mb-32">
              <img src={blueBullet} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#105CE9]">PHASE 02</span>
              <img src={logoBlue} alt="ASCND Logo" className="w-5 h-5 sm:w-6 sm:h-6 ml-auto" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#105CE9] h-auto sm:h-[28px] flex items-end">Expand Your Living Experience</h3>
            <p className="text-[11px] sm:text-xs mb-3 sm:mb-4 text-[#105CE9] h-auto sm:h-[48px] leading-relaxed">
              Once the essentials are upgraded, elevate the experience with turf, epoxy flooring, and permanent lighting. These lifestyle upgrades:
            </p>

            <hr className='border-t border-[#105CE9] mb-3 sm:mb-4'/>

            {/* Pill buttons */}
            <div className="space-y-1">
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-medium text-[#105CE9] mb-1.5">
                Boost curb appeal
              </div>
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-medium text-[#105CE9] mb-1.5">
                Modernize your living space
              </div>
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-medium text-[#105CE9] mb-1.5">
                Create low-maintenance beauty
              </div>
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-medium text-[#105CE9]">
                Add resale and comfort value
              </div>
            </div>
          </motion.div>

          {/* Phase 03 */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#E4E6E9] rounded-2xl p-4 sm:p-6 border-none relative overflow-hidden min-h-[380px] sm:min-h-[400px] flex flex-col sm:col-span-2 lg:col-span-1"
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-16 sm:mb-24 md:mb-32">
              <img src={blueBullet} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#105CE9]">PHASE 03</span>
              <img src={logoBlue} alt="ASCND Logo" className="w-5 h-5 sm:w-6 sm:h-6 ml-auto" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#105CE9] h-auto sm:h-[28px] flex items-end">Customize & Complete Your Space</h3>
            <p className="text-[11px] sm:text-xs mb-3 sm:mb-4 text-[#105CE9] h-auto sm:h-[48px] leading-relaxed">
              Finish with the details that make your home truly yours—like automated blinds, window treatments, or smart features. These finishing touches:
            </p>
            <hr className='border-t border-[#105CE9] mb-3 sm:mb-4' />

            {/* Pill buttons */}
            <div className="space-y-1">
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-medium text-[#105CE9] mb-1.5">
                Increase privacy and efficiency
              </div>
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-medium text-[#105CE9] mb-1.5">
                Add comfort and daily convenience
              </div>
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-medium text-[#105CE9]">
                Round out your home's aesthetic and function
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Path