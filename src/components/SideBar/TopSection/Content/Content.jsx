import React from 'react'
import { PageButton } from './Pages/PageButton';
import './Content.css'

export const Content = (props) => {
  return (
    <div className='contentList'>
      {props.pages.map((page) => {
        return (
          <PageButton page={page}/>
        );
      })}
        
    </div>
  )
}
