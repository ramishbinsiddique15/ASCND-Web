import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import RequestForm from '../../components/Request/RequestForm'
import RequestQuote from '../../components/Request/RequestQuote'

const Request = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'ASCND - Request Quote';
  }, [])

  return (
    <>
    <Navbar/>
    <RequestForm/>
    <RequestQuote/>
    <Footer/>
    </>
  )
}

export default Request