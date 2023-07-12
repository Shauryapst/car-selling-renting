import React from 'react';
import './SearchBox.css';
import searchicon from './assets/searchicon.svg';

export const SearchBox = () => {
  return (
    <div className='boxwrapper'>
      <div className='box gap-3'>
        <img className='searchicon' src={searchicon} alt=''/>
        <input className='searchinput' type='text'/>
      </div>
    </div>
  )
}
