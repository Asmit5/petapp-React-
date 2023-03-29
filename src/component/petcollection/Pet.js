import React from 'react'
import './pet.css'
import img111 from './petphoto/Goldenretriever.jpg'
import img222 from './petphoto/Doberman.jpg'
import img333 from './petphoto/bulldog.jpg'
import img444 from './petphoto/Chihuahua.jpg'
import img555 from './petphoto/japanese.jpg'
import img666 from './petphoto/German.jpg'
import img777 from './petphoto/Husky.jpg'
import img888 from './petphoto/Pug.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Pet = () => {
  return (
    <>
    <div className='collection1'>
        <div className='our-collection'>
            Our Pet Collections
        </div>
        <div className='para11'>
        "Bring joy to your home with a furry companion from our pet selection."
        </div>
        <div className='container11'>
          <div className='items11'>
            <img src={img111}></img>
            <div className='dog'>
              Golden Retriever
            </div>
            <div className='golden'>
              <div className='gender'>
                Gender:
              </div>
              <div className='mf'>
                Male
              </div>
              <div className='agee'>
              <div className='age'>
                Age:
              </div>
              <div className='month'>
                2 months
              </div>
              </div>
            </div>
          </div>
          <div className='items11'>
            <img src={img222}></img>
            <div className='dog'>
              Doberman
            </div>
            <div className='golden'>
              <div className='gender'>
                Gender:
              </div>
              <div className='mf'>
                Male
              </div>
              <div className='agee'>
              <div className='age'>
                Age:
              </div>
              <div className='month'>
                5 months
              </div>
              </div>
            </div>
          </div>
          <div className='items11'>
            <img src={img333}></img>
            <div className='dog'>
              Bulldog
            </div>
            <div className='golden'>
              <div className='gender'>
                Gender:
              </div>
              <div className='mf'>
                Male
              </div>
              <div className='agee'>
              <div className='age'>
                Age:
              </div>
              <div className='month'>
                10 months
              </div>
              </div>
            </div>
          </div>
          <div className='items11'>
            <img src={img444}></img>
            <div className='dog'>
              Chihuahua
            </div>
            <div className='golden'>
              <div className='gender'>
                Gender:
              </div>
              <div className='mf'>
                Female
              </div>
              <div className='agee'>
              <div className='age'>
                Age:
              </div>
              <div className='month'>
                2 months
              </div>
              </div>
            </div>
          </div>
          <div className='items11'>
            <img src={img555}></img>
            <div className='dog'>
              Japanese Spitz
            </div>
            <div className='golden'>
              <div className='gender'>
                Gender:
              </div>
              <div className='mf'>
                Female
              </div>
              <div className='agee'>
              <div className='age'>
                Age:
              </div>
              <div className='month'>
                3 months
              </div>
              </div>
            </div>
          </div>
          <div className='items11'>
            <img src={img666}></img>
            <div className='dog'>
              German Dog
            </div>
            <div className='golden'>
              <div className='gender'>
                Gender:
              </div>
              <div className='mf'>
                Male
              </div>
              <div className='agee'>
              <div className='age'>
                Age:
              </div>
              <div className='month'>
                11 months
              </div>
              </div>
            </div>
          </div>
          <div className='items11'>
            <img src={img777}></img>
            <div className='dog'>
              Husky
            </div>
            <div className='golden'>
              <div className='gender'>
                Gender:
              </div>
              <div className='mf'>
                Male
              </div>
              <div className='agee'>
              <div className='age'>
                Age:
              </div>
              <div className='month'>
                10 months
              </div>
              </div>
            </div>
          </div>
          <div className='items11'>
            <img src={img888}></img>
            <div className='dog'>
              Pug
            </div>
            <div className='golden'>
              <div className='gender'>
                Gender:
              </div>
              <div className='mf'>
                Female
              </div>
              <div className='agee'>
              <div className='age'>
                Age:
              </div>
              <div className='month'>
                9 months
              </div>
              </div>
            </div>
          </div>
        </div>
  <div className='button'>
      <p className='view'>
        View All
      </p>
    <div className='button1'>
    <FontAwesomeIcon icon={faArrowRight} size="xs" style={{color: "#1266f8",fontWeight:"900",height:'12',fontSize:"12"}} />
    </div>
    </div>
  </div>
    
    </>
  )
}

export default Pet