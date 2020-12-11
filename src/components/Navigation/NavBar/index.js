import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss'
import InlineIcon from '@iconify/react';
import rocketIcon from '@iconify-icons/mdi/rocket';

import NavDrawer from '../NavDrawer';

const NavBar = () => {
  const items = [
    { title: 'Home', link: '/' },
    { title: 'Mission', link: '/mission' }, { title: 'Pricing', link: '/pricing' },
    { title: 'Contact', link: '/contact' }
  ];
  const listItems = items.map(obj => <NavLink
    to={obj.link}
    key={obj.title}
    className='nav-item'
    activeClassName='active'>{obj.title}</NavLink>);

  //rendering burger icon
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  useEffect(() => {
    window.addEventListener('resize', () =>
      setWidth(window.innerWidth)
    );
  }, []);


  return (
    <div className='nav-bar'>
      <NavLink
        to='/'
        activeClassName='active'
        className='company-logo'>
        <InlineIcon
          icon={rocketIcon}
          className='company-logo' />
        <h4 className='company-logo company-name'>GenericCompany</h4>
      </NavLink>
      <div className='nav-items'>
        {width < breakpoint ? <NavDrawer item={listItems} /> : listItems}
      </div>
    </div>
  )
}

export default NavBar;