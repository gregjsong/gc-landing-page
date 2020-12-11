import React from 'react';

import './Contact.scss';
import InlineIcon from '@iconify/react';
import checkCircle from '@iconify-icons/mdi/check-circle';

import NavBar from '../Navigation/NavBar';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className='contact'>
      <NavBar />
      <div className='contact-content'>
        <div className='contact-header'>
          <div className='contact-header-text'>
            <h4>Contact Us</h4>
            <p>Got any questions? Go ahead, ask us anything.</p>
          </div>
        </div>
        <div className='contact-main'>
          <div className='contact-main-text'>
            <h5>Contact us and we'll arrange a meeting with you within 24 hours.</h5>
            <div className='contact-main-list'>
              <h5>With us you can:</h5>
              <ul>
                <li><InlineIcon
                  icon={checkCircle}
                  className='check-icon' /><p>Launch new products online faster</p></li>
                <li><InlineIcon
                  icon={checkCircle}
                  className='check-icon' /><p>Optimize your business strategy</p></li>
                <li><InlineIcon
                  icon={checkCircle}
                  className='check-icon' /><p>Use your resources more efficiently</p></li>
              </ul>
            </div>
          </div>
          <ContactForm className='contact-form' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact