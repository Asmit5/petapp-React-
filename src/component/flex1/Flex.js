import React from 'react'
import './flex.css'
import img11 from './images2/photo11.jpg'
import img22 from './images2/photo22.jpeg'
import img33 from './images2/photo33.jpg'
import img44 from './images2/photo44.jpg'
import img55 from './images2/photo55.jpg'
import img66 from './images2/photo66.jpeg'
const Flex = () => {
  return (
    <>
    <div className='flex1'>
      <div className='services'>
        <p>Our Services</p>
      </div>
      <div className='services1'>
        <p>We provide a wide range of products and services for pets such as food, toys, grooming supplies, and veterinary care.<br/> We aim to meet the needs of pet owners and ensure the health and happiness of their furry friends.</p>
      </div>
      <div className='flex2'>
        <div className='items1'>
          <img src={img11} alt="image not found"></img>
          <p>Clinical Treatment</p>
          <div className='para1'>
            Our clinic offers professional veterinary<br/>care with a focus on disease prevention,<br/>diagnosis, and treatment.
          </div>
          <div className='read'>
           <div className='readnow'>Read More</div>
          </div>
          <div className='book'>
          <div className='booknow'>Book an Appointment</div>
          </div>
        </div>
        <div className='items1'>
          <img src={img22} alt="image not found"></img>
          <p>Dog/Cat Grooming</p>
          <div className='para1'>
          We are enhancing our skills, salon, and<br/> equipment to meet the challenges of pet <br/> grooming.
          </div>
          <div className='read'>
          <div className='readnow'>Read More</div>
          </div>
          <div className='book'>
          <div className='booknow'>Book an Appointment</div>
          </div>
        </div>
        <div className='items1'>
          <img src={img33} alt="image not found"></img>
          <p>Home Treatment</p>
          <div className='para1'>
          Our goal is to ensure pet welfare through<br/> home treatment and prompt client <br/> response.
          </div>
          <div className='read'>
          <div className='readnow'>Read More</div>
          </div>
          <div className='book'>
          <div className='booknow'>Book an Appointment</div>
          </div>
        </div>
        <div className='items1'>
          <img src={img44} alt="image not found"></img>
          <p>Puppies Buying & Selling</p>
          <div className='para1'>
          We buy and sell common breed puppies <br/>ike Golden Retriever, Husky, Pug, etc. ,<br/> 100% guarantee on the breed offered.
          </div>
          <div className='read'>
          <div className='readnow'>Read More</div>
          </div>
          <div className='book'>
          <div className='booknow'>Book an Appointment</div>
          </div>
        </div>
        <div className='items1'>
          <img src={img55} alt ="image not found"></img>
          <p>Dog Training</p>
          <div className='para1'>
          Our team of dog trainers is passionate, <br/>dedicated, and has years of professional <br/>experience.
          </div>
          <div className='read'>
          <div className='readnow'>Read More</div>
          </div>
          <div className='book'>
          <div className='booknow'>Book an Appointment</div>
          </div>
        </div>
        <div className='items1'>
          <img src={img66} alt="image not found"></img>
          <p>Dog Matting</p>
          <div className='para1'>
          Quality breeding requires experience and <br/> passion. We can arrange and facilitate <br/> quality breed mating.
          </div>
          <div className='read'>
          <div className='readnow'>Read More</div>
          </div>
          <div className='book'>
          <div className='booknow'>Book an Appointment</div>
          </div>
        </div> 
      </div>
    </div>
    </>
  )
}

export default Flex
