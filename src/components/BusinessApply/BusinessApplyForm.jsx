"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import doubleArrow from "../../assets/icons/double-arrow-white.svg"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const slideLeft = {
  hidden: { x: -30, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const slideRight = {
  hidden: { x: 30, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const formField = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const BusinessApplyForm = () => {
  // Form state
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subscribeToUpdates, setSubscribeToUpdates] = useState(false)
  const [country, setCountry] = useState("")
  const [addressLine1, setAddressLine1] = useState("")
  const [addressLine2, setAddressLine2] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [role, setRole] = useState("")
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
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] = useState(false)
  const [isYearsDropdownOpen, setIsYearsDropdownOpen] = useState(false)
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false)
  const [isLicensedDropdownOpen, setIsLicensedDropdownOpen] = useState(false)
  const [isHearAboutDropdownOpen, setIsHearAboutDropdownOpen] = useState(false)

  const roleOptions = ["Solar Rep", "Dealer Partner", "Contractor/Installer", "Other"]

  const countryOptions = ["United States", "Canada", "Mexico"]

  const experienceOptions = ["Yes", "No"]

  const yearsOptions = ["Less than 1 year", "1-2 years", "3-5 years", "5-10 years", "10+ years"]

  const teamOptions = ["Yes", "No"]

  const licensedOptions = ["Yes", "No"]

  const hearAboutOptions = ["Google Search", "Social Media", "Referral", "Advertisement", "Other"]

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setIsCountryDropdownOpen(false)
    setIsExperienceDropdownOpen(false)
    setIsYearsDropdownOpen(false)
    setIsTeamDropdownOpen(false)
    setIsLicensedDropdownOpen(false)
    setIsHearAboutDropdownOpen(false)
  }

  // Handle dropdown toggle - close others when opening one, toggle if same
  const handleDropdownToggle = (dropdownType) => {
    switch (dropdownType) {
      case "country":
        if (isCountryDropdownOpen) {
          setIsCountryDropdownOpen(false)
        } else {
          closeAllDropdowns()
          setIsCountryDropdownOpen(true)
        }
        break
      case "experience":
        if (isExperienceDropdownOpen) {
          setIsExperienceDropdownOpen(false)
        } else {
          closeAllDropdowns()
          setIsExperienceDropdownOpen(true)
        }
        break
      case "years":
        if (isYearsDropdownOpen) {
          setIsYearsDropdownOpen(false)
        } else {
          closeAllDropdowns()
          setIsYearsDropdownOpen(true)
        }
        break
      case "team":
        if (isTeamDropdownOpen) {
          setIsTeamDropdownOpen(false)
        } else {
          closeAllDropdowns()
          setIsTeamDropdownOpen(true)
        }
        break
      case "licensed":
        if (isLicensedDropdownOpen) {
          setIsLicensedDropdownOpen(false)
        } else {
          closeAllDropdowns()
          setIsLicensedDropdownOpen(true)
        }
        break
      case "hearAbout":
        if (isHearAboutDropdownOpen) {
          setIsHearAboutDropdownOpen(false)
        } else {
          closeAllDropdowns()
          setIsHearAboutDropdownOpen(true)
        }
        break
      default:
        break
    }
  }

  const handleDropdownSelect = (dropdown, value) => {
    switch (dropdown) {
      case "country":
        setCountry(value)
        setIsCountryDropdownOpen(false)
        break
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is not on any dropdown button or dropdown menu
      const isDropdownClick = event.target.closest('[data-dropdown]')
      
      if (!isDropdownClick) {
        closeAllDropdowns()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .placeholder-with-orange-asterisk::placeholder {
            background: linear-gradient(to right, #0D1318 0%, #0D1318 calc(100% - 8px), #FF4C16 calc(100% - 8px));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            opacity: 0.6;
          }
          .placeholder-with-orange-asterisk::-webkit-input-placeholder {
            background: linear-gradient(to right, #0D1318 0%, #0D1318 calc(100% - 8px), #FF4C16 calc(100% - 8px));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            opacity: 0.6;
          }
          .placeholder-with-orange-asterisk::-moz-placeholder {
            background: linear-gradient(to right, #0D1318 0%, #0D1318 calc(100% - 8px), #FF4C16 calc(100% - 8px));
            background-clip: text;
            color: transparent;
            opacity: 0.6;
          }
        `
      }} />

      <motion.section
        className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="mx-auto  px-4 sm:px-6 relative z-10">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start" variants={container}>
            {/* Left Side - Text Content */}
            <motion.div className="space-y-4 sm:space-y-5 md:space-y-6" variants={slideLeft}>
              <motion.div variants={fadeUp}>
                <span className="w-fit inline-block rounded-sm border-2 border-[#FF4C16] py-1 font-semibold uppercase tracking-[0.25em] text-[#FF4C16] text-[9px] sm:text-[14px] md:text-[14px] px-4"
                style={{
                  transformOrigin: "center",
                  transformStyle: "preserve-3d",
                }}>
                  APPLY TO ASCND
                </span>
              </motion.div>

              <motion.h1
                className="text-[#0D1318] text-[30px] leading-[32px]
sm:text-[36px] sm:leading-[40px]
md:text-[48px] md:leading-[48px]
lg:text-[60px] lg:leading-[56px]
xl:text-[72px] xl:leading-[64px]
2xl:text-[90px] 2xl:leading-[72px]
1821:text-[102px] 1821:leading-[80px]
tracking-[-0.04em] font-[700]"
                variants={fadeUp}
              >
                <motion.span variants={fadeUp} className="block">
                  Let's work
                </motion.span>
                <motion.span variants={fadeUp} className="block">
                  together.
                </motion.span>
              </motion.h1>

              <motion.div className="space-y-3 sm:space-y-4 text-[#636E80]" variants={fadeUp}>
                <motion.p className="text-[14px] leading-[20px]
sm:text-[16px] sm:leading-[24px]
md:text-[18px] md:leading-[28px]
2xl:text-[18px] 2xl:leading-[26px]
1821:text-[20px] 1821:leading-[28px] font-[600]" variants={fadeUp}>
                  ASCND makes it easy to enhance your space with premium improvements—fast timelines, expert installers,
                  and zero pressure.
                </motion.p>
                <motion.p className="text-[14px] leading-[20px]
sm:text-[16px] sm:leading-[24px]
md:text-[18px] md:leading-[28px]
2xl:text-[18px] 2xl:leading-[26px]
1821:text-[20px] 1821:leading-[28px] font-[600]" variants={fadeUp}>
                  Whether you're ready to go solar, finally get turf in the backyard, or refresh your garage floor, we've
                  got you covered.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              className="rounded-[24px] border border-[#4B5361] bg-[#FAFBFB] p-3 sm:p-4 md:p-6"
              variants={slideRight}
            >
              <motion.h4
                className="text-[#4B5361] mb-3 sm:mb-4
              text-[14px] leading-[20px]
              sm:text-[16px] sm:leading-[24px]
              md:text-[18px] md:leading-[28px]
              2xl:text-[18px] 2xl:leading-[26px]
              1821:text-[20px] 1821:leading-[28px] font-[700]
              tracking-[-0.02em]"
                variants={fadeUp}
              >
                Contact Information
              </motion.h4>

              <motion.form className="space-y-3" variants={container}>
                {/* Name Fields */}
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-2" variants={formField}>
                  <div>
                    <motion.input
                      type="text"
                      placeholder="FIRST NAME*"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="placeholder-with-orange-asterisk w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                      variants={formField}
                    />
                  </div>
                  <div>
                    <motion.input
                      type="text"
                      placeholder="LAST NAME*"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="placeholder-with-orange-asterisk w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                      variants={formField}
                    />
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={formField}>
                  <motion.input
                    type="email"
                    placeholder="EMAIL ADDRESS*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="placeholder-with-orange-asterisk w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                    variants={formField}
                  />
                  <motion.div
                    className="mt-3 bg-[#E4E6E9] rounded-lg  px-3 sm:px-4 py-2.5 sm:py-3"
                    variants={formField}
                  >
                    <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                      <motion.input
                        type="checkbox"
                        checked={subscribeToUpdates}
                        onChange={(e) => setSubscribeToUpdates(e.target.checked)}
                        className="w-4 h-4 sm:w-5 sm:h-5 accent-[#0D1318] cursor-pointer"
                        variants={formField}
                      />
                      <span className="text-[11px] font-semibold text-[#4B5361]">Subscribe to news & updates</span>
                    </label>
                  </motion.div>
                </motion.div>

                {/* Phone */}
                <motion.div variants={formField}>
                  <motion.input
                    type="tel"
                    placeholder="PHONE NUMBER"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="placeholder-with-orange-asterisk w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                    variants={formField}
                  />
                </motion.div>

                {/* Address Section */}
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                    Address<span className="text-[#FF4C16]">*</span>
                  </h3>

                  {/* Country */}
                  <div className="mb-4">
                    <div className="relative" data-dropdown>
                      <motion.button
                        type="button"
                        onClick={() => handleDropdownToggle("country")}
                        className="cursor-pointer w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-left outline-none focus:border-[#FF4C16] flex items-center justify-between transition-border-color duration-200"
                        variants={formField}
                      >
                        <span className={country ? "text-[#0D1318]" : "text-[#0D1318]/60"}>
                          {country ? country.toUpperCase() : "SELECT COUNTRY"}
                        </span>
                        <motion.svg
                          className={`w-3 h-3 sm:w-4 sm:h-4 text-[#0D1318] transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: isCountryDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </motion.button>

                      {isCountryDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full left-0 right-0 mt-1 bg-[#F6F6F4] border-[2px] border-[#B0B8C7] rounded-lg z-10 max-h-60 overflow-y-auto"
                        >
                          {countryOptions.map((option) => (
                            <motion.button
                              key={option}
                              type="button"
                              onClick={() => handleDropdownSelect("country", option)}
                              className="cursor-pointer w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-all border-b border-gray-100 last:border-b-0"
                            >
                              {option.toUpperCase()}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Address Line 1 */}
                  <div className="mb-4">
                    <motion.input
                      type="text"
                      placeholder="ADDRESS LINE 1*"
                      value={addressLine1}
                      onChange={(e) => setAddressLine1(e.target.value)}
                      className="placeholder-with-orange-asterisk w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                      variants={formField}
                    />
                  </div>

                  {/* Address Line 2 */}
                  <div className="mb-4">
                    <motion.input
                      type="text"
                      placeholder="ADDRESS LINE 2"
                      value={addressLine2}
                      onChange={(e) => setAddressLine2(e.target.value)}
                      className="w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] placeholder-[#0D1318]/60 outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                      variants={formField}
                    />
                  </div>

                  {/* City, State, Zip */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <motion.input
                      type="text"
                      placeholder="CITY*"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="placeholder-with-orange-asterisk w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                      variants={formField}
                    />
                    <motion.input
                      type="text"
                      placeholder="STATE*"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="placeholder-with-orange-asterisk w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                      variants={formField}
                    />
                    <motion.input
                      type="text"
                      placeholder="ZIP CODE*"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="placeholder-with-orange-asterisk w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                      variants={formField}
                    />
                  </div>
                </motion.div>

                {/* Role Selection */}
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                    What role are you interested in?<span className="text-[#FF4C16]">*</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {roleOptions.map((option) => (
                      <motion.label
                        key={option}
                        className="cursor-pointer"
                        variants={fadeUp}
                      >
                        <motion.div
                          className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all ${
                            role === option
                              ? "bg-[#FF4C16] border-[#FF4C16] text-[#F6F6F4]"
                              : "bg-[#F3F4F6] border-[#B0B8C7] text-[#0D1318]"
                          }`}
                          variants={fadeUp}
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
                              className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center transition-all ${
                                role === option ? "bg-[#F6F6F4] border-[#F6F6F4]" : "bg-[#F6F6F4] border-[#FF4C16]"
                              }`}
                            >
                              {role === option && (
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF4C16] rounded-full"></div>
                              )}
                            </div>
                          </div>
                          <span
                            className={`text-xs sm:text-sm font-medium transition-all ${
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
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                    Do you have experience in the solar industry?<span className="text-[#FF4C16]">*</span>
                  </h3>
                  <div className="relative" data-dropdown>
                    <motion.button
                      type="button"
                      onClick={() => handleDropdownToggle("experience")}
                      className="cursor-pointer w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-left outline-none focus:border-[#FF4C16] flex items-center justify-between transition-border-color duration-200"
                      variants={formField}
                    >
                      <span className={hasExperience ? "text-[#0D1318]" : "text-[#0D1318]/60"}>
                        {hasExperience || "SELECT AN OPTION"}
                      </span>
                      <motion.svg
                        className={`w-3 h-3 sm:w-4 sm:h-4 text-[#0D1318] transition-transform ${isExperienceDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isExperienceDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </motion.button>

                    {isExperienceDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-[#F6F6F4] border-[2px] border-[#B0B8C7] rounded-lg z-10 max-h-60 overflow-y-auto"
                      >
                        {experienceOptions.map((option) => (
                          <motion.button
                            key={option}
                            type="button"
                            onClick={() => handleDropdownSelect("experience", option)}
                            className="cursor-pointer w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-all border-b border-gray-100 last:border-b-0"
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
                  <motion.div variants={formField}>
                    <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">If yes, describe your experience</h3>
                    <motion.textarea
                      rows={4}
                      value={experienceDescription}
                      onChange={(e) => setExperienceDescription(e.target.value)}
                      className="w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] placeholder-[#0D1318]/60 outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                      variants={formField}
                    />
                  </motion.div>
                )}

                {/* Years of Experience */}
                {hasExperience === "Yes" && (
                  <motion.div variants={formField}>
                    <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">How many years?</h3>
                    <div className="relative" data-dropdown>
                      <motion.button
                        type="button"
                        onClick={() => handleDropdownToggle("years")}
                        className="cursor-pointer w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-left outline-none focus:border-[#FF4C16] flex items-center justify-between transition-border-color duration-200"
                        variants={formField}
                      >
                        <span className={yearsOfExperience ? "text-[#0D1318]" : "text-[#0D1318]/60"}>
                          {yearsOfExperience || "SELECT AN OPTION"}
                        </span>
                        <motion.svg
                          className={`w-3 h-3 sm:w-4 sm:h-4 text-[#0D1318] transition-transform ${isYearsDropdownOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: isYearsDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </motion.button>

                      {isYearsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full left-0 right-0 mt-1 bg-[#F6F6F4] border-[2px] border-[#B0B8C7] rounded-lg z-10 max-h-60 overflow-y-auto"
                        >
                          {yearsOptions.map((option) => (
                            <motion.button
                              key={option}
                              type="button"
                              onClick={() => handleDropdownSelect("years", option)}
                              className="cursor-pointer w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-all border-b border-gray-100 last:border-b-0"
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
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                    Do you currently have a team?<span className="text-[#FF4C16]">*</span>
                  </h3>
                  <div className="relative" data-dropdown>
                    <motion.button
                      type="button"
                      onClick={() => handleDropdownToggle("team")}
                      className="cursor-pointer w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-left outline-none focus:border-[#FF4C16] flex items-center justify-between transition-border-color duration-200"
                      variants={formField}
                    >
                      <span className={hasTeam ? "text-[#0D1318]" : "text-[#0D1318]/60"}>
                        {hasTeam || "SELECT AN OPTION"}
                      </span>
                      <motion.svg
                        className={`w-3 h-3 sm:w-4 sm:h-4 text-[#0D1318] transition-transform ${isTeamDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isTeamDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </motion.button>

                    {isTeamDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-[#F6F6F4] border-[2px] border-[#B0B8C7] rounded-lg z-10 max-h-60 overflow-y-auto"
                      >
                        {teamOptions.map((option) => (
                          <motion.button
                            key={option}
                            type="button"
                            onClick={() => handleDropdownSelect("team", option)}
                            className="cursor-pointer w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-all border-b border-gray-100 last:border-b-0"
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
                  <motion.div variants={formField}>
                    <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">If yes, what is the size of your team?</h3>
                    <motion.input
                      type="text"
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                      variants={formField}
                    />
                  </motion.div>
                )}

                {/* Company Information */}
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">Company name</h3>
                  <motion.input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                    variants={formField}
                  />
                </motion.div>

                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">Company website</h3>
                  <motion.input
                    type="url"
                    placeholder="HTTP://"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    className="w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] placeholder-[#0D1318]/60 outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                    variants={formField}
                  />
                </motion.div>

                {/* Operating States */}
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                    What states do you operate in?<span className="text-[#FF4C16]">*</span>
                  </h3>
                  <motion.textarea
                    rows={4}
                    value={operatingStates}
                    onChange={(e) => setOperatingStates(e.target.value)}
                    className="w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                    variants={formField}
                  />
                </motion.div>

                {/* Licensed & Insured */}
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                    Are you licensed & insured?<span className="text-[#FF4C16]">*</span>
                  </h3>
                  <div className="relative" data-dropdown>
                    <motion.button
                      type="button"
                      onClick={() => handleDropdownToggle("licensed")}
                      className="cursor-pointer w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-left outline-none focus:border-[#FF4C16] flex items-center justify-between transition-border-color duration-200"
                      variants={formField}
                    >
                      <span className={isLicensedInsured ? "text-[#0D1318]" : "text-[#0D1318]/60"}>
                        {isLicensedInsured || "SELECT AN OPTION"}
                      </span>
                      <motion.svg
                        className={`w-3 h-3 sm:w-4 sm:h-4 text-[#0D1318] transition-transform ${isLicensedDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isLicensedDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </motion.button>

                    {isLicensedDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-[#F6F6F4] border-[2px] border-[#B0B8C7] rounded-lg z-10 max-h-60 overflow-y-auto"
                      >
                        {licensedOptions.map((option) => (
                          <motion.button
                            key={option}
                            type="button"
                            onClick={() => handleDropdownSelect("licensed", option)}
                            className="cursor-pointer w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-all border-b border-gray-100 last:border-b-0"
                          >
                            {option}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Partnership Goals */}
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                    What are your goals in partnering with us?<span className="text-[#FF4C16]">*</span>
                  </h3>
                  <motion.textarea
                    rows={4}
                    value={partnershipGoals}
                    onChange={(e) => setPartnershipGoals(e.target.value)}
                    className="w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                    variants={formField}
                  />
                </motion.div>

                {/* How did you hear about ASCND */}
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                    How did you hear about ASCND?<span className="text-[#FF4C16]">*</span>
                  </h3>
                  <div className="relative" data-dropdown>
                    <motion.button
                      type="button"
                      onClick={() => handleDropdownToggle("hearAbout")}
                      className="cursor-pointer w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-left outline-none focus:border-[#FF4C16] flex items-center justify-between transition-border-color duration-200"
                      variants={formField}
                    >
                      <span className={hearAbout ? "text-[#0D1318]" : "text-[#0D1318]/60"}>
                        {hearAbout || "SELECT AN OPTION"}
                      </span>
                      <motion.svg
                        className={`w-3 h-3 sm:w-4 sm:h-4 text-[#0D1318] transition-transform ${isHearAboutDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isHearAboutDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </motion.button>

                    {isHearAboutDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-[#F6F6F4] border-[2px] border-[#B0B8C7] rounded-lg z-10 max-h-60 overflow-y-auto"
                      >
                        {hearAboutOptions.map((option) => (
                          <motion.button
                            key={option}
                            type="button"
                            onClick={() => handleDropdownSelect("hearAbout", option)}
                            className="cursor-pointer w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-all border-b border-gray-100 last:border-b-0"
                          >
                            {option}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Terms and Conditions */}
                <motion.div variants={formField}>
                  <p className="text-[11px] text-[#4B5361] font-[600] leading-[16px] mb-2">
                    I certify that the information provided is accurate and complete. I understand that this application
                    does not guarantee acceptance into the ASCND program. Additionally, I consent to receive text messages
                    from ASCND Pro regarding updates, promotions, and other information. I understand that message and
                    data rates may apply, and I can opt out at any time by replying STOP.
                  </p>

                  <motion.label className="cursor-pointer mb-6 block">
                    <motion.div
                      className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all ${
                        agreeToTerms
                          ? "bg-[#FF4C16] border-[#FF4C16]"
                          : "bg-[#F6F6F4] border-[#B0B8C7]"
                      }`}
                      variants={fadeUp}
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={agreeToTerms}
                          onChange={(e) => setAgreeToTerms(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center transition-all ${
                            agreeToTerms ? "bg-[#F6F6F4] border-[#F6F6F4]" : "bg-[#F6F6F4] border-[#FF4C16]"
                          }`}
                        >
                          {agreeToTerms && <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF4C16] rounded-full"></div>}
                        </div>
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-medium transition-all ${agreeToTerms ? "text-[#F6F6F4]" : "text-[#0D1318]"}`}
                      >
                        I Agree
                      </span>
                    </motion.div>
                  </motion.label>

                  <motion.button
                    type="submit"
                    className="cursor-pointer w-full rounded-lg bg-[#0D1318] px-6 py-2.5 text-[11px] sm:px-8 sm:py-3 font-[700] uppercase tracking-[0.25em] text-[#F6F6F4] flex items-center justify-center gap-2"
                    variants={formField}
                  >
                    <span>SUBMIT MY APPLICATION</span>
                    <img src={doubleArrow} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default BusinessApplyForm