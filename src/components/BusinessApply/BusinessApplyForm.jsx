"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import doubleArrow from "../../assets/icons/double-arrow.png"

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

const fadeUp = {
  hidden: {
    y: 40,
    opacity: 0,
    filter: "blur(8px)",
    rotateX: 15,
    transformStyle: "preserve-3d",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 120,
      damping: 25,
    },
  },
}

const slideLeft = {
  hidden: {
    x: -60,
    opacity: 0,
    filter: "blur(10px)",
    rotateY: -15,
    transformStyle: "preserve-3d",
  },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 28,
      duration: 0.9,
    },
  },
}

const slideRight = {
  hidden: {
    x: 60,
    opacity: 0,
    filter: "blur(10px)",
    rotateY: 15,
    transformStyle: "preserve-3d",
    scale: 0.95,
  },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 28,
      duration: 0.9,
    },
  },
}

const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

const shimmerAnimation = {
  backgroundPosition: ["200% 0", "-200% 0"],
  transition: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "linear",
  },
}

const BusinessApplyForm = () => {
  // Form state
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subscribeToUpdates, setSubscribeToUpdates] = useState(false)
  const [country, setCountry] = useState("United States")
  const [addressLine1, setAddressLine1] = useState("")
  const [addressLine2, setAddressLine2] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [role, setRole] = useState("Solar Rep")
  const [hasExperience, setHasExperience] = useState("")
  const [experienceDescription, setExperienceDescription] = useState("")
  const [yearsOfExperience, setYearsOfExperience] = useState("")
  const [hasTeam, setHasTeam] = useState("")
  const [teamSize, setTeamSize] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [operatingStates, setOperatingStates] = useState("")
  const [isLicensedInsured, setIsLicensedInsured] = useState("")
  const [partnershipGoals, setPartnershipGoals] = useState("")
  const [hearAbout, setHearAbout] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  // UI state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] = useState(false)
  const [isYearsDropdownOpen, setIsYearsDropdownOpen] = useState(false)
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false)
  const [isLicensedDropdownOpen, setIsLicensedDropdownOpen] = useState(false)
  const [isHearAboutDropdownOpen, setIsHearAboutDropdownOpen] = useState(false)

  const roleOptions = ["Solar Rep", "Dealer Partner", "Contractor/Installer", "Other"]

  const experienceOptions = ["Yes", "No"]

  const yearsOptions = ["Less than 1 year", "1-2 years", "3-5 years", "5-10 years", "10+ years"]

  const teamOptions = ["Yes", "No"]

  const licensedOptions = ["Yes", "No"]

  const hearAboutOptions = ["Google Search", "Social Media", "Referral", "Advertisement", "Other"]

  const handleDropdownSelect = (dropdown, value) => {
    switch (dropdown) {
      case "hearAbout":
        setHearAbout(value)
        setIsHearAboutDropdownOpen(false)
        break
      case "experience":
        setHasExperience(value)
        setIsExperienceDropdownOpen(false)
        break
      case "years":
        setYearsOfExperience(value)
        setIsYearsDropdownOpen(false)
        break
      case "team":
        setHasTeam(value)
        setIsTeamDropdownOpen(false)
        break
      case "licensed":
        setIsLicensedInsured(value)
        setIsLicensedDropdownOpen(false)
        break
      default:
        break
    }
  }

  return (
    <motion.section
      className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#FF4C16]/10 to-transparent rounded-full blur-xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#0D1318]/5 to-transparent rounded-full blur-xl"
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start"
          variants={container}
        >
          {/* Left Side - Text Content */}
          <motion.div className="space-y-4 sm:space-y-5 md:space-y-6" variants={slideLeft}>
            <motion.div variants={fadeUp}>
              <motion.span
                className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F6F6F4] text-[#FF4C16] text-xs sm:text-sm font-semibold uppercase tracking-wider border-2 border-[#FF4C16] rounded relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(255, 76, 22, 0.2)",
                  y: -2,
                }}
                animate={floatingAnimation}
                style={{
                  background:
                    "linear-gradient(90deg, white 0%, white 40%, rgba(255, 76, 22, 0.1) 50%, white 60%, white 100%)",
                  backgroundSize: "200% 100%",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
                  animate={shimmerAnimation}
                />
                APPLY TO ASCND
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0D1318] leading-[0.8]"
              variants={fadeUp}
            >
              <motion.span variants={fadeUp} className="block">
                Let's work
              </motion.span>
              <motion.span variants={fadeUp} className="block">
                together.
              </motion.span>
            </motion.h1>

            <motion.div className="space-y-4 text-gray-600" variants={fadeUp}>
              <p className="text-lg">
                Looking to upgrade your home? ASCND makes it easy to enhance your space with premium improvements—fast
                timelines, expert installers, and zero pressure.
              </p>
              <p className="text-lg">
                Whether you're ready to go solar, finally get turf in the backyard, or refresh your garage floor, we've
                got you covered.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="bg-[#F6F6F4] rounded-xl sm:rounded-2xl border border-[#4B5361] shadow-lg p-4 sm:p-5 md:p-6 relative overflow-hidden"
            variants={slideRight}
            whileHover={{
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              y: -5,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
              animate={shimmerAnimation}
            />

            <motion.h2
              className="text-lg sm:text-xl font-semibold text-[#0D1318] mb-4 sm:mb-5 md:mb-6 relative z-10"
              variants={fadeUp}
            >
              Contact Information
            </motion.h2>

            <motion.form className="space-y-3 sm:space-y-4 relative z-10" variants={container}>
              {/* Name Fields */}
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" variants={fadeUp}>
                <div>
                  <motion.input
                    type="text"
                    placeholder="FIRST NAME*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2 transition-all"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                      y: -2,
                    }}
                  />
                </div>
                <div>
                  <motion.input
                    type="text"
                    placeholder="LAST NAME*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2 transition-all"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                      y: -2,
                    }}
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeUp}>
                <motion.input
                  type="email"
                  placeholder="EMAIL ADDRESS*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2 transition-all"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                    y: -2,
                  }}
                />
                <motion.div
                  className="mt-3 bg-[#E4E6E9] rounded-lg border border-[#B0B8C7] px-4 py-3"
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <label className="flex items-center gap-3 cursor-pointer">
                    <motion.input
                      type="checkbox"
                      checked={subscribeToUpdates}
                      onChange={(e) => setSubscribeToUpdates(e.target.checked)}
                      className="w-5 h-5 text-[#0D1318] bg-[#F6F6F4] border-2 border-gray-400 cursor-pointer accent-[#FF4C16] rounded-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    <span className="text-sm font-medium text-[#0D1318]">Subscribe to news & updates</span>
                  </label>
                </motion.div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeUp}>
                <motion.input
                  type="tel"
                  placeholder="PHONE NUMBER"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2 transition-all"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                    y: -2,
                  }}
                />
              </motion.div>

              {/* Address Section */}
              <motion.div variants={fadeUp}>
                <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                  Address<span className="text-[#FF4C16]">*</span>
                </h3>

                {/* Country */}
                <div className="mb-4">
                  <motion.select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] focus:outline-none focus:border-[#FF4C16] focus:border-2 bg-[#F6F6F4] transition-all"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                      y: -2,
                    }}
                  >
                    <option value="United States">UNITED STATES</option>
                    <option value="Canada">CANADA</option>
                    <option value="Mexico">MEXICO</option>
                  </motion.select>
                </div>

                {/* Address Line 1 */}
                <div className="mb-4">
                  <motion.input
                    type="text"
                    placeholder="ADDRESS LINE 1*"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2 transition-all"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                      y: -2,
                    }}
                  />
                </div>

                {/* Address Line 2 */}
                <div className="mb-4">
                  <motion.input
                    type="text"
                    placeholder="ADDRESS LINE 2"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2 transition-all"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                      y: -2,
                    }}
                  />
                </div>

                {/* City, State, Zip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <motion.input
                    type="text"
                    placeholder="CITY*"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2 transition-all"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                      y: -2,
                    }}
                  />
                  <motion.input
                    type="text"
                    placeholder="STATE*"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2 transition-all"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                      y: -2,
                    }}
                  />
                  <motion.input
                    type="text"
                    placeholder="ZIP CODE*"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2 transition-all"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                      y: -2,
                    }}
                  />
                </div>
              </motion.div>

              {/* Role Selection */}
              <motion.div variants={fadeUp}>
                <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                  What role are you interested in?<span className="text-[#FF4C16]">*</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {roleOptions.map((option, index) => (
                    <motion.label
                      key={option}
                      className="cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <motion.div
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
                          role === option
                            ? "bg-[#FF4C16] border-[#FF4C16] shadow-lg shadow-[#FF4C16]/20"
                            : "bg-[#F6F6F4] border-[#B0B8C7] hover:border-[#FF4C16]"
                        }`}
                        whileHover={{
                          scale: 1.02,
                          y: -2,
                          boxShadow:
                            role === option ? "0 8px 25px rgba(255, 76, 22, 0.3)" : "0 4px 15px rgba(0, 0, 0, 0.1)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="relative">
                          <input
                            type="radio"
                            name="role"
                            value={option}
                            checked={role === option}
                            onChange={(e) => setRole(e.target.value)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                              role === option ? "bg-[#F6F6F4] border-[#F6F6F4]" : "bg-[#F6F6F4] border-[#FF4C16]"
                            }`}
                          >
                            {role === option && <div className="w-2 h-2 bg-[#FF4C16] rounded-full"></div>}
                          </div>
                        </div>
                        <span
                          className={`text-sm font-medium transition-all ${
                            role === option ? "text-[#F6F6F4]" : "text-[#0D1318]"
                          }`}
                        >
                          {option}
                        </span>
                      </motion.div>
                    </motion.label>
                  ))}
                </div>
              </motion.div>

              {/* Solar Experience */}
              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">
                  Do you have experience in the solar industry?<span className="text-[#FF4C16]">*</span>
                </h3>
                <div className="relative">
                  <motion.button
                    type="button"
                    onClick={() => setIsExperienceDropdownOpen(!isExperienceDropdownOpen)}
                    className="cursor-pointer w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-left bg-[#F6F6F4] focus:outline-none focus:border-[#FF4C16] focus:border-2 flex items-center justify-between transition-all"
                    whileHover={{
                      scale: 1.01,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                      y: -1,
                    }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className={hasExperience ? "text-[#0D1318]" : "text-[#0D1318]/60"}>
                      {hasExperience || "SELECT AN OPTION"}
                    </span>
                    <motion.svg
                      className={`w-4 h-4 text-[#0D1318] transition-transform ${isExperienceDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: isExperienceDropdownOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>

                  {isExperienceDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -15, scale: 0.95, filter: "blur(5px)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -15, scale: 0.95, filter: "blur(5px)" }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-[#F6F6F4] border border-[#B0B8C7] rounded-lg shadow-xl z-10"
                    >
                      {experienceOptions.map((option, index) => (
                        <motion.button
                          key={option}
                          type="button"
                          onClick={() => handleDropdownSelect("experience", option)}
                          className="cursor-pointer w-full px-4 py-3 text-left text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-all border-b border-gray-100 last:border-b-0"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{
                            backgroundColor: "#FF4C16",
                            color: "white",
                            x: 5,
                          }}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Experience Description */}
              {hasExperience === "Yes" && (
                <motion.div variants={fadeUp}>
                  <h3 className="text-lg font-semibold text-[#0D1318] mb-4">If yes, describe your experience</h3>
                  <motion.textarea
                    rows={4}
                    value={experienceDescription}
                    onChange={(e) => setExperienceDescription(e.target.value)}
                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] focus:outline-none focus:border-[#FF4C16] focus:border-2 resize-none transition-all"
                    whileFocus={{
                      scale: 1.01,
                      boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                      y: -2,
                    }}
                  />
                </motion.div>
              )}

              {/* Years of Experience */}
              {hasExperience === "Yes" && (
                <motion.div variants={fadeUp}>
                  <h3 className="text-lg font-semibold text-[#0D1318] mb-4">How many years?</h3>
                  <div className="relative">
                    <motion.button
                      type="button"
                      onClick={() => setIsYearsDropdownOpen(!isYearsDropdownOpen)}
                      className="cursor-pointer w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-left bg-[#F6F6F4] focus:outline-none focus:border-[#FF4C16] focus:border-2 flex items-center justify-between transition-all"
                      whileHover={{
                        scale: 1.01,
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                        y: -1,
                      }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className={yearsOfExperience ? "text-[#0D1318]" : "text-[#0D1318]/60"}>
                        {yearsOfExperience || "SELECT AN OPTION"}
                      </span>
                      <motion.svg
                        className={`w-4 h-4 text-[#0D1318] transition-transform ${isYearsDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isYearsDropdownOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </motion.button>

                    {isYearsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -15, scale: 0.95, filter: "blur(5px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -15, scale: 0.95, filter: "blur(5px)" }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-[#F6F6F4] border border-[#B0B8C7] rounded-lg shadow-xl z-10"
                      >
                        {yearsOptions.map((option, index) => (
                          <motion.button
                            key={option}
                            type="button"
                            onClick={() => handleDropdownSelect("years", option)}
                            className="cursor-pointer w-full px-4 py-3 text-left text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-all border-b border-gray-100 last:border-b-0"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{
                              backgroundColor: "#FF4C16",
                              color: "white",
                              x: 5,
                            }}
                          >
                            {option}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Team */}
              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">
                  Do you currently have a team?<span className="text-[#FF4C16]">*</span>
                </h3>
                <div className="relative">
                  <motion.button
                    type="button"
                    onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
                    className="cursor-pointer w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-left bg-[#F6F6F4] focus:outline-none focus:border-[#FF4C16] focus:border-2 flex items-center justify-between transition-all"
                    whileHover={{
                      scale: 1.01,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                      y: -1,
                    }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className={hasTeam ? "text-[#0D1318]" : "text-[#0D1318]/60"}>
                      {hasTeam || "SELECT AN OPTION"}
                    </span>
                    <motion.svg
                      className={`w-4 h-4 text-[#0D1318] transition-transform ${isTeamDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: isTeamDropdownOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>

                  {isTeamDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -15, scale: 0.95, filter: "blur(5px)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -15, scale: 0.95, filter: "blur(5px)" }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-[#F6F6F4] border border-[#B0B8C7] rounded-lg shadow-xl z-10"
                    >
                      {teamOptions.map((option, index) => (
                        <motion.button
                          key={option}
                          type="button"
                          onClick={() => handleDropdownSelect("team", option)}
                          className="cursor-pointer w-full px-4 py-3 text-left text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-all border-b border-gray-100 last:border-b-0"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{
                            backgroundColor: "#FF4C16",
                            color: "white",
                            x: 5,
                          }}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Team Size */}
              {hasTeam === "Yes" && (
                <motion.div variants={fadeUp}>
                  <h3 className="text-lg font-semibold text-[#0D1318] mb-4">If yes, what is the size of your team?</h3>
                  <motion.input
                    type="text"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] focus:outline-none focus:border-[#FF4C16] focus:border-2 transition-all"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                      y: -2,
                    }}
                  />
                </motion.div>
              )}

              {/* Company Information */}
              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">Company name</h3>
                <motion.input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] focus:outline-none focus:border-[#FF4C16] focus:border-2 transition-all"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                    y: -2,
                  }}
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">Company website</h3>
                <motion.input
                  type="url"
                  placeholder="HTTP://"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                  className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2 transition-all"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                    y: -2,
                  }}
                />
              </motion.div>

              {/* Operating States */}
              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">
                  What states do you operate in?<span className="text-[#FF4C16]">*</span>
                </h3>
                <motion.textarea
                  rows={4}
                  value={operatingStates}
                  onChange={(e) => setOperatingStates(e.target.value)}
                  className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] focus:outline-none focus:border-[#FF4C16] focus:border-2 resize-none transition-all"
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                    y: -2,
                  }}
                />
              </motion.div>

              {/* Licensed & Insured */}
              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">
                  Are you licensed & insured?<span className="text-[#FF4C16]">*</span>
                </h3>
                <div className="relative">
                  <motion.button
                    type="button"
                    onClick={() => setIsLicensedDropdownOpen(!isLicensedDropdownOpen)}
                    className="cursor-pointer w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-left bg-[#F6F6F4] focus:outline-none focus:border-[#FF4C16] focus:border-2 flex items-center justify-between transition-all"
                    whileHover={{
                      scale: 1.01,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                      y: -1,
                    }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className={isLicensedInsured ? "text-[#0D1318]" : "text-[#0D1318]/60"}>
                      {isLicensedInsured || "SELECT AN OPTION"}
                    </span>
                    <motion.svg
                      className={`w-4 h-4 text-[#0D1318] transition-transform ${isLicensedDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: isLicensedDropdownOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>

                  {isLicensedDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -15, scale: 0.95, filter: "blur(5px)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -15, scale: 0.95, filter: "blur(5px)" }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-[#F6F6F4] border border-[#B0B8C7] rounded-lg shadow-xl z-10"
                    >
                      {licensedOptions.map((option, index) => (
                        <motion.button
                          key={option}
                          type="button"
                          onClick={() => handleDropdownSelect("licensed", option)}
                          className="cursor-pointer w-full px-4 py-3 text-left text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-all border-b border-gray-100 last:border-b-0"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{
                            backgroundColor: "#FF4C16",
                            color: "white",
                            x: 5,
                          }}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Partnership Goals */}
              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">
                  What are your goals in partnering with us?<span className="text-[#FF4C16]">*</span>
                </h3>
                <motion.textarea
                  rows={4}
                  value={partnershipGoals}
                  onChange={(e) => setPartnershipGoals(e.target.value)}
                  className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] focus:outline-none focus:border-[#FF4C16] focus:border-2 resize-none transition-all"
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 8px 25px rgba(255, 76, 22, 0.15)",
                    y: -2,
                  }}
                />
              </motion.div>

              {/* How did you hear about ASCND */}
              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">
                  How did you hear about ASCND?<span className="text-[#FF4C16]">*</span>
                </h3>
                <div className="relative">
                  <motion.button
                    type="button"
                    onClick={() => setIsHearAboutDropdownOpen(!isHearAboutDropdownOpen)}
                    className="cursor-pointer w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-left bg-[#F6F6F4] focus:outline-none focus:border-[#FF4C16] focus:border-2 flex items-center justify-between transition-all"
                    whileHover={{
                      scale: 1.01,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                      y: -1,
                    }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className={hearAbout ? "text-[#0D1318]" : "text-[#0D1318]/60"}>
                      {hearAbout || "SELECT AN OPTION"}
                    </span>
                    <motion.svg
                      className={`w-4 h-4 text-[#0D1318] transition-transform ${isHearAboutDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: isHearAboutDropdownOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>

                  {isHearAboutDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -15, scale: 0.95, filter: "blur(5px)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -15, scale: 0.95, filter: "blur(5px)" }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-[#F6F6F4] border border-[#B0B8C7] rounded-lg shadow-xl z-10"
                    >
                      {hearAboutOptions.map((option, index) => (
                        <motion.button
                          key={option}
                          type="button"
                          onClick={() => handleDropdownSelect("hearAbout", option)}
                          className="cursor-pointer w-full px-4 py-3 text-left text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-all border-b border-gray-100 last:border-b-0"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{
                            backgroundColor: "#FF4C16",
                            color: "white",
                            x: 5,
                          }}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Terms and Conditions */}
              <motion.div variants={fadeUp}>
                <p className="text-sm text-[#0D1318] mb-4 leading-relaxed">
                  I certify that the information provided is accurate and complete. I understand that this application
                  does not guarantee acceptance into the ASCND program. Additionally, I consent to receive text messages
                  from ASCND Pro regarding updates, promotions, and other information. I understand that message and
                  data rates may apply, and I can opt out at any time by replying STOP.
                </p>

                <motion.label className="cursor-pointer mb-6 block">
                  <motion.div
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
                      agreeToTerms
                        ? "bg-[#FF4C16] border-[#FF4C16] shadow-lg shadow-[#FF4C16]/20"
                        : "bg-[#F6F6F4] border-[#B0B8C7] hover:border-[#FF4C16]"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      boxShadow: agreeToTerms ? "0 8px 25px rgba(255, 76, 22, 0.3)" : "0 4px 15px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={agreeToTerms}
                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          agreeToTerms ? "bg-[#F6F6F4] border-[#F6F6F4]" : "bg-[#F6F6F4] border-[#FF4C16]"
                        }`}
                      >
                        {agreeToTerms && <div className="w-2 h-2 bg-[#FF4C16] rounded-full"></div>}
                      </div>
                    </div>
                    <span
                      className={`text-sm font-medium transition-all ${agreeToTerms ? "text-[#F6F6F4]" : "text-[#0D1318]"}`}
                    >
                      I Agree
                    </span>
                  </motion.div>
                </motion.label>

                <motion.button
                  type="submit"
                  className="cursor-pointer w-full bg-[#0D1318] text-[#F6F6F4] py-3 sm:py-4 px-4 sm:px-6 rounded-lg uppercase tracking-wider hover:bg-[#0D1318]/90 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 15px 35px rgba(13, 19, 24, 0.3)",
                    y: -3,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={shimmerAnimation}
                  />
                  <span className="relative z-10">SUBMIT MY APPLICATION</span>
                  <motion.img
                    src={doubleArrow}
                    alt=""
                    className="w-3 h-3 sm:w-4 sm:h-4 relative z-10"
                    animate={{
                      x: [0, 3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BusinessApplyForm
