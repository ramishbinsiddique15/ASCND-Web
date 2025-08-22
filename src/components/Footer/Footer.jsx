"use client"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa"
import logo from "../../assets/icons/logo-white.png"
import bg from "../../assets/img/footer.png"

// Animation variants (optimized for faster loading)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: {
    y: 60,
    opacity: 0,
    rotateX: 15,
    scale: 0.95,
    filter: "blur(10px)",
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const logoAnimation = {
  hidden: {
    x: -40,
    opacity: 0,
    rotateY: -25,
    scale: 0.8,
    filter: "blur(8px)",
  },
  show: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
}

const socialAnimation = {
  hidden: {
    x: 40,
    opacity: 0,
    rotateY: 25,
    scale: 0.7,
    filter: "blur(6px)",
  },
  show: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 110,
      damping: 14,
    },
  },
}

const dividerVar = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    rotateZ: -5,
    filter: "blur(4px)",
  },
  show: {
    scaleX: 1,
    opacity: 1,
    rotateZ: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.3,
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
}

const headlineAnimation = {
  hidden: {
    y: 80,
    opacity: 0,
    rotateX: 20,
    scale: 0.9,
    filter: "blur(15px)",
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.0,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 90,
      damping: 18,
      delay: 0.4,
    },
  },
}

const pillContainerAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
    rotateX: 25,
    scale: 0.85,
    filter: "blur(20px)",
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 85,
      damping: 20,
      delay: 0.6,
    },
  },
}

const pillAnimation = {
  hidden: {
    y: 40,
    opacity: 0,
    rotateY: 15,
    scale: 0.9,
    filter: "blur(8px)",
  },
  show: {
    y: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
}

const Pill = ({ title, items }) => {
  const location = useLocation()

  return (
    <motion.div
      className=""
      variants={pillAnimation}
      whileHover={{
        scale: 1.02,
        y: -2,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Flat, full-width header bar */}
      <motion.div
        className="mb-3 w-full bg-[#E6E6E6] px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0D1318] sm:mb-4 sm:px-3 sm:py-2 sm:text-[11px] md:text-[12px]"
        whileHover={{
          backgroundColor: "#ffffff",
          transition: { duration: 0.3 },
        }}
      >
        {title}
      </motion.div>
      <ul className="grid gap-1.5 px-0 pb-1 text-white/90 sm:gap-2 md:gap-2.5">
        {items.map((item, idx) => {
          const isActive =
            location.pathname === item.path ||
            (item.path.includes("#") && location.pathname === item.path.split("#")[0])

          return (
            <motion.li
              key={item.text}
              className="flex items-center gap-3 sm:gap-4"
              whileHover={{
                x: 4,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <Link
                to={item.path}
                className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] hover:text-white transition-colors sm:gap-4 sm:text-[12px]"
              >
                <motion.span
                  className={`inline-block size-[8px] rounded-full sm:size-[10px] ${
                    isActive ? "bg-white" : "border border-white/70"
                  }`}
                  whileHover={{
                    scale: 1.3,
                    backgroundColor: "#ffffff",
                    transition: { duration: 0.2 },
                  }}
                />
                <span className="truncate">{item.text}</span>
              </Link>
            </motion.li>
          )
        })}
      </ul>
    </motion.div>
  )
}

const Footer = () => {
  const groups = [
    {
      title: "ASCND YOUR HOME",
      items: [
        { text: "Home Services", path: "/home" },
        { text: "Why ASCND your home?", path: "/home#why" },
        { text: "Homeowner Growth Model", path: "/home-owner#model" },
        { text: "Request a Quote", path: "/request-quote" },
      ],
    },
    {
      title: "ASCND YOUR BUSINESS",
      items: [
        { text: "Contractor Services", path: "/business" },
        { text: "Why ASCND your business?", path: "/business#why" },
        { text: "Growth Model", path: "/business#growth" },
        { text: "Apply to ASCND", path: "/business-apply" },
      ],
    },
    {
      title: "LEARN MORE",
      items: [{ text: "About ASCND", path: "/about" }],
    },
  ]

  return (
    <motion.footer
      className="relative isolate w-full overflow-hidden rounded-t-2xl text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background image */}
      <img
        src={bg || "/placeholder.svg"}
        alt="ASCND background"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />
      <motion.div
        className="mx-auto grid min-h-[60vh] sm:min-h-[80vh] md:min-h-[100vh] max-w-[100rem] grid-rows-[1fr_auto] px-3 pb-3 pt-4 sm:px-6 sm:pt-6"
        variants={container}
      >
        {/* Row 1: all primary content starts after ~half height */}
        <motion.section
          className="relative pt-[20vh] sm:pt-[30vh] md:pt-[36vh] lg:pt-[42vh] xl:pt-[50vh]"
          variants={container}
        >
          {/* Logo then divider */}
          {/* Logo row with right-aligned social icons */}
          <motion.div className="mb-3 flex items-center justify-between sm:mb-4" variants={fadeUp}>
            <motion.div className="flex items-center gap-2" variants={logoAnimation}>
              <img src={logo || "/placeholder.svg"} alt="ASCND" className="h-5 w-auto sm:h-6 md:h-7 lg:h-8" />
            </motion.div>
            <motion.div className="flex items-center gap-2 sm:gap-3" variants={socialAnimation}>
              <motion.a
                href="#"
                aria-label="Discord"
                className="grid size-8 place-items-center rounded-full bg-white text-[#FF4C16] shadow-md transition hover:bg-white/90 sm:size-9 md:size-10"
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#5865F2",
                  color: "#ffffff",
                  y: -2,
                  boxShadow: "0 8px 25px rgba(88, 101, 242, 0.4)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDiscord className="size-4 sm:size-5" />
              </motion.a>
              <motion.a
                href="#"
                aria-label="Instagram"
                className="grid size-8 place-items-center rounded-full bg-white text-[#FF4C16] shadow-md transition hover:bg-white/90 sm:size-9 md:size-10"
                whileHover={{
                  scale: 1.15,
                  background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                  color: "#ffffff",
                  y: -2,
                  boxShadow: "0 8px 25px rgba(225, 48, 108, 0.4)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="size-4 sm:size-5" />
              </motion.a>
              <motion.a
                href="#"
                aria-label="LinkedIn"
                className="grid size-8 place-items-center rounded-full bg-white text-[#FF4C16] shadow-md transition hover:bg-white/90 sm:size-9 md:size-10"
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#0077B5",
                  color: "#ffffff",
                  y: -2,
                  boxShadow: "0 8px 25px rgba(0, 119, 181, 0.4)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="size-4 sm:size-5" />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className="mb-4 h-[2px] w-full bg-white/70 origin-left sm:mb-6 md:mb-8" variants={dividerVar} />

          {/* Headline */}
          <motion.h2
            className="max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[0.8] tracking-tighter"
            style={{ textShadow: "0 2px 0 rgba(0,0,0,.65), 0 18px 40px rgba(0,0,0,.55)" }}
            variants={headlineAnimation}
          >
            Advanced Strategies
            <br className="hidden sm:block" /> in Construction
            <br className="hidden md:block" /> & National Distribution
          </motion.h2>

          {/* Pills inside a double-bordered container */}
          <motion.div
            className="mt-4 rounded-2xl border border-white p-2 sm:mt-6 sm:rounded-3xl sm:p-3 md:mt-8"
            variants={pillContainerAnimation}
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="p-1 sm:p-2 md:p-3">
              <motion.div
                className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3"
                variants={container}
              >
                {groups.map((g) => (
                  <Pill key={g.title} title={g.title} items={g.items} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Row 2: Bottom bar pinned to bottom */}
        <motion.div
          className="mt-6 flex items-center gap-10 border-t border-white pt-3 text-[11px] text-white sm:mt-8 sm:pt-4 sm:text-[12px]"
          variants={fadeUp}
        >
          <span>© ASCND Industries, 2025</span>
          <motion.a
            className="underline"
            href="/privacy-policy"
            whileHover={{
              color: "#ffffff",
              textDecorationColor: "#ffffff",
              transition: { duration: 0.2 },
            }}
          >
            Privacy Policy
          </motion.a>
          <motion.a
            className="underline"
            href="#"
            whileHover={{
              color: "#ffffff",
              textDecorationColor: "#ffffff",
              transition: { duration: 0.2 },
            }}
          >
            Cookies
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer
