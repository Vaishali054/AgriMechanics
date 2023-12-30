import React from 'react'
import "./service.css"
import Card from '../card/Card'
import Service1 from "../../assests/Service1.jpg"
import Line from '../line/Line'
import Service2 from "../../assests/Service2.jpg"
import Service3 from "../../assests/Service3.jpg"
export default function Service() {
  return (
    <>
      <div className='section' id='services'>
           <div className='heading'>
            <div className='sec-heading center'>

            Our Services
            </div>
            </div>
           {/* <Line/> */}
           <div className=' up'>

           <div className='card-container'>
              <Card CardUrl={Service1} CardHeading="Repair Implements"/>
              <Card CardUrl={Service2} CardHeading="Knowledge about subsidies"/>
              <Card CardUrl={Service3} CardHeading="Exchange Implements"/>
           </div>
           </div>
      </div>
    </>
  )
}
