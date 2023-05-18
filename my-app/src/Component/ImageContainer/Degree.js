import React from 'react'
import man from '../../image/man.png'
import degree from '../../image/degree.png'
import skills from '../../image/skills.png'
import '../../CSS/Degree.css'
import '../../CSS/skills.css'
export default function Degree() {
  return (
    <div className='skills' >
        <div className='man' >
            <img src={man} />
        </div>
        <div >
          <img src={skills} />
        </div>
    </div>
  )
}
