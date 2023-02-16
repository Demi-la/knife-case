import React from 'react'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
import './Contact.css'


const Contact = () => {
    const form  = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_l262ust', 'template_w1jmn9a', form.current, 'vSnq1YjhSfmHOrQ38')
  
      e.target.reset()
        
    }; 
  return (
    <div className='email'>
        <h1>Contact us</h1>
        <div className='email__content'>
       <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn-primary'>Send Message</button>

        </form>
        </div>
    </div>
  )
}

export default Contact
