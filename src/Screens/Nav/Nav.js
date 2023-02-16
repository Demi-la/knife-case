import React from 'react'
import './Nav.css'
import logo from './img/logo.svg'
import me from './img/me.svg'
import free from './img/free.svg'

const Nav = () => {
  return (
    <div className='navbar'>
      <div className='demi'>
       <img className='logo' src={logo} alt='/'/>
        <div className='list'>For You</div>
          <div className='list'> Discover</div>
          <div className='list'>liveStreams</div>
          <div className='list'>Hire</div>
          <div className='list'>Job</div>
        <input type="text" placeholder="Search.."/>
        <button className='btn1'>Log in</button>
        <button className='btn2'>Sign up</button>
        <button className='btn3'><img className='free' src={free} alt ='/'/>Free Trial</button>
        <img className='me' src={me} alt ='/'/>
       


      </div>
    </div>
  )
}

export default Nav
