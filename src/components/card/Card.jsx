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
            </div>
      </div>

    </>
  )
}
