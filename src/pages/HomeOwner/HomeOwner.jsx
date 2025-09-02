import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HomeOwnerHero from '../../components/HomeOwner/HomeOwnerHero'
import Grow from '../../components/HomeOwner/Grow'
import Path from '../../components/HomeOwner/Path'
import Model from '../../components/HomeOwner/Model'
import HomeOwnerQuote from '../../components/HomeOwner/HomeOwnerQuote'
import Contact from '../../components/Home/Contact'

const HomeOwner = () => {

  useEffect(() => {
    
    document.title = 'ASCND - For Homeowners';
  }, [])


  return (
    <>
      <Navbar />
      <HomeOwnerHero />
      <Grow />
      <Path />
      <Model />
      <HomeOwnerQuote />
      <Contact />
      <Footer />
    </>
  )
}

export default HomeOwner