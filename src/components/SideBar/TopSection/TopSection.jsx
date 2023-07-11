import React from 'react'
import { Logo } from './Logo/Logo'
import { Content } from './Content/Content';
import './TopSection.css';

export const TopSection = (props) => {
  return (
    <div className='topsection'>
        <Logo/>
        <Content pages={props.pages}/>
    </div>
  )
}
