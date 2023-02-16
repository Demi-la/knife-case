

import React from 'react'
import './Video.css'
import vault from '../../assets/vault.jpg'
import Features from '../Features/Features'
import Contact from '../Contact/Contact'

const Check = () => {
  return (
    <div className='container'>
      <div className='video'>
      <iframe width="100%" height="500"
src="https://www.youtube.com/embed/pA7tzWRvWRE">
</iframe>
    </div>
    <button className='video-btn'>BUY NOW</button>
    <div className='container1'>
     <div className='container2'>
      <div className='image_1'>
        <img src={vault} alt='/'/>
      </div>
      <div className='text__all'>
     <div className='text_5'>
     <h1>Anthracite Case</h1>
     </div>
      <div className='text_1'>
       
        <h4>Outer Dimension:</h4>
        <h5>L * W * H 40 * 30 * 16,8CM</h5>
        <h5>(15.74" * 11.812 * 6.61")</h5>
      </div>
      <div className='text_2'>
      <h4>Interior Dimension:</h4>
        <h5>L * W * H 40 * 30 * 16,8CM</h5>
        <h5>(15.74" * 11.812 * 6.61")</h5>
      </div>
      <div className='text_3'>
        <h4>Weight:</h4>
        <h5>1,98kg (4.67 lbs)</h5>
      </div>
      <div className='text_4'>
        <h3>890 $</h3>
      </div>
      <div className='text_5'></div>
      <button className='last'>BUY</button>
      </div>
     </div>


     <div className=' container2 right__container'>
      <div className='right'>
      <div className='text__all'>
     <div className='right__text'>
     <h1>Anthracite Case</h1>
     </div>
      <div className='text_1'>
       
        <h4>Outer Dimension:</h4>
        <h5>L * W * H 40 * 30 * 16,8CM</h5>
        <h5>(15.74" * 11.812 * 6.61")</h5>
      </div>
      <div className='text_2'>
      <h4>Interior Dimension:</h4>
        <h5>L * W * H 40 * 30 * 16,8CM</h5>
        <h5>(15.74" * 11.812 * 6.61")</h5>
      </div>
      <div className='text_3'>
        <h4>Weight:</h4>
        <h5>1,98kg (4.67 lbs)</h5>
      </div>
      <div className='right_4'>
        <h3>890 $</h3>
      </div>
      <div className='text_5'></div>
      <button className='last'>BUY</button>
      </div>

      <div className='image_1'>
        <img src={vault} alt='/'/>
      </div>

     </div>
     </div>
    </div>
    <Features />
    <Contact/>
    </div>
   
  )
}

export default Check
