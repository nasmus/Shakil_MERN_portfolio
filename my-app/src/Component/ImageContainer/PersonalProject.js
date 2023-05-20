import React from 'react'
import man from '../../image/man.png'
import skills from '../../image/skills.png';
import '../../CSS/ContactUS.css';
import laptop from '../../image/laptop.png';
import degree from '../../image/degree.png';
import awards from '../../image/awards.png';
import moneybag from '../../image/moneybag.png'

function PersonalProject() {
  return (
    <div className='contact' >
        <div className='man' >
            <img src={man} />
        </div>
        
        <div className='skills' >
            <img src={skills} />
        </div>
        
        <div className='laptop' >
            <img src={laptop} />
        </div>
        <div className='skills' style={{position:'absolute'}}>
          <img src={degree} />
        </div>
        
        <div className='moneybag' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" >
            <img src={moneybag} />
        </div>
        
    </div>
  )
}

export default PersonalProject