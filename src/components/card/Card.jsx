import React from 'react'
import "./card.css"

export default function Card(props) {
    const {CardUrl, CardHeading}=props;
  return (
    <>
      <div className='card'>

        <div className='image-container'>
        <img className='image-container' src={CardUrl} alt='card'/>
        </div>
        <div className='heading-container'>
            <div className='card-heading center'>

            {CardHeading}
            </div>
            <div className='description'>Empowering Agriculture Through Expert Implement Repairs.
Sow the seeds of success with our precision repair services</div>
            </div>
      </div>

    </>
  )
}
