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
      className="bg-[#F5F7FA] py-24 md:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-[100rem] px-4 md:px-8">
        {/* Header Section - Exact match to image */}
        <div className="relative overflow-hidden rounded-2xl bg-white ">
          <div className="relative items-center min-h-[400px] md:min-h-[500px]">
            {/* Left: People Image */}
            <motion.div variants={itemVariants} className="absolute left-0 top-0 w-1/3 h-full">
              <img 
                src={path} 
                alt="Two professionals discussing home improvements" 
                className="w-full h-full object-cover opacity-35  [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
             [mask-repeat:no-repeat] [mask-size:100%] filter grayscale"
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.log('Image failed to load:', path);
                }}
              />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div variants={itemVariants} className="px-8 pt-16 lg:px-12 lg:pt-20 w-[75%] ml-auto z-50 pb-8 flex items-center min-h-[400px] md:min-h-[500px]">
              <h2 className="text-[40px] md:text-[48px] font-extrabold leading-[0.8] text-[#0b0c0e]">
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
          className="w-full h-px bg-[#0D1318] mb-20"
        />

        {/* Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phase 01 */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#105CE9] rounded-[20px] p-6 text-white relative overflow-hidden min-h-[400px] flex flex-col"
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-32">
              <img src={whiteBullet} alt="" className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">PHASE 01</span>
              <img src={logoWhite} alt="ASCND Logo" className="w-6 h-6 ml-auto" />
            </div>

            <h3 className="text-2xl font-bold mb-4 h-[28px] flex items-end">Start with the Essentials</h3>
            <p className="text-xs mb-4 opacity-75 h-[48px]">
              Begin by upgrading the systems that matter most—solar, HVAC, and roofing. These core improvements:
            </p>

            <hr className='border-t border-white mb-4'/>

            {/* Pill buttons */}
            <div className="space-y-2 space-x-2">
              <div className="inline-block border-2 border-white rounded-full px-3 py-1 text-sm font-medium">
                Slash utility bills
              </div>
              <div className="inline-block border-2 border-white rounded-full px-3 py-1 text-sm font-medium">
                Improve energy efficiency
              </div>
              <div className="inline-block border-2 border-white rounded-full px-3 py-1 text-sm font-medium">
                Increase appraisal value
              </div>
              <div className="inline-block border-2 border-white rounded-full px-3 py-1 text-sm font-medium">
                Future-proof your home against rising energy costs
              </div>
            </div>
          </motion.div>

          {/* Phase 02 */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#E4E6E9] rounded-[20px] p-6 border-none relative overflow-hidden min-h-[400px] flex flex-col"
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-32">
              <img src={blueBullet} alt="" className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#105CE9]">PHASE 02</span>
              <img src={logoBlue} alt="ASCND Logo" className="w-6 h-6 ml-auto" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-[#105CE9] h-[28px] flex items-end">Expand Your Living Experience</h3>
            <p className="text-xs mb-4 text-[#105CE9] h-[48px]">
              Once the essentials are upgraded, elevate the experience with turf, epoxy flooring, and permanent lighting. These lifestyle upgrades:
            </p>

            <hr className='border-t border-[#105CE9] mb-4'/>

            {/* Pill buttons */}
            <div className="space-y-1">
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-3 py-1 text-xs font-medium text-[#105CE9]">
                Boost curb appeal
              </div>
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-3 py-1 text-xs font-medium text-[#105CE9]">
                Modernize your living space
              </div>
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-3 py-1 text-xs font-medium text-[#105CE9]">
                Create low-maintenance beauty
              </div>
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-3 py-1 text-xs font-medium text-[#105CE9]">
                Add resale and comfort value
              </div>
            </div>
          </motion.div>

          {/* Phase 03 */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#E4E6E9] rounded-[20px] p-6 border-none relative overflow-hidden min-h-[400px] flex flex-col"
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-32">
              <img src={blueBullet} alt="" className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#105CE9]">PHASE 03</span>
              <img src={logoBlue} alt="ASCND Logo" className="w-6 h-6 ml-auto" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-[#105CE9] h-[28px] flex items-end">Customize & Complete Your Space</h3>
            <p className="text-xs mb-4 text-[#105CE9] h-[48px]">
              Finish with the details that make your home truly yours—like automated blinds, window treatments, or smart features. These finishing touches:
            </p>
            <hr className='border-t border-[#105CE9] mb-4' />

            {/* Pill buttons */}
            <div className="space-y-1">
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-3 py-1 text-xs font-medium text-[#105CE9]">
                Increase privacy and efficiency
              </div>
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-3 py-1 text-xs font-medium text-[#105CE9]">
                Add comfort and daily convenience
              </div>
              <div className="inline-block border-2 border-[#105CE9] rounded-full px-3 py-1 text-xs font-medium text-[#105CE9]">
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