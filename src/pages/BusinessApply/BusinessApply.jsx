import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BusinessApplyForm from '../../components/BusinessApply/BusinessApplyForm'
import BusinessApplyQuote from '../../components/BusinessApply/BusinessApplyQuote'

const BusinessApply = () => {
  return (
    <>
    <Navbar/>
    <BusinessApplyForm/>
    <BusinessApplyQuote/>
    <Footer/>
    </>
  )
}

export default BusinessApply