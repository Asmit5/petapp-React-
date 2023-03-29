import React from 'react'
import './about.css'
import img1 from './images/photo1.jpeg'
import img2 from './images/photo2.jpeg'
import img3 from './images/photo3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons'



const About = () => {
  return (
    <>
<div className='imagess'>
    <div className='circle1'></div>
    <div className='circle2'></div>
    <div className='image1'>
      <img src={img1}></img>
    </div>
    <div className='image2'>
      <img src={img3}></img>
    </div>
    <div className='image3'>
      <img src={img2}></img>
    </div>
    <div className='aboutus1'>
      <p>About Us</p>
    </div>
    <div className='aboutus2'>
      <p>Pet House & Animal clinic was established with<br/>moto to provide qualitative and affordable animal<br/>healthcare service to your doorstep.</p>
    </div>
    <div className='ticks'>
      <div className='tick'>
      <FontAwesomeIcon icon={faCircleCheck} style={{color: "#3c76e2",}} />
      <p> Comprehensive</p>
      </div>
      <div className='tick'>
      <FontAwesomeIcon icon={faCircleCheck} style={{color: "#3c76e2",}} />
      <p>Professional</p>
      </div>
      <div className='tick'>
      <FontAwesomeIcon icon={faCircleCheck} style={{color: "#3c76e2",}} />
      <p>Compassionate veterinary service.</p>
      </div>
    </div>
    <div className='about-round'>
      <div className='about-round1'>
        Contact Us
      </div>
      <div className='about-round2'>
      <FontAwesomeIcon icon={faArrowRight} style={{
        color: "#3c76e2",fontWeight:"700",height:"12",marginLeft:"10",marginTop:"10px"}} />
      </div>
    </div>
</div>
</>

  )
}

export default About;