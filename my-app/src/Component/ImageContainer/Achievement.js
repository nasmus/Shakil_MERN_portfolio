import React from 'react'
import man from '../../image/man.png'
import skills from '../../image/skills.png';
import '../../CSS/ContactUS.css';
import laptop from '../../image/laptop.png';
import mail from '../../image/mail.png';
import specdecoder from '../../image/specdecoder.png'
import degree from '../../image/degree.png';
import awards from '../../image/awards.png';

export default function Achievement() {
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
        
        <div className='specdecoder' >
            <img src={specdecoder} />
        </div>
        <div className='awards' data-aos="fade-up"
     data-aos-duration="500" >
            <img src={awards} />
        </div>
    </div>
  )
}
