import React from 'react'
import './footer.css'
import footerimg1 from './footerimage/footer1.jpg'
import footerimg2 from './footerimage/footer2.jpg'
import footerimg3 from './footerimage/footer3.jpg'
import footerimg4 from './footerimage/footer4.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
  import { faTwitter } from '@fortawesome/free-brands-svg-icons'
  import { faInstagram } from '@fortawesome/free-brands-svg-icons'
  import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
  import { faYoutube } from '@fortawesome/free-brands-svg-icons'
  


const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer1'>
            <div className='your-logo'>
                YOUR LOGO<br></br>HERE
            </div>
            <div className='footer-para'>
            "City Pet House & Animal Clinic: Quality <br></br>and affordable animal care at your <br></br>doorstep. Comprehensive, professional, <br></br>and compassionate veterinary services <br></br>by our dedicated and experienced team."
            </div>
        </div>
        <div className='footer2'>
            <div className='phone1'>
                <p className='phone-num'>
                    Phone Number:
                </p>
                <p className='phone-num1'>
                +977-9861859764
                </p>
                <p className='location'>
                    Location:
                </p>
                <p className='location-name'>
                Tahachal-Kathmandu
                </p>
            </div>
        </div>
        <div className='footer3'>
            <div className='menu'>
                <div className='menu1'>
                    Menu
                </div>
                <div className='list'>
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Breeds</li>
                    <li>Shop</li>
                    <li>Contact</li>
                    </ul>
                    </div>

            </div>
            <div className='gallery'>
                <p className='gallery1'>
                    Gallery
                </p>
            </div>
            <div className='footer-box'>
                <div className='footer-items'>
                    <img src={footerimg1}></img>
                </div>
                <div className='footer-items'>
                <img src={footerimg2}></img>
                </div>
                <div className='footer-items'>
                <img src={footerimg3}></img>
                </div>
                <div className='footer-items'>
                <img src={footerimg4}></img>
                </div>
            </div>
            <div className='footer-border'></div>
        </div>
        <div className='copyright'>
            <div className='copyright1'>
            Copyright © 2023 City Pet House & Animal Clinic | All Rights Reserved
            </div>
        </div>
        <div className='facebook-container'>
        <div className='facebook'>
        <FontAwesomeIcon icon={faFacebookF} style={{
            textAlign:"center",marginLeft:"12",fontSize:"20",marginTop:"7px"}}  />
        </div>
        <div className='facebook'>
        <FontAwesomeIcon icon={faTwitter} style={{
            textAlign:"center",marginLeft:"9",fontSize:"20",marginTop:"8px"}} />
        </div>
        <div className='facebook'>
        <FontAwesomeIcon icon={faInstagram} style={{
            textAlign:"center",marginLeft:"8",fontSize:"25",marginTop:"5px",fontWeight:"500"}} />
        </div>
        <div className='facebook'>
        <FontAwesomeIcon icon={faLinkedinIn} style={{
            textAlign:"center",marginLeft:"10",fontSize:"20",marginTop:"7px",fontWeight:"500"}} />
        </div>
        <div className='facebook'>
        <FontAwesomeIcon icon={faYoutube} style={{
            textAlign:"center",marginLeft:"6.5",fontSize:"22",marginTop:"7px",fontWeight:"500"}} />
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer