import React, { useEffect } from 'react'
import Banner from '../../components/Hero/Banner'

const Hero = () => {

  useEffect(() => {
    
    document.title = 'ASCND - Welcome';
  }, [])

  return (
    <>
    <Banner/>
    </>
  )
}

export default Hero