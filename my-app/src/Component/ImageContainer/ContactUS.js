import React from 'react'
import man from '../../image/man.png'
import skills from '../../image/skills.png';
import '../../CSS/ContactUS.css';
import laptop from '../../image/laptop.png';
import mail from '../../image/mail.png';
import specdecoder from '../../image/specdecoder.png'
import degree from '../../image/degree.png';
import awards from '../../image/awards.png';
import moneybag from '../../image/moneybag.png'

function ContactUS() {
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
        <div className='degree' style={{position:'absolute'}}>
          <img src={degree} />
        </div>
        
        <div className='mail' data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500" >
            <img src={mail} />
        </div>
        
        <div className='moneybag' >
            <img src={moneybag} />
        </div>
        <div className='awards' >
            <img src={awards} />
        </div>
    </div>
  )
}

export default ContactUS