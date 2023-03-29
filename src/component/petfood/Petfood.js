import React from 'react'
import './petfood.css'
import img123 from './foodimage/food1.png'
import img111 from './foodimage/food2.jpg'
import img234 from './foodimage/food3.jpg'
import img222 from './foodimage/food4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Petfood = () => {
  return (
    <>
    <div className='pet-back'>
       <div className='pet-para'>
       Best Seller Products
        </div> 
        <div className='pet-para1'>
        "Nurture your furry friend with love and care at Our Pet Shop."
        </div>
        <div className='container111'>
            <div className='box1'>
                <img src={img123}></img>
                <div className='food-name'>
                Reflex Plus Adult Dog Food <br></br>Salmon
                </div>
                <div className='product'>
                    <div className='product1'>
                        Product:
                    </div>
                    <div className='product2'>
                        Dog Food
                    </div>
                </div>
                <div className='price'>
                    NRS. 1200/-
                </div>
                <div className='view-product'>
                    <p className='pet-product'>View Product</p>
                </div>
            </div>
            <div className='box1'>
                <img src={img111}></img>
                <div className='food-name'>
                Reflex Plus Adult Dog Food <br></br>Salmon
                </div>
                <div className='product'>
                    <div className='product1'>
                        Product:
                    </div>
                    <div className='product2'>
                        Cat Food
                    </div>
                </div>
                <div className='price'>
                    NRS. 1600/-
                </div>
                <div className='view-product'>
                <p className='pet-product'>View Product</p>
                </div>
            </div>
            <div className='box1'>
                <img src={img234}></img>
                <div className='food-name'>
                Reflex Plus Adult Dog Food <br></br>Salmon
                </div>
                <div className='product'>
                    <div className='product1'>
                        Product:
                    </div>
                    <div className='product2'>
                        Toy
                    </div>
                </div>
                <div className='price'>
                    NRS. 2000/-
                </div>
                <div className='view-product'>
                <p className='pet-product'>View Product</p>
                </div>
            </div>
            <div className='box1'>
                <img src={img222}></img>
                <div className='food-name'>
                Reflex Plus Adult Dog Food <br></br>Salmon
                </div>
                <div className='product'>
                    <div className='product1'>
                        Product:
                    </div>
                    <div className='product2'>
                       Toy
                    </div>
                </div>
                <div className='price'>
                    NRS. 700/-
                </div>
                <div className='view-product'>
                <p className='pet-product'>View Product</p>
                </div>
            </div>
            
        </div>
        <div className='pet-button'>
            <p className='pet-view-all'>View All</p>
            <div className='pet-round'>
                <div className='pet--arrow'>
                <FontAwesomeIcon icon={faArrowRight} size="xs" style={{
              color: "#007FFF",fontWeight:"900",height:"12",width:"12",fontSize:"20",marginTop:"5px"}} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Petfood