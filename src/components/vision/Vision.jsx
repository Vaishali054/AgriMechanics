import React from 'react'
import "./vision.css"
import vision from "../../assests/vision.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Vision() {
  return (
    <>
      <div className='vision' id='vision'>
        <div className='container1'>
          <img src={vision} alt='vision' className='vision-img'/>
        </div>
        <div className='container2'>
          <div className='heading1'>GET TO KNOW US</div>
          <div className='tagline3'> Agriculture matters to the future
           of development</div>
           <div className='vision1'>
            <div className='center icon'>

           <FontAwesomeIcon icon={faChevronDown} />
            </div>
           <div className='vision-detail'>
            To provide one stop solution of all
            kind of implements available.

           </div>
            </div>
           <div className='vision2'>
            <div className='center icon'>

           <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className='vision-detail'>
            To provide on time service from
            well trained people

            </div>
            </div>
           <div className='vision3'>
            <div className='center icon'>

           <FontAwesomeIcon icon={faChevronDown}/>
            </div>
            <div className='vision-detail'>

            To open workshops in all
            uttar Pradesh districts within next 1 year, to provide best service at every corner possible</div>
            </div>
        </div>

      
      </div>
    </>
  )
}