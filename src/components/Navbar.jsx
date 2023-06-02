import React from 'react'
import { Icon } from '@iconify/react';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Icon className='navbar-icon' icon="basil:home-outline" />
        <Icon className='navbar-icon' icon="lucide:ticket" />
        <Icon className='navbar-icon' icon="iconoir:star" />
        <Icon className='navbar-icon' icon="icon-park-outline:people" />
    </div>
  )
}

export default Navbar