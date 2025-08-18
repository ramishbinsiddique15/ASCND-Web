import React from 'react'
import { motion } from 'framer-motion'
import summit from "../../assets/img/trailblazer.png"
import polymer from "../../assets/img/shapes.png"
import doubleArrow from "../../assets/icons/double-arrow-black.png"
import logo from "../../assets/icons/logo-gold.png"

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
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

const TrailBlazer = () => {
    return (
        <motion.div
            className="relative min-h-screen overflow-hidden pt-72"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${summit})` }}
            ></div>

            {/* Gradient overlay that stays blue */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-[#105CE9]/50 to-[#105CE9]" /> */}


            <div className="absolute top-44 -right-96">
                <img src={polymer} alt="Geometric shapes" className=" w-[60%] max-w-none" />
            </div>

            {/* Main content */}
            <div className="relative z-10 px-8 py-16 max-w-7xl mx-auto">
                {/* Top tagline */}
                <motion.div variants={itemVariants} className="">
                    <p className="text-white text-2xl font-bold leading-[1.1] max-w-md">
                        Be first to market.Lock your
                        <br />
                        postion. Get paid on every
                        <br />
                        deal in your region
                    </p>
                </motion.div>

                {/* Main heading */}
                <motion.div variants={itemVariants} className="mb-6">
                    <h1 className="text-[#FF990A] text-7xl font-extrabold leading-tight">Trailblazer Program</h1>
                </motion.div>

                <motion.div variants={itemVariants} className="w-full h-0.5 bg-[#FF990A] mb-12"></motion.div>

                {/* Layout container for bullets and right side content */}
                <div className="flex justify-between items-start">
                    <motion.div variants={itemVariants} className="space-y-4">
                        <motion.div
                            variants={itemVariants}
                            className="border-2 border-[#FF990A] rounded-full px-6 py-3 w-fit"
                        >
                            <p className="text-[#FF990A] text-base font-medium">The first ASCND dealer in a state secures an override (or per-unit in non-solar trades)</p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="border-2 border-[#FF990A] rounded-full px-6 py-3 w-fit"
                        >
                            <p className="text-[#FF990A] text-base font-medium ">Maintain control while we handle fulfillment</p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="border-2 border-[#FF990A] rounded-full px-6 py-3 w-fit"
                        >
                            <p className="text-[#FF990A] text-base font-medium ">Works across all ASCND trades</p>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col items-end space-y-6">
                        {/* ASCND Logo */}
                        <img src={logo || "/placeholder.svg"} alt="ASCND Logo" className="h-12 w-auto" />

                        {/* Apply Now button */}
                        <motion.button
                            className="bg-[#FF990A] text-[#0D1318] px-8 py-3 rounded-lg font-semibold text-sm tracking-wider hover:bg-[#FF990A]/90 transition-colors duration-200 flex items-center gap-2"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            APPLY NOW
                            <img src={doubleArrow || "/placeholder.svg"} alt="Arrow" className="w-4 h-4" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default TrailBlazer
