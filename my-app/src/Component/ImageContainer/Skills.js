import React from 'react'
import '../../CSS/skills.css'
import man from '../../image/man.png';
import skills from '../../image/skills.png'
import degree from '../../image/degree.png'
export default function Skills() {
  return (
    <div className='skills' >
        <div className='man' >
            <img src={man} />
        </div>
        <div className='skills' style={{position:'absolute'}}>
          <img src={degree} />
        </div>
        <div className='skills' >
            <img src={skills} />
        </div>
    </div>
  )
}
