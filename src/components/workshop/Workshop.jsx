import React from 'react'
import "./workshop.css"
import Line from '../line/Line'
import map from "../../assests/map.png"

export default function Workshop() {
  return (
    <>
      <div className=''>
           <div className='heading'>Our Workshops</div>
           <Line/>
           <div className='center'>
           <    img src={map} alt='map' className='map'/>
           </div>  
      </div>
    </>
  )
}
