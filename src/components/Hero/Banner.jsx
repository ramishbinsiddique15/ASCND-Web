import { useState, useEffect } from "react"
import banner from "../../assets/img/banner.jpg"
import logo from "../../assets/icons/logo-white.svg"
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

// Motion-enabled Link
const MotionLink = motion(Link)

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const lineItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const logoAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

const bottomBar = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const buttonItem = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

const socialItem = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="fixed inset-0 w-full overflow-hidden text-[#F6F6F4]">
      <motion.div className="absolute inset-0 w-full h-full">
        <motion.img
          src={banner}
          alt="ASCND background"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      />

      {/* Sign In and Sign Up Buttons at Top Right */}
      <motion.div
        className="absolute top-4 right-4 sm:right-6 lg:right-8 flex items-center gap-2"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
      >
        {[
          { label: "Sign In", route: "https://portal.ascnd.pro/", external: true },
          { label: "Sign Up", route: "https://portal.ascnd.pro/sign-up", external: true },
        ].map(({ label, route, external }, index) => (
          <MotionLink
            key={label}
            to={route}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="flex items-center justify-center rounded-lg border-2 border-[#F6F6F4] bg-[#F6F6F4] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition-all duration-200 hover:bg-[#FF4C16] hover:text-[#F6F6F4] hover:border-[#FF4C16] h-11 xl:h-12 2xl:h-13"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 + index * 0.1 }}
          >
            {label}
          </MotionLink>
        ))}
      </motion.div>

      <motion.div
        className="absolute top-1/2 md:top-auto md:bottom-[calc(4rem+100px)] px-4 text-left sm:px-6 lg:px-8"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-10 sm:mb-16" variants={logoAnimation}>
          <motion.img src={logo} alt="ASCND Logo" className="h-[35px] sm:h-[42px] lg:h-[50px]" />
        </motion.div>

        <h1 className="max-w-[60rem] font-extrabold 
       text-3xl leading-8
sm:text-4xl sm:leading-10
md:text-5xl md:leading-[48px]
lg:text-6xl lg:leading-[56px]
xl:text-[72px] xl:leading-[64px]
2xl:text-[90px] 2xl:leading-[72px]
1821:text-[102px] 1821:leading-[80px]

tracking-[-0.04em]
        ">
          <motion.span className="block" variants={lineItem}>
            Advanced Strategies
          </motion.span>
          <motion.span className="block" variants={lineItem}>
            in Construction
          </motion.span>
          <motion.span className="block" variants={lineItem}>
            &amp; National Distribution
          </motion.span>
        </h1>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6"
        variants={bottomBar}
        initial="hidden"
        animate="visible"
      >
        {/* Mobile Layout - Stacked, No Animations */}
        <div className="flex flex-col gap-4 md:hidden">
          <div className="flex items-center gap-2 border-t pt-4 border-t-[#F6F6F4]">
            <Link
              to="/home-owner-growth-model"
              role="button"
              className=" flex flex-1 items-center justify-center rounded-lg border-2 border-[#F6F6F4] bg-[#F6F6F4] px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition-all duration-200 hover:bg-[#FF4C16] hover:text-[#F6F6F4] hover:border-[#FF4C16] h-11"
            >
              HOMEOWNER
            </Link>
            <Link
              to="/business-growth-model"
              role="button"
              className="flex flex-1 items-center justify-center rounded-lg border-2 border-[#F6F6F4] bg-[#F6F6F4] px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition-all duration-200 hover:bg-[#FF4C16] hover:text-[#F6F6F4] hover:border-[#FF4C16] h-11"
            >
              BUSINESS
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/about"
              role="button"
              className="flex flex-1 items-center justify-center rounded-lg border-2 border-[#F6F6F4] bg-[#F6F6F4] px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition-all duration-200 hover:bg-[#FF4C16] hover:text-[#F6F6F4] hover:border-[#FF4C16] h-11"
            >
              ABOUT US
            </Link>
            <Link
              to="/request-quote"
              role="button"
              className="flex flex-1 items-center justify-center rounded-lg border-2 border-[#F6F6F4] bg-[#F6F6F4] px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition-all duration-200 hover:bg-[#FF4C16] hover:text-[#F6F6F4] hover:border-[#FF4C16] h-11"
            >
              QUOTES
            </Link>
            <Link
              to="/business-apply"
              role="button"
              className="flex flex-1 items-center justify-center rounded-lg border-2 border-[#F6F6F4] bg-[#F6F6F4] px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition-all duration-200 hover:bg-[#FF4C16] hover:text-[#F6F6F4] hover:border-[#FF4C16] h-11"
            >
              APPLY
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            {[
              { Icon: FaDiscord, label: "Discord" },
              { Icon: FaInstagram, label: "Instagram" },
              { Icon: FaLinkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full bg-[#F6F6F4] text-[#FF4C16] hover:bg-[#FF4C16] hover:text-[#F6F6F4]  transition-colors duration-200"
              >
                <Icon className="size-4 text-[#FF4C16] hover:text-[#F6F6F4]" />
              </a>
            ))}
          </div>
        </div>

        {/* Tablet Layout - Two Rows */}
        <div className="hidden md:flex lg:hidden flex-col gap-4 border-t pt-4 border-t-[#F6F6F4]">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          >
            <MotionLink
              to="/home-owner-growth-model"
              role="button"
              variants={buttonItem}
              className="flex flex-1 items-center justify-center rounded-lg border-2 border-[#F6F6F4] bg-[#F6F6F4] px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition-all duration-200 hover:bg-[#FF4C16] hover:text-[#F6F6F4] hover:border-[#FF4C16] h-11"
            >
              HOMEOWNER
            </MotionLink>
            <MotionLink
              to="/business-growth-model"
              role="button"
              variants={buttonItem}
              className="flex flex-1 items-center justify-center rounded-lg border-2 border-[#F6F6F4] bg-[#F6F6F4] px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition-all duration-200 hover:bg-[#FF4C16] hover:text-[#F6F6F4] hover:border-[#FF4C16] h-11"
            >
              BUSINESS
            </MotionLink>
          </motion.div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1">
              <MotionLink
                to="/about"
                role="button"
                variants={buttonItem}
                className="flex flex-1 items-center justify-center rounded-lg border-2 border-[#F6F6F4] bg-[#F6F6F4] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition-all duration-200 hover:bg-[#FF4C16] hover:text-[#F6F6F4] hover:border-[#FF4C16] h-11"
              >
                ABOUT US
              </MotionLink>
              <MotionLink
                to="/request-quote"
                role="button"
                variants={buttonItem}
                className="flex flex-1 items-center justify-center rounded-lg border-2 border-[#F6F6F4] bg-[#F6F6F4] px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition-all duration-200 hover:bg-[#FF4C16] hover:text-[#F6F6F4] hover:border-[#FF4C16] h-11"
              >
                QUOTES
              </MotionLink>
              <MotionLink
                to="/business-apply"
                role="button"
                variants={buttonItem}
                className="flex flex-1 items-center justify-center rounded-lg border-2 border-[#F6F6F4] bg-[#F6F6F4] px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition-all duration-200 hover:bg-[#FF4C16] hover:text-[#F6F6F4] hover:border-[#FF4C16] h-11"
              >
                APPLY
              </MotionLink>
            </div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              {[
                { Icon: FaDiscord, label: "Discord" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaLinkedin, label: "LinkedIn" },
              ].map(({ Icon, label }, index) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full bg-[#F6F6F4] text-[#FF4C16]  transition-colors duration-200"
                  variants={socialItem}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="size-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout - Single Row */}
        <div className="hidden lg:flex items-center justify-between border-t pt-12 border-t-[#F6F6F4]">
          <motion.div
            className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-[#F6F6F4] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          />

          <motion.div
            className="flex items-center gap-2 xl:gap-3 2xl:gap-4 pr-4 xl:pr-6 2xl:pr-8"
            variants={heroContainer}
          >
            {[
              { label: "I'M A HOMEOWNER", route: "/home-owner-growth-model" },
              { label: "ASCND YOUR BUSINESS", route: "/business-growth-model" },
              { label: "ABOUT US", route: "/about" },
              { label: "REQUEST A QUOTE", route: "/request-quote" },
              { label: "APPLY", route: "/business-apply" },
            ].map(({ label, route }, index) => (
              <MotionLink
                to={route}
                role="button"
                variants={buttonItem}
                key={label}
                className="flex items-center justify-center rounded-lg border-2 border-[#F6F6F4] bg-[#F6F6F4] px-4 xl:px-6 py-3 xl:py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FF4C16] transition-all duration-200 hover:bg-[#FF4C16] hover:text-[#F6F6F4] hover:border-[#FF4C16] h-11 xl:h-12 2xl:h-13 whitespace-nowrap"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4, ease: "easeOut" }}
              >
                {label}
              </MotionLink>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-2 xl:gap-3 2xl:gap-4 flex-shrink-0"
            variants={heroContainer}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            {[
              { Icon: FaDiscord, label: "Discord" },
              { Icon: FaInstagram, label: "Instagram" },
              { Icon: FaLinkedin, label: "LinkedIn" },
            ].map(({ Icon, label }, index) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-10 xl:size-11 2xl:size-12 place-items-center rounded-full bg-[#F6F6F4] text-[#FF4C16] hover:bg-[#FF4C16] hover:text-[#F6F6F4]  transition-colors duration-200"
                variants={socialItem}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4, ease: "easeOut" }}
              >
                <Icon className="size-4 xl:size-5 2xl:size-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Banner