import React from 'react'
import { TopSection } from './TopSection/TopSection';
import './SideBar.css'

const SideBar = () => {
  const pages = [
    {
      name:"DashBoard",
      icon:"dashboard.svg"
    },
    {
      name:"Assets",
      icon:"assets.svg"
    },
    {
      name:"Bookings",
      icon:"booking.svg"
    },
    {
      name:"Buy Cars",
      icon:"buycar.svg"
    },
    {
      name:"Calender",
      icon:"calender.svg"
    },
    {
      name:"Messages",
      icon:"messages.svg"
    },
    {
      name:"Sell Cars",
      icon:"sellcar.svg"
    },
    {
      name:"Services",
      icon:"services.svg"
    },
  ]
  return (
    <div className='sidebar'>
        <TopSection pages={pages}/>
    </div>
  )
}

export default SideBar;
