import React from 'react'
import "./Features.css"
import vault from '../../assets/vault.jpg'

const Features = () => {
  return (
    <div className='feature_container'>
     
        <h1>The Features</h1>
    <div className='features'>
      <div className='feature__lists'>
      <div className='one'>
         <h1>01</h1>
         <p>INLAYSMADE OF HIGH QUALITY AND DURABLE RIGID FOAM</p>
      </div>
      <div className='one'>
      <h1>02</h1>
       <p>I DON'T KNOW</p>
      </div>

      <div className='one'>
      <h1>03</h1>
         <p>TWO-WAY LOCKABLE</p>
      </div>

      <div className='one'>
      <h1>04</h1>
         <p>DUST AND WATERPROOF ACCORDING TO lP67</p>
      </div>

      <div className='one'>
      <h1>05</h1>
         <p>4 LAYERS (1 BASE AND 3 REMOVABLE)</p>
      </div>

      <div className='one'>
      <h1>06</h1>
         <p>SAFE AND PROTECTION FOR 32 POCKET KNIVES</p>
      </div>
    
      </div>
      <div className='imgs'>
      <img src={vault} alt='/'/>
      </div>
      </div>
    </div>
  )
}

export default Features
