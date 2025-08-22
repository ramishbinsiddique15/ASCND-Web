import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const container = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: { delayChildren: 0.18, staggerChildren: 0.15 }
    }
};

const fadeUp = {
    hidden: { y: 22, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
};

const dividerVar = {
    hidden: { scaleX: 0, opacity: 0.5 },
    show: { scaleX: 1, opacity: 1, transition: { duration: 0.85, ease: 'easeOut', delay: 0.3 } }
};

const Content = () => {
    return (
        <motion.section
            className="w-full" initial="hidden" animate="show" >
            <div className="mx-auto max-w-[100rem] px-4 sm:px-6  ">
                {/* Content grid */}
                <motion.div
                    className="grid grid-cols-1 items-stretch gap-6 pb-6 pt-5 sm:gap-8 sm:pb-8 sm:pt-10 md:grid-cols-12 md:gap-14 md:pb-10 md:pt-14 md:min-h-[380px] lg:min-h-[460px] lg:gap-24 lg:pt-16"
                    variants={container}
                >

                    {/* Right: Copy */}
                    <motion.div className="md:col-span-10 flex h-full flex-col justify-end mt-6 md:mt-0 md:pl-6 lg:pl-10" variants={container}>
                        <h2 className="mt-3 font-extrabold leading-[0.8] text-[#0b0c0e] sm:mt-4 md:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                            <motion.span variants={fadeUp} className="block whitespace-nowrap">OTOPILOT LLC PRIVACY POLICY</motion.span>
                        </h2>
                        <br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            Effective as of [Effective Date]
                        </motion.p>
                        <motion.p variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            This Privacy Policy describes how OtoPilot LLC and our subsidiaries and affiliates (collectively “OtoPilot”, “we”, “us” or “our”) handle personal information that we collect through our website and services (collectively, the “Service”), as well as through social media, our marketing activities, our live events, and other activities described in this Privacy Policy.
                            <br></br><br></br>
                            In the course of providing services to our business customers, we process certain personal information on their behalf, subject to the restrictions of their contracts with us. Unless otherwise stated herein, this Privacy Policy does not apply to that personal information.
                        </motion.p>

                        <br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">Contents</motion.p>
                        <motion.div variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            <ul className="list-disc">
                                <li className="ml-14">PERSONAL INFORMATION WE COLLECT</li>
                                <li className="ml-14">HOW WE USE YOUR PERSONAL INFORMATION</li>
                                <li className="ml-14">HOW WE SHARE YOUR PERSONAL INFORMATION</li>
                                <li className="ml-14">YOUR CHOICES</li>
                                <li className="ml-14">OTHER SITES AND SERVICES</li>
                                <li className="ml-14">SECURITY</li>
                                <li className="ml-14">INTERNATIONAL DATA TRANSFER</li>
                                <li className="ml-14">CHILDREN</li>
                                <li className="ml-14">CHANGES TO THIS PRIVACY POLICY</li>
                                <li className="ml-14">HOW TO CONTACT US</li>
                                <li className="ml-14">INFORMATION FOR CALIFORNIA RESIDENTS</li>
                                <li className="ml-14">NOTICE TO EEA AND UK USERS</li>
                            </ul>
                        </motion.div>

                        <br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            1. PERSONAL INFORMATION WE COLLECT
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            Information you provide to us. Personal information you may provide to us through the Service or otherwise includes:<br></br>
                            <ul className="list-disc">
                                <li className="ml-14">Contact data, such as your email address and phone number.</li>
                                <li className="ml-14">Account data, such as your username, name, email address, and password that you set to establish an online account with us, third-party account identifiers, information about your participation in our events, promotions, and any other information that you add to your account.</li>
                                <li className="ml-14">Communications that we exchange, including when you contact us with questions or feedback, through our customer support service, social media, or otherwise, or that you exchange on or through the Service.</li>
                                <li className="ml-14">Lead engagement widget data when you submit your information to our lead engagement widget on an OtoPilot customer’s website, including your address and the information you provide about your monthly utility bill.</li>
                                <li className="ml-14">Research data that you provide when you agree to participate in our satisfaction surveys.</li>
                                <li className="ml-14">User-generated content, such as posts and comments that you may post on our social media pages.</li>
                                <li className="ml-14">Marketing data, such as your preferences for receiving communications about our marketing communications.</li>
                                <li className="ml-14">Other information that we may collect which is not specifically listed here, which we use as described in this Privacy Policy or as otherwise described at the time of collection.</li>
                            </ul>
                            <br></br>                            

                            Third party sources. We may combine personal information we receive from you with personal information we obtain from other sources, such as our marketing partners with whom we have entered into joint marketing relationships.<br></br>
                            <br></br>
                            Automatic data collection. We, our service providers, and our business partners may automatically log information about you, your computer or mobile device, your activity over time on our sites and other online services, and your interactions with our marketing communications such as:<br></br>

                            <ul className="list-disc">
                                <li className="ml-14">Device data, such as your computer’s or mobile device’s operating system type and version, manufacturer and model, browser type, screen resolution, RAM and disk size, CPU usage, device type (e.g., phone, tablet), IP address, unique identifiers (including identifiers used for advertising purposes), language settings, mobile device carrier, radio/network information (e.g., WiFi, LTE, 3G), and general location information such as city, state, or geographic area.</li>
                                <li className="ml-14">Online activity data, such as pages or screens you viewed, how long you spent on a page or screen, the website you visited before browsing to the Service, navigation paths between pages or screens, information about your activity on a page or screen, access times, and duration of access, and whether you have opened our marketing emails or clicked links within them.</li>
                            </ul>
                            
                            <br></br>
                            Cookies. Some of our automatic data collection is facilitated by cookies and similar technologies. For more information, see our Cookie Notice.
                        </motion.div>

                        <br></br><br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            2. HOW WE USE YOUR PERSONAL INFORMATION
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            We use your personal information for the following purposes or as otherwise described at the time we collect it:
                            <br></br><br></br>
                            Service delivery. We use your personal information to:
                            <ul className="list-disc">
                                <li className="ml-14">Provide, operate and improve the Service and our business;</li>
                                <li className="ml-14">Communicate with you about the Service, including by sending announcements, updates, security alerts, and support and administrative messages;</li>
                                <li className="ml-14">Understand your needs and interests, and personalize your experience with the Service and our communications; and</li>
                                <li className="ml-14">Provide support for the Service, and respond to your requests, questions, and feedback.</li>
                            </ul>
                            <br></br><br></br>
                            Research and development. We may use your personal information for research and development purposes, including to analyze and improve the Service and our business. As part of these activities, we may create aggregated, de-identified, or other anonymous data from personal information we collect. We make personal information into anonymous data by removing information that makes the data personally identifiable to you. We may use this anonymous data and share it with third parties for our lawful business purposes, including to analyze and improve the Service and promote our business.
                            <br></br><br></br>
                            Marketing and advertising. We and our third-party advertising partners may collect and use your personal information for marketing and advertising purposes:
                            <br></br><br></br>
                            <ul className="list-disc">
                                <li className="ml-14">Direct marketing. We may send you direct marketing communications regarding our products and services as permitted by law. You may opt-out of our marketing communications as described in the opt-out of marketing section below.</li>
                                <li className="ml-14">Interest-based advertising. We may contract with third-party advertising and social media companies to display ads on our Service and other online services. These companies may use cookies and similar technologies to collect information about you (including the data described in the automatic data collection section above) over time across our Service and other online services, and use that information to serve ads that they think will interest you. You can learn more about your choices for limiting interest-based advertising in the Your choices section of our Cookie Notice.</li>
                            </ul>
                            <br></br><br></br>
                            Compliance and protection. We may use your personal information to:
                            <br></br><br></br>
                            <ul className="list-disc">
                                <li className="ml-14">Comply with applicable laws, lawful requests, and legal processes, such as to respond to subpoenas or requests from government authorities;</li>
                                <li className="ml-14">Protect our, your or others’ rights, privacy, safety, or property (including by making and defending legal claims);</li>
                                <li className="ml-14">Audit our internal processes for compliance with legal and contractual requirements and internal policies;</li>
                                <li className="ml-14">Enforce the terms and conditions that govern the Service; and</li>
                                <li className="ml-14">Prevent, identify, investigate, and deter fraudulent, harmful, unauthorized, unethical, or illegal activity, including cyberattacks and identity theft.</li>
                            </ul>
                        </motion.div>

                        <br></br><br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            3. HOW WE SHARE YOUR PERSONAL INFORMATION
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            We may share your personal information with the following parties and as otherwise described in this Privacy Policy or at the time of collection:
                            <br></br><br></br>
                            <ul className="list-disc">
                                <li className="ml-14">Affiliates. Subsidiaries and affiliates, for purposes consistent with this Privacy Policy.</li>
                                <li className="ml-14">Lead engagement widget customers. If you submit your information to our lead engagement widget, you are instructing OtoPilot to share your personal information with the customer whose website features the lead engagement widget. Once your personal information has been shared with the OtoPilot customer, it will also be subject to the customer’s privacy policy and the customer may use your personal information for its own purposes. We encourage you to closely read the customer’s privacy policy before submitting your information. Please note that we do not control and we are not responsible for our customer’s processing of your personal information.</li>
                                <li className="ml-14">Service providers. Companies and individuals that provide services on our behalf or help us operate the Service or our business (such as information technology, hosting, customer relationship management and support, communications delivery, marketing, advertising, and website analytics).</li>
                                <li className="ml-14">Advertising partners. Third-party advertising companies that collect information about your activity on the Service and other online services to help us advertise our Service, and/or use customer lists that we share with them to deliver ads on their platforms on our behalf to those customers and similar users.</li>
                                <li className="ml-14">Professional advisors. Professional advisors, such as lawyers, auditors, bankers, and insurers, where necessary in the course of the professional services that they render to us.</li>
                                <li className="ml-14">Authorities and others. Law enforcement, government authorities, and private parties, as we believe in good faith to be necessary or appropriate for the compliance and protection purposes described above.</li>
                                <li className="ml-14">Business transferees. Acquiring and other relevant parties to business transactions (or potential transactions) involving a corporate divestiture, merger, consolidation, acquisition, reorganization, sale, or other disposition of all or any portion of the business or assets of, or equity interests in, OtoPilot or our affiliates (including, in connection with a bankruptcy or similar proceedings).</li>
                            </ul>
                        </motion.div>

                        <br></br><br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            4. YOUR CHOICES
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            You have the following choices with respect to your personal information:
                            <br></br><br></br>
                            <ul className="list-disc">
                                <li className="ml-14">Access or update your information. If you have registered for an online account with us, you may review and update certain account information from your account.</li>
                                <li className="ml-14">Opt-out of marketing communications. You may opt-out of marketing-related emails by following the opt-out or unsubscribe instructions at the bottom of the email, or by contacting us. You may continue to receive service-related and other non-marketing emails.</li>
                                <li className="ml-14">Cookies. For information about cookies employed by the Service and how to control them, see our Cookie Notice.</li>
                                <li className="ml-14">Do Not Track. Some Internet browsers may be configured to send “Do Not Track” signals to the online services that you visit. We currently do not respond to “Do Not Track” or similar signals. To find out more about “Do Not Track,” please visit <a className="text-blue-600 dark:text-sky-400" target='_blank' href='http://www.allaboutdnt.com'>http://www.allaboutdnt.com</a>.</li>
                                <li className="ml-14">Declining to provide information. We need to collect personal information to provide certain services. If you do not provide the information we identify as mandatory, we may not be able to provide those services.</li>
                                <li className="ml-14">Access, amend, deletion, and opt-out. You may contact us to request access to, update or correct inaccuracies in, delete, or opt-out of certain uses of your personal information. We will respond as required by law.</li>
                            </ul>
                        </motion.div>

                        <br></br><br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            5. OTHER SITES AND SERVICES
                        </motion.p>
                        <motion.p variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            The Service may contain links or integrations that allow you to access websites, mobile applications, and other online services operated by third parties. For example, our Service may allow solar professionals or their clients to access online services that offer financing for solar projects. These links are not an endorsement of, or representation that we are affiliated with, any third party. In addition, our content may be included on web pages or in mobile applications or other online services that are not associated with us. OtoPilot does not have access to the personal information that is provided to these third parties and providing personal information to these third parties is at your own risk. We do not control websites, mobile applications, or online services operated by third parties, and we are not responsible for their actions.
                        </motion.p>

                        <br></br><br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            6. SECURITY
                        </motion.p>
                        <motion.p variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            We employ a number of technical, organizational, and physical safeguards designed to protect the personal information we collect. However, security risk is inherent in all internet and information technologies and we cannot guarantee the security of your personal information.
                        </motion.p>

                        <br></br><br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            7. INTERNATIONAL DATA TRANSFER
                        </motion.p>
                        <motion.p variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            We are headquartered in the United States and may use service providers that operate in other countries. Your personal information may be transferred to the United States or other locations where privacy laws may not be as protective as those in your state, province, or country.
                        </motion.p>

                        <br></br><br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            8. CHILDREN
                        </motion.p>
                        <motion.p variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            We do not intentionally collect the personal information of children under 16 years of age. If we learn that we have collected personal information through the Service from a child under 16 without the consent of the child’s parent or guardian as required by law, we will delete it.
                        </motion.p>

                        <br></br><br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            9. CHANGES TO THIS PRIVACY POLICY
                        </motion.p>
                        <motion.p variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            We reserve the right to modify this Privacy Policy at any time. If we make changes to this Privacy Policy, we will notify you by updating the date of this Privacy Policy and posting it on the Service. If required by law we will also provide notification of changes in another way that we believe is reasonably likely to reach you, such as via email or another manner through the Service. Any modifications to this Privacy Policy will be effective upon our posting the modified version (or as otherwise indicated at the time of posting). In all cases, your use of the Service after the effective date of any modified Privacy Policy indicates your acceptance of the modified Privacy Policy.
                        </motion.p>

                        <br></br><br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            10. HOW TO CONTACT US
                        </motion.p>
                        <motion.p variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            Email: <a href="mailto:privacy@otopilot.com" className="text-blue-600 dark:text-sky-400">privacy@otopilot.com</a><br></br>
                            Mail: OtoPilot LLC<br></br>
                            64 E Broadway Rd #200<br></br>
                            Tempe, AZ 85281<br></br>
                            USA
                        </motion.p>

                        <br></br><br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            11. INFORMATION FOR CALIFORNIA RESIDENTS
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            Scope. This section describes how we collect, use, and share the Personal Information of California residents as a “business” under the California Consumer Privacy Act (“CCPA”) and their rights with respect to their Personal Information. For purposes of this section, “Personal Information” has the meaning given in the CCPA but does not include information exempted from the scope of the CCPA.
                            <br></br><br></br>
                            Your California privacy rights. As a California resident, you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.
                            <br></br><br></br>
                            Information. You can request the following information about how we have collected and used your Personal Information during the past 12 months:
                            <br></br><br></br>
                            <ul className="list-disc">
                                <li className="ml-14">The categories of Personal Information we have collected.</li>
                                <li className="ml-14">The categories of sources from which we collected the Personal Information.</li>
                                <li className="ml-14">The categories of third parties with whom we share the Personal Information.</li>
                                <li className="ml-14">The categories of Personal Information that we sold or disclosed for a business purpose.</li>
                                <li className="ml-14">The categories of third parties to whom the Personal Information was sold or disclosed for a business purpose.</li>
                                <li className="ml-14">The business or commercial purpose for collecting and/or selling Personal Information.</li>
                            </ul>
                            <br></br><br></br>
                            Access. You can request a copy of the Personal Information that we have collected about you during the past 12 months.
                            <br></br><br></br>
                            Deletion. You can ask us to delete the Personal Information that we have collected from you.
                            <br></br><br></br>
                            Opt-out of sales. If we sell your Personal Information, you can opt-out of those sales.
                            <br></br><br></br>
                            Non-discrimination. You are entitled to exercise the rights described above free from discrimination as prohibited by the CCPA.
                            <br></br><br></br>
                            How to exercise your rights. You may submit requests to exercise your California privacy rights described above as follows:
                            <br></br><br></br>
                            Right to information, access, and deletion. You may submit requests to exercise your right to information, access, or deletion by sending us an email at <a href="mailto:privacy@otopilot.com" className="text-blue-600 dark:text-sky-400">privacy@otopilot.com</a>.
                            <br></br><br></br>
                            Right to opt-out of the “sale” of your Personal Information. Like many companies, we use services that help deliver interest-based ads to users as described in the Interest-based advertising section above. While we do not “sell” Personal Information in the conventional sense, our use of these services may constitute a statutory “sale” of Personal Information to the providers of those services for purposes of the CCPA. See the Do Not Sell My Personal Information section of our Cookie Notice for information on how to opt-out.
                            <br></br><br></br>
                            We cannot process your request if you do not provide us with sufficient detail to allow us to understand and respond to it.
                            <br></br><br></br>
                            We will need to verify your identity to process your information, access, and deletion requests and reserve the right to confirm your California residency. To verify your identity, we may require you to provide government identification, give a declaration as to your identity under penalty of perjury, and/or provide additional information. Your authorized agent may make a request on your behalf upon our verification of the agent’s identity and our receipt of a copy of valid power of attorney given to your authorized agent pursuant to California Probate Code Sections 4000-4465. If you have not provided your agent with such a power of attorney, you must provide your agent signed permission to exercise your CCPA rights on your behalf, provide the information we request to verify your identity, and provide us with written confirmation that you have given the authorized agent permission to submit the request. Authorized agents are required by California law to implement and maintain reasonable security procedures and practices to protect their clients’ information.
                            <br></br><br></br>
                            Personal information that we collect, use, and disclose. The chart below describes our practices regarding the collection and disclosure of Personal Information currently and during the 12 months preceding the effective date of this Privacy Policy by reference to the categories of Personal Information specified in the CCPA. Information you voluntarily provide to us, such as in free-form web forms, may contain other categories of personal information not described below.
                            <br></br><br></br>
                            Statutory category of Personal Information (Cal. Civ. Code § 1798.140)
                            <br></br><br></br>
                            <ul className="list-disc">
                                <li className="ml-14">Personal Information we collect in this category (See the Personal information we collect section above for description)</li>
                                <li className="ml-14">Identifiers: Contact data.</li>
                                <li className="ml-14">Commercial Information: Account data, Research data, Communications, Marketing data, Online activity data</li>
                                <li className="ml-14">Financial Information: Purchase history, invoices, etc.</li>
                                <li className="ml-14">Online Identifiers: Account data, Device data</li>
                                <li className="ml-14">Internet or Network Information: Marketing data, Device data, Online activity data</li>
                                <li className="ml-14">Geolocation Data: Device data</li>
                                <li className="ml-14">Inferences: May be derived from your Account data, Marketing data, Device data, Online activity data</li>
                            </ul>
                            <br></br><br></br>
                            Sources. We describe the sources from which we collect these categories of Personal Information in the section above entitled Personal information we collect.
                            <br></br><br></br>
                            Purposes. We describe the business and commercial purposes for which we collect these categories of Personal Information in the section above entitled “How we use your personal information“.
                            <br></br><br></br>
                            Disclosure. We describe the categories of third parties to which we disclose these categories of Personal Information above in the section above entitled “How we share your personal information“.
                            <br></br><br></br>
                        </motion.div>

                        <br></br><br></br>
                        <motion.p variants={fadeUp} className="text-sm font-semibold leading-relaxed text-[#0D1318] sm:text-base md:text-lg lg:text-xl">
                            12. NOTICE TO EEA AND UK USERS
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-3 text-xs leading-6 text-[#0D1318]/70 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                            The information provided in this “Notice to EEA and UK users” section applies only to individuals in the European Economic Area and in the UK and explains our approach to any personal information that we collect from you or which we have obtained about you from a third party and the legal basis for processing your personal information. It also sets out your rights in respect of our processing of your personal information.
                            <br></br><br></br>
                            Personal Information. References to “personal information” in this Privacy Policy are equivalent to “personal data” governed by the General Data Protection Regulation (GDPR).
                            <br></br><br></br>
                            Controller. OtoPilot LLC is the controller of your personal information covered by this Privacy Policy.
                            <br></br><br></br>
                            Legal basis for processing. The legal bases of our processing of your personal information as described in this Privacy Policy will depend on the type of personal information and the specific context in which we process it. However, the legal bases we typically rely on are set out in the table below. We use your Personal Information only as permitted by law.
                            <br></br><br></br>
                            Processing purpose: Details regarding each processing purpose listed below are provided in the section above titled “How we use your personal information”.
                            <br></br><br></br>
                            Legal basis:
                            <br></br>
                            <ul className="list-disc">
                                <li className="ml-14">To operate our Service: Processing is necessary to perform the contract governing our provision of our Service or to take steps that you request prior to signing up for the Service. If we have not entered into a contract with you, we process your personal information based on our legitimate interest in providing the Service you access and request.</li>
                                <li className="ml-14">For research and development.</li>
                                <li className="ml-14">For marketing purposes.</li>
                                <li className="ml-14">For compliance, fraud prevention, and safety.</li>
                                <li className="ml-14">To comply with the law: Processing is necessary to comply with our legal obligations.</li>
                                <li className="ml-14">With your consent: Processing is based on your consent. Where we rely on your consent, you have the right to withdraw it any time in the manner indicated when you consent or in the Service.</li>
                            </ul>
                            <br></br><br></br>
                            Use for new purposes. We may use your personal information for reasons not described in this Privacy Policy where permitted by law and the reason is compatible with the purpose for which we collected it. If we need to use your personal information for an unrelated purpose, we will notify you and explain the applicable legal basis.
                            <br></br><br></br>
                            Retention. We retain personal information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements, to establish or defend legal claims, or for fraud prevention purposes.
                            <br></br><br></br>
                            To determine the appropriate retention period for personal information, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure of your personal information, the purposes for which we process your personal information and whether we can achieve those purposes through other means, and the applicable legal requirements.
                            <br></br><br></br>
                            When we no longer require the personal information we have collected about you, we will either delete or anonymize it or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible. If we anonymize your personal information (so that it can no longer be associated with you), we may use this information indefinitely without further notice to you.
                            <br></br><br></br>
                            Your Rights. If you are located in the EEA, you have the following rights in relation to the personal information we hold about you:
                            <br></br><br></br>
                            <ul className="list-disc">
                                <li className="ml-14">Right of access: You can ask us if we are processing your personal information and to provide you with a copy of it (along with certain details). If you require additional copies, we may need to charge a reasonable fee</li>
                                <li className="ml-14">Right to rectification: If the personal information we hold about you is inaccurate or incomplete, you are entitled to request to have it rectified.</li>
                                <li className="ml-14">Right to erasure: You can ask us to delete or remove your personal information in some circumstances such as where we no longer need it or if you withdraw your consent to our processing of your personal information (where applicable).</li>
                                <li className="ml-14">Right to restrict processing: You can ask us to ‘block’ or suppress the processing of your personal information in certain circumstances, such as where you contest the accuracy of that personal information.</li>
                                <li className="ml-14">Right to data portability: You have the right, in certain circumstances, to obtain personal information you have provided us with (in a structured, commonly used, and machine-readable format) and to reuse it elsewhere or to ask us to transfer this to a third party of your choice.</li>
                                <li className="ml-14">Right to object: You can ask us to stop processing your personal information, and we will do so, if we are:</li>
                                {/* <li className="ml-14"> */}
                                    <ul className="list-disc ml-14">
                                        <li className="ml-14">Relying on our own or someone else’s legitimate interests to process your personal information, unless we can demonstrate compelling legal grounds for the processing; or</li>
                                        <li className="ml-14">Processing your personal information for direct marketing purposes.</li>
                                    </ul>
                                {/* </li> */}
                                <li className="ml-14">Right to withdraw consent: If we rely on your consent (or explicit consent) as our legal basis for processing your personal information, you have the right to withdraw that consent at any time.</li>
                                <li className="ml-14">Right to lodge a complaint with the supervisory authority: If you have a concern about any aspect of our privacy practices, including the way we have handled your personal information, you can report it to the relevant Supervisory Authority. You can find your data protection regulator <a href='https://edpb.europa.eu/about-edpb/board/members_en' target='_blank' className="text-blue-600 dark:text-sky-400">here</a>.</li>
                            </ul>
                            <br></br><br></br>
                            You may submit these requests by email (<a className="text-blue-600 dark:text-sky-400" href="mailto:privacy@otopilot.com">privacy@otopilot.com</a>) or to our postal address provided above. We may request specific information from you to help us confirm your identity and process your request. Applicable law may require or permit us to decline your request. If we decline your request, we will tell you why, subject to legal restrictions.
                            <br></br><br></br>
                            Cross-Border Data Transfer. If we transfer your personal information out of the EEA or the UK to a country not deemed to provide an adequate level of personal information protection for purposes of applicable data protection laws such that additional safeguards are required, the transfer will be performed:
                            <ul className="list-disc">
                                <li className="ml-14">Pursuant to the recipient’s compliance with standard contractual clauses;</li>
                                <li className="ml-14">Pursuant to the consent of the individual to whom the personal information pertains; or</li>
                                <li className="ml-14">As otherwise permitted by applicable laws.</li>
                            </ul>
                            <br></br>
                            You may contact us if you want further information on the specific mechanism used by us when transferring your personal information out of the EEA or the UK.
                        </motion.div>

                    </motion.div>
                </motion.div>

                {/* Bottom divider line */}
                <motion.div className="border-t border-[#0D1318] origin-left" variants={dividerVar} />
            </div>
        </motion.section>
    );
};

export default Content;