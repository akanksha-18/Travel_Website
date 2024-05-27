import React from 'react'
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import contactImg from "../Images/2.jpg"
import Footer from '../components/Footer';
import ContactForms from '../components/ContactForms';
const Contact = () => {
  return (
    <>
       <Navbar/>
    <Hero 
     cName="hero-mid"
     heroImg={contactImg}
     title="Contact"
     btnClass="hide"
    />
    <ContactForms/>
    <Footer/>
   </>
  )
}

export default Contact
