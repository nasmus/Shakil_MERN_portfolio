import React from 'react'
import man from '../../image/man.png'
import degree from '../../image/degree.png'
import skills from '../../image/skills.png'
import '../../CSS/ContactUS.css';
export default function Degree() {
  return (
    <div className='skills' >
        <div className='man' >
            <img src={man} />
        </div>
        
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" >
          <img src={skills} />
        </div>
    </div>
  )
}
