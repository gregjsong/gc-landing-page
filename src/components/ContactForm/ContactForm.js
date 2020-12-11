import React from 'react';
import { Icon } from '@iconify/react';

import './ContactForm.scss';
import rocketLaunch from '@iconify-icons/mdi/rocket-launch';

const ContactForm = () => {
  const handleSubmit = (event) => {
    alert('Sorry, this is only an example and your form was not submitted anywhere.')
  }
  return (
    <form
      className='contact-form'
      onSubmit={handleSubmit}>
      <div className='contact-form-header'>
        <Icon
          className='rocket-icon'
          icon={rocketLaunch}
        />
      </div>
      <ul>
        <li>
          <label for='firstName'>First Name</label>
          <input type='text' id='firstName' name='firstName'></input>
        </li>
        <li>
          <label for='lastName'>Last Name</label>
          <input type='text' id='lastName' name='lastName' ></input>
        </li>
        <li>
          <label for='email'>Email</label>
          <input type='email' id='email' name='email' ></input>
        </li>
        <li>
          <label for='company'>Company</label>
          <input type='text' id='company' name='company' ></input>
        </li>
        <li>
          <label for='optional'>Message</label>
          <textarea id='optional' name='optional' ></textarea>
        </li>
        <li>
          <button className='submit-button' type='submit'>Submit</button>
        </li>
      </ul>

    </form>
  )
}

export default ContactForm