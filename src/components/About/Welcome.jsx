import React from 'react';
import { motion } from 'framer-motion';
import welcome from "../../assets/img/welcome.png";
import logoOutlined from "../../assets/icons/logo-outlined.png";
import logo from "../../assets/icons/logo-white.png";

// Animation variants
const container = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: { delayChildren: 0.18, staggerChildren: 0.15 }
    }
};

const fadeUp = {
    hidden: { y: 22, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
};

const logoScale = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
    }
};

const buttonVar = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

const Welcome = () => {
    return (
        <motion.div
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-20"
            style={{ backgroundImage: `url(${welcome})` }}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
        >
            <motion.div 
                className='absolute inset-0 bg-[#0D1318] opacity-90'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            {/* Grid-type huge logo */}
            <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                variants={logoScale}
            >
                <img src={logoOutlined} alt="Logo Outlined" className="w-96" />
            </motion.div>

            {/* Buttons */}
            <motion.div 
                className="flex flex-col items-center gap-66 z-10"
                variants={fadeUp}
            >
                <motion.div 
                    className="flex flex-col items-start mt-72"
                    variants={fadeUp}
                >
                    <motion.h3 
                        className='text-[#FF4C16]'
                        variants={fadeUp}
                    >
                        Welcome to
                    </motion.h3>

                    <motion.img 
                        src={logo} 
                        alt="Logo" 
                        className="w-60"
                        variants={fadeUp}
                    />
                </motion.div>
                
                <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md px-4 sm:px-0"
                    variants={buttonVar}
                >
                    <motion.button 
                        className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors text-sm sm:text-base font-medium flex-1 sm:flex-none whitespace-nowrap"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        ASCND YOUR HOME
                    </motion.button>
                    <motion.button 
                        className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-[#FF4C16] text-white rounded-md hover:bg-[#FF4C16]/90 transition-colors text-sm sm:text-base font-medium flex-1 sm:flex-none whitespace-nowrap"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        ASCND YOUR BUSINESS
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Welcome