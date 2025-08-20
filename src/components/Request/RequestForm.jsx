import React, { useState } from 'react';
import { motion } from 'framer-motion';
import calendar from "../../assets/icons/calendar.png";
import doubleArrow from "../../assets/icons/double-arrow-white.png";

// Animation variants
const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { delayChildren: 0.12, staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const slideLeft = {
  hidden: { x: -24, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 150, damping: 22 } },
};

const slideRight = {
  hidden: { x: 24, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 150, damping: 22 } },
};

const RequestForm = () => {
  const [selectedServices, setSelectedServices] = useState(['Solar']);
  const [budget, setBudget] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [hearAbout, setHearAbout] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectingStart, setSelectingStart] = useState(true);

  const services = [
    'Solar', 'HVAC', 'Windows & Doors', 'Epoxy Flooring', 'Turf', 'Not Sure Yet', 'Roofing', 'Lighting'
  ];

  const budgetOptions = [
    '$500 - $1,000', '$1,000 - $5,000', '$5,000 - $8,000',
    '$8,000 - $10,000', '$10,000 AND UP'
  ];

  const hearAboutOptions = [
    { value: 'google', label: 'Google Search' },
    { value: 'social', label: 'Social Media' },
    { value: 'referral', label: 'Referral' },
    { value: 'advertisement', label: 'Advertisement' },
    { value: 'other', label: 'Other' }
  ];

  const handleServiceToggle = (service) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleDropdownSelect = (option) => {
    setHearAbout(option.value);
    setIsDropdownOpen(false);
  };

  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return `${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getDate().toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  const handleDateSelect = (date) => {
    if (selectingStart) {
      setStartDate(date);
      setSelectingStart(false);
    } else {
      setEndDate(date);
      setIsCalendarOpen(false);
      setSelectingStart(true);
    }
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8 sm:w-10 sm:h-10"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const dateString = date.toISOString().split('T')[0];
      const isSelected = dateString === startDate || dateString === endDate;
      const isInRange = startDate && endDate && dateString > startDate && dateString < endDate;
      
      days.push(
        <button
          key={day}
          type="button"
          onClick={() => handleDateSelect(dateString)}
          className={`w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm font-medium rounded-lg transition-all ${
            isSelected
              ? 'bg-[#FF4C16] text-white'
              : isInRange
              ? 'bg-[#FF4C16]/20 text-[#FF4C16]'
              : 'text-[#0D1318] hover:bg-gray-100'
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <motion.section
      className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24"
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 ">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start" variants={container}>
          
          {/* Left Side - Text Content */}
          <motion.div className="space-y-4 sm:space-y-5 md:space-y-6" variants={slideLeft}>
            <motion.div variants={fadeUp}>
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-[#FF4C16] text-xs sm:text-sm font-semibold uppercase tracking-wider border-2 border-[#FF4C16] rounded">
                REQUEST A QUOTE
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0D1318] leading-[0.8]"
              variants={fadeUp}
            >
              <motion.span variants={fadeUp} className="block">Looking to</motion.span>
              <motion.span variants={fadeUp} className="block">upgrade your</motion.span>
              <motion.span variants={fadeUp} className="block">home?</motion.span>
            </motion.h1>
            
            <motion.div className="space-y-3 sm:space-y-4 text-gray-600" variants={fadeUp}>
              <p className="text-sm sm:text-base md:text-lg">
                ASCND makes it easy to enhance your space with premium improvements—fast timelines, expert installers, and zero pressure.
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                Whether you're ready to go solar, finally get turf in the backyard, or refresh your garage floor, we've got you covered.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            className="bg-white rounded-xl sm:rounded-2xl border border-[#4B5361] shadow-lg p-4 sm:p-5 md:p-6"
            variants={slideRight}
          >
            <motion.h2 
              className="text-lg sm:text-xl font-semibold text-[#0D1318] mb-4 sm:mb-5 md:mb-6"
              variants={fadeUp}
            >
              Contact Information
            </motion.h2>

            <motion.form className="space-y-4 sm:space-y-5 md:space-y-6" variants={container}>
              {/* Name Fields */}
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" variants={fadeUp}>
                <div>
                  <input
                    type="text"
                    placeholder="FIRST NAME*"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#B0B8C7] rounded-lg text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="LAST NAME*"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#B0B8C7] rounded-lg text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeUp}>
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS*"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#B0B8C7] rounded-lg text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                />
                <div className="mt-3 bg-[#E4E6E9] rounded-lg border border-[#B0B8C7] px-3 sm:px-4 py-2.5 sm:py-3">
                  <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D1318] bg-white border-2 border-gray-400 cursor-pointer accent-[#FF4C16] rounded-md" 
                    />
                    <span className="text-xs sm:text-sm font-medium text-[#0D1318]">Subscribe to news & updates</span>
                  </label>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeUp}>
                <input
                  type="tel"
                  placeholder="PHONE NUMBER*"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#B0B8C7] rounded-lg text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                />
              </motion.div>

              {/* Services */}
              <motion.div variants={fadeUp}>
                <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">What services are you interested in?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                  {services.map((service) => (
                    <label key={service} className="cursor-pointer">
                      <div className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all ${
                        selectedServices.includes(service)
                          ? 'bg-[#FF4C16] border-[#FF4C16]'
                          : 'bg-[#F3F4F6] border-[#B0B8C7] hover:border-[#FF4C16]'
                      }`}>
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center transition-all ${
                            selectedServices.includes(service)
                              ? 'bg-white border-white'
                              : 'bg-white border-[#FF4C16]'
                          }`}>
                            {selectedServices.includes(service) && (
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF4C16] rounded-full"></div>
                            )}
                          </div>
                        </div>
                        <span className={`text-xs sm:text-sm font-medium transition-all ${
                          selectedServices.includes(service)
                            ? 'text-white'
                            : 'text-[#0D1318]'
                        }`}>
                          {service}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Preferred Date */}
              <motion.div variants={fadeUp}>
                <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">Preferred date timeframe</h3>
                <div className="relative">
                  <input
                    type="text"
                    value={
                      startDate && endDate 
                        ? `${formatDate(startDate)} ➝ ${formatDate(endDate)}` 
                        : startDate 
                        ? formatDate(startDate)
                        : ''
                    }
                    placeholder="MM/DD/YYYY ➝ MM/DD/YYYY"
                    readOnly
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 border border-[#B0B8C7] rounded-lg text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2 cursor-pointer"
                  />
                  <div 
                    className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  >
                    <img src={calendar} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  
                  {isCalendarOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#B0B8C7] rounded-lg shadow-lg z-20 p-3 sm:p-4"
                    >
                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-4">
                        <button
                          type="button"
                          onClick={() => {
                            if (currentMonth === 0) {
                              setCurrentMonth(11);
                              setCurrentYear(currentYear - 1);
                            } else {
                              setCurrentMonth(currentMonth - 1);
                            }
                          }}
                          className="p-1 hover:bg-gray-100 rounded"
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
                              setCurrentMonth(0);
                              setCurrentYear(currentYear + 1);
                            } else {
                              setCurrentMonth(currentMonth + 1);
                            }
                          }}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                      {/* Selection Info */}
                      <div className="mb-4 text-center">
                        <p className="text-sm text-[#0D1318]/60">
                          {selectingStart ? 'Select start date' : 'Select end date'}
                        </p>
                        {startDate && (
                          <p className="text-sm text-[#FF4C16] mt-1">
                            Start: {formatDate(startDate)}
                          </p>
                        )}
                      </div>

                      {/* Days of week */}
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                          <div key={day} className="w-8 h-6 sm:w-10 sm:h-8 flex items-center justify-center text-xs font-medium text-[#0D1318]/60">
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-1">
                        {renderCalendar()}
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-4 flex gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setStartDate('');
                            setEndDate('');
                            setSelectingStart(true);
                          }}
                          className="flex-1 px-3 py-2 text-sm font-medium text-[#0D1318] border border-[#B0B8C7] rounded-lg hover:bg-gray-50"
                        >
                          Clear
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsCalendarOpen(false);
                            setSelectingStart(true);
                          }}
                          className="flex-1 px-3 py-2 text-sm font-medium text-white bg-[#FF4C16] rounded-lg hover:bg-[#FF4C16]/90"
                        >
                          Done
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Budget */}
              <motion.div variants={fadeUp}>
                <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">What is your budget?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                  {budgetOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={budget === option}
                        onChange={(e) => setBudget(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-full px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 rounded-lg border text-center text-xs sm:text-sm transition-all ${
                        budget === option
                          ? 'bg-[#0D1318] text-white border-[#0D1318]'
                          : 'bg-white text-[#0D1318] border-[#B0B8C7] hover:border-[#0D1318]'
                      }`}>
                        {option}
                      </div>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* How did you hear about us */}
              <motion.div variants={fadeUp}>
                <h3 className="text-base sm:text-lg font-semibold text-[#0D1318] mb-3 sm:mb-4">How did you hear about us?</h3>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="cursor-pointer w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#B0B8C7] rounded-lg text-xs sm:text-sm font-semibold tracking-wider text-left bg-white focus:outline-none focus:border-[#FF4C16] focus:border-2 flex items-center justify-between transition-all"
                  >
                    <span className={hearAbout ? 'text-[#0D1318]' : 'text-[#0D1318]/60'}>
                      {hearAbout ? hearAboutOptions.find(option => option.value === hearAbout)?.label : 'SELECT AN OPTION'}
                    </span>
                    <svg 
                      className={`w-3 h-3 sm:w-4 sm:h-4 text-[#0D1318] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#B0B8C7] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto"
                    >
                      {hearAboutOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleDropdownSelect(option)}
                          className="cursor-pointer w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-white transition-all border-b border-gray-100 last:border-b-0"
                        >
                          {option.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp}>
                <textarea
                  rows={4}
                  placeholder="MESSAGE*"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#B0B8C7] rounded-lg text-xs sm:text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2 resize-none"
                />
              </motion.div>

             
              {/* Privacy Policy and Submit */}
              <motion.div variants={fadeUp}>
                <p className="text-xs text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  We send periodic news and updates to our subscribers. Check the box above to sign up. You can unsubscribe at any time. For more info please review our{' '}
                  <a href="#" className="text-[#FF4C16] underline">Privacy Policy</a>.
                  <br />
                  By clicking submit, you consent to allow ASCND to store and process the info you submitted in order to provide the content requested.
                </p>
                 <hr className='border-t border-[#4B5361] mb-4 sm:mb-5'/>

                
                <motion.button
                  type="submit"
                  className="cursor-pointer w-full bg-[#0D1318] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold uppercase tracking-wider hover:bg-[#0D1318]/90 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SUBMIT
                  <img src={doubleArrow} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RequestForm;