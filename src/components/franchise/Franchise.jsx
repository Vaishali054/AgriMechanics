import React from 'react'
import franchise from "../../assests/franchise.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import "./franchise.css"

export default function Franchise() {
  return (
    <>
      <div className='vision' id='franchise'>
        <div className='container1'>
          <img src={franchise} alt='vision' className='franchise-img'/>
        </div>
        <div className='container2'>
          <div className='tagline3'>Franchise Model</div>
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
