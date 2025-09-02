import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Content from '../../components/PrivacyPolicy/Content.jsx'

const PrivacyPolicy = () => {

  useEffect(() => {
    
    document.title = 'ASCND - Privacy Policy';
  }, [])

  return (
    <>
      <Navbar/>
      <Content/>
      <Footer/>
    </>
  )
}

export default PrivacyPolicy