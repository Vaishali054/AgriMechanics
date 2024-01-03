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
            To provide well trained labour professionals

           </div>
            </div>
           <div className='vision2'>
            <div className='center icon'>

           <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className='vision-detail'>
            To provide total solution for the supply chain
            management of spare parts
            </div>
            </div>
           <div className='vision3'>
            <div className='center icon'>

           <FontAwesomeIcon icon={faChevronDown}/>
            </div>
            <div className='vision-detail'>
            Design the workshops for efficient working
            </div>
            </div>
           <div className='vision3'>
            <div className='center icon'>

           <FontAwesomeIcon icon={faChevronDown}/>
            </div>
            <div className='vision-detail'>
            Advertisement and circulation of knowledge through
            our channels
            </div>
            </div>
        </div>

      
      </div>
    </>
  )
}
