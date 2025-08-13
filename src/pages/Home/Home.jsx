import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HomeHero from '../../components/Home/HomeHero';
import Services from '../../components/Home/Services';
import Why from '../../components/Home/Why';
import Quote from '../../components/Home/Quote';
import Contact from '../../components/Home/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Services />
      <Why />
      <Quote/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
