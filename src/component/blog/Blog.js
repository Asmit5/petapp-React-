import React from 'react'
import './blog.css'
import blog1 from './blogimage/dog1.jpg'
import blog2 from './blogimage/dog2.jpg'
import blog3 from './blogimage/dog3.jpg'
const Blog = () => {
  return (
    <>
    <div className='blog-back'>
      <div className='ourblog'>
        Our Blogs
      </div>
      <div className='container'>
        <div className='blog1'>
          <img src={blog1}></img>
          <div className='blog-para'>
        <div className='blog-para1'>
        How to Choose the Right Bully Stick<br></br> for Your Dog
        </div>
        <div className='blog-para2'>
        Below is an excerpt of porch.com’s article “Moving With Pets? We Have the Experts’ Advice to Do It Properly”. For…
        </div>
      </div>
        </div>
          <div className='blog1'>
            <img src={blog2}></img>
            <div className='blog-para'>
        <div className='blog-para1'>
        Saving Lives: Animal House Shelter <br></br>And Downtown Pet Supply
        </div>
        <div className='blog-para2'>
        Below is an excerpt of porch.com’s article “Moving With Pets? We Have the Experts’ Advice to Do It Properly”. For…
        </div>
      </div>
          </div>
          <div className='blog1'>
            <img src={blog3}></img>
            <div className='blog-para'>
        <div className='blog-para1'>
        Himalayan Yak Chews: 11 Benefits <br></br>You Need To Know
        </div>
        <div className='blog-para2'>
        Below is an excerpt of porch.com’s article “Moving With Pets? We Have the Experts’ Advice to Do It Properly”. For…
        </div>

      </div>
    </div>
  </div>
      

    </div>
    </>
  )
}

export default Blog