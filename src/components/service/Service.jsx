import React from 'react'
import "./service.css"
import Card from '../card/Card'
import Service1 from "../../assests/WhatsApp Image 2023-12-26 at 16.17.30_9b271144.jpg"
import Line from '../line/Line'
import Service2 from "../../assests/Service2.jpg"
import Service3 from "../../assests/Service3.jpg"
export default function Service() {
  return (
    <>
      <div className='section'>
           <div className='heading'>Our Services</div>
           <Line/>
           <div className='card-container'>
              <Card CardUrl={Service1} CardHeading="Repair Implements"/>
              <Card CardUrl={Service2} CardHeading="Knowledge about subsidies"/>
              <Card CardUrl={Service3} CardHeading="Exchange Implements"/>
           </div>
      </div>
    </>
  )
}
