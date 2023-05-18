import React from 'react'
import '../CSS/skills.css'
import man from '../image/man.png';
import skills from '../image/skills.png'


export default function Skills() {
  return (
    <div className='skills' >
        <div className='man' >
            <img src={man} />
        </div>
        <div className='skills' >
            <img src={skills} />
        </div>
    </div>
  )
}
