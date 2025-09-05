"use client"
import { motion, useReducedMotion } from "framer-motion"
import future from "../../assets/img/future.svg"

const Future = () => {
  const prefersReduced = useReducedMotion()

  const containerVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
            duration: 0.8,
            ease: "easeOut",
          },
        },
      }

  const textVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { y: 20, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: "easeOut",
          },
        },
      }

  const backgroundImageVariants = {
    hidden: {
      opacity: 0,
      rotate: -10,
    },
    show: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.4,
      },
    },
  }

  return (
    <motion.section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0D1318" }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVar}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${future})` }}
        variants={backgroundImageVariants}
      />
      
      <motion.div className="relative z-10 text-center text-[#F6F6F4] max-w-4xl mx-auto px-6" variants={containerVar}>
        <motion.h1
          className="text-[30px] leading-[32px]
sm:text-[36px] sm:leading-[40px]
md:text-[48px] md:leading-[48px]
lg:text-[60px] lg:leading-[56px]
xl:text-[72px] xl:leading-[64px]
2xl:text-[90px] 2xl:leading-[72px]
1821:text-[102px] 1821:leading-[80px]
tracking-[-0.04em] font-[700]"
          variants={textVar}
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
      </motion.div>
    </motion.section>
  )
}

export default Future