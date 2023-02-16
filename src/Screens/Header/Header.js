import React from 'react'
import './Header.css'
import Firstbox from '../Firstbox/Firstbox'

const Header = () => {
  return (
    <div className='header'>
    <div className='profile'>
      <div className='photo'>
        <img src='https://mir-s3-cdn-cf.behance.net/user/115/738d671006255931.638e2dbced10c.jpg' alt=''/>
      </div>
      <div className='text'>
        <h3>Knife Lounge Case</h3>
        <p>Eliza Budulatii . follow</p>
      </div>
    </div>
    <Firstbox />
    </div>
   
  )
}

export default Header
