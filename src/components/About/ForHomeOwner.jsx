import React from 'react'
import { motion } from 'framer-motion'
import solar from "../../assets/icons/solar-white.png";
import epoxy from "../../assets/icons/epoxy.png";
import roofing from "../../assets/icons/roofing.png";
import hvac from "../../assets/icons/hvac.png";
import turf from "../../assets/icons/turf.png";
import lighting from "../../assets/icons/lighting.png";
import windows from "../../assets/icons/windows.png";

import doubleArrow from "../../assets/icons/double-arrow.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ForHomeOwner = () => {
    const services = [
        { icon: solar, label: 'SOLAR ENERGY', isActive: true },
        { icon: epoxy, label: 'EPOXY FLOORING' },
        { icon: roofing, label: 'ROOFING' },
        { icon: hvac, label: 'HVAC' },
        { icon: turf, label: 'TURF' },
        { icon: lighting, label: 'PERMANENT LIGHTING' },
        { icon: windows, label: 'WINDOW COVERINGS' }
    ];

    return (
        <motion.section 
            className="w-full bg-gray-50 py-16 md:py-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="mx-auto max-w-[100rem] px-4 md:px-8">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left side - Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            {/* Tag */}
                            <motion.span 
                                variants={itemVariants}
                                className="inline-block rounded-sm border-2 border-[#FF4C16] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FF4C16] md:text-[11px]"
                            >
                                FOR HOMEOWNERS
                            </motion.span>
                            
                            {/* Main heading */}
                            <motion.h2 
                                variants={itemVariants}
                                className="text-[32px] md:text-[40px] font-bold text-[#0D1318] leading-[1]"
                            >
                                We help you ASCND your home—with expert installation across a curated set of{' '}
                                <span className="text-[#FF4C16]">essential services</span>
                            </motion.h2>
                            
                            {/* Description */}
                            <motion.p 
                                variants={itemVariants}
                                className="text-[#0D1318]/70 text-sm leading-relaxed max-w-md"
                            >
                                No bloated sales process. No pressure. Just quality, speed, and transparency.
                            </motion.p>
                            
                            {/* Learn More button */}
                            <motion.button
                                variants={itemVariants}
                                className="inline-flex items-center justify-between gap-2 rounded-md bg-[#0D1318] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#0D1318]/90 sm:px-7 sm:py-3.5 md:text-[12px]"
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Learn More</span>
                                <img src={doubleArrow} alt="" />
                            </motion.button>
                        </motion.div>

                        {/* Right side - Service icons grid */}
                        <motion.div 
                            variants={itemVariants}
                            className="space-y-4"
                        >
                            {/* First row - 4 items */}
                            <div className="grid grid-cols-4 gap-4">
                                {services.slice(0, 4).map((service, index) => (
                                    <motion.div
                                        key={service.label}
                                        variants={itemVariants}
                                        className="relative aspect-square"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {/* Border element */}
                                        <div 
                                            className={`absolute inset-0 ${
                                                service.isActive 
                                                    ? 'bg-[#FF4C16]' 
                                                    : 'bg-[#B0B8C7]'
                                            }`}
                                            style={{
                                                clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                                            }}
                                        />
                                        
                                        {/* Content element */}
                                        <div 
                                            className={`relative flex flex-col items-center justify-center h-full transition-all duration-300 ${
                                                service.isActive 
                                                    ? 'bg-[#FF4C16] text-white shadow-lg' 
                                                    : 'bg-white text-[#0D1318] hover:bg-gray-50'
                                            }`}
                                            style={{
                                                clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                                                margin: service.isActive ? '0' : '1px'
                                            }}
                                        >
                                            {/* Icon */}
                                            <div className="mb-3">
                                                <img 
                                                    src={service.icon} 
                                                    alt={service.label} 
                                                    className="w-8 h-8"
                                                />
                                            </div>
                                            
                                            {/* Label */}
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-center leading-tight px-2">
                                                {service.label}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/* Second row - 3 items right aligned */}
                            <div className="flex gap-4 justify-end">
                                {services.slice(4).map((service, index) => (
                                    <motion.div
                                        key={service.label}
                                        variants={itemVariants}
                                        className="relative aspect-square w-[calc(25%-0.75rem)]"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {/* Border element */}
                                        <div 
                                            className={`absolute inset-0 ${
                                                service.isActive 
                                                    ? 'bg-[#FF4C16]' 
                                                    : 'bg-[#B0B8C7]'
                                            }`}
                                            style={{
                                                clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                                            }}
                                        />
                                        
                                        {/* Content element */}
                                        <div 
                                            className={`relative flex flex-col items-center justify-center h-full transition-all duration-300 ${
                                                service.isActive 
                                                    ? 'bg-[#FF4C16] text-white shadow-lg' 
                                                    : 'bg-white text-[#0D1318] hover:bg-gray-50'
                                            }`}
                                            style={{
                                                clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                                                margin: service.isActive ? '0' : '1px'
                                            }}
                                        >
                                            {/* Icon */}
                                            <div className="mb-3">
                                                <img 
                                                    src={service.icon} 
                                                    alt={service.label} 
                                                    className="w-8 h-8"
                                                />
                                            </div>
                                            
                                            {/* Label */}
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-center leading-tight px-2">
                                                {service.label}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default ForHomeOwner