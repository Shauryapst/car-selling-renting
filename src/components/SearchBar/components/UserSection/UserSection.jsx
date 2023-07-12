import React from 'react'
import notification from './assets/notification.svg';
export const UserSection = () => {
  return (
    <div className='userwrapper flex'>
      <img src={notification} alt='' className='notficationicon'/>
      <img src={notification} alt='' className='notficationicon'/>
    </div>
  )
}
