import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BusinessHero from '../../components/Business/BusinessHero'
import Growth from '../../components/Business/Growth.jsx'
import Phase from '../../components/Business/Phase.jsx'
import Summit from '../../components/Business/Summit.jsx'
import TrailBlazer from '../../components/Business/TrailBlazer.jsx'
import BusinessWhy from '../../components/Business/BusinessWhy.jsx'
import BusinessQuote from '../../components/Business/BusinessQuote.jsx'
import Contact from '../../components/Home/Contact.jsx'

const Business = () => {

  useEffect(() => {
    
    document.title = 'ASCND - Business Solutions';
  }, [])

  return (
    <>
      <Navbar />
      <BusinessHero />
      <Growth />
      <Phase />
      <Summit />
      <TrailBlazer />
      <BusinessWhy />
      <BusinessQuote />
      <Contact />
      <Footer />
    </>
  )
}

export default Business