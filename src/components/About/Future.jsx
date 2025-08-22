"use client"
import { motion, useReducedMotion } from "framer-motion"
import future from "../../assets/img/future.png"

const Future = () => {
  const prefersReduced = useReducedMotion()

  const containerVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8,
          },
        },
      }

  const textVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: {
          opacity: 0,
          y: 30,
          rotateX: 45,
          filter: "blur(8px)",
          scale: 0.95,
        },
        show: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 18,
            duration: 1.5,
          },
        },
      }

  const backgroundVar = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
        show: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 60,
            damping: 25,
            duration: 2.0,
          },
        },
      }

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
      variants={backgroundVar}
    >
      {/* Content */}
      <motion.div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6" variants={containerVar}>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.8]"
          variants={textVar}
          style={{ perspective: "1000px" }}
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
