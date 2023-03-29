import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {  faHeart } from '@fortawesome/free-solid-svg-icons'
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'



import './navbar.css'

export const Navbar = () => {
  return (
    <>
    <div className='header'>
        <div className='logo12'>
            YOUR LOGO<br></br>HERE
        </div>
        <div className='header-home'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Breeds</li>
                <li>Shop</li>
                <li>Gallery</li>
            </ul>
        </div>
        <div className='header-search'>
            <div className='header-search1'>
                Search...
            </div>
            <div className='search-symbol'>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{
                color:"#ffffff",marginLeft:"12px",marginTop:"12px"}} />
            </div>
        </div>
        <div className='heart-symbol'>
        <FontAwesomeIcon icon={faHeart} style={{
            color: "#007FFF",marginLeft:"1080",position:"relative",bottom:"85"}} />
        </div>
        <div className='header-border-items'>
        <FontAwesomeIcon icon={faCartShopping} style={{color:"#007FFF", marginLeft:"12px",marginTop:"15"}} />
        <div className='header-items'>
            2 items
        </div>
        </div>
    </div>
    </>
  )
}
