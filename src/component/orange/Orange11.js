import React from 'react'
import './orange.css'
import img12 from './image12/orange1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Orange11 = () => {
  return (
    <>
    <div className='orange-back'>
      <div className='img-org'>
        <img src={img12}></img>
        <div className='org-para'>
        One More Friend Thousands More Fun!
        </div>
        <div className='org-para1'>
        "Find your furry soulmate at Our Pet Shop."
        </div>
        <div className='org-button'>
          <div className='getnow'>
            Get Now
          </div>
          <div className='circle'>
            <div className='org-arrow'>
            <FontAwesomeIcon icon={faArrowRight} size="xs" style={{
              color: "#ffffff",fontWeight:"300",height:"12",fontSize:"25",marginTop:"5px"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Orange11