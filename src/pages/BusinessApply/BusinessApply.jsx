import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BusinessApplyForm from '../../components/BusinessApply/BusinessApplyForm'
import BusinessApplyQuote from '../../components/BusinessApply/BusinessApplyQuote'

const BusinessApply = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

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