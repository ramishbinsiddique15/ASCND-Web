import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContractorHero from '../../components/Contractor/ContractorHero'
import ContractorServices from '../../components/Contractor/ContractorServices'
import ContractorWhy from '../../components/Contractor/ContractorWhy'

const Contractor = () => {
  return (
    <>
    <Navbar/>
    <ContractorHero/>
    <ContractorServices/>
    <ContractorWhy/>
    <Footer/>
    </>
  )
}

export default Contractor