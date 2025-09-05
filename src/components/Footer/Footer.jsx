"use client"
import { motion } from "framer-motion"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa"
import logo from "../../assets/icons/logo-white.svg"
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
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
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
  },
  show: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
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
  },
  show: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
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
  },
  show: {
    scaleX: 1,
    opacity: 1,
    rotateZ: 0,
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
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
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
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
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
  },
  show: {
    y: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
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
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#')
      navigate(route, { state: { scrollTo: hash } })
    } else {
      navigate(path)
    }
  }

  return (
    <motion.div
      className=""
      variants={pillAnimation}
    >
      <motion.div
        className="mb-3 w-full bg-[#D9D9D9] px-2 py-1.5 text-[11px] font-[700] uppercase tracking-[0.25em] text-[#0D1318] sm:mb-4 sm:px-3 sm:py-2"
      >
        {title}
      </motion.div>
      <ul className="grid gap-1.5 px-0 pb-1 text-[#F6F6F4]/90 sm:gap-2 md:gap-2.5">
        {items.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path.includes("#") && location.pathname === item.path.split("#")[0])

          return (
            <motion.li
              key={item.text}
              className="flex items-center gap-3 sm:gap-4"
            >
              <button
                onClick={() => handleNavigation(item.path)}
                className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-[700] hover:text-[#F6F6F4] transition-colors sm:gap-4 text-left cursor-pointer"
              >
                <motion.span
                  className={`inline-block size-[8px] rounded-full sm:size-[10px] ${
                    isActive ? "bg-[#F6F6F4]" : "border border-[#F6F6F4]/70"
                  }`}
                />
                <span className="truncate">{item.text}</span>
              </button>
            </motion.li>
          )
        })}
      </ul>
    </motion.div>
  )
}

const ScrollHandler = () => {
  const { pathname, state } = useLocation()

  useEffect(() => {
    // Scroll to top for specific routes
    const scrollToTopRoutes = ['/about', '/request-quote', '/business-apply', '/home-owner', '/business-growth-model', '/home-owner-growth-model']
    
    if (scrollToTopRoutes.includes(pathname)) {
      console.log('Scrolling to top for:', pathname)
      // Force immediate scroll and then smooth scroll
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)
      
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    }
    // Handle anchor link scrolling
    else if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      console.log('No scroll action taken for:', pathname)
    }
  }, [pathname, state])

  return null
}

const Footer = () => {
  const navigate = useNavigate()

  const groups = [
    {
      title: "ASCND YOUR HOME",
      items: [
        { text: "Home Services", path: "/home#services" },
        { text: "Why ASCND your home?", path: "/home#why" },
        { text: "Homeowner Growth Model", path: "/home-owner-growth-model" },
        { text: "Request a Quote", path: "/request-quote" },
      ],
    },
    {
      title: "ASCND YOUR BUSINESS",
      items: [
        { text: "Contractor Services", path: "/contractor#contractorservices" },
        { text: "Why ASCND your business?", path: "/contractor#contractorwhy" },
        { text: "Growth Model", path: "/business-growth-model" },
        { text: "Apply to ASCND", path: "/business-apply" },
      ],
    },
    {
      title: "LEARN MORE",
      items: [{ text: "About ASCND", path: "/about" }],
    },
  ]

  return (
    <>
      <ScrollHandler />
      <motion.footer
        className="relative isolate w-full overflow-hidden rounded-t-[24px] text-[#F6F6F4] mt-28"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src={bg || "/placeholder.svg"}
          alt="ASCND background"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <motion.div
          className="mx-auto grid min-h-[60vh] sm:min-h-[80vh] md:min-h-[100vh] grid-rows-[1fr_auto] px-3 pb-3 pt-4 sm:px-6 sm:pt-6"
          variants={container}
        >
          <motion.section
            className="relative pt-[20vh] sm:pt-[30vh] md:pt-[36vh] lg:pt-[42vh] xl:pt-[50vh]"
            variants={container}
          >
            <motion.div className="mb-3 flex items-center justify-between sm:mb-4" variants={fadeUp}>
              <motion.div className="flex items-center gap-2" variants={logoAnimation}>
                <img src={logo || "/placeholder.svg"} alt="ASCND" className="h-5 w-auto sm:h-6 md:h-7 lg:h-8" />
              </motion.div>
              <motion.div className="flex items-center gap-2 sm:gap-3" variants={socialAnimation}>
                <motion.a
                  href="#"
                  aria-label="Discord"
                  className="grid size-10 place-items-center rounded-full bg-[#F6F6F4] text-[#FF4C16] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-colors duration-200 sm:size-10 md:size-11"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDiscord className="size-4 sm:size-4 md:size-5" />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="Instagram"
                  className="grid size-10 place-items-center rounded-full bg-[#F6F6F4] text-[#FF4C16] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-colors duration-200 sm:size-10 md:size-11"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram className="size-4 sm:size-4 md:size-5" />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="LinkedIn"
                  className="grid size-10 place-items-center rounded-full bg-[#F6F6F4] text-[#FF4C16] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-colors duration-200 sm:size-10 md:size-11"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="size-4 sm:size-4 md:size-5" />
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div className="mb-4 h-[2px] w-full bg-[#F6F6F4]/70 origin-left sm:mb-6 md:mb-8" variants={dividerVar} />
            <motion.h2
              className="max-w-5xl font-[800] text-3xl leading-8 sm:text-4xl sm:leading-10 md:text-5xl md:leading-[48px] lg:text-6xl lg:leading-[56px] xl:text-[72px] xl:leading-[64px] 2xl:text-[90px] 2xl:leading-[72px] 1821:text-[102px] 1821:leading-[80px] tracking-[-0.04em]"
              style={{ textShadow: "0 2px 0 rgba(0,0,0,.65), 0 18px 40px rgba(0,0,0,.55)" }}
              variants={headlineAnimation}
            >
              Advanced Strategies
              <br className="hidden sm:block" /> in Construction
              <br className="hidden md:block" /> & National Distribution
            </motion.h2>
            <motion.div
              className="mt-4 rounded-[24px] border border-[#F6F6F4] p-2 sm:mt-6 sm:p-3 md:mt-8"
              variants={pillContainerAnimation}
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
          <motion.div
            className="mt-6 flex items-center gap-10 border-t border-[#F6F6F4] pt-3 text-[11px] text-[#F6F6F4] sm:mt-8 sm:pt-4 font-[600]"
            variants={fadeUp}
          >
            <span>© ASCND Industries, 2025</span>
            <Link
              className="underline cursor-pointer"
              to={"/privacy-policy"}
            >
              Privacy Policy
            </Link>
            <motion.a
              className="underline cursor-pointer"
              href="#"
            >
              Cookies
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.footer>
    </>
  )
}

export default Footer