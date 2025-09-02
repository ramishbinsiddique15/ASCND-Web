"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import calendar from "../../assets/icons/calendar.svg"
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

const RequestForm = () => {
  const [selectedServices, setSelectedServices] = useState([])
  const [budget, setBudget] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [hearAbout, setHearAbout] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [selectingStart, setSelectingStart] = useState(true)

  const dropdownRef = useRef(null)

  const services = ["Solar", "HVAC", "Windows & Doors", "Epoxy Flooring", "Turf", "Not Sure Yet", "Roofing", "Lighting"]

  const budgetOptions = ["$500 - $1,000", "$1,000 - $5,000", "$5,000 - $8,000", "$8,000 - $10,000", "$10,000 AND UP"]

  const hearAboutOptions = [
    { value: "google", label: "Google Search" },
    { value: "social", label: "Social Media" },
    { value: "referral", label: "Referral" },
    { value: "advertisement", label: "Advertisement" },
    { value: "other", label: "Other" },
  ]

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  const handleDropdownSelect = (option) => {
    setHearAbout(option.value)
    setIsDropdownOpen(false)
  }

  const formatDate = (date) => {
    if (!date) return ""
    const d = new Date(date)
    return `${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getDate().toString().padStart(2, "0")}/${d.getFullYear()}`
  }

  const handleDateSelect = (date) => {
    if (selectingStart) {
      setStartDate(date)
      setSelectingStart(false)
    } else {
      setEndDate(date)
      setIsCalendarOpen(false)
      setSelectingStart(true)
    }
  }

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay()
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear)
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
    const days = []

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8 sm:w-10 sm:h-10"></div>)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day)
      const dateString = date.toISOString().split("T")[0]
      const isSelected = dateString === startDate || dateString === endDate
      const isInRange = startDate && endDate && dateString > startDate && dateString < endDate

      days.push(
        <motion.button
          key={day}
          type="button"
          onClick={() => handleDateSelect(dateString)}
          className={`w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm font-medium rounded-lg transition-all ${isSelected
              ? "bg-[#FF4C16] text-[#F6F6F4]"
              : isInRange
                ? "bg-[#FF4C16]/20 text-[#FF4C16]"
                : "text-[#0D1318]"
            }`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {day}
        </motion.button>,
      )
    }

    return days
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownRef])

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
                  REQUEST A QUOTE
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
                  Looking to
                </motion.span>
                <motion.span variants={fadeUp} className="block">
                  upgrade your
                </motion.span>
                <motion.span variants={fadeUp} className="block">
                  home?
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
                      className="placeholder-with-orange-asterisk w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                      variants={formField}
                    />
                  </div>
                  <div>
                    <motion.input
                      type="text"
                      placeholder="LAST NAME*"
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
                        className="w-4 h-4 sm:w-5 sm:h-5 accent-[#0D1318] cursor-pointer"
                        variants={formField}
                      />
                      <span className="text-[11px] font-semibold text-[#4B5361]">Subscribe to news & updates</span>
                    </label>
                  </motion.div>
                </motion.div>

                <motion.div variants={formField}>
                  <motion.input
                    type="tel"
                    placeholder="PHONE NUMBER"
                    className="placeholder-with-orange-asterisk w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                    variants={formField}
                  />
                </motion.div>

                {/* Services */}
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                    What services are you interested in?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {services.map((service) => (
                      <motion.label
                        key={service}
                        className="cursor-pointer"
                        variants={fadeUp}
                      >
                        <motion.div
                          className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all ${selectedServices.includes(service)
                              ? "bg-[#FF4C16] border-[#FF4C16] text-[#F6F6F4]"
                              : "bg-[#F3F4F6] border-[#B0B8C7] text-[#0D1318]"
                            }`}
                          variants={fadeUp}
                        >
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={selectedServices.includes(service)}
                              onChange={() => handleServiceToggle(service)}
                              className="sr-only"
                            />
                            <div
                              className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center transition-all ${selectedServices.includes(service) ? "bg-[#F6F6F4] border-[#F6F6F4]" : "bg-[#F6F6F4] border-[#FF4C16]"
                                }`}
                            >
                              {selectedServices.includes(service) && (
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF4C16] rounded-full"></div>
                              )}
                            </div>
                          </div>
                          <span
                            className={`text-xs sm:text-sm font-medium transition-all ${selectedServices.includes(service) ? "text-[#F6F6F4]" : "text-[#0D1318]"
                              }`}
                          >
                            {service}
                          </span>
                        </motion.div>
                      </motion.label>
                    ))}
                  </div>
                </motion.div>

                {/* Preferred Date */}
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                    Preferred date timeframe
                  </h3>
                  <div className="relative">
                    <motion.input
                      type="text"
                      value={
                        startDate && endDate
                          ? `${formatDate(startDate)} ➝ ${formatDate(endDate)}`
                          : startDate
                            ? formatDate(startDate)
                            : ""
                      }
                      placeholder="MM/DD/YYYY ➝ MM/DD/YYYY"
                      readOnly
                      onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                      className="w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 pr-10 sm:pr-12 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-[#0D1318] placeholder-[#0D1318]/60 outline-none focus:border-[#FF4C16] cursor-pointer transition-border-color duration-200"
                      variants={formField}
                    />
                    <div
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    >
                      <img src={calendar || "/placeholder.svg"} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {isCalendarOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#F6F6F4] border border-[#B0B8C7] rounded-lg z-20 p-3 sm:p-4"
                      >
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-4">
                          <button
                            type="button"
                            onClick={() => {
                              if (currentMonth === 0) {
                                setCurrentMonth(11)
                                setCurrentYear(currentYear - 1)
                              } else {
                                setCurrentMonth(currentMonth - 1)
                              }
                            }}
                            className="p-1 rounded"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>

                          <h4 className="text-base sm:text-lg font-semibold text-[#0D1318]">
                            {monthNames[currentMonth]} {currentYear}
                          </h4>

                          <button
                            type="button"
                            onClick={() => {
                              if (currentMonth === 11) {
                                setCurrentMonth(0)
                                setCurrentYear(currentYear + 1)
                              } else {
                                setCurrentMonth(currentMonth + 1)
                              }
                            }}
                            className="p-1 rounded"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>

                        {/* Selection Info */}
                        <div className="mb-4 text-center">
                          <p className="text-sm text-[#0D1318]/60">
                            {selectingStart ? "Select start date" : "Select end date"}
                          </p>
                          {startDate && <p className="text-sm text-[#FF4C16] mt-1">Start: {formatDate(startDate)}</p>}
                        </div>

                        {/* Days of week */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                            <div
                              key={day}
                              className="w-8 h-6 sm:w-10 sm:h-8 flex items-center justify-center text-xs font-medium text-[#0D1318]/60"
                            >
                              {day}
                            </div>
                          ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>

                        {/* Action Buttons */}
                        <div className="mt-4 flex gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setStartDate("")
                              setEndDate("")
                              setSelectingStart(true)
                            }}
                            className="flex-1 px-3 py-2 text-sm font-medium text-[#0D1318] border border-[#B0B8C7] rounded-lg hover:bg-gray-50"
                          >
                            Clear
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setIsCalendarOpen(false)
                              setSelectingStart(true)
                            }}
                            className="flex-1 px-3 py-2 text-sm font-medium text-[#F6F6F4] bg-[#FF4C16] rounded-lg"
                          >
                            Done
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Budget */}
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">What is your budget?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {budgetOptions.map((option) => (
                      <motion.label
                        key={option}
                        className="flex items-center space-x-2 cursor-pointer"
                        variants={formField}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={option}
                          checked={budget === option}
                          onChange={(e) => setBudget(e.target.value)}
                          className="sr-only"
                        />
                        <motion.div
                          className={`w-full px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 rounded-lg border text-center text-xs sm:text-sm transition-all ${budget === option
                              ? "bg-[#0D1318] text-[#F6F6F4] border-[#0D1318]"
                              : "bg-[#F6F6F4] text-[#0D1318] border-[#B0B8C7]"
                            }`}
                          variants={formField}
                        >
                          {option}
                        </motion.div>
                      </motion.label>
                    ))}
                  </div>
                </motion.div>

                {/* How did you hear about us */}
                <motion.div variants={formField}>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">
                    How did you hear about us?
                  </h3>
                  <div className="relative" ref={dropdownRef}>
                    <motion.button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="cursor-pointer w-full rounded-lg border-[2px] border-[#B0B8C7] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 font-semibold tracking-[0.25em] text-left outline-none focus:border-[#FF4C16] flex items-center justify-between transition-border-color duration-200"
                      variants={formField}
                    >
                      <span className={hearAbout ? "text-[#0D1318]" : "text-[#0D1318]/60"}>
                        {hearAbout
                          ? hearAboutOptions.find((option) => option.value === hearAbout)?.label
                          : "SELECT AN OPTION"}
                      </span>
                      <motion.svg
                        className={`w-3 h-3 sm:w-4 sm:h-4 text-[#0D1318] transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </motion.button>

                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-[#F6F6F4] border-[2px] border-[#B0B8C7] rounded-lg z-10 max-h-60 overflow-y-auto"
                      >
                        {hearAboutOptions.map((option) => (
                          <motion.button
                            key={option.value}
                            type="button"
                            onClick={() => handleDropdownSelect(option)}
                            className="cursor-pointer w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-[#F6F6F4] transition-all border-b border-gray-100 last:border-b-0">
                            {option.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Separator Line */}
                <motion.div variants={formField}>
                  <hr className="border-t border-[#E4E6E9] my-14 " />
                </motion.div>

                {/* Message */}
                <motion.div variants={formField}>
                  <motion.textarea
                    rows={4}
                    placeholder="MESSAGE*"
                    className="placeholder-with-orange-asterisk w-full rounded-lg border-[2px] border-[#4B5361] bg-[#F6F6F4] px-3 py-2.5 text-[11px] sm:px-4 sm:py-3 sm:rows-5 font-semibold tracking-[0.25em] text-[#0D1318] outline-none focus:border-[#FF4C16] transition-border-color duration-200"
                    variants={formField}
                  />
                </motion.div>

                {/* Privacy Policy and Submit */}
                <motion.div variants={formField}>
                  <motion.div
                    className="text-[11px] text-[#4B5361] font-[600] leading-[16px] mb-2"
                    variants={formField}
                  >
                    <p>
                      We send periodic news and updates to our subscribers. Check the box above to sign up. You can
                      unsubscribe at any time. For more info please review our{" "}
                      <a href="#" className="underline">
                        Privacy Policy
                      </a>
                      . <br />
                      By clicking submit, you consent to allow ASCND to store and process the info you submitted in order to
                      provide the content requested.
                    </p>
                  </motion.div>
                  <hr className="border-t border-1 border-[#4B5361] mb-3" />

                  <motion.button
                    type="submit"
                    className="cursor-pointer w-full rounded-lg bg-[#0D1318] px-6 py-2.5 text-[11px] sm:px-8 sm:py-3 font-[700] uppercase tracking-[0.25em] text-[#F6F6F4] flex items-center justify-center gap-2"
                    variants={formField}
                  >
                    <span>SUBMIT</span>
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

export default RequestForm