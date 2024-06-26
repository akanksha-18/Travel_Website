import "./ContactStyle.css"
import React from 'react'

const ContactForms = () => {
  return (
    <div className="form-container">
      <h1>Sena a message to us!</h1>
      <form>
        <input placeholder="Name"/>
        <input placeholder="Email"/>
        <input placeholder="Subject"/>
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForms
