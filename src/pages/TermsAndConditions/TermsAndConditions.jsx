import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Content from '../../components/TermsAndConditions/Content.jsx'

const TermsAndConditions = () => {

  useEffect(() => {
    
    document.title = 'ASCND - Terms and Conditions';
  }, [])

  return (
    <>
      <Navbar/>
      <Content/>
      <Footer/>
    </>
  )
}

export default TermsAndConditions