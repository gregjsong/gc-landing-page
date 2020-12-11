import React from 'react';
import Icon from '@iconify/react';

import './FeatureIntro.scss';

import businessChat from '../../assets/img/business-chat.svg';
import buildingWebsite from '../../assets/img/building-website.svg';
import data from '../../assets/img/data.svg';
import businessDecision from '../../assets/img/business-decision.svg';
import numeric1Circle from '@iconify-icons/mdi/numeric-1-circle';
import numeric2Circle from '@iconify-icons/mdi/numeric-2-circle';
import numeric3Circle from '@iconify-icons/mdi/numeric-3-circle';
import numeric4Circle from '@iconify-icons/mdi/numeric-4-circle';



class FeatureIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        {
          img: businessChat,
          title: 'Meet Us Online',
          text: 'We conduct our initial meeting online to assess your needs.',
          icon: numeric1Circle
        },
        {
          img: buildingWebsite,
          title: 'Build Your Online Presence',
          text: 'We take your input and build your personalized website to fit all your needs.',
          icon: numeric2Circle
        },
        {
          img: data,
          title: 'Analyze Your Data',
          text: 'We process and analyze your data, looking for any trends and other business implications.',
          icon: numeric3Circle
        },
        {
          img: businessDecision,
          title: 'Report Back to You',
          text: 'We create a plan to increase your business\'s performance and report back to you.',
          icon: numeric4Circle
        }
      ]
    }
  }



  render() {
    const content = this.state.content;
    const contentArr = content.map(obj => {
      return (
        <div
          className='slide'
          key={obj.title}>
          <img src={obj.img} />
          <div className='slide-text'>
            <div className='accent-bar'>
              <div className='color-bar'>
                <div className='icon-bar' />
              </div>
              <div className='icon-square'>
                <Icon
                  icon={obj.icon}
                  className='number-icon' />
              </div>
            </div>
            <div className='slide-text-written'>
              <h4>{obj.title}</h4>
              <p>{obj.text}</p>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className='feat-intro-container'>
        <h3>How it works</h3>
        <div className='slide-container'>
          {contentArr}
        </div>
      </div>
    )
  }
}

export default FeatureIntro