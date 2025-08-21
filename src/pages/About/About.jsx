import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import AboutHero from '../../components/About/AboutHero.jsx'
import ForHomeOwner from '../../components/About/ForHomeOwner'
import ForContractor from '../../components/About/ForContractor'
import Heights from '../../components/About/Heights'
import Future from '../../components/About/Future'
import Welcome from '../../components/About/Welcome'
import Contact from '../../components/Home/Contact'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'ASCND - About Us';
  }, [])

  return (
    <>
    <Navbar/>
    <AboutHero/>
    <ForHomeOwner/>
    <ForContractor/>
    <Heights/>
    <Future/>
    <Welcome/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default About