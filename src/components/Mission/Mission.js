import React from 'react';

import NavBar from '../Navigation/NavBar';
import Footer from '../Footer/Footer';

import './Mission.scss';
import analysisImg1 from '../../assets/img/analysis.jpg';


const Mission = () => {
  return (
    <div className='mission'>
      <NavBar />
      <div className='mission-content'>
        <div className='mission-text'>
          <h3 className='mission-text-title'>We are in the business of scaling businesses</h3>
          <p>GenericCompany is a tech company that helps businesses make their products available to a larger market. Businesses of every size work with us to sell their products online and analyze their performance. </p>
        </div>
        <div className='accent-box'>
          <div className='color-box-1' />
          <div className='color-box-2' />
        </div>
        <div className='mission-section-1'>
          <h5>Implementing analysis into your business</h5>
          <p>With advancements in the tech industry, e-commerce is on the rise and unlikely to slow down in the near future.</p>
          <p>Despite this rise, proper analysis of these business using e-commerce platforms is lagging behind.</p>
          <div className='flex'>
            <div className='flex-text'>
              <p>By removing certain barriers and enabling businesses access to new analytical tools, we believe we can help them scale quicker.</p>
            </div>
            <img
              src={analysisImg1}
              className='analysis-img-1' />
          </div>
          <div className='colored-circle' />
          <div className='colored-triangle' />
        </div>
      </div>
      <Footer />
    </div >

  )
}

export default Mission;