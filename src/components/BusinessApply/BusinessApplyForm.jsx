import React, { useState } from 'react';
import { motion } from 'framer-motion';
import doubleArrow from "../../assets/icons/double-arrow.png";

// Animation variants
const container = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1, 
        transition: { 
            duration: 0.3,
            delayChildren: 0.1, 
            staggerChildren: 0.05 
        } 
    },
};

const fadeUp = {
    hidden: { y: 8, opacity: 0 },
    show: { 
        y: 0, 
        opacity: 1, 
        transition: { 
            duration: 0.3, 
            ease: [0.25, 0.46, 0.45, 0.94] 
        } 
    },
};

const slideLeft = {
    hidden: { x: -16, opacity: 0 },
    show: { 
        x: 0, 
        opacity: 1, 
        transition: { 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94] 
        } 
    },
};

const slideRight = {
    hidden: { x: 16, opacity: 0 },
    show: { 
        x: 0, 
        opacity: 1, 
        transition: { 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94] 
        } 
    },
};

const BusinessApplyForm = () => {
    // Form state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subscribeToUpdates, setSubscribeToUpdates] = useState(false);
    const [country, setCountry] = useState('United States');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [role, setRole] = useState('Solar Rep');
    const [hasExperience, setHasExperience] = useState('');
    const [experienceDescription, setExperienceDescription] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [hasTeam, setHasTeam] = useState('');
    const [teamSize, setTeamSize] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [operatingStates, setOperatingStates] = useState('');
    const [isLicensedInsured, setIsLicensedInsured] = useState('');
    const [partnershipGoals, setPartnershipGoals] = useState('');
    const [hearAbout, setHearAbout] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    
    // UI state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] = useState(false);
    const [isYearsDropdownOpen, setIsYearsDropdownOpen] = useState(false);
    const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
    const [isLicensedDropdownOpen, setIsLicensedDropdownOpen] = useState(false);
    const [isHearAboutDropdownOpen, setIsHearAboutDropdownOpen] = useState(false);

    const roleOptions = [
        'Solar Rep',
        'Dealer Partner', 
        'Contractor/Installer',
        'Other'
    ];

    const experienceOptions = [
        'Yes',
        'No'
    ];

    const yearsOptions = [
        'Less than 1 year',
        '1-2 years',
        '3-5 years',
        '5-10 years',
        '10+ years'
    ];

    const teamOptions = [
        'Yes',
        'No'
    ];

    const licensedOptions = [
        'Yes',
        'No'
    ];

    const hearAboutOptions = [
        'Google Search',
        'Social Media',
        'Referral',
        'Advertisement',
        'Other'
    ];

    const handleDropdownSelect = (dropdown, value) => {
        switch(dropdown) {
            case 'hearAbout':
                setHearAbout(value);
                setIsHearAboutDropdownOpen(false);
                break;
            case 'experience':
                setHasExperience(value);
                setIsExperienceDropdownOpen(false);
                break;
            case 'years':
                setYearsOfExperience(value);
                setIsYearsDropdownOpen(false);
                break;
            case 'team':
                setHasTeam(value);
                setIsTeamDropdownOpen(false);
                break;
            case 'licensed':
                setIsLicensedInsured(value);
                setIsLicensedDropdownOpen(false);
                break;
            default:
                break;
        }
    };

    return (
        <motion.section
            className="w-full bg-gray-50 py-16 md:py-24"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="mx-auto max-w-[100rem] px-4 md:px-8">
                <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" variants={container}>

                    {/* Left Side - Text Content */}
                    <motion.div className="space-y-6" variants={slideLeft}>
                        <motion.div variants={fadeUp}>
                            <span className="inline-block px-4 py-2 bg-white text-[#FF4C16] text-sm font-semibold uppercase tracking-wider border-2 border-[#FF4C16] rounded">
                                APPLY TO ASCND
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0D1318] leading-[0.8]"
                            variants={fadeUp}
                        >
                            <motion.span variants={fadeUp} className="block">Let's work</motion.span>
                            <motion.span variants={fadeUp} className="block">together.</motion.span>
                        </motion.h1>

                        <motion.div className="space-y-4 text-gray-600" variants={fadeUp}>
                            <p className="text-lg">
                                Looking to upgrade your home? ASCND makes it easy to enhance your space with premium improvements—fast timelines, expert installers, and zero pressure.
                            </p>
                            <p className="text-lg">
                                Whether you're ready to go solar, finally get turf in the backyard, or refresh your garage floor, we’ve got you covered.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        className="bg-white rounded-2xl border border-[#4B5361] shadow-lg p-6"
                        variants={slideRight}
                    >
                        <motion.h2
                            className="text-xl font-semibold text-[#0D1318] mb-6"
                            variants={fadeUp}
                        >
                            Contact Information
                        </motion.h2>

                        <motion.form className="space-y-4" variants={container}>
                            {/* Name Fields */}
                            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={fadeUp}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="FIRST NAME*"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="LAST NAME*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                                    />
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div variants={fadeUp}>
                                <input
                                    type="email"
                                    placeholder="EMAIL ADDRESS*"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                                />
                                <div className="mt-3 bg-[#E4E6E9] rounded-lg border border-[#B0B8C7] px-4 py-3">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={subscribeToUpdates}
                                            onChange={(e) => setSubscribeToUpdates(e.target.checked)}
                                            className="w-5 h-5 text-[#0D1318] bg-white border-2 border-gray-400 cursor-pointer accent-[#FF4C16] rounded-md"
                                        />
                                        <span className="text-sm font-medium text-[#0D1318]">Subscribe to news & updates</span>
                                    </label>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.div variants={fadeUp}>
                                <input
                                    type="tel"
                                    placeholder="PHONE NUMBER"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                                />
                            </motion.div>

                            {/* Address Section */}
                            <motion.div variants={fadeUp}>
                                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">Address<span className="text-[#FF4C16]">*</span></h3>
                                
                                {/* Country */}
                                <div className="mb-4">
                                    <select
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] focus:outline-none focus:border-[#FF4C16] focus:border-2 bg-white"
                                    >
                                        <option value="United States">UNITED STATES</option>
                                        <option value="Canada">CANADA</option>
                                        <option value="Mexico">MEXICO</option>
                                    </select>
                                </div>

                                {/* Address Line 1 */}
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="ADDRESS LINE 1*"
                                        value={addressLine1}
                                        onChange={(e) => setAddressLine1(e.target.value)}
                                        className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                                    />
                                </div>

                                {/* Address Line 2 */}
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="ADDRESS LINE 2"
                                        value={addressLine2}
                                        onChange={(e) => setAddressLine2(e.target.value)}
                                        className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                                    />
                                </div>

                                {/* City, State, Zip */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <input
                                        type="text"
                                        placeholder="CITY*"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="STATE*"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="ZIP CODE*"
                                        value={zipCode}
                                        onChange={(e) => setZipCode(e.target.value)}
                                        className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                                    />
                                </div>
                            </motion.div>

                            {/* Role Selection */}
                            <motion.div variants={fadeUp}>
                                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">What role are you interested in?<span className="text-[#FF4C16]">*</span></h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {roleOptions.map((option) => (
                                        <label key={option} className="cursor-pointer">
                                            <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${role === option
                                                ? 'bg-[#FF4C16] border-[#FF4C16]'
                                                : 'bg-white border-[#B0B8C7] hover:border-[#FF4C16]'
                                                }`}>
                                                <div className="relative">
                                                    <input
                                                        type="radio"
                                                        name="role"
                                                        value={option}
                                                        checked={role === option}
                                                        onChange={(e) => setRole(e.target.value)}
                                                        className="sr-only"
                                                    />
                                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${role === option
                                                        ? 'bg-white border-white'
                                                        : 'bg-white border-[#FF4C16]'
                                                        }`}>
                                                        {role === option && (
                                                            <div className="w-2 h-2 bg-[#FF4C16] rounded-full"></div>
                                                        )}
                                                    </div>
                                                </div>
                                                <span className={`text-sm font-medium transition-all ${role === option
                                                    ? 'text-white'
                                                    : 'text-[#0D1318]'
                                                    }`}>
                                                    {option}
                                                </span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Solar Experience */}
                            <motion.div variants={fadeUp}>
                                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">Do you have experience in the solar industry?<span className="text-[#FF4C16]">*</span></h3>
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setIsExperienceDropdownOpen(!isExperienceDropdownOpen)}
                                        className="cursor-pointer w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-left bg-white focus:outline-none focus:border-[#FF4C16] focus:border-2 flex items-center justify-between transition-all"
                                    >
                                        <span className={hasExperience ? 'text-[#0D1318]' : 'text-[#0D1318]/60'}>
                                            {hasExperience || 'SELECT AN OPTION'}
                                        </span>
                                        <svg
                                            className={`w-4 h-4 text-[#0D1318] transition-transform ${isExperienceDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {isExperienceDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#B0B8C7] rounded-lg shadow-lg z-10"
                                        >
                                            {experienceOptions.map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => handleDropdownSelect('experience', option)}
                                                    className="cursor-pointer w-full px-4 py-3 text-left text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-white transition-all border-b border-gray-100 last:border-b-0"
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Experience Description */}
                            {hasExperience === 'Yes' && (
                                <motion.div variants={fadeUp}>
                                    <h3 className="text-lg font-semibold text-[#0D1318] mb-4">If yes, describe your experience</h3>
                                    <textarea
                                        rows={4}
                                        value={experienceDescription}
                                        onChange={(e) => setExperienceDescription(e.target.value)}
                                        className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] focus:outline-none focus:border-[#FF4C16] focus:border-2 resize-none"
                                    />
                                </motion.div>
                            )}

                            {/* Years of Experience */}
                            {hasExperience === 'Yes' && (
                                <motion.div variants={fadeUp}>
                                    <h3 className="text-lg font-semibold text-[#0D1318] mb-4">How many years?</h3>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setIsYearsDropdownOpen(!isYearsDropdownOpen)}
                                            className="cursor-pointer w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-left bg-white focus:outline-none focus:border-[#FF4C16] focus:border-2 flex items-center justify-between transition-all"
                                        >
                                            <span className={yearsOfExperience ? 'text-[#0D1318]' : 'text-[#0D1318]/60'}>
                                                {yearsOfExperience || 'SELECT AN OPTION'}
                                            </span>
                                            <svg
                                                className={`w-4 h-4 text-[#0D1318] transition-transform ${isYearsDropdownOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {isYearsDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#B0B8C7] rounded-lg shadow-lg z-10"
                                            >
                                                {yearsOptions.map((option) => (
                                                    <button
                                                        key={option}
                                                        type="button"
                                                        onClick={() => handleDropdownSelect('years', option)}
                                                        className="cursor-pointer w-full px-4 py-3 text-left text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-white transition-all border-b border-gray-100 last:border-b-0"
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {/* Team */}
                            <motion.div variants={fadeUp}>
                                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">Do you currently have a team?<span className="text-[#FF4C16]">*</span></h3>
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
                                        className="cursor-pointer w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-left bg-white focus:outline-none focus:border-[#FF4C16] focus:border-2 flex items-center justify-between transition-all"
                                    >
                                        <span className={hasTeam ? 'text-[#0D1318]' : 'text-[#0D1318]/60'}>
                                            {hasTeam || 'SELECT AN OPTION'}
                                        </span>
                                        <svg
                                            className={`w-4 h-4 text-[#0D1318] transition-transform ${isTeamDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {isTeamDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#B0B8C7] rounded-lg shadow-lg z-10"
                                        >
                                            {teamOptions.map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => handleDropdownSelect('team', option)}
                                                    className="cursor-pointer w-full px-4 py-3 text-left text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-white transition-all border-b border-gray-100 last:border-b-0"
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Team Size */}
                            {hasTeam === 'Yes' && (
                                <motion.div variants={fadeUp}>
                                    <h3 className="text-lg font-semibold text-[#0D1318] mb-4">If yes, what is the size of your team?</h3>
                                    <input
                                        type="text"
                                        value={teamSize}
                                        onChange={(e) => setTeamSize(e.target.value)}
                                        className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] focus:outline-none focus:border-[#FF4C16] focus:border-2"
                                    />
                                </motion.div>
                            )}

                            {/* Company Information */}
                            <motion.div variants={fadeUp}>
                                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">Company name</h3>
                                <input
                                    type="text"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] focus:outline-none focus:border-[#FF4C16] focus:border-2"
                                />
                            </motion.div>

                            <motion.div variants={fadeUp}>
                                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">Company website</h3>
                                <input
                                    type="url"
                                    placeholder="HTTP://"
                                    value={companyWebsite}
                                    onChange={(e) => setCompanyWebsite(e.target.value)}
                                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] placeholder-[#0D1318]/60 focus:outline-none focus:border-[#FF4C16] focus:border-2"
                                />
                            </motion.div>

                            {/* Operating States */}
                            <motion.div variants={fadeUp}>
                                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">What states do you operate in?<span className="text-[#FF4C16]">*</span></h3>
                                <textarea
                                    rows={4}
                                    value={operatingStates}
                                    onChange={(e) => setOperatingStates(e.target.value)}
                                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] focus:outline-none focus:border-[#FF4C16] focus:border-2 resize-none"
                                />
                            </motion.div>

                            {/* Licensed & Insured */}
                            <motion.div variants={fadeUp}>
                                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">Are you licensed & insured?<span className="text-[#FF4C16]">*</span></h3>
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setIsLicensedDropdownOpen(!isLicensedDropdownOpen)}
                                        className="cursor-pointer w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-left bg-white focus:outline-none focus:border-[#FF4C16] focus:border-2 flex items-center justify-between transition-all"
                                    >
                                        <span className={isLicensedInsured ? 'text-[#0D1318]' : 'text-[#0D1318]/60'}>
                                            {isLicensedInsured || 'SELECT AN OPTION'}
                                        </span>
                                        <svg
                                            className={`w-4 h-4 text-[#0D1318] transition-transform ${isLicensedDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {isLicensedDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#B0B8C7] rounded-lg shadow-lg z-10"
                                        >
                                            {licensedOptions.map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => handleDropdownSelect('licensed', option)}
                                                    className="cursor-pointer w-full px-4 py-3 text-left text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-white transition-all border-b border-gray-100 last:border-b-0"
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Partnership Goals */}
                            <motion.div variants={fadeUp}>
                                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">What are your goals in partnering with us?<span className="text-[#FF4C16]">*</span></h3>
                                <textarea
                                    rows={4}
                                    value={partnershipGoals}
                                    onChange={(e) => setPartnershipGoals(e.target.value)}
                                    className="w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-[#0D1318] focus:outline-none focus:border-[#FF4C16] focus:border-2 resize-none"
                                />
                            </motion.div>

                            {/* How did you hear about ASCND */}
                            <motion.div variants={fadeUp}>
                                <h3 className="text-lg font-semibold text-[#0D1318] mb-4">How did you hear about ASCND?<span className="text-[#FF4C16]">*</span></h3>
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setIsHearAboutDropdownOpen(!isHearAboutDropdownOpen)}
                                        className="cursor-pointer w-full px-4 py-3 border border-[#B0B8C7] rounded-lg text-sm font-semibold tracking-wider text-left bg-white focus:outline-none focus:border-[#FF4C16] focus:border-2 flex items-center justify-between transition-all"
                                    >
                                        <span className={hearAbout ? 'text-[#0D1318]' : 'text-[#0D1318]/60'}>
                                            {hearAbout || 'SELECT AN OPTION'}
                                        </span>
                                        <svg
                                            className={`w-4 h-4 text-[#0D1318] transition-transform ${isHearAboutDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {isHearAboutDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#B0B8C7] rounded-lg shadow-lg z-10"
                                        >
                                            {hearAboutOptions.map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => handleDropdownSelect('hearAbout', option)}
                                                    className="cursor-pointer w-full px-4 py-3 text-left text-sm font-semibold tracking-wider text-[#0D1318] hover:bg-[#FF4C16] hover:text-white transition-all border-b border-gray-100 last:border-b-0"
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Terms and Conditions */}
                            <motion.div variants={fadeUp}>
                                <p className="text-sm text-[#0D1318] mb-4 leading-relaxed">
                                    I certify that the information provided is accurate and complete. I understand that this application does not guarantee acceptance into the ASCND program. Additionally, I consent to receive text messages from ASCND Pro regarding updates, promotions, and other information. I understand that message and data rates may apply, and I can opt out at any time by replying STOP.
                                </p>
                                
                                <label className="cursor-pointer mb-6 block">
                                    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${agreeToTerms
                                        ? 'bg-[#FF4C16] border-[#FF4C16]'
                                        : 'bg-white border-[#B0B8C7] hover:border-[#FF4C16]'
                                        }`}>
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={agreeToTerms}
                                                onChange={(e) => setAgreeToTerms(e.target.checked)}
                                                className="sr-only"
                                            />
                                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${agreeToTerms
                                                ? 'bg-white border-white'
                                                : 'bg-white border-[#FF4C16]'
                                                }`}>
                                                {agreeToTerms && (
                                                    <div className="w-2 h-2 bg-[#FF4C16] rounded-full"></div>
                                                )}
                                            </div>
                                        </div>
                                        <span className={`text-sm font-medium transition-all ${agreeToTerms
                                            ? 'text-white'
                                            : 'text-[#0D1318]'
                                            }`}>
                                            I Agree
                                        </span>
                                    </div>
                                </label>

                                <motion.button
                                    type="submit"
                                    className="cursor-pointer w-full bg-[#0D1318] text-white py-4 px-6 rounded-lg uppercase tracking-wider hover:bg-[#0D1318]/90 transition-all flex items-center justify-center gap-2 text-xs"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    SUBMIT MY APPLICATION
                                    <img src={doubleArrow} alt="" />
                                </motion.button>
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default BusinessApplyForm;