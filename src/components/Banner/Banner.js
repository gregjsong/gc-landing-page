import React from 'react';
import './Banner.scss';

import meetingImg from '../../assets/img/meeting.jpg';

import Button from '../Button/Button';

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='slanted-box'>
      </div>
      <div className='banner-write-up'>
        <h2>Complete Fake Services</h2>
        <h2>from Start to Finish</h2>
        <p>A leader in the world of doing nothing. The only thing we have is a website.</p>
        <Button className='banner-button' primary>Get Started</Button>
      </div>
      <div className='banner-img-container'>
        <img className='banner-img'
          src={meetingImg} />
      </div>
    </div >
  )
}

export default Banner;