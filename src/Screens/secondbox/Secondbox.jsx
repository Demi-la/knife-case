import React from 'react'
import './secondbox.css'

const Secondbox = () => {
  return (
    <div className='secondbox'>
    
     {/* <div className='btns'>
        <button>save</button>
        <button>more like this</button>
        <button>permalink</button>
     </div> */}
     <div className='text1'>
        <h1>Hi, this is demilade</h1>
      <div className='paragraphs'>
        <p className='p1'>And this is my behance project</p>
        <p className='p2'> I'd like to have got a UI/UX experience so <br/>i came up with idea to create this project.</p>
        <p className='p3'>I'm glad to present you cases for knives! my goal was <br/> to make a minimalistic website and also show user as <br/>much information of this product as possible </p>
      </div>
      <div className='color'>
        <div className='color1'>
        <p>COLOR PALETTE</p>
        < div className='border1'>
        <div className='colors1'>
          <div className='circles'>
          <div className='black'></div>
      
          <div className='white'></div>
          </div>
          <div className='arrows'>
           <p>primary colors</p>
          </div>
        </div>
        
        <div className='colors1 colors2'>
          <div className='circles'>
          <div className=' black grey'></div>
          <div className='white brown'></div>
          </div>
          <div className='arrows'>
           <p>Additional colors</p>
          </div>
        </div>
        </div>
        </div>
        <div className='fonts'>
          <p id='font'>FONTS</p>
          < div className='border2'>
            <div className="first">
            <p>Tittles and subtitles</p>
            <p>Main Text</p>
            </div>
            <div className="second">
              <div className="">----</div>
              <div className="">----</div>
            </div>
            <div className="third">
            <div className='font1'>
            <p>182,42px</p>
            <p>(IBM Plex Sans)</p>
          </div>
          <div className='font2'>
            <p>20, 24, 36px</p>
            <p>Hind Madurai</p>
          </div>
            </div>
      
        
        </div>
        
        </div>
      </div>
     </div>
    </div>
  )
}

export default Secondbox
