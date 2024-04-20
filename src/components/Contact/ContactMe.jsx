import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contactame</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard
                 iconUrl="./mail.svg"
                 text="Joeyblink.t@gmail.com"
                 />
                 <ContactInfoCard
                 iconUrl="./github.svg"
                 text="https://github.com/09Joe"
                 />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe