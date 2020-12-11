import React from 'react';
import { Icon } from '@iconify/react';
import './Cards.scss';

import chartBoxOutline from '@iconify-icons/mdi/chart-box-outline';
import lockOutline from '@iconify-icons/mdi/lock-outline';
import clipboardTextOutline from '@iconify-icons/mdi/clipboard-text-outline';



class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          icon: chartBoxOutline,
          title: 'Access to Analytics',
          text: 'Real time analysis of key figures made available in desktop and mobile viewing'
        },
        {
          icon: clipboardTextOutline,
          title: 'Recordkeeping',
          text: 'Easily keep track of all of your transactions and more.'
        },
        {
          icon: lockOutline,
          title: 'Secure',
          text: 'Advanced security measures to keep you safe.'
        }
      ]
    }
  }

  render() {
    const cards = this.state.cards;
    const cardsArr = cards.map(obj => {
      return (
        <div
          className='card'
          key={obj.title}>
          <Icon
            icon={obj.icon}
            className='icon' />
          <h4>{obj.title}</h4>
          <p>{obj.text}</p>
        </div>
      )
    })

    return (
      <div className='cards-container'>
        <div className='hr-bar'></div>
        <div className='cards-container-write-up'>
          <h3 className='cards-container-title'>
            How we're the same
        </h3>
          <p className='cards-container-text'>
            At GenericCompany, we offer premium services at fair prices. We take pride in being a leader in fast growing industry of fake companies.
        </p>
        </div>
        <div className='cards'>
          {cardsArr}
        </div >
      </div>
    )
  }
}

export default Cards