import React from 'react'
import './Thirdbox.css'

const Thirdbox = () => {
  return (
    <>
    <div className='thirdbox'>
      <div className='logo__container'>
     <div className='logo'>
        <p>LOUNGE CASE</p>
        <strong>KNIFE</strong>
        </div>
        <ul>
          <ol>
            <a href='/'>Product</a>
            <a href='/'>Story</a>
            <a href='/'>The features</a>
            <a href='/'>Who we</a>
          </ol>
        </ul>
        </div>
        <div className='third__text'>
         <h1>Knife Lounge Case</h1>
         <p>The case offers safe protection against impact, heat and water, while appropriately<br/>
          presenting your grail kniives and favourite pieces like  rare or valuable pieces of jewelry.</p>
          <button>MORE</button>
        </div>
    </div>
    <div className='section1'>
     <div className='texts'>
        <h1>Product History</h1>
        <h5 className='first'>After many months of trying, fiddling and texting, <br/>it's ready and i;m very happy that in found the perfect <br/>knife case for me, and at the same time <br/> I'm pround of our first project of it's kind </h5>
      
        <p>I have been colecting knives for a few years, and they are getting more and more. <br/> in the beginning, pouches were enough, but they reached their limits fairly quickly.</p>
        <br/>
        <p>I always thought a storage case was really elegant, and i still remember the first time.<br/> I saw a knife case at a friends place. He proudly showed his closed <br/> case ad i just thought "wow" that's classy, Then he opened both latches.... </p>
        <a  href='/'>read more</a>
        
     </div>

    </div>
    </>
    
  )
}

export default Thirdbox
