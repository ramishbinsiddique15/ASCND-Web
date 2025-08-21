import React, { useEffect } from 'react'
import Banner from '../../components/Hero/Banner'

const Hero = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'ASCND - Welcome';
  }, [])

  return (
    <>
    <Banner/>
    </>
  )
}

export default Hero