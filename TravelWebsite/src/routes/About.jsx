import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import night from '../Images/night.jpg'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
const About = () => {
  return (
    <>
       <Navbar/>
    <Hero 
     cName="hero-mid"
     heroImg={night}
     title="About"
     btnClass="hide"
    />
    <AboutUs/>
    <Footer/>
    </>
    
  )
}

export default About
