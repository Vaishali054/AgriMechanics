import React from 'react'
import "./workshop.css"
import map from "../../assests/map.png"

export default function Workshop() {
  return (
    <>
      <div className='workshop' id='workshop'>
           <div className='workshop-heading'>
            <div className='letter'>W</div>
            <div className='letter'>O</div>
            <div className='letter'>R</div>
            <div className='letter'>K</div>
            <div className='letter'>S</div>
            <div className='letter'>H</div>
            <div className='letter'>O</div>
            <div className='letter'>P</div>
            <div className='letter'>S</div>
            </div>
           <div className='center'>
           <    img src={map} alt='map' className='map'/>
           </div>  
      </div>
    </>
  )
}
