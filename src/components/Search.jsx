import React from 'react'
import { Icon } from '@iconify/react';
import './Search.css';
const Search = () => {
  return (
    <div className='search' onClick={() => {}}>
        <Icon className='icon-search' icon="ic:baseline-search" />
        <span className='info'>Search Movie</span>
    </div>
  )
}

export default Search