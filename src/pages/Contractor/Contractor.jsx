import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContractorHero from '../../components/Contractor/ContractorHero'
import ContractorServices from '../../components/Contractor/ContractorServices'
import ContractorWhy from '../../components/Contractor/ContractorWhy'
import ContractorQuote from '../../components/Contractor/ContractorQuote'
import Contact from '../../components/Home/Contact'

const Contractor = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
    <Navbar/>
    <ContractorHero/>
    <ContractorServices/>
    <ContractorWhy/>
    <ContractorQuote/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Contractor