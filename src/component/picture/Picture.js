import React from 'react'
import './picture.css'
import img1 from './image/photo2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Picture = () => {
  return (
    <>
    <div className='picture'>
      <div className='image'>
        <img src={img1} alt="image not found"></img>  
     </div>
     <div className='text'>
     We provide the best care to our furry friends!
     </div>
     <div className='text1'>
     Top Quality of Pet Product Store.
     </div>
     <div className='picture-arrow'>
      <div className='picture-arrow1'>
      <FontAwesomeIcon icon={faArrowLeft} style={{
        color: "#ffffff",width:"15",height:"14",fontWeight:1100,fontSize:'100',marginLeft:"14",marginTop:"15"}} />
      </div>
      <div className='picture-arrow2'>
      <FontAwesomeIcon icon={faArrowRight} style={{
        color: "#007fff",width:"15",height:"14",fontWeight:1100,fontSize:'100',marginLeft:"14",marginTop:"15"}} />

      </div>
     </div>
    </div>
    </>
  )
}
