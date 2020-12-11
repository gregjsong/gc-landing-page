import React from 'react';
import './SignUp.scss';

import Button from '../Button/Button';

const SignUp = () => {
  return (
    <div className='sign-up-container' >
      <div className='sign-up-wrapper'>
        <h2>Ready to get started?</h2>
        <p>We are in the business of scaling businesses</p>
        <Button className='sign-up-button'>Get Started</Button>
      </div>
    </div>
  )
}

export default SignUp;