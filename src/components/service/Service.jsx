import React from 'react'
import "./service.css"
import Card from '../card/Card'
import Service1 from "../../assests/Service1.jpg"
import Service2 from "../../assests/Service2.jpg"
import Service3 from "../../assests/Service3.jpg"
export default function Service() {
  const description1="Empowering Agriculture Through Expert Implement Repairs Sow the seeds of success with our precision repair services"
  const description2="Knowledge makes the person wise and information about subsidies lets the farming thrive"
  const description3="An old sword lets you down in the war. So does the implement in your farms, so better to turn it in for the new ones"
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
              <Card CardUrl={Service1} CardHeading="Repair Implements" CardDescription={description1}/>
              <Card CardUrl={Service2} CardHeading="Knowledge about subsidies" CardDescription={description2}/>
              <Card CardUrl={Service3} CardHeading="Exchange Implements" CardDescription={description3}/>
           </div>
           </div>
      </div>
    </>
  )
}
