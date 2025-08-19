import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import RequestForm from '../../components/Request/RequestForm'
import RequestQuote from '../../components/Request/RequestQuote'

const Request = () => {
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