import React from 'react';
import Icon from '@iconify/react';

import './Footer.scss';
import facebookIcon from '@iconify-icons/mdi/facebook';
import twitterIcon from '@iconify-icons/mdi/twitter';
import linkedinIcon from '@iconify-icons/mdi/linkedin';
import youtubeIcon from '@iconify-icons/mdi/youtube';
import instagramIcon from '@iconify-icons/mdi/instagram';

import AnchorList from '../AnchorList/AnchorList';


const Footer = () => {
  const companyList = {
    title: 'Company',
    arr: ['About Us', 'Partners', 'Careers']
  };
  const servicesList = {
    title: 'Services',
    arr: ['Web Development', 'Business Strategy', 'Business Analytics', 'Marketing']
  };
  const supportList = {
    title: 'Support',
    arr: ['Contact Us', 'Terms of Use', 'Privacy Policy']
  };
  return (
    <footer className='footer-container'>
      <div className='company-info'>
        <h4>GenericCompany</h4>
        <p>Some Address</p>
        <p>+1 800 *** ****</p>
        <p>info@genericcompany.com</p>
      </div>
      <AnchorList list={companyList} />
      <AnchorList list={servicesList} />
      <AnchorList list={supportList} />
      <div className='footer-bottom'>
        <div className='hr-line'></div>
        <p className='copyright'>© 2020 All rights reserved</p>
        <div className='sns-list'>
          <Icon icon={linkedinIcon} />
          <Icon icon={facebookIcon} />
          <Icon icon={instagramIcon} />
          <Icon icon={twitterIcon} />
          <Icon icon={youtubeIcon} />
        </div>
      </div>
    </footer >
  )
}

export default Footer