import React from 'react'
import '../../CSS/ContactUS.css';
import man from '../../image/man.png';
import skills from '../../image/skills.png'
import degree from '../../image/degree.png'
export default function Skills() {
  return (
    <div className='contact' >
        <div className='man' >
            <img src={man} />
        </div>
        <div className='degree' 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" style={{position:'absolute'}}>
          <img src={degree} />
        </div>
        <div className='skills' >
            <img src={skills} />
        </div>
    </div>
  )
}
