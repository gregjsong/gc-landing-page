import React, { useState, useEffect } from 'react';

import './NavDrawer.scss';

const NavigationDrawer = (props) => {
  const [clicked, setClicked] = useState(false);

  let toggleClass = null;

  const clickHandler = () => {
    // clicked ? setClicked(false) : setClicked(true);
    setClicked(!clicked);
  }

  const navIcon = (
    <div
      className='nav-icon'
      onClick={() => clickHandler()}>
      <div />
      <div />
      <div />
    </div>
  );

  return (
    <div className='nav-drawer'>
      {navIcon}
      <div className={`nav-sidebar ${clicked ? 'show' : 'hide'}`} >
        {props.item}
      </div>
    </div>
  )
}

export default NavigationDrawer;