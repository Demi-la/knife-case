import React from 'react'
import Secondbox from '../secondbox/Secondbox'
import Thirdbox from '../Thirdbox/Thirdbox'
import Video from '../Video/Video.jsx'

import './Firstbox.css'

const Firstbox = () => {
  return (
    <div className='box'>
    <div className='firstbox'>
      <Secondbox />
      <Thirdbox/>
      <Video />
     
    </div>
    {/* <div className='fixed'>
      hello
    </div> */}
    </div>
  )
}

export default Firstbox

