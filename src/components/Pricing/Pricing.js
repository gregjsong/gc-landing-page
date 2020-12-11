import React from 'react';
import { Icon } from '@iconify/react';

import './Pricing.scss';

import NavBar from '../Navigation/NavBar';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';

import buildingStore from '@iconify-icons/tabler/building-store';
import buildingSkyscraper from '@iconify-icons/tabler/building-skyscraper';
import homeIcon from '@iconify-icons/tabler/home';



const Pricing = () => {
  const pricingCardsArr = [
    {
      title: 'Standard',
      writeUp: ['Customized website', 'Product list of up to 50 items'],
      icon: homeIcon,
      price: 50
    },
    {
      title: 'Professional',
      writeUp: ['Everything available in Standard', 'Product list of up to 200 items', 'Business strategy implementation'],
      icon: buildingStore,
      price: 100
    },
    {
      title: 'Premium',
      writeUp: [
        'Everything available in Professional', 'Product list of up to 1000 items', 'Real time business analytics', 'Ongoing optimization'
      ],
      icon: buildingSkyscraper,
      price: 300
    },
  ]
  const pricingCards =
    pricingCardsArr.map((obj, index) => {
      const writeUpArr = obj.writeUp.map(item => {
        return (
          <li>{item}</li>
        )
      })
      return (
        <div className={`pricing-card card-${index}`}>
          <div className={`color-box`}>
            <h5 className='pricing-card-title'>{obj.title}</h5>
          </div>
          <Icon
            icon={obj.icon}
            className='pricing-card-icon' />
          <p className='pricing-card-cost'><span className='pricing-card-price'>${obj.price}</span> /mo</p>
          <ul className='pricing-card-text'>{writeUpArr}</ul>
          <Button className={`button-${index}`}>Learn More</Button>
        </div>
      )
    });

  return (
    <div className='pricing'>
      <NavBar />
      <div className='pricing-container'>
        <h4>Find the solution that's right for you</h4>
        <h5>Only pay for what you need, no more</h5>
        <div className='pricing-cards'>
          {pricingCards}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Pricing;